import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import Link from 'next/link'
import RevealOnScroll from '@/components/ui/RevealOnScroll'
import Breadcrumb from '@/components/ui/Breadcrumb'
import { getArticleBySlug, getAllArticleSlugs } from '@/lib/sanity/queries'
import { SITE } from '@/lib/constants'

interface Props {
  params: Promise<{ slug: string }>
}

const fallbackArticles: Record<string, {
  title: string
  topicBadge: string
  description: string
  readingTime: number
  publishedAt: string
  sections: Array<{ heading: string; content: string; callout?: { title: string; body: string; label?: string } }>
  sidebar?: { required?: string[]; timelines?: Array<{ label: string; value: string }>; related?: Array<{ title: string; href: string }> }
  faqs?: Array<{ question: string; answer: string }>
  howTo?: { name: string; steps: Array<{ name: string; text: string }> }
}> = {
  'mojani-process': {
    title: 'The Mojani Process in Maharashtra: A Complete Technical Guide',
    topicBadge: 'MAHARASHTRA · TILR',
    description: 'An authoritative overview of the official land measurement (Mojani) process in Maharashtra.',
    readingTime: 12,
    publishedAt: 'October 2024',
    sections: [
      {
        heading: '§ 01 Introduction to Mojani',
        content: '\'Mojani\' is the Marathi term for land measurement or land surveying. In Maharashtra, it refers specifically to the official process conducted by the Land Records Department (Bhumi Abhilekh) to determine, verify, or re-establish the boundaries of a land parcel according to government records.\n\nUnderstanding this process is critical for resolving boundary disputes, facilitating property division, and ensuring legal compliance during land development or acquisition.',
      },
      {
        heading: '§ 02 Step-by-Step Procedure',
        content: '',
        callout: { title: 'A. Application Submission', body: 'The process begins with submission of a formal application to the Taluka Inspector of Land Records (TILR) office. The application must explicitly state the purpose of the measurement (e.g., boundary fixing, subdivision, court order).', label: 'Critical Requirement: The application must be signed by all co-owners listed on the 7/12 extract.' },
      },
      {
        heading: 'B. TILR Verification & Fee Payment',
        content: 'Upon receiving the application, the TILR office verifies the submitted documents against their master records. Once verified, a challan is generated for the measurement fees. Fees vary based on urgency (Ordinary, Urgent, or Super Urgent/Tatkal).',
      },
      {
        heading: 'C. The Field Survey',
        content: 'A government surveyor (Bhumi Abhilekh Surveyor) is assigned to conduct the physical measurement. Prior notice is issued to adjacent land owners to ensure transparency.\n\nModern surveys often employ Electronic Total Stations (ETS) or Differential GPS (DGPS) to correlate physical boundaries with historical cadastral maps (Gat maps).',
      },
      {
        heading: 'D. Final Record Generation',
        content: 'After the field survey, the surveyor prepares a \'K-Pratap\' (Measurement Sheet) detailing the findings. This document is officially sanctioned by the TILR, establishing the legally recognized boundaries.',
      },
    ],
    sidebar: {
      required: ['Latest 7/12 Extract (Original)', '8A Extract', 'Village Map (Gat Map) Copy', 'Identity Proof of Applicant'],
      timelines: [
        { label: 'Ordinary', value: '~6 Mo' },
        { label: 'Urgent', value: '~3 Mo' },
        { label: 'Tatkal', value: '~1 Mo' },
      ],
      related: [
        { title: 'Decoding the 7/12 Extract', href: '/knowledge/712-extract' },
        { title: 'DGPS vs. Total Station in Modern Surveying', href: '/knowledge/tilr-guidelines' },
      ],
    },
    faqs: [
      { question: 'What is the Mojani process in Maharashtra?', answer: 'Mojani is the official land measurement process conducted by Maharashtra\'s Land Records Department (Bhumi Abhilekh) to determine, verify, or re-establish a land parcel\'s boundaries according to government records.' },
      { question: 'How long does the Mojani process take?', answer: 'Timelines depend on urgency: roughly 6 months for an Ordinary application, 3 months for Urgent, and around 1 month for Tatkal (super urgent) requests.' },
      { question: 'What documents are needed for Mojani?', answer: 'You need the latest 7/12 extract (original), the 8A extract, a copy of the village map (Gat map), and identity proof of the applicant. The application must be signed by all co-owners listed on the 7/12 extract.' },
      { question: 'What is the fee for a Mojani survey?', answer: 'Fees are set by challan after the TILR office verifies your application, and vary based on the urgency level selected — Ordinary, Urgent, or Tatkal.' },
      { question: 'Who conducts Mojani surveys in Maharashtra?', answer: 'A government surveyor assigned by the Taluka Inspector of Land Records (TILR) office conducts the physical measurement, often using Total Station or DGPS equipment to correlate boundaries with historical cadastral maps.' },
    ],
    howTo: {
      name: 'How to complete the Mojani process in Maharashtra',
      steps: [
        { name: 'Submit Application', text: 'Submit a formal application to the Taluka Inspector of Land Records (TILR) office stating the purpose of measurement, signed by all co-owners listed on the 7/12 extract.' },
        { name: 'TILR Verification & Fee Payment', text: 'The TILR office verifies your documents against master records and issues a challan for the measurement fee based on urgency.' },
        { name: 'Field Survey', text: 'A government surveyor conducts the physical measurement using Total Station or DGPS, after issuing prior notice to adjacent landowners.' },
        { name: 'Final Record Generation', text: 'The surveyor prepares a K-Pratap (Measurement Sheet) sanctioned by the TILR, establishing the legally recognized boundaries.' },
      ],
    },
  },
  'rera-requirements': {
    title: 'RERA Compliance & Precision Surveying',
    topicBadge: 'RERA · REAL ESTATE',
    description: 'A definitive breakdown explaining why ground-based precision is mandatory for RERA-compliant layout plans, accurate carpet area verification, and indisputable final area certifications.',
    readingTime: 8,
    publishedAt: 'October 2024',
    sections: [
      {
        heading: '§ 02 Carpet Area Verification',
        content: 'Under RERA guidelines, the definition of "carpet area" is strictly regulated to exclude external walls, service shafts, and exclusive balconies. Precision surveying using Total Station and 3D Laser Scanning is critical to ensure the physical as-built dimensions exactly match the registered plans.',
        callout: {
          title: 'The Measurement Mandate',
          body: 'Discrepancies between marketed area and actual survey area can lead to severe penalties, mandated refunds to buyers, and project registration suspension. Our millimeter-accurate surveys provide the irrefutable data required for final architect certifications.',
          label: 'TOLERANCE ± 0.001 SQ.M',
        },
      },
      {
        heading: '§ 03 Boundary Demarcation',
        content: 'Before any ground-breaking, RERA requires absolute certainty regarding project boundaries. Encroachments or overlapping claims can halt development indefinitely.\n\nWe utilize DGPS (Differential Global Positioning System) tied to national grid coordinates to establish unquestionable boundary lines, ensuring the layout plan submitted to the authority aligns perfectly with physical reality.',
      },
      {
        heading: '§ 04 As-Built Certification',
        content: 'At project completion, RERA mandates a final \'As-Built\' survey to verify that the constructed structure adheres to the approved plans within permissible tolerances. This is the final hurdle before obtaining occupancy certificates and initiating handovers.',
      },
    ],
    sidebar: {
      related: [
        { title: 'The Mojani Process', href: '/knowledge/mojani-process' },
        { title: 'Boundary Dispute Resolution', href: '/knowledge/boundary-disputes' },
        { title: 'UAV Drone Mapping Accuracy', href: '/knowledge/tilr-guidelines' },
      ],
    },
    faqs: [
      { question: 'What survey is required for RERA registration?', answer: 'RERA registration requires precision boundary demarcation and an accurate layout survey, typically using Total Station or DGPS, to confirm the project boundaries and carpet area match the registered plans.' },
      { question: 'Is a topographic survey mandatory for RERA?', answer: 'While not always explicitly named "topographic," ground-based elevation and boundary data are required to certify layout plans and as-built dimensions for RERA compliance.' },
      { question: 'Who can certify a RERA survey in Maharashtra?', answer: 'A licensed surveyor or registered architect typically certifies the as-built survey and area statements submitted with a RERA application, based on precision field measurements.' },
    ],
  },
  'boundary-disputes': {
    title: 'How to Resolve a Land Boundary Dispute in India',
    topicBadge: 'LAND RECORDS · LEGAL',
    description: 'A complete legal and technical guide to resolving boundary disputes in India — from initial documentation through to court-admissible survey evidence.',
    readingTime: 10,
    publishedAt: 'November 2024',
    sections: [
      {
        heading: '§ 01 Understanding the Nature of the Dispute',
        content: 'Before taking any action, it is essential to understand whether the dispute is a measurement dispute (the boundary markers are in the wrong position) or a title dispute (ownership of the land itself is contested). The resolution path differs significantly.',
      },
      {
        heading: '§ 02 Gather Your Documents',
        content: 'Collect all available title documents: Sale deed or conveyance deed, 7/12 extract (current and historical), Property card (City Survey extract), Approved layout plan, Any previous survey reports.',
      },
      {
        heading: '§ 03 Commission a Private Survey',
        content: 'A private licensed surveyor can conduct an independent measurement to establish the actual boundary position. This survey, while not having the legal weight of a government survey, is invaluable for understanding your legal position before initiating formal proceedings.',
      },
      {
        heading: '§ 04 Apply for a Government Mojani',
        content: 'If the private survey confirms a dispute, the formal resolution path requires applying to the Taluka Inspector of Land Records (TILR) for an official Mojani survey. The K-Pratap document generated from this survey carries statutory legal weight.',
      },
    ],
    faqs: [
      { question: 'How do I resolve a land boundary dispute in India?', answer: 'First determine whether it is a measurement dispute or a title dispute, gather your title documents and past survey reports, commission a private survey to establish the facts, then apply for an official government Mojani survey if the dispute persists.' },
      { question: 'What is the legal process for a boundary dispute?', answer: 'The formal process runs through the Taluka Inspector of Land Records (TILR), who conducts or supervises an official Mojani survey. The resulting K-Pratap document carries statutory legal weight and can be used in court.' },
      { question: 'Is a licensed surveyor required for court proceedings?', answer: 'Yes — court-admissible boundary evidence generally requires a government-sanctioned survey (Mojani) or a report from a licensed surveyor, since private measurements alone do not carry the same statutory weight.' },
    ],
  },
  '712-extract': {
    title: '7/12 Extract: What It Is and How to Get It',
    topicBadge: 'MAHARASHTRA · LAND RECORDS',
    description: 'Complete guide to the 7/12 extract — the foundational land record document for all agricultural and revenue land in Maharashtra.',
    readingTime: 6,
    publishedAt: 'September 2024',
    sections: [
      {
        heading: '§ 01 What is the 7/12 Extract?',
        content: 'The 7/12 extract (Satbara Utara in Marathi) is the fundamental land record document maintained by the Maharashtra Revenue Department. It combines information from two registers: Register 7 (details of the survey number, ownership, and cultivation rights) and Register 12 (details of other rights like mortgages and encumbrances).',
      },
      {
        heading: '§ 02 Information Contained in the 7/12',
        content: 'The document contains: Survey number and area, Owner names and percentage of ownership, Cultivation type (Irrigated/Non-irrigated), Type of land use, Current possessor, Outstanding liabilities or encumbrances, Court orders or government notifications affecting the land.',
      },
      {
        heading: '§ 03 How Surveyors Use the 7/12',
        content: 'For any survey work, the 7/12 extract serves as the primary reference document. It establishes the legal area of the parcel, the survey number, and the legal owners — all of which must match the physical survey findings for the report to be legally complete.',
      },
    ],
    faqs: [
      { question: 'What is the 7/12 extract in Maharashtra?', answer: 'The 7/12 extract (Satbara Utara) is the foundational land record for agricultural and revenue land in Maharashtra, combining Register 7 (survey number, ownership, cultivation rights) and Register 12 (mortgages and other encumbrances).' },
      { question: 'How do I get a 7/12 extract online in Maharashtra?', answer: 'It can be obtained through Maharashtra\'s official land records portal (Bhulekh / Mahabhumi) by searching with the village name, survey number, or owner name.' },
      { question: 'What information does the 7/12 extract contain?', answer: 'It lists the survey number and area, owner names with ownership share, cultivation type, land use, current possessor, outstanding liabilities, and any court orders affecting the land.' },
      { question: 'Is the 7/12 extract required for land purchase?', answer: 'Yes — it is the primary document used to verify legal ownership, area, and encumbrances before any agricultural or revenue land purchase in Maharashtra.' },
    ],
  },
  'tilr-guidelines': {
    title: 'TILR Guidelines Explained',
    topicBadge: 'MAHARASHTRA · REGULATORY',
    description: 'Understanding the role of the Taluka Inspector of Land Records and the guidelines that govern official land measurement in Maharashtra.',
    readingTime: 7,
    publishedAt: 'August 2024',
    sections: [
      {
        heading: '§ 01 Who is the TILR?',
        content: 'The Taluka Inspector of Land Records (TILR) is a government official in Maharashtra\'s revenue hierarchy responsible for maintaining land records and conducting official surveys at the taluka level. Any official land measurement (Mojani) must be conducted or supervised by the TILR or his designated surveyor.',
      },
      {
        heading: '§ 02 TILR Guidelines for Survey Work',
        content: 'Private surveyors working alongside government officials must adhere to TILR guidelines regarding: Survey methodology (Total Station or DGPS), Control point establishment, Boundary marker specifications, Report format and certification requirements.',
      },
    ],
    faqs: [
      { question: 'Who is the TILR in Maharashtra?', answer: 'The Taluka Inspector of Land Records (TILR) is the government official responsible for maintaining land records and conducting or supervising official surveys (Mojani) at the taluka level.' },
      { question: 'What do TILR guidelines cover for private surveyors?', answer: 'TILR guidelines govern survey methodology (Total Station or DGPS), control point establishment, boundary marker specifications, and report format and certification requirements for any survey work tied to official land records.' },
    ],
  },
  'zone-certificate': {
    title: 'Zone Certificate vs Property Card',
    topicBadge: 'MAHARASHTRA · LAND RECORDS',
    description: 'Understanding the critical difference between zone certificates and property cards, and when each is required.',
    readingTime: 5,
    publishedAt: 'July 2024',
    sections: [
      {
        heading: '§ 01 Zone Certificate',
        content: 'A Zone Certificate is issued by the local planning authority (Municipal Corporation or Planning Authority) and certifies the zoning classification of a land parcel. It specifies whether the land falls under Residential, Commercial, Industrial, Agricultural, or other designated zones as per the Development Plan.',
      },
      {
        heading: '§ 02 Property Card',
        content: 'The Property Card (also called City Survey Extract) is a land record document maintained by the City Survey Office for non-agricultural land within municipal limits. It is the urban equivalent of the 7/12 extract and records ownership, area, and any encumbrances on the property.',
      },
      {
        heading: '§ 03 When You Need Each',
        content: 'Zone Certificate: Required before any development permission application, for change of land use applications, for obtaining building permits. Property Card: Required for property registration, bank loans, encumbrance searches, and any survey work on urban non-agricultural land.',
      },
    ],
    faqs: [
      { question: 'What is a Zone Certificate in Maharashtra?', answer: 'A Zone Certificate is issued by the local planning authority and certifies a land parcel\'s zoning classification — Residential, Commercial, Industrial, Agricultural, or another designated zone under the Development Plan.' },
      { question: 'What is the difference between a Zone Certificate and a Property Card?', answer: 'A Zone Certificate confirms zoning classification for development purposes, while a Property Card (City Survey Extract) is the urban land record documenting ownership, area, and encumbrances — the urban equivalent of the 7/12 extract.' },
      { question: 'When do I need a Zone Certificate vs a Property Card?', answer: 'You need a Zone Certificate before development permission, land-use change applications, or building permits. A Property Card is needed for property registration, bank loans, encumbrance searches, and survey work on urban land.' },
    ],
  },
}

export async function generateStaticParams() {
  const slugs = await getAllArticleSlugs()
  const fallbackSlugs = Object.keys(fallbackArticles)
  const allSlugs = [...new Set([...slugs, ...fallbackSlugs])]
  return allSlugs.map((slug) => ({ slug }))
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params
  const article = await getArticleBySlug(slug)
  const fallback = fallbackArticles[slug]

  const title = article?.seo?.metaTitle ?? article?.title ?? fallback?.title ?? 'Article'
  const description = article?.seo?.metaDescription ?? article?.description ?? fallback?.description ?? ''

  return {
    title,
    description,
    alternates: { canonical: `${SITE.url}/knowledge/${slug}` },
  }
}

export default async function ArticlePage({ params }: Props) {
  const { slug } = await params
  const sanityArticle = await getArticleBySlug(slug)
  const fallback = fallbackArticles[slug]

  if (!sanityArticle && !fallback) notFound()

  const article = sanityArticle
  const fb = fallback

  const title = article?.title ?? fb?.title ?? ''
  const badge = article?.topicBadge ?? fb?.topicBadge ?? ''
  const description = article?.description ?? fb?.description ?? ''
  const readingTime = article?.readingTime ?? fb?.readingTime ?? 5
  const publishedAt = fb?.publishedAt ?? (article?.publishedAt ? new Date(article.publishedAt).toLocaleDateString('en-IN', { month: 'long', year: 'numeric' }) : '')

  const faqSchema = fb?.faqs && fb.faqs.length > 0 ? {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: fb.faqs.map((faq) => ({
      '@type': 'Question',
      name: faq.question,
      acceptedAnswer: { '@type': 'Answer', text: faq.answer },
    })),
  } : null

  const howToSchema = fb?.howTo ? {
    '@context': 'https://schema.org',
    '@type': 'HowTo',
    name: fb.howTo.name,
    step: fb.howTo.steps.map((step, i) => ({
      '@type': 'HowToStep',
      position: i + 1,
      name: step.name,
      text: step.text,
    })),
  } : null

  return (
    <>
      {faqSchema && (
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      )}
      {howToSchema && (
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(howToSchema) }} />
      )}
      <Breadcrumb items={[{ name: 'Knowledge', href: '/knowledge' }, { name: title, href: `/knowledge/${slug}` }]} />
      {/* Article hero */}
      <section
        className="pt-40 pb-16"
        style={{ backgroundColor: 'var(--color-surface)', paddingLeft: 'clamp(1rem, 4vw, 4rem)', paddingRight: 'clamp(1rem, 4vw, 4rem)' }}
      >
        <div className="bg-blueprint-light absolute inset-0 opacity-40 pointer-events-none" />
        <RevealOnScroll className="relative z-10">
          <p className="label-caps mb-4" style={{ color: 'var(--color-on-surface-variant)' }}>
            <Link href="/knowledge" style={{ color: 'inherit' }}>KNOWLEDGE CENTER</Link>
            {' '}/{' '}
            <span style={{ color: 'var(--color-brand-gold)' }}>{badge}</span>
          </p>
          <h1
            style={{
              fontFamily: 'var(--font-syne)',
              fontSize: 'clamp(1.75rem, 5vw, 3.5rem)',
              fontWeight: '800',
              textTransform: 'uppercase',
              letterSpacing: '-0.01em',
              color: 'var(--color-on-surface)',
              maxWidth: '800px',
              marginBottom: '1.5rem',
            }}
          >
            {title}
          </h1>
          <p style={{ fontFamily: 'var(--font-jost)', fontSize: '1.1rem', lineHeight: '1.7', color: 'var(--color-on-surface-variant)', maxWidth: '600px', marginBottom: '1.5rem' }}>
            {description}
          </p>
          {publishedAt && (
            <div className="flex items-center gap-6">
              <div style={{ border: '1px solid var(--color-outline)', padding: '0.75rem 1.25rem' }}>
                <div className="label-caps" style={{ color: 'var(--color-on-surface-variant)' }}>PUBLISHED</div>
                <div className="label-caps" style={{ color: 'var(--color-on-surface)', fontWeight: '700' }}>{publishedAt.toUpperCase()}</div>
              </div>
              <span className="label-caps" style={{ color: 'var(--color-brand-slate)' }}>{readingTime} MIN READ</span>
            </div>
          )}
        </RevealOnScroll>
      </section>

      {/* Article body */}
      <section
        className="py-16"
        style={{ backgroundColor: 'var(--color-surface)', paddingLeft: 'clamp(1rem, 4vw, 4rem)', paddingRight: 'clamp(1rem, 4vw, 4rem)' }}
      >
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Main content */}
          <div className="lg:col-span-2">
            {fb?.sections?.map((section, i) => (
              <RevealOnScroll key={i} delay={i * 0.05}>
                <div className="mb-10">
                  <h2
                    style={{
                      fontFamily: 'var(--font-syne)',
                      fontSize: '1.25rem',
                      fontWeight: '700',
                      textTransform: 'uppercase',
                      color: 'var(--color-on-surface)',
                      marginTop: i > 0 ? '3rem' : 0,
                      marginBottom: '1rem',
                      borderBottom: '1px solid var(--color-outline-variant)',
                      paddingBottom: '0.75rem',
                    }}
                  >
                    {section.heading}
                  </h2>
                  {section.content && section.content.split('\n\n').map((para, j) => (
                    <p
                      key={j}
                      style={{
                        fontFamily: 'var(--font-jost)',
                        fontSize: '1rem',
                        lineHeight: '1.8',
                        color: 'var(--color-on-surface-variant)',
                        marginBottom: '1rem',
                      }}
                    >
                      {para}
                    </p>
                  ))}
                  {section.callout && (
                    <div
                      className="my-6 p-6"
                      style={{ border: '1px solid var(--color-outline)', backgroundColor: 'var(--color-surface-container-low)' }}
                    >
                      <h3
                        style={{
                          fontFamily: 'var(--font-syne)',
                          fontSize: '1rem',
                          fontWeight: '700',
                          textTransform: 'uppercase',
                          color: 'var(--color-on-surface)',
                          marginBottom: '0.75rem',
                        }}
                      >
                        {section.callout.title}
                      </h3>
                      <p style={{ fontFamily: 'var(--font-jost)', fontSize: '0.875rem', lineHeight: '1.7', color: 'var(--color-on-surface-variant)', marginBottom: section.callout.label ? '0.75rem' : 0 }}>
                        {section.callout.body}
                      </p>
                      {section.callout.label && (
                        <p className="label-caps text-right" style={{ color: 'var(--color-brand-slate)', opacity: 0.7 }}>
                          {section.callout.label}
                        </p>
                      )}
                    </div>
                  )}
                </div>
              </RevealOnScroll>
            ))}

            {/* Pull quote */}
            <RevealOnScroll>
              <blockquote
                className="my-12"
                style={{
                  fontFamily: 'var(--font-cormorant)',
                  fontSize: '1.375rem',
                  lineHeight: '1.5',
                  fontStyle: 'italic',
                  color: 'var(--color-on-surface)',
                  borderLeft: '2px solid var(--color-brand-gold)',
                  paddingLeft: '1.5rem',
                }}
              >
                &ldquo;Precision at the as-built stage is not merely a technical requirement;
                it is the definitive proof of a developer&apos;s integrity and adherence to
                regulatory commitments.&rdquo;
              </blockquote>
            </RevealOnScroll>

            {/* FAQ */}
            {fb?.faqs && fb.faqs.length > 0 && (
              <RevealOnScroll>
                <div className="mt-12">
                  <h2
                    style={{
                      fontFamily: 'var(--font-syne)',
                      fontSize: '1.25rem',
                      fontWeight: '700',
                      textTransform: 'uppercase',
                      color: 'var(--color-on-surface)',
                      marginBottom: '1.5rem',
                      borderBottom: '1px solid var(--color-outline-variant)',
                      paddingBottom: '0.75rem',
                    }}
                  >
                    § FAQ Frequently Asked Questions
                  </h2>
                  <div className="flex flex-col gap-6">
                    {fb.faqs.map((faq) => (
                      <div key={faq.question}>
                        <h3
                          style={{
                            fontFamily: 'var(--font-syne)',
                            fontSize: '0.95rem',
                            fontWeight: '700',
                            color: 'var(--color-on-surface)',
                            marginBottom: '0.5rem',
                          }}
                        >
                          {faq.question}
                        </h3>
                        <p style={{ fontFamily: 'var(--font-jost)', fontSize: '0.9rem', lineHeight: '1.7', color: 'var(--color-on-surface-variant)' }}>
                          {faq.answer}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              </RevealOnScroll>
            )}
          </div>

          {/* Sidebar */}
          <div className="flex flex-col gap-6">
            {fb?.sidebar?.required && (
              <RevealOnScroll>
                <div style={{ border: '1px solid var(--color-outline)', padding: '1.25rem' }}>
                  <p className="label-caps mb-4" style={{ color: 'var(--color-on-surface-variant)', opacity: 0.6 }}>REQUIRED DOCUMENTS</p>
                  {fb.sidebar.required.map((doc) => (
                    <div key={doc} className="flex items-start gap-3 py-2" style={{ borderBottom: '1px solid var(--color-outline-variant)' }}>
                      <span style={{ color: 'var(--color-brand-gold)', flexShrink: 0, marginTop: '2px' }}>⊙</span>
                      <span style={{ fontFamily: 'var(--font-jost)', fontSize: '0.8rem', color: 'var(--color-on-surface-variant)' }}>{doc}</span>
                    </div>
                  ))}
                </div>
              </RevealOnScroll>
            )}

            {fb?.sidebar?.timelines && (
              <RevealOnScroll delay={0.1}>
                <div style={{ border: '1px solid var(--color-outline)', padding: '1.25rem' }}>
                  <p className="label-caps mb-4" style={{ color: 'var(--color-on-surface-variant)', opacity: 0.6 }}>ESTIMATED TIMELINES</p>
                  {fb.sidebar.timelines.map((t) => (
                    <div key={t.label} className="flex justify-between items-center py-3" style={{ borderBottom: '1px solid var(--color-outline-variant)' }}>
                      <span className="label-caps" style={{ color: 'var(--color-on-surface-variant)' }}>{t.label}</span>
                      <span style={{ fontFamily: 'var(--font-syne)', fontSize: '1.25rem', fontWeight: '700', color: 'var(--color-on-surface)' }}>{t.value}</span>
                    </div>
                  ))}
                </div>
              </RevealOnScroll>
            )}

            {fb?.sidebar?.related && (
              <RevealOnScroll delay={0.15}>
                <div style={{ border: '1px solid var(--color-outline)', padding: '1.25rem' }}>
                  <p className="label-caps mb-4" style={{ color: 'var(--color-on-surface-variant)', opacity: 0.6 }}>RELATED RESOURCES</p>
                  {fb.sidebar.related.map((r) => (
                    <Link key={r.href} href={r.href}>
                      <div
                        className="py-3 flex justify-between items-center"
                        style={{ borderBottom: '1px solid var(--color-outline-variant)' }}
                      >
                        <span style={{ fontFamily: 'var(--font-jost)', fontSize: '0.85rem', color: 'var(--color-on-surface)' }}>{r.title}</span>
                        <span style={{ color: 'var(--color-brand-gold)' }}>→</span>
                      </div>
                    </Link>
                  ))}
                </div>
              </RevealOnScroll>
            )}

            {/* CTA card */}
            <RevealOnScroll delay={0.2}>
              <div style={{ border: '1px solid var(--color-outline)', padding: '1.25rem' }}>
                <div className="flex justify-end mb-3">
                  <span style={{ color: 'var(--color-brand-slate)', fontSize: '1.25rem' }}>⊙</span>
                </div>
                <h3
                  style={{
                    fontFamily: 'var(--font-syne)',
                    fontSize: '1rem',
                    fontWeight: '700',
                    textTransform: 'uppercase',
                    color: 'var(--color-on-surface)',
                    marginBottom: '0.75rem',
                  }}
                >
                  Consult a RERA Expert
                </h3>
                <p style={{ fontFamily: 'var(--font-jost)', fontSize: '0.8rem', lineHeight: '1.6', color: 'var(--color-on-surface-variant)', marginBottom: '1.5rem' }}>
                  Ensure your project&apos;s compliance from day one. Request a precision survey consultation.
                </p>
                <Link href="/contact" className="btn-primary w-full justify-center" style={{ fontSize: '11px' }}>
                  REQUEST CONSULTATION
                </Link>
              </div>
            </RevealOnScroll>
          </div>
        </div>
      </section>
    </>
  )
}
