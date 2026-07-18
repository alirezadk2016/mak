import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { ArrowLeft } from 'lucide-react'
import { useLang } from '../contexts/LanguageContext'

const content = {
  da: {
    heading: 'Siden blev ikke fundet',
    body: 'Siden, du leder efter, findes ikke eller er blevet flyttet.',
    cta: 'Tilbage til forsiden',
  },
  en: {
    heading: 'Page not found',
    body: 'The page you are looking for does not exist or has been moved.',
    cta: 'Back to homepage',
  },
}

export default function NotFound() {
  const { lang } = useLang()
  const c = content[lang]

  return (
    <main
      style={{ background: '#0A0908', minHeight: '100vh' }}
      className="flex flex-col items-center justify-center px-6 text-center relative overflow-hidden"
    >
      {/* Subtle warm glow */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{ background: 'radial-gradient(ellipse 60% 50% at 50% 40%, rgba(201,169,110,0.06) 0%, transparent 60%)' }}
      />

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        className="relative z-10 flex flex-col items-center gap-6"
      >
        <span
          className="hero-heading font-black leading-none"
          style={{ fontSize: 'clamp(5rem, 20vw, 12rem)', letterSpacing: '-0.04em' }}
        >
          404
        </span>

        <div className="w-10 h-px" style={{ background: 'rgba(201,169,110,0.5)' }} />

        <h1 className="serif-accent" style={{ color: '#E8DDD0', fontSize: 'clamp(1.5rem, 3.4vw, 2.3rem)' }}>
          {c.heading}
        </h1>
        <p style={{ color: '#E8DDD0', opacity: 0.45, fontSize: 'clamp(0.9rem, 1.4vw, 1.05rem)', fontWeight: 300, maxWidth: '380px', lineHeight: 1.7 }}>
          {c.body}
        </p>

        <Link
          to="/"
          className="inline-flex items-center gap-2.5 rounded-full transition-opacity hover:opacity-70 mt-2"
          style={{ color: '#E8DDD0', padding: '13px 26px', fontSize: '12px', letterSpacing: '0.15em', textTransform: 'uppercase', fontWeight: 500, border: '1px solid rgba(201,169,110,0.4)', background: 'rgba(201,169,110,0.08)' }}
        >
          <ArrowLeft size={14} strokeWidth={1.8} style={{ color: '#C9A96E' }} />
          {c.cta}
        </Link>
      </motion.div>
    </main>
  )
}
