import { Metadata } from 'next'
import AboutContent from './AboutContent'

export const metadata: Metadata = {
    title: 'About | BrainBazaar',
    description: 'Learn about BrainBazaar, our mission, values, and the team driving global human insights.',
}

export default function AboutPage() {
    return <AboutContent />
}
