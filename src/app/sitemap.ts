import { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
    const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://brainbazaar.com'

    // Static pages
    const staticPages: MetadataRoute.Sitemap = [
        '',
        '/services',
        '/methodology',
        '/about',
        '/contact',
        '/articles',
    ].map((route) => ({
        url: `${baseUrl}${route}`,
        lastModified: new Date(),
        changeFrequency: (route === '' ? 'weekly' : 'monthly') as 'weekly' | 'monthly',
        priority: route === '' ? 1 : 0.8,
    }))

    // Article pages (in production, fetch from DB)
    const articleSlugs = [
        'understanding-gen-z-shopping-habits',
        'fintech-ux-research-mobile-banking',
        'healthcare-market-entry-apac',
        'brand-perception-tracking-retail',
        'sustainable-consumption-trends',
        'b2b-decision-making-enterprise',
    ]

    const articlePages = articleSlugs.map((slug) => ({
        url: `${baseUrl}/articles/${slug}`,
        lastModified: new Date(),
        changeFrequency: 'monthly' as const,
        priority: 0.6,
    }))

    return [...staticPages, ...articlePages]
}
