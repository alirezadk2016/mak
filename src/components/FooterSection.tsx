import { motion } from 'framer-motion'
import FadeIn from './FadeIn'

export default function FooterSection() {
  return (
    <section id="contact" style={{ background: '#0C0C0C' }} className="overflow-hidden">

      {/* Available badge */}
      <div className="px-5 sm:px-8 md:px-10 pt-28 sm:pt-36">
        <FadeIn delay={0} y={0}>
          <div className="inline-flex items-center gap-2 mb-12">
            <span className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse" />
            <span className="text-[11px] uppercase tracking-[0.3em]" style={{ color: '#D7E2EA', opacity: 0.4 }}>
              Available for work · Aarhus, Danmark
            </span>
          </div>
        </FadeIn>

        {/* Giant email */}
        <div className="overflow-hidden mb-20">
          <motion.a
            href="mailto:alirezadk2016@gmail.com"
            initial={{ y: 120 }}
            whileInView={{ y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
            className="hero-heading font-black uppercase leading-none tracking-tight block hover:opacity-60 transition-opacity duration-300 break-all sm:break-normal"
            style={{ fontSize: 'clamp(2rem, 5.5vw, 72px)', color: '#D7E2EA' }}
          >
            alirezadk2016
            <br className="sm:hidden" />
            @gmail.com
          </motion.a>
        </div>
      </div>

      {/* Divider */}
      <div className="border-t border-[#D7E2EA]/10" />

      {/* Info grid */}
      <div className="px-5 sm:px-8 md:px-10 grid grid-cols-2 md:grid-cols-4 border-b border-[#D7E2EA]/10">
        {[
          { label: 'Telefon',   value: '+45 91 48 88 43',  href: 'tel:+4591488843' },
          { label: 'LinkedIn',  value: 'Alireza Makvandi', href: 'https://dk.linkedin.com/in/alireza-makvandi-446704301' },
          { label: 'Instagram', value: '@alireza__tak',    href: 'https://www.instagram.com/alireza__tak/' },
          { label: 'Adresse',   value: 'Aarhus N · DK',   href: 'https://maps.google.com/?q=Aarhus+N+8200+Danmark' },
        ].map(({ label, value, href }, i) => (
          <FadeIn key={label} delay={0.05 * i} y={0}>
            <a
              href={href}
              target={href.startsWith('http') ? '_blank' : undefined}
              rel="noopener noreferrer"
              className="group flex flex-col gap-2 py-8 px-0 pr-6 border-r border-[#D7E2EA]/10 last:border-r-0 hover:opacity-60 transition-opacity duration-200"
              style={{ borderColor: 'rgba(215,226,234,0.1)' }}
            >
              <span className="text-[10px] uppercase tracking-[0.25em]" style={{ color: '#D7E2EA', opacity: 0.3 }}>
                {label}
              </span>
              <span className="font-medium text-sm sm:text-base" style={{ color: '#D7E2EA' }}>
                {value}
              </span>
            </a>
          </FadeIn>
        ))}
      </div>

      {/* Signature */}
      <div className="py-8 flex items-center gap-4 px-5 sm:px-8 md:px-10">
        <div className="flex-1 h-px" style={{ background: 'rgba(215,226,234,0.1)' }} />
        <div
          className="flex items-center gap-2 px-5 py-2.5 rounded-full border text-[11px] uppercase tracking-[0.2em] flex-shrink-0"
          style={{ borderColor: 'rgba(215,226,234,0.15)', color: '#D7E2EA' }}
        >
          <span style={{ color: '#4ade80', opacity: 0.8 }}>&lt;&gt;</span>
          <span style={{ opacity: 0.35 }}>Crafted by</span>
          <span className="font-bold tracking-widest" style={{ color: '#4ade80' }}>MAK</span>
        </div>
        <div className="flex-1 h-px" style={{ background: 'rgba(215,226,234,0.1)' }} />
      </div>

    </section>
  )
}
