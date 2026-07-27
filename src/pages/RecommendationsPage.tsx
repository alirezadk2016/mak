import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { ArrowLeft, FileText, BadgeCheck, Mail, Globe } from 'lucide-react'
import { useLang } from '../contexts/LanguageContext'
import { t } from '../translations'

// Brand accent per company (visual only, content is untouched).
const accents: Record<string, string> = {
  'YouSee, Nuuday A/S': '#E4002B',
}

export default function RecommendationsPage() {
  const { lang, toggle } = useLang()
  const tx = t[lang].recommendations

  return (
    <main style={{ background: '#0A0908', minHeight: '100vh' }} className="px-5 sm:px-10 md:px-16 py-10 sm:py-16">

      {/* Top bar: back + language */}
      <motion.div
        initial={{ opacity: 0, y: -8 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.4 }}
        className="flex items-center justify-between mb-10 sm:mb-14"
      >
        <Link
          to="/"
          className="inline-flex items-center gap-2 transition-opacity hover:opacity-60"
          style={{ color: '#E8DDD0', opacity: 0.45, fontSize: '12px', letterSpacing: '0.2em', textTransform: 'uppercase' }}
        >
          <ArrowLeft size={13} strokeWidth={1.8} />
          {lang === 'da' ? 'Tilbage' : 'Back'}
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
          <div className="flex items-center gap-3 mb-5">
            <div className="w-6 h-px" style={{ background: 'rgba(201,169,110,0.5)' }} />
            <span style={{ color: '#C9A96E', opacity: 0.85, fontSize: '10px', letterSpacing: '0.38em', textTransform: 'uppercase', fontWeight: 500 }}>
              {tx.navLabel}
            </span>
          </div>
          <h1
            className="hero-heading font-black uppercase leading-none mb-6"
            style={{ fontSize: 'clamp(2.6rem, 9vw, 7rem)', letterSpacing: '-0.03em' }}
          >
            {tx.heading}
          </h1>
          <p
            className="font-light leading-relaxed max-w-xl mb-12 sm:mb-16"
            style={{ color: '#E8DDD0', opacity: 0.42, fontSize: 'clamp(0.9rem, 1.4vw, 1.05rem)', lineHeight: 1.8 }}
          >
            {tx.subheading}
          </p>
        </motion.div>

        {/* Recommendation letters */}
        <div className="flex flex-col gap-8">
          {tx.items.map((item, i) => {
            const accent = accents[item.company] ?? '#C9A96E'
            return (
              <motion.article
                key={i}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.15 + i * 0.1, ease: [0.22, 1, 0.36, 1] }}
                className="relative rounded-[20px] overflow-hidden"
                style={{
                  background: 'linear-gradient(168deg, #F3ECDF 0%, #E9E0D0 100%)',
                  boxShadow: '0 30px 60px -20px rgba(0,0,0,0.6), 0 0 0 1px rgba(0,0,0,0.04)',
                }}
              >
                {/* Letterhead accent bar */}
                <div className="h-1.5" style={{ background: `linear-gradient(to right, ${accent}, ${accent}55 60%, transparent)` }} />

                <div className="p-7 sm:p-11">
                  {/* Letterhead: official label + verified seal */}
                  <div className="flex items-start justify-between mb-7">
                    <div>
                      <p style={{ color: '#8a7f6c', fontSize: '9px', letterSpacing: '0.32em', textTransform: 'uppercase', fontWeight: 700, marginBottom: '4px' }}>
                        {lang === 'da' ? 'Officiel anbefaling' : 'Official recommendation'}
                      </p>
                      <p style={{ color: '#1c2530', fontSize: '15px', fontWeight: 700, letterSpacing: '-0.01em' }}>
                        {item.company}
                      </p>
                    </div>
                    <div
                      className="flex items-center gap-1.5 rounded-full flex-shrink-0"
                      style={{ padding: '5px 11px', background: `${accent}14`, border: `1px solid ${accent}40` }}
                    >
                      <BadgeCheck size={13} style={{ color: accent }} />
                      <span style={{ color: accent, fontSize: '9px', letterSpacing: '0.18em', textTransform: 'uppercase', fontWeight: 700 }}>
                        {lang === 'da' ? 'Verificeret' : 'Verified'}
                      </span>
                    </div>
                  </div>

                  {/* Decorative opening quote */}
                  <div
                    className="font-black leading-none mb-2 select-none"
                    style={{ color: accent, opacity: 0.22, fontSize: '68px', height: '38px' }}
                    aria-hidden="true"
                  >
                    &ldquo;
                  </div>

                  {/* Quote, content untouched */}
                  <p
                    className="mb-9"
                    style={{ color: '#2b2b2b', fontSize: 'clamp(1rem, 1.7vw, 1.22rem)', lineHeight: 1.9, fontWeight: 400, fontStyle: 'italic' }}
                  >
                    {item.quote}
                  </p>

                  {/* Signature block */}
                  <div
                    className="flex flex-wrap items-center justify-between gap-5 pt-7"
                    style={{ borderTop: '1px solid rgba(28,37,48,0.12)' }}
                  >
                    <div className="flex items-center gap-4">
                      <div
                        className="w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0"
                        style={{ background: `${accent}18`, border: `1.5px solid ${accent}55` }}
                      >
                        <span style={{ color: accent, fontSize: '17px', fontWeight: 800 }}>
                          {item.name.charAt(0)}
                        </span>
                      </div>
                      <div className="flex flex-col">
                        <span style={{ color: '#1c2530', fontSize: '15px', fontWeight: 700, letterSpacing: '-0.01em' }}>
                          {item.name}
                        </span>
                        <span style={{ color: '#6f6857', fontSize: '12px', fontWeight: 500 }}>
                          {item.role} · {item.period}
                        </span>
                      </div>
                    </div>

                    {item.pdf && (
                      <motion.a
                        href={item.pdf}
                        target="_blank"
                        rel="noopener noreferrer"
                        whileHover={{ scale: 1.04 }}
                        whileTap={{ scale: 0.97 }}
                        className="inline-flex items-center gap-2 rounded-full"
                        style={{ color: '#F3ECDF', padding: '11px 20px', fontSize: '11px', letterSpacing: '0.12em', textTransform: 'uppercase', fontWeight: 600, background: '#1c2530' }}
                      >
                        <FileText size={13} strokeWidth={2} style={{ color: accent }} />
                        {tx.viewPdf}
                      </motion.a>
                    )}
                  </div>
                </div>
              </motion.article>
            )
          })}
        </div>

        {/* Reference contact */}
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.35 }}
          className="mt-8 rounded-[18px] p-6 sm:p-8 flex flex-wrap items-center justify-between gap-5"
          style={{ background: 'rgba(232,224,213,0.04)', border: '1px solid rgba(232,224,213,0.1)' }}
        >
          <div className="flex items-start gap-4">
            <div
              className="w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5"
              style={{ background: 'rgba(201,169,110,0.12)', border: '1px solid rgba(201,169,110,0.35)' }}
            >
              <Mail size={16} strokeWidth={1.6} style={{ color: '#C9A96E' }} />
            </div>
            <div>
              <p style={{ color: '#C9A96E', opacity: 0.75, fontSize: '9px', letterSpacing: '0.28em', textTransform: 'uppercase', marginBottom: '8px', fontWeight: 600 }}>
                {tx.referenceLabel}
              </p>
              <p style={{ color: '#E8DDD0', opacity: 0.55, fontSize: '13px', marginBottom: '6px', fontWeight: 300 }}>
                {tx.referenceText}
              </p>
              <p style={{ color: '#E8DDD0', opacity: 0.9, fontSize: '14px', fontWeight: 600 }}>
                {tx.referenceName} <span style={{ opacity: 0.4, fontWeight: 400 }}>· {tx.referenceRole}</span>
              </p>
            </div>
          </div>
          <a
            href={`mailto:${tx.referenceEmail}`}
            className="inline-flex items-center gap-2 rounded-full transition-opacity hover:opacity-70"
            style={{ color: '#C9A96E', padding: '10px 18px', fontSize: '12px', fontWeight: 500, border: '1px solid rgba(201,169,110,0.4)', background: 'rgba(201,169,110,0.08)' }}
          >
            {tx.referenceEmail}
          </a>
        </motion.div>

        {/* Note */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.45 }}
          className="flex items-center gap-3 mt-8"
        >
          <span className="relative flex h-1.5 w-1.5">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-amber-300 opacity-50" />
            <span className="relative inline-flex rounded-full h-1.5 w-1.5" style={{ background: '#C9A96E' }} />
          </span>
          <span style={{ color: '#E8DDD0', opacity: 0.3, fontSize: '11px', letterSpacing: '0.05em', fontWeight: 300 }}>
            {tx.note}
          </span>
        </motion.div>
      </div>
    </main>
  )
}
