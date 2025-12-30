import { Metadata } from 'next'
import ServicesContent from './ServicesContent'

export const metadata: Metadata = {
    title: 'Services',
    description:
        'Explore our comprehensive research services including qualitative research, quantitative research, UX research, and strategic consulting.',
}

export default function ServicesPage() {
    return <ServicesContent />
}
