import type { Metadata } from 'next'
import Breadcrumb from '@/components/ui/Breadcrumb'
import RevealOnScroll from '@/components/ui/RevealOnScroll'
import { SITE } from '@/lib/constants'

export const metadata: Metadata = {
  title: 'Privacy Policy',
  description: 'How Shubham Surveyors collects, uses, and protects information shared through our website and services.',
  alternates: { canonical: `${SITE.url}/privacy-policy` },
}

const sections = [
  {
    heading: 'Information We Collect',
    body: 'When you request a quote, contact us, or use our client portal, we collect information you provide directly — such as your name, phone number, email address, project location, and survey requirements. We do not collect sensitive personal information beyond what is necessary to deliver our services.',
  },
  {
    heading: 'How We Use Your Information',
    body: 'We use the information you provide to respond to quote requests, schedule site visits, prepare survey reports, and communicate project updates. We do not sell or rent your personal information to third parties.',
  },
  {
    heading: 'Data Security',
    body: 'Survey data, land records, and client documents are stored securely and access is restricted to personnel directly involved in your project. Our client portal uses authenticated access to protect project documents.',
  },
  {
    heading: 'Third-Party Services',
    body: 'Our website may use third-party analytics and communication tools (such as WhatsApp Business) to help us respond to inquiries efficiently. These services operate under their own privacy policies.',
  },
  {
    heading: 'Your Rights',
    body: 'You may request access to, correction of, or deletion of personal information we hold about you by contacting us directly using the details below.',
  },
  {
    heading: 'Contact Us',
    body: `For any privacy-related questions, reach us at ${SITE.email} or ${SITE.phone}.`,
  },
]

export default function PrivacyPolicyPage() {
  return (
    <>
      <Breadcrumb items={[{ name: 'Privacy Policy', href: '/privacy-policy' }]} />
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
            Privacy Policy
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
