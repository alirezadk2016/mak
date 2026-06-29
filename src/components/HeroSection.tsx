import { Globe } from 'lucide-react'
import { motion } from 'framer-motion'
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

  return (
    <>
      {/* Fixed Nav */}
      <nav className="site-nav">
        <div className="flex gap-5 sm:gap-9">
          {[
            { key: 'about', label: tx.nav.about, mobile: true, route: '' },
            { key: 'experience', label: tx.nav.experience, mobile: true, route: '' },
            { key: 'projects', label: tx.nav.projects, mobile: true, route: '' },
            { key: 'recommendations', label: tx.recommendations.navLabel, mobile: false, route: '/recommendations' },
          ].map(({ key, label, mobile, route }) => (
            <a
              key={key}
              href={route || `#${key}`}
              onClick={(e) => { e.preventDefault(); route ? navigate(route) : scrollTo(key) }}
              className={`transition-opacity duration-200 hover:opacity-50 ${mobile ? '' : 'hidden sm:inline'}`}
              style={{ color: '#E8DDD0', fontSize: '11px', letterSpacing: '0.2em', textTransform: 'uppercase', fontWeight: 500 }}
            >
              {label}
            </a>
          ))}
        </div>

        <div className="flex items-center gap-5 sm:gap-7">
          <a
            href="#contact"
            onClick={(e) => { e.preventDefault(); scrollTo('contact') }}
            className="transition-opacity duration-200 hover:opacity-50"
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
        </div>
      </nav>

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
        <div className="flex flex-col items-center px-5 pt-6 pb-10 gap-5 sm:hidden flex-1 justify-start relative z-10">

          <FadeIn delay={0.15} y={20}>
            <FlipAvatar className="w-44 h-44" />
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

        {/* ── DESKTOP layout ── */}
        <div className="hidden sm:flex sm:flex-col sm:flex-1 relative z-10">

          <div className="overflow-hidden">
            <h1
              className="hero-heading font-black uppercase tracking-tight leading-none whitespace-nowrap w-full text-center mt-2 md:-mt-4"
              style={{ fontSize: 'clamp(12vw, 17.5vw, 17.5vw)' }}
            >
              <AnimatedHeading key={tx.hero.heading} text={tx.hero.heading} />
            </h1>
          </div>

          {/* Thin divider under name */}
          <motion.div
            initial={{ scaleX: 0, opacity: 0 }}
            animate={{ scaleX: 1, opacity: 1 }}
            transition={{ delay: 0.7, duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
            className="mx-8 md:mx-12 h-px"
            style={{ background: 'rgba(232,224,213,0.08)', transformOrigin: 'left' }}
          />

          <Magnet
            padding={150}
            strength={3}
            activeTransition="transform 0.3s ease-out"
            inactiveTransition="transform 0.6s ease-in-out"
            className="absolute left-1/2 -translate-x-1/2 z-10 bottom-0 w-[260px] md:w-[320px] lg:w-[380px]"
          >
            <FadeIn delay={0.5} y={30}>
              <FlipAvatar className="w-full aspect-square" />
            </FadeIn>
          </Magnet>

          <div className="mt-auto flex justify-between items-end px-8 md:px-12 pb-8 md:pb-10 relative z-20 gap-4">
            <div className="flex flex-col gap-2">
              <FadeIn delay={0.5} y={20}>
                <div className="flex items-center gap-2 mb-1">
                  <span className="relative flex h-1.5 w-1.5">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-60" />
                    <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-emerald-400" />
                  </span>
                  <span style={{ color: '#6ee7b7', fontSize: '9px', letterSpacing: '0.3em', textTransform: 'uppercase', fontWeight: 600 }}>
                    {lang === 'da' ? 'Klar til nye muligheder' : 'Open to opportunities'}
                  </span>
                </div>
              </FadeIn>
              <FadeIn delay={0.55} y={20}>
                <p
                  className="font-light uppercase leading-snug"
                  style={{ color: '#E8DDD0', opacity: 0.35, fontSize: '10px', letterSpacing: '0.28em' }}
                >
                  {tx.hero.role}
                </p>
              </FadeIn>
            </div>
            <FadeIn delay={0.7} y={20}>
              <ContactButton label={tx.hero.cta} />
            </FadeIn>
          </div>
        </div>

      </section>
    </>
  )
}
