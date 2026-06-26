'use client'

import { useEffect, useRef, useState } from 'react'
import { motion } from 'framer-motion'
import Link from 'next/link'
import AnimatedCounter from '@/components/ui/AnimatedCounter'

export default function Hero() {
  const heroRef = useRef<HTMLDivElement>(null)
  const [coords, setCoords] = useState({ x: '0000', y: '0000' })

  useEffect(() => {
    const hero = heroRef.current
    if (!hero) return
    const onMouseMove = (e: MouseEvent) => {
      const rect = hero.getBoundingClientRect()
      setCoords({
        x: String(Math.round(e.clientX - rect.left)).padStart(4, '0'),
        y: String(Math.round(e.clientY - rect.top)).padStart(4, '0'),
      })
    }
    hero.addEventListener('mousemove', onMouseMove)
    return () => hero.removeEventListener('mousemove', onMouseMove)
  }, [])

  const ease = [0.22, 1, 0.36, 1] as const

  const container = {
    hidden: { opacity: 0 },
    show: { opacity: 1, transition: { staggerChildren: 0.12, delayChildren: 0.1 } },
  }
  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.7, ease } },
  }

  return (
    <section
      ref={heroRef}
      className="relative min-h-screen overflow-hidden flex items-center"
      style={{ backgroundColor: 'var(--color-brand-navy)' }}
    >
      {/* Blueprint overlay */}
      <div className="absolute inset-0 bg-blueprint-dark pointer-events-none" style={{ opacity: 0.5 }} />

      {/* Dot pattern */}
      <div
        className="absolute bottom-0 right-0 pointer-events-none"
        style={{
          width: '40%',
          height: '60%',
          backgroundImage: 'radial-gradient(circle, rgba(184,134,11,0.12) 1px, transparent 1px)',
          backgroundSize: '20px 20px',
        }}
      />

      {/* Coordinates overlay */}
      <div
        aria-hidden="true"
        className="absolute bottom-8 right-8 label-caps hidden md:block"
        style={{ color: 'var(--color-brand-slate)', opacity: 0.6, lineHeight: '1.6' }}
      >
        ELEV: 218M<br />
        LAT/LONG: 28.6139° N, 77.2090° E
      </div>

      {/* Rotated coordinates */}
      <div
        aria-hidden="true"
        className="absolute right-10 top-1/3 label-caps hidden md:block"
        style={{
          color: 'var(--color-brand-slate)',
          opacity: 0.5,
          transform: 'rotate(90deg)',
          transformOrigin: 'right center',
          whiteSpace: 'nowrap',
        }}
      >
        N 18° 31&apos; 12&quot; | E 73° 51&apos; 27&quot;
      </div>

      {/* Main content */}
      <div
        className="relative z-10 w-full grid grid-cols-12 gap-6 pt-32 pb-24"
        style={{ paddingLeft: 'clamp(1rem, 4vw, 4rem)', paddingRight: 'clamp(1rem, 4vw, 4rem)' }}
      >
        {/* Left: headline */}
        <motion.div
          variants={container}
          initial="hidden"
          animate="show"
          className="col-span-12 md:col-span-8 flex flex-col gap-8"
        >
          {/* Eyebrow */}
          <motion.div variants={item} className="flex items-center gap-2">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="var(--color-brand-gold)">
              <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z" />
            </svg>
            <span className="label-caps" style={{ color: 'var(--color-brand-gold)' }}>
              PRECISION GEOSPATIAL ENGINEERING
            </span>
          </motion.div>

          {/* H1 */}
          <motion.h1
            variants={item}
            style={{
              fontFamily: 'var(--font-syne)',
              fontSize: 'clamp(2.25rem, 7vw, 4rem)',
              fontWeight: '800',
              lineHeight: '1.05',
              letterSpacing: '-0.02em',
              color: 'var(--color-brand-offwhite)',
              textTransform: 'uppercase',
            }}
          >
            INDIA&apos;S GROUND<br />
            TRUTH SINCE<br />
            1994.
          </motion.h1>

          {/* Subtext */}
          <motion.p
            variants={item}
            style={{
              fontFamily: 'var(--font-jost)',
              fontSize: '1.125rem',
              lineHeight: '1.6',
              color: 'var(--color-inverse-primary)',
              borderLeft: '2px solid var(--color-brand-gold)',
              paddingLeft: '1.5rem',
              maxWidth: '480px',
            }}
          >
            30 Years. Every State. Sub-Centimeter Precision.
          </motion.p>

          {/* CTAs */}
          <motion.div variants={item} className="flex flex-wrap gap-4">
            <Link href="/quote" className="btn-primary">
              GET A QUOTE →
            </Link>
            <Link href="/services" className="btn-secondary" style={{ color: 'var(--color-brand-offwhite)', borderColor: 'var(--color-brand-slate)' }}>
              OUR SERVICES
            </Link>
          </motion.div>
        </motion.div>

        {/* Right: stats */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.4, ease }}
          className="col-span-12 md:col-span-4 flex flex-col gap-0 md:border-l md:pl-8 pt-8 md:pt-0"
          style={{ borderColor: 'var(--color-brand-slate)' }}
        >
          {[
            { target: 30, suffix: '+', label: 'YEARS ACTIVE' },
            { target: 5000, suffix: '+', label: 'PROJECTS DELIVERED' },
            { target: 29, suffix: '', label: 'STATES COVERED' },
          ].map(({ target, suffix, label }, i) => (
            <div
              key={label}
              className="py-6"
              style={{ borderBottom: i < 2 ? '1px solid var(--color-brand-slate)' : 'none' }}
            >
              <div
                style={{
                  fontFamily: 'var(--font-syne)',
                  fontSize: 'clamp(2rem, 4vw, 3rem)',
                  fontWeight: '800',
                  color: 'var(--color-brand-offwhite)',
                  lineHeight: '1',
                  marginBottom: '0.5rem',
                }}
              >
                <AnimatedCounter target={target} suffix={suffix} />
              </div>
              <div className="label-caps" style={{ color: '#9BA3B8' }}>
                {label}
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
