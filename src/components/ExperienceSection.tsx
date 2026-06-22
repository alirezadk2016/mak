import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import FadeIn from './FadeIn'

const experiences = [
  {
    slug: 'yousee',
    company: 'YouSee',
    role: 'Customer Service & Administration',
    period: 'IGU Program',
    screenshot: 'https://image.thum.io/get/width/1280/crop/720/https://yousee.dk/',
  },
  {
    slug: 'fourcom',
    company: 'Fourcom',
    role: 'IT Support Intern',
    period: '2 måneders praktik',
    screenshot: 'https://image.thum.io/get/width/1280/crop/720/https://en.fourcom.dk/',
  },
  {
    slug: 'folkehuse',
    company: 'Folkehuse Aarhus',
    role: 'IT Support — Skolepraktik',
    period: 'Skolepraktik',
    screenshot: 'https://image.thum.io/get/width/1280/crop/720/https://folkehuse.aarhus.dk/',
  },
]

export default function ExperienceSection() {
  return (
    <section
      id="experience"
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

      <div className="grid grid-cols-1 sm:grid-cols-3 gap-5 max-w-6xl mx-auto">
        {experiences.map((exp, i) => (
          <FadeIn key={i} delay={i * 0.1} y={30}>
            <Link to={`/experience/${exp.slug}`} className="group block">
              <motion.div
                whileHover={{ y: -6 }}
                transition={{ duration: 0.3 }}
                className="rounded-[24px] border-2 border-[#D7E2EA]/20 group-hover:border-[#D7E2EA]/50 overflow-hidden transition-colors duration-300"
              >
                {/* Screenshot */}
                <div className="relative overflow-hidden" style={{ aspectRatio: '16/9' }}>
                  <img
                    src={exp.screenshot}
                    alt={exp.company}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-black/50 group-hover:bg-black/20 transition-all duration-300 flex items-center justify-center">
                    <span className="text-white text-sm font-medium uppercase tracking-widest border border-white rounded-full px-4 py-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      View Details →
                    </span>
                  </div>
                </div>

                {/* Info */}
                <div className="p-5">
                  <p className="text-[#D7E2EA]/40 uppercase tracking-widest text-xs mb-1">{exp.period}</p>
                  <h3 className="text-[#D7E2EA] font-bold text-base uppercase mb-0.5">{exp.company}</h3>
                  <p className="text-[#D7E2EA]/60 text-sm">{exp.role}</p>
                </div>
              </motion.div>
            </Link>
          </FadeIn>
        ))}
      </div>
    </section>
  )
}
