import type { Metadata } from 'next'
import SectionLabel from '@/components/ui/SectionLabel'
import RevealOnScroll from '@/components/ui/RevealOnScroll'
import PrecisionCard from '@/components/ui/PrecisionCard'
import Breadcrumb from '@/components/ui/Breadcrumb'
import { LOCATIONS } from '@/lib/locations'
import { SITE } from '@/lib/constants'
import { MapPin } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Land Survey Services Across India',
  description:
    'Professional DGPS, Total Station, and boundary surveys in 20+ Indian states. 30+ years experience. Government certified. Contact us for any location.',
  alternates: { canonical: `${SITE.url}/locations` },
}

export default function LocationsHubPage() {
  return (
    <>
      <Breadcrumb items={[{ name: 'Locations', href: '/locations' }]} />

      <section
        className="pt-24 pb-20 relative overflow-hidden"
        style={{ backgroundColor: 'var(--color-brand-navy)', paddingLeft: 'clamp(1rem, 4vw, 4rem)', paddingRight: 'clamp(1rem, 4vw, 4rem)' }}
      >
        <div className="bg-blueprint-dark absolute inset-0 opacity-40 pointer-events-none" />
        <RevealOnScroll className="relative z-10">
          <SectionLabel index="§ LOC" label="Locations" dark />
          <h1
            style={{
              fontFamily: 'var(--font-syne)',
              fontSize: 'clamp(2rem, 6vw, 4rem)',
              fontWeight: '800',
              textTransform: 'uppercase',
              letterSpacing: '-0.02em',
              color: 'var(--color-brand-offwhite)',
              maxWidth: '700px',
              marginBottom: '1.5rem',
            }}
          >
            Land Survey Services Across India
          </h1>
          <p
            style={{
              fontFamily: 'var(--font-jost)',
              fontSize: '1.1rem',
              lineHeight: '1.7',
              color: 'var(--color-inverse-primary)',
              maxWidth: '560px',
              borderLeft: '2px solid var(--color-brand-gold)',
              paddingLeft: '1.5rem',
            }}
          >
            Professional DGPS, Total Station, and boundary surveys in {LOCATIONS.length}+ Indian
            states. 30 years. Government certified. Contact us for any location.
          </p>
        </RevealOnScroll>
      </section>

      <section
        className="py-24"
        style={{ backgroundColor: 'var(--color-surface)', paddingLeft: 'clamp(1rem, 4vw, 4rem)', paddingRight: 'clamp(1rem, 4vw, 4rem)' }}
      >
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {LOCATIONS.map((location, i) => (
            <RevealOnScroll key={location.state} delay={i * 0.04}>
              <PrecisionCard
                index={`§ ${String(i + 1).padStart(2, '0')}`}
                icon={<MapPin size={32} />}
                title={location.name}
                description={`Boundary, DGPS, and topographic surveys across ${location.cities.slice(0, 3).join(', ')}.`}
                href={`/locations/${location.state}`}
              />
            </RevealOnScroll>
          ))}
        </div>
      </section>
    </>
  )
}
