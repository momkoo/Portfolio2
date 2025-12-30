import { z } from 'zod'

export const contactFormSchema = z.object({
    name: z
        .string()
        .min(2, 'Name must be at least 2 characters')
        .max(100, 'Name must be less than 100 characters'),
    email: z
        .string()
        .email('Please enter a valid email address'),
    company: z
        .string()
        .max(100, 'Company name must be less than 100 characters')
        .optional()
        .or(z.literal('')),
    message: z
        .string()
        .min(10, 'Message must be at least 10 characters')
        .max(2000, 'Message must be less than 2000 characters'),
    services: z
        .array(z.string())
        .optional()
        .default([]),
    honeypot: z
        .string()
        .max(0, 'Bot detected')
        .optional(),
})

export type ContactFormData = z.infer<typeof contactFormSchema>

export const newsletterSchema = z.object({
    email: z.string().email('Please enter a valid email address'),
})

export type NewsletterFormData = z.infer<typeof newsletterSchema>
