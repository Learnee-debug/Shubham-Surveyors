import Link from 'next/link'
import RevealOnScroll from '@/components/ui/RevealOnScroll'
import SectionLabel from '@/components/ui/SectionLabel'
import { KNOWLEDGE_ARTICLES } from '@/lib/constants'

export default function KnowledgePreview() {
  return (
    <section style={{ backgroundColor: 'var(--color-brand-nearblack)' }}>
      <div
        className="py-24 md:py-32"
        style={{ paddingLeft: 'clamp(1rem, 4vw, 4rem)', paddingRight: 'clamp(1rem, 4vw, 4rem)' }}
      >
        <RevealOnScroll>
          <SectionLabel index="§ 05" label="Knowledge Center" dark />
          <div className="flex flex-col md:flex-row md:justify-between md:items-end gap-6 mb-16">
            <h2
              style={{
                fontFamily: 'var(--font-syne)',
                fontSize: 'clamp(1.75rem, 4vw, 3rem)',
                fontWeight: '700',
                textTransform: 'uppercase',
                color: 'var(--color-brand-offwhite)',
              }}
            >
              INDIA&apos;S DEFINITIVE<br />SURVEYING RESOURCE
            </h2>
            <p style={{ fontFamily: 'var(--font-jost)', fontSize: '1rem', lineHeight: '1.7', color: 'var(--color-inverse-primary)', maxWidth: '400px' }}>
              Navigate the complexities of Indian land law, government procedures,
              and surveying regulations.
            </p>
          </div>
        </RevealOnScroll>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          {KNOWLEDGE_ARTICLES.map((article, i) => (
            <RevealOnScroll key={article.slug} delay={i * 0.1}>
              <div
                className="flex flex-col h-full"
                style={{ border: '1px solid var(--color-outline)' }}
              >
                {/* Top block */}
                <div className="p-7" style={{ backgroundColor: 'var(--color-primary-container)' }}>
                  <span
                    className="label-caps px-3 py-1 inline-block mb-4"
                    style={{
                      color: 'var(--color-brand-gold)',
                      backgroundColor: 'rgba(13,27,42,0.6)',
                    }}
                  >
                    {article.badge}
                  </span>
                  <h3
                    style={{
                      fontFamily: 'var(--font-syne)',
                      fontSize: '1.25rem',
                      fontWeight: '700',
                      textTransform: 'uppercase',
                      letterSpacing: '0.02em',
                      color: 'var(--color-brand-offwhite)',
                    }}
                  >
                    {article.title}
                  </h3>
                </div>

                {/* Bottom block */}
                <div
                  className="p-6 flex flex-col gap-4 flex-1"
                  style={{ backgroundColor: 'var(--color-surface-container-lowest)' }}
                >
                  <p style={{ fontFamily: 'var(--font-jost)', fontSize: '0.875rem', lineHeight: '1.7', color: 'var(--color-on-surface-variant)', flex: 1 }}>
                    {article.description}
                  </p>
                  <Link
                    href={`/knowledge/${article.slug}`}
                    className="label-caps transition-colors duration-200"
                    style={{ color: '#8B6508' }}
                  >
                    READ GUIDE →
                  </Link>
                </div>
              </div>
            </RevealOnScroll>
          ))}
        </div>

        <RevealOnScroll delay={0.3}>
          <div className="flex justify-center">
            <Link href="/knowledge" className="btn-secondary" style={{ color: 'var(--color-brand-offwhite)', borderColor: 'var(--color-brand-slate)' }}>
              VIEW ALL ARTICLES →
            </Link>
          </div>
        </RevealOnScroll>
      </div>
    </section>
  )
}
