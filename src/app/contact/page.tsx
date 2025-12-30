import { Metadata } from 'next'
import ContactContent from './ContactContent'

export const metadata: Metadata = {
    title: 'Contact',
    description:
        'Get in touch with MindMarket. Contact us for research inquiries, partnership opportunities, or general questions.',
}

export default function ContactPage() {
    return <ContactContent />
}
