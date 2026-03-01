import { EnvelopeIcon, MapPinIcon, ClockIcon } from '@/components/Icons'
import { getSiteSettings } from '@/sanity/queries'
import ContactForm from './ContactForm'

export default async function ContactPage() {
  let settings = null
  try { settings = await getSiteSettings() } catch {}

  const email        = settings?.email        || 'hello@apexgrowth.africa'
  const address      = settings?.address      || 'Accra, Ghana · Remote-first'
  const responseTime = settings?.responseTime || 'Within 24 hours'

  return (
    <>
      <section className="bg-[#F6F7FB] px-[clamp(24px,5vw,80px)] pt-40 pb-24">
        <div className="max-w-[1280px] mx-auto grid grid-cols-1 md:grid-cols-2 gap-20 items-start">
          <div>
            <p className="font-mono text-[10px] tracking-[0.22em] uppercase text-[#2563EB] mb-6 hero-in hero-in-1">Contact</p>
            <h1
              className="font-serif font-bold text-[#0B0F14] leading-tight mb-6 hero-in hero-in-2"
              style={{ fontSize: 'clamp(44px,6vw,80px)' }}
            >
              Let&apos;s build<br />your brand.
            </h1>
            <p className="text-[clamp(15px,1.2vw,18px)] text-[rgba(11,15,20,0.55)] leading-relaxed mb-12 hero-in hero-in-3">
              Book a complimentary 45-minute Brand Strategy Call. We will review your current brand, identify the biggest creative opportunities, and map the right engagement for your goals — no commitment required.
            </p>

            <div className="space-y-6">
              {[
                { Icon: EnvelopeIcon, label: 'Email',         value: email },
                { Icon: MapPinIcon,   label: 'Location',      value: address },
                { Icon: ClockIcon,    label: 'Response time', value: responseTime },
              ].map(({ Icon, label, value }) => (
                <div key={label} className="flex items-start gap-4">
                  <div className="w-8 h-8 border border-[rgba(37,99,235,0.15)] flex items-center justify-center mt-1 shrink-0">
                    <Icon className="w-4 h-4 text-[#2563EB]" />
                  </div>
                  <div>
                    <p className="font-mono text-[9px] tracking-[0.2em] uppercase text-[rgba(11,15,20,0.28)] mb-1">{label}</p>
                    <p className="font-mono text-[13px] tracking-[0.06em] text-[rgba(11,15,20,0.70)]">{value}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <ContactForm />
        </div>
      </section>
    </>
  )
}
