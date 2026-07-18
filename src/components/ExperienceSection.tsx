import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { ArrowUpRight } from 'lucide-react'
import FadeIn from './FadeIn'
import BrandCover from './BrandCover'
import { useLang } from '../contexts/LanguageContext'
import { t } from '../translations'

const accentColors: Record<string, string> = {
  yousee: '#E4002B',
  fourcom: '#0057B8',
  folkehuse: '#2E7D32',
  aarhustech: '#FF6B00',
}

function ExperienceCard({ exp, viewDetails, index }: {
  exp: { slug: string; company: string; role: string; period: string }
  viewDetails: string
  index: number
}) {
  const accent = accentColors[exp.slug]

  return (
    <>
      {/* Desktop card */}
      <motion.div
        initial={{ opacity: 0, y: 28 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-60px' }}
        transition={{ duration: 0.55, delay: (index % 2) * 0.08, ease: [0.22, 1, 0.36, 1] }}
        className="hidden sm:block group"
      >
        <Link to={'/experience/' + exp.slug} className="block">
          <motion.div
            whileHover={{ y: -8 }}
            transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
            className="relative rounded-[22px] overflow-hidden"
            style={{
              background: 'linear-gradient(160deg, rgba(232,224,213,0.045) 0%, rgba(232,224,213,0.015) 100%)',
              border: '1px solid rgba(232,224,213,0.09)',
              transition: 'border-color 0.3s ease, box-shadow 0.3s ease',
            }}
          >
            {/* Accent top line — grows on hover */}
            <div
              className="absolute top-0 left-0 right-0 h-[2px] z-10 origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-500"
              style={{ background: `linear-gradient(to right, ${accent}, transparent 80%)` }}
            />

            {/* Cover */}
            <div className="relative overflow-hidden" style={{ aspectRatio: '16/9' }}>
              <div className="w-full h-full transition-transform duration-500 ease-out group-hover:scale-[1.04]">
                <BrandCover name={exp.company} sub={exp.role} accent={accent} className="w-full h-full" />
              </div>
            </div>

            {/* Text */}
            <div className="p-5 sm:p-6">
              <div className="flex items-center justify-between mb-2.5">
                <span style={{ color: accent, fontSize: '10px', letterSpacing: '0.22em', textTransform: 'uppercase', fontWeight: 600, opacity: 0.9 }}>
                  {exp.period}
                </span>
                <span
                  className="flex items-center gap-1.5 opacity-0 translate-y-1 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300"
                  style={{ color: '#E8DDD0', fontSize: '10px', letterSpacing: '0.18em', textTransform: 'uppercase' }}
                >
                  {viewDetails.replace(' →', '')}
                  <ArrowUpRight size={12} strokeWidth={1.8} style={{ color: accent }} />
                </span>
              </div>
              <h3 className="font-bold uppercase mb-1" style={{ color: '#E8DDD0', fontSize: '17px', letterSpacing: '0.01em' }}>
                {exp.company}
              </h3>
              <p style={{ color: '#E8DDD0', opacity: 0.45, fontSize: '13px', fontWeight: 300 }}>{exp.role}</p>
            </div>
          </motion.div>
        </Link>
      </motion.div>

      {/* Mobile card — simple list */}
      <Link to={'/experience/' + exp.slug} className="sm:hidden block">
        <motion.div
          whileTap={{ scale: 0.97 }}
          className="relative rounded-[20px] overflow-hidden border border-[#E8DDD0]/10 flex"
          style={{ background: '#121110' }}
        >
          <div className="w-1 flex-shrink-0" style={{ background: accent }} />
          <div className="relative flex-shrink-0 overflow-hidden" style={{ width: '44%', aspectRatio: '4/3' }}>
            <BrandCover name={exp.company} accent={accent} compact className="w-full h-full" />
            <div className="absolute inset-0 pointer-events-none" style={{ background: 'linear-gradient(to right, transparent 60%, #121110 100%)' }} />
          </div>
          <div className="flex flex-col justify-center px-4 py-4 flex-1 min-w-0">
            <span className="text-[10px] uppercase tracking-widest mb-1" style={{ color: accent, opacity: 0.85 }}>{exp.period}</span>
            <h3 className="font-bold text-sm uppercase leading-tight mb-1" style={{ color: '#E8DDD0' }}>{exp.company}</h3>
            <p className="text-xs leading-snug truncate" style={{ color: '#E8DDD0', opacity: 0.45 }}>{exp.role}</p>
            <div className="flex items-center gap-1 mt-3">
              <span className="text-[9px] uppercase tracking-widest" style={{ color: accent, opacity: 0.7 }}>{viewDetails}</span>
            </div>
          </div>
        </motion.div>
      </Link>
    </>
  )
}

export default function ExperienceSection() {
  const { lang } = useLang()
  const tx = t[lang].experience

  return (
    <section
      id="experience"
      className="px-5 sm:px-8 md:px-10 py-14 sm:py-20 md:py-24 relative z-10"
      style={{ background: '#0A0908' }}
    >
      <FadeIn delay={0} y={16}>
        <p className="serif-accent text-center mb-2" style={{ color: '#C9A96E', fontSize: 'clamp(1.05rem, 1.6vw, 1.4rem)', opacity: 0.85 }}>
          {lang === 'da' ? 'steder, der har formet mig' : 'places that shaped me'}
        </p>
      </FadeIn>
      <FadeIn delay={0.05} y={40}>
        <h2
          className="hero-heading font-black uppercase leading-none tracking-tight text-center mb-5"
          style={{ fontSize: 'clamp(2.6rem, 10vw, 120px)' }}
        >
          {tx.heading}
        </h2>
      </FadeIn>
      <FadeIn delay={0.15} y={20}>
        <p
          className="text-center max-w-xl mx-auto mb-10 sm:mb-12 md:mb-14 font-light leading-relaxed"
          style={{ color: '#E8DDD0', opacity: 0.4, fontSize: 'clamp(0.85rem, 1.4vw, 1.05rem)' }}
        >
          {tx.subheading}
        </p>
      </FadeIn>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-5 max-w-5xl mx-auto">
        {tx.items.map((exp, i) => (
          <ExperienceCard key={exp.slug} exp={exp} viewDetails={tx.viewDetails} index={i} />
        ))}
      </div>
    </section>
  )
}
