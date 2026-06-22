import FadeIn from './FadeIn'
import Magnet from './Magnet'
import ContactButton from './ContactButton'

export default function HeroSection() {
  return (
    <section className="min-h-screen flex flex-col overflow-x-clip relative" style={{ background: '#0C0C0C' }}>

      {/* Navbar */}
      <FadeIn delay={0} y={-20}>
        <nav className="flex justify-between px-5 sm:px-8 md:px-10 pt-5 sm:pt-6 md:pt-8 relative z-30">
          {['About', 'Experience', 'Projects'].map((link) => (
            <a
              key={link}
              href={`#${link.toLowerCase()}`}
              className="text-xs sm:text-lg lg:text-[1.4rem] font-medium uppercase tracking-wider transition-opacity duration-200 hover:opacity-70"
              style={{ color: '#D7E2EA' }}
            >
              {link}
            </a>
          ))}
          <a
            href="#contact"
            className="text-xs sm:text-lg lg:text-[1.4rem] font-medium uppercase tracking-wider transition-opacity duration-200 hover:opacity-70"
            style={{ color: '#D7E2EA' }}
          >
            Contact
          </a>
        </nav>
      </FadeIn>

      {/* ── MOBILE layout ── */}
      <div className="flex flex-col items-center px-5 pt-8 pb-10 gap-6 sm:hidden flex-1 justify-center">

        {/* Photo */}
        <FadeIn delay={0.2} y={20}>
          <img
            src="/makiller206_httpss.mj.runDAG4jtFgmFg_futuristic-cyberpunk-hacke_c19c548b-71f0-436f-bd58-a9eb2dbeb7cd.png"
            alt="Alireza Makvandi"
            className="w-36 h-36 rounded-full object-cover border-2"
            style={{ borderColor: 'rgba(215,226,234,0.2)' }}
          />
        </FadeIn>

        {/* Name */}
        <FadeIn delay={0.3} y={20}>
          <h1
            className="hero-heading font-black uppercase tracking-tight leading-none text-center"
            style={{ fontSize: '18vw', color: '#D7E2EA' }}
          >
            Hi, i'm Mak
          </h1>
        </FadeIn>

        {/* Role */}
        <FadeIn delay={0.4} y={20}>
          <p
            className="text-center font-light uppercase tracking-widest text-xs leading-relaxed max-w-[260px]"
            style={{ color: '#D7E2EA', opacity: 0.5 }}
          >
            IT Support & Web Designer
          </p>
        </FadeIn>

        {/* Contact info */}
        <FadeIn delay={0.5} y={20}>
          <div className="flex flex-col items-center gap-2 w-full">
            <a
              href="tel:+4591488843"
              className="w-full text-center py-3 rounded-full border text-xs uppercase tracking-widest transition-opacity hover:opacity-60"
              style={{ color: '#D7E2EA', borderColor: 'rgba(215,226,234,0.2)', fontSize: '0.7rem' }}
            >
              +45 91 48 88 43
            </a>
            <a
              href="mailto:alirezadk2016@gmail.com"
              className="w-full text-center py-3 rounded-full border text-xs uppercase tracking-widest transition-opacity hover:opacity-60"
              style={{ color: '#D7E2EA', borderColor: 'rgba(215,226,234,0.2)', fontSize: '0.7rem' }}
            >
              alirezadk2016@gmail.com
            </a>
          </div>
        </FadeIn>

        {/* CTA */}
        <FadeIn delay={0.6} y={20}>
          <ContactButton />
        </FadeIn>

      </div>

      {/* ── DESKTOP layout ── */}
      <div className="hidden sm:flex sm:flex-col sm:flex-1">

        {/* Hero heading */}
        <div className="overflow-hidden">
          <FadeIn delay={0.15} y={40}>
            <h1
              className="hero-heading font-black uppercase tracking-tight leading-none whitespace-nowrap w-full text-center mt-4 md:-mt-5"
              style={{ fontSize: 'clamp(12vw, 17.5vw, 17.5vw)', color: '#D7E2EA' }}
            >
              Hi, i&apos;m Mak
            </h1>
          </FadeIn>
        </div>

        {/* Portrait */}
        <Magnet
          padding={150}
          strength={3}
          activeTransition="transform 0.3s ease-out"
          inactiveTransition="transform 0.6s ease-in-out"
          className="absolute left-1/2 -translate-x-1/2 z-10 bottom-0 w-[280px] md:w-[340px] lg:w-[400px]"
        >
          <FadeIn delay={0.6} y={30}>
            <img
              src="/makiller206_httpss.mj.runDAG4jtFgmFg_futuristic-cyberpunk-hacke_c19c548b-71f0-436f-bd58-a9eb2dbeb7cd.png"
              alt="Alireza Makvandi"
              className="w-full rounded-full object-cover aspect-square border-2"
              style={{ borderColor: 'rgba(215,226,234,0.2)' }}
            />
          </FadeIn>
        </Magnet>

        {/* Bottom bar */}
        <div className="mt-auto flex justify-between items-end px-8 md:px-10 pb-8 md:pb-10 relative z-20 gap-4">
          <FadeIn delay={0.35} y={20}>
            <p
              className="font-light uppercase tracking-wide leading-snug max-w-[200px] md:max-w-[280px]"
              style={{ color: '#D7E2EA', fontSize: 'clamp(0.7rem, 1.2vw, 1.1rem)' }}
            >
              IT Support & Web Designer
            </p>
          </FadeIn>
          <FadeIn delay={0.5} y={20}>
            <ContactButton />
          </FadeIn>
        </div>
      </div>

    </section>
  )
}
