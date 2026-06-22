import { Link } from 'react-router-dom'
import { motion, useMotionValue, useScroll, useSpring, useTransform } from 'framer-motion'
import { useRef } from 'react'
import FadeIn from './FadeIn'
import { useLang } from '../contexts/LanguageContext'
import { t } from '../translations'

const screenshots: Record<string, string> = {
  yousee: 'https://image.thum.io/get/width/1280/crop/720/https://yousee.dk/',
  fourcom: 'https://image.thum.io/get/width/1280/crop/720/https://en.fourcom.dk/',
  folkehuse: 'https://image.thum.io/get/width/1280/crop/720/https://folkehuse.aarhus.dk/',
  aarhustech: 'https://image.thum.io/get/width/1280/crop/720/https://www.aarhustech.dk/',
}

const accentColors: Record<string, string> = {
  yousee: '#E4002B',
  fourcom: '#0057B8',
  folkehuse: '#2E7D32',
  aarhustech: '#FF6B00',
}

function TiltCard({ exp, viewDetails, index, total }: { exp: { slug: string; company: string; role: string; period: string }; viewDetails: string; index: number; total: number }) {
  const ref = useRef<HTMLDivElement>(null)
  const cardRef = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({ target: cardRef, offset: ['start end', 'end start'] })
  const targetScale = 1 - (total - 1 - index) * 0.03
  const scale = useTransform(scrollYProgress, [0, 1], [1, targetScale])

  const x = useMotionValue(0)
  const y = useMotionValue(0)

  const rotateX = useSpring(useTransform(y, [-0.5, 0.5], [8, -8]), { stiffness: 200, damping: 20 })
  const rotateY = useSpring(useTransform(x, [-0.5, 0.5], [-8, 8]), { stiffness: 200, damping: 20 })
  const glowX = useTransform(x, [-0.5, 0.5], [0, 100])
  const glowY = useTransform(y, [-0.5, 0.5], [0, 100])

  function handleMouseMove(e: React.MouseEvent<HTMLDivElement>) {
    if (!ref.current) return
    const rect = ref.current.getBoundingClientRect()
    x.set((e.clientX - rect.left) / rect.width - 0.5)
    y.set((e.clientY - rect.top) / rect.height - 0.5)
  }

  function handleMouseLeave() {
    x.set(0)
    y.set(0)
  }

  const accent = accentColors[exp.slug]

  return (
    <div ref={cardRef} style={{ height: 'min(62vh, 460px)', paddingTop: index * 16 + 'px' }} className="flex items-start justify-center relative">

      {/* Glass spacer — fills the gap between cards */}
      {index < total - 1 && (
        <div
          className="absolute left-0 right-0 pointer-events-none"
          style={{
            top: 'calc(min(62vh, 460px) * 0.55)',
            bottom: 0,
            background: 'linear-gradient(to bottom, transparent 0%, rgba(12,12,12,0.4) 30%, rgba(12,12,12,0.7) 60%, rgba(12,12,12,0.95) 100%)',
            backdropFilter: 'blur(8px)',
            WebkitBackdropFilter: 'blur(8px)',
            zIndex: 1,
          }}
        />
      )}

      <motion.div style={{ scale, top: 80 + index * 16 + 'px', position: 'sticky', width: '100%', zIndex: 2 }}>
    <Link to={'/experience/' + exp.slug} className="block" style={{ perspective: '800px' }}>
      {/* Desktop: tilt card */}
      <motion.div
        ref={ref}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        style={{ rotateX, rotateY, transformStyle: 'preserve-3d' }}
        className="hidden sm:block relative rounded-[24px] border-2 border-[#D7E2EA]/15 overflow-hidden cursor-pointer"
      >
        <motion.div
          className="absolute inset-0 pointer-events-none z-10"
          style={{
            background: useTransform(
              [glowX, glowY],
              ([gx, gy]) => `radial-gradient(circle at ${gx}% ${gy}%, rgba(215,226,234,0.08) 0%, transparent 60%)`
            ),
          }}
        />
        <div className="relative overflow-hidden" style={{ aspectRatio: '16/9' }}>
          <motion.img
            src={screenshots[exp.slug]}
            alt={exp.company}
            className="w-full h-full object-cover"
            style={{ scale: useSpring(useTransform(x, [-0.5, 0.5], [1.04, 1.04]), { stiffness: 150, damping: 20 }) }}
            whileHover={{ scale: 1.06 }}
            transition={{ duration: 0.4 }}
          />
          <motion.div
            className="absolute inset-0 flex items-center justify-center"
            initial={{ opacity: 0 }}
            whileHover={{ opacity: 1 }}
            transition={{ duration: 0.2 }}
            style={{ background: 'rgba(0,0,0,0.55)' }}
          >
            <span className="text-white text-sm font-medium uppercase tracking-widest border border-white/60 rounded-full px-5 py-2">
              {viewDetails}
            </span>
          </motion.div>
          <motion.div
            className="absolute top-0 left-0 right-0 h-0.5"
            initial={{ scaleX: 0 }}
            whileHover={{ scaleX: 1 }}
            transition={{ duration: 0.4 }}
            style={{ background: accent, transformOrigin: 'left' }}
          />
        </div>
        <div className="p-5 relative" style={{ transform: 'translateZ(10px)' }}>
          <div className="flex items-center justify-between mb-2">
            <p className="text-[#D7E2EA]/40 uppercase tracking-widest text-xs">{exp.period}</p>
            <span className="w-2 h-2 rounded-full" style={{ background: accent }} />
          </div>
          <h3 className="text-[#D7E2EA] font-bold text-base uppercase mb-0.5">{exp.company}</h3>
          <p className="text-[#D7E2EA]/55 text-sm">{exp.role}</p>
        </div>
      </motion.div>

      {/* Mobile: horizontal card with accent bar + tap animation */}
      <motion.div
        whileTap={{ scale: 0.97 }}
        className="sm:hidden relative rounded-[20px] overflow-hidden border border-[#D7E2EA]/12 flex"
        style={{ background: '#111' }}
      >
        {/* Accent left bar */}
        <div className="w-1 flex-shrink-0" style={{ background: accent }} />

        {/* Screenshot thumbnail */}
        <div className="relative flex-shrink-0 overflow-hidden" style={{ width: '48%', aspectRatio: '4/3' }}>
          <img
            src={screenshots[exp.slug]}
            alt={exp.company}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0" style={{ background: 'linear-gradient(to right, transparent 60%, #111 100%)' }} />
        </div>

        {/* Info */}
        <div className="flex flex-col justify-center px-4 py-4 flex-1 min-w-0">
          <span className="text-[10px] uppercase tracking-widest mb-1" style={{ color: accent, opacity: 0.85 }}>
            {exp.period}
          </span>
          <h3 className="text-[#D7E2EA] font-bold text-sm uppercase leading-tight mb-1">{exp.company}</h3>
          <p className="text-[#D7E2EA]/45 text-xs leading-snug truncate">{exp.role}</p>
          <div className="flex items-center gap-1 mt-3">
            <span className="text-[9px] uppercase tracking-widest" style={{ color: accent, opacity: 0.7 }}>{viewDetails}</span>
            <span style={{ color: accent, opacity: 0.7, fontSize: '10px' }}>→</span>
          </div>
        </div>
      </motion.div>
    </Link>
    </motion.div>
    </div>
  )
}

export default function ExperienceSection() {
  const { lang } = useLang()
  const tx = t[lang].experience

  return (
    <section
      id="experience"
      className="px-5 sm:px-8 md:px-10 py-20 sm:py-24 md:py-32 relative z-10"
      style={{ background: '#0C0C0C' }}
    >
      <FadeIn delay={0} y={40}>
        <h2
          className="hero-heading font-black uppercase leading-none tracking-tight text-center mb-6"
          style={{ fontSize: 'clamp(3rem, 12vw, 160px)', color: '#D7E2EA' }}
        >
          {tx.heading}
        </h2>
      </FadeIn>
      <FadeIn delay={0.15} y={20}>
        <p
          className="text-center max-w-xl mx-auto mb-16 sm:mb-20 md:mb-28 font-light leading-relaxed"
          style={{ color: '#D7E2EA', opacity: 0.4, fontSize: 'clamp(0.85rem, 1.4vw, 1.05rem)' }}
        >
          {tx.subheading}
        </p>
      </FadeIn>

      <div className="flex flex-col max-w-4xl mx-auto">
        {tx.items.map((exp, i) => (
          <TiltCard key={i} exp={exp} viewDetails={tx.viewDetails} index={i} total={tx.items.length} />
        ))}
      </div>
    </section>
  )
}
