'use client'

import { useEffect } from 'react'

export default function ScrollReveal() {
  useEffect(() => {
    const selector = '.reveal, .reveal-scale'
    const els = document.querySelectorAll<Element>(selector)

    // Fallback for environments without IntersectionObserver
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
  }, [])

  return null
}
