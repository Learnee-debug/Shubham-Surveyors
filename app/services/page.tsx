import type { Metadata } from 'next'
import SectionLabel from '@/components/ui/SectionLabel'
import RevealOnScroll from '@/components/ui/RevealOnScroll'
import PrecisionCard from '@/components/ui/PrecisionCard'
import { SERVICES } from '@/lib/constants'
import { Mountain, Map, Satellite, Route, Scale, Globe, CheckCircle } from 'lucide-react'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Precision Survey Services',
  description:
    'Boundary surveys, topographic mapping, RTK DGPS, infrastructure corridor surveys, Mojani/TILR, and GIS mapping across India.',
  alternates: { canonical: 'https://www.shubhamsurveyors.in/services' },
}

const icons = [
  <Mountain size={32} key="m" />,
  <Map size={32} key="mp" />,
  <Satellite size={32} key="s" />,
  <Route size={32} key="r" />,
  <Scale size={32} key="sc" />,
  <Globe size={32} key="g" />,
]

const deliverables = [
  '.DWG / .DXF AutoCAD Files', '.SHP GIS Shapefiles', '.PDF Technical Reports',
  '.DEM Digital Elevation Models', 'KMZ / KML for Google Earth', '3D DTM / TIN Models',
  'Cross-Section & Profile Drawings', 'RERA-Compliant Area Statements',
]

export default function ServicesPage() {
  return (
    <>
      {/* Hero */}
      <section
        className="pt-40 pb-20"
        style={{
          backgroundColor: 'var(--color-brand-navy)',
          paddingLeft: 'clamp(1rem, 4vw, 4rem)',
          paddingRight: 'clamp(1rem, 4vw, 4rem)',
        }}
      >
        <div className="relative bg-blueprint-dark absolute inset-0 opacity-40 pointer-events-none" />
        <RevealOnScroll>
          <SectionLabel index="§ SRV" label="Survey Services" dark />
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
            EVERY SURVEY. EVERY TERRAIN. ONE FIRM.
          </h1>
          <p
            style={{
              fontFamily: 'var(--font-jost)',
              fontSize: '1.1rem',
              lineHeight: '1.7',
              color: 'var(--color-inverse-primary)',
              maxWidth: '560px',
            }}
          >
            Ground-based precision surveying for India&apos;s most critical engineering,
            regulatory, and legal requirements.
          </p>
        </RevealOnScroll>
      </section>

      {/* Services grid */}
      <section
        id="services"
        className="relative py-24"
        style={{ backgroundColor: 'var(--color-surface)' }}
      >
        <div
          className="absolute inset-0 bg-blueprint-light pointer-events-none"
          style={{ opacity: 0.4 }}
        />
        <div
          className="relative"
          style={{ paddingLeft: 'clamp(1rem, 4vw, 4rem)', paddingRight: 'clamp(1rem, 4vw, 4rem)' }}
        >
          <div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3"
            style={{ borderTop: '1px solid var(--color-outline)', borderLeft: '1px solid var(--color-outline)' }}
          >
            {SERVICES.map((service, i) => (
              <RevealOnScroll key={service.index} delay={i * 0.07}>
                <div style={{ borderBottom: '1px solid var(--color-outline)', borderRight: '1px solid var(--color-outline)' }}>
                  <PrecisionCard
                    index={service.index}
                    icon={icons[i]}
                    title={service.title}
                    description={service.description}
                    tags={[...service.tags]}
                  />
                </div>
              </RevealOnScroll>
            ))}
          </div>
        </div>
      </section>

      {/* Deliverables */}
      <section
        className="py-24"
        style={{ backgroundColor: 'var(--color-primary-container)', paddingLeft: 'clamp(1rem, 4vw, 4rem)', paddingRight: 'clamp(1rem, 4vw, 4rem)' }}
      >
        <RevealOnScroll>
          <SectionLabel index="§ 02" label="What You Receive" dark />
          <h2
            style={{
              fontFamily: 'var(--font-syne)',
              fontSize: 'clamp(1.75rem, 4vw, 3rem)',
              fontWeight: '700',
              textTransform: 'uppercase',
              color: 'var(--color-brand-offwhite)',
              marginBottom: '3rem',
            }}
          >
            INDUSTRY-STANDARD DELIVERABLES
          </h2>
        </RevealOnScroll>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {deliverables.map((item, i) => (
            <RevealOnScroll key={item} delay={i * 0.05}>
              <div
                className="flex items-center gap-3 px-5 py-4"
                style={{ border: '1px solid var(--color-outline)' }}
              >
                <CheckCircle size={16} style={{ color: 'var(--color-brand-gold)', flexShrink: 0 }} />
                <span className="label-caps" style={{ color: 'var(--color-inverse-primary)' }}>{item}</span>
              </div>
            </RevealOnScroll>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section
        className="py-24 text-center"
        style={{ backgroundColor: 'var(--color-brand-offwhite)', paddingLeft: 'clamp(1rem, 4vw, 4rem)', paddingRight: 'clamp(1rem, 4vw, 4rem)' }}
      >
        <RevealOnScroll>
          <h2
            style={{
              fontFamily: 'var(--font-syne)',
              fontSize: 'clamp(1.75rem, 4vw, 3rem)',
              fontWeight: '700',
              textTransform: 'uppercase',
              color: 'var(--color-on-surface)',
              marginBottom: '1.5rem',
            }}
          >
            READY TO START YOUR SURVEY?
          </h2>
          <div className="flex flex-wrap gap-4 justify-center">
            <Link href="/quote" className="btn-primary">GET A QUOTE →</Link>
            <Link href="/contact" className="btn-secondary">CONTACT US</Link>
          </div>
        </RevealOnScroll>
      </section>
    </>
  )
}
