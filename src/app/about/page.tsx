import Link from 'next/link'
import { getCareers } from '@/sanity/queries'

const team = [
  { name: 'Kwame Asante', role: 'Founder & CEO', initials: 'KA', bio: 'Former VP Revenue at two African unicorns. 15 years building revenue systems across emerging markets.' },
  { name: 'Adaeze Okonkwo', role: 'Head of Strategy', initials: 'AO', bio: 'Ex-McKinsey. Led GTM strategy for 20+ enterprise technology clients across EMEA and Africa.' },
  { name: 'Seun Bankole', role: 'Head of Demand Generation', initials: 'SB', bio: 'Built demand programs for Series A to Series C fintech and SaaS companies. $150M+ pipeline generated.' },
  { name: 'Yemi Adesanya', role: 'Head of Revenue Operations', initials: 'YA', bio: 'Scaled RevOps at three high-growth companies from seed to exit. Salesforce and HubSpot architect.' },
]

const values = [
  { num: '01', title: 'Results over activity', body: 'We measure everything against one metric: did it generate revenue? Strategy decks and campaign reports mean nothing without pipeline and closed deals.' },
  { num: '02', title: 'Context over templates', body: 'African markets are not emerging markets in the Western sense. They require deep local knowledge, market-specific frameworks, and relationships built over years.' },
  { num: '03', title: 'Embedded over advisory', body: 'We do not send PowerPoints and disappear. We build with your team, train your reps, and stay accountable to the outcomes.' },
  { num: '04', title: 'Long-term over short-term', body: 'We only take engagements where we are confident we can deliver lasting impact. Quick wins that do not compound are not interesting to us.' },
]

const fallbackCareers = [
  { _id: '1', title: 'Senior GTM Strategist', department: 'Strategy', type: 'Full-time', location: 'Accra / Remote', excerpt: 'Lead GTM strategy engagements for enterprise clients across Africa and EMEA.' },
  { _id: '2', title: 'Demand Generation Manager', department: 'Demand Gen', type: 'Full-time', location: 'Lagos / Remote', excerpt: 'Build and manage full-funnel demand programs for our portfolio of high-growth clients.' },
]

export default async function AboutPage() {
  let careers = fallbackCareers as any[]
  try {
    const c = await getCareers()
    if (c?.length) careers = c
  } catch {}

  return (
    <>
      {/* Header */}
      <section className="bg-[#09041A] px-[clamp(24px,5vw,80px)] pt-40 pb-24">
        <div className="max-w-[1280px] mx-auto">
          <p className="font-mono text-[10px] tracking-[0.22em] uppercase text-[#C084FC] mb-6">About</p>
          <h1
            className="font-serif font-bold text-[#F2EEFF] leading-tight mb-8"
            style={{ fontSize: 'clamp(44px,7vw,88px)' }}
          >
            Revenue architects<br />for Africa&apos;s best<br />companies.
          </h1>
          <p className="text-[clamp(15px,1.2vw,18px)] text-[rgba(242,238,255,0.55)] max-w-2xl leading-relaxed">
            Apex Growth Partners was founded on a simple observation: most African companies with great products fail to build the revenue systems that match their ambition. We exist to close that gap.
          </p>
        </div>
      </section>

      {/* Mission */}
      <section className="bg-[#110828] border-y border-[rgba(192,132,252,0.08)] px-[clamp(24px,5vw,80px)] py-24">
        <div className="max-w-[1280px] mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          <div>
            <p className="font-mono text-[10px] tracking-[0.22em] uppercase text-[#C084FC] mb-6">Our Mission</p>
            <h2 className="font-serif font-bold text-[#F2EEFF] leading-tight mb-6" style={{ fontSize: 'clamp(28px,3.5vw,48px)' }}>
              Predictable revenue for ambitious African companies.
            </h2>
            <p className="text-[15px] text-[rgba(242,238,255,0.60)] leading-relaxed">
              We believe Africa&apos;s best companies deserve the same calibre of revenue expertise that top global companies take for granted. That means world-class strategy, execution discipline, and systems that scale — built for African market realities.
            </p>
          </div>
          <div className="grid grid-cols-2 gap-6">
            {[
              { num: '$280M+', label: 'Revenue Generated' },
              { num: '40+', label: 'Clients Served' },
              { num: '6', label: 'African Markets' },
              { num: '94%', label: 'Client Retention' },
            ].map(({ num, label }) => (
              <div key={label} className="border border-[rgba(192,132,252,0.12)] p-6">
                <p className="font-serif font-bold text-[#C084FC] mb-1" style={{ fontSize: 'clamp(32px,4vw,52px)', lineHeight: 1 }}>{num}</p>
                <p className="font-mono text-[9px] tracking-[0.16em] uppercase text-[rgba(242,238,255,0.35)]">{label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="bg-[#09041A] px-[clamp(24px,5vw,80px)] py-28">
        <div className="max-w-[1280px] mx-auto">
          <p className="font-mono text-[10px] tracking-[0.22em] uppercase text-[#C084FC] mb-6">How We Work</p>
          <h2 className="font-serif font-bold text-[#F2EEFF] leading-tight mb-16" style={{ fontSize: 'clamp(32px,4vw,56px)' }}>
            Principles we do not compromise on.
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {values.map(({ num, title, body }) => (
              <div key={num} className="border border-[rgba(192,132,252,0.08)] bg-[#110828] p-8 relative overflow-hidden group">
                <span className="absolute bottom-3 right-5 font-serif font-bold text-[100px] leading-none text-[rgba(192,132,252,0.04)] select-none pointer-events-none">
                  {num}
                </span>
                <p className="font-mono text-[10px] tracking-[0.2em] uppercase text-[#C084FC] mb-4">{num}</p>
                <h3 className="font-serif text-[22px] font-bold text-[#F2EEFF] mb-3">{title}</h3>
                <p className="text-[14px] text-[rgba(242,238,255,0.55)] leading-relaxed">{body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="bg-[#110828] px-[clamp(24px,5vw,80px)] py-28">
        <div className="max-w-[1280px] mx-auto">
          <p className="font-mono text-[10px] tracking-[0.22em] uppercase text-[#C084FC] mb-6">The Team</p>
          <h2 className="font-serif font-bold text-[#F2EEFF] leading-tight mb-16" style={{ fontSize: 'clamp(32px,4vw,56px)' }}>
            Operators. Not consultants.
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {team.map(({ name, role, initials, bio }) => (
              <div key={name} className="border border-[rgba(192,132,252,0.08)] p-8">
                <div className="w-14 h-14 rounded-full bg-[rgba(192,132,252,0.12)] border border-[rgba(192,132,252,0.25)] flex items-center justify-center mb-6">
                  <span className="font-mono text-[12px] text-[#C084FC]">{initials}</span>
                </div>
                <h3 className="font-serif text-[18px] font-bold text-[#F2EEFF] mb-1">{name}</h3>
                <p className="font-mono text-[9px] tracking-[0.14em] uppercase text-[#C084FC] mb-4">{role}</p>
                <p className="text-[13px] text-[rgba(242,238,255,0.50)] leading-relaxed">{bio}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Careers */}
      <section id="careers" className="bg-[#09041A] px-[clamp(24px,5vw,80px)] py-28">
        <div className="max-w-[1280px] mx-auto">
          <p className="font-mono text-[10px] tracking-[0.22em] uppercase text-[#C084FC] mb-6">Careers</p>
          <h2 className="font-serif font-bold text-[#F2EEFF] leading-tight mb-4" style={{ fontSize: 'clamp(32px,4vw,56px)' }}>
            Build Africa&apos;s revenue future.
          </h2>
          <p className="text-[15px] text-[rgba(242,238,255,0.55)] max-w-xl mb-16">
            We are a small, high-calibre team. Every hire makes a material difference to our clients and our culture. We hire for intellectual rigour, execution discipline, and genuine passion for revenue building.
          </p>

          <div className="space-y-4">
            {careers.map((job: any) => (
              <div key={job._id} className="border border-[rgba(192,132,252,0.12)] bg-[#110828] p-8 flex flex-col md:flex-row md:items-center justify-between gap-6">
                <div>
                  <div className="flex flex-wrap items-center gap-3 mb-3">
                    <span className="font-mono text-[9px] tracking-[0.2em] uppercase px-3 py-1 text-[#C084FC] border border-[rgba(192,132,252,0.30)]">{job.department}</span>
                    <span className="font-mono text-[9px] tracking-[0.2em] uppercase px-3 py-1 text-[rgba(242,238,255,0.35)] border border-[rgba(242,238,255,0.10)]">{job.type}</span>
                    <span className="font-mono text-[9px] tracking-[0.2em] uppercase text-[rgba(242,238,255,0.25)]">{job.location}</span>
                  </div>
                  <h3 className="font-serif text-[22px] font-bold text-[#F2EEFF] mb-2">{job.title}</h3>
                  <p className="text-[13px] text-[rgba(242,238,255,0.50)] leading-relaxed">{job.excerpt}</p>
                </div>
                <a
                  href={job.applyUrl || '/contact'}
                  className="shrink-0 font-mono text-[10px] tracking-[0.14em] uppercase border border-[rgba(192,132,252,0.35)] text-[rgba(242,238,255,0.70)] px-6 py-3 hover:border-[#C084FC] hover:text-[#F2EEFF] transition-colors duration-200"
                >
                  Apply →
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
