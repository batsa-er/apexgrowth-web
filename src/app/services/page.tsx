import Link from 'next/link'
import { getServices } from '@/sanity/queries'

const fallback = [
  {
    _id: '1', slug: { current: 'revenue-strategy' }, number: '01',
    title: 'Revenue Strategy',
    tagline: 'Architecture before execution.',
    description: 'We map your entire revenue system — ICP, GTM motion, pipeline design, pricing, and competitive positioning — then build the playbook your team can execute.',
    outcomes: ['Market & ICP definition', 'GTM motion design', 'Competitive positioning', 'Revenue model architecture', 'Pricing & packaging', 'Sales playbook development'],
    price: 'From $12,000',
  },
  {
    _id: '2', slug: { current: 'demand-generation' }, number: '02',
    title: 'Demand Generation',
    tagline: 'Demand you own, not rent.',
    description: 'Full-funnel demand programs: content, paid, ABM, outbound, and partner channels — built to generate pipeline that converts at every stage.',
    outcomes: ['Multi-channel demand programs', 'ABM & account targeting', 'Content & SEO systems', 'Paid media management', 'Outbound sequences', 'Partner channel activation'],
    price: 'From $8,000 / mo',
  },
  {
    _id: '3', slug: { current: 'revenue-operations' }, number: '03',
    title: 'Revenue Operations',
    tagline: 'Systems that scale with you.',
    description: 'CRM architecture, automation, attribution, and RevOps infrastructure so your team has the data and tooling to hit targets consistently.',
    outcomes: ['CRM design & implementation', 'Sales automation & sequences', 'Attribution & reporting', 'Tech stack optimisation', 'Forecast & pipeline management', 'RevOps hiring & training'],
    price: 'From $6,000 / mo',
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
      <section className="bg-[#09041A] px-[clamp(24px,5vw,80px)] pt-40 pb-20">
        <div className="max-w-[1280px] mx-auto">
          <p className="font-mono text-[10px] tracking-[0.22em] uppercase text-[#C084FC] mb-6">What We Do</p>
          <h1
            className="font-serif font-bold text-[#F2EEFF] leading-tight mb-6"
            style={{ fontSize: 'clamp(44px,7vw,88px)' }}
          >
            Built to drive<br />real revenue.
          </h1>
          <p className="text-[clamp(15px,1.2vw,18px)] text-[rgba(242,238,255,0.55)] max-w-xl leading-relaxed">
            Three tightly integrated service pillars. Each can stand alone or be combined into a fully managed revenue engine.
          </p>
        </div>
      </section>

      {/* Services */}
      <section className="bg-[#09041A] px-[clamp(24px,5vw,80px)] pb-28">
        <div className="max-w-[1280px] mx-auto space-y-6">
          {services.map((s: any, i: number) => (
            <div
              key={s._id}
              className="relative border border-[rgba(192,132,252,0.12)] bg-[#110828] p-12 overflow-hidden group hover:border-[rgba(192,132,252,0.30)] transition-all duration-300"
            >
              {/* Watermark */}
              <span className="absolute bottom-6 right-10 font-serif font-bold text-[160px] leading-none text-[rgba(192,132,252,0.04)] select-none pointer-events-none group-hover:text-[rgba(192,132,252,0.07)] transition-colors duration-300">
                {s.number || `0${i + 1}`}
              </span>

              <div className="relative grid grid-cols-1 md:grid-cols-2 gap-12">
                <div>
                  <p className="font-mono text-[10px] tracking-[0.2em] uppercase text-[#C084FC] mb-6">{s.number || `0${i + 1}`}</p>
                  <h2 className="font-serif text-[clamp(28px,3.5vw,48px)] font-bold text-[#F2EEFF] mb-2">{s.title}</h2>
                  <p className="font-mono text-[12px] tracking-[0.08em] italic text-[rgba(242,238,255,0.40)] mb-6">{s.tagline}</p>
                  <p className="text-[15px] text-[rgba(242,238,255,0.60)] leading-relaxed mb-8">{s.description}</p>
                  {s.price && (
                    <p className="font-mono text-[12px] tracking-[0.1em] text-[#C084FC]">{s.price}</p>
                  )}
                  <Link
                    href={`/services/${s.slug?.current || s.slug}`}
                    className="inline-block mt-6 font-mono text-[10px] tracking-[0.14em] uppercase border border-[rgba(192,132,252,0.35)] text-[rgba(242,238,255,0.70)] px-6 py-3 hover:border-[#C084FC] hover:text-[#F2EEFF] transition-colors duration-200"
                  >
                    Learn More →
                  </Link>
                </div>

                <div>
                  <p className="font-mono text-[9px] tracking-[0.2em] uppercase text-[rgba(242,238,255,0.30)] mb-5">Deliverables</p>
                  <ul className="space-y-3">
                    {(s.outcomes || []).map((o: string) => (
                      <li key={o} className="flex items-start gap-3">
                        <span className="text-[#C084FC] shrink-0 mt-0.5 text-[10px]">▸</span>
                        <span className="font-mono text-[12px] tracking-[0.06em] text-[rgba(242,238,255,0.55)]">{o}</span>
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
      <section className="bg-[#110828] border-t border-[rgba(192,132,252,0.08)] px-[clamp(24px,5vw,80px)] py-24 text-center">
        <div className="max-w-[700px] mx-auto">
          <p className="font-mono text-[10px] tracking-[0.22em] uppercase text-[#C084FC] mb-4">Get Started</p>
          <h2 className="font-serif font-bold text-[#F2EEFF] mb-4" style={{ fontSize: 'clamp(28px,3vw,48px)' }}>
            Not sure where to start?
          </h2>
          <p className="text-[rgba(242,238,255,0.55)] mb-8">
            Book a complimentary strategy call. We&apos;ll identify your biggest revenue lever and map the right engagement.
          </p>
          <Link
            href="/contact"
            className="inline-block font-mono text-[11px] tracking-[0.14em] uppercase font-medium bg-[#C084FC] text-[#09041A] px-10 py-4 hover:bg-[#E0AAFF] transition-colors duration-200"
          >
            Book Strategy Call
          </Link>
        </div>
      </section>
    </>
  )
}
