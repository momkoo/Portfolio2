import { Metadata } from 'next'
import MethodologyContent from './MethodologyContent'

export const metadata: Metadata = {
    title: 'Methodology',
    description:
        'Learn about our proven research methodology that ensures reliable, actionable insights from consumers worldwide.',
}

export default function MethodologyPage() {
    return <MethodologyContent />
}
