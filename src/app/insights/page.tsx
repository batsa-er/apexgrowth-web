import Image from 'next/image'
import Link from 'next/link'
import { getInsights } from '@/sanity/queries'
import { urlFor } from '@/sanity/client'

const fallback = [
  {
    _id: '1', slug: { current: 'brand-consistency-africa' },
    title: 'Why Brand Consistency Is the Highest-Leverage Investment for African Businesses',
    tag: 'Brand Strategy', label: 'Identity',
    excerpt: 'Most growing companies underinvest in brand consistency. Here is what happens to customer perception — and revenue — when you get it right across every touchpoint.',
    publishedAt: '2025-01-15', readTime: '7 min read',
    image: 'https://images.unsplash.com/photo-1586717791821-3f44a563fa4c?w=1200&h=600&q=80&auto=format&fit=crop',
  },
  {
    _id: '2', slug: { current: 'website-conversion-fundamentals' },
    title: 'The 5 Website Fundamentals That Drive Conversions in African Markets',
    tag: 'Web & Digital', label: 'CRO',
    excerpt: 'Most business websites in Africa are information sites, not conversion tools. The gap between the two is where leads and deals are lost.',
    publishedAt: '2024-12-10', readTime: '6 min read',
    image: 'https://images.unsplash.com/photo-1432888498266-38ffec3eaf0a?w=800&h=500&q=80&auto=format&fit=crop',
  },
  {
    _id: '3', slug: { current: 'b2b-social-creative-lessons' },
    title: 'What Actually Works in B2B Social Media Creative — Lessons from 50+ Campaigns',
    tag: 'Marketing', label: 'Social',
    excerpt: 'B2B social content in Africa tends to be too formal or too promotional. Here is what we have learned about creative that builds trust and drives enquiries.',
    publishedAt: '2024-11-20', readTime: '8 min read',
    image: 'https://images.unsplash.com/photo-1611532736597-de2d4265fba3?w=800&h=500&q=80&auto=format&fit=crop',
  },
  {
    _id: '4', slug: { current: 'rebrand-checklist' },
    title: 'The Rebrand Checklist: When to Rebrand, When to Refresh, and When to Leave It Alone',
    tag: 'Brand Identity', label: 'Strategy',
    excerpt: 'Not every brand problem needs a full rebrand. A strategic framework for diagnosing what your brand actually needs — and what it would cost to get it wrong.',
    publishedAt: '2024-10-05', readTime: '9 min read',
    image: 'https://images.unsplash.com/photo-1557804506-669a67965ba0?w=800&h=500&q=80&auto=format&fit=crop',
  },
]

function formatDate(iso: string) {
  return new Date(iso).toLocaleDateString('en-GB', { day: 'numeric', month: 'long', year: 'numeric' })
}

export default async function InsightsPage() {
  let insights = fallback as any[]
  try {
    const i = await getInsights()
    if (i?.length) insights = i
  } catch {}

  return (
    <>
      {/* Header */}
      <section className="bg-[#F6F7FB] px-[clamp(24px,5vw,80px)] pt-40 pb-20">
        <div className="max-w-[1280px] mx-auto">
          <p className="font-mono text-[10px] tracking-[0.22em] uppercase text-[#2563EB] mb-6 hero-in hero-in-1">Insights</p>
          <h1
            className="font-serif font-bold text-[#0B0F14] leading-tight mb-6 hero-in hero-in-2"
            style={{ fontSize: 'clamp(44px,7vw,88px)' }}
          >
            Brand<br />intelligence.
          </h1>
          <p className="text-[clamp(15px,1.2vw,18px)] text-[rgba(11,15,20,0.55)] max-w-xl leading-relaxed hero-in hero-in-3">
            Creative frameworks, brand strategy, and campaign insights from the Apex Growth team — built from real engagements, not theory.
          </p>
        </div>
      </section>

      {/* Articles */}
      <section className="bg-[#F6F7FB] px-[clamp(24px,5vw,80px)] pb-28">
        <div className="max-w-[1280px] mx-auto">
          {/* Featured */}
          {insights[0] && (
            <Link
              href={`/insights/${insights[0].slug?.current || insights[0].slug}`}
              className="group block border border-[rgba(37,99,235,0.12)] bg-[#EEF2FF] mb-6 hover:border-[rgba(37,99,235,0.30)] hover:-translate-y-0.5 transition-all duration-300 overflow-hidden reveal"
            >
              {/* Featured cover image — Sanity upload takes priority over fallback URL */}
              {(insights[0].coverImage || insights[0].image) && (
                <div className="relative w-full aspect-[21/9] overflow-hidden">
                  <Image
                    src={insights[0].coverImage ? urlFor(insights[0].coverImage).width(1200).height(514).url() : insights[0].image}
                    alt={insights[0].title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                    priority
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[rgba(11,15,20,0.30)] to-transparent" />
                </div>
              )}
              <div className="p-12">
                <div className="flex items-center gap-3 mb-6">
                  <span className="font-mono text-[9px] tracking-[0.2em] uppercase px-3 py-1.5 text-[#2563EB] border border-[rgba(37,99,235,0.30)]">{insights[0].tag}</span>
                  {insights[0].label && <span className="font-mono text-[9px] tracking-[0.2em] uppercase px-3 py-1.5 text-[rgba(11,15,20,0.35)] border border-[rgba(15,23,42,0.10)]">{insights[0].label}</span>}
                </div>
                <h2 className="font-serif font-bold text-[#0B0F14] leading-tight mb-4 group-hover:text-[#2563EB] transition-colors" style={{ fontSize: 'clamp(24px,3vw,40px)' }}>
                  {insights[0].title}
                </h2>
                <p className="text-[15px] text-[rgba(11,15,20,0.55)] leading-relaxed max-w-2xl mb-8">{insights[0].excerpt}</p>
                <div className="flex items-center gap-4">
                  <span className="font-mono text-[10px] tracking-[0.1em] text-[rgba(11,15,20,0.30)]">{formatDate(insights[0].publishedAt)}</span>
                  <span className="text-[rgba(11,15,20,0.15)]">·</span>
                  <span className="font-mono text-[10px] tracking-[0.1em] text-[rgba(11,15,20,0.30)]">{insights[0].readTime}</span>
                </div>
              </div>
            </Link>
          )}

          {/* Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {insights.slice(1).map((ins: any, i: number) => (
              <Link
                key={ins._id}
                href={`/insights/${ins.slug?.current || ins.slug}`}
                className="group block border border-[rgba(37,99,235,0.12)] bg-[#EEF2FF] hover:border-[rgba(37,99,235,0.30)] hover:-translate-y-0.5 transition-all duration-300 overflow-hidden reveal"
                style={{ transitionDelay: `${i * 80}ms` }}
              >
                {/* Grid card cover image — Sanity upload takes priority over fallback URL */}
                {(ins.coverImage || ins.image) && (
                  <div className="relative w-full aspect-[16/9] overflow-hidden">
                    <Image
                      src={ins.coverImage ? urlFor(ins.coverImage).width(800).height(450).url() : ins.image}
                      alt={ins.title}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                  </div>
                )}
                <div className="p-8">
                  <div className="flex items-center gap-2 mb-5">
                    <span className="font-mono text-[9px] tracking-[0.2em] uppercase px-3 py-1 text-[#2563EB] border border-[rgba(37,99,235,0.30)]">{ins.tag}</span>
                  </div>
                  <h2 className="font-serif text-[20px] font-semibold text-[#0B0F14] leading-snug mb-3 group-hover:text-[#2563EB] transition-colors">
                    {ins.title}
                  </h2>
                  <p className="text-[13px] text-[rgba(11,15,20,0.50)] leading-relaxed mb-6">{ins.excerpt}</p>
                  <div className="flex items-center gap-3">
                    <span className="font-mono text-[9px] tracking-[0.1em] text-[rgba(11,15,20,0.28)]">{formatDate(ins.publishedAt)}</span>
                    <span className="text-[rgba(11,15,20,0.15)]">·</span>
                    <span className="font-mono text-[9px] tracking-[0.1em] text-[rgba(11,15,20,0.28)]">{ins.readTime}</span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
