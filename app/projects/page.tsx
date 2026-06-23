import type { Metadata } from 'next'
import SectionLabel from '@/components/ui/SectionLabel'
import RevealOnScroll from '@/components/ui/RevealOnScroll'
import AnimatedCounter from '@/components/ui/AnimatedCounter'
import Link from 'next/link'
import { Compass } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Project Portfolio',
  description:
    '5,000+ precision survey projects delivered across 29 Indian states — highways, real estate, mining, and government infrastructure.',
  alternates: { canonical: 'https://shubhamsurveyors.com/projects' },
}

const stats = [
  { target: 5000, suffix: '+', label: 'Projects' },
  { target: 29, suffix: '', label: 'States' },
  { target: 30, suffix: '+', label: 'Years' },
  { target: 100, suffix: '%', label: 'Govt Accepted' },
]

export default function ProjectsPage() {
  return (
    <>
      {/* Hero */}
      <section
        className="pt-40 pb-20 relative overflow-hidden"
        style={{
          backgroundColor: 'var(--color-brand-navy)',
          paddingLeft: 'clamp(1rem, 4vw, 4rem)',
          paddingRight: 'clamp(1rem, 4vw, 4rem)',
        }}
      >
        <div className="bg-blueprint-dark absolute inset-0 opacity-40 pointer-events-none" />
        <RevealOnScroll className="relative z-10">
          <SectionLabel index="§ PRJ" label="Project Portfolio" dark />
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
            30+ YEARS OF SURVEY WORK ACROSS INDIA
          </h1>
        </RevealOnScroll>
      </section>

      {/* Stats bar */}
      <section
        style={{
          backgroundColor: 'var(--color-surface)',
          borderBottom: '1px solid var(--color-outline)',
        }}
      >
        <div
          className="grid grid-cols-2 md:grid-cols-4"
          style={{ borderLeft: '1px solid var(--color-outline)' }}
        >
          {stats.map((stat) => (
            <div
              key={stat.label}
              className="p-10 text-center"
              style={{ borderRight: '1px solid var(--color-outline)' }}
            >
              <div
                style={{
                  fontFamily: 'var(--font-syne)',
                  fontSize: 'clamp(2rem, 4vw, 3rem)',
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
      </section>

      {/* Empty state */}
      <section
        className="py-24"
        style={{ backgroundColor: 'var(--color-surface)', paddingLeft: 'clamp(1rem, 4vw, 4rem)', paddingRight: 'clamp(1rem, 4vw, 4rem)' }}
      >
        <RevealOnScroll>
          <div
            className="flex flex-col items-center justify-center text-center py-32 px-8"
            style={{ border: '1px dashed var(--color-brand-slate)' }}
          >
            <Compass
              size={64}
              style={{ color: 'var(--color-brand-slate)', opacity: 0.4, marginBottom: '2rem' }}
            />
            <h2
              style={{
                fontFamily: 'var(--font-syne)',
                fontSize: 'clamp(1.25rem, 3vw, 2rem)',
                fontWeight: '700',
                textTransform: 'uppercase',
                color: 'var(--color-on-surface)',
                marginBottom: '1rem',
              }}
            >
              PORTFOLIO BEING COMPILED
            </h2>
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
              With thousands of surveys completed across every state, terrain, and project
              type, this section will soon document our finest work in full detail.
              Contact us to discuss projects similar to yours.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Link href="/contact" className="btn-primary">DISCUSS YOUR PROJECT →</Link>
              <Link href="/services" className="btn-secondary">VIEW OUR SERVICES</Link>
            </div>
          </div>
        </RevealOnScroll>
      </section>
    </>
  )
}
