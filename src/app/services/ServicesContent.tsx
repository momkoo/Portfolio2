'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { staggerContainer, fadeInUp } from '@/lib/animations'

const services = [
    {
        id: 'qualitative',
        title: 'Qualitative Research',
        description:
            'Deep insights through in-depth interviews, focus groups, and ethnographic studies that reveal the why behind consumer behavior.',
        features: [
            'In-depth Interviews (IDIs)',
            'Focus Groups',
            'Ethnographic Studies',
            'Online Communities',
            'Diary Studies',
        ],
        icon: (
            <svg width="48" height="48" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
                <path d="M20.25 8.511c.884.284 1.5 1.128 1.5 2.097v4.286c0 1.136-.847 2.1-1.98 2.193-.34.027-.68.052-1.02.072v3.091l-3-3c-1.354 0-2.694-.055-4.02-.163a2.115 2.115 0 01-.825-.242m9.345-8.334a2.126 2.126 0 00-.476-.095 48.64 48.64 0 00-8.048 0c-1.131.094-1.976 1.057-1.976 2.192v4.286c0 .837.46 1.58 1.155 1.951m9.345-8.334V6.637c0-1.621-1.152-3.026-2.76-3.235A48.455 48.455 0 0011.25 3c-2.115 0-4.198.137-6.24.402-1.608.209-2.76 1.614-2.76 3.235v6.226c0 1.621 1.152 3.026 2.76 3.235.577.075 1.157.14 1.74.194V21l4.155-4.155" />
            </svg>
        ),
    },
    {
        id: 'quantitative',
        title: 'Quantitative Research',
        description:
            'Statistically robust data collection and analysis that provides the hard numbers you need to make confident decisions.',
        features: [
            'Online Surveys',
            'CATI/CAPI Studies',
            'Panel Research',
            'Tracking Studies',
            'Conjoint Analysis',
        ],
        icon: (
            <svg width="48" height="48" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
                <path d="M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75C7.5 20.496 6.996 21 6.375 21h-2.25A1.125 1.125 0 013 19.875v-6.75zM9.75 8.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V8.625zM16.5 4.125c0-.621.504-1.125 1.125-1.125h2.25C20.496 3 21 3.504 21 4.125v15.75c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V4.125z" />
            </svg>
        ),
    },
    {
        id: 'ux',
        title: 'UX Research',
        description:
            'User-centric research that optimizes digital experiences and ensures your products meet real user needs.',
        features: [
            'Usability Testing',
            'User Interviews',
            'Card Sorting',
            'A/B Testing Support',
            'Journey Mapping',
        ],
        icon: (
            <svg width="48" height="48" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
                <path d="M9 17.25v1.007a3 3 0 01-.879 2.122L7.5 21h9l-.621-.621A3 3 0 0115 18.257V17.25m6-12V15a2.25 2.25 0 01-2.25 2.25H5.25A2.25 2.25 0 013 15V5.25m18 0A2.25 2.25 0 0018.75 3H5.25A2.25 2.25 0 003 5.25m18 0V12a2.25 2.25 0 01-2.25 2.25H5.25A2.25 2.25 0 013 12V5.25" />
            </svg>
        ),
    },
    {
        id: 'strategy',
        title: 'Strategy Consulting',
        description:
            'Turn research insights into actionable strategies that drive business growth and competitive advantage.',
        features: [
            'Market Entry Strategy',
            'Brand Positioning',
            'Customer Segmentation',
            'Competitive Analysis',
            'Growth Strategy',
        ],
        icon: (
            <svg width="48" height="48" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
                <path d="M12 18v-5.25m0 0a6.01 6.01 0 001.5-.189m-1.5.189a6.01 6.01 0 01-1.5-.189m3.75 7.478a12.06 12.06 0 01-4.5 0m3.75 2.383a14.406 14.406 0 01-3 0M14.25 18v-.192c0-.983.658-1.823 1.508-2.316a7.5 7.5 0 10-7.517 0c.85.493 1.509 1.333 1.509 2.316V18" />
            </svg>
        ),
    },
]

export default function ServicesContent() {
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
                        <h1 className="text-white mb-6">Our Services</h1>
                        <p className="text-xl text-gray-300 leading-relaxed">
                            From qualitative deep dives to large-scale quantitative studies,
                            we offer a full spectrum of research services tailored to your needs.
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* Services List */}
            <section className="section">
                <div className="container">
                    <motion.div
                        variants={staggerContainer}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        className="space-y-24"
                    >
                        {services.map((service, index) => (
                            <motion.div
                                key={service.id}
                                id={service.id}
                                variants={fadeInUp}
                                className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${index % 2 === 1 ? 'lg:flex-row-reverse' : ''
                                    }`}
                            >
                                <div className={index % 2 === 1 ? 'lg:order-2' : ''}>
                                    <div className="w-20 h-20 rounded-2xl bg-accent/10 flex items-center justify-center text-accent mb-6">
                                        {service.icon}
                                    </div>
                                    <h2 className="text-foreground mb-4">{service.title}</h2>
                                    <p className="text-muted text-lg mb-6 leading-relaxed">
                                        {service.description}
                                    </p>
                                    <ul className="space-y-3 mb-8">
                                        {service.features.map((feature) => (
                                            <li key={feature} className="flex items-center gap-3 text-foreground">
                                                <svg
                                                    className="w-5 h-5 text-accent flex-shrink-0"
                                                    fill="none"
                                                    stroke="currentColor"
                                                    strokeWidth="2"
                                                    viewBox="0 0 24 24"
                                                >
                                                    <path d="M5 13l4 4L19 7" />
                                                </svg>
                                                {feature}
                                            </li>
                                        ))}
                                    </ul>
                                    <Link href="/contact" className="btn btn-primary">
                                        Discuss Your Project
                                    </Link>
                                </div>
                                <div className={`${index % 2 === 1 ? 'lg:order-1' : ''}`}>
                                    <div className="aspect-square rounded-3xl bg-gradient-to-br from-primary/10 to-accent/10 flex items-center justify-center">
                                        <div className="text-8xl opacity-50">
                                            {index === 0 && '💬'}
                                            {index === 1 && '📊'}
                                            {index === 2 && '🖥️'}
                                            {index === 3 && '💡'}
                                        </div>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </motion.div>
                </div>
            </section>

            {/* CTA */}
            <section className="section bg-primary/[0.02]">
                <div className="container">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-center max-w-2xl mx-auto"
                    >
                        <h2 className="text-foreground mb-4">
                            Not sure which service you need?
                        </h2>
                        <p className="text-muted text-lg mb-8">
                            Let's discuss your research objectives and find the right approach together.
                        </p>
                        <Link href="/contact" className="btn btn-primary">
                            Schedule a Consultation
                        </Link>
                    </motion.div>
                </div>
            </section>
        </div>
    )
}
