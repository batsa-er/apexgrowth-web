import Image from 'next/image'
import { getCareers, getTeamMembers } from '@/sanity/queries'
import { urlFor } from '@/sanity/client'
import {
  UsersIcon, LayersIcon, ClockIcon, ShieldCheckIcon,
  TargetIcon, GlobeIcon, TreeIcon,
  BriefcaseIcon, MapPinIcon,
} from '@/components/Icons'

const fallbackTeam = [
  {
    _id: '1', name: 'Kwame Asante', role: 'Founder & Creative Director',
    bio: 'Founded Apex Growth to bring world-class creative thinking to African businesses. 15 years building brands across finance, healthcare, and technology sectors.',
    image: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?w=400&h=400&q=80&auto=format&fit=crop&crop=face',
  },
  {
    _id: '2', name: 'Adaeze Okonkwo', role: 'Head of Brand Strategy',
    bio: 'Brand strategist with deep expertise in identity, positioning, and visual systems across EMEA and Africa. Previously strategy lead at a global creative consultancy.',
    image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400&h=400&q=80&auto=format&fit=crop&crop=face',
  },
  {
    _id: '3', name: 'Seun Bankole', role: 'Head of Digital & Performance',
    bio: 'Led digital campaigns and performance marketing for high-growth consumer and B2B brands. Data-driven creative with a track record of measurable outcomes.',
    image: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=400&h=400&q=80&auto=format&fit=crop&crop=face',
  },
  {
    _id: '4', name: 'Yemi Adesanya', role: 'Head of Production',
    bio: 'Manages end-to-end production across web, print, and brand — from vendor coordination to quality control. Delivered 500+ projects across 12 countries.',
    image: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?w=400&h=400&q=80&auto=format&fit=crop&crop=face',
  },
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
  let team = fallbackTeam as any[]
  try {
    const [c, t] = await Promise.all([getCareers(), getTeamMembers()])
    if (c?.length) careers = c
    if (t?.length) team = t
  } catch {}

  return (
    <>
      {/* Header */}
      <section className="dot-grid bg-[var(--color-bg)] px-[clamp(24px,5vw,80px)] pt-40 pb-24">
        <div className="max-w-[1280px] mx-auto">
          <p className="font-mono text-[10px] tracking-[0.22em] uppercase text-[var(--color-accent)] mb-6 hero-in hero-in-1">About</p>
          <h1
            className="font-serif font-bold text-[var(--color-text)] leading-tight mb-8 hero-in hero-in-2"
            style={{ fontSize: 'clamp(44px,7vw,88px)' }}
          >
            One agency.<br />Every brand<br />touchpoint.
          </h1>
          <p className="text-[clamp(15px,1.2vw,18px)] text-[rgba(var(--ch-text),0.55)] max-w-2xl leading-relaxed hero-in hero-in-3">
            Apex Growth Partners is a full-service creative agency based in Accra, Ghana. We deliver brand identity, web, marketing, and print production under one roof — with a single creative direction and measurable results.
          </p>
        </div>
      </section>

      {/* Editorial photo */}
      <div className="relative w-full aspect-[21/9] overflow-hidden hero-in hero-in-4">
        <Image
          src="https://images.unsplash.com/photo-1497366216548-37526070297c?w=1600&h=700&q=85&auto=format&fit=crop"
          alt="Apex Growth creative studio"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-[rgba(var(--ch-accent),0.08)]" />
      </div>

      {/* Mission */}
      <section className="bg-[var(--color-surface)] border-y border-[rgba(var(--ch-accent),0.08)] px-[clamp(24px,5vw,80px)] py-24">
        <div className="max-w-[1280px] mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          <div className="reveal">
            <p className="font-mono text-[10px] tracking-[0.22em] uppercase text-[var(--color-accent)] mb-6">Our Mission</p>
            <h2 className="font-serif font-bold text-[var(--color-text)] leading-tight mb-6" style={{ fontSize: 'clamp(28px,3.5vw,48px)' }}>
              Brand architecture for Africa&apos;s most ambitious companies.
            </h2>
            <p className="text-[15px] text-[rgba(var(--ch-text),0.60)] leading-relaxed">
              We believe Africa&apos;s best businesses deserve the same calibre of creative expertise that top global brands take for granted. That means world-class design, consistent messaging, and brand systems that scale — built for African market realities.
            </p>
          </div>
          <div className="grid grid-cols-2 gap-6">
            {[
              { Icon: UsersIcon,       num: '200+',   label: 'Brands Built' },
              { Icon: LayersIcon,      num: '1,500+', label: 'Assets Produced' },
              { Icon: ClockIcon,       num: '72hr',   label: 'Fast Turnaround' },
              { Icon: ShieldCheckIcon, num: '94%',    label: 'Client Retention' },
            ].map(({ Icon, num, label }, i) => (
              <div key={label} className="border border-[rgba(var(--ch-accent),0.12)] p-6 reveal-scale" style={{ transitionDelay: `${i * 80}ms` }}>
                <Icon className="w-5 h-5 text-[rgba(37,99,235,0.45)] mb-3" />
                <p className="font-serif font-bold text-[var(--color-accent)] mb-1" style={{ fontSize: 'clamp(32px,4vw,52px)', lineHeight: 1 }}>{num}</p>
                <p className="font-mono text-[9px] tracking-[0.16em] uppercase text-[rgba(var(--ch-text),0.35)]">{label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="bg-[var(--color-bg)] px-[clamp(24px,5vw,80px)] py-28">
        <div className="max-w-[1280px] mx-auto">
          <p className="font-mono text-[10px] tracking-[0.22em] uppercase text-[var(--color-accent)] mb-6 reveal">How We Work</p>
          <h2 className="font-serif font-bold text-[var(--color-text)] leading-tight mb-16 reveal" style={{ fontSize: 'clamp(32px,4vw,56px)', transitionDelay: '80ms' }}>
            Principles we do not compromise on.
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {values.map(({ num, title, body }, i) => {
              const Icon = num === '01' ? TargetIcon : num === '02' ? GlobeIcon : num === '03' ? LayersIcon : TreeIcon
              return (
                <div key={num} className="border border-[rgba(var(--ch-accent),0.08)] bg-[var(--color-surface)] p-8 relative overflow-hidden group reveal" style={{ transitionDelay: `${i * 80}ms` }}>
                  <span className="absolute bottom-3 right-5 font-serif font-bold text-[100px] leading-none text-[rgba(37,99,235,0.04)] select-none pointer-events-none">
                    {num}
                  </span>
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-8 h-8 border border-[rgba(var(--ch-accent),0.20)] flex items-center justify-center shrink-0">
                      <Icon className="w-4 h-4 text-[var(--color-accent)]" />
                    </div>
                    <p className="font-mono text-[10px] tracking-[0.2em] uppercase text-[var(--color-accent)]">{num}</p>
                  </div>
                  <h3 className="font-serif text-[22px] font-bold text-[var(--color-text)] mb-3">{title}</h3>
                  <p className="text-[14px] text-[rgba(var(--ch-text),0.55)] leading-relaxed">{body}</p>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="bg-[var(--color-surface)] px-[clamp(24px,5vw,80px)] py-28">
        <div className="max-w-[1280px] mx-auto">
          <p className="font-mono text-[10px] tracking-[0.22em] uppercase text-[var(--color-accent)] mb-6 reveal">The Team</p>
          <h2 className="font-serif font-bold text-[var(--color-text)] leading-tight mb-16 reveal" style={{ fontSize: 'clamp(32px,4vw,56px)', transitionDelay: '80ms' }}>
            Operators. Not consultants.
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {team.map((member: any, i: number) => {
              const photoSrc = member.photo
                ? urlFor(member.photo).width(400).height(300).url()
                : member.image
              return (
              <div key={member._id || member.name} className="border border-[rgba(var(--ch-accent),0.08)] bg-[var(--color-bg)] overflow-hidden reveal" style={{ transitionDelay: `${i * 80}ms` }}>
                {/* Headshot — Sanity photo takes priority over fallback URL */}
                {photoSrc && (
                  <div className="relative w-full aspect-[4/3] overflow-hidden">
                    <Image
                      src={photoSrc}
                      alt={member.name}
                      fill
                      className="object-cover"
                    />
                  </div>
                )}
                <div className="p-6">
                  <h3 className="font-serif text-[18px] font-bold text-[var(--color-text)] mb-1">{member.name}</h3>
                  <p className="font-mono text-[9px] tracking-[0.14em] uppercase text-[var(--color-accent)] mb-4">{member.role}</p>
                  <p className="text-[13px] text-[rgba(var(--ch-text),0.50)] leading-relaxed">{member.bio}</p>
                </div>
              </div>
            )})}

          </div>
        </div>
      </section>

      {/* Careers */}
      <section id="careers" className="bg-[var(--color-bg)] px-[clamp(24px,5vw,80px)] py-28">
        <div className="max-w-[1280px] mx-auto">
          <p className="font-mono text-[10px] tracking-[0.22em] uppercase text-[var(--color-accent)] mb-6 reveal">Careers</p>
          <h2 className="font-serif font-bold text-[var(--color-text)] leading-tight mb-4 reveal" style={{ fontSize: 'clamp(32px,4vw,56px)', transitionDelay: '80ms' }}>
            Build careers that move markets.
          </h2>
          <p className="text-[15px] text-[rgba(var(--ch-text),0.55)] max-w-xl mb-16 reveal" style={{ transitionDelay: '160ms' }}>
            We hire operators, strategists, and builders who are serious about results. No passengers. Every hire makes a material difference to our clients and our culture.
          </p>

          <div className="space-y-4">
            {careers.map((job: any, i: number) => (
              <div key={job._id} className="border border-[rgba(var(--ch-accent),0.12)] bg-[var(--color-surface)] p-8 flex flex-col md:flex-row md:items-center justify-between gap-6 reveal" style={{ transitionDelay: `${i * 80}ms` }}>
                <div>
                  <div className="flex flex-wrap items-center gap-3 mb-3">
                    <span className="inline-flex items-center gap-1.5 font-mono text-[9px] tracking-[0.2em] uppercase px-3 py-1 text-[var(--color-accent)] border border-[rgba(var(--ch-accent),0.30)]">
                      <BriefcaseIcon className="w-3 h-3" />{job.department}
                    </span>
                    <span className="inline-flex items-center gap-1.5 font-mono text-[9px] tracking-[0.2em] uppercase px-3 py-1 text-[rgba(var(--ch-text),0.35)] border border-[rgba(var(--ch-border),0.10)]">
                      <ClockIcon className="w-3 h-3" />{job.type}
                    </span>
                    <span className="inline-flex items-center gap-1.5 font-mono text-[9px] tracking-[0.2em] uppercase text-[rgba(var(--ch-text),0.25)]">
                      <MapPinIcon className="w-3 h-3" />{job.location}
                    </span>
                  </div>
                  <h3 className="font-serif text-[22px] font-bold text-[var(--color-text)] mb-2">{job.title}</h3>
                  <p className="text-[13px] text-[rgba(var(--ch-text),0.50)] leading-relaxed">{job.excerpt}</p>
                </div>
                <a
                  href={job.applyUrl || '/contact'}
                  className="shrink-0 font-mono text-[10px] tracking-[0.14em] uppercase border border-[rgba(var(--ch-accent),0.35)] text-[rgba(var(--ch-text),0.70)] px-6 py-3 hover:border-[var(--color-accent)] hover:text-[var(--color-text)] transition-colors duration-200"
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
