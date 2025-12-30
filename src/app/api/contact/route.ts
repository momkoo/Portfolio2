import { NextRequest, NextResponse } from 'next/server'
import { contactFormSchema } from '@/lib/validations'

// Simple in-memory rate limiting (in production, use Redis)
const rateLimit = new Map<string, { count: number; timestamp: number }>()
const RATE_LIMIT_WINDOW = 5 * 60 * 1000 // 5 minutes
const MAX_REQUESTS = 3

function checkRateLimit(ip: string): boolean {
    const now = Date.now()
    const record = rateLimit.get(ip)

    if (!record || now - record.timestamp > RATE_LIMIT_WINDOW) {
        rateLimit.set(ip, { count: 1, timestamp: now })
        return true
    }

    if (record.count >= MAX_REQUESTS) {
        return false
    }

    record.count++
    return true
}

export async function POST(request: NextRequest) {
    try {
        // Get IP for rate limiting
        const ip =
            request.headers.get('x-forwarded-for')?.split(',')[0] ||
            request.headers.get('x-real-ip') ||
            'unknown'

        // Check rate limit
        if (!checkRateLimit(ip)) {
            return NextResponse.json(
                { error: 'Too many requests. Please try again later.' },
                { status: 429 }
            )
        }

        const body = await request.json()

        // Validate with Zod
        const result = contactFormSchema.safeParse(body)
        if (!result.success) {
            return NextResponse.json(
                { error: 'Validation failed', details: result.error.flatten() },
                { status: 400 }
            )
        }

        const { name, email, company, message, services, honeypot } = result.data

        // Check honeypot (spam protection)
        if (honeypot) {
            // Silently reject but return success to fool bots
            return NextResponse.json({ success: true })
        }

        // TODO: Save to database with Prisma
        // const submission = await prisma.contactSubmission.create({
        //   data: { name, email, company, message, services, ipAddress: ip }
        // })

        // TODO: Send email notification
        // await sendEmail({ to: process.env.ADMIN_EMAIL, subject: 'New Contact Form Submission', ... })

        console.log('Contact form submission:', { name, email, company, message, services })

        return NextResponse.json({
            success: true,
            message: 'Your message has been received. We will get back to you soon.',
        })
    } catch (error) {
        console.error('Contact form error:', error)
        return NextResponse.json(
            { error: 'Internal server error' },
            { status: 500 }
        )
    }
}
