import { Globe, Menu, X } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import FadeIn from './FadeIn'
import Magnet from './Magnet'
import ContactButton from './ContactButton'
import { useLang } from '../contexts/LanguageContext'
import { t } from '../translations'

const IMG_FRONT = '/f1145949-0bb9-49ee-984f-8586244456a5.png'
const IMG_BACK  = '/6F4611AC-9D3C-47F1-8BA0-49E69A35BCDE.jpeg'

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
          className="w-full h-full rounded-full object-cover"
          style={{ border: '1px solid rgba(232,224,213,0.15)', backfaceVisibility: 'hidden', WebkitBackfaceVisibility: 'hidden' }}
        />
        <img
          src={IMG_BACK}
          alt="Alireza Makvandi"
          className="absolute inset-0 w-full h-full rounded-full object-cover"
          style={{ border: '1px solid rgba(232,224,213,0.15)', backfaceVisibility: 'hidden', WebkitBackfaceVisibility: 'hidden', transform: 'rotateY(180deg)' }}
        />
      </motion.div>
    </div>
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

  const navItems = [
    { key: 'about', label: tx.nav.about, route: '' },
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

        {/* ── MOBILE layout ── */}
        <div className="flex flex-col items-center px-5 pt-8 pb-12 gap-6 sm:hidden flex-1 justify-center relative z-10">

          <FadeIn delay={0.15} y={20}>
            <div
              className="rounded-full p-[2px]"
              style={{ background: 'linear-gradient(155deg, rgba(201,169,110,0.5) 0%, rgba(232,224,213,0.08) 50%, rgba(201,169,110,0.25) 100%)' }}
            >
              <div className="rounded-full p-1.5" style={{ background: '#0A0908' }}>
                <FlipAvatar className="w-40 h-40" />
              </div>
            </div>
          </FadeIn>

          <h1
            className="hero-heading font-black uppercase tracking-tight leading-none text-center"
            style={{ fontSize: '13.5vw' }}
          >
            <AnimatedHeading key={tx.hero.heading} text={tx.hero.heading} />
          </h1>

          <FadeIn delay={0.5} y={20}>
            <p
              className="text-center font-light uppercase text-center"
              style={{ color: '#E8DDD0', opacity: 0.38, fontSize: '10px', letterSpacing: '0.32em', lineHeight: 1.8 }}
            >
              {tx.hero.role}
            </p>
          </FadeIn>

          <FadeIn delay={0.65} y={20}>
            <ContactButton label={tx.hero.cta} />
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

              <div className="overflow-hidden">
                <h1
                  className="hero-heading font-black uppercase tracking-tight leading-[0.9]"
                  style={{ fontSize: 'clamp(2.6rem, 6vw, 5.8rem)', letterSpacing: '-0.02em' }}
                >
                  <span className="block"><AnimatedHeading text="Alireza" /></span>
                  <span className="block"><AnimatedHeading text="Makvandi" /></span>
                </h1>
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
                    lang === 'da' ? '10 års erfaring' : '10 yrs experience',
                    'Aarhus Tech 2026',
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
                <div className="flex items-center gap-8 mt-10">
                  <ContactButton label={tx.hero.cta} />
                  <span className="flex-shrink-0" style={{ color: '#E8DDD0', opacity: 0.3, fontSize: '11px', letterSpacing: '0.12em' }}>
                    Aarhus · DK
                  </span>
                </div>
              </FadeIn>
            </div>

            {/* Right — portrait with frame */}
            <div className="flex justify-center">
              <Magnet
                padding={120}
                strength={2}
                activeTransition="transform 0.3s ease-out"
                inactiveTransition="transform 0.6s ease-in-out"
                className="w-[300px] md:w-[340px] lg:w-[380px]"
              >
                <FadeIn delay={0.45} y={30}>
                  <div
                    className="rounded-full p-[3px]"
                    style={{ background: 'linear-gradient(155deg, rgba(201,169,110,0.5) 0%, rgba(232,224,213,0.08) 45%, rgba(201,169,110,0.25) 100%)' }}
                  >
                    <div className="rounded-full p-2" style={{ background: '#0A0908' }}>
                      <FlipAvatar className="w-full aspect-square" />
                    </div>
                  </div>
                </FadeIn>
              </Magnet>
            </div>

          </div>
        </div>

      </section>
    </>
  )
}
