import Link from 'next/link'
import { getCaseStudies, getTestimonials } from '@/sanity/queries'
import CaseCard from '@/components/CaseCard'

// Fallback data for when Sanity is not connected
const fallbackCaseStudies = [
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
]

const fallbackTestimonial = {
  quote: 'Apex Growth did not just give us a strategy deck — they embedded with the team, rebuilt our revenue engine from scratch, and the numbers speak for themselves.',
  name: 'Amara Diallo',
  role: 'CEO, PanAfrica Pay',
  initials: 'AD',
}

export default async function HomePage() {
  let caseStudies = fallbackCaseStudies as any[]
  let testimonial = fallbackTestimonial as any

  try {
    const [cs, testimonials] = await Promise.all([getCaseStudies(), getTestimonials()])
    if (cs?.length) caseStudies = cs.slice(0, 3)
    if (testimonials?.length) testimonial = testimonials.find((t: any) => t.featured) || testimonials[0]
  } catch {
    // use fallback data
  }

  return (
    <>
      {/* ── HERO ─────────────────────────────────────────────── */}
      <section className="relative min-h-screen flex flex-col justify-center px-[clamp(24px,5vw,80px)] pt-24 pb-20 overflow-hidden bg-[#09041A]">
        {/* Radial glows */}
        <div className="absolute top-[-20%] left-[-10%] w-[600px] h-[600px] rounded-full bg-[radial-gradient(circle,rgba(192,132,252,0.18)_0%,transparent_70%)] pointer-events-none" />
        <div className="absolute bottom-[-10%] right-[-5%] w-[500px] h-[500px] rounded-full bg-[radial-gradient(circle,rgba(126,255,245,0.10)_0%,transparent_70%)] pointer-events-none" />

        <div className="relative max-w-[1280px] mx-auto w-full">
          <p className="font-mono text-[11px] tracking-[0.22em] uppercase text-[#C084FC] mb-8">
            Revenue Architecture · Africa &amp; Global
          </p>

          <h1 className="font-serif font-bold leading-[0.92] tracking-[-0.02em] text-[#F2EEFF] mb-10"
            style={{ fontSize: 'clamp(56px,9vw,120px)' }}>
            We build<br />
            <span className="text-[#C084FC]">predictable</span><br />
            revenue.
          </h1>

          <p className="text-[clamp(16px,1.4vw,20px)] text-[rgba(242,238,255,0.60)] max-w-xl leading-relaxed mb-12">
            Strategy, demand generation, and automation for enterprise, fintech,
            and high-growth companies across Africa and globally.
          </p>

          <div className="flex flex-wrap gap-4">
            <Link
              href="/contact"
              className="font-mono text-[11px] tracking-[0.14em] uppercase font-medium bg-[#C084FC] text-[#09041A] px-8 py-4 hover:bg-[#E0AAFF] transition-colors duration-200"
            >
              Book Strategy Call
            </Link>
            <Link
              href="/work"
              className="font-mono text-[11px] tracking-[0.14em] uppercase font-medium border border-[rgba(192,132,252,0.35)] text-[rgba(242,238,255,0.70)] px-8 py-4 hover:border-[#C084FC] hover:text-[#F2EEFF] transition-colors duration-200"
            >
              View Our Work
            </Link>
          </div>
        </div>

        {/* Client marquee */}
        <div className="relative max-w-[1280px] mx-auto w-full mt-24 overflow-hidden">
          <p className="font-mono text-[9px] tracking-[0.22em] uppercase text-[rgba(242,238,255,0.28)] mb-6">
            Trusted by leading companies
          </p>
          <div className="flex gap-16 animate-marquee whitespace-nowrap">
            {['PanAfrica Pay', 'Kepler Systems', 'Verto Networks', 'Luminary Health', 'TradeAxis', 'NovaBridge', 'PanAfrica Pay', 'Kepler Systems', 'Verto Networks', 'Luminary Health', 'TradeAxis', 'NovaBridge'].map((name, i) => (
              <span key={i} className="font-mono text-[11px] tracking-[0.18em] uppercase text-[rgba(242,238,255,0.22)]">{name}</span>
            ))}
          </div>
        </div>
      </section>

      {/* ── STATS BAR ────────────────────────────────────────── */}
      <section className="bg-[#110828] border-t-[3px] border-t-[#C084FC] border-b border-b-[rgba(192,132,252,0.08)] px-[clamp(24px,5vw,80px)] py-16">
        <div className="max-w-[1280px] mx-auto grid grid-cols-2 md:grid-cols-4 gap-10">
          {[
            { num: '$280M+', label: 'Revenue Generated' },
            { num: '40+', label: 'Clients Globally' },
            { num: '6', label: 'African Markets' },
            { num: '94%', label: 'Retention Rate' },
          ].map(({ num, label }) => (
            <div key={label}>
              <p className="font-serif font-bold text-[#F2EEFF] mb-1"
                style={{ fontSize: 'clamp(36px,5vw,64px)', lineHeight: 1 }}>{num}</p>
              <p className="font-mono text-[10px] tracking-[0.16em] uppercase text-[rgba(242,238,255,0.40)]">{label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ── WORK ─────────────────────────────────────────────── */}
      <section className="bg-[#09041A] px-[clamp(24px,5vw,80px)] py-28">
        <div className="max-w-[1280px] mx-auto">
          <div className="flex items-end justify-between mb-16 gap-6 flex-wrap">
            <div>
              <p className="font-mono text-[10px] tracking-[0.22em] uppercase text-[#C084FC] mb-4">Selected Work</p>
              <h2 className="font-serif font-bold text-[#F2EEFF] leading-tight"
                style={{ fontSize: 'clamp(36px,5vw,64px)' }}>Results that compound.</h2>
            </div>
            <Link href="/work" className="font-mono text-[10px] tracking-[0.16em] uppercase text-[rgba(242,238,255,0.45)] hover:text-[#C084FC] transition-colors duration-200 shrink-0">
              All case studies →
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {caseStudies.map((cs: any) => (
              <CaseCard
                key={cs._id}
                slug={cs.slug?.current || cs.slug}
                client={cs.client}
                industry={cs.industry}
                summary={cs.summary}
                metric1_num={cs.metric1_num}
                metric1_label={cs.metric1_label}
                metric2_num={cs.metric2_num}
                metric2_label={cs.metric2_label}
                metric3_num={cs.metric3_num}
                metric3_label={cs.metric3_label}
                accent={cs.accent}
              />
            ))}
          </div>
        </div>
      </section>

      {/* ── SERVICES ─────────────────────────────────────────── */}
      <section className="bg-[#110828] px-[clamp(24px,5vw,80px)] py-28">
        <div className="max-w-[1280px] mx-auto">
          <div className="mb-16">
            <p className="font-mono text-[10px] tracking-[0.22em] uppercase text-[#C084FC] mb-4">What We Do</p>
            <h2 className="font-serif font-bold text-[#F2EEFF] leading-tight"
              style={{ fontSize: 'clamp(36px,5vw,64px)' }}>Three pillars.<br />One engine.</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                num: '01', slug: 'revenue-strategy', title: 'Revenue Strategy',
                tagline: 'Architecture before execution.',
                description: 'We map your entire revenue system — ICP, GTM motion, pipeline design, pricing, and competitive positioning — then build the playbook your team can execute.',
                outcomes: ['Market & ICP definition', 'GTM motion design', 'Competitive positioning', 'Revenue model architecture'],
              },
              {
                num: '02', slug: 'demand-generation', title: 'Demand Generation',
                tagline: 'Demand you own, not rent.',
                description: 'Full-funnel demand programs: content, paid, ABM, outbound, and partner channels — built to generate pipeline that converts.',
                outcomes: ['Multi-channel demand programs', 'ABM & account targeting', 'Content & SEO systems', 'Paid media management'],
              },
              {
                num: '03', slug: 'revenue-operations', title: 'Revenue Operations',
                tagline: 'Systems that scale with you.',
                description: 'CRM architecture, automation, attribution, and RevOps infrastructure so your team has the data and tooling to hit targets consistently.',
                outcomes: ['CRM design & implementation', 'Sales automation & sequences', 'Attribution & reporting', 'Tech stack optimisation'],
              },
            ].map(({ num, slug, title, tagline, description, outcomes }) => (
              <Link
                key={num}
                href={`/services/${slug}`}
                className="group relative block p-8 border border-[rgba(192,132,252,0.08)] bg-[#09041A] hover:border-[rgba(192,132,252,0.30)] transition-all duration-300 overflow-hidden"
              >
                {/* Watermark number */}
                <span className="absolute bottom-4 right-6 font-serif font-bold text-[120px] leading-none text-[rgba(192,132,252,0.04)] select-none pointer-events-none group-hover:text-[rgba(192,132,252,0.08)] transition-colors duration-300">
                  {num}
                </span>

                <div className="relative">
                  <p className="font-mono text-[10px] tracking-[0.2em] uppercase text-[#C084FC] mb-6">{num}</p>
                  <h3 className="font-serif text-[26px] font-bold text-[#F2EEFF] mb-2">{title}</h3>
                  <p className="font-mono text-[11px] tracking-[0.08em] text-[rgba(242,238,255,0.40)] italic mb-5">{tagline}</p>
                  <p className="text-[13px] text-[rgba(242,238,255,0.55)] leading-relaxed mb-8">{description}</p>

                  <ul className="space-y-2">
                    {outcomes.map(o => (
                      <li key={o} className="flex items-start gap-2">
                        <span className="text-[#C084FC] mt-0.5 shrink-0 text-[10px]">▸</span>
                        <span className="font-mono text-[11px] tracking-[0.06em] text-[rgba(242,238,255,0.50)]">{o}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ── TESTIMONIAL ──────────────────────────────────────── */}
      <section className="bg-[#09041A] px-[clamp(24px,5vw,80px)] py-28">
        <div className="max-w-[1280px] mx-auto">
          <div className="max-w-3xl mx-auto text-center">
            <div className="inline-flex items-center gap-1 mb-10">
              {[...Array(5)].map((_, i) => (
                <span key={i} className="text-[#C084FC] text-lg">★</span>
              ))}
            </div>
            <blockquote
              className="font-serif font-semibold text-[#F2EEFF] leading-snug mb-10"
              style={{ fontSize: 'clamp(22px,3vw,36px)' }}
            >
              &ldquo;{testimonial.quote}&rdquo;
            </blockquote>
            <div className="flex items-center justify-center gap-4">
              <div className="w-10 h-10 rounded-full bg-[rgba(192,132,252,0.15)] border border-[rgba(192,132,252,0.30)] flex items-center justify-center">
                <span className="font-mono text-[10px] text-[#C084FC]">{testimonial.initials}</span>
              </div>
              <div className="text-left">
                <p className="font-mono text-[12px] tracking-[0.08em] text-[#F2EEFF]">{testimonial.name}</p>
                <p className="font-mono text-[10px] tracking-[0.06em] text-[rgba(242,238,255,0.40)]">{testimonial.role}</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── CTA ──────────────────────────────────────────────── */}
      <section className="relative bg-[#110828] px-[clamp(24px,5vw,80px)] py-32 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(192,132,252,0.12)_0%,transparent_70%)] pointer-events-none" />
        <div className="relative max-w-[1280px] mx-auto text-center">
          <p className="font-mono text-[10px] tracking-[0.22em] uppercase text-[#C084FC] mb-6">Ready to Scale?</p>
          <h2
            className="font-serif font-bold text-[#F2EEFF] leading-tight mb-6"
            style={{ fontSize: 'clamp(40px,6vw,80px)' }}
          >
            Let&apos;s build your<br />revenue engine.
          </h2>
          <p className="text-[clamp(15px,1.2vw,18px)] text-[rgba(242,238,255,0.55)] max-w-lg mx-auto mb-12">
            Book a complimentary 45-minute strategy call. We&apos;ll audit your current pipeline, identify the biggest growth levers, and outline a roadmap.
          </p>
          <Link
            href="/contact"
            className="inline-block font-mono text-[11px] tracking-[0.14em] uppercase font-medium bg-[#C084FC] text-[#09041A] px-12 py-5 hover:bg-[#E0AAFF] transition-colors duration-200"
          >
            Book Strategy Call
          </Link>
        </div>
      </section>
    </>
  )
}
