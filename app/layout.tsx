import type { Metadata } from 'next'
import { Syne, Jost, Cormorant_Garamond } from 'next/font/google'
import './globals.css'
import Navigation from '@/components/layout/Navigation'
import Footer from '@/components/layout/Footer'
import CustomCursor from '@/components/layout/CustomCursor'
import WhatsAppFloat from '@/components/layout/WhatsAppFloat'
import Script from 'next/script'
import { SITE } from '@/lib/constants'

const syne = Syne({
  subsets: ['latin'],
  weight: ['700', '800'],
  variable: '--font-syne-var',
  display: 'swap',
})

const jost = Jost({
  subsets: ['latin'],
  weight: ['400', '600'],
  variable: '--font-jost-var',
  display: 'swap',
})

const cormorant = Cormorant_Garamond({
  subsets: ['latin'],
  weight: ['400'],
  style: ['italic'],
  variable: '--font-cormorant-var',
  display: 'swap',
})

export const metadata: Metadata = {
  metadataBase: new URL(SITE.url),
  title: {
    default: 'Shubham Surveyors — Land Surveyors in Pune, Maharashtra | India',
    template: '%s | Shubham Surveyors',
  },
  description:
    "Shubham Surveyors — trusted land surveyors in Pune since 1994. DGPS, Total Station, AutoCAD. Government certified. RERA compliant. All India coverage.",
  keywords: [
    'land surveyors',
    'land surveyors in Pune',
    'land surveyor India',
    'DGPS survey',
    'RTK survey',
    'RERA surveyor',
    'boundary survey Pune',
    'topographic survey Maharashtra',
  ],
  openGraph: {
    type: 'website',
    locale: 'en_IN',
    url: SITE.url,
    siteName: SITE.name,
  },
}

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'ProfessionalService',
  name: 'Shubham Surveyors',
  description: 'Land surveyors based in Pune, Maharashtra, serving clients across India since 1994.',
  url: SITE.url,
  telephone: SITE.phone,
  email: SITE.email,
  address: {
    '@type': 'PostalAddress',
    addressLocality: 'Pune',
    addressRegion: 'Maharashtra',
    addressCountry: 'IN',
  },
  areaServed: 'India',
  foundingYear: '1994',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html
      lang="en"
      className={`${syne.variable} ${jost.variable} ${cormorant.variable}`}
    >
      <body>
        <Script
          id="json-ld"
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <CustomCursor />
        <Navigation />
        <main>{children}</main>
        <Footer />
        <WhatsAppFloat />
      </body>
    </html>
  )
}
