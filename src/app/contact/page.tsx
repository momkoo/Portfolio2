import { Metadata } from 'next'
import ContactContent from './ContactContent'

export const metadata: Metadata = {
    title: 'Contact | BrainBazaar',
    description: 'Contact BrainBazaar for global research insights and partnership opportunities.',
}

export default function ContactPage() {
    return <ContactContent />
}
