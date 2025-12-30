'use client'

import { motion } from 'framer-motion'
import ContactForm from '@/components/forms/ContactForm'

const contactInfo = [
    {
        title: 'Email',
        value: 'curious@mindmarket.com',
        href: 'mailto:curious@mindmarket.com',
        icon: (
            <svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
                <path d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
            </svg>
        ),
    },
    {
        title: 'Phone',
        value: '+1 (555) 123-4567',
        href: 'tel:+15551234567',
        icon: (
            <svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
                <path d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
            </svg>
        ),
    },
    {
        title: 'Office',
        value: '123 Research Lane, Singapore 123456',
        href: 'https://maps.google.com',
        icon: (
            <svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
                <path d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                <path d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
            </svg>
        ),
    },
]

export default function ContactContent() {
    return (
        <div className="pt-20">
            {/* Hero */}
            <section className="section bg-primary text-white">
                <div className="container">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        className="max-w-3xl"
                    >
                        <h1 className="text-white mb-6">Get in Touch</h1>
                        <p className="text-xl text-gray-300 leading-relaxed">
                            Ready to start a research project? Have a question?
                            We'd love to hear from you.
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* Contact Form & Info */}
            <section className="section">
                <div className="container">
                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-16">
                        {/* Form */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="lg:col-span-2"
                        >
                            <h2 className="text-2xl font-semibold text-foreground mb-6">
                                Send us a message
                            </h2>
                            <ContactForm />
                        </motion.div>

                        {/* Contact Info */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.2 }}
                            className="space-y-8"
                        >
                            <div>
                                <h3 className="text-xl font-semibold text-foreground mb-6">
                                    Contact Information
                                </h3>
                                <div className="space-y-6">
                                    {contactInfo.map((info) => (
                                        <a
                                            key={info.title}
                                            href={info.href}
                                            target={info.title === 'Office' ? '_blank' : undefined}
                                            rel={info.title === 'Office' ? 'noopener noreferrer' : undefined}
                                            className="flex items-start gap-4 group"
                                        >
                                            <div className="w-12 h-12 rounded-lg bg-accent/10 flex items-center justify-center text-accent flex-shrink-0 group-hover:bg-accent group-hover:text-white transition-all">
                                                {info.icon}
                                            </div>
                                            <div>
                                                <p className="text-sm text-muted">{info.title}</p>
                                                <p className="text-foreground group-hover:text-accent transition-colors">
                                                    {info.value}
                                                </p>
                                            </div>
                                        </a>
                                    ))}
                                </div>
                            </div>

                            {/* Response Time */}
                            <div className="p-6 rounded-2xl bg-primary/[0.02] border border-border">
                                <h4 className="font-semibold text-foreground mb-2">
                                    Response Time
                                </h4>
                                <p className="text-sm text-muted">
                                    We typically respond within 24 hours during business days.
                                    For urgent inquiries, please call us directly.
                                </p>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>
        </div>
    )
}
