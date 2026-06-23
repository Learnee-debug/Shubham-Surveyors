import type { Metadata } from 'next'
import CostEstimator from '@/components/sections/CostEstimator'
import SectionLabel from '@/components/ui/SectionLabel'
import RevealOnScroll from '@/components/ui/RevealOnScroll'

export const metadata: Metadata = {
  title: 'Get a Quote',
  description:
    'Instant survey cost estimate for land boundary, topographic, RTK DGPS, highway corridor, and GIS surveys across India.',
  alternates: { canonical: 'https://shubhamsurveyors.com/quote' },
}

export default function QuotePage() {
  return (
    <>
      <section
        className="pt-40 pb-16"
        style={{
          backgroundColor: 'var(--color-brand-navy)',
          paddingLeft: 'clamp(1rem, 4vw, 4rem)',
          paddingRight: 'clamp(1rem, 4vw, 4rem)',
        }}
      >
        <RevealOnScroll>
          <SectionLabel index="§ QOT" label="Get a Quote" dark />
          <h1
            style={{
              fontFamily: 'var(--font-syne)',
              fontSize: 'clamp(2rem, 6vw, 4rem)',
              fontWeight: '800',
              textTransform: 'uppercase',
              color: 'var(--color-brand-offwhite)',
              maxWidth: '640px',
              marginBottom: '1rem',
            }}
          >
            KNOW YOUR SURVEY COST INSTANTLY
          </h1>
          <p style={{ fontFamily: 'var(--font-jost)', fontSize: '1.1rem', color: 'var(--color-inverse-primary)' }}>
            India&apos;s first transparent surveying price calculator.
          </p>
        </RevealOnScroll>
      </section>
      <CostEstimator />
    </>
  )
}
