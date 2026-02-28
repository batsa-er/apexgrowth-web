'use client'

import { useEffect } from 'react'
import { usePathname } from 'next/navigation'

export default function ScrollReveal() {
  const pathname = usePathname()

  useEffect(() => {
    // Only observe elements not already visible (avoids re-animating on back navigation)
    const els = document.querySelectorAll<Element>('.reveal:not(.visible), .reveal-scale:not(.visible)')

    if (!('IntersectionObserver' in window)) {
      els.forEach(el => el.classList.add('visible'))
      return
    }

    const observer = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible')
            observer.unobserve(entry.target)
          }
        })
      },
      { threshold: 0.12, rootMargin: '0px 0px -48px 0px' }
    )

    els.forEach(el => observer.observe(el))
    return () => observer.disconnect()
  }, [pathname]) // re-run on every page navigation

  return null
}
