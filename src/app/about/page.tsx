import { Metadata } from 'next'
import AboutContent from './AboutContent'

export const metadata: Metadata = {
    title: 'About',
    description:
        'Learn about MindMarket - a global research company helping brands understand their customers across 55+ countries.',
}

export default function AboutPage() {
    return <AboutContent />
}
