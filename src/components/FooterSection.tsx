import { motion } from 'framer-motion'

const links = [
  { label: 'Telefon',   value: '+45 91 48 88 43',  href: 'tel:+4591488843' },
  { label: 'LinkedIn',  value: 'Alireza Makvandi', href: 'https://dk.linkedin.com/in/alireza-makvandi-446704301' },
  { label: 'Instagram', value: '@alireza__tak',    href: 'https://www.instagram.com/alireza__tak/' },
  { label: 'Adresse',   value: 'Aarhus N · DK',   href: 'https://maps.google.com/?q=Aarhus+N+8200+Danmark' },
]

export default function FooterSection() {
  return (
    <section id="contact" style={{ background: '#0C0C0C' }}>
      <div className="px-5 sm:px-10 md:px-16 pt-20 sm:pt-32 pb-0">

        {/* Label */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex items-center gap-3 mb-12 sm:mb-16"
        >
          <span className="w-1.5 h-1.5 rounded-full" style={{ background: '#D7E2EA', opacity: 0.4 }} />
          <span style={{ color: '#D7E2EA', opacity: 0.35, fontSize: '11px', letterSpacing: '0.35em', textTransform: 'uppercase' }}>
            Contact
          </span>
        </motion.div>

        {/* Heading + email side by side on desktop, stacked on mobile */}
        <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-8 sm:gap-12 mb-16 sm:mb-20">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            style={{
              color: '#D7E2EA',
              fontSize: 'clamp(2rem, 5vw, 4.5rem)',
              fontWeight: 800,
              lineHeight: 1.1,
              letterSpacing: '-0.03em',
            }}
          >
            Lad os tage<br />en snak.
          </motion.h2>

          <motion.a
            href="mailto:alirezadk2016@gmail.com"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="group relative inline-block flex-shrink-0"
            style={{
              color: '#D7E2EA',
              fontSize: 'clamp(1rem, 2.2vw, 1.6rem)',
              fontWeight: 500,
              letterSpacing: '-0.01em',
              opacity: 0.6,
            }}
          >
            alirezadk2016@gmail.com
            <span
              className="absolute left-0 -bottom-0.5 h-px w-0 group-hover:w-full transition-all duration-500"
              style={{ background: '#D7E2EA' }}
            />
          </motion.a>
        </div>

        {/* Divider */}
        <div className="border-t border-[#D7E2EA]/10" />

        {/* Links */}
        <div className="py-10 grid grid-cols-2 sm:grid-cols-4 gap-8">
          {links.map(({ label, value, href }, i) => (
            <motion.a
              key={label}
              href={href}
              target={href.startsWith('http') ? '_blank' : undefined}
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.06 }}
              className="flex flex-col gap-2 hover:opacity-50 transition-opacity duration-200"
            >
              <span style={{ color: '#D7E2EA', opacity: 0.3, fontSize: '10px', letterSpacing: '0.25em', textTransform: 'uppercase' }}>
                {label}
              </span>
              <span style={{ color: '#D7E2EA', fontSize: '0.9rem', fontWeight: 500 }}>
                {value}
              </span>
            </motion.a>
          ))}
        </div>

      </div>

      {/* Bottom */}
      <div className="border-t border-[#D7E2EA]/8">
        <div className="px-5 sm:px-10 md:px-16 py-6 flex items-center gap-4">
          <div className="flex-1 h-px" style={{ background: 'rgba(215,226,234,0.06)' }} />
          <div
            className="flex items-center gap-2 px-5 py-2 rounded-full border flex-shrink-0"
            style={{ borderColor: 'rgba(215,226,234,0.1)' }}
          >
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
