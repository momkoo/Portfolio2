import { Metadata } from 'next'
import ArticlesContent from './ArticlesContent'

export const metadata: Metadata = {
    title: 'Articles',
    description:
        'Explore our latest case studies, research insights, and thought leadership articles on market research and consumer behavior.',
}

export default function ArticlesPage() {
    return <ArticlesContent />
}
