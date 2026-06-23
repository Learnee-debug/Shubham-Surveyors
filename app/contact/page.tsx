import type { Metadata } from 'next'
import ContactSection from '@/components/sections/ContactSection'
import SectionLabel from '@/components/ui/SectionLabel'
import RevealOnScroll from '@/components/ui/RevealOnScroll'

export const metadata: Metadata = {
  title: 'Contact Us',
  description:
    'Contact Shubham Surveyors for precision land surveys. Offices in Pune, Maharashtra. All-India coverage. Response within 4 hours.',
  alternates: { canonical: 'https://shubhamsurveyors.com/contact' },
}

export default function ContactPage() {
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
        <div className="bg-blueprint-dark absolute inset-0 opacity-40 pointer-events-none" />
        <RevealOnScroll>
          <SectionLabel index="§ CNT" label="Contact" dark />
          <h1
            style={{
              fontFamily: 'var(--font-syne)',
              fontSize: 'clamp(2rem, 6vw, 4rem)',
              fontWeight: '800',
              textTransform: 'uppercase',
              color: 'var(--color-brand-offwhite)',
              maxWidth: '600px',
              marginBottom: '1rem',
            }}
          >
            GET IN TOUCH WITH OUR TEAM
          </h1>
          <p style={{ fontFamily: 'var(--font-jost)', fontSize: '1.1rem', color: 'var(--color-inverse-primary)' }}>
            Response within 4 business hours. All-India coverage.
          </p>
        </RevealOnScroll>
      </section>
      <ContactSection />
    </>
  )
}
