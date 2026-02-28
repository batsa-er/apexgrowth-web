import Link from 'next/link'
import { getCaseStudies } from '@/sanity/queries'

const fallback = [
  {
    _id: '1', slug: { current: 'fintech-expansion' }, client: 'PanAfrica Pay',
    industry: 'Fintech', summary: 'Rebuilt pipeline architecture and demand gen motion across 6 African markets.',
    metric1_num: '312%', metric1_label: 'Pipeline Growth',
    metric2_num: '4.1×', metric2_label: 'SQL Velocity',
    metric3_num: '18mo', metric3_label: 'Payback Period', accent: 'purple',
  },
  {
    _id: '2', slug: { current: 'enterprise-saas' }, client: 'Kepler Systems',
    industry: 'Enterprise SaaS', summary: 'Deployed ABM motion and full-funnel automation for EMEA enterprise segment.',
    metric1_num: '89%', metric1_label: 'Win Rate Lift',
    metric2_num: '$2.4M', metric2_label: 'Incremental ARR',
    metric3_num: '60d', metric3_label: 'Time to Revenue', accent: 'cyan',
  },
  {
    _id: '3', slug: { current: 'telecoms-growth' }, client: 'Verto Networks',
    industry: 'Telecoms', summary: 'Overhauled GTM strategy and revenue operations for B2B telecoms leader.',
    metric1_num: '2.8×', metric1_label: 'Revenue Growth',
    metric2_num: '41%', metric2_label: 'CAC Reduction',
    metric3_num: '14d', metric3_label: 'Sales Cycle Cut', accent: 'gold',
  },
  {
    _id: '4', slug: { current: 'healthtech-scale' }, client: 'Luminary Health',
    industry: 'Healthtech', summary: 'Scaled enterprise sales motion from seed to Series B across West Africa.',
    metric1_num: '5.2×', metric1_label: 'Pipeline Expansion',
    metric2_num: '73%', metric2_label: 'Close Rate Lift',
    metric3_num: '$1.8M', metric3_label: 'New ARR', accent: 'cyan',
  },
  {
    _id: '5', slug: { current: 'logistics-demand' }, client: 'TradeAxis',
    industry: 'Logistics', summary: 'Built demand generation system and B2B sales infrastructure from ground zero.',
    metric1_num: '220%', metric1_label: 'Lead Volume',
    metric2_num: '3.6×', metric2_label: 'Revenue per Rep',
    metric3_num: '22d', metric3_label: 'Ramp Time', accent: 'gold',
  },
  {
    _id: '6', slug: { current: 'investment-banking' }, client: 'NovaBridge Capital',
    industry: 'Financial Services', summary: 'Repositioned brand and built institutional client acquisition program.',
    metric1_num: '4×', metric1_label: 'Deal Flow',
    metric2_num: '58%', metric2_label: 'Pitch Win Rate',
    metric3_num: '9mo', metric3_label: 'To Profitability', accent: 'purple',
  },
]

function accentFor(accent: string) {
  if (accent === 'cyan') return { border: '#7EFFF5', text: '#7EFFF5', bg: 'rgba(126,255,245,0.06)' }
  if (accent === 'gold') return { border: '#FFD166', text: '#FFD166', bg: 'rgba(255,209,102,0.06)' }
  return { border: '#C084FC', text: '#C084FC', bg: 'rgba(192,132,252,0.06)' }
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
      <section className="bg-[#09041A] px-[clamp(24px,5vw,80px)] pt-40 pb-20">
        <div className="max-w-[1280px] mx-auto">
          <p className="font-mono text-[10px] tracking-[0.22em] uppercase text-[#C084FC] mb-6">Selected Work</p>
          <h1
            className="font-serif font-bold text-[#F2EEFF] leading-tight mb-6"
            style={{ fontSize: 'clamp(44px,7vw,88px)' }}
          >
            Proof over<br />promises.
          </h1>
          <p className="text-[clamp(15px,1.2vw,18px)] text-[rgba(242,238,255,0.55)] max-w-xl leading-relaxed">
            Every engagement is measured by one thing: revenue outcomes. Here&apos;s what we&apos;ve delivered.
          </p>
        </div>
      </section>

      {/* Case Studies Grid */}
      <section className="bg-[#09041A] px-[clamp(24px,5vw,80px)] pb-28">
        <div className="max-w-[1280px] mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {caseStudies.map((cs: any) => {
            const acc = accentFor(cs.accent)
            return (
              <Link
                key={cs._id}
                href={`/work/${cs.slug?.current || cs.slug}`}
                className="group block p-8 border border-[rgba(192,132,252,0.12)] bg-[#110828] hover:border-[rgba(192,132,252,0.35)] hover:-translate-y-1 transition-all duration-300"
              >
                <div className="flex items-center justify-between mb-6">
                  <span
                    className="font-mono text-[9px] tracking-[0.2em] uppercase px-3 py-1.5"
                    style={{ color: acc.text, border: `1px solid ${acc.border}` }}
                  >
                    {cs.industry}
                  </span>
                  <span className="font-mono text-[10px] text-[rgba(242,238,255,0.28)] group-hover:translate-x-1 transition-transform duration-200">→</span>
                </div>
                <h2 className="font-serif text-[24px] font-semibold text-[#F2EEFF] mb-3">{cs.client}</h2>
                <p className="text-[13px] text-[rgba(242,238,255,0.50)] leading-relaxed mb-8">{cs.summary}</p>
                <div className="grid grid-cols-3 gap-3 pt-6 border-t border-[rgba(192,132,252,0.08)]">
                  {[
                    [cs.metric1_num, cs.metric1_label],
                    [cs.metric2_num, cs.metric2_label],
                    [cs.metric3_num, cs.metric3_label],
                  ].map(([num, label]) => (
                    <div key={label}>
                      <p className="font-serif text-[20px] font-bold mb-0.5" style={{ color: acc.text }}>{num}</p>
                      <p className="font-mono text-[9px] tracking-[0.1em] uppercase text-[rgba(242,238,255,0.35)]">{label}</p>
                    </div>
                  ))}
                </div>
              </Link>
            )
          })}
        </div>
      </section>

      {/* CTA */}
      <section className="bg-[#110828] border-t border-[rgba(192,132,252,0.08)] px-[clamp(24px,5vw,80px)] py-24 text-center">
        <div className="max-w-[1280px] mx-auto">
          <p className="font-mono text-[10px] tracking-[0.22em] uppercase text-[#C084FC] mb-4">Work With Us</p>
          <h2 className="font-serif font-bold text-[#F2EEFF] mb-6" style={{ fontSize: 'clamp(32px,4vw,56px)' }}>
            Your results could be next.
          </h2>
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
