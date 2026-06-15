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

    const isQuote = email === 'via-quote-form@noreply.com'
    const resend = new Resend(apiKey)
    await resend.emails.send({
      from: 'noreply@shubhamsurveyors.in',
      to: process.env.CONTACT_EMAIL ?? 'shubhamsurveyors12@gmail.com',
      subject: isQuote
        ? `New Quote Request: ${service ?? 'Survey'} — ${name}`
        : `New Enquiry: ${service ?? 'General'} — ${name}`,
      html: `
        <h2>${isQuote ? 'New Quote Request (from Cost Estimator)' : 'New Survey Enquiry'}</h2>
        <table cellpadding="6" style="border-collapse:collapse;">
          <tr><td><strong>Name:</strong></td><td>${name}</td></tr>
          <tr><td><strong>Phone:</strong></td><td>${phone}</td></tr>
          ${!isQuote ? `<tr><td><strong>Email:</strong></td><td>${email}</td></tr>` : ''}
          <tr><td><strong>Service:</strong></td><td>${service ?? 'Not specified'}</td></tr>
          ${state ? `<tr><td><strong>State:</strong></td><td>${state}</td></tr>` : ''}
          <tr><td><strong>Details:</strong></td><td style="white-space:pre-line">${projectDetails}</td></tr>
        </table>
      `,
    })

    return NextResponse.json({ success: true })
  } catch (err) {
    console.error('Contact email error:', err)
    return NextResponse.json({ error: 'Failed to send email' }, { status: 500 })
  }
}
