import { NextRequest, NextResponse } from 'next/server'
import { newsletterSchema } from '@/lib/validations'

export async function POST(request: NextRequest) {
    try {
        const body = await request.json()

        // Validate with Zod
        const result = newsletterSchema.safeParse(body)
        if (!result.success) {
            return NextResponse.json(
                { error: 'Invalid email address' },
                { status: 400 }
            )
        }

        const { email } = result.data

        // TODO: Save to database with Prisma
        // const subscriber = await prisma.newsletterSubscriber.upsert({
        //   where: { email },
        //   create: { email },
        //   update: {},
        // })

        // TODO: Add to email marketing service (e.g., SendGrid contacts)

        console.log('Newsletter subscription:', email)

        return NextResponse.json({
            success: true,
            message: 'Successfully subscribed to the newsletter.',
        })
    } catch (error) {
        console.error('Newsletter subscription error:', error)
        return NextResponse.json(
            { error: 'Internal server error' },
            { status: 500 }
        )
    }
}
