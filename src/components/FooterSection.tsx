import { Mail, Phone, MapPin, Instagram, Linkedin } from 'lucide-react'
import FadeIn from './FadeIn'

export default function FooterSection() {
  return (
    <section
      id="contact"
      style={{ background: '#0C0C0C' }}
      className="px-5 sm:px-8 md:px-10 pt-24 sm:pt-32 pb-10"
    >
      {/* Big heading */}
      <FadeIn delay={0} y={40}>
        <h2
          className="hero-heading font-black uppercase leading-none tracking-tight mb-16 sm:mb-20"
          style={{ fontSize: 'clamp(3rem, 12vw, 160px)', color: '#D7E2EA' }}
        >
          Get in touch
        </h2>
      </FadeIn>

      {/* Main grid */}
      <FadeIn delay={0.15} y={20}>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-px border border-[#D7E2EA]/10 rounded-[32px] overflow-hidden mb-px">

          {/* Left — name + tagline */}
          <div className="p-8 sm:p-10 md:p-12 flex flex-col justify-between gap-10" style={{ background: '#111' }}>
            <div>
              <p className="text-xs uppercase tracking-[0.2em] mb-3" style={{ color: '#D7E2EA', opacity: 0.35 }}>
                IT Support & Web Designer
              </p>
              <h3
                className="font-black uppercase leading-none"
                style={{ color: '#D7E2EA', fontSize: 'clamp(1.8rem, 4vw, 3.5rem)' }}
              >
                Alireza<br />Makvandi
              </h3>
            </div>
            <div className="flex items-center gap-3">
              <span
                className="w-2 h-2 rounded-full animate-pulse"
                style={{ background: '#4ade80' }}
              />
              <span className="text-xs uppercase tracking-widest" style={{ color: '#D7E2EA', opacity: 0.5 }}>
                Åben for nye muligheder
              </span>
            </div>
          </div>

          {/* Right — contact links */}
          <div className="flex flex-col divide-y" style={{ background: '#0f0f0f', borderColor: 'rgba(215,226,234,0.08)' }}>
            {[
              { icon: Phone, label: '+45 91 48 88 43', sub: 'Telefon', href: 'tel:+4591488843' },
              { icon: Mail, label: 'alirezadk2016@gmail.com', sub: 'E-mail', href: 'mailto:alirezadk2016@gmail.com' },
              { icon: Linkedin, label: 'Alireza Makvandi', sub: 'LinkedIn', href: 'https://dk.linkedin.com/in/alireza-makvandi-446704301' },
              { icon: Instagram, label: '@alireza__tak', sub: 'Instagram', href: 'https://www.instagram.com/alireza__tak/' },
            ].map(({ icon: Icon, label, sub, href }) => (
              <a
                key={sub}
                href={href}
                target={href.startsWith('http') ? '_blank' : undefined}
                rel="noopener noreferrer"
                className="group flex items-center gap-5 px-8 py-5 transition-colors duration-200 hover:bg-white/[0.03]"
              >
                <Icon size={16} style={{ color: '#D7E2EA', opacity: 0.35 }} className="flex-shrink-0" />
                <div className="flex flex-col min-w-0">
                  <span className="text-xs uppercase tracking-widest mb-0.5" style={{ color: '#D7E2EA', opacity: 0.3 }}>{sub}</span>
                  <span className="font-medium truncate" style={{ color: '#D7E2EA', fontSize: 'clamp(0.8rem, 1.3vw, 1rem)' }}>{label}</span>
                </div>
                <span className="ml-auto opacity-0 group-hover:opacity-30 transition-opacity text-lg" style={{ color: '#D7E2EA' }}>→</span>
              </a>
            ))}
          </div>
        </div>
      </FadeIn>

      {/* Bottom bar */}
      <FadeIn delay={0.25} y={10}>
        <div className="flex flex-col sm:flex-row items-center justify-between gap-3 pt-8 border-t border-[#D7E2EA]/10">
          <p className="text-xs uppercase tracking-widest" style={{ color: '#D7E2EA', opacity: 0.2 }}>
            © 2026 Alireza Makvandi
          </p>
          <div className="flex items-center gap-2" style={{ color: '#D7E2EA', opacity: 0.2 }}>
            <MapPin size={12} />
            <p className="text-xs uppercase tracking-widest">Aarhus N 8200 · Danmark</p>
          </div>
        </div>
      </FadeIn>
    </section>
  )
}
