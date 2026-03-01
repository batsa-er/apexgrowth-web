import { Resend } from 'resend'
import { NextResponse } from 'next/server'

const resend = new Resend(process.env.RESEND_API_KEY)
const TO = process.env.CONTACT_TO_EMAIL!

export async function POST(req: Request) {
  const { name, email, company, service, message } = await req.json()

  if (!name || !email || !message) {
    return NextResponse.json({ error: 'Missing required fields' }, { status: 400 })
  }

  const serviceLabel = service
    ? service.replace(/-/g, ' ').replace(/\b\w/g, (c: string) => c.toUpperCase())
    : 'Not specified'

  await resend.emails.send({
    from: 'Apex Growth Contact <onboarding@resend.dev>',
    to: TO,
    replyTo: email,
    subject: `New enquiry from ${name}`,
    html: `
      <div style="font-family:sans-serif;max-width:600px;margin:0 auto;color:#0B0F14">
        <div style="background:#2563EB;padding:24px 32px">
          <h1 style="color:#fff;margin:0;font-size:20px;font-weight:600">New Contact Enquiry</h1>
        </div>
        <div style="padding:32px;background:#F6F7FB;border:1px solid #e2e8f0">
          <table style="width:100%;border-collapse:collapse">
            <tr><td style="padding:8px 0;font-size:12px;color:#64748b;text-transform:uppercase;letter-spacing:0.1em;width:120px">Name</td><td style="padding:8px 0;font-size:15px;font-weight:500">${name}</td></tr>
            <tr><td style="padding:8px 0;font-size:12px;color:#64748b;text-transform:uppercase;letter-spacing:0.1em">Email</td><td style="padding:8px 0;font-size:15px"><a href="mailto:${email}" style="color:#2563EB">${email}</a></td></tr>
            <tr><td style="padding:8px 0;font-size:12px;color:#64748b;text-transform:uppercase;letter-spacing:0.1em">Company</td><td style="padding:8px 0;font-size:15px">${company || '—'}</td></tr>
            <tr><td style="padding:8px 0;font-size:12px;color:#64748b;text-transform:uppercase;letter-spacing:0.1em">Service</td><td style="padding:8px 0;font-size:15px">${serviceLabel}</td></tr>
          </table>
          <hr style="border:none;border-top:1px solid #e2e8f0;margin:20px 0" />
          <p style="font-size:12px;color:#64748b;text-transform:uppercase;letter-spacing:0.1em;margin:0 0 10px">Message</p>
          <p style="font-size:15px;line-height:1.7;margin:0;white-space:pre-wrap">${message}</p>
        </div>
        <div style="padding:16px 32px;font-size:11px;color:#94a3b8;text-align:center">
          Sent from apexgrowth.africa contact form
        </div>
      </div>
    `,
  })

  return NextResponse.json({ ok: true })
}
