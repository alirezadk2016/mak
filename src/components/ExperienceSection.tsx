import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import FadeIn from './FadeIn'

const experiences = [
  {
    company: 'YouSee',
    role: 'Customer Service & Administration',
    period: 'IGU Program',
    url: 'https://yousee.dk/',
    screenshot: 'https://image.thum.io/get/width/1280/crop/720/https://yousee.dk/',
    tasks: [
      'Kundeservice og daglig administration',
      'Klar kommunikation med ikke-tekniske brugere',
      'Håndtering af henvendelser og administrative opgaver',
    ],
  },
  {
    company: 'Fourcom',
    role: 'IT Support Intern',
    period: '2 måneders praktik',
    url: 'https://en.fourcom.dk/',
    screenshot: 'https://image.thum.io/get/width/1280/crop/720/https://en.fourcom.dk/',
    tasks: [
      'Installation og konfiguration af Windows',
      'Hardwarefejlfinding og komponentudskiftning',
      'Teknisk support til slutbrugere',
    ],
  },
  {
    company: 'Aarhus Tech / Folkehuse',
    role: 'IT Support — Skolepraktik',
    period: 'Skolepraktik',
    url: 'https://folkehuse.aarhus.dk/',
    screenshot: 'https://image.thum.io/get/width/1280/crop/720/https://folkehuse.aarhus.dk/',
    tasks: [
      'IT-support på tværs af flere institutioner',
      'Hjælp til ældre borgere på plejehjem',
      'Teknisk support under eksamener',
      'Login, e-mail, printer og softwareinstallation',
    ],
  },
]

export default function ExperienceSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  return (
    <section
      className="px-5 sm:px-8 md:px-10 py-20 sm:py-24 md:py-32 relative z-10"
      style={{ background: '#0C0C0C' }}
    >
      <FadeIn delay={0} y={40}>
        <h2
          className="hero-heading font-black uppercase leading-none tracking-tight text-center mb-16 sm:mb-20 md:mb-28"
          style={{ fontSize: 'clamp(3rem, 12vw, 160px)', color: '#D7E2EA' }}
        >
          Experience
        </h2>
      </FadeIn>

      <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-6xl mx-auto">
        {experiences.map((exp, i) => (
          <FadeIn key={i} delay={i * 0.1} y={30}>
            <div className="flex flex-col gap-4">
              {/* Screenshot card linking to site */}
              <a
                href={exp.url}
                target="_blank"
                rel="noopener noreferrer"
                className="block overflow-hidden rounded-[24px] border-2 border-[#D7E2EA]/20 hover:border-[#D7E2EA]/60 transition-all duration-300 group"
              >
                <div className="relative overflow-hidden" style={{ aspectRatio: '16/9' }}>
                  <img
                    src={exp.screenshot}
                    alt={exp.company}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-all duration-300 flex items-center justify-center opacity-0 group-hover:opacity-100">
                    <span className="text-white text-sm font-medium uppercase tracking-widest border border-white rounded-full px-4 py-2">
                      Visit Site →
                    </span>
                  </div>
                </div>
              </a>

              {/* Info + expand */}
              <div>
                <div className="flex items-start justify-between">
                  <div>
                    <p className="text-[#D7E2EA]/50 uppercase tracking-widest text-xs mb-1">{exp.period}</p>
                    <h3 className="text-[#D7E2EA] font-bold text-lg uppercase">{exp.company}</h3>
                    <p className="text-[#D7E2EA]/70 text-sm">{exp.role}</p>
                  </div>
                  <button
                    onClick={() => setOpenIndex(openIndex === i ? null : i)}
                    className="mt-1 text-[#D7E2EA]/50 hover:text-[#D7E2EA] transition-colors text-xl font-light"
                  >
                    {openIndex === i ? '−' : '+'}
                  </button>
                </div>

                <AnimatePresence>
                  {openIndex === i && (
                    <motion.ul
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: 'auto' }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.3 }}
                      className="overflow-hidden mt-3 space-y-2"
                    >
                      {exp.tasks.map((task, j) => (
                        <li key={j} className="flex items-start gap-2 text-[#D7E2EA]/70 text-sm">
                          <span className="text-[#B600A8] mt-1">▸</span>
                          {task}
                        </li>
                      ))}
                    </motion.ul>
                  )}
                </AnimatePresence>
              </div>
            </div>
          </FadeIn>
        ))}
      </div>
    </section>
  )
}
