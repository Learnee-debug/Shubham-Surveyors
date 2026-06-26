import Link from 'next/link'
import SectionLabel from '@/components/ui/SectionLabel'
import RevealOnScroll from '@/components/ui/RevealOnScroll'
import Breadcrumb from '@/components/ui/Breadcrumb'
import { CheckCircle, ArrowRight } from 'lucide-react'
import { SITE } from '@/lib/constants'

interface Step {
  num: string
  title: string
  desc: string
}

interface Deliverable {
  format: string
  standard: string
  timeline: string
}

interface IndustryPageTemplateProps {
  index: string
  slug: string
  sector: string
  headline: string
  intro: string
  coordinate: string
  capabilities: Array<{ title: string; desc: string }>
  steps: Step[]
  deliverables: Deliverable[]
  advantages: Array<{ title: string; desc: string }>
  statLabel: string
  statValue: string
}

export default function IndustryPageTemplate({
  index,
  slug,
  sector,
  headline,
  intro,
  coordinate,
  capabilities,
  steps,
  deliverables,
  advantages,
  statLabel,
  statValue,
}: IndustryPageTemplateProps) {
  return (
    <>
      <Breadcrumb items={[{ name: 'Industries', href: '/industries' }, { name: sector, href: `/industries/${slug}` }]} />
      {/* Hero */}
      <section
        className="pt-40 pb-20 relative overflow-hidden"
        style={{ backgroundColor: 'var(--color-brand-navy)', paddingLeft: 'clamp(1rem, 4vw, 4rem)', paddingRight: 'clamp(1rem, 4vw, 4rem)' }}
      >
        <div className="bg-blueprint-dark absolute inset-0 opacity-40 pointer-events-none" />
        <div
          aria-hidden="true"
          className="absolute top-8 right-8 label-caps hidden md:block"
          style={{ color: 'var(--color-brand-slate)', opacity: 0.6 }}
        >
          COORD: {coordinate}
        </div>

        <RevealOnScroll className="relative z-10">
          <SectionLabel index={`§ 01 / SECTOR OVERVIEW`} label={sector} dark />
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
            {headline}
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
            {intro}
          </p>
        </RevealOnScroll>
      </section>

      {/* Capabilities */}
      <section
        className="py-24 relative"
        style={{ backgroundColor: 'var(--color-surface)', paddingLeft: 'clamp(1rem, 4vw, 4rem)', paddingRight: 'clamp(1rem, 4vw, 4rem)' }}
      >
        <div className="absolute inset-0 bg-blueprint-light opacity-40 pointer-events-none" />
        <RevealOnScroll>
          <SectionLabel index="§ 02 / CORE SERVICES" label="Capabilities" />
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
            WHAT WE DO
          </h2>
        </RevealOnScroll>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {capabilities.map((cap, i) => (
            <RevealOnScroll key={cap.title} delay={i * 0.07}>
              <div
                className="p-7"
                style={{ border: '1px solid var(--color-outline)' }}
              >
                <h3
                  style={{
                    fontFamily: 'var(--font-syne)',
                    fontSize: '1.1rem',
                    fontWeight: '700',
                    textTransform: 'uppercase',
                    color: 'var(--color-on-surface)',
                    marginBottom: '0.75rem',
                  }}
                >
                  {cap.title}
                </h3>
                <p style={{ fontFamily: 'var(--font-jost)', fontSize: '0.9rem', lineHeight: '1.7', color: 'var(--color-on-surface-variant)' }}>
                  {cap.desc}
                </p>
              </div>
            </RevealOnScroll>
          ))}
        </div>
      </section>

      {/* Process */}
      <section
        className="py-24"
        style={{ backgroundColor: 'var(--color-brand-offwhite)', paddingLeft: 'clamp(1rem, 4vw, 4rem)', paddingRight: 'clamp(1rem, 4vw, 4rem)' }}
      >
        <RevealOnScroll>
          <SectionLabel index="§ 03 / HOW WE WORK" label="Our Process" />
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
            STEP BY STEP
          </h2>
        </RevealOnScroll>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          {steps.map((step, i) => (
            <RevealOnScroll key={step.num} delay={i * 0.07}>
              <div
                className="p-6 flex flex-col gap-3 relative"
                style={{ border: '1px solid var(--color-outline)', backgroundColor: 'var(--color-surface)' }}
              >
                <div
                  className="label-caps"
                  style={{ color: '#8B6508', fontSize: '1.5rem', fontFamily: 'var(--font-syne)', fontWeight: '800' }}
                >
                  {step.num}
                </div>
                <h3 style={{ fontFamily: 'var(--font-syne)', fontSize: '0.9rem', fontWeight: '700', textTransform: 'uppercase', color: 'var(--color-on-surface)' }}>
                  {step.title}
                </h3>
                <p style={{ fontFamily: 'var(--font-jost)', fontSize: '0.8rem', lineHeight: '1.6', color: 'var(--color-on-surface-variant)' }}>
                  {step.desc}
                </p>
                {i < steps.length - 1 && (
                  <ArrowRight
                    size={16}
                    className="absolute -right-3 top-1/2 hidden md:block"
                    style={{ color: 'var(--color-brand-gold)', transform: 'translateY(-50%)' }}
                  />
                )}
              </div>
            </RevealOnScroll>
          ))}
        </div>
      </section>

      {/* Deliverables */}
      <section
        className="py-24"
        style={{ backgroundColor: 'var(--color-primary-container)', paddingLeft: 'clamp(1rem, 4vw, 4rem)', paddingRight: 'clamp(1rem, 4vw, 4rem)' }}
      >
        <RevealOnScroll>
          <SectionLabel index="§ 04 / OUTPUT & AUTHORITY" label="What You Receive" dark />
          <div className="flex flex-col md:flex-row gap-16 md:gap-24 items-start">
            <div className="flex-1">
              <h2
                style={{
                  fontFamily: 'var(--font-syne)',
                  fontSize: 'clamp(1.5rem, 3vw, 2.5rem)',
                  fontWeight: '700',
                  textTransform: 'uppercase',
                  color: 'var(--color-brand-offwhite)',
                  marginBottom: '2rem',
                }}
              >
                TECHNICAL DELIVERABLES
              </h2>
              {deliverables.map((d) => (
                <div
                  key={d.format}
                  className="flex justify-between py-4"
                  style={{ borderBottom: '1px solid var(--color-outline)' }}
                >
                  <span className="label-caps" style={{ color: 'var(--color-inverse-primary)' }}>{d.format}</span>
                  <span className="label-caps" style={{ color: 'var(--color-brand-gold)' }}>{d.standard}</span>
                  <span className="label-caps" style={{ color: 'var(--color-on-primary-container)' }}>{d.timeline}</span>
                </div>
              ))}
            </div>
            <div
              className="p-8 text-center flex-shrink-0"
              style={{ border: '1px solid var(--color-brand-gold)', backgroundColor: 'rgba(0,0,0,0.2)' }}
            >
              <div
                style={{
                  fontFamily: 'var(--font-syne)',
                  fontSize: 'clamp(2rem, 5vw, 3.5rem)',
                  fontWeight: '800',
                  color: 'var(--color-brand-gold)',
                  lineHeight: '1',
                  marginBottom: '0.5rem',
                }}
              >
                {statValue}
              </div>
              <div className="label-caps" style={{ color: 'var(--color-on-primary-container)' }}>
                {statLabel}
              </div>
            </div>
          </div>
        </RevealOnScroll>
      </section>

      {/* Why choose us */}
      <section
        className="py-24"
        style={{ backgroundColor: 'var(--color-brand-offwhite)', paddingLeft: 'clamp(1rem, 4vw, 4rem)', paddingRight: 'clamp(1rem, 4vw, 4rem)' }}
      >
        <RevealOnScroll>
          <SectionLabel index="§ 05 / WHY CHOOSE US" label="Our Advantage" />
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
            WHY SHUBHAM SURVEYORS
          </h2>
        </RevealOnScroll>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {advantages.map((adv, i) => (
            <RevealOnScroll key={adv.title} delay={i * 0.08}>
              <div
                className="p-7 flex flex-col gap-4"
                style={{ border: '1px solid var(--color-outline)' }}
              >
                <CheckCircle size={20} style={{ color: '#8B6508' }} />
                <h3 style={{ fontFamily: 'var(--font-syne)', fontSize: '1rem', fontWeight: '700', textTransform: 'uppercase', color: 'var(--color-on-surface)' }}>
                  {adv.title}
                </h3>
                <p style={{ fontFamily: 'var(--font-jost)', fontSize: '0.875rem', lineHeight: '1.7', color: 'var(--color-on-surface-variant)' }}>
                  {adv.desc}
                </p>
              </div>
            </RevealOnScroll>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section
        className="py-20 text-center"
        style={{ backgroundColor: 'var(--color-brand-navy)', paddingLeft: 'clamp(1rem, 4vw, 4rem)', paddingRight: 'clamp(1rem, 4vw, 4rem)' }}
      >
        <RevealOnScroll>
          <h2
            style={{
              fontFamily: 'var(--font-syne)',
              fontSize: 'clamp(1.5rem, 4vw, 2.5rem)',
              fontWeight: '700',
              textTransform: 'uppercase',
              color: 'var(--color-brand-offwhite)',
              marginBottom: '2rem',
            }}
          >
            READY TO START YOUR {sector.toUpperCase()} PROJECT?
          </h2>
          <div className="flex flex-wrap gap-4 justify-center">
            <Link href="/quote" className="btn-primary">GET A QUOTE →</Link>
            <Link
              href={`https://wa.me/${SITE.whatsappNumber}`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-8 py-4 label-caps"
              style={{ backgroundColor: '#25D366', color: 'white' }}
            >
              CHAT ON WHATSAPP
            </Link>
          </div>
        </RevealOnScroll>
      </section>
    </>
  )
}
