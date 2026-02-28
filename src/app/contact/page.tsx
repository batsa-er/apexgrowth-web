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
      <section className="bg-[#F6F7FB] px-[clamp(24px,5vw,80px)] pt-40 pb-24">
        <div className="max-w-[1280px] mx-auto grid grid-cols-1 md:grid-cols-2 gap-20 items-start">
          <div>
            <p className="font-mono text-[10px] tracking-[0.22em] uppercase text-[#2563EB] mb-6 hero-in hero-in-1">Contact</p>
            <h1
              className="font-serif font-bold text-[#0B0F14] leading-tight mb-6 hero-in hero-in-2"
              style={{ fontSize: 'clamp(44px,6vw,80px)' }}
            >
              Let&apos;s build<br />your brand.
            </h1>
            <p className="text-[clamp(15px,1.2vw,18px)] text-[rgba(11,15,20,0.55)] leading-relaxed mb-12 hero-in hero-in-3">
              Book a complimentary 45-minute Brand Strategy Call. We will review your current brand, identify the biggest creative opportunities, and map the right engagement for your goals — no commitment required.
            </p>

            <div className="space-y-6">
              {[
                { label: 'Email', value: 'hello@apexgrowth.africa' },
                { label: 'Location', value: 'Accra, Ghana · Remote-first' },
                { label: 'Response time', value: 'Within 24 hours' },
              ].map(({ label, value }) => (
                <div key={label}>
                  <p className="font-mono text-[9px] tracking-[0.2em] uppercase text-[rgba(11,15,20,0.28)] mb-1">{label}</p>
                  <p className="font-mono text-[13px] tracking-[0.06em] text-[rgba(11,15,20,0.70)]">{value}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Form */}
          <div className="border border-[rgba(15,23,42,0.12)] bg-white p-10 shadow-sm reveal" style={{ transitionDelay: '160ms' }}>
            {status === 'sent' ? (
              <div className="text-center py-12">
                <div className="w-16 h-16 rounded-full bg-[rgba(37,99,235,0.12)] border border-[rgba(37,99,235,0.30)] flex items-center justify-center mx-auto mb-6">
                  <span className="text-[#2563EB] text-2xl">✓</span>
                </div>
                <h2 className="font-serif text-[24px] font-bold text-[#0B0F14] mb-3">Message sent.</h2>
                <p className="text-[14px] text-[rgba(11,15,20,0.55)]">We will be in touch within 24 hours.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label className="block font-mono text-[9px] tracking-[0.2em] uppercase text-[rgba(11,15,20,0.35)] mb-2">Name *</label>
                    <input
                      required
                      type="text"
                      value={form.name}
                      onChange={e => setForm(f => ({ ...f, name: e.target.value }))}
                      className="w-full bg-[rgba(11,15,20,0.04)] border border-[rgba(37,99,235,0.15)] px-4 py-3 text-[14px] text-[#0B0F14] font-mono placeholder:text-[rgba(11,15,20,0.25)] focus:outline-none focus:border-[#2563EB] transition-colors"
                      placeholder="Your name"
                    />
                  </div>
                  <div>
                    <label className="block font-mono text-[9px] tracking-[0.2em] uppercase text-[rgba(11,15,20,0.35)] mb-2">Email *</label>
                    <input
                      required
                      type="email"
                      value={form.email}
                      onChange={e => setForm(f => ({ ...f, email: e.target.value }))}
                      className="w-full bg-[rgba(11,15,20,0.04)] border border-[rgba(37,99,235,0.15)] px-4 py-3 text-[14px] text-[#0B0F14] font-mono placeholder:text-[rgba(11,15,20,0.25)] focus:outline-none focus:border-[#2563EB] transition-colors"
                      placeholder="you@company.com"
                    />
                  </div>
                </div>

                <div>
                  <label className="block font-mono text-[9px] tracking-[0.2em] uppercase text-[rgba(11,15,20,0.35)] mb-2">Company</label>
                  <input
                    type="text"
                    value={form.company}
                    onChange={e => setForm(f => ({ ...f, company: e.target.value }))}
                    className="w-full bg-[rgba(11,15,20,0.04)] border border-[rgba(37,99,235,0.15)] px-4 py-3 text-[14px] text-[#0B0F14] font-mono placeholder:text-[rgba(11,15,20,0.25)] focus:outline-none focus:border-[#2563EB] transition-colors"
                    placeholder="Your company"
                  />
                </div>

                <div>
                  <label className="block font-mono text-[9px] tracking-[0.2em] uppercase text-[rgba(11,15,20,0.35)] mb-2">What are you looking for?</label>
                  <div className="relative">
                    <select
                      value={form.service}
                      onChange={e => setForm(f => ({ ...f, service: e.target.value }))}
                      className="w-full bg-[rgba(11,15,20,0.04)] border border-[rgba(37,99,235,0.15)] px-4 py-3 text-[14px] text-[rgba(11,15,20,0.60)] font-mono focus:outline-none focus:border-[#2563EB] transition-colors appearance-none pr-10"
                    >
                      <option value="">Select a service</option>
                      <option value="brand-identity">Brand &amp; Identity</option>
                      <option value="web-digital">Web &amp; Digital</option>
                      <option value="marketing-campaigns">Marketing &amp; Campaigns</option>
                      <option value="print-production">Print &amp; Production</option>
                      <option value="other">Not sure yet</option>
                    </select>
                    <span className="pointer-events-none absolute right-4 top-1/2 -translate-y-1/2 text-[rgba(11,15,20,0.40)] text-[10px]">▾</span>
                  </div>
                </div>

                <div>
                  <label className="block font-mono text-[9px] tracking-[0.2em] uppercase text-[rgba(11,15,20,0.35)] mb-2">Tell us about your situation *</label>
                  <textarea
                    required
                    rows={5}
                    value={form.message}
                    onChange={e => setForm(f => ({ ...f, message: e.target.value }))}
                    className="w-full bg-[rgba(11,15,20,0.04)] border border-[rgba(37,99,235,0.15)] px-4 py-3 text-[14px] text-[#0B0F14] font-mono placeholder:text-[rgba(11,15,20,0.25)] focus:outline-none focus:border-[#2563EB] transition-colors resize-none"
                    placeholder="Current stage, revenue goal, biggest challenge..."
                  />
                </div>

                <button
                  type="submit"
                  disabled={status === 'sending'}
                  className="w-full font-mono text-[11px] tracking-[0.14em] uppercase font-medium bg-[#2563EB] text-white py-4 hover:bg-[#1D4ED8] transition-colors duration-200 disabled:opacity-60"
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
