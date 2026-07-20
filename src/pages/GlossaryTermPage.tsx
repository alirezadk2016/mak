import { Link, useParams, Navigate } from 'react-router-dom'
import { motion } from 'framer-motion'
import { ArrowLeft, Lightbulb, Wrench, HelpCircle, ArrowUpRight } from 'lucide-react'
import { useLang } from '../contexts/LanguageContext'
import { Globe } from 'lucide-react'
import { glossaryBySlug } from '../data/glossary'

export default function GlossaryTermPage() {
  const { slug } = useParams()
  const { lang, toggle } = useLang()
  const term = slug ? glossaryBySlug[slug] : undefined

  if (!term) return <Navigate to="/viden" replace />

  const sections = [
    { icon: HelpCircle, label: { da: 'Hvad er det?', en: 'What is it?' }, text: term.what },
    { icon: Lightbulb, label: { da: 'Hvorfor er det vigtigt?', en: 'Why does it matter?' }, text: term.why },
    { icon: Wrench, label: { da: 'Sådan har jeg brugt det', en: 'How I have used it' }, text: term.how },
  ]

  return (
    <main style={{ background: '#0A0908', minHeight: '100vh' }} className="px-5 sm:px-10 md:px-16 py-10 sm:py-16">

      {/* Top bar: back + language */}
      <motion.div
        initial={{ opacity: 0, y: -8 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.4 }}
        className="flex items-center justify-between mb-10 sm:mb-14"
      >
        <Link
          to="/viden"
          className="inline-flex items-center gap-2 transition-opacity hover:opacity-60"
          style={{ color: '#E8DDD0', opacity: 0.45, fontSize: '12px', letterSpacing: '0.2em', textTransform: 'uppercase' }}
        >
          <ArrowLeft size={13} strokeWidth={1.8} />
          {lang === 'da' ? 'IT-ordbog' : 'IT Glossary'}
        </Link>
        <button
          onClick={toggle}
          className="inline-flex items-center gap-1.5 transition-opacity hover:opacity-60"
          style={{ color: '#E8DDD0', opacity: 0.45, fontSize: '11px', letterSpacing: '0.2em', textTransform: 'uppercase', fontWeight: 600 }}
          aria-label={lang === 'da' ? 'Switch to English' : 'Skift til dansk'}
        >
          <Globe size={12} strokeWidth={1.5} />
          {lang === 'da' ? 'EN' : 'DA'}
        </button>
      </motion.div>

      <div className="max-w-3xl mx-auto">
        {/* Header */}
        <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
          <span style={{ color: term.accent, fontSize: '10px', letterSpacing: '0.3em', textTransform: 'uppercase', fontWeight: 700 }}>
            {term.category[lang]}
          </span>
          <h1
            className="hero-heading font-black uppercase leading-none mt-3 mb-2"
            style={{ fontSize: 'clamp(2.6rem, 9vw, 6rem)', letterSpacing: '-0.03em' }}
          >
            {term.name}
          </h1>
          {term.full && (
            <p className="serif-accent mb-10" style={{ color: '#C9A96E', fontSize: 'clamp(1rem, 1.5vw, 1.3rem)', opacity: 0.8 }}>
              {term.full}
            </p>
          )}
        </motion.div>

        {/* Sections */}
        <div className="flex flex-col gap-4 mt-8">
          {sections.map((s, i) => {
            const Icon = s.icon
            return (
              <motion.section
                key={i}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.55, delay: 0.15 + i * 0.1 }}
                className="rounded-[20px] p-6 sm:p-8"
                style={{
                  background: i === 2
                    ? `linear-gradient(160deg, ${term.accent}14 0%, rgba(232,224,213,0.02) 100%)`
                    : 'rgba(232,224,213,0.035)',
                  border: i === 2 ? `1px solid ${term.accent}35` : '1px solid rgba(232,224,213,0.09)',
                }}
              >
                <div className="flex items-center gap-2.5 mb-4">
                  <Icon size={16} strokeWidth={1.6} style={{ color: term.accent, opacity: 0.9 }} />
                  <h2 style={{ color: '#E8DDD0', opacity: 0.9, fontSize: '13px', fontWeight: 700, letterSpacing: '0.08em', textTransform: 'uppercase' }}>
                    {s.label[lang]}
                  </h2>
                </div>
                <p style={{ color: '#E8DDD0', opacity: 0.65, fontSize: 'clamp(0.95rem, 1.5vw, 1.1rem)', lineHeight: 1.85, fontWeight: 300 }}>
                  {s.text[lang]}
                </p>
              </motion.section>
            )
          })}
        </div>

        {/* Related terms */}
        {term.related.length > 0 && (
          <motion.div
            initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.5 }}
            className="mt-10"
          >
            <p style={{ color: '#E8DDD0', opacity: 0.3, fontSize: '10px', letterSpacing: '0.3em', textTransform: 'uppercase', marginBottom: '12px' }}>
              {lang === 'da' ? 'Relaterede begreber' : 'Related terms'}
            </p>
            <div className="flex flex-wrap gap-2">
              {term.related.map((slug) => {
                const rel = glossaryBySlug[slug]
                if (!rel) return null
                return (
                  <Link
                    key={slug}
                    to={`/viden/${slug}`}
                    className="inline-flex items-center gap-1.5 rounded-full transition-opacity hover:opacity-70"
                    style={{ color: '#E8DDD0', opacity: 0.75, padding: '8px 16px', fontSize: '12px', fontWeight: 500, border: `1px solid ${rel.accent}45`, background: `${rel.accent}10` }}
                  >
                    {rel.name}
                    <ArrowUpRight size={11} strokeWidth={1.8} style={{ color: rel.accent }} />
                  </Link>
                )
              })}
            </div>
          </motion.div>
        )}

        {/* Author note */}
        <motion.p
          initial={{ opacity: 0 }} animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="serif-accent mt-12"
          style={{ color: '#E8DDD0', opacity: 0.35, fontSize: '15px' }}
        >
          {lang === 'da' ? '— Alireza Makvandi, IT-supporter i Aarhus' : '— Alireza Makvandi, IT supporter in Aarhus'}
        </motion.p>
      </div>
    </main>
  )
}
