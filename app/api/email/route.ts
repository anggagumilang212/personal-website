import { NextResponse } from 'next/server'
import { Resend } from 'resend'

const resend = new Resend(process.env.RESEND_API_KEY)

interface IEmailForm {
  name: string
  email: string
  message: string
}

export const POST = async (request: Request) => {
  try {
    const body: IEmailForm = await request.json()
    const { name, email, message } = body

    if (!name || !email || !message) {
      return NextResponse.json({ status: false, error: 'Missing required fields' }, { status: 400 })
    }

    const { data, error } = await resend.emails.send({
      from: 'Contact Form <contact@anggagumilang.my.id>', // Using the domain from screenshot
      to: process.env.RESEND_TO_EMAIL || 'anggagumilang212@gmail.com', // Target email
      subject: `New message from ${name}`,
      replyTo: email,
      text: `Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`,
    })

    if (error) {
      return NextResponse.json({ status: false, error }, { status: 400 })
    }

    return NextResponse.json({ status: true, data }, { status: 200 })
  } catch (error) {
    return NextResponse.json({ status: false, error }, { status: 500 })
  }
}
