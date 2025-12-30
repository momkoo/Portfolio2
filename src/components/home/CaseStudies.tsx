'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import Image from 'next/image'
import { staggerContainer, fadeInUp, cardHover, imageHover } from '@/lib/animations'

// Placeholder case studies - will be replaced with DB data
const caseStudies = [
    {
        id: '1',
        slug: 'global-fmcg-consumer-insights',
        title: 'Understanding Gen Z Shopping Habits',
        excerpt: 'A comprehensive study of Gen Z consumer behavior across 12 markets.',
        category: 'Consumer Insights',
        image: '/images/case-study-1.jpg',
    },
    {
        id: '2',
        slug: 'fintech-ux-research',
        title: 'Fintech App User Experience Study',
        excerpt: 'Deep-dive UX research for a leading mobile banking application.',
        category: 'UX Research',
        image: '/images/case-study-2.jpg',
    },
    {
        id: '3',
        slug: 'healthcare-market-analysis',
        title: 'Healthcare Market Entry Strategy',
        excerpt: 'Strategic market analysis for pharmaceutical launch in APAC.',
        category: 'Market Analysis',
        image: '/images/case-study-3.jpg',
    },
    {
        id: '4',
        slug: 'retail-brand-perception',
        title: 'Brand Perception Tracking Study',
        excerpt: 'Ongoing brand health tracking for a global retail chain.',
        category: 'Brand Research',
        image: '/images/case-study-4.jpg',
    },
]

export default function CaseStudies() {
    return (
        <section className="section">
            <div className="container">
                {/* Section Header */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="flex flex-col md:flex-row md:items-end md:justify-between gap-4 mb-12"
                >
                    <div>
                        <h2 className="text-foreground mb-2">
                            Case Studies
                        </h2>
                        <p className="text-muted text-lg max-w-xl">
                            Explore how we've helped brands gain meaningful insights
                        </p>
                    </div>
                    <Link
                        href="/articles"
                        className="text-accent font-medium hover:underline flex items-center gap-2"
                    >
                        View all case studies
                        <svg width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                            <path d="M5 12h14M12 5l7 7-7 7" />
                        </svg>
                    </Link>
                </motion.div>

                {/* Case Studies Grid */}
                <motion.div
                    variants={staggerContainer}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
                >
                    {caseStudies.map((study) => (
                        <motion.article
                            key={study.id}
                            variants={fadeInUp}
                            className="group"
                        >
                            <Link href={`/articles/${study.slug}`}>
                                <motion.div
                                    initial="rest"
                                    whileHover="hover"
                                    animate="rest"
                                    className="card overflow-hidden"
                                >
                                    {/* Image */}
                                    <motion.div
                                        variants={imageHover}
                                        className="relative aspect-[4/3] overflow-hidden bg-gray-100"
                                    >
                                        <Image
                                            src={study.image}
                                            alt={study.title}
                                            fill
                                            className="object-cover"
                                            sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 25vw"
                                        />
                                        {/* Overlay */}
                                        <div className="absolute inset-0 bg-primary/0 group-hover:bg-primary/20 transition-all duration-300" />
                                    </motion.div>

                                    {/* Content */}
                                    <div className="p-6">
                                        <span className="text-xs font-medium text-accent uppercase tracking-wider">
                                            {study.category}
                                        </span>
                                        <h3 className="text-lg font-semibold text-foreground mt-2 mb-2 line-clamp-2 group-hover:text-accent transition-colors">
                                            {study.title}
                                        </h3>
                                        <p className="text-sm text-muted line-clamp-2">
                                            {study.excerpt}
                                        </p>
                                    </div>
                                </motion.div>
                            </Link>
                        </motion.article>
                    ))}
                </motion.div>
            </div>
        </section>
    )
}
