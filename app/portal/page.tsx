import type { Metadata } from 'next'
import SectionLabel from '@/components/ui/SectionLabel'
import RevealOnScroll from '@/components/ui/RevealOnScroll'
import { Lock } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Client Portal',
  description: 'Secure client login for Shubham Surveyors project tracking and document access.',
}

export default function PortalPage() {
  return (
    <section
      className="min-h-screen flex items-center justify-center pt-20"
      style={{
        backgroundColor: 'var(--color-brand-navy)',
        paddingLeft: 'clamp(1rem, 4vw, 4rem)',
        paddingRight: 'clamp(1rem, 4vw, 4rem)',
      }}
    >
      <div className="bg-blueprint-dark absolute inset-0 opacity-40 pointer-events-none" />

      <RevealOnScroll className="relative z-10 w-full max-w-md">
        <div
          className="p-12"
          style={{ backgroundColor: 'var(--color-surface)', border: '1px solid var(--color-outline)' }}
        >
          <div className="flex justify-center mb-8">
            <div
              className="flex items-center justify-center"
              style={{ width: '64px', height: '64px', backgroundColor: 'var(--color-brand-navy)', border: '1px solid var(--color-brand-gold)' }}
            >
              <Lock size={28} style={{ color: 'var(--color-brand-gold)' }} />
            </div>
          </div>

          <SectionLabel index="§ PRT" label="Client Portal" />
          <h1
            style={{
              fontFamily: 'var(--font-syne)',
              fontSize: '1.75rem',
              fontWeight: '700',
              textTransform: 'uppercase',
              color: 'var(--color-on-surface)',
              marginBottom: '2rem',
            }}
          >
            SECURE CLIENT LOGIN
          </h1>

          <form className="flex flex-col gap-6">
            <div>
              <label className="label-caps block mb-2" style={{ color: 'var(--color-on-surface-variant)' }}>
                PROJECT ID / EMAIL
              </label>
              <input
                type="text"
                placeholder="e.g. SHB-2024-0042"
                className="input-underline"
              />
            </div>
            <div>
              <label className="label-caps block mb-2" style={{ color: 'var(--color-on-surface-variant)' }}>
                PASSWORD
              </label>
              <input
                type="password"
                placeholder="••••••••"
                className="input-underline"
              />
            </div>
            <button type="button" className="btn-primary w-full justify-center">
              ACCESS PORTAL →
            </button>
          </form>

          <p
            className="label-caps mt-6 text-center"
            style={{ color: 'var(--color-on-surface-variant)' }}
          >
            Don&apos;t have access? Contact your project manager.
          </p>
        </div>
      </RevealOnScroll>
    </section>
  )
}
