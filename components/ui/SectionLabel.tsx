interface SectionLabelProps {
  index: string
  label: string
  dark?: boolean
}

export default function SectionLabel({ index, label, dark = false }: SectionLabelProps) {
  return (
    <div className="flex items-start gap-4 mb-6">
      <span
        className="section-index flex-shrink-0"
        style={{ color: dark ? 'var(--color-brand-slate)' : 'var(--color-on-surface-variant)' }}
      >
        {index}
      </span>
      <span className="label-caps" style={{ color: 'var(--color-brand-gold)', paddingTop: '0.5rem' }}>
        {label}
      </span>
    </div>
  )
}
