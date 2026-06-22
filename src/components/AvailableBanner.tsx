import { motion } from 'framer-motion'
import { useLang } from '../contexts/LanguageContext'

const text = {
  da: { status: 'Tilgængelig for nye muligheder', cta: 'Åben for samtale — lad os tale', sub: 'Klar til at bidrage fra dag ét' },
  en: { status: 'Open to new opportunities', cta: 'Available for interview — let\'s talk', sub: 'Ready to contribute from day one' },
}

export default function AvailableBanner() {
  const { lang } = useLang()
  const tx = text[lang]

  return (
    <section className="px-5 sm:px-10 md:px-16 py-16 sm:py-20" style={{ background: '#0C0C0C' }}>
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        className="relative max-w-5xl mx-auto rounded-[32px] sm:rounded-[44px] overflow-hidden"
        style={{
          background: 'linear-gradient(135deg, #0f0f0f 0%, #141414 50%, #0a0a0a 100%)',
          border: '1px solid rgba(215,226,234,0.08)',
          boxShadow: '0 0 0 1px rgba(215,226,234,0.04), 0 40px 80px rgba(0,0,0,0.6)',
        }}
      >
        {/* Ambient glow top-left */}
        <div
          className="absolute pointer-events-none"
          style={{
            top: '-60px', left: '-40px',
            width: '340px', height: '340px',
            background: 'radial-gradient(circle, rgba(215,226,234,0.045) 0%, transparent 70%)',
            borderRadius: '50%',
          }}
        />
        {/* Ambient glow bottom-right */}
        <div
          className="absolute pointer-events-none"
          style={{
            bottom: '-60px', right: '-40px',
            width: '280px', height: '280px',
            background: 'radial-gradient(circle, rgba(215,226,234,0.03) 0%, transparent 70%)',
            borderRadius: '50%',
          }}
        />

        <div className="relative z-10 px-8 sm:px-14 py-12 sm:py-16 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-8">

          {/* Left — status pill + heading */}
          <div className="flex flex-col gap-5">
            {/* Pulse pill */}
            <div className="flex items-center gap-2.5">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-60" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-400" />
              </span>
              <span
                style={{
                  color: '#6ee7b7',
                  fontSize: '10px',
                  letterSpacing: '0.35em',
                  textTransform: 'uppercase',
                  fontWeight: 600,
                  opacity: 0.85,
                }}
              >
                {tx.status}
              </span>
            </div>

            {/* Big headline */}
            <h2
              style={{
                color: '#D7E2EA',
                fontSize: 'clamp(1.6rem, 4vw, 3.2rem)',
                fontWeight: 800,
                letterSpacing: '-0.03em',
                lineHeight: 1.1,
                maxWidth: '560px',
              }}
            >
              {tx.cta}
            </h2>

            {/* Sub */}
            <p style={{ color: '#D7E2EA', opacity: 0.3, fontSize: 'clamp(0.8rem, 1.2vw, 0.95rem)', letterSpacing: '0.06em' }}>
              {tx.sub}
            </p>
          </div>

          {/* Right — vertical accent lines */}
          <div className="hidden sm:flex flex-col gap-2 items-end flex-shrink-0">
            {[1, 0.5, 0.25].map((o, i) => (
              <motion.div
                key={i}
                initial={{ scaleX: 0 }}
                whileInView={{ scaleX: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.3 + i * 0.1, ease: [0.22, 1, 0.36, 1] }}
                style={{
                  width: `${80 - i * 20}px`,
                  height: '1px',
                  background: `rgba(215,226,234,${o * 0.18})`,
                  transformOrigin: 'right',
                }}
              />
            ))}
          </div>
        </div>

        {/* Bottom strip */}
        <div
          className="relative z-10 border-t px-8 sm:px-14 py-4 flex items-center gap-3"
          style={{ borderColor: 'rgba(215,226,234,0.06)' }}
        >
          <span style={{ color: '#D7E2EA', opacity: 0.18, fontSize: '9px', letterSpacing: '0.4em', textTransform: 'uppercase' }}>
            Aarhus · Denmark
          </span>
          <span style={{ color: '#D7E2EA', opacity: 0.1 }}>·</span>
          <span style={{ color: '#D7E2EA', opacity: 0.18, fontSize: '9px', letterSpacing: '0.4em', textTransform: 'uppercase' }}>
            IT Support & Web Design
          </span>
          <span style={{ color: '#D7E2EA', opacity: 0.1 }}>·</span>
          <span style={{ color: '#D7E2EA', opacity: 0.18, fontSize: '9px', letterSpacing: '0.4em', textTransform: 'uppercase' }}>
            2026
          </span>
        </div>
      </motion.div>
    </section>
  )
}
