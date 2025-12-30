import { Metadata } from 'next'
import Link from 'next/link'
import { notFound } from 'next/navigation'

// Placeholder data - will be replaced with DB query
const articles: Record<string, {
    title: string
    excerpt: string
    content: string
    category: string
    publishedAt: string
    readTime: string
}> = {
    'understanding-gen-z-shopping-habits': {
        title: 'Understanding Gen Z Shopping Habits Across 12 Markets',
        excerpt: 'A comprehensive study of Gen Z consumer behavior reveals surprising patterns in how young consumers make purchasing decisions.',
        content: `
## Executive Summary

Our research explored the shopping behaviors of Gen Z consumers across 12 markets in Asia, Europe, and North America. The findings reveal nuanced patterns that challenge conventional assumptions about this demographic.

## Key Findings

### 1. Values-Driven Purchasing

Gen Z consumers consistently prioritize brand values over price in several categories, particularly fashion and personal care. 67% of respondents indicated they would pay more for products from companies that align with their values.

### 2. Omnichannel Expectations

Unlike previous generations, Gen Z doesn't distinguish between online and offline shopping. They expect seamless experiences across all touchpoints, with 78% using their phones to research products even while in physical stores.

### 3. Social Commerce

Social media platforms are not just discovery tools but active shopping channels. Instagram and TikTok together influence 45% of fashion purchases among Gen Z consumers.

## Methodology

We conducted a mixed-methods study combining:
- Online surveys with 5,000+ respondents
- 120 in-depth interviews
- Social listening analysis across major platforms
- Shop-along observations in 6 markets

## Implications for Brands

1. **Authenticity is non-negotiable** — Gen Z consumers can spot inauthenticity quickly
2. **Invest in social commerce** — Meet them where they already spend time
3. **Create seamless experiences** — Remove friction between online and offline
4. **Take a stand** — Clear brand values are a competitive advantage

## Conclusion

Understanding Gen Z requires moving beyond stereotypes and engaging with the genuine complexity of this demographic. Brands that invest in authentic relationships and values-driven messaging will win their loyalty.
    `,
        category: 'Consumer Insights',
        publishedAt: '2024-01-15',
        readTime: '8 min read',
    },
    'fintech-ux-research-mobile-banking': {
        title: 'Fintech UX Research: Designing for Trust in Mobile Banking',
        excerpt: 'Our deep-dive UX research uncovered key factors that drive user trust in financial applications.',
        content: `
## Overview

Trust is the foundation of financial services. Our UX research for a leading mobile banking application identified specific design patterns and user experience elements that build or erode trust.

## Research Approach

We combined multiple methodologies:
- 50 usability testing sessions
- Eye-tracking studies
- Think-aloud protocols
- Post-task interviews

## Key Trust Factors

### Visual Design
- Clean, professional aesthetics signal competence
- Consistent branding reduces anxiety
- White space creates sense of control

### Transparency
- Clear fee structures build confidence
- Transaction histories should be easily accessible
- Error messages must be helpful, not alarming

### Security Communication
- Balance security messaging without creating fear
- Biometric authentication preferred by 82% of users
- Progress indicators during transactions reduce anxiety

## Recommendations

1. Prioritize clarity in transaction flows
2. Provide real-time feedback for all actions
3. Make security features visible but unobtrusive
4. Design for recovery from errors
    `,
        category: 'UX Research',
        publishedAt: '2024-01-10',
        readTime: '6 min read',
    },
}

// Generate static params for known slugs
export async function generateStaticParams() {
    return Object.keys(articles).map((slug) => ({ slug }))
}

// Generate metadata
export async function generateMetadata({
    params,
}: {
    params: Promise<{ slug: string }>
}): Promise<Metadata> {
    const { slug } = await params
    const article = articles[slug]

    if (!article) {
        return { title: 'Article Not Found' }
    }

    return {
        title: article.title,
        description: article.excerpt,
        openGraph: {
            title: article.title,
            description: article.excerpt,
            type: 'article',
            publishedTime: article.publishedAt,
        },
    }
}

export default async function ArticlePage({
    params,
}: {
    params: Promise<{ slug: string }>
}) {
    const { slug } = await params
    const article = articles[slug]

    if (!article) {
        notFound()
    }

    return (
        <div className="pt-20">
            {/* Hero */}
            <section className="section bg-primary text-white">
                <div className="container">
                    <div className="max-w-3xl">
                        <Link
                            href="/articles"
                            className="inline-flex items-center gap-2 text-gray-400 hover:text-white transition-colors mb-6"
                        >
                            <svg width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                                <path d="M19 12H5M12 19l-7-7 7-7" />
                            </svg>
                            Back to Articles
                        </Link>

                        <div className="flex items-center gap-4 mb-4">
                            <span className="text-xs font-medium text-accent uppercase tracking-wider bg-accent/20 px-3 py-1 rounded-full">
                                {article.category}
                            </span>
                            <span className="text-sm text-gray-400">{article.readTime}</span>
                        </div>

                        <h1 className="text-white mb-6">{article.title}</h1>

                        <time className="text-gray-400">
                            {new Date(article.publishedAt).toLocaleDateString('en-US', {
                                year: 'numeric',
                                month: 'long',
                                day: 'numeric',
                            })}
                        </time>
                    </div>
                </div>
            </section>

            {/* Content */}
            <section className="section">
                <div className="container">
                    <article className="max-w-3xl mx-auto prose prose-lg prose-slate">
                        <div
                            className="text-foreground"
                            dangerouslySetInnerHTML={{ __html: article.content.replace(/\n/g, '<br/>') }}
                        />
                    </article>
                </div>
            </section>

            {/* CTA */}
            <section className="section bg-primary/[0.02]">
                <div className="container">
                    <div className="max-w-3xl mx-auto text-center">
                        <h3 className="text-2xl font-semibold text-foreground mb-4">
                            Want to learn more about our research?
                        </h3>
                        <p className="text-muted mb-6">
                            Get in touch to discuss how we can help with your research needs.
                        </p>
                        <Link href="/contact" className="btn btn-primary">
                            Contact Us
                        </Link>
                    </div>
                </div>
            </section>
        </div>
    )
}
