import RevealOnScroll from '@/components/ui/RevealOnScroll'
import SectionLabel from '@/components/ui/SectionLabel'
import PrecisionCard from '@/components/ui/PrecisionCard'
import { INDUSTRIES } from '@/lib/constants'
import { Route, Building2, Mountain, Sprout, Building, Zap } from 'lucide-react'
import type { ReactElement } from 'react'

const icons: ReactElement[] = [
  <Route size={32} key="route" />,
  <Building2 size={32} key="building2" />,
  <Mountain size={32} key="mountain" />,
  <Sprout size={32} key="sprout" />,
  <Building size={32} key="building" />,
  <Zap size={32} key="zap" />,
]

export default function IndustriesGrid() {
  return (
    <section style={{ backgroundColor: 'var(--color-brand-offwhite)' }}>
      <div
        className="py-24 md:py-32"
        style={{ paddingLeft: 'clamp(1rem, 4vw, 4rem)', paddingRight: 'clamp(1rem, 4vw, 4rem)' }}
      >
        <RevealOnScroll>
          <SectionLabel index="§ 03" label="Industries We Serve" />
          <div className="flex flex-col md:flex-row md:justify-between md:items-end gap-6 mb-16">
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
              EVERY SECTOR.<br />ONE EXPERT.
            </h2>
            <p style={{ fontFamily: 'var(--font-jost)', fontSize: '1rem', lineHeight: '1.7', color: 'var(--color-on-surface-variant)', maxWidth: '400px' }}>
              From NHAI highway corridors to RERA-compliant township projects —
              we bring the same sub-centimeter precision to every sector.
            </p>
          </div>
        </RevealOnScroll>

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
      </div>
    </section>
  )
}
