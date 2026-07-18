import { Globe, Menu, X, Download } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'
import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import FadeIn from './FadeIn'
import Magnet from './Magnet'
import ContactButton from './ContactButton'
import { useLang } from '../contexts/LanguageContext'
import { t } from '../translations'

const IMG_FRONT = '/6F4611AC-9D3C-47F1-8BA0-49E69A35BCDE.jpeg' // real photo (default)
const IMG_BACK  = '/f1145949-0bb9-49ee-984f-8586244456a5.png'  // cartoon (on hover)

function FlipAvatar({ className }: { className?: string }) {
  const [flipped, setFlipped] = useState(false)
  const touchStartX = { current: 0 }

  return (
    <div
      className={className}
      style={{ perspective: '800px' }}
      onMouseEnter={() => setFlipped(true)}
      onMouseLeave={() => setFlipped(false)}
      onTouchStart={(e) => { touchStartX.current = e.touches[0].clientX }}
      onTouchEnd={(e) => {
        if (Math.abs(touchStartX.current - e.changedTouches[0].clientX) > 40)
          setFlipped(f => !f)
      }}
    >
      <motion.div
        animate={{ rotateY: flipped ? 180 : 0 }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        style={{ transformStyle: 'preserve-3d', position: 'relative' }}
        className="w-full h-full"
      >
        <img
          src={IMG_FRONT}
          alt="Alireza Makvandi"
          className="w-full h-full object-cover"
          style={{ borderRadius: '3px', backfaceVisibility: 'hidden', WebkitBackfaceVisibility: 'hidden' }}
        />
        <img
          src={IMG_BACK}
          alt="Alireza Makvandi"
          className="absolute inset-0 w-full h-full object-cover"
          style={{ borderRadius: '3px', backfaceVisibility: 'hidden', WebkitBackfaceVisibility: 'hidden', transform: 'rotateY(180deg)' }}
        />
      </motion.div>
    </div>
  )
}

/** Polaroid-framed portrait with a handwritten-style caption. */
function PolaroidPortrait({ caption, className = '' }: { caption: string; className?: string }) {
  return (
    <motion.div
      initial={{ rotate: -2.5 }}
      whileHover={{ rotate: 0, scale: 1.015 }}
      transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
      className={`polaroid ${className}`}
    >
      <div className="aspect-[4/5] overflow-hidden" style={{ borderRadius: '3px' }}>
        <FlipAvatar className="w-full h-full" />
      </div>
      <div className="polaroid-caption">{caption}</div>
    </motion.div>
  )
}

function AnimatedHeading({ text }: { text: string }) {
  const words = text.split(' ')
  return (
    <span className="inline-flex flex-wrap justify-center gap-x-[0.22em]">
      {words.map((word, i) => (
        <motion.span
          key={i}
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 + i * 0.1, duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
          className="inline-block"
        >
          {word}
        </motion.span>
      ))}
    </span>
  )
}

function scrollTo(id: string) {
  const el = document.getElementById(id)
  if (!el) return
  const top = el.getBoundingClientRect().top + window.scrollY - 64
  window.scrollTo({ top, behavior: 'smooth' })
}

export default function HeroSection() {
  const { lang, toggle } = useLang()
  const navigate = useNavigate()
  const tx = t[lang]
  const [menuOpen, setMenuOpen] = useState(false)

  // Lock body scroll while the mobile menu is open
  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [menuOpen])

  const navItems = [
    { key: 'about', label: tx.nav.about, route: '/about' },
    { key: 'experience', label: tx.nav.experience, route: '' },
    { key: 'projects', label: tx.nav.projects, route: '' },
    { key: 'recommendations', label: tx.recommendations.navLabel, route: '/recommendations' },
    { key: 'contact', label: tx.nav.contact, route: '' },
  ]

  function handleNav(key: string, route: string) {
    setMenuOpen(false)
    if (route) navigate(route)
    else scrollTo(key)
  }

  return (
    <>
      {/* Fixed Nav */}
      <nav className="site-nav">
        {/* Brand (mobile) */}
        <button
          onClick={() => { setMenuOpen(false); window.scrollTo({ top: 0, behavior: 'smooth' }) }}
          className="sm:hidden"
          style={{ color: '#E8DDD0', fontSize: '12px', letterSpacing: '0.22em', textTransform: 'uppercase', fontWeight: 700 }}
        >
          Alireza M.
        </button>

        {/* Desktop links */}
        <div className="hidden sm:flex gap-9">
          {navItems.slice(0, 4).map(({ key, label, route }) => (
            <a
              key={key}
              href={route || `#${key}`}
              onClick={(e) => { e.preventDefault(); handleNav(key, route) }}
              className="transition-opacity duration-200 hover:opacity-50"
              style={{ color: '#E8DDD0', fontSize: '11px', letterSpacing: '0.2em', textTransform: 'uppercase', fontWeight: 500 }}
            >
              {label}
            </a>
          ))}
        </div>

        <div className="flex items-center gap-5 sm:gap-7">
          {/* Desktop contact */}
          <a
            href="#contact"
            onClick={(e) => { e.preventDefault(); handleNav('contact', '') }}
            className="hidden sm:inline transition-opacity duration-200 hover:opacity-50"
            style={{ color: '#E8DDD0', fontSize: '11px', letterSpacing: '0.2em', textTransform: 'uppercase', fontWeight: 500 }}
          >
            {tx.nav.contact}
          </a>
          <button
            onClick={toggle}
            className="flex items-center gap-1.5 transition-opacity duration-200 hover:opacity-50"
            style={{ color: '#E8DDD0', fontSize: '10px', letterSpacing: '0.2em', textTransform: 'uppercase', fontWeight: 600 }}
            title={lang === 'da' ? 'Switch to English' : 'Skift til dansk'}
            aria-label={lang === 'da' ? 'Switch to English' : 'Skift til dansk'}
          >
            <Globe size={11} strokeWidth={1.5} />
            {lang === 'da' ? 'EN' : 'DA'}
          </button>
          {/* Mobile menu button */}
          <button
            onClick={() => setMenuOpen(o => !o)}
            className="sm:hidden flex items-center justify-center"
            style={{ color: '#E8DDD0' }}
            aria-label="Menu"
          >
            {menuOpen ? <X size={20} strokeWidth={1.6} /> : <Menu size={20} strokeWidth={1.6} />}
          </button>
        </div>
      </nav>

      {/* Mobile menu overlay */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="sm:hidden fixed inset-0 z-[99] flex flex-col items-center justify-center gap-7"
            style={{ background: 'rgba(10,9,8,0.97)', backdropFilter: 'blur(8px)' }}
          >
            {navItems.map(({ key, label, route }, i) => (
              <motion.a
                key={key}
                href={route || `#${key}`}
                onClick={(e) => { e.preventDefault(); handleNav(key, route) }}
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.06 + i * 0.05 }}
                style={{ color: '#E8DDD0', fontSize: '22px', letterSpacing: '0.12em', textTransform: 'uppercase', fontWeight: 600 }}
              >
                {label}
              </motion.a>
            ))}
          </motion.div>
        )}
      </AnimatePresence>

      <section className="min-h-screen flex flex-col overflow-x-clip relative" style={{ background: '#0A0908', paddingTop: '56px' }}>

        {/* Subtle warm vignette — no orbs */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{ background: 'radial-gradient(ellipse 70% 60% at 65% 10%, rgba(160,130,80,0.05) 0%, transparent 60%)' }}
        />
        {/* Dot grid texture */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            backgroundImage: 'radial-gradient(rgba(232,224,213,0.04) 1px, transparent 1px)',
            backgroundSize: '28px 28px',
          }}
        />
        {/* Noise texture overlay */}
        <div
          className="absolute inset-0 pointer-events-none z-[1]"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' opacity='1'/%3E%3C/svg%3E")`,
            backgroundSize: '200px 200px',
            opacity: 0.025,
            mixBlendMode: 'overlay',
          }}
        />

        {/* Single semantic page heading (visual headings below are decorative) */}
        <h1 className="sr-only">Alireza Makvandi — {tx.hero.role}</h1>

        {/* ── MOBILE layout ── */}
        <div className="flex flex-col items-center px-5 pt-8 pb-12 gap-6 sm:hidden flex-1 justify-center relative z-10">

          <FadeIn delay={0.15} y={20}>
            <PolaroidPortrait
              caption={lang === 'da' ? 'Det er mig — Aarhus N' : "That's me — Aarhus N"}
              className="w-44"
            />
          </FadeIn>

          <FadeIn delay={0.3} y={10}>
            <p className="serif-accent text-center" style={{ color: '#C9A96E', fontSize: '1.15rem', opacity: 0.9 }}>
              {lang === 'da' ? 'Hej — jeg hedder' : 'Hi — my name is'}
            </p>
          </FadeIn>

          <div className="text-center -mt-2">
            <div
              aria-hidden="true"
              className="hero-heading font-black uppercase tracking-tight leading-none"
              style={{ fontSize: '13vw' }}
            >
              <AnimatedHeading key={lang} text="Alireza" />
            </div>
            <div aria-hidden="true" className="serif-accent leading-none" style={{ color: '#E8DDD0', fontSize: '14.5vw', marginTop: '-0.02em' }}>
              Makvandi
            </div>
          </div>

          <FadeIn delay={0.5} y={20}>
            <p
              className="text-center font-light uppercase text-center"
              style={{ color: '#E8DDD0', opacity: 0.38, fontSize: '10px', letterSpacing: '0.32em', lineHeight: 1.8 }}
            >
              {tx.hero.role}
            </p>
          </FadeIn>

          <FadeIn delay={0.65} y={20}>
            <div className="flex items-center gap-3">
              <ContactButton label={tx.hero.cta} />
              <a
                href="/cv-alireza-makvandi.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 rounded-full"
                style={{ color: '#E8DDD0', padding: '11px 18px', fontSize: '10px', letterSpacing: '0.16em', textTransform: 'uppercase', fontWeight: 500, border: '1px solid rgba(201,169,110,0.45)' }}
              >
                <Download size={12} strokeWidth={1.8} style={{ color: '#C9A96E' }} />
                CV
              </a>
            </div>
          </FadeIn>

          {/* Available for work — mobile */}
          <motion.div
            className="w-full"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.9, duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          >
            <div
              className="rounded-[14px] px-5 py-4 flex items-center justify-between"
              style={{ background: 'rgba(232,224,213,0.04)', border: '1px solid rgba(232,224,213,0.08)' }}
            >
              <div className="flex flex-col gap-1">
                <div className="flex items-center gap-2">
                  <span className="relative flex h-1.5 w-1.5">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-60" />
                    <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-emerald-400" />
                  </span>
                  <span style={{ color: '#6ee7b7', fontSize: '9px', letterSpacing: '0.3em', textTransform: 'uppercase', fontWeight: 600 }}>
                    {lang === 'da' ? 'Klar til nye muligheder' : 'Open to opportunities'}
                  </span>
                </div>
                <p style={{ color: '#E8DDD0', opacity: 0.45, fontSize: '12px', fontWeight: 300, letterSpacing: '0.02em' }}>
                  {lang === 'da' ? 'IT Support · Aarhus, DK' : 'IT Support · Aarhus, DK'}
                </p>
              </div>
            </div>
          </motion.div>

        </div>

        {/* ── DESKTOP layout — centered, balanced ── */}
        <div className="hidden sm:flex sm:flex-1 items-center justify-center px-10 md:px-14 relative z-10">
          <div className="w-full max-w-5xl grid grid-cols-[1.25fr_1fr] gap-10 md:gap-14 items-center">

            {/* Left — identity */}
            <div className="flex flex-col">
              <FadeIn delay={0.2} y={16}>
                <div className="flex items-center gap-2.5 mb-7">
                  <span className="relative flex h-1.5 w-1.5">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-60" />
                    <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-emerald-400" />
                  </span>
                  <span style={{ color: '#6ee7b7', fontSize: '10px', letterSpacing: '0.32em', textTransform: 'uppercase', fontWeight: 600 }}>
                    {lang === 'da' ? 'Klar til nye muligheder' : 'Open to opportunities'}
                  </span>
                </div>
              </FadeIn>

              <FadeIn delay={0.28} y={12}>
                <p
                  className="serif-accent mb-3"
                  style={{ color: '#C9A96E', fontSize: 'clamp(1.15rem, 1.7vw, 1.55rem)', opacity: 0.9 }}
                >
                  {lang === 'da' ? 'Hej — jeg hedder' : 'Hi — my name is'}
                </p>
              </FadeIn>

              <div className="overflow-hidden">
                <div
                  aria-hidden="true"
                  className="hero-heading font-black uppercase tracking-tight leading-[0.92]"
                  style={{ fontSize: 'clamp(2.6rem, 6vw, 5.8rem)', letterSpacing: '-0.02em' }}
                >
                  <span className="block"><AnimatedHeading text="Alireza" /></span>
                </div>
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.32, duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
                  aria-hidden="true"
                  className="serif-accent leading-[1.05]"
                  style={{ color: '#E8DDD0', fontSize: 'clamp(2.9rem, 6.6vw, 6.4rem)', marginTop: '-0.06em' }}
                >
                  Makvandi
                </motion.div>
              </div>

              <FadeIn delay={0.55} y={16}>
                <div className="mt-6 flex items-center gap-4">
                  <div className="w-10 h-px" style={{ background: 'rgba(201,169,110,0.5)' }} />
                  <p
                    className="font-light uppercase"
                    style={{ color: '#E8DDD0', opacity: 0.5, fontSize: 'clamp(0.7rem, 1vw, 0.9rem)', letterSpacing: '0.26em' }}
                  >
                    {tx.hero.role}
                  </p>
                </div>
              </FadeIn>

              {/* Credibility row */}
              <FadeIn delay={0.65} y={16}>
                <div className="flex flex-wrap gap-2.5 mt-8">
                  {[
                    lang === 'da' ? 'Nyuddannet 2026' : 'Newly qualified 2026',
                    'Aarhus Tech',
                    'YouSee · Fourcom',
                  ].map((chip) => (
                    <span
                      key={chip}
                      style={{ color: '#E8DDD0', opacity: 0.5, fontSize: '10px', letterSpacing: '0.16em', textTransform: 'uppercase', padding: '6px 14px', border: '1px solid rgba(232,224,213,0.12)', borderRadius: '100px' }}
                    >
                      {chip}
                    </span>
                  ))}
                </div>
              </FadeIn>

              <FadeIn delay={0.8} y={16}>
                <div className="flex items-center gap-5 mt-10">
                  <ContactButton label={tx.hero.cta} />
                  <a
                    href="/cv-alireza-makvandi.pdf"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 rounded-full transition-colors duration-300 hover:opacity-70"
                    style={{ color: '#E8DDD0', padding: '12px 22px', fontSize: '11px', letterSpacing: '0.18em', textTransform: 'uppercase', fontWeight: 500, border: '1px solid rgba(201,169,110,0.45)' }}
                  >
                    <Download size={13} strokeWidth={1.8} style={{ color: '#C9A96E' }} />
                    {tx.hero.downloadCv}
                  </a>
                </div>
              </FadeIn>
            </div>

            {/* Right — polaroid portrait */}
            <div className="flex justify-center">
              <Magnet
                padding={120}
                strength={2}
                activeTransition="transform 0.3s ease-out"
                inactiveTransition="transform 0.6s ease-in-out"
                className="w-[260px] md:w-[300px] lg:w-[330px]"
              >
                <FadeIn delay={0.45} y={30}>
                  <PolaroidPortrait caption={lang === 'da' ? 'Det er mig — Aarhus N, 2026' : "That's me — Aarhus N, 2026"} />
                </FadeIn>
              </Magnet>
            </div>

          </div>
        </div>

      </section>
    </>
  )
}
