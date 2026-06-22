import { Globe } from 'lucide-react'
import { motion } from 'framer-motion'
import { useState } from 'react'
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
          className="w-full h-full rounded-full object-cover border-2"
          style={{ borderColor: 'rgba(215,226,234,0.2)', backfaceVisibility: 'hidden', WebkitBackfaceVisibility: 'hidden' }}
        />
        <img
          src={IMG_BACK}
          alt="Alireza Makvandi"
          className="absolute inset-0 w-full h-full rounded-full object-cover border-2"
          style={{ borderColor: 'rgba(215,226,234,0.2)', backfaceVisibility: 'hidden', WebkitBackfaceVisibility: 'hidden', transform: 'rotateY(180deg)' }}
        />
      </motion.div>
    </div>
  )
}

function AnimatedHeading({ text }: { text: string }) {
  const words = text.split(' ')
  return (
    <span className="inline-flex flex-wrap justify-center gap-x-[0.25em]">
      {words.map((word, i) => (
        <motion.span
          key={i}
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.15 + i * 0.12, duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
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
  const top = el.getBoundingClientRect().top + window.scrollY - 80
  window.scrollTo({ top, behavior: 'smooth' })
}

export default function HeroSection() {
  const { lang, toggle } = useLang()
  const tx = t[lang]

  return (
    <section className="min-h-screen flex flex-col overflow-x-clip relative" style={{ background: '#0C0C0C' }}>

      {/* Glowing orbs */}
      <motion.div
        className="absolute pointer-events-none rounded-full"
        style={{
          width: '60vw',
          height: '60vw',
          top: '-15%',
          left: '-10%',
          background: 'radial-gradient(circle, #3d0066 0%, transparent 70%)',
          opacity: 0.18,
          filter: 'blur(40px)',
        }}
        animate={{ x: [0, 30, 0], y: [0, 20, 0] }}
        transition={{ duration: 18, repeat: Infinity, ease: 'easeInOut' }}
      />
      <motion.div
        className="absolute pointer-events-none rounded-full"
        style={{
          width: '50vw',
          height: '50vw',
          top: '20%',
          right: '-10%',
          background: 'radial-gradient(circle, #001a4d 0%, transparent 70%)',
          opacity: 0.22,
          filter: 'blur(50px)',
        }}
        animate={{ x: [0, -25, 0], y: [0, 30, 0] }}
        transition={{ duration: 22, repeat: Infinity, ease: 'easeInOut', delay: 3 }}
      />
      <motion.div
        className="absolute pointer-events-none rounded-full"
        style={{
          width: '35vw',
          height: '35vw',
          bottom: '-5%',
          left: '30%',
          background: 'radial-gradient(circle, #0a0040 0%, transparent 70%)',
          opacity: 0.15,
          filter: 'blur(60px)',
        }}
        animate={{ x: [0, 20, 0], y: [0, -20, 0] }}
        transition={{ duration: 15, repeat: Infinity, ease: 'easeInOut', delay: 6 }}
      />

      {/* Noise texture overlay */}
      <div
        className="absolute inset-0 pointer-events-none z-[1]"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' opacity='1'/%3E%3C/svg%3E")`,
          backgroundSize: '200px 200px',
          opacity: 0.03,
          mixBlendMode: 'overlay',
        }}
      />

      {/* Navbar */}
      <FadeIn delay={0} y={-20}>
        <nav className="flex justify-between items-center px-5 sm:px-8 md:px-10 pt-5 sm:pt-6 md:pt-8 relative z-30">
          <div className="flex gap-4 sm:gap-8 md:gap-10">
            {[
              { key: 'about', label: tx.nav.about },
              { key: 'experience', label: tx.nav.experience },
              { key: 'projects', label: tx.nav.projects },
            ].map(({ key, label }) => (
              <a
                key={key}
                href={`#${key}`}
                onClick={(e) => { e.preventDefault(); scrollTo(key) }}
                className="text-xs sm:text-lg lg:text-[1.4rem] font-medium uppercase tracking-wider transition-opacity duration-200 hover:opacity-70"
                style={{ color: '#D7E2EA' }}
              >
                {label}
              </a>
            ))}
          </div>

          <div className="flex items-center gap-3 sm:gap-6">
            <a
              href="#contact"
              onClick={(e) => { e.preventDefault(); scrollTo('contact') }}
              className="text-xs sm:text-lg lg:text-[1.4rem] font-medium uppercase tracking-wider transition-opacity duration-200 hover:opacity-70"
              style={{ color: '#D7E2EA' }}
            >
              {tx.nav.contact}
            </a>

            {/* Language switcher */}
            <button
              onClick={toggle}
              className="flex items-center gap-1 sm:gap-1.5 px-2 sm:px-3 py-1 sm:py-1.5 rounded-full border transition-all duration-200 hover:opacity-70 flex-shrink-0"
              style={{ borderColor: 'rgba(215,226,234,0.25)', color: '#D7E2EA' }}
              title={lang === 'da' ? 'Switch to English' : 'Skift til dansk'}
            >
              <Globe size={13} strokeWidth={1.5} />
              <span className="text-[10px] sm:text-xs font-semibold uppercase tracking-widest">
                {lang === 'da' ? 'EN' : 'DA'}
              </span>
            </button>
          </div>
        </nav>
      </FadeIn>

      {/* ── MOBILE layout ── */}
      <div className="flex flex-col items-center px-5 pt-4 pb-10 gap-5 sm:hidden flex-1 justify-start mt-6 relative z-10">

        <FadeIn delay={0.2} y={20}>
          <FlipAvatar className="w-52 h-52" />
        </FadeIn>

        <h1
          className="hero-heading font-black uppercase tracking-tight leading-none text-center"
          style={{ fontSize: '14vw', color: '#D7E2EA' }}
        >
          <AnimatedHeading key={tx.hero.heading} text={tx.hero.heading} />
        </h1>

        <FadeIn delay={0.6} y={20}>
          <p
            className="text-center font-light uppercase tracking-widest text-xs leading-relaxed max-w-[260px]"
            style={{ color: '#D7E2EA', opacity: 0.5 }}
          >
            {tx.hero.role}
          </p>
        </FadeIn>

        <FadeIn delay={0.75} y={20}>
          <ContactButton label={tx.hero.cta} />
        </FadeIn>

      </div>

      {/* ── DESKTOP layout ── */}
      <div className="hidden sm:flex sm:flex-col sm:flex-1 relative z-10">

        <div className="overflow-hidden">
          <h1
            className="hero-heading font-black uppercase tracking-tight leading-none whitespace-nowrap w-full text-center mt-4 md:-mt-5"
            style={{ fontSize: 'clamp(12vw, 17.5vw, 17.5vw)', color: '#D7E2EA' }}
          >
            <AnimatedHeading key={tx.hero.heading} text={tx.hero.heading} />
          </h1>
        </div>

        <Magnet
          padding={150}
          strength={3}
          activeTransition="transform 0.3s ease-out"
          inactiveTransition="transform 0.6s ease-in-out"
          className="absolute left-1/2 -translate-x-1/2 z-10 bottom-0 w-[280px] md:w-[340px] lg:w-[400px]"
        >
          <FadeIn delay={0.6} y={30}>
            <FlipAvatar className="w-full aspect-square" />
          </FadeIn>
        </Magnet>

        <div className="mt-auto flex justify-between items-end px-8 md:px-10 pb-8 md:pb-10 relative z-20 gap-4">
          <FadeIn delay={0.55} y={20}>
            <p
              className="font-light uppercase tracking-wide leading-snug max-w-[200px] md:max-w-[280px]"
              style={{ color: '#D7E2EA', fontSize: 'clamp(0.7rem, 1.2vw, 1.1rem)' }}
            >
              {tx.hero.role}
            </p>
          </FadeIn>
          <FadeIn delay={0.7} y={20}>
            <ContactButton label={tx.hero.cta} />
          </FadeIn>
        </div>
      </div>

    </section>
  )
}
