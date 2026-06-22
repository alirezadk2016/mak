import React from 'react'
import FadeIn from './FadeIn'
import ContactButton from './ContactButton'
import AnimatedText from './AnimatedText'

export default function AboutSection() {
  return (
    <section
      id="about"
      className="relative min-h-screen flex flex-col items-center justify-center px-5 sm:px-8 md:px-10 py-20 overflow-hidden"
      style={{ background: '#0C0C0C' }}
    >
      {/* Decorative skill tags floating */}
      <FadeIn delay={0.1} x={-60} y={0} duration={1} className="absolute top-[8%] left-[2%] md:left-[4%] hidden sm:block">
        <div className="flex flex-col gap-2">
          {['Windows Server', 'Active Directory', 'VMware'].map(s => (
            <span key={s} className="text-xs uppercase tracking-widest px-3 py-1.5 rounded-full border border-[#D7E2EA]/20 text-[#D7E2EA]/40 whitespace-nowrap">{s}</span>
          ))}
        </div>
      </FadeIn>
      <FadeIn delay={0.2} x={-60} y={0} duration={1} className="absolute bottom-[10%] left-[2%] md:left-[6%] hidden sm:block">
        <div className="flex flex-col gap-2">
          {['Linux', 'DNS & DHCP', 'GPO'].map(s => (
            <span key={s} className="text-xs uppercase tracking-widest px-3 py-1.5 rounded-full border border-[#D7E2EA]/20 text-[#D7E2EA]/40 whitespace-nowrap">{s}</span>
          ))}
        </div>
      </FadeIn>
      <FadeIn delay={0.15} x={60} y={0} duration={1} className="absolute top-[8%] right-[2%] md:right-[4%] hidden sm:block">
        <div className="flex flex-col gap-2 items-end">
          {['React', 'TypeScript', 'Web Design'].map(s => (
            <span key={s} className="text-xs uppercase tracking-widest px-3 py-1.5 rounded-full border border-[#D7E2EA]/20 text-[#D7E2EA]/40 whitespace-nowrap">{s}</span>
          ))}
        </div>
      </FadeIn>
      <FadeIn delay={0.3} x={60} y={0} duration={1} className="absolute bottom-[10%] right-[2%] md:right-[6%] hidden sm:block">
        <div className="flex flex-col gap-2 items-end">
          {['IT-sikkerhed', 'Hardware', 'Netværk'].map(s => (
            <span key={s} className="text-xs uppercase tracking-widest px-3 py-1.5 rounded-full border border-[#D7E2EA]/20 text-[#D7E2EA]/40 whitespace-nowrap">{s}</span>
          ))}
        </div>
      </FadeIn>

      {/* Content */}
      <div className="flex flex-col items-center gap-10 sm:gap-14 md:gap-16 z-10 max-w-3xl text-center">
        <FadeIn delay={0} y={40}>
          <h2
            className="hero-heading font-black uppercase leading-none tracking-tight"
            style={{ fontSize: 'clamp(3rem, 12vw, 160px)' }}
          >
            About me
          </h2>
        </FadeIn>

        <div className="flex flex-col items-center gap-10 sm:gap-12">
          <AnimatedText
            text="Nyuddannet IT-supporter fra Aarhus Tech med solid erfaring inden for netværk, servere og brugersupport. Jeg kombinerer teknisk præcision med et øje for design — og jeg er klar til at bidrage fra dag ét."
            className="font-medium text-center leading-relaxed"
            style={{ color: '#D7E2EA', fontSize: 'clamp(1rem, 2vw, 1.35rem)' } as React.CSSProperties}
          />

          {/* Stats */}
          <FadeIn delay={0.3} y={20}>
            <div className="grid grid-cols-3 gap-8 sm:gap-16 mt-2">
              {[
                { num: '3+', label: 'Virksomheder' },
                { num: '2026', label: 'Aarhus Tech' },
                { num: '6', label: 'IT Services' },
              ].map((stat) => (
                <div key={stat.label} className="flex flex-col items-center gap-1">
                  <span
                    className="font-black leading-none"
                    style={{ color: '#D7E2EA', fontSize: 'clamp(2rem, 5vw, 4rem)' }}
                  >
                    {stat.num}
                  </span>
                  <span
                    className="uppercase tracking-widest text-xs"
                    style={{ color: '#D7E2EA', opacity: 0.4 }}
                  >
                    {stat.label}
                  </span>
                </div>
              ))}
            </div>
          </FadeIn>

          <FadeIn delay={0.4} y={20}>
            <ContactButton />
          </FadeIn>
        </div>
      </div>
    </section>
  )
}
