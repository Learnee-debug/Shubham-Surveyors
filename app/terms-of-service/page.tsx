import type { Metadata } from 'next'
import Breadcrumb from '@/components/ui/Breadcrumb'
import RevealOnScroll from '@/components/ui/RevealOnScroll'
import { SITE } from '@/lib/constants'

export const metadata: Metadata = {
  title: 'Terms of Service',
  description: 'Terms governing the use of Shubham Surveyors’ website and survey services.',
  alternates: { canonical: `${SITE.url}/terms-of-service` },
}

const sections = [
  {
    heading: 'Services',
    body: 'Shubham Surveyors provides land surveying services including boundary surveys, topographic surveys, RTK DGPS surveys, RERA-compliant layout surveys, and regulatory consultancy (Mojani/TILR) across India. Quotes provided through our website are estimates and final pricing is confirmed after site assessment.',
  },
  {
    heading: 'Survey Reports & Deliverables',
    body: 'Survey reports, drawings, and certifications are prepared based on field measurements and available land records at the time of survey. Clients are responsible for providing accurate ownership documents and access to the survey site.',
  },
  {
    heading: 'Payment Terms',
    body: 'Payment terms are agreed upon at the time of project confirmation. Cost estimates shown on our website are indicative and may vary based on site conditions, area, and survey complexity.',
  },
  {
    heading: 'Limitation of Liability',
    body: 'While we apply industry-standard precision and government-recognized survey methods, Shubham Surveyors is not liable for pre-existing discrepancies in government land records, third-party encroachments, or legal disputes arising independently of our survey work.',
  },
  {
    heading: 'Client Portal Use',
    body: 'Access to the client portal is provided solely to clients with active or completed projects. Credentials must not be shared, and any unauthorized use should be reported immediately.',
  },
  {
    heading: 'Governing Law',
    body: 'These terms are governed by the laws of India, with disputes subject to the jurisdiction of courts in Pune, Maharashtra.',
  },
  {
    heading: 'Contact Us',
    body: `For questions about these terms, contact us at ${SITE.email} or ${SITE.phone}.`,
  },
]

export default function TermsOfServicePage() {
  return (
    <>
      <Breadcrumb items={[{ name: 'Terms of Service', href: '/terms-of-service' }]} />
      <section
        className="pt-40 pb-24"
        style={{ backgroundColor: 'var(--color-surface)', paddingLeft: 'clamp(1rem, 4vw, 4rem)', paddingRight: 'clamp(1rem, 4vw, 4rem)' }}
      >
        <RevealOnScroll className="max-w-2xl">
          <h1
            style={{
              fontFamily: 'var(--font-syne)',
              fontSize: 'clamp(1.75rem, 5vw, 3rem)',
              fontWeight: '800',
              textTransform: 'uppercase',
              color: 'var(--color-on-surface)',
              marginBottom: '1rem',
            }}
          >
            Terms of Service
          </h1>
          <p style={{ fontFamily: 'var(--font-jost)', fontSize: '0.9rem', color: 'var(--color-on-surface-variant)', marginBottom: '3rem' }}>
            Last updated: June 2026
          </p>

          {sections.map((section) => (
            <div key={section.heading} className="mb-10">
              <h2
                style={{
                  fontFamily: 'var(--font-syne)',
                  fontSize: '1.1rem',
                  fontWeight: '700',
                  textTransform: 'uppercase',
                  color: 'var(--color-on-surface)',
                  marginBottom: '0.75rem',
                  borderBottom: '1px solid var(--color-outline-variant)',
                  paddingBottom: '0.5rem',
                }}
              >
                {section.heading}
              </h2>
              <p style={{ fontFamily: 'var(--font-jost)', fontSize: '1rem', lineHeight: '1.8', color: 'var(--color-on-surface-variant)' }}>
                {section.body}
              </p>
            </div>
          ))}
        </RevealOnScroll>
      </section>
    </>
  )
}
