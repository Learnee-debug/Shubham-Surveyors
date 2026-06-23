import Link from 'next/link'
import { SITE } from '@/lib/constants'

interface BreadcrumbItem {
  name: string
  href: string
}

export default function Breadcrumb({ items }: { items: BreadcrumbItem[] }) {
  const allItems = [{ name: 'Home', href: '/' }, ...items]

  const schema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: allItems.map((item, i) => ({
      '@type': 'ListItem',
      position: i + 1,
      name: item.name,
      item: `${SITE.url}${item.href}`,
    })),
  }

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />
      <nav
        aria-label="Breadcrumb"
        className="flex items-center gap-2 label-caps flex-wrap"
        style={{
          color: 'var(--color-brand-slate)',
          padding: '1rem clamp(1rem, 4vw, 4rem)',
          borderBottom: '1px solid var(--color-outline-variant)',
          backgroundColor: 'var(--color-surface)',
          marginTop: 'var(--header-height, 97px)',
        }}
      >
        {allItems.map((item, i) => (
          <span key={item.href} className="flex items-center gap-2">
            {i > 0 && <span style={{ color: 'var(--color-outline)' }}>/</span>}
            {i === allItems.length - 1 ? (
              <span style={{ color: 'var(--color-on-surface-variant)' }}>{item.name}</span>
            ) : (
              <Link href={item.href} style={{ transition: 'color 0.2s' }} className="hover:opacity-70">
                {item.name}
              </Link>
            )}
          </span>
        ))}
      </nav>
    </>
  )
}
