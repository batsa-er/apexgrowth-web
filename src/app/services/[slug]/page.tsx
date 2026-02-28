import Link from 'next/link'
import { getServices } from '@/sanity/queries'
import { notFound } from 'next/navigation'

export async function generateStaticParams() {
  try {
    const s = await getServices()
    return s.map((svc: any) => ({ slug: svc.slug?.current || svc.slug }))
  } catch {
    return ['revenue-strategy', 'demand-generation', 'revenue-operations'].map(slug => ({ slug }))
  }
}

const fallbackServices: Record<string, any> = {
  'revenue-strategy': {
    number: '01', title: 'Revenue Strategy', tagline: 'Architecture before execution.',
    description: 'We map your entire revenue system — ICP, GTM motion, pipeline design, pricing, and competitive positioning — then build the playbook your team can execute.',
    outcomes: ['Market & ICP definition', 'GTM motion design', 'Competitive positioning', 'Revenue model architecture', 'Pricing & packaging', 'Sales playbook development'],
    price: 'From $12,000',
    detail: 'Most companies have a sales problem that is actually a strategy problem. They hire more reps, run more ads, and push harder on the same broken motion. We start by diagnosing what is actually holding your revenue back — then redesign the system around your real ICP, your strongest channels, and your most profitable deals.',
    process: ['Revenue & pipeline audit', 'ICP and market segmentation', 'GTM motion design', 'Pricing & packaging review', 'Playbook & enablement build', 'Handoff & team coaching'],
  },
  'demand-generation': {
    number: '02', title: 'Demand Generation', tagline: 'Demand you own, not rent.',
    description: 'Full-funnel demand programs: content, paid, ABM, outbound, and partner channels — built to generate pipeline that converts.',
    outcomes: ['Multi-channel demand programs', 'ABM & account targeting', 'Content & SEO systems', 'Paid media management', 'Outbound sequences', 'Partner channel activation'],
    price: 'From $8,000 / mo',
    detail: 'We build demand programs that create compounding pipeline — not one-time campaigns that disappear when the budget runs out. The goal is always owned demand: organic traffic, referral networks, and relationships that generate pipeline independent of spend.',
    process: ['Demand audit & channel mapping', 'ICP-aligned content strategy', 'ABM target account list build', 'Campaign architecture & launch', 'Paid media setup & management', 'Monthly reporting & optimisation'],
  },
  'revenue-operations': {
    number: '03', title: 'Revenue Operations', tagline: 'Systems that scale with you.',
    description: 'CRM architecture, automation, attribution, and RevOps infrastructure so your team has the data and tooling to hit targets consistently.',
    outcomes: ['CRM design & implementation', 'Sales automation & sequences', 'Attribution & reporting', 'Tech stack optimisation', 'Forecast & pipeline management', 'RevOps hiring & training'],
    price: 'From $6,000 / mo',
    detail: 'Revenue operations is the connective tissue between marketing, sales, and customer success. Without it, your data is unreliable, your forecasts are guesswork, and your team wastes hours on manual work. We build the infrastructure that gives your leadership team real-time visibility and your reps the tools they need to execute.',
    process: ['CRM & tech stack audit', 'Data model & architecture design', 'CRM implementation & migration', 'Automation & sequence build', 'Dashboard & attribution setup', 'Ongoing RevOps retainer'],
  },
}

export default async function ServicePage({ params }: { params: { slug: string } }) {
  let svc: any = null
  try {
    const services = await getServices()
    svc = services?.find((s: any) => (s.slug?.current || s.slug) === params.slug)
  } catch {}
  if (!svc) svc = fallbackServices[params.slug]
  if (!svc) notFound()

  return (
    <>
      {/* Header */}
      <section className="bg-[#F6F7FB] px-[clamp(24px,5vw,80px)] pt-40 pb-24">
        <div className="max-w-[900px] mx-auto">
          <div className="flex items-center gap-3 mb-8">
            <Link href="/services" className="font-mono text-[10px] tracking-[0.16em] uppercase text-[rgba(11,15,20,0.40)] hover:text-[#2563EB] transition-colors">
              ← Services
            </Link>
          </div>
          <p className="font-mono text-[10px] tracking-[0.22em] uppercase text-[#2563EB] mb-4">{svc.number}</p>
          <h1 className="font-serif font-bold text-[#0B0F14] leading-tight mb-4"
            style={{ fontSize: 'clamp(44px,7vw,80px)' }}>{svc.title}</h1>
          <p className="font-mono text-[14px] tracking-[0.06em] italic text-[rgba(11,15,20,0.45)] mb-8">{svc.tagline}</p>
          <p className="text-[clamp(16px,1.4vw,20px)] text-[rgba(11,15,20,0.60)] leading-relaxed max-w-2xl">{svc.description}</p>
        </div>
      </section>

      {/* Detail + Process */}
      <section className="bg-[#EEF2FF] px-[clamp(24px,5vw,80px)] py-24">
        <div className="max-w-[900px] mx-auto grid grid-cols-1 md:grid-cols-2 gap-16">
          <div>
            <p className="font-mono text-[10px] tracking-[0.22em] uppercase text-[#2563EB] mb-6">The Approach</p>
            <p className="text-[15px] text-[rgba(11,15,20,0.65)] leading-relaxed mb-10">{svc.detail || svc.description}</p>
            {svc.price && (
              <div className="border border-[rgba(37,99,235,0.20)] p-6">
                <p className="font-mono text-[9px] tracking-[0.2em] uppercase text-[rgba(11,15,20,0.35)] mb-2">Investment</p>
                <p className="font-serif text-[28px] font-bold text-[#2563EB]">{svc.price}</p>
              </div>
            )}
          </div>

          <div>
            <p className="font-mono text-[10px] tracking-[0.22em] uppercase text-[#2563EB] mb-6">What&apos;s Included</p>
            <ul className="space-y-4">
              {(svc.outcomes || []).map((o: string, i: number) => (
                <li key={o} className="flex items-start gap-4">
                  <span className="font-mono text-[10px] text-[rgba(192,132,252,0.50)] mt-0.5 shrink-0">{String(i + 1).padStart(2, '0')}</span>
                  <span className="font-mono text-[12px] tracking-[0.06em] text-[rgba(11,15,20,0.60)]">{o}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-[#F6F7FB] border-t border-[rgba(37,99,235,0.08)] px-[clamp(24px,5vw,80px)] py-24 text-center">
        <div className="max-w-[700px] mx-auto">
          <h2 className="font-serif font-bold text-[#0B0F14] mb-4" style={{ fontSize: 'clamp(28px,3vw,48px)' }}>
            Ready to get started?
          </h2>
          <p className="text-[rgba(11,15,20,0.55)] mb-8">
            Book a complimentary strategy call. We&apos;ll assess your current situation and outline exactly how this service applies to your business.
          </p>
          <Link
            href="/contact"
            className="inline-block font-mono text-[11px] tracking-[0.14em] uppercase font-medium bg-[#2563EB] text-white px-10 py-4 hover:bg-[#1D4ED8] transition-colors duration-200"
          >
            Book Strategy Call
          </Link>
        </div>
      </section>
    </>
  )
}
