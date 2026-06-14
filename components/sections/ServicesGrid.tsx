import RevealOnScroll from '@/components/ui/RevealOnScroll'
import SectionLabel from '@/components/ui/SectionLabel'
import PrecisionCard from '@/components/ui/PrecisionCard'
import { SERVICES } from '@/lib/constants'
import { Mountain, Map, Satellite, Route, Scale, Globe } from 'lucide-react'

const icons = [
  <Mountain size={32} key="mountain" />,
  <Map size={32} key="map" />,
  <Satellite size={32} key="satellite" />,
  <Route size={32} key="route" />,
  <Scale size={32} key="scale" />,
  <Globe size={32} key="globe" />,
]

export default function ServicesGrid() {
  return (
    <section
      className="relative"
      style={{ backgroundColor: 'var(--color-surface)' }}
    >
      <div className="absolute inset-0 bg-blueprint-light pointer-events-none" style={{ opacity: 0.4 }} />

      <div
        className="relative py-24 md:py-32"
        style={{ paddingLeft: 'clamp(1rem, 4vw, 4rem)', paddingRight: 'clamp(1rem, 4vw, 4rem)' }}
      >
        {/* Header */}
        <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-8 mb-16">
          <div>
            <SectionLabel index="§ 01" label="Our Services" />
            <h2
              style={{
                fontFamily: 'var(--font-syne)',
                fontSize: 'clamp(1.75rem, 4vw, 3rem)',
                fontWeight: '700',
                textTransform: 'uppercase',
                letterSpacing: '-0.01em',
                color: 'var(--color-on-surface)',
              }}
            >
              FULL-SPECTRUM<br />SURVEY EXPERTISE
            </h2>
          </div>
          <div
            className="md:w-1/3"
            style={{
              borderLeft: '1px solid var(--color-outline)',
              paddingLeft: '1.5rem',
            }}
          >
            <p style={{ fontFamily: 'var(--font-jost)', fontSize: '1rem', lineHeight: '1.7', color: 'var(--color-on-surface-variant)' }}>
              Our methodology is rooted in absolute accuracy. We provide comprehensive
              ground-based surveying solutions tailored for regulatory compliance and
              high-stakes engineering.
            </p>
          </div>
        </div>

        {/* Grid */}
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
                  href={service.href}
                  coordinate={service.coordinate}
                />
              </div>
            </RevealOnScroll>
          ))}
        </div>
      </div>
    </section>
  )
}
