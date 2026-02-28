import Link from 'next/link'
import { getInsight, getInsights } from '@/sanity/queries'
import { notFound } from 'next/navigation'

export async function generateStaticParams() {
  try {
    const ins = await getInsights()
    return ins.map((i: any) => ({ slug: i.slug?.current || i.slug }))
  } catch {
    return []
  }
}

const fallbackInsights: Record<string, any> = {
  'building-enterprise-pipeline-africa': {
    title: 'Building Enterprise Pipeline in Africa: A GTM Framework',
    tag: 'Strategy', publishedAt: '2025-01-15', readTime: '8 min read',
    excerpt: 'Enterprise sales in African markets requires a fundamentally different approach to pipeline generation. Here is what we have learned across 40+ engagements.',
    body: `Enterprise pipeline generation in Africa operates under constraints that most Western GTM playbooks simply do not account for. Deal cycles are longer, buyer committees are larger, and the trust premium is higher. Referrals and relationships close deals that cold outbound will never touch.

Over 40+ engagements across fintech, enterprise SaaS, logistics, and healthcare in Ghana, Nigeria, Kenya, South Africa, and beyond, we have developed a framework that consistently outperforms standard approaches.

**The Three Non-Negotiables**

First: ICP precision. The African enterprise market is smaller and more concentrated than it appears. Your top 200 accounts are likely responsible for 80% of the addressable revenue. Treat them that way — with bespoke research, personalised outreach, and senior-level engagement from day one.

Second: Trust infrastructure. Buyers in these markets want to know who you have worked with, what happened, and who can vouch for you. A credible case study from a respected local brand is worth more than any marketing campaign. Build your reference network early.

Third: Multi-threaded relationships. Large deals require buy-in from procurement, finance, IT, and the business unit. Map the committee early and build relationships at every level. Single-threaded deals die when your champion moves on.

**The Pipeline Architecture**

Structure your pipeline in three stages with clear criteria for each transition. Define what "qualified" actually means for your market — not just BANT, but a verified pain, an active budget conversation, and executive sponsorship.

For companies in the $1M–$20M ARR range targeting enterprise, we recommend a pipeline-to-target ratio of at least 4:1 at every stage.`,
  },
}

function formatDate(iso: string) {
  return new Date(iso).toLocaleDateString('en-GB', { day: 'numeric', month: 'long', year: 'numeric' })
}

export default async function InsightPage({ params }: { params: { slug: string } }) {
  let ins: any = null
  try {
    ins = await getInsight(params.slug)
  } catch {}
  if (!ins) ins = fallbackInsights[params.slug]
  if (!ins) notFound()

  const bodyText: string = ins.body || ins.excerpt || ''

  return (
    <>
      {/* Header */}
      <section className="bg-[#F6F7FB] px-[clamp(24px,5vw,80px)] pt-40 pb-16">
        <div className="max-w-[800px] mx-auto">
          <div className="flex items-center gap-3 mb-8">
            <Link href="/insights" className="font-mono text-[10px] tracking-[0.16em] uppercase text-[rgba(11,15,20,0.40)] hover:text-[#2563EB] transition-colors">
              ← Insights
            </Link>
            <span className="text-[rgba(11,15,20,0.20)]">/</span>
            <span className="font-mono text-[9px] tracking-[0.2em] uppercase px-3 py-1 text-[#2563EB] border border-[rgba(37,99,235,0.30)]">{ins.tag}</span>
          </div>
          <h1 className="font-serif font-bold text-[#0B0F14] leading-tight mb-6"
            style={{ fontSize: 'clamp(32px,5vw,64px)' }}>{ins.title}</h1>
          <div className="flex items-center gap-4">
            <span className="font-mono text-[10px] tracking-[0.1em] text-[rgba(11,15,20,0.35)]">{formatDate(ins.publishedAt)}</span>
            <span className="text-[rgba(11,15,20,0.15)]">·</span>
            <span className="font-mono text-[10px] tracking-[0.1em] text-[rgba(11,15,20,0.35)]">{ins.readTime}</span>
            <span className="text-[rgba(11,15,20,0.15)]">·</span>
            <span className="font-mono text-[10px] tracking-[0.1em] text-[rgba(11,15,20,0.35)]">Apex Growth</span>
          </div>
        </div>
      </section>

      {/* Body */}
      <section className="bg-[#F6F7FB] px-[clamp(24px,5vw,80px)] pb-24">
        <div className="max-w-[800px] mx-auto">
          <div className="border-t border-[rgba(37,99,235,0.10)] pt-12">
            <div className="prose-custom space-y-6">
              {bodyText.split('\n\n').map((para, i) => {
                if (para.startsWith('**') && para.endsWith('**')) {
                  return <h2 key={i} className="font-serif text-[24px] font-bold text-[#0B0F14] mt-10">{para.replace(/\*\*/g, '')}</h2>
                }
                if (para.startsWith('**')) {
                  const parts = para.split('**')
                  return (
                    <p key={i} className="text-[16px] text-[rgba(11,15,20,0.70)] leading-[1.85]">
                      {parts.map((p, j) => j % 2 === 1 ? <strong key={j} className="text-[#0B0F14] font-semibold">{p}</strong> : p)}
                    </p>
                  )
                }
                return <p key={i} className="text-[16px] text-[rgba(11,15,20,0.70)] leading-[1.85]">{para}</p>
              })}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-[#EEF2FF] border-t border-[rgba(37,99,235,0.08)] px-[clamp(24px,5vw,80px)] py-24 text-center">
        <div className="max-w-[700px] mx-auto">
          <h2 className="font-serif font-bold text-[#0B0F14] mb-4" style={{ fontSize: 'clamp(24px,3vw,40px)' }}>
            Want this applied to your business?
          </h2>
          <p className="text-[rgba(11,15,20,0.55)] mb-8">
            Book a strategy call and we will show you how these principles apply to your specific market and stage.
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
