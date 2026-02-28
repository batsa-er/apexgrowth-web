import Link from 'next/link'
import { getServices } from '@/sanity/queries'

const fallback = [
  {
    _id: '1', slug: { current: 'brand-identity' }, number: '01',
    title: 'Brand & Identity',
    tagline: 'Brand systems that scale.',
    description: 'Logo and identity design, brand guidelines, corporate profiles, packaging design, and rebrands—built for clarity and consistency across every touchpoint.',
    outcomes: ['Logo & identity suite', 'Brand guidelines & templates', 'Packaging & collateral design', 'Corporate profiles & presentations', 'Rebrand strategy & rollout', 'Brand audit & direction'],
    price: 'Projects · Retainers',
  },
  {
    _id: '2', slug: { current: 'web-digital' }, number: '02',
    title: 'Web & Digital',
    tagline: 'Websites built to convert.',
    description: 'UX-led websites, landing pages, and e-commerce that look premium and guide visitors to take action—fast, mobile-first, and measurable.',
    outcomes: ['UX/UI + web development', 'Landing pages & CRO', 'Analytics & lead capture', 'E-commerce build & optimisation', 'SEO-ready architecture', 'Ongoing maintenance & support'],
    price: 'Build · Maintain',
  },
  {
    _id: '3', slug: { current: 'marketing-campaigns' }, number: '03',
    title: 'Marketing & Campaigns',
    tagline: 'Creative that drives demand.',
    description: 'Content, social media, paid ads, email, and campaign execution—designed with a clear message and tracked outcomes.',
    outcomes: ['Social content & management', 'Paid ads (Meta/Google/LinkedIn)', 'Email & campaign reporting', 'Content strategy & production', 'Influencer & PR activation', 'Campaign performance dashboards'],
    price: 'Monthly Retainers',
  },
  {
    _id: '4', slug: { current: 'print-production' }, number: '04',
    title: 'Print & Production',
    tagline: 'From screen to physical.',
    description: 'Corporate printing, event branding, signage, and packaging production—managed end-to-end so quality stays consistent.',
    outcomes: ['Corporate stationery & brochures', 'Event branding & large format', 'Packaging production support', 'Signage & environmental graphics', 'Exhibition & trade show materials', 'Print project management'],
    price: 'Production · Fulfilment',
  },
]

export default async function ServicesPage() {
  let services = fallback as any[]
  try {
    const s = await getServices()
    if (s?.length) services = s
  } catch {}

  return (
    <>
      {/* Header */}
      <section className="bg-[#F6F7FB] px-[clamp(24px,5vw,80px)] pt-40 pb-20">
        <div className="max-w-[1280px] mx-auto">
          <p className="font-mono text-[10px] tracking-[0.22em] uppercase text-[#2563EB] mb-6">Full-Service, Structured</p>
          <h1
            className="font-serif font-bold text-[#0B0F14] leading-tight mb-6"
            style={{ fontSize: 'clamp(44px,7vw,88px)' }}
          >
            Everything your brand needs.<br />One integrated agency.
          </h1>
          <p className="text-[clamp(15px,1.2vw,18px)] text-[rgba(11,15,20,0.55)] max-w-xl leading-relaxed">
            We deliver brand, digital, marketing, and production with a single creative direction—so every touchpoint looks, feels, and performs like one brand.
          </p>
        </div>
      </section>

      {/* Services */}
      <section className="bg-[#F6F7FB] px-[clamp(24px,5vw,80px)] pb-28">
        <div className="max-w-[1280px] mx-auto space-y-6">
          {services.map((s: any, i: number) => (
            <div
              key={s._id}
              className="relative border border-[rgba(37,99,235,0.12)] bg-[#EEF2FF] p-12 overflow-hidden group hover:border-[rgba(37,99,235,0.30)] transition-all duration-300"
            >
              {/* Watermark */}
              <span className="absolute bottom-6 right-10 font-serif font-bold text-[160px] leading-none text-[rgba(192,132,252,0.04)] select-none pointer-events-none group-hover:text-[rgba(192,132,252,0.07)] transition-colors duration-300">
                {s.number || `0${i + 1}`}
              </span>

              <div className="relative grid grid-cols-1 md:grid-cols-2 gap-12">
                <div>
                  <p className="font-mono text-[10px] tracking-[0.2em] uppercase text-[#2563EB] mb-6">{s.number || `0${i + 1}`}</p>
                  <h2 className="font-serif text-[clamp(28px,3.5vw,48px)] font-bold text-[#0B0F14] mb-2">{s.title}</h2>
                  <p className="font-mono text-[12px] tracking-[0.08em] italic text-[rgba(11,15,20,0.40)] mb-6">{s.tagline}</p>
                  <p className="text-[15px] text-[rgba(11,15,20,0.60)] leading-relaxed mb-8">{s.description}</p>
                  {s.price && (
                    <p className="font-mono text-[12px] tracking-[0.1em] text-[#2563EB]">{s.price}</p>
                  )}
                  <Link
                    href={`/services/${s.slug?.current || s.slug}`}
                    className="inline-block mt-6 font-mono text-[10px] tracking-[0.14em] uppercase border border-[rgba(37,99,235,0.35)] text-[rgba(11,15,20,0.70)] px-6 py-3 hover:border-[#2563EB] hover:text-[#0B0F14] transition-colors duration-200"
                  >
                    Learn More →
                  </Link>
                </div>

                <div>
                  <p className="font-mono text-[9px] tracking-[0.2em] uppercase text-[rgba(11,15,20,0.30)] mb-5">Deliverables</p>
                  <ul className="space-y-3">
                    {(s.outcomes || []).map((o: string) => (
                      <li key={o} className="flex items-start gap-3">
                        <span className="text-[#2563EB] shrink-0 mt-0.5 text-[10px]">▸</span>
                        <span className="font-mono text-[12px] tracking-[0.06em] text-[rgba(11,15,20,0.55)]">{o}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="bg-[#EEF2FF] border-t border-[rgba(37,99,235,0.08)] px-[clamp(24px,5vw,80px)] py-24 text-center">
        <div className="max-w-[700px] mx-auto">
          <p className="font-mono text-[10px] tracking-[0.22em] uppercase text-[#2563EB] mb-4">Get Started</p>
          <h2 className="font-serif font-bold text-[#0B0F14] mb-4" style={{ fontSize: 'clamp(28px,3vw,48px)' }}>
            Not sure where to start?
          </h2>
          <p className="text-[rgba(11,15,20,0.55)] mb-8">
            Book a complimentary Brand Strategy Call. We&apos;ll review your current brand, identify the biggest opportunities, and map the right engagement for your goals.
          </p>
          <Link
            href="/contact"
            className="inline-block font-mono text-[11px] tracking-[0.14em] uppercase font-medium bg-[#2563EB] text-white px-10 py-4 hover:bg-[#1D4ED8] transition-colors duration-200"
          >
            Book a Brand Strategy Call
          </Link>
        </div>
      </section>
    </>
  )
}
