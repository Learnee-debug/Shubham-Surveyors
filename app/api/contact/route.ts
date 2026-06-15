import { NextRequest, NextResponse } from 'next/server'
import nodemailer from 'nodemailer'

export async function POST(req: NextRequest) {
  try {
    const body = await req.json()
    const { name, phone, email, service, state, projectDetails } = body

    if (!name || !phone || !projectDetails) {
      return NextResponse.json({ error: 'Missing required fields' }, { status: 400 })
    }

    const gmailUser = process.env.GMAIL_USER
    const gmailPass = process.env.GMAIL_APP_PASSWORD

    if (!gmailUser || !gmailPass) {
      console.warn('Gmail credentials not configured — email not sent')
      return NextResponse.json({ success: true })
    }

    const isQuote = email === 'via-quote-form@noreply.com'

    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: { user: gmailUser, pass: gmailPass },
    })

    await transporter.sendMail({
      from: `"Shubham Surveyors Website" <${gmailUser}>`,
      to: gmailUser,
      replyTo: isQuote ? undefined : email,
      subject: isQuote
        ? `New Quote Request: ${service ?? 'Survey'} — ${name}`
        : `New Enquiry: ${service ?? 'General'} — ${name}`,
      html: `
        <div style="font-family:sans-serif;max-width:560px;margin:0 auto;padding:24px;border:1px solid #eee;">
          <h2 style="color:#0D1B2A;margin-bottom:16px;">${isQuote ? '📋 New Quote Request' : '📬 New Contact Enquiry'}</h2>
          <table cellpadding="8" style="border-collapse:collapse;width:100%;">
            <tr style="border-bottom:1px solid #eee;"><td style="color:#666;width:140px;"><strong>Name</strong></td><td>${name}</td></tr>
            <tr style="border-bottom:1px solid #eee;"><td style="color:#666;"><strong>Phone</strong></td><td>${phone}</td></tr>
            ${!isQuote ? `<tr style="border-bottom:1px solid #eee;"><td style="color:#666;"><strong>Email</strong></td><td>${email}</td></tr>` : ''}
            <tr style="border-bottom:1px solid #eee;"><td style="color:#666;"><strong>Service</strong></td><td>${service ?? 'Not specified'}</td></tr>
            ${state ? `<tr style="border-bottom:1px solid #eee;"><td style="color:#666;"><strong>State</strong></td><td>${state}</td></tr>` : ''}
            <tr><td style="color:#666;vertical-align:top;"><strong>Details</strong></td><td style="white-space:pre-line">${projectDetails}</td></tr>
          </table>
        </div>
      `,
    })

    return NextResponse.json({ success: true })
  } catch (err) {
    console.error('Contact email error:', err)
    return NextResponse.json({ error: 'Failed to send email' }, { status: 500 })
  }
}
