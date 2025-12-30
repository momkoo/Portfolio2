'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { staggerContainer, fadeInUp } from '@/lib/animations'

const steps = [
    {
        number: '01',
        title: 'Discovery & Scoping',
        description:
            'We start by deeply understanding your business objectives, target audience, and the decisions your research needs to inform.',
    },
    {
        number: '02',
        title: 'Research Design',
        description:
            'Our team designs a tailored methodology that combines the right mix of qualitative and quantitative approaches for your goals.',
    },
    {
        number: '03',
        title: 'Field Execution',
        description:
            'Leveraging our global network, we recruit the right participants and execute fieldwork with rigorous quality controls.',
    },
    {
        number: '04',
        title: 'Analysis & Synthesis',
        description:
            'Our researchers analyze data using advanced techniques to uncover patterns, themes, and actionable insights.',
    },
    {
        number: '05',
        title: 'Reporting & Activation',
        description:
            'We deliver compelling reports and workshops that help you turn insights into action across your organization.',
    },
]

const principles = [
    {
        title: 'Human-Centered',
        description: 'Every research project puts real people at the center, ensuring authentic insights.',
    },
    {
        title: 'Rigorous Quality',
        description: 'Multi-layer quality controls ensure data integrity and reliability.',
    },
    {
        title: 'Global Expertise',
        description: 'Local knowledge combined with global standards for consistent excellence.',
    },
    {
        title: 'Agile Delivery',
        description: 'Fast turnaround without compromising on depth or quality.',
    },
]

export default function MethodologyContent() {
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
                        <h1 className="text-white mb-6">Our Methodology</h1>
                        <p className="text-xl text-gray-300 leading-relaxed">
                            A proven approach to research that delivers reliable,
                            actionable insights you can trust.
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* Process Steps */}
            <section className="section">
                <div className="container">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-center max-w-2xl mx-auto mb-16"
                    >
                        <h2 className="text-foreground mb-4">Our Process</h2>
                        <p className="text-muted text-lg">
                            Every project follows a structured approach designed to maximize insight quality.
                        </p>
                    </motion.div>

                    <motion.div
                        variants={staggerContainer}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        className="space-y-8"
                    >
                        {steps.map((step, index) => (
                            <motion.div
                                key={step.number}
                                variants={fadeInUp}
                                className="flex gap-8 items-start"
                            >
                                <div className="hidden md:block text-6xl font-bold text-accent/20">
                                    {step.number}
                                </div>
                                <div className="flex-1 bg-background border border-border rounded-2xl p-8 hover:shadow-lg transition-shadow">
                                    <span className="md:hidden text-accent font-bold mb-2 block">
                                        Step {step.number}
                                    </span>
                                    <h3 className="text-xl font-semibold text-foreground mb-3">
                                        {step.title}
                                    </h3>
                                    <p className="text-muted leading-relaxed">
                                        {step.description}
                                    </p>
                                </div>
                            </motion.div>
                        ))}
                    </motion.div>
                </div>
            </section>

            {/* Principles */}
            <section className="section bg-primary/[0.02]">
                <div className="container">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-center max-w-2xl mx-auto mb-16"
                    >
                        <h2 className="text-foreground mb-4">Guiding Principles</h2>
                        <p className="text-muted text-lg">
                            The values that drive every research project we undertake.
                        </p>
                    </motion.div>

                    <motion.div
                        variants={staggerContainer}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
                    >
                        {principles.map((principle) => (
                            <motion.div
                                key={principle.title}
                                variants={fadeInUp}
                                className="text-center p-6"
                            >
                                <h3 className="text-lg font-semibold text-foreground mb-3">
                                    {principle.title}
                                </h3>
                                <p className="text-muted text-sm">
                                    {principle.description}
                                </p>
                            </motion.div>
                        ))}
                    </motion.div>
                </div>
            </section>

            {/* CTA */}
            <section className="section">
                <div className="container">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-center max-w-2xl mx-auto"
                    >
                        <h2 className="text-foreground mb-4">Ready to get started?</h2>
                        <p className="text-muted text-lg mb-8">
                            Let's discuss how we can apply our methodology to your research needs.
                        </p>
                        <Link href="/contact" className="btn btn-primary">
                            Contact Us
                        </Link>
                    </motion.div>
                </div>
            </section>
        </div>
    )
}
