import { useState } from 'react'
import { Link } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import FadeIn from './FadeIn'
import { useLang } from '../contexts/LanguageContext'
import { t } from '../translations'

/** Tags that link to an explainer page in the IT glossary (/viden). */
const tagLinks: Record<string, string> = {
  'PC-teknik': 'pc-hardware',
  'PC Technology': 'pc-hardware',
  'Komponenter': 'pc-hardware',
  'Components': 'pc-hardware',
  'VMware': 'virtualisering',
  'Active Directory': 'active-directory',
  'DNS/DHCP': 'dhcp',
  'GPO': 'gpo',
  'VPN': 'vpn',
  'Sikkerhed': 'firewall',
  'Security': 'firewall',
  'Backup': 'backup',
  'Netværkssikkerhed': 'firewall',
  'Network Security': 'firewall',
}

export default function ServicesSection() {
  const { lang } = useLang()
  const tx = t[lang].services
  const [hoveredIdx, setHoveredIdx] = useState<number | null>(null)

  return (
    <section
      id="services"
      className="bg-white rounded-t-[40px] sm:rounded-t-[50px] md:rounded-t-[60px] px-5 sm:px-8 md:px-10 pt-14 sm:pt-20 md:pt-24 pb-12 sm:pb-16 md:pb-20"
    >
      <FadeIn delay={0} y={40}>
        <p className="text-center uppercase tracking-widest text-xs sm:text-sm mb-3 font-medium" style={{ color: '#0A0908', opacity: 0.4 }}>
          {tx.sectionLabel}
        </p>
        <h2 className="font-black uppercase text-center mb-10 sm:mb-14 md:mb-16" style={{ color: '#0A0908', fontSize: 'clamp(2.6rem, 10vw, 120px)', letterSpacing: '-0.02em' }}>
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
                style={{ color: '#0A0908', fontSize: 'clamp(1.8rem, 6vw, 110px)' }}
                animate={{ x: hoveredIdx === i ? 8 : 0 }}
                transition={{ duration: 0.25, ease: 'easeOut' }}
              >
                {s.num}
              </motion.span>

              <div className="flex flex-col gap-2 sm:gap-3 pt-1 sm:pt-2 w-full">
                <span className="font-medium uppercase" style={{ color: '#0A0908', fontSize: 'clamp(0.9rem, 2vw, 2.1rem)' }}>
                  {s.name}
                </span>
                <span className="font-light leading-relaxed max-w-2xl" style={{ color: '#0A0908', opacity: 0.6, fontSize: 'clamp(0.8rem, 1.4vw, 1.1rem)' }}>
                  {s.desc}
                </span>
                <div className="flex flex-wrap gap-2 mt-1">
                  {s.tags.map((tag) => {
                    const slug = tagLinks[tag]
                    return slug ? (
                      <Link
                        key={tag}
                        to={`/viden/${slug}`}
                        className="text-xs uppercase tracking-wider px-3 py-1 rounded-full border transition-colors duration-200 hover:border-[#8A7250]"
                        style={{ color: '#0A0908', borderColor: 'rgba(138,114,80,0.55)', opacity: 0.8, textDecoration: 'none' }}
                        title={`Hvad er ${tag}?`}
                      >
                        {tag} <span aria-hidden="true" style={{ color: '#8A7250' }}>↗</span>
                      </Link>
                    ) : (
                      <span key={tag} className="text-xs uppercase tracking-wider px-3 py-1 rounded-full border" style={{ color: '#0A0908', borderColor: 'rgba(12,12,12,0.2)', opacity: 0.7 }}>
                        {tag}
                      </span>
                    )
                  })}
                </div>
              </div>
            </div>
          </FadeIn>
        ))}
      </div>
    </section>
  )
}
