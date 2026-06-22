import { useState } from 'react'
import { motion } from 'framer-motion'
import { Mail, Linkedin, Instagram, Phone } from 'lucide-react'
import { useLang } from '../contexts/LanguageContext'
import { t } from '../translations'

type ContactItem = {
  icon: React.ElementType
  label: { da: string; en: string } | string
  value: string
  href: string
  backType: 'instagram' | 'linkedin' | 'email' | 'phone'
}

const contactItems: ContactItem[] = [
  {
    icon: Phone,
    label: { da: 'Telefon', en: 'Phone' },
    value: '+45 91 48 88 43',
    href: 'tel:+4591488843',
    backType: 'phone',
  },
  {
    icon: Mail,
    label: { da: 'E-mail', en: 'Email' },
    value: 'alirezadk2016@gmail.com',
    href: 'mailto:alirezadk2016@gmail.com',
    backType: 'email',
  },
  {
    icon: Linkedin,
    label: 'LinkedIn',
    value: 'Alireza Makvandi',
    href: 'https://dk.linkedin.com/in/alireza-makvandi-446704301',
    backType: 'linkedin',
  },
  {
    icon: Instagram,
    label: 'Instagram',
    value: '@alireza__tak',
    href: 'https://www.instagram.com/alireza__tak/',
    backType: 'instagram',
  },
]

function CardBack({ type }: { type: ContactItem['backType'] }) {
  if (type === 'instagram') {
    return (
      <div className="w-full h-full rounded-[20px] overflow-hidden relative flex flex-col items-center justify-center gap-3"
        style={{ background: 'linear-gradient(135deg, #F58529 0%, #DD2A7B 40%, #8134AF 70%, #515BD4 100%)' }}>
        {/* Decorative rings */}
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
          <div className="rounded-full border border-white/10" style={{ width: 120, height: 120 }} />
        </div>
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
          <div className="rounded-full border border-white/5" style={{ width: 160, height: 160 }} />
        </div>
        {/* Profile pic */}
        <div className="relative z-10 w-14 h-14 rounded-full overflow-hidden border-2 border-white/60 shadow-lg">
          <img src="/f1145949-0bb9-49ee-984f-8586244456a5.png" alt="" className="w-full h-full object-cover" />
        </div>
        {/* Handle */}
        <div className="relative z-10 flex flex-col items-center gap-0.5">
          <span className="text-white font-bold text-sm tracking-wide">@alireza__tak</span>
          <span className="text-white/60 text-[10px] uppercase tracking-widest">Instagram</span>
        </div>
        {/* Follow button */}
        <div className="relative z-10 px-5 py-1.5 rounded-full bg-white/15 border border-white/30 backdrop-blur-sm">
          <span className="text-white text-[10px] font-semibold uppercase tracking-widest">Følg →</span>
        </div>
      </div>
    )
  }

  if (type === 'linkedin') {
    return (
      <div className="w-full h-full rounded-[20px] overflow-hidden relative flex flex-col items-center justify-center gap-3"
        style={{ background: 'linear-gradient(145deg, #0A66C2 0%, #004182 100%)' }}>
        <Linkedin size={48} strokeWidth={1.2} style={{ color: 'white', opacity: 0.9 }} />
        <span style={{ color: 'white', opacity: 0.8, fontSize: '11px', letterSpacing: '0.25em', textTransform: 'uppercase' }}>
          Alireza Makvandi
        </span>
        <div className="absolute inset-0 pointer-events-none rounded-[20px]" style={{ boxShadow: 'inset 0 0 0 1px rgba(255,255,255,0.12)' }} />
      </div>
    )
  }

  if (type === 'email') {
    return (
      <div className="w-full h-full rounded-[20px] overflow-hidden relative flex flex-col items-center justify-center gap-3"
        style={{ background: 'linear-gradient(135deg, #EA4335 0%, #FBBC05 40%, #34A853 70%, #4285F4 100%)' }}>
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
          <div className="rounded-full border border-white/10" style={{ width: 120, height: 120 }} />
        </div>
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
          <div className="rounded-full border border-white/5" style={{ width: 160, height: 160 }} />
        </div>
        <div className="relative z-10 w-14 h-14 rounded-full bg-white/15 border-2 border-white/60 flex items-center justify-center shadow-lg backdrop-blur-sm">
          <Mail size={26} strokeWidth={1.5} style={{ color: 'white' }} />
        </div>
        <div className="relative z-10 flex flex-col items-center gap-0.5">
          <span className="text-white font-bold text-sm tracking-wide">Gmail</span>
          <span className="text-white/60 text-[10px] uppercase tracking-widest">alirezadk2016</span>
        </div>
        <div className="relative z-10 px-5 py-1.5 rounded-full bg-white/15 border border-white/30 backdrop-blur-sm">
          <span className="text-white text-[10px] font-semibold uppercase tracking-widest">Skriv →</span>
        </div>
      </div>
    )
  }

  return (
    <div className="w-full h-full rounded-[20px] overflow-hidden relative flex flex-col items-center justify-center gap-3"
      style={{ background: 'linear-gradient(135deg, #1a1a2e 0%, #16213e 50%, #0f3460 100%)' }}>
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <div className="rounded-full border border-white/8" style={{ width: 120, height: 120 }} />
      </div>
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <div className="rounded-full border border-white/4" style={{ width: 160, height: 160 }} />
      </div>
      <div className="relative z-10 w-14 h-14 rounded-full bg-white/10 border-2 border-white/40 flex items-center justify-center shadow-lg backdrop-blur-sm">
        <Phone size={26} strokeWidth={1.5} style={{ color: 'white' }} />
      </div>
      <div className="relative z-10 flex flex-col items-center gap-0.5">
        <span className="text-white font-bold text-sm tracking-wide">+45 91 48 88 43</span>
        <span className="text-white/50 text-[10px] uppercase tracking-widest">Telefon</span>
      </div>
      <div className="relative z-10 px-5 py-1.5 rounded-full bg-white/10 border border-white/25 backdrop-blur-sm">
        <span className="text-white text-[10px] font-semibold uppercase tracking-widest">Ring op →</span>
      </div>
    </div>
  )
}

function FlipCard({ item, lang }: { item: ContactItem; lang: 'da' | 'en' }) {
  const [flipped, setFlipped] = useState(false)
  const Icon = item.icon

  function handleClick(e: React.MouseEvent) {
    // On touch devices, first tap flips — second tap navigates
    const isTouch = window.matchMedia('(hover: none)').matches
    if (isTouch) {
      if (!flipped) { e.preventDefault(); setFlipped(true) }
      else { setFlipped(false) }
    }
  }

  return (
    <a
      href={item.href}
      target={item.href.startsWith('http') ? '_blank' : undefined}
      rel="noopener noreferrer"
      className="block relative"
      style={{ perspective: '1000px', height: '160px' }}
      onMouseEnter={() => setFlipped(true)}
      onMouseLeave={() => setFlipped(false)}
      onClick={handleClick}
    >
      <motion.div
        animate={{ rotateY: flipped ? 180 : 0 }}
        transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
        style={{ transformStyle: 'preserve-3d', width: '100%', height: '100%', position: 'relative' }}
      >
        {/* Front */}
        <div
          className="absolute inset-0 flex flex-col gap-4 rounded-[20px] border border-[#D7E2EA]/10 p-5"
          style={{ backfaceVisibility: 'hidden', WebkitBackfaceVisibility: 'hidden' }}
        >
          <div className="flex items-center justify-between">
            <span style={{ color: '#D7E2EA', opacity: 0.25, fontSize: '10px', letterSpacing: '0.25em', textTransform: 'uppercase' }}>
              {typeof item.label === 'object' ? item.label[lang] : item.label}
            </span>
            <div className="w-8 h-8 rounded-full border border-[#D7E2EA]/15 flex items-center justify-center">
              <Icon size={14} style={{ color: '#D7E2EA', opacity: 0.5 }} strokeWidth={1.5} />
            </div>
          </div>
          <span style={{ color: '#D7E2EA', fontSize: '0.85rem', fontWeight: 500, opacity: 0.85 }} className="leading-snug mt-auto">
            {item.value}
          </span>
        </div>

        {/* Back */}
        <div
          className="absolute inset-0"
          style={{ backfaceVisibility: 'hidden', WebkitBackfaceVisibility: 'hidden', transform: 'rotateY(180deg)' }}
        >
          <CardBack type={item.backType} />
        </div>
      </motion.div>
    </a>
  )
}

export default function FooterSection() {
  const { lang } = useLang()
  const tx = t[lang].footer

  return (
    <section id="contact" style={{ background: '#0C0C0C', position: 'relative', zIndex: 20 }}>
      <div className="px-5 sm:px-10 md:px-16 pt-20 sm:pt-32 pb-0">

        {/* Label */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex items-center gap-3 mb-8 sm:mb-10"
        >
          <span className="w-1.5 h-1.5 rounded-full" style={{ background: '#D7E2EA', opacity: 0.4 }} />
          <span style={{ color: '#D7E2EA', opacity: 0.35, fontSize: '11px', letterSpacing: '0.35em', textTransform: 'uppercase' }}>
            {tx.label}
          </span>
        </motion.div>

        {/* Heading */}
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          style={{
            color: '#D7E2EA',
            fontSize: 'clamp(2.2rem, 6vw, 5.5rem)',
            fontWeight: 800,
            lineHeight: 1.05,
            letterSpacing: '-0.03em',
            whiteSpace: 'pre-line',
          }}
          className="mb-16 sm:mb-20"
        >
          {tx.heading}
        </motion.h2>

        {/* Contact cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 mb-0">
          {contactItems.map((item, i) => (
            <motion.div
              key={item.href}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.07 }}
            >
              <FlipCard item={item} lang={lang} />
            </motion.div>
          ))}
        </div>

      </div>

      {/* Bottom */}
      <div className="mt-16 border-t border-[#D7E2EA]/8">
        <div className="px-5 sm:px-10 md:px-16 py-6 flex items-center gap-4">
          <div className="flex-1 h-px" style={{ background: 'rgba(215,226,234,0.06)' }} />
          <div className="flex items-center gap-2 px-5 py-2 rounded-full border flex-shrink-0" style={{ borderColor: 'rgba(215,226,234,0.1)' }}>
            <span style={{ color: '#D7E2EA', opacity: 0.25, fontSize: '10px' }}>&lt;&gt;</span>
            <span style={{ color: '#D7E2EA', opacity: 0.2, fontSize: '9px', letterSpacing: '0.2em', textTransform: 'uppercase' }}>Crafted by</span>
            <span style={{ color: '#D7E2EA', opacity: 0.45, fontSize: '10px', fontWeight: 700, letterSpacing: '0.15em', textTransform: 'uppercase' }}>MAK</span>
          </div>
          <div className="flex-1 h-px" style={{ background: 'rgba(215,226,234,0.06)' }} />
        </div>
      </div>

    </section>
  )
}
