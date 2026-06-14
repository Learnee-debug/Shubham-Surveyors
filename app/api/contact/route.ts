import { NextRequest, NextResponse } from 'next/server'
import { Resend } from 'resend'

export async function POST(req: NextRequest) {
  try {
    const body = await req.json()
    const { name, phone, email, service, state, projectDetails } = body

    if (!name || !phone || !email || !projectDetails) {
      return NextResponse.json({ error: 'Missing required fields' }, { status: 400 })
    }

    const apiKey = process.env.RESEND_API_KEY
    if (!apiKey || apiKey === 're_your_key_here') {
      console.warn('RESEND_API_KEY not configured — email not sent')
      return NextResponse.json({ success: true })
    }

    const resend = new Resend(apiKey)
    await resend.emails.send({
      from: 'noreply@shubhamsurveyors.in',
      to: process.env.CONTACT_EMAIL ?? 'shubhamsurveyors12@gmail.com',
      subject: `New Enquiry: ${service ?? 'General'} — ${name}`,
      html: `
        <h2>New Survey Enquiry</h2>
        <table>
          <tr><td><strong>Name:</strong></td><td>${name}</td></tr>
          <tr><td><strong>Phone:</strong></td><td>${phone}</td></tr>
          <tr><td><strong>Email:</strong></td><td>${email}</td></tr>
          <tr><td><strong>Service:</strong></td><td>${service ?? 'Not specified'}</td></tr>
          <tr><td><strong>State:</strong></td><td>${state ?? 'Not specified'}</td></tr>
          <tr><td><strong>Project Details:</strong></td><td>${projectDetails}</td></tr>
        </table>
      `,
    })

    return NextResponse.json({ success: true })
  } catch (err) {
    console.error('Contact email error:', err)
    return NextResponse.json({ error: 'Failed to send email' }, { status: 500 })
  }
}
