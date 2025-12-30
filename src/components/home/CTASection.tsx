'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'

export default function CTASection() {
    return (
        <section className="section relative overflow-hidden">
            {/* Background decorations */}
            <div className="absolute inset-0">
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-accent/10 rounded-full blur-3xl" />
            </div>

            <div className="container relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="max-w-3xl mx-auto text-center"
                >
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="text-foreground mb-6"
                    >
                        Ready when you are
                    </motion.h2>

                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.3 }}
                        className="text-xl text-muted mb-10 leading-relaxed"
                    >
                        Let's start a conversation about your research needs.
                        Our team is ready to help you understand your customers and markets.
                    </motion.p>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.4 }}
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
                        <Link href="/methodology" className="btn btn-secondary">
                            Explore Our Approach
                        </Link>
                    </motion.div>

                    {/* Contact info */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.6 }}
                        className="mt-12 pt-8 border-t border-border"
                    >
                        <p className="text-muted text-sm">
                            Or reach us directly at{' '}
                            <a
                                href="mailto:curious@mindmarket.com"
                                className="text-accent hover:underline"
                            >
                                curious@mindmarket.com
                            </a>
                        </p>
                    </motion.div>
                </motion.div>
            </div>
        </section>
    )
}
