'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

const links = [
  { href: '/work',     label: 'Work' },
  { href: '/services', label: 'Services' },
  { href: '/insights', label: 'Insights' },
  { href: '/about',    label: 'About' },
]

export default function Nav() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)
  const pathname = usePathname()

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', handler)
    return () => window.removeEventListener('scroll', handler)
  }, [])

  // eslint-disable-next-line react-hooks/set-state-in-effect
  useEffect(() => { setOpen(false) }, [pathname])

  useEffect(() => {
    const handler = (e: KeyboardEvent) => { if (e.key === 'Escape') setOpen(false) }
    window.addEventListener('keydown', handler)
    return () => window.removeEventListener('keydown', handler)
  }, [])

  return (
    <>
      <nav className={`fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-[clamp(24px,5vw,80px)] h-[72px] transition-all duration-400 ${
        scrolled ? 'bg-[rgba(246,247,251,0.96)] border-b border-[rgba(15,23,42,0.10)] backdrop-blur-xl shadow-sm' : ''
      }`}>
        <Link href="/" className="font-serif text-[22px] font-bold tracking-wide text-[#0B0F14]">
          Apex<span className="text-[#2563EB]">.</span>Growth
        </Link>

        <ul className="hidden md:flex items-center gap-10 list-none">
          {links.map(l => (
            <li key={l.href}>
              <Link
                href={l.href}
                className={`font-mono text-[11px] tracking-[0.12em] uppercase transition-colors duration-200 ${
                  pathname.startsWith(l.href) ? 'text-[#2563EB]' : 'text-[rgba(11,15,20,0.55)] hover:text-[#2563EB]'
                }`}
              >
                {l.label}
              </Link>
            </li>
          ))}
          <li>
            <Link
              href="/contact"
              className="font-mono text-[11px] tracking-[0.12em] uppercase font-medium bg-[#2563EB] text-white px-[22px] py-[10px] hover:bg-[#1D4ED8] transition-colors duration-200"
            >
              Book Strategy Call →
            </Link>
          </li>
        </ul>

        <button
          className="md:hidden flex flex-col gap-[5px] bg-none border-none cursor-pointer p-2"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
        >
          <span className={`block w-6 h-[1.5px] bg-[#0B0F14] transition-all duration-300 ${open ? 'translate-y-[6.5px] rotate-45' : ''}`} />
          <span className={`block w-6 h-[1.5px] bg-[#0B0F14] transition-all duration-300 ${open ? 'opacity-0 scale-x-0' : ''}`} />
          <span className={`block w-6 h-[1.5px] bg-[#0B0F14] transition-all duration-300 ${open ? '-translate-y-[6.5px] -rotate-45' : ''}`} />
        </button>
      </nav>

      {/* Mobile menu */}
      {open && (
        <div className="fixed inset-0 bg-[rgba(246,247,251,0.98)] backdrop-blur-xl z-40 flex flex-col items-center justify-center gap-8">
          {links.map(l => (
            <Link
              key={l.href}
              href={l.href}
              className="font-serif text-[clamp(28px,6vw,48px)] font-semibold text-[#0B0F14] hover:text-[#2563EB] transition-colors duration-200"
            >
              {l.label}
            </Link>
          ))}
          <Link
            href="/contact"
            className="mt-4 font-mono text-[13px] tracking-[0.12em] uppercase font-medium bg-[#2563EB] text-white px-12 py-5 hover:bg-[#1D4ED8] transition-colors duration-200"
          >
            Book Strategy Call
          </Link>
        </div>
      )}
    </>
  )
}
