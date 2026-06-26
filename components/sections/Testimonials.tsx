import RevealOnScroll from '@/components/ui/RevealOnScroll'
import SectionLabel from '@/components/ui/SectionLabel'
import { TESTIMONIALS } from '@/lib/constants'

export default function Testimonials() {
  return (
    <section style={{ backgroundColor: 'var(--color-brand-offwhite)' }}>
      <div
        className="py-24 md:py-32"
        style={{ paddingLeft: 'clamp(1rem, 4vw, 4rem)', paddingRight: 'clamp(1rem, 4vw, 4rem)' }}
      >
        <RevealOnScroll>
          <SectionLabel index="§ 06" label="Client Testimonials" />
          <h2
            style={{
              fontFamily: 'var(--font-syne)',
              fontSize: 'clamp(1.75rem, 4vw, 3rem)',
              fontWeight: '700',
              textTransform: 'uppercase',
              color: 'var(--color-on-surface)',
              marginBottom: '4rem',
            }}
          >
            TRUSTED BY INDIA&apos;S BEST PROJECTS
          </h2>
        </RevealOnScroll>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {TESTIMONIALS.map((t, i) => (
            <RevealOnScroll key={t.name} delay={i * 0.1}>
              <div
                className="relative p-9"
                style={{ border: '1px solid var(--color-brand-slate)' }}
              >
                {/* Decorative quote mark */}
                <span
                  aria-hidden="true"
                  style={{
                    fontFamily: 'var(--font-cormorant)',
                    fontSize: '80px',
                    color: 'var(--color-brand-gold)',
                    opacity: 0.2,
                    position: 'absolute',
                    top: '1rem',
                    left: '1.5rem',
                    lineHeight: '1',
                    pointerEvents: 'none',
                    userSelect: 'none',
                  }}
                >
                  &ldquo;
                </span>

                {/* Stars */}
                <div className="label-caps mb-4" style={{ color: '#8B6508' }}>
                  ★★★★★
                </div>

                {/* Quote */}
                <blockquote
                  style={{
                    fontFamily: 'var(--font-cormorant)',
                    fontSize: '1.25rem',
                    lineHeight: '1.5',
                    fontStyle: 'italic',
                    color: 'var(--color-on-surface)',
                    marginBottom: '2rem',
                    position: 'relative',
                    zIndex: 1,
                  }}
                >
                  &ldquo;{t.quote}&rdquo;
                </blockquote>

                {/* Author */}
                <div className="flex items-center gap-4">
                  <div
                    className="flex items-center justify-center flex-shrink-0"
                    style={{ width: '44px', height: '44px', backgroundColor: 'var(--color-brand-navy)' }}
                  >
                    <span
                      style={{
                        fontFamily: 'var(--font-syne)',
                        fontSize: '0.875rem',
                        fontWeight: '700',
                        color: 'var(--color-brand-gold)',
                      }}
                    >
                      {t.initials}
                    </span>
                  </div>
                  <div>
                    <div style={{ fontFamily: 'var(--font-jost)', fontWeight: '600', fontSize: '0.875rem', color: 'var(--color-on-surface)' }}>
                      {t.name}
                    </div>
                    <div style={{ fontFamily: 'var(--font-jost)', fontSize: '0.75rem', color: 'var(--color-on-surface-variant)' }}>
                      {t.role}
                    </div>
                  </div>
                </div>
              </div>
            </RevealOnScroll>
          ))}
        </div>
      </div>
    </section>
  )
}
