'use client'

import { useRef, useEffect, useState } from 'react'
import { motion, useInView } from 'framer-motion'

interface CounterProps {
    end: number
    suffix?: string
    duration?: number
}

function Counter({ end, suffix = '', duration = 2 }: CounterProps) {
    const [count, setCount] = useState(0)
    const ref = useRef<HTMLSpanElement>(null)
    const isInView = useInView(ref, { once: true })

    useEffect(() => {
        if (!isInView) return

        let startTime: number
        let animationFrame: number

        const animate = (currentTime: number) => {
            if (!startTime) startTime = currentTime
            const progress = Math.min((currentTime - startTime) / (duration * 1000), 1)

            // Ease out cubic
            const easeOut = 1 - Math.pow(1 - progress, 3)
            setCount(Math.floor(easeOut * end))

            if (progress < 1) {
                animationFrame = requestAnimationFrame(animate)
            } else {
                setCount(end)
            }
        }

        animationFrame = requestAnimationFrame(animate)
        return () => cancelAnimationFrame(animationFrame)
    }, [isInView, end, duration])

    return (
        <span ref={ref}>
            {count}{suffix}
        </span>
    )
}

const stats = [
    { value: 55, suffix: '+', label: 'Countries', description: 'Global presence' },
    { value: 300, suffix: '+', label: 'Projects', description: 'Completed successfully' },
    { value: 40, suffix: '+', label: 'Clients', description: 'Trust our expertise' },
    { value: 98, suffix: '%', label: 'Satisfaction', description: 'Client retention rate' },
]

export default function StatsCounter() {
    return (
        <section className="section bg-primary text-white">
            <div className="container">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="text-center max-w-2xl mx-auto mb-16"
                >
                    <h2 className="text-white mb-4">
                        Trusted by leading brands worldwide
                    </h2>
                    <p className="text-gray-400 text-lg">
                        Our track record speaks for itself
                    </p>
                </motion.div>

                <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
                    {stats.map((stat, index) => (
                        <motion.div
                            key={stat.label}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: index * 0.1 }}
                            className="text-center"
                        >
                            <div className="text-5xl md:text-6xl lg:text-7xl font-bold mb-2">
                                <span className="gradient-text">
                                    <Counter end={stat.value} suffix={stat.suffix} />
                                </span>
                            </div>
                            <div className="text-xl font-semibold text-white mb-1">
                                {stat.label}
                            </div>
                            <div className="text-sm text-gray-500">
                                {stat.description}
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    )
}
