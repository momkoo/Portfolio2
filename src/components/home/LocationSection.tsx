'use client'

import { motion } from 'framer-motion'
import { MapPin, Phone, Mail, Clock } from 'lucide-react'

// Placeholder data - typically this might come from a DB or config
const locationData = {
    address: '123 Market Research Blvd, Gangnam-gu, Seoul, South Korea',
    googleMapsUrl: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3165.000000000000!2d127.000000!3d37.500000!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMzfCsDMwJzAwLjAiTiAxMjfCsDAwJzAwLjAiRQ!5e0!3m2!1sen!2skr!4v1600000000000!5m2!1sen!2skr', // Sample Gangnam coordinates
    phone: '+82 2-1234-5678',
    email: 'contact@brainbazaar.com',
    hours: 'Mon - Fri: 9:00 AM - 6:00 PM',
}

export default function LocationSection() {
    return (
        <section className="section bg-secondary/30 relative overflow-hidden">
            <div className="container relative z-10">
                <div className="grid lg:grid-cols-2 gap-12 items-center">
                    {/* Text Content */}
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                    >
                        <h2 className="text-3xl md:text-4xl font-bold mb-6">
                            Visit Our Office
                        </h2>
                        <p className="text-muted text-lg mb-8 max-w-md">
                            We welcome you to visit our headquarters in Seoul.
                            Let's discuss how we can help your business grow with global insights.
                        </p>

                        <div className="space-y-6">
                            <div className="flex items-start gap-4">
                                <div className="p-3 bg-white rounded-lg shadow-sm text-accent">
                                    <MapPin className="w-6 h-6" />
                                </div>
                                <div>
                                    <h3 className="font-semibold text-foreground mb-1">Address</h3>
                                    <p className="text-muted">{locationData.address}</p>
                                </div>
                            </div>

                            <div className="flex items-start gap-4">
                                <div className="p-3 bg-white rounded-lg shadow-sm text-accent">
                                    <Phone className="w-6 h-6" />
                                </div>
                                <div>
                                    <h3 className="font-semibold text-foreground mb-1">Phone</h3>
                                    <p className="text-muted">{locationData.phone}</p>
                                </div>
                            </div>

                            <div className="flex items-start gap-4">
                                <div className="p-3 bg-white rounded-lg shadow-sm text-accent">
                                    <Mail className="w-6 h-6" />
                                </div>
                                <div>
                                    <h3 className="font-semibold text-foreground mb-1">Email</h3>
                                    <p className="text-muted">{locationData.email}</p>
                                </div>
                            </div>

                            <div className="flex items-start gap-4">
                                <div className="p-3 bg-white rounded-lg shadow-sm text-accent">
                                    <Clock className="w-6 h-6" />
                                </div>
                                <div>
                                    <h3 className="font-semibold text-foreground mb-1">Business Hours</h3>
                                    <p className="text-muted">{locationData.hours}</p>
                                </div>
                            </div>
                        </div>
                    </motion.div>

                    {/* Map Visual */}
                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="relative h-[400px] rounded-2xl overflow-hidden shadow-lg border border-border"
                    >
                        <iframe
                            src={locationData.googleMapsUrl}
                            width="100%"
                            height="100%"
                            style={{ border: 0 }}
                            allowFullScreen
                            loading="lazy"
                            referrerPolicy="no-referrer-when-downgrade"
                            className="w-full h-full"
                        ></iframe>
                    </motion.div>
                </div>
            </div>

            {/* Background Decoration */}
            <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/2 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
            <div className="absolute bottom-0 left-0 translate-y-1/2 -translate-x-1/2 w-64 h-64 bg-accent/5 rounded-full blur-2xl" />
        </section>
    )
}
