import { motion } from 'framer-motion'
import FadeIn from './FadeIn'

const meta = [
  { label: 'Telefon',   value: '+45 91 48 88 43',  href: 'tel:+4591488843' },
  { label: 'LinkedIn',  value: 'Alireza Makvandi', href: 'https://dk.linkedin.com/in/alireza-makvandi-446704301' },
  { label: 'Instagram', value: '@alireza__tak',    href: 'https://www.instagram.com/alireza__tak/' },
  { label: 'Adresse',   value: 'Aarhus N · DK',   href: 'https://maps.google.com/?q=Aarhus+N+8200+Danmark' },
]

export default function FooterSection() {
  return (
    <section id="contact" style={{ background: '#0C0C0C' }} className="overflow-hidden">

      <div className="px-5 sm:px-8 md:px-10 pt-20 sm:pt-36 pb-0">

        {/* Label */}
        <FadeIn delay={0} y={0}>
          <div className="flex items-center gap-3 mb-10 sm:mb-16">
            <span className="w-1.5 h-1.5 rounded-full bg-white opacity-40" />
            <span className="text-[11px] uppercase tracking-[0.3em]" style={{ color: '#D7E2EA', opacity: 0.35 }}>
              Contact
            </span>
          </div>
        </FadeIn>

        {/* Name */}
        <div className="overflow-hidden mb-2">
          <motion.p
            initial={{ y: 60 }}
            whileInView={{ y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="font-light uppercase tracking-[0.15em]"
            style={{ color: '#D7E2EA', opacity: 0.3, fontSize: 'clamp(0.65rem, 1.2vw, 0.9rem)' }}
          >
            Alireza Makvandi
          </motion.p>
        </div>

        {/* Email — big on desktop, readable on mobile */}
        <div className="overflow-hidden mb-12 sm:mb-20">
          <motion.a
            href="mailto:alirezadk2016@gmail.com"
            initial={{ y: 100 }}
            whileInView={{ y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1], delay: 0.04 }}
            className="hero-heading font-black uppercase leading-tight tracking-tight inline-block relative group"
            style={{ fontSize: 'clamp(1.6rem, 5.2vw, 76px)', color: '#D7E2EA' }}
          >
            <span className="block sm:inline">alirezadk2016</span>
            <span className="block sm:inline">@gmail.com</span>
            <span
              className="hidden sm:block absolute left-0 bottom-0 h-[3px] w-0 group-hover:w-full transition-all duration-500"
              style={{ background: '#D7E2EA' }}
            />
          </motion.a>
        </div>

        {/* Meta — 1 col on mobile, 4 col on desktop */}
        <div className="border-t border-[#D7E2EA]/10">
          {/* Mobile: vertical list */}
          <div className="flex flex-col sm:hidden divide-y divide-[#D7E2EA]/10">
            {meta.map(({ label, value, href }) => (
              <a
                key={label}
                href={href}
                target={href.startsWith('http') ? '_blank' : undefined}
                rel="noopener noreferrer"
                className="flex items-center justify-between py-4 hover:opacity-60 transition-opacity"
              >
                <span className="text-[10px] uppercase tracking-[0.2em]" style={{ color: '#D7E2EA', opacity: 0.35 }}>
                  {label}
                </span>
                <span className="font-medium text-sm text-right" style={{ color: '#D7E2EA' }}>
                  {value}
                </span>
              </a>
            ))}
          </div>

          {/* Desktop: 4 column grid */}
          <div className="hidden sm:grid grid-cols-4 border-b border-[#D7E2EA]/10">
            {meta.map(({ label, value, href }, i) => (
              <FadeIn key={label} delay={0.05 * i} y={0}>
                <a
                  href={href}
                  target={href.startsWith('http') ? '_blank' : undefined}
                  rel="noopener noreferrer"
                  className="group flex flex-col gap-2 py-7 pr-6 border-r last:border-r-0 hover:opacity-50 transition-opacity duration-200"
                  style={{ borderColor: 'rgba(215,226,234,0.1)' }}
                >
                  <span className="text-[10px] uppercase tracking-[0.25em]" style={{ color: '#D7E2EA', opacity: 0.3 }}>
                    {label}
                  </span>
                  <span className="font-medium text-sm" style={{ color: '#D7E2EA' }}>
                    {value}
                  </span>
                </a>
              </FadeIn>
            ))}
          </div>
        </div>
      </div>

      {/* Signature */}
      <div className="py-6 sm:py-7 flex items-center gap-4 px-5 sm:px-8 md:px-10">
        <div className="flex-1 h-px" style={{ background: 'rgba(215,226,234,0.08)' }} />
        <div
          className="flex items-center gap-2.5 px-4 sm:px-5 py-2 sm:py-2.5 rounded-full border flex-shrink-0"
          style={{ borderColor: 'rgba(215,226,234,0.12)' }}
        >
          <span className="text-[10px] sm:text-[11px]" style={{ color: '#D7E2EA', opacity: 0.3 }}>&lt;&gt;</span>
          <span className="text-[9px] sm:text-[10px] uppercase tracking-[0.2em]" style={{ color: '#D7E2EA', opacity: 0.25 }}>Crafted by</span>
          <span className="text-[10px] sm:text-[11px] font-bold uppercase tracking-widest" style={{ color: '#D7E2EA', opacity: 0.5 }}>MAK</span>
        </div>
        <div className="flex-1 h-px" style={{ background: 'rgba(215,226,234,0.08)' }} />
      </div>

    </section>
  )
}
