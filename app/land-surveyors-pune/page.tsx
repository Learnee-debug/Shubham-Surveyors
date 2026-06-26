import type { Metadata } from 'next'
import Link from 'next/link'
import SectionLabel from '@/components/ui/SectionLabel'
import RevealOnScroll from '@/components/ui/RevealOnScroll'
import Breadcrumb from '@/components/ui/Breadcrumb'
import { CheckCircle, MapPin, Clock, ShieldCheck } from 'lucide-react'
import { SITE, PRICING } from '@/lib/constants'

export const metadata: Metadata = {
  title: 'Land Surveyors in Pune',
  description:
    'Pune-based land surveyors since 1994. RTK DGPS, boundary, topographic, and RERA-compliant surveys for PMC, PCMC, and NHAI NH-48 corridor projects.',
  alternates: { canonical: `${SITE.url}/land-surveyors-pune` },
}

const services = [
  { title: 'Boundary & Land Survey', desc: 'Court-admissible boundary demarcation across Pune, RERA compliant and accepted by Pune Revenue Office.' },
  { title: 'RTK DGPS Survey', desc: 'Sub-centimeter accuracy differential GPS surveys for PMC, PCMC, and government infrastructure projects.' },
  { title: 'Topographic Survey', desc: 'High-density contour and elevation mapping for construction and planning projects across Pune and PCMC limits.' },
  { title: 'Highway & Infrastructure Survey', desc: 'NHAI and PWD standard corridor surveys, including work along the NH-48 corridor through Pune.' },
  { title: 'RERA Layout Survey', desc: 'RERA-compliant boundary and layout plans for real estate developers and townships across Pune.' },
  { title: 'GIS & Digital Mapping', desc: 'GIS data capture and digital terrain models for municipal and private clients in Pune.' },
]

const process = [
  { num: '01', title: 'Site Assessment', desc: 'Initial consultation and document review (7/12 extract, property card, layout plan) within 48 hours.' },
  { num: '02', title: 'Field Survey', desc: 'RTK DGPS or Total Station field measurement, with control points tied to PMC/PCMC survey benchmarks.' },
  { num: '03', title: 'Data Processing', desc: 'CAD drafting, area calculation, and boundary plan preparation to RERA/revenue office format.' },
  { num: '04', title: 'Report Delivery', desc: 'Signed survey report and drawings delivered in .DWG, .DXF, and PDF — accepted by Pune authorities.' },
]

const faqs = [
  { question: 'How much does a land survey cost in Pune?', answer: `Costs depend on survey type and area. Boundary surveys typically run ₹${PRICING.boundary.min.toLocaleString('en-IN')}–₹${PRICING.boundary.max.toLocaleString('en-IN')} per acre, RTK DGPS surveys ₹${PRICING.rtk_dgps.min.toLocaleString('en-IN')}–₹${PRICING.rtk_dgps.max.toLocaleString('en-IN')} per acre, and RERA layout surveys ₹${PRICING.layout_rera.min.toLocaleString('en-IN')}–₹${PRICING.layout_rera.max.toLocaleString('en-IN')} per acre. Final pricing depends on site terrain and access.` },
  { question: 'How long does a boundary survey take in Pune?', answer: 'Most boundary surveys in Pune are completed within 3-7 days of the field visit, depending on plot size and document availability. Site visits are typically arranged within 48 hours of inquiry.' },
  { question: 'Do I need a RERA survey for my Pune property project?', answer: 'Yes — RERA registration in Maharashtra requires a boundary and layout survey confirming the project area, carpet area calculations, and plot boundaries match the registered plans before the authority will approve the project.' },
  { question: 'Is your survey report accepted by PMC and PCMC?', answer: 'Yes. Our survey reports and boundary plans are prepared to the format required by the Pune Municipal Corporation (PMC), Pimpri-Chinchwad Municipal Corporation (PCMC), and the Taluka Revenue Office.' },
]

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: faqs.map((faq) => ({
    '@type': 'Question',
    name: faq.question,
    acceptedAnswer: { '@type': 'Answer', text: faq.answer },
  })),
}

const serviceJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'ProfessionalService',
  name: 'Shubham Surveyors — Pune',
  description: 'Land surveyors headquartered in Pune, Maharashtra, serving PMC, PCMC, and the NHAI NH-48 corridor since 1994.',
  parentOrganization: { '@id': `${SITE.url}/#organization` },
  url: `${SITE.url}/land-surveyors-pune`,
  telephone: SITE.phone,
  address: {
    '@type': 'PostalAddress',
    streetAddress: 'Forest Castle, Ambegaon Budruk',
    addressLocality: 'Pune',
    addressRegion: 'Maharashtra',
    addressCountry: 'IN',
  },
  areaServed: { '@type': 'City', name: 'Pune' },
}

export default function LandSurveyorsPunePage() {
  const whatsappMessage = encodeURIComponent('Hi, I need a land survey in Pune')

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <Breadcrumb items={[{ name: 'Land Surveyors in Pune', href: '/land-surveyors-pune' }]} />

      {/* Hero */}
      <section
        className="pt-24 pb-20 relative overflow-hidden"
        style={{ backgroundColor: 'var(--color-brand-navy)', paddingLeft: 'clamp(1rem, 4vw, 4rem)', paddingRight: 'clamp(1rem, 4vw, 4rem)' }}
      >
        <div className="bg-blueprint-dark absolute inset-0 opacity-40 pointer-events-none" />
        <RevealOnScroll className="relative z-10">
          <SectionLabel index="§ HQ" label="Headquartered in Pune" dark />
          <h1
            style={{
              fontFamily: 'var(--font-syne)',
              fontSize: 'clamp(1.75rem, 5.5vw, 3.5rem)',
              fontWeight: '800',
              textTransform: 'uppercase',
              letterSpacing: '-0.02em',
              color: 'var(--color-brand-offwhite)',
              maxWidth: '900px',
              marginBottom: '1.5rem',
            }}
          >
            Land Surveyors in Pune
          </h1>
          <p
            style={{
              fontFamily: 'var(--font-jost)',
              fontSize: '1.1rem',
              lineHeight: '1.7',
              color: 'var(--color-inverse-primary)',
              maxWidth: '600px',
              borderLeft: '2px solid var(--color-brand-gold)',
              paddingLeft: '1.5rem',
              marginBottom: '2rem',
            }}
          >
            Based at Forest Castle, Ambegaon Budruk — serving PMC, PCMC, and the NHAI NH-48
            corridor since 1994. RTK DGPS, boundary, and RERA-compliant surveys with site
            visits arranged within 48 hours anywhere in Pune.
          </p>
          <div className="flex flex-wrap gap-4">
            <Link href="/quote" className="btn-primary">GET A QUOTE →</Link>
            <Link
              href={`https://wa.me/${SITE.whatsappNumber}?text=${whatsappMessage}`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-8 py-4 label-caps"
              style={{ backgroundColor: '#25D366', color: 'var(--color-brand-navy)' }}
            >
              <CheckCircle size={16} />
              CHAT ON WHATSAPP
            </Link>
          </div>
        </RevealOnScroll>
      </section>

      {/* Local presence */}
      <section
        className="py-20"
        style={{ backgroundColor: 'var(--color-surface)', paddingLeft: 'clamp(1rem, 4vw, 4rem)', paddingRight: 'clamp(1rem, 4vw, 4rem)' }}
      >
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {[
            { icon: <MapPin size={20} />, title: 'Forest Castle, Ambegaon Budruk', desc: 'Our office and field team are based in Pune — not a remote contractor.' },
            { icon: <Clock size={20} />, title: '48-Hour Site Visits', desc: 'Site visits anywhere in Pune, PCMC, or surrounding talukas within 48 hours.' },
            { icon: <ShieldCheck size={20} />, title: 'PMC & PCMC Accepted', desc: 'Reports formatted to Pune Municipal Corporation and PCMC requirements.' },
          ].map((item) => (
            <div key={item.title} className="p-7" style={{ border: '1px solid var(--color-outline)' }}>
              <div style={{ color: '#8B6508', marginBottom: '1rem' }}>{item.icon}</div>
              <h3 style={{ fontFamily: 'var(--font-syne)', fontSize: '1rem', fontWeight: '700', textTransform: 'uppercase', color: 'var(--color-on-surface)', marginBottom: '0.5rem' }}>
                {item.title}
              </h3>
              <p style={{ fontFamily: 'var(--font-jost)', fontSize: '0.875rem', lineHeight: '1.7', color: 'var(--color-on-surface-variant)' }}>
                {item.desc}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Services */}
      <section
        className="py-24"
        style={{ backgroundColor: 'var(--color-brand-offwhite)', paddingLeft: 'clamp(1rem, 4vw, 4rem)', paddingRight: 'clamp(1rem, 4vw, 4rem)' }}
      >
        <RevealOnScroll>
          <SectionLabel index="§ 02 / SERVICES" label="What We Offer" />
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
            Survey Services in Pune
          </h2>
        </RevealOnScroll>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, i) => (
            <RevealOnScroll key={service.title} delay={i * 0.06}>
              <div className="p-7" style={{ border: '1px solid var(--color-outline)', backgroundColor: 'var(--color-surface)' }}>
                <h3 style={{ fontFamily: 'var(--font-syne)', fontSize: '1.05rem', fontWeight: '700', textTransform: 'uppercase', color: 'var(--color-on-surface)', marginBottom: '0.75rem' }}>
                  {service.title}
                </h3>
                <p style={{ fontFamily: 'var(--font-jost)', fontSize: '0.9rem', lineHeight: '1.7', color: 'var(--color-on-surface-variant)' }}>
                  {service.desc}
                </p>
              </div>
            </RevealOnScroll>
          ))}
        </div>
      </section>

      {/* Process */}
      <section
        className="py-24"
        style={{ backgroundColor: 'var(--color-surface)', paddingLeft: 'clamp(1rem, 4vw, 4rem)', paddingRight: 'clamp(1rem, 4vw, 4rem)' }}
      >
        <RevealOnScroll>
          <SectionLabel index="§ 03 / PROCESS" label="How We Work" />
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
            Our Pune Survey Process
          </h2>
        </RevealOnScroll>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          {process.map((step, i) => (
            <RevealOnScroll key={step.num} delay={i * 0.07}>
              <div className="p-6 flex flex-col gap-3" style={{ border: '1px solid var(--color-outline)', backgroundColor: 'var(--color-brand-offwhite)' }}>
                <div style={{ color: '#8B6508', fontSize: '1.5rem', fontFamily: 'var(--font-syne)', fontWeight: '800' }}>
                  {step.num}
                </div>
                <h3 style={{ fontFamily: 'var(--font-syne)', fontSize: '0.9rem', fontWeight: '700', textTransform: 'uppercase', color: 'var(--color-on-surface)' }}>
                  {step.title}
                </h3>
                <p style={{ fontFamily: 'var(--font-jost)', fontSize: '0.8rem', lineHeight: '1.6', color: 'var(--color-on-surface-variant)' }}>
                  {step.desc}
                </p>
              </div>
            </RevealOnScroll>
          ))}
        </div>
      </section>

      {/* FAQ */}
      <section
        className="py-24"
        style={{ backgroundColor: 'var(--color-brand-navy)', paddingLeft: 'clamp(1rem, 4vw, 4rem)', paddingRight: 'clamp(1rem, 4vw, 4rem)' }}
      >
        <RevealOnScroll>
          <SectionLabel index="§ 04 / FAQ" label="Common Questions" dark />
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
            Land Survey FAQs — Pune
          </h2>
        </RevealOnScroll>
        <div className="flex flex-col gap-6 max-w-3xl">
          {faqs.map((faq) => (
            <div key={faq.question} style={{ borderBottom: '1px solid var(--color-brand-slate)', paddingBottom: '1.5rem' }}>
              <h3 style={{ fontFamily: 'var(--font-syne)', fontSize: '1rem', fontWeight: '700', color: 'var(--color-brand-offwhite)', marginBottom: '0.5rem' }}>
                {faq.question}
              </h3>
              <p style={{ fontFamily: 'var(--font-jost)', fontSize: '0.9rem', lineHeight: '1.7', color: 'var(--color-inverse-primary)' }}>
                {faq.answer}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section
        className="py-20 text-center"
        style={{ backgroundColor: 'var(--color-surface)', borderTop: '1px solid var(--color-outline)', paddingLeft: 'clamp(1rem, 4vw, 4rem)', paddingRight: 'clamp(1rem, 4vw, 4rem)' }}
      >
        <RevealOnScroll>
          <h2
            style={{
              fontFamily: 'var(--font-syne)',
              fontSize: 'clamp(1.5rem, 4vw, 2.5rem)',
              fontWeight: '700',
              textTransform: 'uppercase',
              color: 'var(--color-on-surface)',
              marginBottom: '1.5rem',
            }}
          >
            Start Your Pune Survey Project
          </h2>
          <p style={{ fontFamily: 'var(--font-jost)', fontSize: '1rem', lineHeight: '1.7', color: 'var(--color-on-surface-variant)', maxWidth: '560px', margin: '0 auto 2rem' }}>
            Contact us for a free consultation. Site visits arranged within 48 hours anywhere in Pune.
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
