import Link from 'next/link'
import RevealOnScroll from '@/components/ui/RevealOnScroll'
import SectionLabel from '@/components/ui/SectionLabel'
import AnimatedCounter from '@/components/ui/AnimatedCounter'
import { Compass } from 'lucide-react'

const stats = [
  { target: 5000, suffix: '+', label: 'Projects' },
  { target: 29, suffix: '', label: 'States' },
  { target: 30, suffix: '+', label: 'Years' },
  { target: 100, suffix: '%', label: 'Govt Accepted' },
]

export default function ProjectsPortfolio() {
  return (
    <section style={{ backgroundColor: 'var(--color-surface-container-low)' }}>
      <div
        className="py-24 md:py-32"
        style={{ paddingLeft: 'clamp(1rem, 4vw, 4rem)', paddingRight: 'clamp(1rem, 4vw, 4rem)' }}
      >
        <RevealOnScroll>
          <SectionLabel index="§ 04" label="Our Work" />
          <h2
            style={{
              fontFamily: 'var(--font-syne)',
              fontSize: 'clamp(1.75rem, 4vw, 3rem)',
              fontWeight: '700',
              textTransform: 'uppercase',
              color: 'var(--color-on-surface)',
              marginBottom: '3rem',
            }}
          >
            PROJECT PORTFOLIO
          </h2>
        </RevealOnScroll>

        {/* Stats bar */}
        <RevealOnScroll delay={0.1}>
          <div
            className="grid grid-cols-2 md:grid-cols-4 mb-16"
            style={{ border: '1px solid var(--color-outline)' }}
          >
            {stats.map((stat, i) => (
              <div
                key={stat.label}
                className="p-8 text-center"
                style={{ borderRight: i < 3 ? '1px solid var(--color-outline)' : 'none' }}
              >
                <div
                  style={{
                    fontFamily: 'var(--font-syne)',
                    fontSize: 'clamp(1.75rem, 4vw, 2.5rem)',
                    fontWeight: '800',
                    color: 'var(--color-on-surface)',
                    lineHeight: '1',
                    marginBottom: '0.5rem',
                  }}
                >
                  <AnimatedCounter target={stat.target} suffix={stat.suffix} />
                </div>
                <div className="label-caps" style={{ color: 'var(--color-on-surface-variant)' }}>
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </RevealOnScroll>

        {/* Empty state */}
        <RevealOnScroll delay={0.2}>
          <div
            className="flex flex-col items-center justify-center text-center py-32 px-8"
            style={{ border: '1px dashed var(--color-brand-slate)' }}
          >
            <Compass size={64} style={{ color: 'var(--color-brand-slate)', opacity: 0.4, marginBottom: '2rem' }} />
            <h3
              style={{
                fontFamily: 'var(--font-syne)',
                fontSize: '1.5rem',
                fontWeight: '700',
                textTransform: 'uppercase',
                color: 'var(--color-on-surface)',
                marginBottom: '1rem',
              }}
            >
              30+ YEARS OF FIELD WORK ACROSS INDIA
            </h3>
            <p
              style={{
                fontFamily: 'var(--font-jost)',
                fontSize: '1rem',
                lineHeight: '1.7',
                color: 'var(--color-on-surface-variant)',
                maxWidth: '560px',
                marginBottom: '2rem',
              }}
            >
              Our portfolio is being compiled. With thousands of surveys completed across
              every state, terrain, and project type, this section will soon document our
              finest work in full detail.
            </p>
            <p className="label-caps mb-8" style={{ color: 'var(--color-brand-slate)' }}>
              Contact us to discuss projects similar to yours.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Link href="/contact" className="btn-primary">
                DISCUSS YOUR PROJECT →
              </Link>
              <Link href="/services" className="btn-secondary">
                VIEW OUR SERVICES →
              </Link>
            </div>
          </div>
        </RevealOnScroll>
      </div>
    </section>
  )
}
