'use client'

import Link from 'next/link'
import Image from 'next/image'
import { SITE } from '@/lib/constants'

const footerLinks = {
  Services: [
    { label: 'Boundary & Land', href: '/services#boundary' },
    { label: 'Topographic', href: '/services#topographic' },
    { label: 'RTK DGPS', href: '/services#rtk-dgps' },
    { label: 'Infrastructure', href: '/services#infrastructure' },
    { label: 'Regulatory & Mojani', href: '/services#regulatory' },
    { label: 'GIS Mapping', href: '/services#gis' },
  ],
  Industries: [
    { label: 'Infrastructure', href: '/industries/infrastructure' },
    { label: 'Real Estate', href: '/industries/real-estate' },
    { label: 'Mining', href: '/industries/mining' },
    { label: 'Agriculture', href: '/industries/agriculture' },
    { label: 'Smart Cities', href: '/industries/smart-cities' },
    { label: 'Utilities', href: '/industries/utilities' },
  ],
  Company: [
    { label: 'About Us', href: '/about' },
    { label: 'Projects', href: '/projects' },
    { label: 'Knowledge Center', href: '/knowledge' },
    { label: 'Get a Quote', href: '/quote' },
    { label: 'Contact Us', href: '/contact' },
    { label: 'Client Portal', href: '/portal' },
  ],
  Locations: [
    { label: 'Maharashtra', href: '/locations/maharashtra' },
    { label: 'Karnataka', href: '/locations/karnataka' },
    { label: 'Gujarat', href: '/locations/gujarat' },
    { label: 'Delhi', href: '/locations/delhi' },
    { label: 'Tamil Nadu', href: '/locations/tamil-nadu' },
    { label: 'Telangana', href: '/locations/telangana' },
    { label: 'Uttar Pradesh', href: '/locations/uttar-pradesh' },
    { label: 'All Locations →', href: '/locations' },
  ],
}

export default function Footer() {
  return (
    <footer style={{ backgroundColor: 'var(--color-primary-container)', borderTop: '1px solid var(--color-outline)' }}>
      <div
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-12 px-8 pt-20 pb-12"
        style={{ paddingLeft: 'clamp(1rem, 4vw, 4rem)', paddingRight: 'clamp(1rem, 4vw, 4rem)' }}
      >
        {/* Brand column */}
        <div className="md:col-span-1">
          <Image
            src="/logo-mark-gold.png"
            alt="Shubham Surveyors logo"
            width={40}
            height={40}
            style={{ width: '40px', height: 'auto', marginBottom: '1rem' }}
          />
          <div
            style={{
              fontFamily: 'var(--font-syne)',
              fontSize: 'clamp(1.15rem, 1.7vw, 1.75rem)',
              fontWeight: '800',
              textTransform: 'uppercase',
              color: 'var(--color-inverse-on-surface)',
              lineHeight: '1.1',
              marginBottom: '1rem',
              whiteSpace: 'nowrap',
            }}
          >
            SHUBHAM<br />SURVEYORS
          </div>
          <div
            style={{
              borderLeft: '2px solid var(--color-brand-gold)',
              paddingLeft: '1rem',
              fontFamily: 'var(--font-jost)',
              fontSize: '0.875rem',
              color: 'var(--color-on-primary-container)',
              fontStyle: 'italic',
              marginBottom: '1.5rem',
            }}
          >
            {SITE.tagline}
          </div>
          <div
            className="label-caps inline-block px-3 py-2"
            style={{
              border: '1px solid var(--color-brand-gold)',
              color: 'var(--color-brand-gold)',
            }}
          >
            ✓ GOVT. CERTIFIED · RERA COMPLIANT · EST. 1994
          </div>
        </div>

        {/* Link columns */}
        {Object.entries(footerLinks).map(([heading, links]) => (
          <div key={heading}>
            <div
              className="label-caps pb-3 mb-6"
              style={{
                borderBottom: '1px solid var(--color-outline)',
                color: 'var(--color-inverse-on-surface)',
              }}
            >
              {heading}
            </div>
            <ul className="flex flex-col gap-3">
              {links.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="transition-colors duration-200"
                    style={{
                      fontFamily: 'var(--font-jost)',
                      fontSize: '0.875rem',
                      color: 'var(--color-on-primary-container)',
                    }}
                    onMouseEnter={(e) => { e.currentTarget.style.color = 'var(--color-brand-gold)' }}
                    onMouseLeave={(e) => { e.currentTarget.style.color = 'var(--color-on-primary-container)' }}
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      {/* Bottom bar */}
      <div
        className="flex flex-col md:flex-row items-center justify-between gap-4 px-8 py-6"
        style={{
          borderTop: '1px solid var(--color-outline)',
          paddingLeft: 'clamp(1rem, 4vw, 4rem)',
          paddingRight: 'clamp(1rem, 4vw, 4rem)',
        }}
      >
        <p className="label-caps" style={{ color: 'var(--color-on-primary-container)', opacity: 0.6 }}>
          © 2024 SHUBHAM SURVEYORS | PRECISION ± 0.001MM | EST. 1994
        </p>
        <div className="flex gap-6">
          {[
            { label: 'Privacy Policy', href: '/privacy-policy' },
            { label: 'Terms of Service', href: '/terms-of-service' },
            { label: 'Sitemap', href: '/sitemap.xml' },
          ].map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="label-caps transition-colors duration-200"
              style={{ color: 'var(--color-on-primary-container)', opacity: 0.6 }}
            >
              {item.label}
            </Link>
          ))}
        </div>
      </div>
    </footer>
  )
}
