'use client'

import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { motion, AnimatePresence } from 'framer-motion'
import { contactFormSchema, ContactFormData } from '@/lib/validations'

const serviceOptions = [
    'Qualitative Research',
    'Quantitative Research',
    'UX Research',
    'Strategy Consulting',
    'Other',
]

export default function ContactForm() {
    const [isSubmitting, setIsSubmitting] = useState(false)
    const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle')

    const {
        register,
        handleSubmit,
        reset,
        formState: { errors },
    } = useForm<ContactFormData>({
        resolver: zodResolver(contactFormSchema),
        defaultValues: {
            name: '',
            email: '',
            company: '',
            message: '',
            services: [],
            honeypot: '',
        },
    })

    const onSubmit = async (data: ContactFormData) => {
        setIsSubmitting(true)
        setSubmitStatus('idle')

        try {
            const response = await fetch('/api/contact', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(data),
            })

            if (response.ok) {
                setSubmitStatus('success')
                reset()
            } else {
                setSubmitStatus('error')
            }
        } catch {
            setSubmitStatus('error')
        } finally {
            setIsSubmitting(false)
        }
    }

    return (
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
            {/* Honeypot - hidden from real users */}
            <div className="hidden" aria-hidden="true">
                <input
                    type="text"
                    {...register('honeypot')}
                    tabIndex={-1}
                    autoComplete="off"
                />
            </div>

            {/* Name */}
            <div>
                <label htmlFor="name" className="block text-sm font-medium text-foreground mb-2">
                    Name <span className="text-accent">*</span>
                </label>
                <input
                    type="text"
                    id="name"
                    {...register('name')}
                    className={`w-full px-4 py-3 rounded-lg border ${errors.name ? 'border-red-500' : 'border-border'
                        } bg-background text-foreground focus:outline-none focus:border-accent transition-colors`}
                    placeholder="Your name"
                />
                {errors.name && (
                    <p className="mt-1 text-sm text-red-500">{errors.name.message}</p>
                )}
            </div>

            {/* Email */}
            <div>
                <label htmlFor="email" className="block text-sm font-medium text-foreground mb-2">
                    Email <span className="text-accent">*</span>
                </label>
                <input
                    type="email"
                    id="email"
                    {...register('email')}
                    className={`w-full px-4 py-3 rounded-lg border ${errors.email ? 'border-red-500' : 'border-border'
                        } bg-background text-foreground focus:outline-none focus:border-accent transition-colors`}
                    placeholder="you@company.com"
                />
                {errors.email && (
                    <p className="mt-1 text-sm text-red-500">{errors.email.message}</p>
                )}
            </div>

            {/* Company */}
            <div>
                <label htmlFor="company" className="block text-sm font-medium text-foreground mb-2">
                    Company <span className="text-muted">(optional)</span>
                </label>
                <input
                    type="text"
                    id="company"
                    {...register('company')}
                    className="w-full px-4 py-3 rounded-lg border border-border bg-background text-foreground focus:outline-none focus:border-accent transition-colors"
                    placeholder="Your company"
                />
            </div>

            {/* Services */}
            <fieldset>
                <legend className="block text-sm font-medium text-foreground mb-3">
                    Services of Interest
                </legend>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {serviceOptions.map((service) => (
                        <label
                            key={service}
                            className="flex items-center gap-3 cursor-pointer"
                        >
                            <input
                                type="checkbox"
                                value={service}
                                {...register('services')}
                                className="w-5 h-5 rounded border-border text-accent focus:ring-accent"
                            />
                            <span className="text-sm text-foreground">{service}</span>
                        </label>
                    ))}
                </div>
            </fieldset>

            {/* Message */}
            <div>
                <label htmlFor="message" className="block text-sm font-medium text-foreground mb-2">
                    Message <span className="text-accent">*</span>
                </label>
                <textarea
                    id="message"
                    {...register('message')}
                    rows={5}
                    className={`w-full px-4 py-3 rounded-lg border ${errors.message ? 'border-red-500' : 'border-border'
                        } bg-background text-foreground focus:outline-none focus:border-accent transition-colors resize-none`}
                    placeholder="Tell us about your project..."
                />
                {errors.message && (
                    <p className="mt-1 text-sm text-red-500">{errors.message.message}</p>
                )}
            </div>

            {/* Submit Button */}
            <button
                type="submit"
                disabled={isSubmitting}
                className="btn btn-primary w-full disabled:opacity-50 disabled:cursor-not-allowed"
            >
                {isSubmitting ? (
                    <span className="flex items-center gap-2">
                        <svg className="animate-spin w-5 h-5" fill="none" viewBox="0 0 24 24">
                            <circle
                                className="opacity-25"
                                cx="12"
                                cy="12"
                                r="10"
                                stroke="currentColor"
                                strokeWidth="4"
                            />
                            <path
                                className="opacity-75"
                                fill="currentColor"
                                d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                            />
                        </svg>
                        Sending...
                    </span>
                ) : (
                    'Send Message'
                )}
            </button>

            {/* Status Messages */}
            <AnimatePresence mode="wait">
                {submitStatus === 'success' && (
                    <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0 }}
                        className="p-4 rounded-lg bg-green-50 text-green-800 text-sm"
                    >
                        ✓ Thank you! We've received your message and will get back to you soon.
                    </motion.div>
                )}
                {submitStatus === 'error' && (
                    <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0 }}
                        className="p-4 rounded-lg bg-red-50 text-red-800 text-sm"
                    >
                        ✕ Something went wrong. Please try again or email us directly.
                    </motion.div>
                )}
            </AnimatePresence>
        </form>
    )
}
