'use client'

import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'
import { motion, AnimatePresence } from 'framer-motion'
import SectionLabel from '@/components/ui/SectionLabel'
import { PRICING, SITE } from '@/lib/constants'
import { calculateEstimate, formatINR, TERRAIN_MULTIPLIERS } from '@/lib/pricing'
import type { SurveyType, TerrainType } from '@/lib/pricing'

const schema = z.object({
  surveyType: z.string().min(1, 'Select survey type'),
  area: z.number().positive('Enter valid area'),
  terrain: z.string().min(1, 'Select terrain'),
  name: z.string().min(2, 'Enter your name'),
  phone: z.string().min(10, 'Enter valid phone number'),
})

type FormData = z.infer<typeof schema>

const refPricing = [
  { label: 'Boundary Survey', range: '₹5,000 – ₹10,000 / acre' },
  { label: 'Total Station', range: '₹5,000 – ₹20,000 / acre' },
  { label: 'RTK DGPS', range: '₹8,000 – ₹30,000 / acre' },
  { label: 'Highway Corridor', range: '₹2,500 – ₹4,000 / km' },
  { label: 'Layout / RERA', range: '₹10,000 – ₹25,000 / acre' },
  { label: 'GIS Mapping', range: '₹15,000 – ₹40,000 / acre' },
]

export default function CostEstimator() {
  const [result, setResult] = useState<{ min: number; max: number; unit: string } | null>(null)
  const [calcData, setCalcData] = useState<FormData | null>(null)

  const { register, handleSubmit, watch, formState: { errors } } = useForm<FormData>({
    resolver: zodResolver(schema),
    defaultValues: { surveyType: '', terrain: '', area: undefined as unknown as number },
  })

  const surveyType = watch('surveyType')
  const isKm = surveyType === 'highway'
  const areaLabel = isKm ? 'LENGTH (KM)' : 'AREA (ACRES)'

  const onSubmit = async (data: FormData) => {
    const pricing = PRICING[data.surveyType as SurveyType]
    if (!pricing) return
    const multiplier = TERRAIN_MULTIPLIERS[data.terrain as TerrainType]?.value ?? 1
    const est = calculateEstimate(data.surveyType as SurveyType, data.area, multiplier)
    setResult(est)
    setCalcData(data)

    // Notify owner by email
    const isKmType = data.surveyType === 'highway'
    fetch('/api/contact', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        name: data.name,
        phone: data.phone,
        email: 'via-quote-form@noreply.com',
        service: pricing.label,
        state: '',
        projectDetails: `Quote request — ${pricing.label}\nArea/Length: ${data.area} ${isKmType ? 'km' : 'acres'}\nTerrain: ${data.terrain}\nEstimated range: ₹${est.min.toLocaleString('en-IN')} – ₹${est.max.toLocaleString('en-IN')} per ${est.unit}`,
      }),
    }).catch(() => {/* fire-and-forget */})
  }

  const waMsg = calcData && result
    ? encodeURIComponent(
        `Hi, I used the estimator on your website.\n\nName: ${calcData.name}\nSurvey Type: ${PRICING[calcData.surveyType as SurveyType]?.label ?? calcData.surveyType}\nArea: ${calcData.area} ${result.unit}\nEstimated Range: ${formatINR(result.min)} – ${formatINR(result.max)}\n\nPlease provide a detailed quote.`
      )
    : ''

  return (
    <section style={{ backgroundColor: 'var(--color-brand-offwhite)', borderTop: '1px solid var(--color-outline)' }}>
      <div
        className="py-24 md:py-32 grid grid-cols-1 lg:grid-cols-2 gap-16 items-start"
        style={{ paddingLeft: 'clamp(1rem, 4vw, 4rem)', paddingRight: 'clamp(1rem, 4vw, 4rem)' }}
      >
        {/* Left */}
        <div>
          <SectionLabel index="§ EST" label="Instant Quote" />
          <h2
            style={{
              fontFamily: 'var(--font-syne)',
              fontSize: 'clamp(1.75rem, 4vw, 3rem)',
              fontWeight: '700',
              textTransform: 'uppercase',
              color: 'var(--color-on-surface)',
              marginBottom: '1.5rem',
            }}
          >
            KNOW YOUR SURVEY COST INSTANTLY.
          </h2>
          <p style={{ fontFamily: 'var(--font-jost)', fontSize: '1rem', lineHeight: '1.7', color: 'var(--color-on-surface-variant)', marginBottom: '2rem' }}>
            India&apos;s first transparent surveying price calculator. Get an accurate
            cost estimate before speaking to anyone.
          </p>

          {/* Reference pricing table */}
          <div style={{ border: '1px solid var(--color-outline)', marginBottom: '1.5rem' }}>
            {refPricing.map((item, i) => (
              <div
                key={item.label}
                className="flex justify-between items-center px-5 py-4"
                style={{ borderBottom: i < refPricing.length - 1 ? '1px solid var(--color-outline-variant)' : 'none' }}
              >
                <span className="label-caps" style={{ color: 'var(--color-brand-slate)' }}>{item.label}</span>
                <span style={{ fontFamily: 'var(--font-jost)', fontSize: '0.875rem', color: 'var(--color-on-surface)', fontWeight: '600' }}>{item.range}</span>
              </div>
            ))}
          </div>

          <p
            style={{
              fontFamily: 'var(--font-cormorant)',
              fontStyle: 'italic',
              fontSize: '1rem',
              color: 'var(--color-brand-slate)',
            }}
          >
            Indicative only. Final quote requires site verification.
          </p>
        </div>

        {/* Right: form */}
        <div style={{ backgroundColor: 'var(--color-surface)', border: '1px solid var(--color-brand-slate)', padding: 'clamp(1.5rem, 4vw, 3rem)' }}>
          <p className="label-caps mb-8" style={{ color: 'var(--color-brand-gold)' }}>
            SURVEY COST ESTIMATOR
          </p>

          <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-7">
            {/* Survey type */}
            <div>
              <label htmlFor="surveyType" className="label-caps block mb-2" style={{ color: 'var(--color-on-surface-variant)' }}>
                SURVEY TYPE
              </label>
              <select id="surveyType" {...register('surveyType')} className="input-underline">
                <option value="">Select type</option>
                <option value="boundary">Boundary Survey</option>
                <option value="total_station">Total Station</option>
                <option value="rtk_dgps">RTK DGPS</option>
                <option value="highway">Highway Corridor</option>
                <option value="layout_rera">Layout / RERA</option>
                <option value="gis">GIS Mapping</option>
              </select>
              {errors.surveyType && <p className="label-caps mt-1" style={{ color: '#ef4444', fontSize: '10px' }}>{errors.surveyType.message}</p>}
            </div>

            {/* Area */}
            <div>
              <label htmlFor="area" className="label-caps block mb-2" style={{ color: 'var(--color-on-surface-variant)' }}>
                {areaLabel}
              </label>
              <input
                id="area"
                type="number"
                step="0.01"
                min="0"
                placeholder={isKm ? 'e.g. 10' : 'e.g. 5'}
                {...register('area', { valueAsNumber: true })}
                className="input-underline"
              />
              {errors.area && <p className="label-caps mt-1" style={{ color: '#ef4444', fontSize: '10px' }}>{errors.area.message}</p>}
            </div>

            {/* Terrain */}
            <div>
              <label htmlFor="terrain" className="label-caps block mb-2" style={{ color: 'var(--color-on-surface-variant)' }}>
                TERRAIN
              </label>
              <select id="terrain" {...register('terrain')} className="input-underline">
                <option value="">Select terrain</option>
                <option value="flat">Flat (×1.0)</option>
                <option value="urban">Urban / Semi-Urban (×1.2)</option>
                <option value="hilly">Hilly / Forested (×1.4)</option>
              </select>
              {errors.terrain && <p className="label-caps mt-1" style={{ color: '#ef4444', fontSize: '10px' }}>{errors.terrain.message}</p>}
            </div>

            {/* Name + Phone */}
            <div className="grid grid-cols-2 gap-6">
              <div>
                <label htmlFor="name" className="label-caps block mb-2" style={{ color: 'var(--color-on-surface-variant)' }}>NAME</label>
                <input id="name" {...register('name')} placeholder="Full Name" className="input-underline" />
                {errors.name && <p className="label-caps mt-1" style={{ color: '#ef4444', fontSize: '10px' }}>{errors.name.message}</p>}
              </div>
              <div>
                <label htmlFor="phone" className="label-caps block mb-2" style={{ color: 'var(--color-on-surface-variant)' }}>PHONE</label>
                <input id="phone" {...register('phone')} type="tel" placeholder="+91 XXXXX" className="input-underline" />
                {errors.phone && <p className="label-caps mt-1" style={{ color: '#ef4444', fontSize: '10px' }}>{errors.phone.message}</p>}
              </div>
            </div>

            <button type="submit" className="btn-primary w-full justify-center">
              CALCULATE ESTIMATE
            </button>
          </form>

          {/* Result */}
          <AnimatePresence>
            {result && (
              <motion.div
                initial={{ opacity: 0, y: -12 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -12 }}
                className="mt-8 p-8 text-center"
                style={{
                  backgroundColor: 'var(--color-brand-navy)',
                  border: '1px solid var(--color-brand-gold)',
                }}
              >
                <p className="label-caps mb-2" style={{ color: 'var(--color-brand-gold)' }}>ESTIMATED RANGE</p>
                <p
                  style={{
                    fontFamily: 'var(--font-syne)',
                    fontSize: 'clamp(1.5rem, 3vw, 2rem)',
                    fontWeight: '800',
                    color: 'var(--color-brand-offwhite)',
                    marginBottom: '0.75rem',
                  }}
                >
                  {formatINR(result.min)} – {formatINR(result.max)}
                </p>
                <p className="label-caps mb-6" style={{ color: 'var(--color-brand-slate)' }}>
                  Indicative estimate · Subject to site conditions
                </p>
                <a
                  href={`https://wa.me/${SITE.whatsappNumber}?text=${waMsg}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-primary w-full justify-center"
                  style={{ backgroundColor: '#25D366', border: 'none', color: 'white' }}
                >
                  SEND VIA WHATSAPP →
                </a>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </section>
  )
}
