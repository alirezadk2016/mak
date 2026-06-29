import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { ArrowLeft, Quote, FileText, BadgeCheck } from 'lucide-react'
import { useLang } from '../contexts/LanguageContext'
import { t } from '../translations'

const accents: Record<string, string> = {
  'YouSee — Nuuday A/S': '#E4002B',
}

export default function RecommendationsPage() {
  const { lang } = useLang()
  const tx = t[lang].recommendations

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
          <p style={{ color: '#E8DDD0', opacity: 0.22, fontSize: '10px', letterSpacing: '0.35em', textTransform: 'uppercase', marginBottom: '14px' }}>
            {tx.navLabel}
          </p>
          <h1
            className="hero-heading font-black uppercase leading-none mb-6"
            style={{ fontSize: 'clamp(2.6rem, 9vw, 7rem)', letterSpacing: '-0.03em' }}
          >
            {tx.heading}
          </h1>
          <p
            className="font-light leading-relaxed max-w-xl mb-12 sm:mb-16"
            style={{ color: '#E8DDD0', opacity: 0.4, fontSize: 'clamp(0.9rem, 1.4vw, 1.05rem)', lineHeight: 1.8 }}
          >
            {tx.subheading}
          </p>
        </motion.div>

        {/* Cards */}
        <div className="flex flex-col gap-5">
          {tx.items.map((item, i) => {
            const accent = accents[item.company] ?? '#C9A96E'
            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 28 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.15 + i * 0.1, ease: [0.22, 1, 0.36, 1] }}
                className="relative rounded-[24px] p-7 sm:p-10 overflow-hidden"
                style={{ background: 'linear-gradient(160deg, rgba(232,224,213,0.05) 0%, rgba(232,224,213,0.015) 100%)', border: '1px solid rgba(232,224,213,0.09)' }}
              >
                <div className="absolute top-0 left-0 right-0 h-[2px]" style={{ background: `linear-gradient(to right, ${accent}, transparent 70%)` }} />

                <div className="flex items-center justify-between mb-6">
                  <Quote size={30} strokeWidth={1.3} style={{ color: accent, opacity: 0.55 }} />
                  <div className="flex items-center gap-1.5">
                    <BadgeCheck size={14} style={{ color: accent, opacity: 0.8 }} />
                    <span style={{ color: '#E8DDD0', opacity: 0.35, fontSize: '9px', letterSpacing: '0.2em', textTransform: 'uppercase' }}>
                      {lang === 'da' ? 'Officiel' : 'Official'}
                    </span>
                  </div>
                </div>

                <p
                  className="font-light leading-relaxed mb-8"
                  style={{ color: '#E8DDD0', opacity: 0.78, fontSize: 'clamp(0.95rem, 1.6vw, 1.2rem)', lineHeight: 1.85 }}
                >
                  {item.quote}
                </p>

                <div className="flex flex-wrap items-center justify-between gap-4 pt-6" style={{ borderTop: '1px solid rgba(232,224,213,0.08)' }}>
                  <div className="flex items-center gap-3.5">
                    <div
                      className="w-11 h-11 rounded-full flex items-center justify-center flex-shrink-0"
                      style={{ background: `${accent}1A`, border: `1px solid ${accent}40` }}
                    >
                      <span style={{ color: accent, fontSize: '15px', fontWeight: 700 }}>
                        {item.company.charAt(0)}
                      </span>
                    </div>
                    <div className="flex flex-col">
                      <span style={{ color: '#E8DDD0', opacity: 0.9, fontSize: '14px', fontWeight: 600 }}>
                        {item.name}
                      </span>
                      <span style={{ color: '#E8DDD0', opacity: 0.4, fontSize: '11px', letterSpacing: '0.02em' }}>
                        {item.role} · {item.company} · {item.period}
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
                      className="inline-flex items-center gap-2 rounded-full transition-colors duration-300"
                      style={{ color: '#E8DDD0', padding: '9px 18px', fontSize: '11px', letterSpacing: '0.12em', textTransform: 'uppercase', fontWeight: 500, border: `1px solid ${accent}50`, background: `${accent}12` }}
                    >
                      <FileText size={13} strokeWidth={1.8} style={{ color: accent }} />
                      {tx.viewPdf}
                    </motion.a>
                  )}
                </div>
              </motion.div>
            )
          })}
        </div>

        {/* Note */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="flex items-center gap-3 mt-10 sm:mt-14"
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
