import { Mail, Phone, MapPin, Instagram, Linkedin } from 'lucide-react'
import FadeIn from './FadeIn'

const contacts = [
  {
    icon: Phone,
    label: 'Telefon',
    value: '+45 91 48 88 43',
    href: 'tel:+4591488843',
  },
  {
    icon: Mail,
    label: 'E-mail',
    value: 'alirezadk2016@gmail.com',
    href: 'mailto:alirezadk2016@gmail.com',
  },
  {
    icon: Instagram,
    label: 'Instagram',
    value: '@alireza__tak',
    href: 'https://www.instagram.com/alireza__tak/',
  },
  {
    icon: Linkedin,
    label: 'LinkedIn',
    value: 'Alireza Makvandi',
    href: 'https://dk.linkedin.com/in/alireza-makvandi-446704301',
  },
  {
    icon: MapPin,
    label: 'Adresse',
    value: 'Aarhus N 8200, Danmark',
    href: 'https://maps.google.com/?q=Aarhus+N+8200+Danmark',
  },
]

export default function FooterSection() {
  return (
    <section
      id="contact"
      className="px-5 sm:px-8 md:px-10 py-20 sm:py-24 md:py-32"
      style={{ background: '#0C0C0C' }}
    >
      <FadeIn delay={0} y={40}>
        <h2
          className="hero-heading font-black uppercase leading-none tracking-tight text-center mb-16 sm:mb-20 md:mb-28"
          style={{ fontSize: 'clamp(3rem, 12vw, 160px)', color: '#D7E2EA' }}
        >
          Contact
        </h2>
      </FadeIn>

      {/* Name */}
      <FadeIn delay={0.1} y={20}>
        <p
          className="text-center font-black uppercase tracking-widest mb-16"
          style={{ color: '#D7E2EA', fontSize: 'clamp(1.5rem, 4vw, 3.5rem)' }}
        >
          Alireza Makvandi
        </p>
      </FadeIn>

      {/* Contact list */}
      <div className="max-w-2xl mx-auto flex flex-col gap-4 mb-20">
        {contacts.map((c, i) => (
          <FadeIn key={i} delay={0.1 + i * 0.07} y={15}>
            <a
              href={c.href}
              target={c.href.startsWith('http') ? '_blank' : undefined}
              rel="noopener noreferrer"
              className="flex items-center gap-5 py-5 px-6 rounded-2xl border border-[#D7E2EA]/15 hover:border-[#D7E2EA]/40 transition-all duration-300 group"
            >
              <c.icon
                size={20}
                className="flex-shrink-0 transition-colors duration-300"
                style={{ color: '#D7E2EA', opacity: 0.5 }}
              />
              <div className="flex flex-col">
                <span
                  className="uppercase tracking-widest text-xs mb-0.5"
                  style={{ color: '#D7E2EA', opacity: 0.4 }}
                >
                  {c.label}
                </span>
                <span
                  className="font-medium group-hover:opacity-100 transition-opacity duration-300"
                  style={{ color: '#D7E2EA', opacity: 0.8, fontSize: 'clamp(0.9rem, 1.5vw, 1.1rem)' }}
                >
                  {c.value}
                </span>
              </div>
              <span
                className="ml-auto opacity-0 group-hover:opacity-40 transition-opacity duration-300 text-sm"
                style={{ color: '#D7E2EA' }}
              >
                →
              </span>
            </a>
          </FadeIn>
        ))}
      </div>

      {/* Divider */}
      <div className="border-t border-[#D7E2EA]/10 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 max-w-2xl mx-auto">
        <p className="text-xs uppercase tracking-widest" style={{ color: '#D7E2EA', opacity: 0.3 }}>
          © 2026 Alireza Makvandi
        </p>
        <p className="text-xs uppercase tracking-widest" style={{ color: '#D7E2EA', opacity: 0.3 }}>
          Aarhus N 8200 · Danmark
        </p>
      </div>
    </section>
  )
}
