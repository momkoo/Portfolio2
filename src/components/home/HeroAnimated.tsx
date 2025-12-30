'use client'

import { useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import Link from 'next/link'
import Image from 'next/image'

const PAPER_PLANE_CONFIG = {
    initial: { x: -165, y: 807, scale: 3.5, opacity: 1, rotate: 22 },
    animate: {
        x: [-165, -120, -75, -30, 15, 61, 107, 153, 199, 245, 290, 334, 375, 408, 423, 418, 401, 378, 364, 371, 402, 444, 488, 533, 580, 625, 670, 712, 750, 786, 818, 842, 853, 848, 824, 787, 743, 698, 663, 649, 645, 657, 687, 726, 769, 814, 859, 905, 951, 997, 1043, 1085, 1114, 1120, 1111, 1093, 1068, 1039, 1006, 971, 934],
        y: [807, 818, 828, 837, 845, 852, 857, 860, 861, 858, 851, 838, 816, 784, 741, 696, 653, 613, 569, 525, 491, 471, 458, 452, 453, 459, 471, 489, 514, 543, 576, 616, 660, 706, 745, 771, 787, 786, 757, 713, 668, 624, 589, 565, 548, 537, 529, 524, 521, 522, 529, 547, 582, 627, 672, 715, 754, 789, 822, 851, 879],
        scale: [3.5, 3.45, 3.4, 3.34, 3.29, 3.24, 3.19, 3.14, 3.09, 3.04, 2.98, 2.93, 2.88, 2.83, 2.78, 2.73, 2.67, 2.62, 2.57, 2.52, 2.47, 2.42, 2.36, 2.31, 2.26, 2.21, 2.16, 2.1, 2.05, 2, 1.95, 1.9, 1.85, 1.79, 1.74, 1.69, 1.64, 1.59, 1.54, 1.48, 1.43, 1.38, 1.33, 1.28, 1.23, 1.17, 1.12, 1.07, 1.02, 0.97, 0.92, 0.87, 0.81, 0.76, 0.71, 0.66, 0.61, 0.56, 0.5, 0.45, 0.4],
        opacity: [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0.5, 0],
        rotate: [22, 21, 20, 19, 17, 15, 13, 10, 7, 2, -5, -14, -27, -48, -77, -98, -109, -109, -89, -54, -26, -12, -5, 7, 12, 19, 27, 37, 44, 50, 60, 75, 95, 116, 142, 164, 176, 206, 248, 268, 281, 307, 329, 343, 351, 356, 360, 363, 366, 372, 383, 403, 436, 462, 476, 486, 494, 501, 506, 510, 513],
    },
    transition: {
        duration: 6,
        delay: 1.5,
        ease: 'linear' as const,
        repeat: Infinity,
        repeatDelay: 3,
    }
}

// Split text animation component
function SplitText({ children, className }: { children: string; className?: string }) {
    const words = children.split(' ')

    return (
        <span className={className}>
            {words.map((word, i) => (
                <motion.span
                    key={i}
                    className="inline-block mr-[0.25em]"
                    initial={{ opacity: 0, y: 50, rotateX: -90 }}
                    animate={{ opacity: 1, y: 0, rotateX: 0 }}
                    transition={{
                        duration: 0.8,
                        delay: 0.1 + i * 0.08,
                        ease: [0.25, 0.46, 0.45, 0.94],
                    }}
                >
                    {word}
                </motion.span>
            ))}
        </span>
    )
}

export default function HeroAnimated() {
    const containerRef = useRef<HTMLElement>(null)

    // Parallax scroll effects
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ['start start', 'end start'],
    })

    // Transform values for parallax
    const y1 = useTransform(scrollYProgress, [0, 1], [0, -100])
    const y2 = useTransform(scrollYProgress, [0, 1], [0, -200])
    const y3 = useTransform(scrollYProgress, [0, 1], [0, -50])
    const rotate = useTransform(scrollYProgress, [0, 1], [0, 15])
    // Removed opacity transform to prevent fade-out on scroll

    return (
        <section
            ref={containerRef}
            className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-slate-50 via-white to-blue-50"
        >
            {/* Animated Background Elements */}
            <div className="absolute inset-0 pointer-events-none">
                {/* SVG Curved Path with Paper Airplane Animation */}
                <svg
                    className="absolute inset-0 w-full h-full"
                    viewBox="0 0 1440 900"
                    preserveAspectRatio="xMidYMid slice"
                    style={{ overflow: 'visible' }}
                >
                    {/* Paper Airplane following the path using keyframes */}
                    <motion.g
                        initial={PAPER_PLANE_CONFIG.initial}
                        animate={PAPER_PLANE_CONFIG.animate}
                        transition={PAPER_PLANE_CONFIG.transition}
                    >
                        {/* Paper Airplane SVG Icon */}
                        <g transform="translate(-24, -24)">
                            <path
                                d="M2 21L23 12 2 3 2 10 17 12 2 14z"
                                fill="#e94560"
                                stroke="#c93850"
                                strokeWidth="1"
                                strokeLinejoin="round"
                            />
                        </g>
                    </motion.g>
                </svg>

                {/* Character Left - Woman with Laptop */}
                <motion.div
                    style={{ y: y1 }}
                    initial={{ opacity: 0, x: -100 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 1, delay: 0.5 }}
                    className="absolute bottom-10 left-[5%] w-40 h-40 md:w-56 md:h-56 lg:w-72 lg:h-72"
                >
                    <motion.div
                        animate={{ y: [0, -8, 0] }}
                        transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
                    >
                        <Image
                            src="/images/hero-woman.png"
                            alt="Woman working on laptop"
                            width={288}
                            height={288}
                            className="w-full h-full object-contain"
                        />
                    </motion.div>
                </motion.div>

                {/* Character Right - Man with Charts */}
                <motion.div
                    style={{ y: y1 }}
                    initial={{ opacity: 0, x: 100 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 1, delay: 0.7 }}
                    className="absolute bottom-10 right-[5%] w-40 h-40 md:w-56 md:h-56 lg:w-72 lg:h-72"
                >
                    <motion.div
                        animate={{ y: [0, -10, 0] }}
                        transition={{ duration: 3.5, repeat: Infinity, ease: 'easeInOut', delay: 0.5 }}
                    >
                        <Image
                            src="/images/hero-man.png"
                            alt="Man analyzing charts"
                            width={288}
                            height={288}
                            className="w-full h-full object-contain"
                        />
                    </motion.div>
                </motion.div>

                {/* Speech Bubbles - Top Left */}
                <motion.div
                    style={{ y: y3 }}
                    initial={{ opacity: 0, scale: 0.5 }}
                    animate={{ opacity: 0.6, scale: 1 }}
                    transition={{ duration: 0.8, delay: 1 }}
                    className="absolute top-32 left-[10%] w-20 h-20 md:w-28 md:h-28"
                >
                    <motion.div
                        animate={{ y: [0, -5, 0], scale: [1, 1.05, 1] }}
                        transition={{ duration: 2.5, repeat: Infinity, ease: 'easeInOut' }}
                    >
                        <Image
                            src="/images/speech-bubbles.png"
                            alt="Speech bubbles"
                            width={112}
                            height={112}
                            className="w-full h-full object-contain opacity-70"
                        />
                    </motion.div>
                </motion.div>

                {/* Magnifier Character - Top Right */}
                <motion.div
                    style={{ y: y2 }}
                    initial={{ opacity: 0, scale: 0.5 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.8, delay: 0.9 }}
                    className="absolute top-40 right-[25%] w-24 h-24 md:w-32 md:h-32"
                >
                    <motion.div
                        animate={{
                            y: [0, -8, 0],
                            rotate: [0, 5, -5, 0],
                        }}
                        transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
                    >
                        <Image
                            src="/images/hero-magnifier.png"
                            alt="Research discovery"
                            width={128}
                            height={128}
                            className="w-full h-full object-contain"
                        />
                    </motion.div>
                </motion.div>
            </div>

            {/* Main Content */}
            <div className="container relative z-10 text-center px-4">
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.5 }}
                    className="max-w-4xl mx-auto"
                >
                    {/* Eyebrow */}
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="text-accent font-medium mb-4 tracking-wider uppercase text-sm"
                    >
                        Global Research Partner
                    </motion.p>

                    {/* Main Title with Split Text Animation */}
                    <h1 className="text-4xl md:text-5xl lg:text-7xl font-bold text-foreground leading-tight mb-6">
                        <SplitText>Real human insights</SplitText>
                        <br />
                        <span className="gradient-text">
                            <SplitText>from around the world</SplitText>
                        </span>
                    </h1>

                    {/* Subtitle */}
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 1.2 }}
                        className="text-lg md:text-xl text-muted max-w-2xl mx-auto mb-10 leading-relaxed"
                    >
                        We help brands understand their customers through qualitative and
                        quantitative research across 55+ countries.
                    </motion.p>

                    {/* CTA Buttons */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 1.4 }}
                        className="flex flex-col sm:flex-row gap-4 justify-center"
                    >
                        <Link href="/contact" className="btn btn-primary group">
                            Get a Quote
                            <motion.span
                                className="inline-block ml-2"
                                animate={{ x: [0, 4, 0] }}
                                transition={{ duration: 1.5, repeat: Infinity }}
                            >
                                →
                            </motion.span>
                        </Link>
                        <Link href="/services" className="btn btn-secondary">
                            Our Services
                        </Link>
                    </motion.div>
                </motion.div>
            </div>

            {/* Scroll Indicator */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 2 }}
                className="absolute bottom-8 left-1/2 -translate-x-1/2"
            >
                <motion.div
                    animate={{ y: [0, 10, 0] }}
                    transition={{ duration: 1.5, repeat: Infinity }}
                    className="w-6 h-10 border-2 border-muted/30 rounded-full flex items-start justify-center p-2"
                >
                    <motion.div className="w-1 h-2 bg-accent rounded-full" />
                </motion.div>
            </motion.div>

            {/* Decorative SVG Wavy Line */}
            <svg
                className="absolute bottom-0 left-0 w-full h-24 text-primary/5"
                viewBox="0 0 1440 100"
                preserveAspectRatio="none"
            >
                <motion.path
                    d="M0,50 C360,100 720,0 1080,50 C1260,75 1440,25 1440,50 L1440,100 L0,100 Z"
                    fill="currentColor"
                    initial={{ pathLength: 0 }}
                    animate={{ pathLength: 1 }}
                    transition={{ duration: 2, delay: 1.5 }}
                />
            </svg>
        </section>
    )
}
