import FadeIn from './FadeIn'
import Magnet from './Magnet'
import ContactButton from './ContactButton'

export default function HeroSection() {
  return (
    <section className="h-screen flex flex-col overflow-x-clip relative" style={{ background: '#0C0C0C' }}>
      {/* Navbar */}
      <FadeIn delay={0} y={-20}>
        <nav className="flex justify-between px-6 md:px-10 pt-6 md:pt-8">
          {['About', 'Experience', 'Projects'].map((link) => (
            <a
              key={link}
              href={`#${link.toLowerCase()}`}
              className="text-sm md:text-lg lg:text-[1.4rem] font-medium uppercase tracking-wider transition-opacity duration-200 hover:opacity-70"
              style={{ color: '#D7E2EA' }}
            >
              {link}
            </a>
          ))}
          <a
            href="https://dk.linkedin.com/in/alireza-makvandi-446704301"
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm md:text-lg lg:text-[1.4rem] font-medium uppercase tracking-wider transition-opacity duration-200 hover:opacity-70"
            style={{ color: '#D7E2EA' }}
          >
            Contact
          </a>
        </nav>
      </FadeIn>

      {/* Hero heading */}
      <div className="overflow-hidden">
        <FadeIn delay={0.15} y={40}>
          <h1
            className="hero-heading font-black uppercase tracking-tight leading-none whitespace-nowrap w-full text-center mt-6 sm:mt-4 md:-mt-5"
            style={{ fontSize: 'clamp(12vw, 17.5vw, 17.5vw)' }}
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
        className="absolute left-1/2 -translate-x-1/2 z-10 top-1/2 -translate-y-1/2 sm:top-auto sm:translate-y-0 sm:bottom-0 w-[220px] sm:w-[280px] md:w-[340px] lg:w-[400px]"
      >
        <FadeIn delay={0.6} y={30}>
          <div
            className="w-full aspect-square rounded-full flex items-center justify-center border-2 border-[#D7E2EA]/20"
            style={{ background: 'linear-gradient(135deg, #18011F 0%, #7621B0 50%, #BE4C00 100%)' }}
          >
            <span
              className="font-black uppercase tracking-tight select-none"
              style={{ color: '#D7E2EA', fontSize: 'clamp(4rem, 12vw, 10rem)' }}
            >
              AM
            </span>
          </div>
        </FadeIn>
      </Magnet>

      {/* Bottom bar */}
      <div className="mt-auto flex justify-between items-end px-6 md:px-10 pb-7 sm:pb-8 md:pb-10 relative z-20">
        <FadeIn delay={0.35} y={20}>
          <p
            className="font-light uppercase tracking-wide leading-snug max-w-[160px] sm:max-w-[220px] md:max-w-[260px]"
            style={{ color: '#D7E2EA', fontSize: 'clamp(0.75rem, 1.4vw, 1.5rem)' }}
          >
            IT Support & Web Designer — turning complex problems into clean, powerful digital experiences
          </p>
        </FadeIn>
        <FadeIn delay={0.5} y={20}>
          <ContactButton />
        </FadeIn>
      </div>
    </section>
  )
}
