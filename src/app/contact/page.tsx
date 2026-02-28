'use client'

import { useState } from 'react'

export default function ContactPage() {
  const [form, setForm] = useState({ name: '', email: '', company: '', message: '', service: '' })
  const [status, setStatus] = useState<'idle' | 'sending' | 'sent' | 'error'>('idle')

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    setStatus('sending')
    // TODO: wire to your form endpoint (Formspree, Resend, etc.)
    await new Promise(r => setTimeout(r, 1200))
    setStatus('sent')
  }

  return (
    <>
      {/* Header */}
      <section className="bg-[#09041A] px-[clamp(24px,5vw,80px)] pt-40 pb-24">
        <div className="max-w-[1280px] mx-auto grid grid-cols-1 md:grid-cols-2 gap-20 items-start">
          <div>
            <p className="font-mono text-[10px] tracking-[0.22em] uppercase text-[#C084FC] mb-6">Contact</p>
            <h1
              className="font-serif font-bold text-[#F2EEFF] leading-tight mb-6"
              style={{ fontSize: 'clamp(44px,6vw,80px)' }}
            >
              Let&apos;s talk<br />revenue.
            </h1>
            <p className="text-[clamp(15px,1.2vw,18px)] text-[rgba(242,238,255,0.55)] leading-relaxed mb-12">
              Book a complimentary 45-minute strategy call. We will audit your current pipeline, identify the biggest growth levers, and outline a roadmap — no commitment required.
            </p>

            <div className="space-y-6">
              {[
                { label: 'Email', value: 'hello@apexgrowth.africa' },
                { label: 'Location', value: 'Accra, Ghana · Remote-first' },
                { label: 'Response time', value: 'Within 24 hours' },
              ].map(({ label, value }) => (
                <div key={label}>
                  <p className="font-mono text-[9px] tracking-[0.2em] uppercase text-[rgba(242,238,255,0.28)] mb-1">{label}</p>
                  <p className="font-mono text-[13px] tracking-[0.06em] text-[rgba(242,238,255,0.70)]">{value}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Form */}
          <div className="border border-[rgba(192,132,252,0.12)] bg-[#110828] p-10">
            {status === 'sent' ? (
              <div className="text-center py-12">
                <div className="w-16 h-16 rounded-full bg-[rgba(192,132,252,0.12)] border border-[rgba(192,132,252,0.30)] flex items-center justify-center mx-auto mb-6">
                  <span className="text-[#C084FC] text-2xl">✓</span>
                </div>
                <h2 className="font-serif text-[24px] font-bold text-[#F2EEFF] mb-3">Message sent.</h2>
                <p className="text-[14px] text-[rgba(242,238,255,0.55)]">We will be in touch within 24 hours.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label className="block font-mono text-[9px] tracking-[0.2em] uppercase text-[rgba(242,238,255,0.35)] mb-2">Name *</label>
                    <input
                      required
                      type="text"
                      value={form.name}
                      onChange={e => setForm(f => ({ ...f, name: e.target.value }))}
                      className="w-full bg-[rgba(242,238,255,0.04)] border border-[rgba(192,132,252,0.15)] px-4 py-3 text-[14px] text-[#F2EEFF] font-mono placeholder:text-[rgba(242,238,255,0.25)] focus:outline-none focus:border-[#C084FC] transition-colors"
                      placeholder="Your name"
                    />
                  </div>
                  <div>
                    <label className="block font-mono text-[9px] tracking-[0.2em] uppercase text-[rgba(242,238,255,0.35)] mb-2">Email *</label>
                    <input
                      required
                      type="email"
                      value={form.email}
                      onChange={e => setForm(f => ({ ...f, email: e.target.value }))}
                      className="w-full bg-[rgba(242,238,255,0.04)] border border-[rgba(192,132,252,0.15)] px-4 py-3 text-[14px] text-[#F2EEFF] font-mono placeholder:text-[rgba(242,238,255,0.25)] focus:outline-none focus:border-[#C084FC] transition-colors"
                      placeholder="you@company.com"
                    />
                  </div>
                </div>

                <div>
                  <label className="block font-mono text-[9px] tracking-[0.2em] uppercase text-[rgba(242,238,255,0.35)] mb-2">Company</label>
                  <input
                    type="text"
                    value={form.company}
                    onChange={e => setForm(f => ({ ...f, company: e.target.value }))}
                    className="w-full bg-[rgba(242,238,255,0.04)] border border-[rgba(192,132,252,0.15)] px-4 py-3 text-[14px] text-[#F2EEFF] font-mono placeholder:text-[rgba(242,238,255,0.25)] focus:outline-none focus:border-[#C084FC] transition-colors"
                    placeholder="Your company"
                  />
                </div>

                <div>
                  <label className="block font-mono text-[9px] tracking-[0.2em] uppercase text-[rgba(242,238,255,0.35)] mb-2">What are you looking for?</label>
                  <select
                    value={form.service}
                    onChange={e => setForm(f => ({ ...f, service: e.target.value }))}
                    className="w-full bg-[rgba(242,238,255,0.04)] border border-[rgba(192,132,252,0.15)] px-4 py-3 text-[14px] text-[rgba(242,238,255,0.60)] font-mono focus:outline-none focus:border-[#C084FC] transition-colors appearance-none"
                  >
                    <option value="">Select a service</option>
                    <option value="revenue-strategy">Revenue Strategy</option>
                    <option value="demand-generation">Demand Generation</option>
                    <option value="revenue-operations">Revenue Operations</option>
                    <option value="full-engine">Full Revenue Engine</option>
                    <option value="other">Not sure yet</option>
                  </select>
                </div>

                <div>
                  <label className="block font-mono text-[9px] tracking-[0.2em] uppercase text-[rgba(242,238,255,0.35)] mb-2">Tell us about your situation *</label>
                  <textarea
                    required
                    rows={5}
                    value={form.message}
                    onChange={e => setForm(f => ({ ...f, message: e.target.value }))}
                    className="w-full bg-[rgba(242,238,255,0.04)] border border-[rgba(192,132,252,0.15)] px-4 py-3 text-[14px] text-[#F2EEFF] font-mono placeholder:text-[rgba(242,238,255,0.25)] focus:outline-none focus:border-[#C084FC] transition-colors resize-none"
                    placeholder="Current stage, revenue goal, biggest challenge..."
                  />
                </div>

                <button
                  type="submit"
                  disabled={status === 'sending'}
                  className="w-full font-mono text-[11px] tracking-[0.14em] uppercase font-medium bg-[#C084FC] text-[#09041A] py-4 hover:bg-[#E0AAFF] transition-colors duration-200 disabled:opacity-60"
                >
                  {status === 'sending' ? 'Sending...' : 'Send Message'}
                </button>
              </form>
            )}
          </div>
        </div>
      </section>
    </>
  )
}
