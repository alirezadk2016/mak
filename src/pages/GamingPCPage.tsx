import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { ArrowLeft } from 'lucide-react'
import { useLang } from '../contexts/LanguageContext'

const specs = [
  { label: 'CPU',        value: 'AMD Ryzen 7 9800X3D · 4.70 GHz · 8-Core' },
  { label: 'GPU',        value: 'MSI GeForce RTX 5070 Ventus 2X · 12 GB' },
  { label: 'RAM',        value: 'G.Skill Flare X5 32 GB DDR5-6000 CL30 EXPO (2×16 GB)' },
  { label: 'Bundkort',   value: 'MSI MAG B650 Tomahawk WiFi' },
  { label: 'SSD',        value: 'Samsung 990 Pro 1 TB NVMe' },
  { label: 'Køler',      value: 'Arctic Liquid Freezer III Pro 360 AIO' },
  { label: 'PSU',        value: 'Corsair RM850x (2024) · 850W 80+ Gold' },
  { label: 'Kabinet',    value: 'Lian Li Lancool 216 RGB' },
  { label: 'OS',         value: 'Windows 11 Pro · 64-bit' },
]

const specsEn = [
  { label: 'CPU',        value: 'AMD Ryzen 7 9800X3D · 4.70 GHz · 8-Core' },
  { label: 'GPU',        value: 'MSI GeForce RTX 5070 Ventus 2X · 12 GB' },
  { label: 'RAM',        value: 'G.Skill Flare X5 32 GB DDR5-6000 CL30 EXPO (2×16 GB)' },
  { label: 'Motherboard',value: 'MSI MAG B650 Tomahawk WiFi' },
  { label: 'SSD',        value: 'Samsung 990 Pro 1 TB NVMe' },
  { label: 'Cooler',     value: 'Arctic Liquid Freezer III Pro 360 AIO' },
  { label: 'PSU',        value: 'Corsair RM850x (2024) · 850W 80+ Gold' },
  { label: 'Case',       value: 'Lian Li Lancool 216 RGB' },
  { label: 'OS',         value: 'Windows 11 Pro · 64-bit' },
]

const content = {
  da: {
    back: 'Tilbage',
    category: 'Personligt projekt',
    title: 'Gaming PC Build',
    desc: 'Med den viden og de praktiske kompetencer, jeg har opbygget gennem min IT-uddannelse og arbejdserfaring, valgte jeg at sætte det hele i spil — og bygge min egen gaming-PC fra bunden. Jeg researched komponenter, vurderede kompatibilitet, sammensatte systemet og konfigurerede det fra start til slut. Det er ikke blot et hobbyprojekt; det er et bevis på, at jeg forstår hardware indgående og kan omsætte teori til praksis.',
    specsLabel: 'Specifikationer',
  },
  en: {
    back: 'Back',
    category: 'Personal Project',
    title: 'Gaming PC Build',
    desc: 'Using the knowledge and hands-on skills I built through my IT education and work experience, I decided to put it all into practice — and build my own gaming PC from scratch. I researched components, evaluated compatibility, assembled the system and configured it from start to finish. This is not just a hobby project; it is proof that I understand hardware at a deep level and can turn theory into practice.',
    specsLabel: 'Specifications',
  },
}

export default function GamingPCPage() {
  const { lang } = useLang()
  const tx = content[lang]
  const specList = lang === 'da' ? specs : specsEn

  return (
    <main style={{ background: '#0A0908', minHeight: '100vh' }} className="px-5 sm:px-10 md:px-16 py-10 sm:py-16">

      {/* Back */}
      <motion.div initial={{ opacity: 0, x: -16 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.4 }}>
        <Link
          to="/"
          className="inline-flex items-center gap-2 mb-10 sm:mb-14 transition-opacity hover:opacity-60"
          style={{ color: '#E8DDD0', opacity: 0.45, fontSize: '12px', letterSpacing: '0.2em', textTransform: 'uppercase' }}
        >
          <ArrowLeft size={13} strokeWidth={1.8} />
          {tx.back}
        </Link>
      </motion.div>

      {/* Header */}
      <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} className="mb-10 sm:mb-14">
        <p style={{ color: '#E8DDD0', opacity: 0.3, fontSize: '10px', letterSpacing: '0.35em', textTransform: 'uppercase', marginBottom: '12px' }}>
          {tx.category}
        </p>
        <h1
          className="font-black uppercase leading-none"
          style={{ color: '#E8DDD0', fontSize: 'clamp(2.2rem, 8vw, 6rem)', letterSpacing: '-0.03em' }}
        >
          {tx.title}
        </h1>
      </motion.div>

      {/* Image */}
      <motion.div
        initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.1 }}
        className="w-full rounded-[24px] sm:rounded-[32px] overflow-hidden mb-10 sm:mb-14"
        style={{ maxHeight: '520px' }}
      >
        <img src="/gaming-pc.jpeg" alt="Gaming PC Build" className="w-full h-full object-cover" style={{ maxHeight: '520px' }} />
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 sm:gap-16 max-w-5xl">

        {/* Description */}
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.2 }}>
          <p style={{ color: '#E8DDD0', opacity: 0.6, fontSize: 'clamp(0.9rem, 1.4vw, 1.05rem)', lineHeight: 1.8, fontWeight: 300 }}>
            {tx.desc}
          </p>
        </motion.div>

        {/* Specs */}
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.3 }}>
          <p style={{ color: '#E8DDD0', opacity: 0.25, fontSize: '10px', letterSpacing: '0.35em', textTransform: 'uppercase', marginBottom: '16px' }}>
            {tx.specsLabel}
          </p>
          <div className="flex flex-col gap-0">
            {specList.map((s, i) => (
              <motion.div
                key={s.label}
                initial={{ opacity: 0, x: 16 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.4, delay: 0.35 + i * 0.04 }}
                className="flex items-baseline justify-between py-3"
                style={{ borderBottom: '1px solid rgba(232,224,213,0.07)' }}
              >
                <span style={{ color: '#E8DDD0', opacity: 0.3, fontSize: '10px', letterSpacing: '0.2em', textTransform: 'uppercase', flexShrink: 0, marginRight: '16px' }}>
                  {s.label}
                </span>
                <span style={{ color: '#E8DDD0', opacity: 0.75, fontSize: '12px', textAlign: 'right', lineHeight: 1.4 }}>
                  {s.value}
                </span>
              </motion.div>
            ))}
          </div>
        </motion.div>

      </div>
    </main>
  )
}
