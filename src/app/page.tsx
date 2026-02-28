import Image from 'next/image'
import Link from 'next/link'
import { getCaseStudies, getTestimonials } from '@/sanity/queries'
import CaseCard from '@/components/CaseCard'
import { urlFor } from '@/sanity/client'

// Fallback data for when Sanity is not connected
const fallbackCaseStudies = [
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
      <section className="relative min-h-screen flex flex-col justify-center px-[clamp(24px,5vw,80px)] pt-24 pb-20 overflow-hidden bg-[#F6F7FB]">
        {/* Radial glows */}
        <div className="absolute top-[-20%] left-[-10%] w-[600px] h-[600px] rounded-full bg-[radial-gradient(circle,rgba(37,99,235,0.10)_0%,transparent_70%)] pointer-events-none" />
        <div className="absolute bottom-[-10%] right-[-5%] w-[500px] h-[500px] rounded-full bg-[radial-gradient(circle,rgba(37,99,235,0.06)_0%,transparent_70%)] pointer-events-none" />

        <div className="relative max-w-[1280px] mx-auto w-full grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Text */}
          <div>
            <p className="font-mono text-[11px] tracking-[0.22em] uppercase text-[#2563EB] mb-8 hero-in hero-in-1">
              Integrated Creative Agency · Accra, Ghana
            </p>

            <h1 className="font-serif font-bold leading-[1.0] tracking-[-0.03em] text-[#0B0F14] mb-10 hero-in hero-in-2"
              style={{ fontSize: 'clamp(48px,6vw,88px)' }}>
              We Build Brands<br />
              That <span className="text-[#2563EB] italic">Perform</span><br />
              Online &amp; Offline.
            </h1>

            <p className="text-[clamp(16px,1.4vw,20px)] text-[rgba(11,15,20,0.60)] max-w-xl leading-relaxed mb-12 hero-in hero-in-3">
              Brand identity, websites, marketing campaigns, and print production — delivered with one consistent standard, from concept to execution.
            </p>

            <div className="flex flex-wrap gap-4 hero-in hero-in-4">
              <Link
                href="/contact"
                className="font-mono text-[11px] tracking-[0.14em] uppercase font-medium bg-[#2563EB] text-white px-8 py-4 hover:bg-[#1D4ED8] transition-colors duration-200"
              >
                Book a Brand Strategy Call
              </Link>
              <Link
                href="/work"
                className="font-mono text-[11px] tracking-[0.14em] uppercase font-medium border border-[rgba(37,99,235,0.35)] text-[rgba(11,15,20,0.70)] px-8 py-4 hover:border-[#2563EB] hover:text-[#0B0F14] transition-colors duration-200"
              >
                View Case Studies
              </Link>
            </div>
          </div>

          {/* Hero image */}
          <div className="hidden lg:block relative hero-in hero-in-5">
            <div className="relative aspect-[4/5] overflow-hidden">
              <Image
                src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=900&h=1100&q=85&auto=format&fit=crop"
                alt="Creative team at work"
                fill
                className="object-cover"
                priority
              />
              {/* Blue tint overlay to match brand */}
              <div className="absolute inset-0 bg-[rgba(37,99,235,0.06)]" />
            </div>
            {/* Decorative border offset */}
            <div className="absolute -bottom-4 -right-4 w-full h-full border border-[rgba(37,99,235,0.20)] pointer-events-none" />
          </div>
        </div>

        {/* Client marquee */}
        <div className="relative max-w-[1280px] mx-auto w-full mt-20 overflow-hidden hero-in hero-in-5">
          <p className="font-mono text-[9px] tracking-[0.22em] uppercase text-[rgba(11,15,20,0.28)] mb-6">
            Trusted by
          </p>
          <div className="flex gap-16 animate-marquee whitespace-nowrap" aria-hidden="true">
            {['Finserv Africa', 'Meridian Health', 'Volta Capital', 'PrimeRealty GH', 'TechBridge NG', 'AfriCare Group', 'Kora Finance', 'Finserv Africa', 'Meridian Health', 'Volta Capital', 'PrimeRealty GH', 'TechBridge NG', 'AfriCare Group', 'Kora Finance'].map((name, i) => (
              <span key={i} className="font-mono text-[11px] tracking-[0.18em] uppercase text-[rgba(11,15,20,0.22)]">{name}</span>
            ))}
          </div>
        </div>
      </section>

      {/* ── STATS BAR ────────────────────────────────────────── */}
      <section className="bg-[#EEF2FF] border-t-[3px] border-t-[#2563EB] border-b border-b-[rgba(37,99,235,0.08)] px-[clamp(24px,5vw,80px)] py-16">
        <div className="max-w-[1280px] mx-auto grid grid-cols-2 md:grid-cols-4 gap-10">
          {[
            { num: '8.4×', label: 'Average ROI — enterprise clients, Year 1' },
            { num: '62%', label: 'Avg increase in qualified pipeline within 90 days' },
            { num: '$47M', label: 'In verified client revenue attributed to our systems' },
            { num: '94%', label: 'Client retention rate' },
          ].map(({ num, label }, i) => (
            <div key={label} className="reveal-scale" style={{ transitionDelay: `${i * 90}ms` }}>
              <p className="font-serif font-bold text-[#0B0F14] mb-1"
                style={{ fontSize: 'clamp(36px,5vw,64px)', lineHeight: 1 }}>{num}</p>
              <p className="font-mono text-[10px] tracking-[0.16em] uppercase text-[rgba(11,15,20,0.40)]">{label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ── WORK ─────────────────────────────────────────────── */}
      <section className="bg-[#F6F7FB] px-[clamp(24px,5vw,80px)] py-28">
        <div className="max-w-[1280px] mx-auto">
          <div className="flex items-end justify-between mb-16 gap-6 flex-wrap reveal">
            <div>
              <p className="font-mono text-[10px] tracking-[0.22em] uppercase text-[#2563EB] mb-4">Verified Results</p>
              <h2 className="font-serif font-bold text-[#0B0F14] leading-tight"
                style={{ fontSize: 'clamp(36px,5vw,64px)' }}>The work<br />speaks clearly.</h2>
            </div>
            <Link href="/work" className="font-mono text-[10px] tracking-[0.16em] uppercase text-[rgba(11,15,20,0.45)] hover:text-[#2563EB] transition-colors duration-200 shrink-0">
              All Case Studies →
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {caseStudies.map((cs: any, i: number) => (
              <div key={cs._id} className="reveal" style={{ transitionDelay: `${i * 100}ms` }}>
                <CaseCard
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
                  image={cs.coverImage ? urlFor(cs.coverImage).width(800).height(450).url() : cs.image}
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── SERVICES ─────────────────────────────────────────── */}
      <section className="bg-[#EEF2FF] px-[clamp(24px,5vw,80px)] py-28">
        <div className="max-w-[1280px] mx-auto">
          <div className="mb-16 text-center reveal">
            <p className="font-mono text-[10px] tracking-[0.22em] uppercase text-[#2563EB] mb-4">Full-Service, Structured</p>
            <h2 className="font-serif font-bold text-[#0B0F14] leading-tight mb-4"
              style={{ fontSize: 'clamp(36px,5vw,64px)' }}>Everything your brand needs.<br />One integrated agency.</h2>
            <p className="text-[clamp(15px,1.2vw,18px)] text-[rgba(11,15,20,0.50)] max-w-2xl mx-auto">
              We deliver brand, digital, marketing, and production with a single creative direction—so every touchpoint looks, feels, and performs like one brand.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                num: '01', slug: 'brand-identity', title: 'Brand & Identity',
                tagline: 'Brand systems that scale.',
                description: 'Logo and identity design, brand guidelines, corporate profiles, packaging design, and rebrands—built for clarity and consistency.',
                outcomes: ['Logo & identity suite', 'Brand guidelines & templates', 'Packaging & collateral design'],
                pricing: 'Projects · Retainers',
              },
              {
                num: '02', slug: 'web-digital', title: 'Web & Digital',
                tagline: 'Websites built to convert.',
                description: 'UX-led websites, landing pages, and e-commerce that look premium and guide visitors to take action—fast, mobile-first, and measurable.',
                outcomes: ['UX/UI + web development', 'Landing pages & CRO', 'Analytics & lead capture'],
                pricing: 'Build · Maintain',
              },
              {
                num: '03', slug: 'marketing-campaigns', title: 'Marketing & Campaigns',
                tagline: 'Creative that drives demand.',
                description: 'Content, social media, paid ads, email, and campaign execution—designed with a clear message and tracked outcomes.',
                outcomes: ['Social content & management', 'Paid ads (Meta/Google/LinkedIn)', 'Email & campaign reporting'],
                pricing: 'Monthly Retainers',
              },
              {
                num: '04', slug: 'print-production', title: 'Print & Production',
                tagline: 'From screen to physical.',
                description: 'Corporate printing, event branding, signage, and packaging production—managed end-to-end so quality stays consistent.',
                outcomes: ['Corporate stationery & brochures', 'Event branding & large format', 'Packaging production support'],
                pricing: 'Production · Fulfilment',
              },
            ].map(({ num, slug, title, tagline, description, outcomes, pricing }, i) => (
              <Link
                key={num}
                href={`/services/${slug}`}
                className="group relative flex flex-col p-8 border border-[rgba(37,99,235,0.08)] bg-[#F6F7FB] hover:border-[rgba(37,99,235,0.30)] transition-all duration-300 overflow-hidden reveal"
                style={{ transitionDelay: `${i * 80}ms` }}
              >
                {/* Watermark number */}
                <span className="absolute bottom-4 right-6 font-serif font-bold text-[120px] leading-none text-[rgba(37,99,235,0.04)] select-none pointer-events-none group-hover:text-[rgba(37,99,235,0.08)] transition-colors duration-300">
                  {num}
                </span>

                <div className="relative flex-1">
                  <p className="font-mono text-[10px] tracking-[0.2em] uppercase text-[#2563EB] mb-6">{num}</p>
                  <h3 className="font-serif text-[24px] font-bold text-[#0B0F14] mb-2">{title}</h3>
                  <p className="font-mono text-[11px] tracking-[0.08em] text-[rgba(11,15,20,0.40)] italic mb-5">{tagline}</p>
                  <p className="text-[13px] text-[rgba(11,15,20,0.55)] leading-relaxed mb-8">{description}</p>

                  <ul className="space-y-2 mb-8">
                    {outcomes.map(o => (
                      <li key={o} className="flex items-start gap-2">
                        <span className="text-[#2563EB] mt-0.5 shrink-0 text-[10px]">▸</span>
                        <span className="font-mono text-[11px] tracking-[0.06em] text-[rgba(11,15,20,0.50)]">{o}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <p className="relative font-mono text-[9px] tracking-[0.16em] uppercase text-[rgba(11,15,20,0.25)] border-t border-[rgba(37,99,235,0.08)] pt-4">{pricing}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ── TESTIMONIAL ──────────────────────────────────────── */}
      <section className="bg-[#F6F7FB] px-[clamp(24px,5vw,80px)] py-28">
        <div className="max-w-[1280px] mx-auto">
          <div className="max-w-3xl mx-auto text-center">
            <div className="inline-flex items-center gap-1 mb-10 reveal">
              {[...Array(5)].map((_, i) => (
                <span key={i} className="text-[#2563EB] text-lg">★</span>
              ))}
            </div>
            <blockquote
              className="font-serif font-semibold text-[#0B0F14] leading-snug mb-10 reveal"
              style={{ fontSize: 'clamp(22px,3vw,36px)', transitionDelay: '100ms' }}
            >
              &ldquo;{testimonial.quote}&rdquo;
            </blockquote>
            <div className="flex items-center justify-center gap-4 reveal" style={{ transitionDelay: '220ms' }}>
              <div className="w-10 h-10 rounded-full bg-[rgba(37,99,235,0.15)] border border-[rgba(37,99,235,0.30)] flex items-center justify-center">
                <span className="font-mono text-[10px] text-[#2563EB]">{testimonial.initials}</span>
              </div>
              <div className="text-left">
                <p className="font-mono text-[12px] tracking-[0.08em] text-[#0B0F14]">{testimonial.name}</p>
                <p className="font-mono text-[10px] tracking-[0.06em] text-[rgba(11,15,20,0.40)]">{testimonial.role}</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── CTA ──────────────────────────────────────────────── */}
      <section className="relative bg-[#EEF2FF] px-[clamp(24px,5vw,80px)] py-32 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(37,99,235,0.08)_0%,transparent_70%)] pointer-events-none" />
        <div className="relative max-w-[1280px] mx-auto text-center reveal">
          <p className="font-mono text-[10px] tracking-[0.22em] uppercase text-[#2563EB] mb-6">Next Step</p>
          <h2
            className="font-serif font-bold text-[#0B0F14] leading-tight mb-6"
            style={{ fontSize: 'clamp(40px,6vw,80px)' }}
          >
            Stop hoping<br />for growth.<br /><span className="italic">Engineer it.</span>
          </h2>
          <p className="text-[clamp(15px,1.2vw,18px)] text-[rgba(11,15,20,0.55)] max-w-lg mx-auto mb-12">
            The Brand Strategy Call is a 45-minute session with a senior Apex Growth strategist. We&apos;ll review your current operation, identify the highest-leverage growth opportunities, and outline exactly what a brand architecture would look like for your business. No pitch. No pressure. Just strategic clarity.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4">
            <Link
              href="/contact"
              className="inline-block font-mono text-[11px] tracking-[0.14em] uppercase font-medium bg-[#2563EB] text-white px-12 py-5 hover:bg-[#1D4ED8] transition-colors duration-200"
            >
              Book Your Brand Strategy Call
            </Link>
            <Link
              href="/work"
              className="inline-block font-mono text-[11px] tracking-[0.14em] uppercase font-medium border border-[rgba(37,99,235,0.35)] text-[rgba(11,15,20,0.70)] px-8 py-5 hover:border-[#2563EB] hover:text-[#0B0F14] transition-colors duration-200"
            >
              Review Our Results First
            </Link>
          </div>
          <p className="font-mono text-[9px] tracking-[0.12em] uppercase text-[rgba(11,15,20,0.25)] mt-8">
            45 minutes &nbsp;·&nbsp; No obligation &nbsp;·&nbsp; Senior strategist only &nbsp;·&nbsp; Limited availability
          </p>
        </div>
      </section>
    </>
  )
}
