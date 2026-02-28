import Link from 'next/link'
import { getInsights } from '@/sanity/queries'

const fallback = [
  {
    _id: '1', slug: { current: 'building-enterprise-pipeline-africa' },
    title: 'Building Enterprise Pipeline in Africa: A GTM Framework',
    tag: 'Strategy', label: 'GTM',
    excerpt: 'Enterprise sales in African markets requires a fundamentally different approach to pipeline generation. Here is what we have learned across 40+ engagements.',
    publishedAt: '2025-01-15', readTime: '8 min read',
  },
  {
    _id: '2', slug: { current: 'why-abm-works-emerging-markets' },
    title: 'Why ABM Works Better Than Broad Demand Gen in Emerging Markets',
    tag: 'Demand Gen', label: 'ABM',
    excerpt: 'Account-based marketing is often dismissed as a strategy for large enterprises. In our experience, it is the most efficient way to scale in markets with concentrated buyer pools.',
    publishedAt: '2024-12-10', readTime: '6 min read',
  },
  {
    _id: '3', slug: { current: 'revenue-operations-blueprint' },
    title: 'The Revenue Operations Blueprint for High-Growth African Startups',
    tag: 'RevOps', label: 'Operations',
    excerpt: 'Most fast-growing startups delay building RevOps infrastructure until they hit a wall. Here is how to get ahead of the problem.',
    publishedAt: '2024-11-20', readTime: '10 min read',
  },
  {
    _id: '4', slug: { current: 'fintech-gtm-playbook' },
    title: 'The Fintech GTM Playbook: Selling to Banks and Enterprises',
    tag: 'Fintech', label: 'GTM',
    excerpt: 'Selling fintech solutions to regulated enterprises and banks is a different game entirely. Here is the playbook we use across our fintech clients.',
    publishedAt: '2024-10-05', readTime: '12 min read',
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
      <section className="bg-[#09041A] px-[clamp(24px,5vw,80px)] pt-40 pb-20">
        <div className="max-w-[1280px] mx-auto">
          <p className="font-mono text-[10px] tracking-[0.22em] uppercase text-[#C084FC] mb-6">Insights</p>
          <h1
            className="font-serif font-bold text-[#F2EEFF] leading-tight mb-6"
            style={{ fontSize: 'clamp(44px,7vw,88px)' }}
          >
            Revenue<br />intelligence.
          </h1>
          <p className="text-[clamp(15px,1.2vw,18px)] text-[rgba(242,238,255,0.55)] max-w-xl leading-relaxed">
            Frameworks, playbooks, and analysis from the Apex Growth team — built from real engagements, not theory.
          </p>
        </div>
      </section>

      {/* Articles */}
      <section className="bg-[#09041A] px-[clamp(24px,5vw,80px)] pb-28">
        <div className="max-w-[1280px] mx-auto">
          {/* Featured */}
          {insights[0] && (
            <Link
              href={`/insights/${insights[0].slug?.current || insights[0].slug}`}
              className="group block border border-[rgba(192,132,252,0.12)] bg-[#110828] p-12 mb-6 hover:border-[rgba(192,132,252,0.30)] hover:-translate-y-0.5 transition-all duration-300"
            >
              <div className="flex items-center gap-3 mb-6">
                <span className="font-mono text-[9px] tracking-[0.2em] uppercase px-3 py-1.5 text-[#C084FC] border border-[rgba(192,132,252,0.30)]">{insights[0].tag}</span>
                {insights[0].label && <span className="font-mono text-[9px] tracking-[0.2em] uppercase px-3 py-1.5 text-[rgba(242,238,255,0.35)] border border-[rgba(242,238,255,0.10)]">{insights[0].label}</span>}
              </div>
              <h2 className="font-serif font-bold text-[#F2EEFF] leading-tight mb-4 group-hover:text-[#E0AAFF] transition-colors" style={{ fontSize: 'clamp(24px,3vw,40px)' }}>
                {insights[0].title}
              </h2>
              <p className="text-[15px] text-[rgba(242,238,255,0.55)] leading-relaxed max-w-2xl mb-8">{insights[0].excerpt}</p>
              <div className="flex items-center gap-4">
                <span className="font-mono text-[10px] tracking-[0.1em] text-[rgba(242,238,255,0.30)]">{formatDate(insights[0].publishedAt)}</span>
                <span className="text-[rgba(242,238,255,0.15)]">·</span>
                <span className="font-mono text-[10px] tracking-[0.1em] text-[rgba(242,238,255,0.30)]">{insights[0].readTime}</span>
              </div>
            </Link>
          )}

          {/* Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {insights.slice(1).map((ins: any) => (
              <Link
                key={ins._id}
                href={`/insights/${ins.slug?.current || ins.slug}`}
                className="group block border border-[rgba(192,132,252,0.12)] bg-[#110828] p-8 hover:border-[rgba(192,132,252,0.30)] hover:-translate-y-0.5 transition-all duration-300"
              >
                <div className="flex items-center gap-2 mb-5">
                  <span className="font-mono text-[9px] tracking-[0.2em] uppercase px-3 py-1 text-[#C084FC] border border-[rgba(192,132,252,0.30)]">{ins.tag}</span>
                </div>
                <h2 className="font-serif text-[20px] font-semibold text-[#F2EEFF] leading-snug mb-3 group-hover:text-[#E0AAFF] transition-colors">
                  {ins.title}
                </h2>
                <p className="text-[13px] text-[rgba(242,238,255,0.50)] leading-relaxed mb-6">{ins.excerpt}</p>
                <div className="flex items-center gap-3">
                  <span className="font-mono text-[9px] tracking-[0.1em] text-[rgba(242,238,255,0.28)]">{formatDate(ins.publishedAt)}</span>
                  <span className="text-[rgba(242,238,255,0.15)]">·</span>
                  <span className="font-mono text-[9px] tracking-[0.1em] text-[rgba(242,238,255,0.28)]">{ins.readTime}</span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
