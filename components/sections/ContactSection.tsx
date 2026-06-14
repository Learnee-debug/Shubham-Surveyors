'use client'

import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'
import { motion, AnimatePresence } from 'framer-motion'
import SectionLabel from '@/components/ui/SectionLabel'
import { SITE } from '@/lib/constants'
import { Phone, Mail, MapPin } from 'lucide-react'
import type { ContactFormData } from '@/types'

const schema = z.object({
  name: z.string().min(2, 'Enter your name'),
  phone: z.string().min(10, 'Enter valid phone'),
  email: z.string().email('Enter valid email'),
  service: z.string().min(1, 'Select a service'),
  state: z.string().min(2, 'Enter your state'),
  projectDetails: z.string().min(10, 'Describe your project'),
})

type FormSchema = z.infer<typeof schema>

export default function ContactSection() {
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle')

  const { register, handleSubmit, reset, formState: { errors } } = useForm<FormSchema>({
    resolver: zodResolver(schema),
  })

  const onSubmit = async (data: ContactFormData) => {
    setStatus('loading')
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      })
      if (!res.ok) throw new Error()
      setStatus('success')
      reset()
    } catch {
      setStatus('error')
    }
  }

  return (
    <section
      style={{
        backgroundColor: 'var(--color-brand-navy)',
        borderTop: '1px solid transparent',
        backgroundImage: 'linear-gradient(90deg, transparent, #B8860B, transparent)',
        backgroundSize: '100% 1px',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'top',
      }}
    >
      <div
        className="py-24 md:py-32 grid grid-cols-1 lg:grid-cols-2 gap-16"
        style={{ paddingLeft: 'clamp(1rem, 4vw, 4rem)', paddingRight: 'clamp(1rem, 4vw, 4rem)' }}
      >
        {/* Left */}
        <div>
          <SectionLabel index="§ 07" label="Get In Touch" dark />
          <h2
            style={{
              fontFamily: 'var(--font-syne)',
              fontSize: 'clamp(1.75rem, 4vw, 3rem)',
              fontWeight: '700',
              textTransform: 'uppercase',
              color: 'var(--color-brand-offwhite)',
              marginBottom: '1rem',
            }}
          >
            START YOUR SURVEY TODAY.
          </h2>
          <p style={{ fontFamily: 'var(--font-jost)', fontSize: '1rem', lineHeight: '1.7', color: 'var(--color-inverse-primary)', marginBottom: '2.5rem' }}>
            Get a response within 4 business hours. Our team covers all 29 states.
            We don&apos;t outsource — every survey is done by our certified field teams.
          </p>

          {/* Contact methods */}
          <div className="flex flex-col gap-4 mb-8">
            {[
              { icon: <Phone size={18} />, text: SITE.phone },
              { icon: <Mail size={18} />, text: SITE.email },
              { icon: <MapPin size={18} />, text: SITE.address },
            ].map(({ icon, text }) => (
              <div
                key={text}
                className="flex items-center gap-5 px-5 py-4 transition-colors duration-200"
                style={{
                  border: '1px solid var(--color-brand-slate)',
                  color: 'var(--color-inverse-primary)',
                  fontFamily: 'var(--font-jost)',
                  fontSize: '0.9rem',
                }}
              >
                <span style={{ color: 'var(--color-brand-gold)', flexShrink: 0 }}>{icon}</span>
                {text}
              </div>
            ))}
          </div>

          {/* WhatsApp CTA */}
          <a
            href={`https://wa.me/${SITE.whatsappNumber}`}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-3 w-full p-5 transition-all duration-200"
            style={{ backgroundColor: '#25D366', color: 'white' }}
            onMouseEnter={(e) => { e.currentTarget.style.filter = 'brightness(1.1)' }}
            onMouseLeave={(e) => { e.currentTarget.style.filter = 'none' }}
          >
            <svg width="22" height="22" viewBox="0 0 24 24" fill="white">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
            </svg>
            <span style={{ fontFamily: 'var(--font-syne)', fontSize: '1.1rem', fontWeight: '700', textTransform: 'uppercase' }}>
              CHAT ON WHATSAPP NOW →
            </span>
          </a>
        </div>

        {/* Right: form */}
        <div style={{ backgroundColor: 'var(--color-brand-offwhite)', padding: 'clamp(1.5rem, 4vw, 2.5rem)' }}>
          <h3
            style={{
              fontFamily: 'var(--font-syne)',
              fontSize: '1.25rem',
              fontWeight: '700',
              textTransform: 'uppercase',
              color: 'var(--color-on-surface)',
              marginBottom: '2rem',
            }}
          >
            SEND AN ENQUIRY
          </h3>

          <form onSubmit={handleSubmit(onSubmit as (data: FormSchema) => void)} className="flex flex-col gap-6">
            <div className="grid grid-cols-2 gap-6">
              <div>
                <label className="label-caps block mb-2" style={{ color: 'var(--color-on-surface-variant)' }}>NAME *</label>
                <input {...register('name')} placeholder="Full Name" className="input-underline" />
                {errors.name && <p className="label-caps mt-1" style={{ color: '#ef4444', fontSize: '10px' }}>{errors.name.message}</p>}
              </div>
              <div>
                <label className="label-caps block mb-2" style={{ color: 'var(--color-on-surface-variant)' }}>PHONE *</label>
                <input {...register('phone')} type="tel" placeholder="+91 XXXXX XXXXX" className="input-underline" />
                {errors.phone && <p className="label-caps mt-1" style={{ color: '#ef4444', fontSize: '10px' }}>{errors.phone.message}</p>}
              </div>
            </div>

            <div>
              <label className="label-caps block mb-2" style={{ color: 'var(--color-on-surface-variant)' }}>EMAIL *</label>
              <input {...register('email')} type="email" placeholder="you@company.com" className="input-underline" />
              {errors.email && <p className="label-caps mt-1" style={{ color: '#ef4444', fontSize: '10px' }}>{errors.email.message}</p>}
            </div>

            <div className="grid grid-cols-2 gap-6">
              <div>
                <label className="label-caps block mb-2" style={{ color: 'var(--color-on-surface-variant)' }}>SERVICE</label>
                <select {...register('service')} className="input-underline">
                  <option value="">Select service</option>
                  <option value="Boundary Survey">Boundary Survey</option>
                  <option value="Topographic Survey">Topographic Survey</option>
                  <option value="RTK DGPS">RTK DGPS</option>
                  <option value="Highway Corridor">Highway Corridor</option>
                  <option value="Layout / RERA">Layout / RERA</option>
                  <option value="GIS Mapping">GIS Mapping</option>
                  <option value="Other">Other</option>
                </select>
              </div>
              <div>
                <label className="label-caps block mb-2" style={{ color: 'var(--color-on-surface-variant)' }}>STATE</label>
                <input {...register('state')} placeholder="e.g. Maharashtra" className="input-underline" />
              </div>
            </div>

            <div>
              <label className="label-caps block mb-2" style={{ color: 'var(--color-on-surface-variant)' }}>PROJECT DETAILS *</label>
              <textarea
                {...register('projectDetails')}
                rows={4}
                placeholder="Describe your project, location, and survey requirements..."
                className="input-underline resize-none"
              />
              {errors.projectDetails && <p className="label-caps mt-1" style={{ color: '#ef4444', fontSize: '10px' }}>{errors.projectDetails.message}</p>}
            </div>

            <button
              type="submit"
              disabled={status === 'loading'}
              className="btn-primary w-full justify-center"
            >
              {status === 'loading' ? 'SENDING...' : 'SEND ENQUIRY →'}
            </button>
          </form>

          <AnimatePresence>
            {status === 'success' && (
              <motion.div
                initial={{ opacity: 0, y: -8 }}
                animate={{ opacity: 1, y: 0 }}
                className="mt-4 p-4 label-caps text-center"
                style={{ backgroundColor: '#d1fae5', color: '#065f46', border: '1px solid #6ee7b7' }}
              >
                ✓ Enquiry sent! We&apos;ll respond within 4 hours.
              </motion.div>
            )}
            {status === 'error' && (
              <motion.div
                initial={{ opacity: 0, y: -8 }}
                animate={{ opacity: 1, y: 0 }}
                className="mt-4 p-4 label-caps text-center"
                style={{ backgroundColor: '#fee2e2', color: '#991b1b', border: '1px solid #fca5a5' }}
              >
                Something went wrong. Please call us directly.
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </section>
  )
}
