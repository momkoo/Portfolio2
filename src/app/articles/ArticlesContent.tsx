'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import Link from 'next/link'
import { staggerContainer, fadeInUp } from '@/lib/animations'

// Placeholder articles - will be replaced with DB data
const articles = [
    {
        id: '1',
        slug: 'understanding-gen-z-shopping-habits',
        title: 'Understanding Gen Z Shopping Habits Across 12 Markets',
        excerpt: 'A comprehensive study of Gen Z consumer behavior reveals surprising patterns in how young consumers make purchasing decisions.',
        category: 'Consumer Insights',
        publishedAt: '2024-01-15',
        readTime: '8 min read',
    },
    {
        id: '2',
        slug: 'fintech-ux-research-mobile-banking',
        title: 'Fintech UX Research: Designing for Trust in Mobile Banking',
        excerpt: 'Our deep-dive UX research uncovered key factors that drive user trust in financial applications.',
        category: 'UX Research',
        publishedAt: '2024-01-10',
        readTime: '6 min read',
    },
    {
        id: '3',
        slug: 'healthcare-market-entry-apac',
        title: 'Healthcare Market Entry Strategy for APAC',
        excerpt: 'Strategic market analysis reveals opportunities and challenges for pharmaceutical companies entering Asian markets.',
        category: 'Market Analysis',
        publishedAt: '2024-01-05',
        readTime: '10 min read',
    },
    {
        id: '4',
        slug: 'brand-perception-tracking-retail',
        title: 'Brand Perception Tracking: A Year in Review',
        excerpt: 'Ongoing brand health tracking for a global retail chain shows significant shifts in consumer sentiment.',
        category: 'Brand Research',
        publishedAt: '2023-12-20',
        readTime: '7 min read',
    },
    {
        id: '5',
        slug: 'sustainable-consumption-trends',
        title: 'Sustainable Consumption Trends in 2024',
        excerpt: 'How environmental concerns are reshaping consumer behavior across different demographics.',
        category: 'Consumer Insights',
        publishedAt: '2023-12-15',
        readTime: '5 min read',
    },
    {
        id: '6',
        slug: 'b2b-decision-making-enterprise',
        title: 'B2B Decision Making in Enterprise Software',
        excerpt: 'Understanding the complex buying journey of enterprise software solutions.',
        category: 'B2B Research',
        publishedAt: '2023-12-10',
        readTime: '9 min read',
    },
]

const categories = ['All', 'Consumer Insights', 'UX Research', 'Market Analysis', 'Brand Research', 'B2B Research']

export default function ArticlesContent() {
    const [selectedCategory, setSelectedCategory] = useState('All')

    const filteredArticles = selectedCategory === 'All'
        ? articles
        : articles.filter(article => article.category === selectedCategory)

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
                        <h1 className="text-white mb-6">Articles & Insights</h1>
                        <p className="text-xl text-gray-300 leading-relaxed">
                            Explore our latest case studies, research findings,
                            and thought leadership on market research and consumer behavior.
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* Filter & Articles */}
            <section className="section">
                <div className="container">
                    {/* Category Filter */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="flex flex-wrap gap-3 mb-12"
                    >
                        {categories.map((category) => (
                            <button
                                key={category}
                                onClick={() => setSelectedCategory(category)}
                                className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${selectedCategory === category
                                        ? 'bg-accent text-white'
                                        : 'bg-gray-100 text-muted hover:bg-gray-200'
                                    }`}
                            >
                                {category}
                            </button>
                        ))}
                    </motion.div>

                    {/* Articles Grid */}
                    <motion.div
                        variants={staggerContainer}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
                    >
                        {filteredArticles.map((article) => (
                            <motion.article
                                key={article.id}
                                variants={fadeInUp}
                                className="group"
                            >
                                <Link href={`/articles/${article.slug}`}>
                                    <div className="card h-full flex flex-col">
                                        {/* Image placeholder */}
                                        <div className="aspect-video bg-gradient-to-br from-primary/10 to-accent/10 flex items-center justify-center">
                                            <span className="text-4xl">📄</span>
                                        </div>

                                        {/* Content */}
                                        <div className="p-6 flex flex-col flex-1">
                                            <div className="flex items-center gap-3 mb-3">
                                                <span className="text-xs font-medium text-accent uppercase tracking-wider">
                                                    {article.category}
                                                </span>
                                                <span className="text-xs text-muted">
                                                    {article.readTime}
                                                </span>
                                            </div>

                                            <h3 className="text-lg font-semibold text-foreground mb-2 line-clamp-2 group-hover:text-accent transition-colors">
                                                {article.title}
                                            </h3>

                                            <p className="text-sm text-muted line-clamp-3 flex-1">
                                                {article.excerpt}
                                            </p>

                                            <div className="mt-4 pt-4 border-t border-border">
                                                <time className="text-xs text-muted">
                                                    {new Date(article.publishedAt).toLocaleDateString('en-US', {
                                                        year: 'numeric',
                                                        month: 'long',
                                                        day: 'numeric',
                                                    })}
                                                </time>
                                            </div>
                                        </div>
                                    </div>
                                </Link>
                            </motion.article>
                        ))}
                    </motion.div>

                    {/* Empty state */}
                    {filteredArticles.length === 0 && (
                        <div className="text-center py-16">
                            <p className="text-muted">No articles found in this category.</p>
                        </div>
                    )}
                </div>
            </section>
        </div>
    )
}
