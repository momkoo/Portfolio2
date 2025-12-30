export interface OrganizationJsonLd {
    '@context': 'https://schema.org'
    '@type': 'Organization'
    name: string
    url: string
    logo?: string
    description?: string
    contactPoint?: {
        '@type': 'ContactPoint'
        telephone?: string
        email?: string
        contactType: string
    }
    sameAs?: string[]
}

export interface ArticleJsonLd {
    '@context': 'https://schema.org'
    '@type': 'Article'
    headline: string
    description: string
    author: { '@type': 'Organization'; name: string }
    publisher: {
        '@type': 'Organization'
        name: string
        logo?: { '@type': 'ImageObject'; url: string }
    }
    datePublished: string
    dateModified?: string
    image?: string
    mainEntityOfPage?: { '@type': 'WebPage'; '@id': string }
}

export function generateOrganizationJsonLd(): OrganizationJsonLd {
    return {
        '@context': 'https://schema.org',
        '@type': 'Organization',
        name: 'BrainBazaar',
        url: 'https://brainbazaar.com',
        logo: 'https://brainbazaar.com/logo.png',
        description:
            'Global research company helping brands understand their customers through qualitative and quantitative research across 55+ countries.',
        contactPoint: {
            '@type': 'ContactPoint',
            email: 'curious@brainbazaar.com',
            contactType: 'customer service',
        },
        sameAs: [
            'https://linkedin.com/company/brainbazaar',
            'https://twitter.com/brainbazaar',
        ],
    }
}

export function generateArticleJsonLd(article: {
    title: string
    excerpt: string
    publishedAt: string
    slug: string
}): ArticleJsonLd {
    const baseUrl = 'https://brainbazaar.com'

    return {
        '@context': 'https://schema.org',
        '@type': 'Article',
        headline: article.title,
        description: article.excerpt,
        author: {
            '@type': 'Organization',
            name: 'BrainBazaar',
        },
        publisher: {
            '@type': 'Organization',
            name: 'BrainBazaar',
            logo: {
                '@type': 'ImageObject',
                url: `${baseUrl}/logo.png`,
            },
        },
        datePublished: article.publishedAt,
        mainEntityOfPage: {
            '@type': 'WebPage',
            '@id': `${baseUrl}/articles/${article.slug}`,
        },
    }
}
