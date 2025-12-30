'use client'

import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

// Register plugin
if (typeof window !== 'undefined') {
    gsap.registerPlugin(ScrollTrigger)
}

interface UseScrollAnimationOptions {
    trigger?: string | Element
    start?: string
    end?: string
    scrub?: boolean | number
    markers?: boolean
    toggleActions?: string
    pin?: boolean
    once?: boolean
}

export function useScrollAnimation<T extends Element>(
    callback: (element: T, gsapInstance: typeof gsap) => gsap.core.Timeline | gsap.core.Tween | void,
    options: UseScrollAnimationOptions = {},
    dependencies: React.DependencyList = []
) {
    const elementRef = useRef<T>(null)

    useEffect(() => {
        // Check for reduced motion preference
        const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches
        if (prefersReducedMotion) return

        const element = elementRef.current
        if (!element) return

        const ctx = gsap.context(() => {
            const animation = callback(element, gsap)

            if (animation) {
                ScrollTrigger.create({
                    trigger: options.trigger || element,
                    start: options.start || 'top 80%',
                    end: options.end || 'bottom 20%',
                    scrub: options.scrub || false,
                    markers: options.markers || false,
                    toggleActions: options.toggleActions || 'play none none none',
                    pin: options.pin || false,
                    once: options.once !== false, // Default to true
                    animation,
                })
            }
        }, element)

        return () => ctx.revert()
    }, dependencies)

    return elementRef
}

// Simple fade-in animation hook
export function useFadeIn<T extends Element>(
    direction: 'up' | 'down' | 'left' | 'right' = 'up',
    options: UseScrollAnimationOptions = {}
) {
    const getTransform = () => {
        switch (direction) {
            case 'up': return { y: 30 }
            case 'down': return { y: -30 }
            case 'left': return { x: 30 }
            case 'right': return { x: -30 }
            default: return { y: 30 }
        }
    }

    return useScrollAnimation<T>(
        (element, gsapInstance) => {
            return gsapInstance.from(element, {
                opacity: 0,
                ...getTransform(),
                duration: 0.8,
                ease: 'power2.out',
            })
        },
        options
    )
}

// Stagger children animation hook
export function useStaggerChildren<T extends Element>(
    childSelector: string,
    options: UseScrollAnimationOptions = {}
) {
    return useScrollAnimation<T>(
        (element, gsapInstance) => {
            const children = element.querySelectorAll(childSelector)
            return gsapInstance.from(children, {
                opacity: 0,
                y: 20,
                duration: 0.6,
                stagger: 0.1,
                ease: 'power2.out',
            })
        },
        options
    )
}

// Counter animation hook
export function useCounter(
    endValue: number,
    duration: number = 2,
    options: UseScrollAnimationOptions = {}
) {
    const elementRef = useScrollAnimation<HTMLElement>(
        (element, gsapInstance) => {
            const counter = { value: 0 }
            return gsapInstance.to(counter, {
                value: endValue,
                duration,
                ease: 'power2.out',
                onUpdate: () => {
                    element.textContent = Math.round(counter.value).toString()
                },
            })
        },
        options
    )

    return elementRef
}
