import Image from 'next/image'
import Link from 'next/link'
import { getCaseStudies } from '@/sanity/queries'
import { urlFor } from '@/sanity/client'

const fallback = [
  {
    _id: '1', slug: { current: 'panafricapay-brand' }, client: 'PanAfrica Pay',
    industry: 'Fintech', summary: 'Complete brand overhaul — identity, web, and marketing assets — ahead of a pan-African market expansion.',
    metric1_num: '3×', metric1_label: 'Brand Recall',
    metric2_num: '68%', metric2_label: 'Web Conversion Lift',
    metric3_num: '6wks', metric3_label: 'Launch Timeline', accent: 'purple',
    image: 'https://images.unsplash.com/photo-1561070791-2526d30994b5?w=800&h=500&q=80&auto=format&fit=crop',
  },
  {
    _id: '2', slug: { current: 'kepler-systems-web' }, client: 'Kepler Systems',
    industry: 'Enterprise SaaS', summary: 'Redesigned enterprise website and built a content marketing system targeting EMEA decision-makers.',
    metric1_num: '4.4×', metric1_label: 'Organic Traffic',
    metric2_num: '52%', metric2_label: 'Demo Request Rate',
    metric3_num: '90d', metric3_label: 'Go-Live', accent: 'cyan',
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=500&q=80&auto=format&fit=crop',
  },
  {
    _id: '3', slug: { current: 'verto-networks-identity' }, client: 'Verto Networks',
    industry: 'Telecoms', summary: 'Full rebrand and integrated marketing campaign for a B2B telecoms leader entering three new markets.',
    metric1_num: '2.2×', metric1_label: 'Brand Equity Score',
    metric2_num: '41%', metric2_label: 'Campaign Reach',
    metric3_num: '8wks', metric3_label: 'Rebrand to Launch', accent: 'gold',
    image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&h=500&q=80&auto=format&fit=crop',
  },
  {
    _id: '4', slug: { current: 'luminary-health-print' }, client: 'Luminary Health',
    industry: 'Healthtech', summary: 'Hospital-facing event branding, brochures, and exhibition materials for a Series B health technology company.',
    metric1_num: '12', metric1_label: 'Events Produced',
    metric2_num: '900+', metric2_label: 'Assets Delivered',
    metric3_num: '72hr', metric3_label: 'Avg Turnaround', accent: 'cyan',
    image: 'https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=800&h=500&q=80&auto=format&fit=crop',
  },
  {
    _id: '5', slug: { current: 'tradeaxis-campaign' }, client: 'TradeAxis',
    industry: 'Logistics', summary: 'Integrated marketing campaign — social, email, and print — to launch a new enterprise freight product.',
    metric1_num: '220%', metric1_label: 'Lead Volume',
    metric2_num: '3.1×', metric2_label: 'Cost-per-Lead Improvement',
    metric3_num: '6wks', metric3_label: 'Campaign Duration', accent: 'gold',
    image: 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=800&h=500&q=80&auto=format&fit=crop',
  },
  {
    _id: '6', slug: { current: 'novabridge-identity' }, client: 'NovaBridge Capital',
    industry: 'Financial Services', summary: 'Brand identity and investor-facing collateral for an institutional capital firm ahead of a Series A raise.',
    metric1_num: '1 round', metric1_label: 'Raise Completed',
    metric2_num: '100%', metric2_label: 'Brand Asset Coverage',
    metric3_num: '4wks', metric3_label: 'Concept to Delivery', accent: 'purple',
    image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=800&h=500&q=80&auto=format&fit=crop',
  },
]

function accentFor(accent: string) {
  if (accent === 'cyan') return { border: '#0891B2', text: '#0891B2', bg: 'rgba(8,145,178,0.06)' }
  if (accent === 'gold') return { border: '#D97706', text: '#D97706', bg: 'rgba(217,119,6,0.06)' }
  return { border: '#2563EB', text: '#2563EB', bg: 'rgba(37,99,235,0.06)' }
}

export default async function WorkPage() {
  let caseStudies = fallback as any[]
  try {
    const cs = await getCaseStudies()
    if (cs?.length) caseStudies = cs
  } catch {}

  return (
    <>
      {/* Header */}
      <section className="bg-[#F6F7FB] px-[clamp(24px,5vw,80px)] pt-40 pb-20">
        <div className="max-w-[1280px] mx-auto">
          <p className="font-mono text-[10px] tracking-[0.22em] uppercase text-[#2563EB] mb-6 hero-in hero-in-1">Selected Work</p>
          <h1
            className="font-serif font-bold text-[#0B0F14] leading-tight mb-6 hero-in hero-in-2"
            style={{ fontSize: 'clamp(44px,7vw,88px)' }}
          >
            Proof over<br />promises.
          </h1>
          <p className="text-[clamp(15px,1.2vw,18px)] text-[rgba(11,15,20,0.55)] max-w-xl leading-relaxed hero-in hero-in-3">
            Every engagement is measured by one thing: revenue outcomes. Here&apos;s what we&apos;ve delivered.
          </p>
        </div>
      </section>

      {/* Case Studies Grid */}
      <section className="bg-[#F6F7FB] px-[clamp(24px,5vw,80px)] pb-28">
        <div className="max-w-[1280px] mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {caseStudies.map((cs: any, i: number) => {
            const acc = accentFor(cs.accent)
            return (
              <Link
                key={cs._id}
                href={`/work/${cs.slug?.current || cs.slug}`}
                className="group block border border-[rgba(15,23,42,0.12)] bg-white hover:border-[rgba(37,99,235,0.40)] hover:-translate-y-1 transition-all duration-300 overflow-hidden reveal"
                style={{ transitionDelay: `${i * 80}ms` }}
              >
                {/* Cover image — Sanity upload takes priority over fallback URL */}
                {(cs.coverImage || cs.image) && (
                  <div className="relative w-full aspect-[16/9] overflow-hidden">
                    <Image
                      src={cs.coverImage ? urlFor(cs.coverImage).width(800).height(450).url() : cs.image}
                      alt={cs.client}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                  </div>
                )}

                <div className="p-8">
                  <div className="flex items-center justify-between mb-6">
                    <span
                      className="font-mono text-[9px] tracking-[0.2em] uppercase px-3 py-1.5"
                      style={{ color: acc.text, border: `1px solid ${acc.border}` }}
                    >
                      {cs.industry}
                    </span>
                    <span className="font-mono text-[10px] text-[rgba(11,15,20,0.28)] group-hover:translate-x-1 transition-transform duration-200">→</span>
                  </div>
                  <h2 className="font-serif text-[24px] font-semibold text-[#0B0F14] mb-3">{cs.client}</h2>
                  <p className="text-[13px] text-[rgba(11,15,20,0.50)] leading-relaxed mb-8">{cs.summary}</p>
                  <div className="grid grid-cols-3 gap-3 pt-6 border-t border-[rgba(37,99,235,0.08)]">
                    {[
                      [cs.metric1_num, cs.metric1_label],
                      [cs.metric2_num, cs.metric2_label],
                      [cs.metric3_num, cs.metric3_label],
                    ].map(([num, label]) => (
                      <div key={label}>
                        <p className="font-serif text-[20px] font-bold mb-0.5" style={{ color: acc.text }}>{num}</p>
                        <p className="font-mono text-[9px] tracking-[0.1em] uppercase text-[rgba(11,15,20,0.35)]">{label}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </Link>
            )
          })}
        </div>
      </section>

      {/* CTA */}
      <section className="bg-[#EEF2FF] border-t border-[rgba(37,99,235,0.08)] px-[clamp(24px,5vw,80px)] py-24 text-center">
        <div className="max-w-[1280px] mx-auto">
          <p className="font-mono text-[10px] tracking-[0.22em] uppercase text-[#2563EB] mb-4">Work With Us</p>
          <h2 className="font-serif font-bold text-[#0B0F14] mb-6" style={{ fontSize: 'clamp(32px,4vw,56px)' }}>
            Your results could be next.
          </h2>
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
