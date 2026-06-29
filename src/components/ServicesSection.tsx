import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import FadeIn from './FadeIn'
import { useLang } from '../contexts/LanguageContext'
import { t } from '../translations'

export default function ServicesSection() {
  const { lang } = useLang()
  const tx = t[lang].services
  const [hoveredIdx, setHoveredIdx] = useState<number | null>(null)

  return (
    <section
      id="services"
      className="bg-white rounded-t-[40px] sm:rounded-t-[50px] md:rounded-t-[60px] px-5 sm:px-8 md:px-10 py-20 sm:py-24 md:py-32"
    >
      <FadeIn delay={0} y={40}>
        <p className="text-center uppercase tracking-widest text-sm mb-3 font-medium" style={{ color: '#0C0C0C', opacity: 0.4 }}>
          {tx.sectionLabel}
        </p>
        <h2 className="font-black uppercase text-center mb-16 sm:mb-20 md:mb-28" style={{ color: '#0C0C0C', fontSize: 'clamp(3rem, 12vw, 160px)' }}>
          {tx.heading}
        </h2>
      </FadeIn>

      <div className="max-w-5xl mx-auto">
        {tx.items.map((s, i) => (
          <FadeIn key={s.num} delay={i * 0.08} y={20}>
            <div
              className="relative flex items-start gap-4 sm:gap-6 md:gap-10 py-7 sm:py-10 md:py-12 cursor-default overflow-hidden"
              style={{
                borderBottom: '1px solid rgba(12,12,12,0.12)',
                borderTop: i === 0 ? '1px solid rgba(12,12,12,0.12)' : undefined,
              }}
              onMouseEnter={() => setHoveredIdx(i)}
              onMouseLeave={() => setHoveredIdx(null)}
            >
              {/* Left border highlight */}
              <motion.div
                className="absolute left-0 top-0 w-[3px] rounded-full"
                style={{ background: 'linear-gradient(180deg, #C9A96E, #8A7250)', originY: 0 }}
                initial={{ scaleY: 0, opacity: 0 }}
                animate={hoveredIdx === i ? { scaleY: 1, opacity: 1 } : { scaleY: 0, opacity: 0 }}
                transition={{ duration: 0.28, ease: [0.22, 1, 0.36, 1] }}
              />

              <motion.span
                className="font-black leading-none flex-shrink-0"
                style={{ color: '#0C0C0C', fontSize: 'clamp(1.8rem, 6vw, 110px)' }}
                animate={{ x: hoveredIdx === i ? 8 : 0 }}
                transition={{ duration: 0.25, ease: 'easeOut' }}
              >
                {s.num}
              </motion.span>

              <div className="flex flex-col gap-2 sm:gap-3 pt-1 sm:pt-2 w-full">
                <span className="font-medium uppercase" style={{ color: '#0C0C0C', fontSize: 'clamp(0.9rem, 2vw, 2.1rem)' }}>
                  {s.name}
                </span>
                <span className="font-light leading-relaxed max-w-2xl" style={{ color: '#0C0C0C', opacity: 0.6, fontSize: 'clamp(0.8rem, 1.4vw, 1.1rem)' }}>
                  {s.desc}
                </span>
                <div className="flex flex-wrap gap-2 mt-1">
                  {s.tags.map((tag) => (
                    <span key={tag} className="text-xs uppercase tracking-wider px-3 py-1 rounded-full border" style={{ color: '#0C0C0C', borderColor: 'rgba(12,12,12,0.2)', opacity: 0.7 }}>
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </FadeIn>
        ))}
      </div>
    </section>
  )
}
