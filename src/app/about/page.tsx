import Link from 'next/link'
import { getCareers } from '@/sanity/queries'

const team = [
  { name: 'Kwame Asante', role: 'Founder & Creative Director', initials: 'KA', bio: 'Founded Apex Growth to bring world-class creative thinking to African businesses. 15 years building brands across finance, healthcare, and technology sectors.' },
  { name: 'Adaeze Okonkwo', role: 'Head of Brand Strategy', initials: 'AO', bio: 'Brand strategist with deep expertise in identity, positioning, and visual systems across EMEA and Africa. Previously strategy lead at a global creative consultancy.' },
  { name: 'Seun Bankole', role: 'Head of Digital & Performance', initials: 'SB', bio: 'Led digital campaigns and performance marketing for high-growth consumer and B2B brands. Data-driven creative with a track record of measurable outcomes.' },
  { name: 'Yemi Adesanya', role: 'Head of Production', initials: 'YA', bio: 'Manages end-to-end production across web, print, and brand — from vendor coordination to quality control. Delivered 500+ projects across 12 countries.' },
]

const values = [
  { num: '01', title: 'Results over aesthetics', body: 'Beautiful work that does not perform is not great work. Every design decision, campaign, and asset is measured against one question: does it achieve the objective?' },
  { num: '02', title: 'Context over templates', body: 'African markets have distinct audiences, visual cultures, and competitive landscapes. We do not import Western playbooks — we build creative that resonates where your brand actually operates.' },
  { num: '03', title: 'Integrated over fragmented', body: 'Brand, digital, marketing, and print from four different agencies produces four different looks. We keep everything under one creative roof so your brand stays consistent at every touchpoint.' },
  { num: '04', title: 'Long-term over short-term', body: 'We build brand systems designed to grow with your business. The goal is never a one-off deliverable — it is a creative foundation your team can operate and scale for years.' },
]

const fallbackCareers = [
  { _id: '1', title: 'Brand Strategist', department: 'Brand', type: 'Contract / Full-time', location: 'Accra / Remote', excerpt: 'Own brand strategy, positioning, and identity direction for creative engagements.' },
  { _id: '2', title: 'Performance Marketing Lead', department: 'Performance', type: 'Contract / Full-time', location: 'Accra / Remote', excerpt: 'Run LinkedIn/Google demand gen, attribution, and conversion optimisation for client campaigns.' },
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
      <section className="bg-[#F6F7FB] px-[clamp(24px,5vw,80px)] pt-40 pb-24">
        <div className="max-w-[1280px] mx-auto">
          <p className="font-mono text-[10px] tracking-[0.22em] uppercase text-[#2563EB] mb-6 hero-in hero-in-1">About</p>
          <h1
            className="font-serif font-bold text-[#0B0F14] leading-tight mb-8 hero-in hero-in-2"
            style={{ fontSize: 'clamp(44px,7vw,88px)' }}
          >
            One agency.<br />Every brand<br />touchpoint.
          </h1>
          <p className="text-[clamp(15px,1.2vw,18px)] text-[rgba(11,15,20,0.55)] max-w-2xl leading-relaxed hero-in hero-in-3">
            Apex Growth Partners is a full-service creative agency based in Accra, Ghana. We deliver brand identity, web, marketing, and print production under one roof — with a single creative direction and measurable results.
          </p>
        </div>
      </section>

      {/* Mission */}
      <section className="bg-[#EEF2FF] border-y border-[rgba(37,99,235,0.08)] px-[clamp(24px,5vw,80px)] py-24">
        <div className="max-w-[1280px] mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          <div className="reveal">
            <p className="font-mono text-[10px] tracking-[0.22em] uppercase text-[#2563EB] mb-6">Our Mission</p>
            <h2 className="font-serif font-bold text-[#0B0F14] leading-tight mb-6" style={{ fontSize: 'clamp(28px,3.5vw,48px)' }}>
              Brand architecture for Africa&apos;s most ambitious companies.
            </h2>
            <p className="text-[15px] text-[rgba(11,15,20,0.60)] leading-relaxed">
              We believe Africa&apos;s best businesses deserve the same calibre of creative expertise that top global brands take for granted. That means world-class design, consistent messaging, and brand systems that scale — built for African market realities.
            </p>
          </div>
          <div className="grid grid-cols-2 gap-6">
            {[
              { num: '200+', label: 'Brands Built' },
              { num: '1,500+', label: 'Assets Produced' },
              { num: '72hr', label: 'Fast Turnaround' },
              { num: '94%', label: 'Client Retention' },
            ].map(({ num, label }, i) => (
              <div key={label} className="border border-[rgba(37,99,235,0.12)] p-6 reveal-scale" style={{ transitionDelay: `${i * 80}ms` }}>
                <p className="font-serif font-bold text-[#2563EB] mb-1" style={{ fontSize: 'clamp(32px,4vw,52px)', lineHeight: 1 }}>{num}</p>
                <p className="font-mono text-[9px] tracking-[0.16em] uppercase text-[rgba(11,15,20,0.35)]">{label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="bg-[#F6F7FB] px-[clamp(24px,5vw,80px)] py-28">
        <div className="max-w-[1280px] mx-auto">
          <p className="font-mono text-[10px] tracking-[0.22em] uppercase text-[#2563EB] mb-6 reveal">How We Work</p>
          <h2 className="font-serif font-bold text-[#0B0F14] leading-tight mb-16 reveal" style={{ fontSize: 'clamp(32px,4vw,56px)', transitionDelay: '80ms' }}>
            Principles we do not compromise on.
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {values.map(({ num, title, body }, i) => (
              <div key={num} className="border border-[rgba(37,99,235,0.08)] bg-[#EEF2FF] p-8 relative overflow-hidden group reveal" style={{ transitionDelay: `${i * 80}ms` }}>
                <span className="absolute bottom-3 right-5 font-serif font-bold text-[100px] leading-none text-[rgba(37,99,235,0.04)] select-none pointer-events-none">
                  {num}
                </span>
                <p className="font-mono text-[10px] tracking-[0.2em] uppercase text-[#2563EB] mb-4">{num}</p>
                <h3 className="font-serif text-[22px] font-bold text-[#0B0F14] mb-3">{title}</h3>
                <p className="text-[14px] text-[rgba(11,15,20,0.55)] leading-relaxed">{body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="bg-[#EEF2FF] px-[clamp(24px,5vw,80px)] py-28">
        <div className="max-w-[1280px] mx-auto">
          <p className="font-mono text-[10px] tracking-[0.22em] uppercase text-[#2563EB] mb-6 reveal">The Team</p>
          <h2 className="font-serif font-bold text-[#0B0F14] leading-tight mb-16 reveal" style={{ fontSize: 'clamp(32px,4vw,56px)', transitionDelay: '80ms' }}>
            Operators. Not consultants.
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {team.map(({ name, role, initials, bio }, i) => (
              <div key={name} className="border border-[rgba(37,99,235,0.08)] p-8 reveal" style={{ transitionDelay: `${i * 80}ms` }}>
                <div className="w-14 h-14 rounded-full bg-[rgba(37,99,235,0.12)] border border-[rgba(37,99,235,0.25)] flex items-center justify-center mb-6">
                  <span className="font-mono text-[12px] text-[#2563EB]">{initials}</span>
                </div>
                <h3 className="font-serif text-[18px] font-bold text-[#0B0F14] mb-1">{name}</h3>
                <p className="font-mono text-[9px] tracking-[0.14em] uppercase text-[#2563EB] mb-4">{role}</p>
                <p className="text-[13px] text-[rgba(11,15,20,0.50)] leading-relaxed">{bio}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Careers */}
      <section id="careers" className="bg-[#F6F7FB] px-[clamp(24px,5vw,80px)] py-28">
        <div className="max-w-[1280px] mx-auto">
          <p className="font-mono text-[10px] tracking-[0.22em] uppercase text-[#2563EB] mb-6 reveal">Careers</p>
          <h2 className="font-serif font-bold text-[#0B0F14] leading-tight mb-4 reveal" style={{ fontSize: 'clamp(32px,4vw,56px)', transitionDelay: '80ms' }}>
            Build careers that move markets.
          </h2>
          <p className="text-[15px] text-[rgba(11,15,20,0.55)] max-w-xl mb-16 reveal" style={{ transitionDelay: '160ms' }}>
            We hire operators, strategists, and builders who are serious about results. No passengers. Every hire makes a material difference to our clients and our culture.
          </p>

          <div className="space-y-4">
            {careers.map((job: any, i: number) => (
              <div key={job._id} className="border border-[rgba(37,99,235,0.12)] bg-[#EEF2FF] p-8 flex flex-col md:flex-row md:items-center justify-between gap-6 reveal" style={{ transitionDelay: `${i * 80}ms` }}>
                <div>
                  <div className="flex flex-wrap items-center gap-3 mb-3">
                    <span className="font-mono text-[9px] tracking-[0.2em] uppercase px-3 py-1 text-[#2563EB] border border-[rgba(37,99,235,0.30)]">{job.department}</span>
                    <span className="font-mono text-[9px] tracking-[0.2em] uppercase px-3 py-1 text-[rgba(11,15,20,0.35)] border border-[rgba(15,23,42,0.10)]">{job.type}</span>
                    <span className="font-mono text-[9px] tracking-[0.2em] uppercase text-[rgba(11,15,20,0.25)]">{job.location}</span>
                  </div>
                  <h3 className="font-serif text-[22px] font-bold text-[#0B0F14] mb-2">{job.title}</h3>
                  <p className="text-[13px] text-[rgba(11,15,20,0.50)] leading-relaxed">{job.excerpt}</p>
                </div>
                <a
                  href={job.applyUrl || '/contact'}
                  className="shrink-0 font-mono text-[10px] tracking-[0.14em] uppercase border border-[rgba(37,99,235,0.35)] text-[rgba(11,15,20,0.70)] px-6 py-3 hover:border-[#2563EB] hover:text-[#0B0F14] transition-colors duration-200"
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
