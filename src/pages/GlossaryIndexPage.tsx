import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { ArrowLeft, ArrowUpRight, BookOpen } from 'lucide-react'
import { useLang } from '../contexts/LanguageContext'
import { glossary } from '../data/glossary'

export default function GlossaryIndexPage() {
  const { lang } = useLang()

  return (
    <main style={{ background: '#0A0908', minHeight: '100vh' }} className="px-5 sm:px-10 md:px-16 py-10 sm:py-16">

      {/* Back */}
      <motion.div initial={{ opacity: 0, x: -16 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.4 }}>
        <Link
          to="/"
          className="inline-flex items-center gap-2 mb-10 sm:mb-14 transition-opacity hover:opacity-60"
          style={{ color: '#E8DDD0', opacity: 0.45, fontSize: '12px', letterSpacing: '0.2em', textTransform: 'uppercase' }}
        >
          <ArrowLeft size={13} strokeWidth={1.8} />
          {lang === 'da' ? 'Tilbage' : 'Back'}
        </Link>
      </motion.div>

      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
          <p className="serif-accent mb-2" style={{ color: '#C9A96E', fontSize: 'clamp(1.05rem, 1.6vw, 1.4rem)', opacity: 0.85 }}>
            {lang === 'da' ? 'teknik, forklaret enkelt' : 'tech, explained simply'}
          </p>
          <h1
            className="hero-heading font-black uppercase leading-none mb-6"
            style={{ fontSize: 'clamp(2.6rem, 9vw, 6.5rem)', letterSpacing: '-0.03em' }}
          >
            {lang === 'da' ? 'IT-ordbog' : 'IT Glossary'}
          </h1>
          <p
            className="font-light leading-relaxed max-w-xl mb-12 sm:mb-16"
            style={{ color: '#E8DDD0', opacity: 0.45, fontSize: 'clamp(0.9rem, 1.4vw, 1.05rem)', lineHeight: 1.8 }}
          >
            {lang === 'da'
              ? 'De vigtigste begreber fra min hverdag som IT-supporter, forklaret uden teknisk jargon, og med eksempler på, hvordan jeg selv har brugt dem i praksis.'
              : 'The most important concepts from my everyday life as an IT supporter, explained without technical jargon, with examples of how I have used them in practice.'}
          </p>
        </motion.div>

        {/* Term cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
          {glossary.map((t, i) => (
            <motion.div
              key={t.slug}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.45, delay: (i % 2) * 0.06 }}
            >
              <Link to={`/viden/${t.slug}`} className="block group">
                <div
                  className="relative rounded-[18px] p-6 overflow-hidden transition-transform duration-300 group-hover:-translate-y-1"
                  style={{ background: 'rgba(232,224,213,0.035)', border: '1px solid rgba(232,224,213,0.09)' }}
                >
                  <div className="absolute top-0 left-0 right-0 h-[2px] origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-500"
                    style={{ background: `linear-gradient(to right, ${t.accent}, transparent 80%)` }} />
                  <div className="flex items-center justify-between mb-3">
                    <span style={{ color: t.accent, fontSize: '9px', letterSpacing: '0.25em', textTransform: 'uppercase', fontWeight: 700, opacity: 0.9 }}>
                      {t.category[lang]}
                    </span>
                    <ArrowUpRight size={14} strokeWidth={1.8}
                      className="opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                      style={{ color: t.accent }} />
                  </div>
                  <h2 style={{ color: '#E8DDD0', fontSize: '19px', fontWeight: 700, letterSpacing: '-0.01em', marginBottom: '4px' }}>
                    {t.name}
                  </h2>
                  {t.full && (
                    <p style={{ color: '#E8DDD0', opacity: 0.35, fontSize: '11px', marginBottom: '10px' }}>{t.full}</p>
                  )}
                  <p style={{ color: '#E8DDD0', opacity: 0.5, fontSize: '13px', lineHeight: 1.65, fontWeight: 300 }}>
                    {t.what[lang].split('. ')[0]}.
                  </p>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>

        {/* Note */}
        <motion.div
          initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="flex items-center gap-3 mt-10"
        >
          <BookOpen size={14} strokeWidth={1.5} style={{ color: '#C9A96E', opacity: 0.7 }} />
          <span style={{ color: '#E8DDD0', opacity: 0.3, fontSize: '11px', fontWeight: 300 }}>
            {lang === 'da' ? 'Baseret på min uddannelse og praktiske erfaring.' : 'Based on my education and hands-on experience.'}
          </span>
        </motion.div>
      </div>
    </main>
  )
}
