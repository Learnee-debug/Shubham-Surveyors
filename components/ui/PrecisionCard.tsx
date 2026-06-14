'use client'

import Link from 'next/link'
import { useState } from 'react'

interface PrecisionCardProps {
  index: string
  icon?: React.ReactNode
  title: string
  description: string
  tags?: string[]
  points?: readonly string[]
  href?: string
  coordinate?: string
  className?: string
}

export default function PrecisionCard({
  index,
  icon,
  title,
  description,
  tags = [],
  points,
  href,
  coordinate,
  className = '',
}: PrecisionCardProps) {
  const [hovered, setHovered] = useState(false)

  const content = (
    <div
      className={`precision-card p-7 flex flex-col gap-6 h-full relative ${className}`}
      style={{ minHeight: '260px' }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {/* Top row */}
      <div className="flex justify-between items-start">
        <div
          style={{
            color: hovered ? 'var(--color-brand-offwhite)' : 'var(--color-on-surface)',
            transition: 'color 0.3s',
          }}
        >
          {icon}
        </div>
        <span
          className="label-caps"
          style={{ color: hovered ? 'var(--color-brand-slate)' : 'var(--color-outline)' }}
        >
          {index}
        </span>
      </div>

      {/* Title */}
      <h3
        style={{
          fontFamily: 'var(--font-syne)',
          fontSize: '1.125rem',
          fontWeight: '700',
          textTransform: 'uppercase',
          letterSpacing: '0.02em',
          color: hovered ? 'var(--color-brand-offwhite)' : 'var(--color-on-surface)',
          transition: 'color 0.3s',
          flex: 1,
        }}
      >
        {title}
      </h3>

      {/* Description */}
      <p
        style={{
          fontFamily: 'var(--font-jost)',
          fontSize: '0.875rem',
          lineHeight: '1.6',
          color: hovered ? 'var(--color-inverse-primary)' : 'var(--color-on-surface-variant)',
          transition: 'color 0.3s',
        }}
      >
        {description}
      </p>

      {/* Points */}
      {points && points.length > 0 && (
        <ul className="flex flex-col gap-1">
          {points.map((point) => (
            <li
              key={point}
              className="label-caps"
              style={{
                color: hovered ? 'var(--color-inverse-primary)' : 'var(--color-outline)',
                transition: 'color 0.3s',
              }}
            >
              — {point}
            </li>
          ))}
        </ul>
      )}

      {/* Tags */}
      {tags.length > 0 && (
        <div className="flex flex-wrap gap-2">
          {tags.map((tag) => (
            <span
              key={tag}
              className="label-caps px-2 py-1"
              style={{
                border: '1px solid var(--color-outline-variant)',
                color: hovered ? 'var(--color-brand-slate)' : 'var(--color-brand-slate)',
              }}
            >
              {tag}
            </span>
          ))}
        </div>
      )}

      {/* Coordinate */}
      {coordinate && (
        <span
          className="absolute bottom-4 right-4 label-caps"
          style={{ fontSize: '9px', color: 'var(--color-outline)', opacity: 0.8 }}
        >
          {coordinate}
        </span>
      )}
    </div>
  )

  if (href) {
    return <Link href={href} className="block h-full">{content}</Link>
  }
  return content
}
