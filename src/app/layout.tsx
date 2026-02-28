import type { Metadata, Viewport } from 'next'
import './globals.css'
import Nav from '@/components/Nav'
import Footer from '@/components/Footer'

export const viewport: Viewport = {
  themeColor: '#09041A',
}

export const metadata: Metadata = {
  title: 'Apex Growth Partners | Revenue Architecture for Africa',
  description: 'We build predictable revenue systems for enterprise, fintech, and high-growth companies across Africa. Strategy, demand generation, and automation at scale.',
  metadataBase: new URL('https://apexgrowth.africa'),
  openGraph: {
    title: 'Apex Growth Partners | Revenue Architecture for Africa',
    description: 'We build predictable revenue systems for enterprise, fintech, and high-growth companies across Africa.',
    url: 'https://apexgrowth.africa',
    siteName: 'Apex Growth Partners',
    locale: 'en_GB',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Apex Growth Partners | Revenue Architecture for Africa',
    description: 'We build predictable revenue systems for enterprise, fintech, and high-growth companies across Africa.',
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,400;0,600;0,700;1,400;1,600&family=DM+Sans:wght@300;400;500&family=DM+Mono:wght@400;500&display=swap" rel="stylesheet" />
      </head>
      <body className="antialiased">
        <Nav />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  )
}
