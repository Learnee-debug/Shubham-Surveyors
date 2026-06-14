'use client'

import { motion } from 'framer-motion'

const items = [
  'RTK DGPS SURVEYS', 'TOTAL STATION', 'RERA COMPLIANT', 'GOVERNMENT CERTIFIED',
  'AUTOCAD DELIVERABLES', 'HIGHWAY SURVEYS', 'BOUNDARY DEMARCATION', 'TILR',
  'MOJANI', '7/12', 'ALL INDIA COVERAGE', '30 YEARS TRUSTED',
  'SUB-CENTIMETER ACCURACY', 'COURT ADMISSIBLE', 'NHAI', 'PWD',
]

const doubled = [...items, ...items]

export default function MarqueeStrip() {
  return (
    <div
      className="overflow-hidden py-4"
      style={{
        backgroundColor: 'var(--color-brand-nearblack)',
        borderTop: '1px solid var(--color-brand-slate)',
        borderBottom: '1px solid var(--color-brand-slate)',
      }}
    >
      <motion.div
        className="flex whitespace-nowrap"
        animate={{ x: ['0%', '-50%'] }}
        transition={{ duration: 40, ease: 'linear', repeat: Infinity }}
      >
        {doubled.map((text, i) => (
          <span
            key={i}
            className="inline-flex items-center mx-6"
            style={{ gap: '1.5rem' }}
          >
            <span className="label-caps" style={{ color: 'var(--color-brand-slate)', letterSpacing: '0.15em' }}>
              {text}
            </span>
            <span className="label-caps" style={{ color: 'var(--color-brand-gold)' }}>•</span>
          </span>
        ))}
      </motion.div>
    </div>
  )
}
