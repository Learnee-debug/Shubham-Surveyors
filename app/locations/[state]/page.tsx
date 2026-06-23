import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { LOCATIONS, type LocationSlug } from '@/lib/locations'
import { SITE } from '@/lib/constants'
import LocationPageTemplate from '@/components/locations/LocationPageTemplate'

interface Props {
  params: Promise<{ state: LocationSlug }>
}

export async function generateStaticParams() {
  return LOCATIONS.map((loc) => ({ state: loc.state }))
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { state } = await params
  const location = LOCATIONS.find((l) => l.state === state)
  if (!location) return {}

  return {
    title: `Land Surveyor in ${location.name}`,
    description: `Professional land surveying services in ${location.name}. Boundary surveys, DGPS, topographic, RERA layouts. Serving ${location.cities.join(', ')}. 30+ years experience. Government certified.`,
    alternates: { canonical: `${SITE.url}/locations/${location.state}` },
  }
}

export default async function LocationPage({ params }: Props) {
  const { state } = await params
  const location = LOCATIONS.find((l) => l.state === state)
  if (!location) notFound()

  const locationSchema = {
    '@context': 'https://schema.org',
    '@type': 'ProfessionalService',
    name: `${SITE.name} — ${location.name}`,
    description: `Land surveying services in ${location.name}: boundary surveys, DGPS, topographic mapping, RERA layouts.`,
    url: `${SITE.url}/locations/${location.state}`,
    telephone: SITE.phone,
    areaServed: { '@type': 'State', name: location.name },
    parentOrganization: { '@id': `${SITE.url}/#organization` },
  }

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(locationSchema) }}
      />
      <LocationPageTemplate location={location} index="§ LOC — STATE OVERVIEW" />
    </>
  )
}
