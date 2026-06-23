import type { Metadata } from 'next'
import SectionLabel from '@/components/ui/SectionLabel'
import RevealOnScroll from '@/components/ui/RevealOnScroll'
import AnimatedCounter from '@/components/ui/AnimatedCounter'
import Link from 'next/link'
import { SITE } from '@/lib/constants'
import { CheckCircle } from 'lucide-react'

export const metadata: Metadata = {
  title: 'About Us',
  description:
    'Shubham Surveyors — 30+ years of precision land surveying in India. Government certified, RERA compliant, sub-centimeter accuracy.',
  alternates: { canonical: 'https://shubhamsurveyors.com/about' },
}

const milestones = [
  { year: '1994', event: 'Founded in Pune, Maharashtra. First government-certified survey assignment.' },
  { year: '2001', event: 'Expanded to cover all of Maharashtra. Commissioned by PWD for highway projects.' },
  { year: '2007', event: 'Introduced RTK DGPS technology. First private surveying firm in the region to do so.' },
  { year: '2012', event: 'National expansion. Offices in Delhi, Mumbai, Hyderabad.' },
  { year: '2016', event: 'RERA enacted. First in India to establish a RERA compliance survey division.' },
  { year: '2024', event: '5,000+ projects delivered. 29 states covered. Sub-centimeter standard maintained.' },
]

const certifications = [
  'ISO 9001:2015 Certified',
  'RERA Approved Surveyor',
  'NHAI Empaneled',
  'Government Revenue Department Recognized',
  'Railway Board Approved',
  'Court Admissible Reports',
]

export default function AboutPage() {
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
          <SectionLabel index="§ ABT" label="About Us" dark />
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
            INDIA&apos;S GROUND TRUTH FOR 30 YEARS.
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
            Founded in 1994 in Pune, Shubham Surveyors has grown from a single-team
            regional operation to India&apos;s most trusted precision surveying firm —
            without ever compromising on ground-based accuracy.
          </p>
        </RevealOnScroll>
      </section>

      {/* Stats */}
      <section style={{ backgroundColor: 'var(--color-surface)', borderBottom: '1px solid var(--color-outline)' }}>
        <div
          className="grid grid-cols-2 md:grid-cols-4"
          style={{ borderLeft: '1px solid var(--color-outline)' }}
        >
          {[
            { target: 30, suffix: '+', label: 'Years Active' },
            { target: 5000, suffix: '+', label: 'Projects Delivered' },
            { target: 29, suffix: '', label: 'States Covered' },
            { target: 100, suffix: '%', label: 'Govt Accepted' },
          ].map((stat, i) => (
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

      {/* Mission */}
      <section
        className="py-24"
        style={{ backgroundColor: 'var(--color-brand-offwhite)', paddingLeft: 'clamp(1rem, 4vw, 4rem)', paddingRight: 'clamp(1rem, 4vw, 4rem)' }}
      >
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          <RevealOnScroll>
            <SectionLabel index="§ 01" label="Our Mission" />
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
              PRECISION THAT STANDS IN COURT.
            </h2>
            <p style={{ fontFamily: 'var(--font-jost)', fontSize: '1rem', lineHeight: '1.8', color: 'var(--color-on-surface-variant)', marginBottom: '1rem' }}>
              Every survey we deliver must withstand the scrutiny of government authorities,
              RERA inspectors, NHAI project managers, and High Court judges.
            </p>
            <p style={{ fontFamily: 'var(--font-jost)', fontSize: '1rem', lineHeight: '1.8', color: 'var(--color-on-surface-variant)' }}>
              This is why we reject drone surveys for any regulatory purpose.
              Ground-based RTK DGPS and Total Station work is the only method
              accepted universally in India.
            </p>
          </RevealOnScroll>

          <RevealOnScroll delay={0.15}>
            <blockquote
              style={{
                fontFamily: 'var(--font-cormorant)',
                fontSize: '1.5rem',
                lineHeight: '1.5',
                fontStyle: 'italic',
                color: 'var(--color-on-surface)',
                borderLeft: '2px solid var(--color-brand-gold)',
                paddingLeft: '2rem',
              }}
            >
              &ldquo;Precision at the as-built stage is not merely a technical requirement;
              it is the definitive proof of a developer&apos;s integrity and adherence to
              regulatory commitments.&rdquo;
            </blockquote>
          </RevealOnScroll>
        </div>
      </section>

      {/* Timeline */}
      <section
        className="py-24"
        style={{ backgroundColor: 'var(--color-surface)', paddingLeft: 'clamp(1rem, 4vw, 4rem)', paddingRight: 'clamp(1rem, 4vw, 4rem)' }}
      >
        <RevealOnScroll>
          <SectionLabel index="§ 02" label="Our History" />
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
            30 YEARS OF MILESTONES
          </h2>
        </RevealOnScroll>

        <div className="flex flex-col">
          {milestones.map((m, i) => (
            <RevealOnScroll key={m.year} delay={i * 0.07}>
              <div
                className="flex gap-8 py-6"
                style={{ borderBottom: '1px solid var(--color-outline-variant)' }}
              >
                <div
                  className="label-caps flex-shrink-0 w-16"
                  style={{ color: 'var(--color-brand-gold)', paddingTop: '2px' }}
                >
                  {m.year}
                </div>
                <p style={{ fontFamily: 'var(--font-jost)', fontSize: '1rem', lineHeight: '1.7', color: 'var(--color-on-surface-variant)' }}>
                  {m.event}
                </p>
              </div>
            </RevealOnScroll>
          ))}
        </div>
      </section>

      {/* Certifications */}
      <section
        className="py-24"
        style={{ backgroundColor: 'var(--color-primary-container)', paddingLeft: 'clamp(1rem, 4vw, 4rem)', paddingRight: 'clamp(1rem, 4vw, 4rem)' }}
      >
        <RevealOnScroll>
          <SectionLabel index="§ 03" label="Certifications" dark />
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
            RECOGNIZED BY EVERY AUTHORITY
          </h2>
        </RevealOnScroll>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {certifications.map((cert, i) => (
            <RevealOnScroll key={cert} delay={i * 0.06}>
              <div
                className="flex items-center gap-4 p-5"
                style={{ border: '1px solid var(--color-outline)' }}
              >
                <CheckCircle size={18} style={{ color: 'var(--color-brand-gold)', flexShrink: 0 }} />
                <span className="label-caps" style={{ color: 'var(--color-inverse-primary)' }}>{cert}</span>
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
            WORK WITH US
          </h2>
          <p style={{ fontFamily: 'var(--font-jost)', fontSize: '1rem', color: 'var(--color-on-surface-variant)', marginBottom: '2rem' }}>
            Contact {SITE.name} for your next precision survey requirement.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Link href="/quote" className="btn-primary">GET A QUOTE →</Link>
            <Link href="/contact" className="btn-secondary">CONTACT US</Link>
          </div>
        </RevealOnScroll>
      </section>
    </>
  )
}
