import { motion } from 'framer-motion'
import { Phone, Mail, MapPin, Instagram, Linkedin } from 'lucide-react'
import FadeIn from './FadeIn'

export default function FooterSection() {
  return (
    <section id="contact" style={{ background: '#0C0C0C' }} className="overflow-hidden">

      {/* CTA Block */}
      <div className="px-5 sm:px-8 md:px-10 pt-24 sm:pt-32 pb-16 sm:pb-24 border-b border-[#D7E2EA]/10">
        <FadeIn delay={0} y={0}>
          <p className="text-xs uppercase tracking-[0.3em] mb-8" style={{ color: '#D7E2EA', opacity: 0.35 }}>
            Åben for nye muligheder
          </p>
        </FadeIn>

        {/* Huge headline */}
        <div className="overflow-hidden mb-4">
          <motion.h2
            initial={{ y: 120, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
            className="hero-heading font-black uppercase leading-none tracking-tight"
            style={{ fontSize: 'clamp(3rem, 13vw, 170px)', color: '#D7E2EA' }}
          >
            Lad os
          </motion.h2>
        </div>
        <div className="overflow-hidden mb-12">
          <motion.h2
            initial={{ y: 120, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1], delay: 0.08 }}
            className="hero-heading font-black uppercase leading-none tracking-tight"
            style={{ fontSize: 'clamp(3rem, 13vw, 170px)', color: '#D7E2EA', opacity: 0.2 }}
          >
            samarbejde
          </motion.h2>
        </div>

        {/* Email CTA */}
        <FadeIn delay={0.3} y={20}>
          <a
            href="mailto:alirezadk2016@gmail.com"
            className="group inline-flex items-center gap-4 border border-[#D7E2EA]/20 rounded-full px-7 py-4 hover:border-[#D7E2EA]/50 hover:bg-[#D7E2EA]/5 transition-all duration-300"
          >
            <Mail size={16} style={{ color: '#D7E2EA', opacity: 0.5 }} />
            <span className="font-medium" style={{ color: '#D7E2EA', fontSize: 'clamp(0.85rem, 1.5vw, 1.1rem)' }}>
              alirezadk2016@gmail.com
            </span>
            <span className="opacity-0 group-hover:opacity-50 transition-opacity" style={{ color: '#D7E2EA' }}>→</span>
          </a>
        </FadeIn>
      </div>

      {/* Bottom info bar */}
      <div className="px-5 sm:px-8 md:px-10 py-8 grid grid-cols-1 sm:grid-cols-3 gap-8 sm:gap-4 items-center">

        {/* Left — name + location */}
        <FadeIn delay={0.1} y={10}>
          <div>
            <p className="font-bold uppercase tracking-wider mb-1" style={{ color: '#D7E2EA', fontSize: 'clamp(0.85rem, 1.2vw, 1rem)' }}>
              Alireza Makvandi
            </p>
            <div className="flex items-center gap-1.5">
              <MapPin size={11} style={{ color: '#D7E2EA', opacity: 0.3 }} />
              <p className="text-xs uppercase tracking-widest" style={{ color: '#D7E2EA', opacity: 0.3 }}>
                Aarhus N 8200 · Danmark
              </p>
            </div>
          </div>
        </FadeIn>

        {/* Center — phone */}
        <FadeIn delay={0.15} y={10}>
          <a
            href="tel:+4591488843"
            className="group flex items-center gap-2 sm:justify-center hover:opacity-70 transition-opacity"
          >
            <Phone size={13} style={{ color: '#D7E2EA', opacity: 0.4 }} />
            <span className="text-sm font-medium" style={{ color: '#D7E2EA', opacity: 0.6 }}>+45 91 48 88 43</span>
          </a>
        </FadeIn>

        {/* Right — social icons */}
        <FadeIn delay={0.2} y={10}>
          <div className="flex items-center gap-4 sm:justify-end">
            {[
              { icon: Linkedin, href: 'https://dk.linkedin.com/in/alireza-makvandi-446704301', label: 'LinkedIn' },
              { icon: Instagram, href: 'https://www.instagram.com/alireza__tak/', label: 'Instagram' },
            ].map(({ icon: Icon, href, label }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={label}
                className="w-10 h-10 rounded-full border border-[#D7E2EA]/20 flex items-center justify-center hover:border-[#D7E2EA]/50 hover:bg-[#D7E2EA]/5 transition-all duration-300"
              >
                <Icon size={15} style={{ color: '#D7E2EA', opacity: 0.6 }} />
              </a>
            ))}
          </div>
        </FadeIn>
      </div>

      {/* Copyright line */}
      <div className="px-5 sm:px-8 md:px-10 pb-8 border-t border-[#D7E2EA]/10 pt-5">
        <p className="text-xs uppercase tracking-widest" style={{ color: '#D7E2EA', opacity: 0.15 }}>
          © 2026 Alireza Makvandi — IT Support & Web Designer
        </p>
      </div>
    </section>
  )
}
