import Image from 'next/image'
import { type ReactNode } from 'react'

interface Props {
  eyebrow: string
  title: ReactNode
  description: string
  image?: { src: string; alt: string }
}

export default function PageHero({ eyebrow, title, description, image }: Props) {
  return (
    <>
      <section className="dot-grid bg-[var(--color-bg)] px-[clamp(24px,5vw,80px)] pt-40 pb-20">
        <div className="max-w-[1280px] mx-auto">
          <p className="font-mono text-[10px] tracking-[0.22em] uppercase text-[var(--color-accent)] mb-6 hero-in hero-in-1">
            {eyebrow}
          </p>
          <h1
            className="font-serif font-bold text-[var(--color-text)] leading-tight mb-6 hero-in hero-in-2"
            style={{ fontSize: 'clamp(44px,7vw,88px)' }}
          >
            {title}
          </h1>
          <p className="text-[clamp(15px,1.2vw,18px)] text-[rgba(var(--ch-text),0.55)] max-w-2xl leading-relaxed hero-in hero-in-3">
            {description}
          </p>
        </div>
      </section>
      {image && (
        <div className="relative w-full aspect-[21/9] overflow-hidden hero-in hero-in-4">
          <Image src={image.src} alt={image.alt} fill className="object-cover" priority />
          <div className="absolute inset-0 bg-[rgba(var(--ch-accent),0.07)]" />
        </div>
      )}
    </>
  )
}
