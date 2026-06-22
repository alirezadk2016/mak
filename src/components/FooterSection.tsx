import { motion } from 'framer-motion'
import { Phone, Mail, MapPin, Instagram, Linkedin } from 'lucide-react'
import FadeIn from './FadeIn'

const links = [
  { icon: Phone,     label: 'Telefon',   value: '+45 91 48 88 43',           href: 'tel:+4591488843' },
  { icon: Mail,      label: 'E-mail',    value: 'alirezadk2016@gmail.com',   href: 'mailto:alirezadk2016@gmail.com' },
  { icon: Linkedin,  label: 'LinkedIn',  value: 'Alireza Makvandi',          href: 'https://dk.linkedin.com/in/alireza-makvandi-446704301' },
  { icon: Instagram, label: 'Instagram', value: '@alireza__tak',             href: 'https://www.instagram.com/alireza__tak/' },
  { icon: MapPin,    label: 'Adresse',   value: 'Aarhus N 8200 · Danmark',   href: 'https://maps.google.com/?q=Aarhus+N+8200+Danmark' },
]

export default function FooterSection() {
  return (
    <section id="contact" style={{ background: '#0C0C0C' }} className="overflow-hidden">

      {/* — Top CTA — */}
      <div className="px-5 sm:px-8 md:px-10 pt-28 sm:pt-36 pb-20 sm:pb-28">
        <FadeIn delay={0} y={0}>
          <p className="text-[11px] uppercase tracking-[0.3em] mb-10" style={{ color: '#D7E2EA', opacity: 0.3 }}>
            Åben for nye muligheder · Aarhus, Danmark
          </p>
        </FadeIn>

        <div className="overflow-hidden mb-3">
          <motion.h2
            initial={{ y: 110, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.85, ease: [0.16, 1, 0.3, 1] }}
            className="hero-heading font-black uppercase leading-none tracking-tight"
            style={{ fontSize: 'clamp(3.5rem, 13vw, 170px)', color: '#D7E2EA' }}
          >
            Lad os
          </motion.h2>
        </div>
        <div className="overflow-hidden mb-16">
          <motion.h2
            initial={{ y: 110, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.85, ease: [0.16, 1, 0.3, 1], delay: 0.07 }}
            className="hero-heading font-black uppercase leading-none tracking-tight"
            style={{ fontSize: 'clamp(3.5rem, 13vw, 170px)', color: '#D7E2EA', opacity: 0.15 }}
          >
            samarbejde
          </motion.h2>
        </div>

        {/* Contact rows */}
        <div className="max-w-2xl">
          {links.map(({ icon: Icon, label, value, href }, i) => (
            <FadeIn key={label} delay={0.05 * i} y={0}>
              <a
                href={href}
                target={href.startsWith('http') ? '_blank' : undefined}
                rel="noopener noreferrer"
                className="group flex items-center justify-between py-5 border-b transition-colors duration-200 hover:opacity-60"
                style={{ borderColor: 'rgba(215,226,234,0.1)' }}
              >
                <div className="flex items-center gap-4">
                  <Icon size={14} style={{ color: '#D7E2EA', opacity: 0.35 }} />
                  <span className="text-[11px] uppercase tracking-[0.2em]" style={{ color: '#D7E2EA', opacity: 0.35 }}>{label}</span>
                </div>
                <div className="flex items-center gap-3">
                  <span className="font-medium" style={{ color: '#D7E2EA', fontSize: 'clamp(0.8rem, 1.3vw, 1rem)' }}>{value}</span>
                  <span className="opacity-0 group-hover:opacity-40 transition-opacity text-sm" style={{ color: '#D7E2EA' }}>↗</span>
                </div>
              </a>
            </FadeIn>
          ))}
        </div>
      </div>

      {/* — Signature — */}
      <div className="border-t border-[#D7E2EA]/10 py-10 flex flex-col items-center gap-1">
        <span className="text-[10px] uppercase tracking-[0.35em]" style={{ color: '#D7E2EA', opacity: 0.2 }}>
          crafted by
        </span>
        <span
          className="hero-heading font-black uppercase leading-none tracking-tight"
          style={{ color: '#D7E2EA', opacity: 0.12, fontSize: 'clamp(3rem, 8vw, 7rem)' }}
        >
          MAK
        </span>
      </div>

    </section>
  )
}
