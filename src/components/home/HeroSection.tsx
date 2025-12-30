'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { heroTitle, heroCTA, fadeInUp } from '@/lib/animations'

export default function HeroSection() {
    return (
        <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
            {/* Background gradient */}
            <div className="absolute inset-0 bg-gradient-to-b from-primary/5 via-transparent to-transparent" />

            {/* Decorative elements */}
            <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-accent/10 rounded-full blur-3xl" />
            <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />

            <div className="container relative z-10">
                <div className="max-w-4xl mx-auto text-center">
                    {/* Overline */}
                    <motion.p
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="text-accent font-medium tracking-wider uppercase text-sm mb-6"
                    >
                        Global Research Partner
                    </motion.p>

                    {/* Main Title */}
                    <motion.h1
                        variants={heroTitle}
                        initial="hidden"
                        animate="visible"
                        className="text-foreground mb-6"
                    >
                        Real human insights{' '}
                        <span className="gradient-text">from around the world</span>
                    </motion.h1>

                    {/* Subtitle */}
                    <motion.p
                        variants={fadeInUp}
                        initial="hidden"
                        animate="visible"
                        transition={{ delay: 0.4 }}
                        className="text-xl md:text-2xl text-muted max-w-2xl mx-auto mb-10 leading-relaxed"
                    >
                        We help brands understand their customers through qualitative and
                        quantitative research across 55+ countries.
                    </motion.p>

                    {/* CTA Buttons */}
                    <motion.div
                        variants={heroCTA}
                        initial="hidden"
                        animate="visible"
                        className="flex flex-col sm:flex-row gap-4 justify-center"
                    >
                        <Link href="/contact" className="btn btn-primary">
                            Get a Quote
                            <svg
                                width="20"
                                height="20"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth="2"
                                viewBox="0 0 24 24"
                            >
                                <path d="M5 12h14M12 5l7 7-7 7" />
                            </svg>
                        </Link>
                        <Link href="/services" className="btn btn-secondary">
                            Our Services
                        </Link>
                    </motion.div>

                    {/* Stats Preview */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 1.5 }}
                        className="mt-20 grid grid-cols-3 gap-8 max-w-lg mx-auto"
                    >
                        {[
                            { value: '55+', label: 'Countries' },
                            { value: '300+', label: 'Projects' },
                            { value: '40+', label: 'Clients' },
                        ].map((stat) => (
                            <div key={stat.label} className="text-center">
                                <div className="text-3xl md:text-4xl font-bold text-foreground">
                                    {stat.value}
                                </div>
                                <div className="text-sm text-muted mt-1">{stat.label}</div>
                            </div>
                        ))}
                    </motion.div>
                </div>
            </div>

            {/* Scroll indicator */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 2 }}
                className="absolute bottom-8 left-1/2 -translate-x-1/2"
            >
                <motion.div
                    animate={{ y: [0, 10, 0] }}
                    transition={{ repeat: Infinity, duration: 1.5 }}
                    className="w-6 h-10 rounded-full border-2 border-muted flex items-start justify-center p-2"
                >
                    <div className="w-1 h-2 bg-muted rounded-full" />
                </motion.div>
            </motion.div>
        </section>
    )
}
