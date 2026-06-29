import { useState, useRef } from 'react'
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
  const base = {
    background: 'linear-gradient(145deg, #141210 0%, #0f0d0b 100%)',
    border: '1px solid rgba(232,224,213,0.1)',
  }

  const icons: Record<ContactItem['backType'], React.ReactNode> = {
    instagram: <Instagram size={22} strokeWidth={1.2} style={{ color: '#E8DDD0', opacity: 0.5 }} />,
    linkedin: <Linkedin size={22} strokeWidth={1.2} style={{ color: '#E8DDD0', opacity: 0.5 }} />,
    email: <Mail size={22} strokeWidth={1.2} style={{ color: '#E8DDD0', opacity: 0.5 }} />,
    phone: <Phone size={22} strokeWidth={1.2} style={{ color: '#E8DDD0', opacity: 0.5 }} />,
  }

  const labels: Record<ContactItem['backType'], string> = {
    instagram: '@alireza__tak',
    linkedin: 'Alireza Makvandi',
    email: 'alirezadk2016@gmail.com',
    phone: '+45 91 48 88 43',
  }

  const hints: Record<ContactItem['backType'], string> = {
    instagram: 'Instagram →',
    linkedin: 'LinkedIn →',
    email: 'Send email →',
    phone: 'Ring op →',
  }

  return (
    <div
      className="w-full h-full rounded-[20px] flex flex-col items-center justify-center gap-3"
      style={base}
    >
      <div
        className="w-10 h-10 rounded-full flex items-center justify-center"
        style={{ background: 'rgba(232,224,213,0.06)', border: '1px solid rgba(232,224,213,0.1)' }}
      >
        {icons[type]}
      </div>
      <div className="flex flex-col items-center gap-1">
        <span style={{ color: '#E8DDD0', opacity: 0.7, fontSize: '12px', fontWeight: 500, letterSpacing: '0.01em' }}>
          {labels[type]}
        </span>
        <span style={{ color: '#E8DDD0', opacity: 0.22, fontSize: '9px', letterSpacing: '0.25em', textTransform: 'uppercase' }}>
          {hints[type]}
        </span>
      </div>
    </div>
  )
}

function FlipCard({ item, lang }: { item: ContactItem; lang: 'da' | 'en' }) {
  const [flipped, setFlipped] = useState(false)
  const Icon = item.icon

  return (
    <a
      href={item.href}
      target={item.href.startsWith('http') ? '_blank' : undefined}
      rel="noopener noreferrer"
      className="block relative"
      style={{ perspective: '1000px', height: '160px' }}
      onMouseEnter={() => setFlipped(true)}
      onMouseLeave={() => setFlipped(false)}
    >
      {/* Desktop flip */}
      <motion.div
        animate={{ rotateY: flipped ? 180 : 0 }}
        transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
        style={{ transformStyle: 'preserve-3d', width: '100%', height: '100%', position: 'relative' }}
        className="hidden sm:block"
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

      {/* Mobile: swipe left/right to flip */}
      <MobileFlipCard item={item} lang={lang} />
    </a>
  )
}

function MobileFlipCard({ item, lang }: { item: ContactItem; lang: 'da' | 'en' }) {
  const [flipped, setFlipped] = useState(false)
  const touchStartX = useRef<number | null>(null)
  const Icon = item.icon
  const ease = [0.22, 1, 0.36, 1] as const
  const dur = 0.45

  function onTouchStart(e: React.TouchEvent) {
    touchStartX.current = e.touches[0].clientX
  }
  function onTouchEnd(e: React.TouchEvent) {
    if (touchStartX.current === null) return
    if (Math.abs(touchStartX.current - e.changedTouches[0].clientX) > 40)
      setFlipped(f => !f)
    touchStartX.current = null
  }

  return (
    <div
      className="sm:hidden absolute inset-0"
      onTouchStart={onTouchStart}
      onTouchEnd={onTouchEnd}
    >
      {/* Front — rotates out */}
      <motion.div
        animate={{ rotateY: flipped ? -90 : 0, opacity: flipped ? 0 : 1 }}
        transition={{ duration: dur, ease }}
        className="absolute inset-0 flex flex-col gap-4 rounded-[20px] border border-[#D7E2EA]/10 p-5"
        style={{ pointerEvents: flipped ? 'none' : 'auto' }}
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
        <span style={{ color: '#D7E2EA', opacity: 0.15, fontSize: '9px', letterSpacing: '0.2em', textTransform: 'uppercase' }}>
          ← swipe →
        </span>
      </motion.div>

      {/* Back — rotates in */}
      <motion.div
        animate={{ rotateY: flipped ? 0 : 90, opacity: flipped ? 1 : 0 }}
        transition={{ duration: dur, ease, delay: flipped ? dur * 0.5 : 0 }}
        className="absolute inset-0"
        style={{ pointerEvents: flipped ? 'auto' : 'none' }}
        onClick={() => {
          if (flipped) window.open(item.href, item.href.startsWith('http') ? '_blank' : '_self')
        }}
      >
        <CardBack type={item.backType} />
      </motion.div>
    </div>
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
          <div className="w-6 h-px" style={{ background: 'rgba(232,224,213,0.25)' }} />
          <span style={{ color: '#E8DDD0', opacity: 0.3, fontSize: '10px', letterSpacing: '0.38em', textTransform: 'uppercase', fontWeight: 500 }}>
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
            color: '#E8DDD0',
            fontSize: 'clamp(2.2rem, 6vw, 5.5rem)',
            fontWeight: 800,
            lineHeight: 1.05,
            letterSpacing: '-0.03em',
            whiteSpace: 'pre-line',
            fontFamily: 'Kanit, sans-serif',
          }}
          className="mb-14 sm:mb-18"
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
