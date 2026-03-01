import Link from 'next/link'
import { getServices } from '@/sanity/queries'
import { notFound } from 'next/navigation'

export async function generateStaticParams() {
  try {
    const s = await getServices()
    return s.map((svc: any) => ({ slug: svc.slug?.current || svc.slug }))
  } catch {
    return ['brand-identity', 'web-digital', 'marketing-campaigns', 'print-production'].map(slug => ({ slug }))
  }
}

const fallbackServices: Record<string, any> = {
  'brand-identity': {
    number: '01', title: 'Brand & Identity', tagline: 'Brand systems that scale.',
    description: 'Logo and identity design, brand guidelines, corporate profiles, packaging design, and rebrands—built for clarity and consistency across every touchpoint.',
    outcomes: ['Logo & identity suite', 'Brand guidelines & templates', 'Packaging & collateral design', 'Corporate profiles & presentations', 'Rebrand strategy & rollout', 'Brand audit & direction'],
    price: 'Projects · Retainers',
    detail: 'A brand is more than a logo — it is a system of decisions that determines how your business is perceived at every touchpoint. We design brand identities that are built to scale: clear, consistent, and distinctive enough to hold their own in competitive markets across Africa and globally.',
    process: ['Brand discovery & audit', 'Positioning & creative direction', 'Identity design', 'Brand guidelines & system', 'Collateral & templates', 'Rollout & handoff'],
  },
  'web-digital': {
    number: '02', title: 'Web & Digital', tagline: 'Websites built to convert.',
    description: 'UX-led websites, landing pages, and e-commerce that look premium and guide visitors to take action—fast, mobile-first, and measurable.',
    outcomes: ['UX/UI + web development', 'Landing pages & CRO', 'Analytics & lead capture', 'E-commerce build & optimisation', 'SEO-ready architecture', 'Ongoing maintenance & support'],
    price: 'Build · Maintain',
    detail: 'Your website is often the first—and most decisive—impression a potential client gets of your brand. We build websites that are fast, mobile-first, and designed with one clear goal: converting visitors into enquiries or customers.',
    process: ['UX strategy & wireframes', 'Visual design', 'Development & build', 'Analytics & tracking setup', 'Launch & QA', 'Ongoing support & maintenance'],
  },
  'marketing-campaigns': {
    number: '03', title: 'Marketing & Campaigns', tagline: 'Creative that drives demand.',
    description: 'Content, social media, paid ads, email, and campaign execution—designed with a clear message and tracked outcomes.',
    outcomes: ['Social content & management', 'Paid ads (Meta/Google/LinkedIn)', 'Email & campaign reporting', 'Content strategy & production', 'Influencer & PR activation', 'Campaign performance dashboards'],
    price: 'Monthly Retainers',
    detail: 'Marketing without creative direction is just noise. We build campaigns around a clear message and deploy them across the right channels — social, paid, email, and content — with reporting that ties spend to real outcomes.',
    process: ['Audience & channel strategy', 'Creative direction & content', 'Campaign setup & launch', 'Community management', 'Performance reporting', 'Monthly review & optimisation'],
  },
  'print-production': {
    number: '04', title: 'Print & Production', tagline: 'From screen to physical.',
    description: 'Corporate printing, event branding, signage, and packaging production—managed end-to-end so quality stays consistent.',
    outcomes: ['Corporate stationery & brochures', 'Event branding & large format', 'Packaging production support', 'Signage & environmental graphics', 'Exhibition & trade show materials', 'Print project management'],
    price: 'Production · Fulfilment',
    detail: 'A brand that only lives on screen is incomplete. We manage the full journey from digital design to physical production — coordinating print vendors, managing quality control, and delivering on time so your brand looks as good in the real world as it does online.',
    process: ['Design & prepress preparation', 'Vendor sourcing & briefing', 'Production management', 'Quality control', 'Delivery & fulfilment', 'Post-production review'],
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
      <section className="bg-[var(--color-bg)] px-[clamp(24px,5vw,80px)] pt-40 pb-24">
        <div className="max-w-[900px] mx-auto">
          <div className="flex items-center gap-3 mb-8">
            <Link href="/services" className="font-mono text-[10px] tracking-[0.16em] uppercase text-[rgba(var(--ch-text),0.40)] hover:text-[var(--color-accent)] transition-colors">
              ← Services
            </Link>
          </div>
          <p className="font-mono text-[10px] tracking-[0.22em] uppercase text-[var(--color-accent)] mb-4">{svc.number}</p>
          <h1 className="font-serif font-bold text-[var(--color-text)] leading-tight mb-4"
            style={{ fontSize: 'clamp(44px,7vw,80px)' }}>{svc.title}</h1>
          <p className="font-mono text-[14px] tracking-[0.06em] italic text-[rgba(var(--ch-text),0.45)] mb-8">{svc.tagline}</p>
          <p className="text-[clamp(16px,1.4vw,20px)] text-[rgba(var(--ch-text),0.60)] leading-relaxed max-w-2xl">{svc.description}</p>
        </div>
      </section>

      {/* Detail + Process */}
      <section className="bg-[var(--color-surface)] px-[clamp(24px,5vw,80px)] py-24">
        <div className="max-w-[900px] mx-auto grid grid-cols-1 md:grid-cols-2 gap-16">
          <div>
            <p className="font-mono text-[10px] tracking-[0.22em] uppercase text-[var(--color-accent)] mb-6">The Approach</p>
            <p className="text-[15px] text-[rgba(var(--ch-text),0.65)] leading-relaxed mb-10">{svc.detail || svc.description}</p>
            {svc.price && (
              <div className="border border-[rgba(var(--ch-accent),0.20)] p-6">
                <p className="font-mono text-[9px] tracking-[0.2em] uppercase text-[rgba(var(--ch-text),0.35)] mb-2">Investment</p>
                <p className="font-serif text-[28px] font-bold text-[var(--color-accent)]">{svc.price}</p>
              </div>
            )}
          </div>

          <div>
            <p className="font-mono text-[10px] tracking-[0.22em] uppercase text-[var(--color-accent)] mb-6">What&apos;s Included</p>
            <ul className="space-y-4">
              {(svc.outcomes || []).map((o: string, i: number) => (
                <li key={o} className="flex items-start gap-4">
                  <span className="font-mono text-[10px] text-[var(--color-accent)] mt-0.5 shrink-0">{String(i + 1).padStart(2, '0')}</span>
                  <span className="font-mono text-[12px] tracking-[0.06em] text-[rgba(var(--ch-text),0.60)]">{o}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-[var(--color-bg)] border-t border-[rgba(var(--ch-accent),0.08)] px-[clamp(24px,5vw,80px)] py-24 text-center">
        <div className="max-w-[700px] mx-auto">
          <h2 className="font-serif font-bold text-[var(--color-text)] mb-4" style={{ fontSize: 'clamp(28px,3vw,48px)' }}>
            Ready to get started?
          </h2>
          <p className="text-[rgba(var(--ch-text),0.55)] mb-8">
            Book a complimentary strategy call. We&apos;ll assess your current situation and outline exactly how this service applies to your business.
          </p>
          <Link
            href="/contact"
            className="inline-block font-mono text-[11px] tracking-[0.14em] uppercase font-medium bg-[var(--color-accent)] text-white px-10 py-4 hover:bg-[var(--color-accent-hover)] transition-colors duration-200"
          >
            Book Strategy Call
          </Link>
        </div>
      </section>
    </>
  )
}
