import type { Metadata, Viewport } from 'next'
import { Syne, Jost, Cormorant_Garamond } from 'next/font/google'
import './globals.css'
import Navigation from '@/components/layout/Navigation'
import Footer from '@/components/layout/Footer'
import CustomCursor from '@/components/layout/CustomCursor'
import WhatsAppFloat from '@/components/layout/WhatsAppFloat'
import Script from 'next/script'
import { SITE, TESTIMONIALS } from '@/lib/constants'
import { LOCATIONS } from '@/lib/locations'

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

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
}

export const metadata: Metadata = {
  metadataBase: new URL(SITE.url),
  title: {
    default: 'Land Surveyor India | DGPS & Total Station',
    template: '%s | Shubham Surveyors',
  },
  description:
    "India's most trusted land surveying firm with 30+ years experience. DGPS surveys, Total Station, topographic surveys, RERA-compliant layouts. Government certified. Serving all India.",
  keywords: [
    'land surveyor India',
    'DGPS survey India',
    'total station survey',
    'land survey company India',
    'topographic survey India',
    'boundary survey India',
    'RERA survey',
    'land surveyors in Pune',
    'survey company Maharashtra',
    'RTK DGPS survey',
    'cadastral survey India',
    'highway survey India',
    'TILR Mojani Maharashtra',
    'government land survey',
  ],
  authors: [{ name: SITE.name }],
  creator: SITE.name,
  publisher: SITE.name,
  openGraph: {
    type: 'website',
    locale: 'en_IN',
    url: SITE.url,
    siteName: SITE.name,
    title: 'Land Surveyor India | DGPS & Total Station | Shubham Surveyors',
    description: "India's most trusted precision land surveying firm. 30+ years. Government certified. All India coverage.",
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Land Surveyor India | Shubham Surveyors',
    description: "India's most trusted land surveying firm. 30+ years. DGPS, Total Station, AutoCAD.",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, 'max-image-preview': 'large' },
  },
}

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'ProfessionalService',
  '@id': `${SITE.url}/#organization`,
  name: SITE.name,
  description: 'Land surveyors based in Pune, Maharashtra, serving clients across India since 1994. DGPS, Total Station, AutoCAD. Government certified.',
  image: `${SITE.url}/icon.png`,
  logo: `${SITE.url}/icon.png`,
  url: SITE.url,
  telephone: SITE.phone,
  email: SITE.email,
  foundingDate: SITE.founded,
  address: {
    '@type': 'PostalAddress',
    streetAddress: 'B 1 Wing, Flat No. 211, Forest Castle, Vetal Nagar, Ambegaon (Bk)',
    addressLocality: 'Pune',
    addressRegion: 'Maharashtra',
    postalCode: '411046',
    addressCountry: 'IN',
  },
  location: [
    {
      '@type': 'Place',
      name: 'Shubham Surveyors — Pune (HQ)',
      address: {
        '@type': 'PostalAddress',
        streetAddress: 'B 1 Wing, Flat No. 211, Forest Castle, Vetal Nagar, Ambegaon (Bk)',
        addressLocality: 'Pune',
        addressRegion: 'Maharashtra',
        postalCode: '411046',
        addressCountry: 'IN',
      },
    },
    {
      '@type': 'Place',
      name: 'Shubham Surveyors — Lonavala',
      address: {
        '@type': 'PostalAddress',
        streetAddress: 'Shop.13,14,15, Municipal Complex, Siddharth Nagar',
        addressLocality: 'Lonavala',
        addressRegion: 'Maharashtra',
        postalCode: '410401',
        addressCountry: 'IN',
      },
    },
  ],
  geo: {
    '@type': 'GeoCoordinates',
    latitude: 18.5204,
    longitude: 73.8567,
  },
  sameAs: SITE.sameAs,
  areaServed: [
    { '@type': 'Country', name: 'India' },
    ...LOCATIONS.map((loc) => ({ '@type': 'State', name: loc.name })),
  ],
  hasOfferCatalog: {
    '@type': 'OfferCatalog',
    name: 'Land Surveying Services',
    itemListElement: [
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Boundary & Land Survey', description: 'Precise boundary demarcation, RERA compliant, court admissible' } },
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'RTK DGPS Survey', description: 'Sub-centimeter accuracy differential GPS surveys' } },
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Topographic Survey', description: 'High-density elevation mapping for construction' } },
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Highway Corridor Survey', description: 'NHAI and PWD standard highway alignment surveys' } },
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'RERA Layout Survey', description: 'RERA compliant layout plans for real estate developers' } },
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Mojani & TILR Consultancy', description: 'Expert guidance on Maharashtra land revenue procedures' } },
    ],
  },
  priceRange: '₹₹',
  aggregateRating: {
    '@type': 'AggregateRating',
    ratingValue: '5',
    reviewCount: String(TESTIMONIALS.length),
  },
  review: TESTIMONIALS.map((t) => ({
    '@type': 'Review',
    author: { '@type': 'Person', name: t.name },
    reviewBody: t.quote,
    reviewRating: { '@type': 'Rating', ratingValue: '5', bestRating: '5' },
  })),
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
