import RevealOnScroll from '@/components/ui/RevealOnScroll'
import SectionLabel from '@/components/ui/SectionLabel'
import { CheckCircle, XCircle } from 'lucide-react'

const accuracyData = [
  { method: 'RTK DGPS', accuracy: '±0.5–2cm', accepted: 'All Indian Courts, RERA, NHAI, PWD', ok: true },
  { method: 'Total Station', accuracy: '±1–3mm', accepted: 'All Indian Courts, RERA, Revenue', ok: true },
  { method: 'Drone / UAV', accuracy: '±5–15cm', accepted: 'Visual reference only — not court admissible', ok: false },
]

export default function GroundTruth() {
  return (
    <section
      className="relative"
      style={{ backgroundColor: 'var(--color-brand-navy)', borderTop: '1px solid var(--color-brand-slate)', borderBottom: '1px solid var(--color-brand-slate)' }}
    >
      <div
        className="absolute right-0 bottom-0 pointer-events-none"
        style={{
          width: '33%',
          height: '100%',
          backgroundImage: 'radial-gradient(circle, rgba(184,134,11,0.08) 1px, transparent 1px)',
          backgroundSize: '20px 20px',
        }}
      />

      <div
        className="relative py-24 md:py-32 grid grid-cols-12 gap-6"
        style={{ paddingLeft: 'clamp(1rem, 4vw, 4rem)', paddingRight: 'clamp(1rem, 4vw, 4rem)' }}
      >
        {/* Left label */}
        <RevealOnScroll className="col-span-12 md:col-span-3">
          <SectionLabel index="§ 02" label="Ground Truth" dark />
          <h3
            style={{
              fontFamily: 'var(--font-syne)',
              fontSize: '1.5rem',
              fontWeight: '700',
              textTransform: 'uppercase',
              letterSpacing: '0.02em',
              color: 'var(--color-brand-offwhite)',
            }}
          >
            THE PRECISION STANDARD
          </h3>
        </RevealOnScroll>

        {/* Right content */}
        <div
          className="col-span-12 md:col-span-9 md:border-l"
          style={{ borderColor: 'var(--color-brand-slate)', paddingLeft: 'clamp(0rem, 4vw, 4rem)' }}
        >
          <RevealOnScroll delay={0.1}>
            <h2
              style={{
                fontFamily: 'var(--font-syne)',
                fontSize: 'clamp(1.75rem, 4vw, 3rem)',
                fontWeight: '700',
                textTransform: 'uppercase',
                color: 'var(--color-brand-gold)',
                marginBottom: '2rem',
              }}
            >
              WHY NO DRONES?
            </h2>
          </RevealOnScroll>

          <RevealOnScroll delay={0.2}>
            <blockquote
              style={{
                borderLeft: '2px solid var(--color-brand-gold)',
                paddingLeft: '1.5rem',
                fontFamily: 'var(--font-cormorant)',
                fontSize: '1.25rem',
                lineHeight: '1.6',
                fontStyle: 'italic',
                color: 'var(--color-inverse-primary)',
              }}
            >
              <p style={{ marginBottom: '1rem' }}>&ldquo;We deliberately choose ground-based precision.</p>
              <p style={{ marginBottom: '1rem' }}>
                Drone surveys achieve ±5–15cm accuracy — insufficient for RERA compliance,
                government revenue records, and court proceedings.
              </p>
              <p style={{ marginBottom: '1rem' }}>
                Our RTK DGPS and Total Station surveys deliver sub-centimeter accuracy that
                is legally accepted by every regulatory body in India.
              </p>
              <p>This is not a limitation. It is our quality standard.&rdquo;</p>
            </blockquote>
          </RevealOnScroll>

          <RevealOnScroll delay={0.25}>
            <p
              className="label-caps mt-8"
              style={{ color: '#9BA3B8' }}
            >
              — Shubham Surveyors · Quality Position
            </p>
          </RevealOnScroll>

          {/* Accuracy table */}
          <RevealOnScroll delay={0.3}>
            <div className="mt-12 overflow-x-auto">
              <table className="w-full" style={{ borderCollapse: 'collapse' }}>
                <thead>
                  <tr
                    style={{
                      backgroundColor: 'var(--color-brand-nearblack)',
                      border: '1px solid var(--color-brand-slate)',
                    }}
                  >
                    {['METHOD', 'ACCURACY', 'ACCEPTED BY'].map((h) => (
                      <th
                        key={h}
                        className="label-caps px-5 py-3 text-left"
                        style={{ color: 'var(--color-brand-gold)', borderRight: '1px solid var(--color-brand-slate)' }}
                      >
                        {h}
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {accuracyData.map((row, i) => (
                    <tr
                      key={row.method}
                      style={{
                        backgroundColor: i % 2 === 0 ? 'var(--color-brand-navy)' : 'var(--color-primary-container)',
                        border: '1px solid var(--color-brand-slate)',
                      }}
                    >
                      <td
                        className="px-5 py-4 label-caps"
                        style={{ color: 'var(--color-brand-offwhite)', borderRight: '1px solid var(--color-brand-slate)' }}
                      >
                        {row.method}
                      </td>
                      <td
                        className="px-5 py-4"
                        style={{
                          fontFamily: 'var(--font-syne)',
                          fontSize: '1rem',
                          fontWeight: '700',
                          color: row.ok ? 'var(--color-brand-gold)' : 'var(--color-on-surface-variant)',
                          borderRight: '1px solid var(--color-brand-slate)',
                        }}
                      >
                        {row.accuracy}
                      </td>
                      <td className="px-5 py-4 flex items-start gap-3">
                        {row.ok ? (
                          <CheckCircle size={16} style={{ color: '#4ade80', flexShrink: 0, marginTop: '2px' }} />
                        ) : (
                          <XCircle size={16} style={{ color: '#f87171', flexShrink: 0, marginTop: '2px' }} />
                        )}
                        <span
                          style={{
                            fontFamily: 'var(--font-jost)',
                            fontSize: '0.8rem',
                            lineHeight: '1.5',
                            color: row.ok ? 'var(--color-inverse-primary)' : 'var(--color-on-surface-variant)',
                          }}
                        >
                          {row.accepted}
                        </span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </RevealOnScroll>

          {/* Accuracy badge */}
          <RevealOnScroll delay={0.4}>
            <div className="mt-12 flex flex-col md:flex-row md:items-center gap-6">
              <span
                style={{
                  fontFamily: 'var(--font-syne)',
                  fontSize: 'clamp(2.5rem, 5vw, 4rem)',
                  fontWeight: '800',
                  color: 'var(--color-brand-gold)',
                  lineHeight: '1',
                }}
              >
                &lt;0.5cm
              </span>
              <p style={{ fontFamily: 'var(--font-jost)', fontSize: '1rem', lineHeight: '1.7', color: 'var(--color-inverse-primary)', maxWidth: '480px' }}>
                Sub-centimeter precision — the standard required by every government body,
                court, and regulatory authority in India.
              </p>
            </div>
          </RevealOnScroll>
        </div>
      </div>
    </section>
  )
}
