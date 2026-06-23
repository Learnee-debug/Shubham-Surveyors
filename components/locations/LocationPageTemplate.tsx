import Link from 'next/link'
import SectionLabel from '@/components/ui/SectionLabel'
import RevealOnScroll from '@/components/ui/RevealOnScroll'
import Breadcrumb from '@/components/ui/Breadcrumb'
import { CheckCircle } from 'lucide-react'
import { SITE } from '@/lib/constants'
import type { Location } from '@/lib/locations'

interface LocationPageTemplateProps {
  location: Location
  index: string
}

export default function LocationPageTemplate({ location, index }: LocationPageTemplateProps) {
  const { name, cities, landmark } = location

  const services = [
    { title: 'Boundary & Land Survey', desc: `Court-admissible boundary demarcation across ${name}, RERA compliant and accepted by local revenue authorities.` },
    { title: 'RTK DGPS Survey', desc: `Sub-centimeter accuracy differential GPS surveys for government and infrastructure projects across ${name}.` },
    { title: 'Topographic Survey', desc: `High-density contour and elevation mapping for construction and planning projects in ${name}.` },
    { title: 'Highway & Infrastructure Survey', desc: `NHAI and PWD standard corridor surveys, including work aligned with ${landmark}.` },
    { title: 'RERA Layout Survey', desc: `RERA-compliant boundary and layout plans for real estate developers operating in ${name}.` },
    { title: 'GIS & Digital Mapping', desc: `GIS data capture and digital terrain models for municipal and private clients across ${name}.` },
  ]

  const whatsappMessage = encodeURIComponent(`Hi, I need a land survey in ${name}`)

  return (
    <>
      <Breadcrumb items={[{ name: 'Locations', href: '/locations' }, { name, href: `/locations/${location.state}` }]} />

      {/* Hero */}
      <section
        className="pt-24 pb-20 relative overflow-hidden"
        style={{ backgroundColor: 'var(--color-brand-navy)', paddingLeft: 'clamp(1rem, 4vw, 4rem)', paddingRight: 'clamp(1rem, 4vw, 4rem)' }}
      >
        <div className="bg-blueprint-dark absolute inset-0 opacity-40 pointer-events-none" />
        <RevealOnScroll className="relative z-10">
          <SectionLabel index={index} label={`Land Surveyors — ${name}`} dark />
          <h1
            style={{
              fontFamily: 'var(--font-syne)',
              fontSize: 'clamp(1.6rem, 5.5vw, 3.5rem)',
              fontWeight: '800',
              textTransform: 'uppercase',
              letterSpacing: '-0.02em',
              color: 'var(--color-brand-offwhite)',
              maxWidth: '950px',
              overflowWrap: 'break-word',
              marginBottom: '1.5rem',
            }}
          >
            Land Surveyor in {name}
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
            Professional DGPS, Total Station, and boundary surveys across {name} — serving{' '}
            {cities.slice(0, 3).join(', ')} and surrounding districts. 30+ years of
            government-certified precision.
          </p>
        </RevealOnScroll>
      </section>

      {/* Cities grid */}
      <section
        className="py-24 relative"
        style={{ backgroundColor: 'var(--color-surface)', paddingLeft: 'clamp(1rem, 4vw, 4rem)', paddingRight: 'clamp(1rem, 4vw, 4rem)' }}
      >
        <div className="absolute inset-0 bg-blueprint-light opacity-40 pointer-events-none" />
        <RevealOnScroll>
          <SectionLabel index="§ 02 / COVERAGE" label="Cities We Serve" />
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
            Survey Coverage in {name}
          </h2>
        </RevealOnScroll>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {cities.map((city, i) => (
            <RevealOnScroll key={city} delay={i * 0.05}>
              <div className="p-6" style={{ border: '1px solid var(--color-outline)' }}>
                <div className="label-caps mb-2" style={{ color: 'var(--color-on-surface-variant)' }}>
                  SURVEY SERVICES
                </div>
                <div style={{ fontFamily: 'var(--font-syne)', fontSize: '1.1rem', fontWeight: '700', textTransform: 'uppercase', color: 'var(--color-on-surface)' }}>
                  {city}
                </div>
              </div>
            </RevealOnScroll>
          ))}
        </div>
      </section>

      {/* Services in this state */}
      <section
        className="py-24"
        style={{ backgroundColor: 'var(--color-brand-offwhite)', paddingLeft: 'clamp(1rem, 4vw, 4rem)', paddingRight: 'clamp(1rem, 4vw, 4rem)' }}
      >
        <RevealOnScroll>
          <SectionLabel index="§ 03 / SERVICES" label="What We Offer" />
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
            Survey Services in {name}
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

      {/* Why choose us */}
      <section
        className="py-24"
        style={{ backgroundColor: 'var(--color-brand-navy)', paddingLeft: 'clamp(1rem, 4vw, 4rem)', paddingRight: 'clamp(1rem, 4vw, 4rem)' }}
      >
        <RevealOnScroll>
          <SectionLabel index="§ 04 / WHY CHOOSE US" label="Our Advantage" dark />
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
            Why Clients in {name} Choose Us
          </h2>
        </RevealOnScroll>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {[
            { stat: '30+', label: 'Years Experience', desc: 'Serving clients across India since 1994.' },
            { stat: '<1cm', label: 'Accuracy', desc: 'Sub-centimeter precision on every survey.' },
            { stat: '100%', label: 'Govt. Accepted', desc: 'Deliverables accepted by courts and regulatory bodies.' },
          ].map((item) => (
            <div key={item.stat} className="p-8" style={{ border: '1px solid var(--color-brand-slate)' }}>
              <div style={{ fontFamily: 'var(--font-syne)', fontSize: 'clamp(2rem, 5vw, 3rem)', fontWeight: '800', color: 'var(--color-brand-gold)', lineHeight: '1' }}>
                {item.stat}
              </div>
              <div className="label-caps" style={{ color: 'var(--color-brand-offwhite)', marginTop: '0.5rem', marginBottom: '0.75rem' }}>
                {item.label}
              </div>
              <div style={{ fontFamily: 'var(--font-jost)', fontSize: '0.9rem', lineHeight: '1.7', color: 'var(--color-inverse-primary)' }}>
                {item.desc}
              </div>
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
            Start Your {name} Survey Project
          </h2>
          <p style={{ fontFamily: 'var(--font-jost)', fontSize: '1rem', lineHeight: '1.7', color: 'var(--color-on-surface-variant)', maxWidth: '560px', margin: '0 auto 2rem' }}>
            Contact us for a free consultation. Site visits arranged within 48 hours anywhere in {name}.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Link href="/quote" className="btn-primary">GET A QUOTE →</Link>
            <Link
              href={`https://wa.me/${SITE.whatsappNumber}?text=${whatsappMessage}`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-8 py-4 label-caps"
              style={{ backgroundColor: '#25D366', color: 'white' }}
            >
              <CheckCircle size={16} />
              CHAT ON WHATSAPP
            </Link>
          </div>
        </RevealOnScroll>
      </section>
    </>
  )
}
