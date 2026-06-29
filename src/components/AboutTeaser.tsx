import { motion } from 'framer-motion'
import { useNavigate } from 'react-router-dom'
import { ArrowUpRight } from 'lucide-react'
import FadeIn from './FadeIn'
import { useLang } from '../contexts/LanguageContext'

const IMG = '/f1145949-0bb9-49ee-984f-8586244456a5.png'

const content = {
  da: {
    label: 'Om mig',
    summary: 'Nyuddannet IT-supporter fra Aarhus Tech med 10 års erfaring fra det danske arbejdsmarked — bl.a. fra YouSee og en praktik hos Fourcom. Erfaring med Windows, hardware, fejlfinding og brugersupport. Mødestabil, ansvarlig og hurtig til at lære — klar til at bidrage fra dag ét.',
    cta: 'Læs hele min historie',
    stats: [
      { num: '10', label: 'År i Danmark' },
      { num: '3+', label: 'Virksomheder' },
      { num: '2026', label: 'Aarhus Tech' },
    ],
  },
  en: {
    label: 'About me',
    summary: 'Newly qualified IT supporter from Aarhus Tech with 10 years of experience in the Danish job market — including at YouSee and an internship at Fourcom. Experienced with Windows, hardware, troubleshooting and user support. Reliable, responsible and a fast learner — ready to contribute from day one.',
    cta: 'Read my full story',
    stats: [
      { num: '10', label: 'Years in Denmark' },
      { num: '3+', label: 'Companies' },
      { num: '2026', label: 'Aarhus Tech' },
    ],
  },
}

export default function AboutTeaser() {
  const { lang } = useLang()
  const navigate = useNavigate()
  const c = content[lang]

  return (
    <section
      id="about"
      className="relative px-5 sm:px-10 md:px-16 py-24 sm:py-32 md:py-40 overflow-hidden"
      style={{ background: '#0A0908' }}
    >
      <div className="absolute top-0 inset-x-0 h-px" style={{ background: 'rgba(232,224,213,0.07)' }} />

      <div className="max-w-4xl mx-auto">
        <FadeIn delay={0} y={20}>
          <div className="flex items-center gap-3 mb-10">
            <div className="w-6 h-px" style={{ background: 'rgba(232,224,213,0.25)' }} />
            <span style={{ color: '#E8DDD0', opacity: 0.3, fontSize: '10px', letterSpacing: '0.38em', textTransform: 'uppercase', fontWeight: 500 }}>
              {c.label}
            </span>
          </div>
        </FadeIn>

        <div className="flex flex-col sm:flex-row gap-8 sm:gap-12 items-start">
          {/* Avatar */}
          <FadeIn delay={0.1} y={20}>
            <img
              src={IMG}
              alt="Alireza Makvandi"
              className="w-24 h-24 sm:w-32 sm:h-32 rounded-full object-cover flex-shrink-0"
              style={{ border: '1px solid rgba(232,224,213,0.15)' }}
            />
          </FadeIn>

          {/* Text */}
          <div className="flex-1">
            <FadeIn delay={0.15} y={20}>
              <p
                className="font-light leading-relaxed mb-8"
                style={{ color: '#E8DDD0', opacity: 0.72, fontSize: 'clamp(1.05rem, 2vw, 1.5rem)', lineHeight: 1.8 }}
              >
                {c.summary}
              </p>
            </FadeIn>

            {/* Stats */}
            <FadeIn delay={0.25} y={16}>
              <div className="flex gap-8 sm:gap-12 mb-10 pb-10 border-b" style={{ borderColor: 'rgba(232,224,213,0.08)' }}>
                {c.stats.map((s) => (
                  <div key={s.label} className="flex flex-col gap-1">
                    <span className="font-black leading-none" style={{ color: '#E8DDD0', fontSize: 'clamp(1.6rem, 4vw, 2.6rem)', fontFamily: 'Kanit, sans-serif' }}>
                      {s.num}
                    </span>
                    <span style={{ color: '#E8DDD0', opacity: 0.3, fontSize: '9px', letterSpacing: '0.22em', textTransform: 'uppercase' }}>
                      {s.label}
                    </span>
                  </div>
                ))}
              </div>
            </FadeIn>

            {/* CTA */}
            <FadeIn delay={0.3} y={16}>
              <motion.button
                onClick={() => navigate('/about')}
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.98 }}
                className="inline-flex items-center gap-2.5 rounded-full transition-colors duration-300"
                style={{
                  color: '#E8DDD0',
                  padding: '12px 26px',
                  fontSize: '12px',
                  letterSpacing: '0.15em',
                  textTransform: 'uppercase',
                  fontWeight: 500,
                  border: '1px solid rgba(201,169,110,0.4)',
                  background: 'rgba(201,169,110,0.08)',
                }}
              >
                {c.cta}
                <ArrowUpRight size={15} strokeWidth={1.8} style={{ color: '#C9A96E' }} />
              </motion.button>
            </FadeIn>
          </div>
        </div>
      </div>
    </section>
  )
}
