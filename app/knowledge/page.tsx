import type { Metadata } from 'next'
import Link from 'next/link'
import SectionLabel from '@/components/ui/SectionLabel'
import RevealOnScroll from '@/components/ui/RevealOnScroll'
import { getAllArticles } from '@/lib/sanity/queries'

export const metadata: Metadata = {
  title: 'Knowledge Center — The Precision Library',
  description:
    'Expert resources on Indian land law, surveying technology, RERA compliance, Mojani process, and regulatory procedures.',
  alternates: { canonical: 'https://www.shubhamsurveyors.in/knowledge' },
}

const fallbackArticles = [
  { slug: 'mojani-process', topicBadge: 'MAHARASHTRA · TILR', title: 'What is the Mojani Process in Maharashtra?', description: 'A comprehensive technical breakdown of land measurement protocols, legal prerequisites, and the step-by-step procedural framework mandated by the Settlement Commissioner.', readingTime: 12 },
  { slug: 'rera-requirements', topicBadge: 'RERA · REAL ESTATE', title: 'RERA Survey Requirements — What Every Developer Must Know', description: 'A definitive guide to RERA-mandated surveys: what they require, at what project stage, and what deliverables the authority expects.', readingTime: 8 },
  { slug: 'boundary-disputes', topicBadge: 'CASE LAW', title: 'How to Resolve a Land Boundary Dispute in India', description: 'A step-by-step legal and technical guide — from initial documentation through to court-admissible survey evidence and dispute resolution.', readingTime: 10 },
  { slug: '712-extract', topicBadge: 'FIELD GUIDE', title: '7/12 Extract — Complete Guide', description: 'Everything you need to know about the 7/12 extract: what it contains, how to read it, and how surveyors use it for boundary work.', readingTime: 6 },
  { slug: 'tilr-guidelines', topicBadge: 'REGULATORY', title: 'TILR Guidelines Explained', description: 'The Taluka Inspector of Land Records is central to Maharashtra\'s official land measurement process. This guide explains his role and procedures.', readingTime: 7 },
  { slug: 'zone-certificate', topicBadge: 'REGULATORY', title: 'Zone Certificate vs Property Card', description: 'Understanding the difference between these two critical documents and when each is required for property transactions and development.', readingTime: 5 },
]

const taxonomy = [
  { label: 'Regulatory', count: 14 },
  { label: 'Technology', count: 8 },
  { label: 'Case Law', count: 22 },
  { label: 'Field Guides', count: 11 },
]

export default async function KnowledgePage() {
  const sanityArticles = await getAllArticles()
  const articles = sanityArticles.length > 0 ? sanityArticles : fallbackArticles

  const featured = articles[0]
  const rest = articles.slice(1)

  return (
    <>
      {/* Hero */}
      <section
        className="pt-40 pb-16 relative"
        style={{
          backgroundColor: 'var(--color-surface)',
          paddingLeft: 'clamp(1rem, 4vw, 4rem)',
          paddingRight: 'clamp(1rem, 4vw, 4rem)',
        }}
      >
        <div className="bg-blueprint-light absolute inset-0 opacity-40 pointer-events-none" />
        <RevealOnScroll className="relative z-10">
          <SectionLabel index="§ 01" label="Knowledge Center" />
          <h1
            style={{
              fontFamily: 'var(--font-syne)',
              fontSize: 'clamp(2rem, 6vw, 4rem)',
              fontWeight: '800',
              textTransform: 'uppercase',
              letterSpacing: '-0.02em',
              color: 'var(--color-on-surface)',
              maxWidth: '600px',
            }}
          >
            THE PRECISION LIBRARY.
          </h1>
          <p style={{ fontFamily: 'var(--font-jost)', fontSize: '1rem', lineHeight: '1.7', color: 'var(--color-on-surface-variant)', maxWidth: '560px', marginTop: '1rem' }}>
            Expert resources on land law, surveying technology, and regulatory compliance in India.
          </p>
        </RevealOnScroll>
      </section>

      {/* Main content */}
      <section
        className="py-16"
        style={{ backgroundColor: 'var(--color-surface)', paddingLeft: 'clamp(1rem, 4vw, 4rem)', paddingRight: 'clamp(1rem, 4vw, 4rem)' }}
      >
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Left: featured + archive */}
          <div className="lg:col-span-2">
            {/* Featured article */}
            <RevealOnScroll>
              <p className="label-caps mb-4" style={{ color: 'var(--color-on-surface-variant)' }}>§ 02 / FEATURED</p>
              <div style={{ border: '1px solid var(--color-outline)' }}>
                <div className="grid grid-cols-1 md:grid-cols-2">
                  <div
                    className="p-6 flex items-center justify-center"
                    style={{ backgroundColor: 'var(--color-surface-container-high)', minHeight: '200px' }}
                  >
                    <span
                      style={{
                        fontFamily: 'var(--font-syne)',
                        fontSize: '3rem',
                        fontWeight: '800',
                        color: 'var(--color-on-surface-variant)',
                        opacity: 0.15,
                      }}
                    >
                      §
                    </span>
                  </div>
                  <div className="p-7">
                    <span
                      className="label-caps inline-block px-3 py-1 mb-4"
                      style={{ border: '1px solid var(--color-outline-variant)', color: 'var(--color-on-surface-variant)' }}
                    >
                      {featured.topicBadge}
                    </span>
                    <h2
                      style={{
                        fontFamily: 'var(--font-syne)',
                        fontSize: '1.4rem',
                        fontWeight: '700',
                        textTransform: 'uppercase',
                        color: 'var(--color-on-surface)',
                        marginBottom: '0.75rem',
                      }}
                    >
                      {featured.title}
                    </h2>
                    <p style={{ fontFamily: 'var(--font-jost)', fontSize: '0.875rem', lineHeight: '1.7', color: 'var(--color-on-surface-variant)', marginBottom: '1.5rem' }}>
                      {featured.description}
                    </p>
                    <div className="flex justify-between items-center">
                      <span className="label-caps" style={{ color: 'var(--color-brand-slate)' }}>
                        {featured.readingTime} MIN READ
                      </span>
                      <Link
                        href={`/knowledge/${typeof featured.slug === 'string' ? featured.slug : (featured.slug as { current: string }).current}`}
                        className="label-caps"
                        style={{ color: 'var(--color-brand-gold)' }}
                      >
                        READ FULL REPORT →
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </RevealOnScroll>

            {/* Article archive */}
            <RevealOnScroll delay={0.1}>
              <p className="label-caps mt-12 mb-6" style={{ color: 'var(--color-on-surface-variant)' }}>§ 03 / RESOURCE ARCHIVE</p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {rest.map((article, i) => {
                  const slug = typeof article.slug === 'string' ? article.slug : (article.slug as { current: string }).current
                  return (
                    <Link key={slug} href={`/knowledge/${slug}`}>
                      <div className="knowledge-article-card p-6 flex flex-col gap-3 h-full">
                        <span className="label-caps" style={{ color: 'var(--color-brand-gold)', fontSize: '10px' }}>
                          {article.topicBadge}
                        </span>
                        <h3
                          style={{
                            fontFamily: 'var(--font-syne)',
                            fontSize: '1rem',
                            fontWeight: '700',
                            textTransform: 'uppercase',
                            color: 'var(--color-on-surface)',
                            flex: 1,
                          }}
                        >
                          {article.title}
                        </h3>
                        <span className="label-caps" style={{ color: 'var(--color-on-surface-variant)', opacity: 0.6 }}>
                          TECHDOC.00{i + 2}
                        </span>
                      </div>
                    </Link>
                  )
                })}
              </div>
            </RevealOnScroll>
          </div>

          {/* Right: taxonomy + subscription */}
          <div className="flex flex-col gap-8">
            <RevealOnScroll delay={0.15}>
              <div style={{ border: '1px solid var(--color-outline)', padding: '1.5rem' }}>
                <p className="label-caps mb-6" style={{ color: 'var(--color-on-surface-variant)' }}>§ 04 / TAXONOMY</p>
                {taxonomy.map((t) => (
                  <div
                    key={t.label}
                    className="flex justify-between py-3"
                    style={{ borderBottom: '1px solid var(--color-outline-variant)' }}
                  >
                    <span style={{ fontFamily: 'var(--font-jost)', fontSize: '1rem', fontWeight: '600', color: 'var(--color-on-surface)' }}>
                      {t.label}
                    </span>
                    <span style={{ fontFamily: 'var(--font-syne)', fontSize: '1.1rem', fontWeight: '700', color: 'var(--color-on-surface)' }}>
                      {t.count}
                    </span>
                  </div>
                ))}
              </div>
            </RevealOnScroll>

            <RevealOnScroll delay={0.2}>
              <div style={{ backgroundColor: 'var(--color-primary-container)', padding: '1.5rem' }}>
                <p className="label-caps mb-4" style={{ color: 'var(--color-brand-gold)', fontSize: '10px' }}>§ 05 / SUBSCRIPTION</p>
                <h3
                  style={{
                    fontFamily: 'var(--font-syne)',
                    fontSize: '1.4rem',
                    fontWeight: '700',
                    textTransform: 'uppercase',
                    color: 'var(--color-brand-offwhite)',
                    marginBottom: '0.75rem',
                  }}
                >
                  Stay accurate. Get the Precision Bulletin.
                </h3>
                <p style={{ fontFamily: 'var(--font-jost)', fontSize: '0.8rem', color: 'var(--color-on-primary-container)', marginBottom: '1rem' }}>
                  Monthly technical updates on Indian surveying law and methodology.
                </p>
                <label className="label-caps block mb-2" style={{ color: 'var(--color-on-primary-container)', fontSize: '10px' }}>EMAIL ADDRESS</label>
                <input
                  type="email"
                  placeholder="surveyor@firm.com"
                  className="input-underline mb-4"
                  style={{ borderBottomColor: 'var(--color-outline)', color: 'var(--color-brand-offwhite)' }}
                />
                <button className="btn-primary w-full justify-center" style={{ backgroundColor: 'var(--color-brand-gold)', color: 'var(--color-brand-nearblack)', border: 'none' }}>
                  SUBSCRIBE →
                </button>
              </div>
            </RevealOnScroll>
          </div>
        </div>
      </section>
    </>
  )
}
