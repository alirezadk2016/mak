import React, { useEffect, useRef, useState } from 'react'
import { motion, useInView } from 'framer-motion'
import FadeIn from './FadeIn'
import ContactButton from './ContactButton'
import AnimatedText from './AnimatedText'
import { useLang } from '../contexts/LanguageContext'
import { t } from '../translations'

function parseNum(str: string): { value: number; suffix: string; prefix: string } {
  const match = str.match(/^([^0-9]*)(\d+)([^0-9]*)$/)
  if (!match) return { value: 0, suffix: '', prefix: str }
  return { value: parseInt(match[2], 10), suffix: match[3], prefix: match[1] }
}

function CountUp({ target }: { target: string }) {
  const ref = useRef<HTMLSpanElement>(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })
  const [count, setCount] = useState(0)
  const { value, suffix, prefix } = parseNum(target)

  useEffect(() => {
    if (!inView) return
    const duration = 1200
    const steps = 40
    const increment = value / steps
    let current = 0
    let step = 0
    const timer = setInterval(() => {
      step++
      current = Math.min(Math.round(increment * step), value)
      setCount(current)
      if (current >= value) clearInterval(timer)
    }, duration / steps)
    return () => clearInterval(timer)
  }, [inView, value])

  return <span ref={ref}>{prefix}{count}{suffix}</span>
}

const skills = ['Windows Server', 'Active Directory', 'Linux', 'VMware', 'React', 'TypeScript', 'DNS & DHCP', 'GPO', 'IT-sikkerhed', 'Hardware', 'Netværk', 'Web Design']

export default function AboutSection() {
  const { lang } = useLang()
  const tx = t[lang].about

  return (
    <section
      id="about"
      className="relative px-5 sm:px-10 md:px-14 lg:px-20 py-24 sm:py-32 md:py-40 overflow-hidden"
      style={{ background: '#0A0908' }}
    >
      {/* Subtle top border */}
      <div className="absolute top-0 inset-x-0 h-px" style={{ background: 'rgba(232,224,213,0.07)' }} />

      {/* ── DESKTOP: editorial 2-column ── */}
      <div className="hidden sm:grid sm:grid-cols-[1fr_2.2fr] gap-16 md:gap-24 lg:gap-32 max-w-6xl mx-auto">

        {/* Left — sticky label */}
        <div className="relative">
          <FadeIn delay={0} y={30}>
            <div className="sticky top-28 flex flex-col gap-6">
              <div>
                <p style={{ color: '#E8DDD0', opacity: 0.22, fontSize: '10px', letterSpacing: '0.35em', textTransform: 'uppercase', marginBottom: '16px' }}>
                  {lang === 'da' ? 'Om mig' : 'About me'}
                </p>
                <h2
                  className="hero-heading font-black uppercase leading-none"
                  style={{ fontSize: 'clamp(2.8rem, 5.5vw, 5.5rem)', letterSpacing: '-0.03em' }}
                >
                  {tx.heading}
                </h2>
              </div>

              {/* Stats */}
              <div className="flex flex-col gap-6 pt-4 border-t" style={{ borderColor: 'rgba(232,224,213,0.07)' }}>
                {tx.stats.map((stat) => (
                  <div key={stat.label} className="flex flex-col gap-1">
                    <motion.span
                      className="font-black leading-none"
                      style={{ color: '#E8DDD0', fontSize: 'clamp(1.8rem, 3.2vw, 3.2rem)', fontFamily: 'Kanit, sans-serif' }}
                    >
                      <CountUp target={stat.num} />
                    </motion.span>
                    <span style={{ color: '#E8DDD0', opacity: 0.3, fontSize: '9px', letterSpacing: '0.3em', textTransform: 'uppercase' }}>
                      {stat.label}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </FadeIn>
        </div>

        {/* Right — bio + skills + CTA */}
        <div className="flex flex-col gap-12">
          <AnimatedText
            key={tx.bio}
            text={tx.bio}
            className="leading-relaxed"
            style={{ color: '#E8DDD0', opacity: 0.65, fontSize: 'clamp(1rem, 1.5vw, 1.2rem)', fontWeight: 300, lineHeight: 1.9 } as React.CSSProperties}
          />

          {/* Skills */}
          <FadeIn delay={0.3} y={16}>
            <div className="flex flex-wrap gap-2">
              {skills.map((skill) => (
                <span
                  key={skill}
                  style={{
                    color: '#E8DDD0',
                    opacity: 0.45,
                    fontSize: '10px',
                    letterSpacing: '0.2em',
                    textTransform: 'uppercase',
                    padding: '6px 14px',
                    border: '1px solid rgba(232,224,213,0.1)',
                    borderRadius: '100px',
                    fontWeight: 400,
                  }}
                >
                  {skill}
                </span>
              ))}
            </div>
          </FadeIn>

          <FadeIn delay={0.4} y={16}>
            <ContactButton label={t[lang].hero.cta} />
          </FadeIn>
        </div>
      </div>

      {/* ── MOBILE: stacked ── */}
      <div className="flex flex-col gap-10 sm:hidden">
        <FadeIn delay={0} y={30}>
          <p style={{ color: '#E8DDD0', opacity: 0.22, fontSize: '10px', letterSpacing: '0.35em', textTransform: 'uppercase', marginBottom: '12px' }}>
            {lang === 'da' ? 'Om mig' : 'About me'}
          </p>
          <h2
            className="hero-heading font-black uppercase leading-none"
            style={{ fontSize: 'clamp(2.5rem, 11vw, 5rem)', letterSpacing: '-0.03em' }}
          >
            {tx.heading}
          </h2>
        </FadeIn>

        <AnimatedText
          key={tx.bio}
          text={tx.bio}
          className="leading-relaxed"
          style={{ color: '#E8DDD0', opacity: 0.6, fontSize: 'clamp(0.9rem, 4vw, 1.1rem)', fontWeight: 300, lineHeight: 1.85 } as React.CSSProperties}
        />

        <FadeIn delay={0.2} y={16}>
          <div className="grid grid-cols-3 gap-4 py-6 border-t border-b" style={{ borderColor: 'rgba(232,224,213,0.07)' }}>
            {tx.stats.map((stat) => (
              <div key={stat.label} className="flex flex-col gap-1">
                <motion.span
                  className="font-black leading-none"
                  style={{ color: '#E8DDD0', fontSize: 'clamp(1.6rem, 7vw, 2.5rem)', fontFamily: 'Kanit, sans-serif' }}
                >
                  <CountUp target={stat.num} />
                </motion.span>
                <span style={{ color: '#E8DDD0', opacity: 0.3, fontSize: '9px', letterSpacing: '0.25em', textTransform: 'uppercase' }}>
                  {stat.label}
                </span>
              </div>
            ))}
          </div>
        </FadeIn>

        <FadeIn delay={0.3} y={16}>
          <div className="flex flex-wrap gap-2">
            {skills.map((skill) => (
              <span
                key={skill}
                style={{
                  color: '#E8DDD0',
                  opacity: 0.4,
                  fontSize: '9px',
                  letterSpacing: '0.18em',
                  textTransform: 'uppercase',
                  padding: '5px 12px',
                  border: '1px solid rgba(232,224,213,0.1)',
                  borderRadius: '100px',
                }}
              >
                {skill}
              </span>
            ))}
          </div>
        </FadeIn>

        <FadeIn delay={0.35} y={16}>
          <ContactButton label={t[lang].hero.cta} />
        </FadeIn>
      </div>
    </section>
  )
}
