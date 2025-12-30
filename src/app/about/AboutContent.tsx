'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { staggerContainer, fadeInUp } from '@/lib/animations'

const values = [
    {
        title: 'Curiosity',
        description: 'We ask the questions that others miss, diving deep to uncover meaningful insights.',
    },
    {
        title: 'Integrity',
        description: 'We deliver honest, unbiased research that you can trust for critical decisions.',
    },
    {
        title: 'Excellence',
        description: 'We maintain the highest standards in methodology, execution, and delivery.',
    },
    {
        title: 'Partnership',
        description: 'We work as an extension of your team, committed to your success.',
    },
]

const team = [
    { name: 'Sarah Chen', role: 'CEO & Founder', location: 'Singapore' },
    { name: 'Michael Park', role: 'Head of Research', location: 'London' },
    { name: 'Emma Rodriguez', role: 'Director, LATAM', location: 'São Paulo' },
    { name: 'David Kim', role: 'Director, APAC', location: 'Seoul' },
]

export default function AboutContent() {
    return (
        <div className="pt-20">
            {/* Hero */}
            <section className="section bg-primary text-white">
                <div className="container">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        className="max-w-3xl"
                    >
                        <h1 className="text-white mb-6">About BrainBazaar</h1>
                        <p className="text-xl text-gray-300 leading-relaxed">
                            We're a global research company on a mission to help brands truly
                            understand their customers and markets.
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* Story */}
            <section className="section">
                <div className="container">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                        <motion.div
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                        >
                            <h2 className="text-foreground mb-6">Our Story</h2>
                            <div className="space-y-4 text-muted leading-relaxed">
                                <p>
                                    Founded in 2015, BrainBazaar began with a simple belief: that great
                                    business decisions are built on a foundation of genuine human understanding.
                                </p>
                                <p>
                                    Today, we operate across 55+ countries, helping some of the world's
                                    leading brands connect with their customers through rigorous research
                                    and actionable insights.
                                </p>
                                <p>
                                    Our team combines deep local expertise with global standards,
                                    ensuring every project delivers reliable, meaningful results.
                                </p>
                            </div>
                        </motion.div>
                        <motion.div
                            initial={{ opacity: 0, x: 20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            className="aspect-square rounded-3xl bg-gradient-to-br from-primary/10 to-accent/10 flex items-center justify-center"
                        >
                            <span className="text-8xl">🌍</span>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Values */}
            <section className="section bg-primary/[0.02]">
                <div className="container">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-center max-w-2xl mx-auto mb-16"
                    >
                        <h2 className="text-foreground mb-4">Our Values</h2>
                        <p className="text-muted text-lg">
                            The principles that guide everything we do.
                        </p>
                    </motion.div>

                    <motion.div
                        variants={staggerContainer}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
                    >
                        {values.map((value) => (
                            <motion.div
                                key={value.title}
                                variants={fadeInUp}
                                className="p-8 rounded-2xl bg-background border border-border hover:border-accent/30 transition-all"
                            >
                                <h3 className="text-xl font-semibold text-foreground mb-3">
                                    {value.title}
                                </h3>
                                <p className="text-muted text-sm leading-relaxed">
                                    {value.description}
                                </p>
                            </motion.div>
                        ))}
                    </motion.div>
                </div>
            </section>

            {/* Leadership */}
            <section className="section">
                <div className="container">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-center max-w-2xl mx-auto mb-16"
                    >
                        <h2 className="text-foreground mb-4">Leadership Team</h2>
                        <p className="text-muted text-lg">
                            Meet the people driving our mission forward.
                        </p>
                    </motion.div>

                    <motion.div
                        variants={staggerContainer}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
                    >
                        {team.map((member) => (
                            <motion.div
                                key={member.name}
                                variants={fadeInUp}
                                className="text-center"
                            >
                                <div className="w-32 h-32 mx-auto mb-4 rounded-full bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center">
                                    <span className="text-4xl">👤</span>
                                </div>
                                <h3 className="text-lg font-semibold text-foreground">
                                    {member.name}
                                </h3>
                                <p className="text-accent text-sm">{member.role}</p>
                                <p className="text-muted text-sm">{member.location}</p>
                            </motion.div>
                        ))}
                    </motion.div>
                </div>
            </section>

            {/* CTA */}
            <section className="section bg-primary text-white">
                <div className="container">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-center max-w-2xl mx-auto"
                    >
                        <h2 className="text-white mb-4">Join Our Journey</h2>
                        <p className="text-gray-300 text-lg mb-8">
                            Whether you're looking for research services or career opportunities,
                            we'd love to hear from you.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <Link href="/contact" className="btn btn-primary bg-accent">
                                Get in Touch
                            </Link>
                            <Link href="/articles" className="btn btn-secondary border-white/30 text-white hover:text-white">
                                Read Our Insights
                            </Link>
                        </div>
                    </motion.div>
                </div>
            </section>
        </div>
    )
}
