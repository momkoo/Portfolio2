import { Variants } from 'framer-motion'

// Check if user prefers reduced motion
export const prefersReducedMotion = () => {
    if (typeof window === 'undefined') return false
    return window.matchMedia('(prefers-reduced-motion: reduce)').matches
}

// Fade in from bottom
export const fadeInUp: Variants = {
    hidden: {
        opacity: 0,
        y: 20
    },
    visible: {
        opacity: 1,
        y: 0,
        transition: {
            duration: 0.8,
            ease: [0.25, 0.1, 0.25, 1],
        }
    }
}

// Fade in from left
export const fadeInLeft: Variants = {
    hidden: {
        opacity: 0,
        x: -20
    },
    visible: {
        opacity: 1,
        x: 0,
        transition: {
            duration: 0.6,
            ease: [0.25, 0.1, 0.25, 1],
        }
    }
}

// Fade in from right
export const fadeInRight: Variants = {
    hidden: {
        opacity: 0,
        x: 20
    },
    visible: {
        opacity: 1,
        x: 0,
        transition: {
            duration: 0.6,
            ease: [0.25, 0.1, 0.25, 1],
        }
    }
}

// Scale up animation
export const scaleUp: Variants = {
    hidden: {
        opacity: 0,
        scale: 0.95
    },
    visible: {
        opacity: 1,
        scale: 1,
        transition: {
            duration: 0.5,
            ease: [0.25, 0.1, 0.25, 1],
        }
    }
}

// Stagger children container
export const staggerContainer: Variants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.1,
            delayChildren: 0.2,
        }
    }
}

// Hero section specific
export const heroTitle: Variants = {
    hidden: {
        opacity: 0,
        y: 30
    },
    visible: {
        opacity: 1,
        y: 0,
        transition: {
            duration: 0.8,
            ease: [0.25, 0.1, 0.25, 1],
        }
    }
}

export const heroCTA: Variants = {
    hidden: {
        opacity: 0,
        y: 20,
        scale: 0.9
    },
    visible: {
        opacity: 1,
        y: 0,
        scale: 1,
        transition: {
            type: 'spring',
            stiffness: 200,
            damping: 20,
            delay: 1,
        }
    }
}

// Card hover animation
export const cardHover: Variants = {
    rest: {
        scale: 1,
        transition: { duration: 0.4, ease: [0.25, 0.1, 0.25, 1] }
    },
    hover: {
        scale: 1.02,
        transition: { duration: 0.4, ease: [0.25, 0.1, 0.25, 1] }
    }
}

export const imageHover: Variants = {
    rest: {
        scale: 1,
        transition: { duration: 0.4, ease: [0.25, 0.1, 0.25, 1] }
    },
    hover: {
        scale: 1.05,
        transition: { duration: 0.4, ease: [0.25, 0.1, 0.25, 1] }
    }
}

// Logo grayscale to color
export const logoHover = {
    rest: {
        filter: 'grayscale(100%)',
        opacity: 0.6,
        transition: { duration: 0.3 }
    },
    hover: {
        filter: 'grayscale(0%)',
        opacity: 1,
        transition: { duration: 0.3 }
    }
}
