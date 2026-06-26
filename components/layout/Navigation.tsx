'use client'

import Link from 'next/link'
import Image from 'next/image'
import { usePathname } from 'next/navigation'
import { useState, useEffect, useRef } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { NAV_LINKS, SITE } from '@/lib/constants'
import { Menu, X, Phone, Mail } from 'lucide-react'

export default function Navigation() {
  const pathname = usePathname()
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const headerRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    setMobileOpen(false)
  }, [pathname])

  useEffect(() => {
    const header = headerRef.current
    if (!header) return
    const setHeight = () => {
      document.documentElement.style.setProperty('--header-height', `${header.getBoundingClientRect().height}px`)
    }
    setHeight()
    const observer = new ResizeObserver(setHeight)
    observer.observe(header)
    return () => observer.disconnect()
  }, [])

  return (
    <>
      <header
        ref={headerRef}
        className="fixed top-0 left-0 right-0 z-50 transition-all duration-300"
        style={{
          backgroundColor: 'var(--color-surface)',
          borderBottom: scrolled
            ? '1px solid var(--color-outline-variant)'
            : '1px solid var(--color-outline)',
        }}
      >
        {/* Contact strip */}
        <div
          className="flex items-center justify-center md:justify-end flex-wrap gap-x-4 gap-y-1 md:gap-x-6 px-8 py-1.5"
          style={{
            backgroundColor: 'var(--color-brand-navy)',
            paddingLeft: 'clamp(1rem, 4vw, 4rem)',
            paddingRight: 'clamp(1rem, 4vw, 4rem)',
          }}
        >
          <a
            href={`tel:${SITE.phone.replace(/\s/g, '')}`}
            className="flex items-center gap-1.5 label-caps transition-opacity duration-200 hover:opacity-80"
            style={{ color: 'var(--color-brand-gold)', fontSize: '11px', minHeight: '24px', padding: '4px 2px' }}
          >
            <Phone size={12} className="flex-shrink-0" />
            {SITE.phone}
          </a>
          <a
            href={`tel:${SITE.phoneAlt.replace(/\s/g, '')}`}
            className="hidden sm:flex items-center gap-1.5 label-caps transition-opacity duration-200 hover:opacity-80"
            style={{ color: 'var(--color-brand-gold)', fontSize: '11px', minHeight: '24px', padding: '4px 2px' }}
          >
            <Phone size={12} className="flex-shrink-0" />
            {SITE.phoneAlt}
          </a>
          <a
            href={`mailto:${SITE.email}`}
            className="flex items-center gap-1.5 label-caps transition-opacity duration-200 hover:opacity-80"
            style={{ color: 'var(--color-brand-gold)', fontSize: '11px', minHeight: '24px', padding: '4px 2px' }}
          >
            <Mail size={12} className="flex-shrink-0" />
            {SITE.email}
          </a>
        </div>

        <div
          className="flex items-center justify-between px-8 py-4"
          style={{ paddingLeft: 'clamp(1rem, 4vw, 4rem)', paddingRight: 'clamp(1rem, 4vw, 4rem)' }}
        >
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3">
            <Image
              src="/logo-mark.png"
              alt="Shubham Surveyors logo"
              width={32}
              height={32}
              className="flex-shrink-0"
              style={{ width: '32px', height: 'auto' }}
              priority
            />
            <div>
              <div
                className="label-caps"
                style={{ color: 'var(--color-brand-navy)', letterSpacing: '0.12em' }}
              >
                SHUBHAM SURVEYORS
              </div>
              <div style={{ fontSize: '10px', color: 'var(--color-brand-slate)', fontFamily: 'var(--font-jost)' }}>
                Est. 1994 · Precision Land Surveying
              </div>
            </div>
          </Link>

          {/* Desktop nav */}
          <nav className="hidden md:flex items-center">
            {NAV_LINKS.map((link, i) => (
              <span key={link.href} className="flex items-center">
                {i > 0 && (
                  <span className="label-caps mx-1" style={{ color: 'var(--color-brand-slate)' }}>
                    |
                  </span>
                )}
                <Link
                  href={link.href}
                  className="label-caps px-4 py-2 transition-colors duration-200"
                  style={{
                    color: pathname.startsWith(link.href)
                      ? 'var(--color-brand-navy)'
                      : 'var(--color-on-surface-variant)',
                    fontWeight: pathname.startsWith(link.href) ? '600' : '400',
                  }}
                >
                  {link.label}
                </Link>
              </span>
            ))}
          </nav>

          {/* Desktop CTAs */}
          <div className="hidden md:flex items-center gap-3">
            <a
              href={`https://wa.me/${SITE.whatsappNumber}`}
              target="_blank"
              rel="noopener noreferrer"
              className="label-caps px-4 py-2 transition-all duration-200"
              style={{
                border: '1px solid #25D366',
                color: '#25D366',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.backgroundColor = '#25D366'
                e.currentTarget.style.color = 'white'
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.backgroundColor = 'transparent'
                e.currentTarget.style.color = '#25D366'
              }}
            >
              WhatsApp
            </a>
            <Link href="/quote" className="btn-primary">
              Get a Quote
            </Link>
          </div>

          {/* Mobile hamburger */}
          <button
            className="md:hidden p-2"
            style={{ color: 'var(--color-on-surface)' }}
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle menu"
          >
            {mobileOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </header>

      {/* Mobile menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.25 }}
            className="fixed left-0 right-0 z-40 flex flex-col"
            style={{
              top: 'var(--header-height, 97px)',
              backgroundColor: 'var(--color-surface)',
              borderBottom: '1px solid var(--color-outline)',
            }}
          >
            {NAV_LINKS.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="label-caps px-8 py-5 transition-colors duration-200"
                style={{
                  borderBottom: '1px solid var(--color-outline-variant)',
                  color: pathname.startsWith(link.href)
                    ? 'var(--color-brand-navy)'
                    : 'var(--color-on-surface)',
                }}
              >
                {link.label}
              </Link>
            ))}
            <div className="flex flex-col gap-3 px-8 py-6">
              <a
                href={`https://wa.me/${SITE.whatsappNumber}`}
                target="_blank"
                rel="noopener noreferrer"
                className="label-caps px-4 py-3 text-center"
                style={{ border: '1px solid #25D366', color: '#25D366' }}
              >
                WhatsApp
              </a>
              <Link href="/quote" className="btn-primary justify-center">
                Get a Quote
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
