import type { Metadata, Viewport } from 'next'
import './globals.css'
import Nav from '@/components/Nav'
import Footer from '@/components/Footer'
import ScrollReveal from '@/components/ScrollReveal'

export const viewport: Viewport = {
  themeColor: '#F6F7FB',
}

export const metadata: Metadata = {
  title: 'Apex Creative Studio | Brand, Digital, Marketing & Print',
  description: 'A full-service creative agency delivering brand identity, websites, marketing campaigns, and print production—built for businesses that want consistency, quality, and results.',
  metadataBase: new URL('https://apexgrowth.africa'),
  keywords: 'digital marketing agency Ghana, B2B marketing Africa, revenue growth agency, demand generation Africa, fintech marketing Ghana, performance marketing agency Accra, CRM automation Africa, marketing strategy Ghana',
  authors: [{ name: 'Apex Growth Partners' }],
  robots: { index: true, follow: true, googleBot: { index: true, follow: true, 'max-snippet': -1, 'max-image-preview': 'large', 'max-video-preview': -1 } },
  alternates: { canonical: 'https://apexgrowth.africa/' },
  openGraph: {
    title: 'Apex Creative Studio | Brand, Digital, Marketing & Print',
    description: 'We build brands that perform—online and offline. Brand identity, websites, marketing campaigns, and print production under one strategic roof.',
    url: 'https://apexgrowth.africa',
    siteName: 'Apex Growth Partners',
    locale: 'en_GB',
    type: 'website',
    images: [{ url: 'https://apexgrowth.africa/og-image.jpg', width: 1200, height: 630, alt: 'Apex Growth Partners — Brand Architecture for Africa' }],
  },
  twitter: {
    card: 'summary_large_image',
    site: '@apexgrowth_af',
    creator: '@apexgrowth_af',
    title: 'Apex Creative Studio | Brand, Digital, Marketing & Print',
    description: 'We build brands that perform—online and offline. Brand identity, websites, marketing campaigns, and print production under one roof.',
    images: [{ url: 'https://apexgrowth.africa/og-image.jpg', alt: 'Apex Growth Partners — Brand Architecture for Africa' }],
  },
  other: {
    'geo.region': 'GH-AA',
    'geo.placename': 'Accra, Ghana',
    'geo.position': '5.6037;-0.1870',
    'ICBM': '5.6037, -0.1870',
    'language': 'English',
    'revisit-after': '7 days',
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:ital,wght@0,300;0,400;0,500;0,600;0,700;0,800;1,400;1,600;1,700&family=DM+Sans:wght@300;400;500&family=DM+Mono:wght@400;500&display=swap" rel="stylesheet" />
      </head>
      <body className="antialiased">
        <ScrollReveal />
        <Nav />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  )
}
