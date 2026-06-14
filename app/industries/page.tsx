import type { Metadata } from 'next'
import SectionLabel from '@/components/ui/SectionLabel'
import RevealOnScroll from '@/components/ui/RevealOnScroll'
import PrecisionCard from '@/components/ui/PrecisionCard'
import { INDUSTRIES } from '@/lib/constants'
import { Route, Building2, Mountain, Sprout, Building, Zap } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Industries We Serve',
  description:
    'Precision survey services for infrastructure, real estate, mining, agriculture, smart cities, and utilities across India.',
  alternates: { canonical: 'https://www.shubhamsurveyors.in/industries' },
}

const icons = [
  <Route size={32} key="route" />,
  <Building2 size={32} key="building2" />,
  <Mountain size={32} key="mountain" />,
  <Sprout size={32} key="sprout" />,
  <Building size={32} key="building" />,
  <Zap size={32} key="zap" />,
]

export default function IndustriesPage() {
  return (
    <>
      <section
        className="pt-40 pb-20 relative overflow-hidden"
        style={{ backgroundColor: 'var(--color-brand-navy)', paddingLeft: 'clamp(1rem, 4vw, 4rem)', paddingRight: 'clamp(1rem, 4vw, 4rem)' }}
      >
        <div className="bg-blueprint-dark absolute inset-0 opacity-40 pointer-events-none" />
        <RevealOnScroll className="relative z-10">
          <SectionLabel index="§ IND" label="Industries" dark />
          <h1
            style={{
              fontFamily: 'var(--font-syne)',
              fontSize: 'clamp(2rem, 6vw, 4rem)',
              fontWeight: '800',
              textTransform: 'uppercase',
              letterSpacing: '-0.02em',
              color: 'var(--color-brand-offwhite)',
              maxWidth: '700px',
            }}
          >
            EVERY SECTOR. ONE EXPERT.
          </h1>
        </RevealOnScroll>
      </section>

      <section
        className="py-24"
        style={{ backgroundColor: 'var(--color-surface)', paddingLeft: 'clamp(1rem, 4vw, 4rem)', paddingRight: 'clamp(1rem, 4vw, 4rem)' }}
      >
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {INDUSTRIES.map((industry, i) => (
            <RevealOnScroll key={industry.slug} delay={i * 0.08}>
              <PrecisionCard
                index={industry.index}
                icon={icons[i]}
                title={industry.title}
                description={industry.description}
                points={industry.points}
                href={industry.href}
                coordinate={industry.coordinate}
              />
            </RevealOnScroll>
          ))}
        </div>
      </section>
    </>
  )
}
