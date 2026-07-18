import { motion } from 'framer-motion'
import { useNavigate } from 'react-router-dom'
import { ArrowUpRight } from 'lucide-react'
import FadeIn from './FadeIn'
import SmartImage from './SmartImage'
import BrandCover from './BrandCover'
import { useLang } from '../contexts/LanguageContext'
import { t } from '../translations'

const projects = [
  {
    num: '01',
    category: { da: 'Skole — Aarhus Tech', en: 'School — Aarhus Tech' },
    sub: null,
    name: 'Svendeprøve',
    href: '/projects/svendeproeve',
    accent: '#FF6B00',
    img: '/photo_2026-05-08_09-04-19.jpg',
  },
  {
    num: '02',
    category: { da: 'Personligt projekt', en: 'Personal Project' },
    sub: null,
    name: 'Gaming PC Build',
    href: '/projects/gaming-pc',
    accent: '#7C5CBF',
    img: '/gaming-pc.jpeg',
  },
  {
    num: '03',
    category: { da: 'Kunde', en: 'Client' },
    sub: { da: 'Webløsning · Booking', en: 'Web solution · Booking' },
    name: 'Elite Vask',
    href: '/projects/elite-vask',
    accent: '#3E9BD6',
    img: null,
  },
  {
    num: '04',
    category: { da: 'Kunde — Australien', en: 'Client — Australia' },
    sub: { da: 'Hjemmeside · Admin-panel', en: 'Website · Admin panel' },
    name: 'MAK Painting',
    href: '/projects/mak-painting',
    accent: '#C9A96E',
    img: null,
  },
]

function ProjectCard({ project, index, lang, btnLabel }: {
  project: typeof projects[0]
  index: number
  lang: 'da' | 'en'
  btnLabel: string
}) {
  const navigate = useNavigate()
  const accent = project.accent

  return (
    <motion.div
      initial={{ opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.55, delay: (index % 2) * 0.08, ease: [0.22, 1, 0.36, 1] }}
      className="group cursor-pointer"
      onClick={() => navigate(project.href)}
    >
      <motion.div
        whileHover={{ y: -8 }}
        transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
        className="relative rounded-[22px] overflow-hidden h-full"
        style={{
          background: 'linear-gradient(160deg, rgba(232,224,213,0.045) 0%, rgba(232,224,213,0.015) 100%)',
          border: '1px solid rgba(232,224,213,0.09)',
        }}
      >
        {/* Accent top line — grows on hover */}
        <div
          className="absolute top-0 left-0 right-0 h-[2px] z-10 origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-500"
          style={{ background: `linear-gradient(to right, ${accent}, transparent 80%)` }}
        />

        {/* Cover */}
        <div className="relative overflow-hidden" style={{ aspectRatio: '16/9' }}>
          <div className="w-full h-full transition-transform duration-500 ease-out group-hover:scale-[1.04]">
            {project.img ? (
              <SmartImage
                src={project.img}
                alt={project.name}
                label={project.name}
                accent={accent}
                className="w-full h-full"
                imgClassName="w-full h-full object-cover object-top"
              />
            ) : (
              <BrandCover
                name={project.name}
                sub={project.sub ? project.sub[lang] : undefined}
                accent={accent}
                className="w-full h-full"
              />
            )}
          </div>
          {project.img && (
            <div className="absolute inset-x-0 bottom-0 h-16 pointer-events-none"
              style={{ background: 'linear-gradient(to top, rgba(13,12,10,0.85), transparent)' }} />
          )}
          {/* Number badge */}
          <span
            className="absolute top-4 left-5 font-black leading-none pointer-events-none"
            style={{ color: '#E8DDD0', opacity: 0.18, fontSize: '44px', fontFamily: 'Kanit, sans-serif' }}
          >
            {project.num}
          </span>
        </div>

        {/* Text */}
        <div className="p-5 sm:p-6">
          <div className="flex items-center justify-between mb-2.5">
            <span style={{ color: accent, fontSize: '10px', letterSpacing: '0.22em', textTransform: 'uppercase', fontWeight: 600, opacity: 0.9 }}>
              {project.category[lang]}
            </span>
            <span
              className="flex items-center gap-1.5 sm:opacity-0 sm:translate-y-1 sm:group-hover:opacity-100 sm:group-hover:translate-y-0 transition-all duration-300"
              style={{ color: '#E8DDD0', fontSize: '10px', letterSpacing: '0.18em', textTransform: 'uppercase' }}
            >
              {btnLabel}
              <ArrowUpRight size={12} strokeWidth={1.8} style={{ color: accent }} />
            </span>
          </div>
          <h3 className="font-bold uppercase" style={{ color: '#E8DDD0', fontSize: '17px', letterSpacing: '0.01em' }}>
            {project.name}
          </h3>
        </div>
      </motion.div>
    </motion.div>
  )
}

export default function ProjectsSection() {
  const { lang } = useLang()
  const tx = t[lang].projects

  return (
    <section
      id="projects"
      className="px-5 sm:px-8 md:px-10 pt-6 sm:pt-8 md:pt-10 pb-14 sm:pb-20 md:pb-24 relative z-10"
      style={{ background: '#0A0908' }}
    >
      <FadeIn delay={0} y={16}>
        <p className="serif-accent text-center mb-2" style={{ color: '#C9A96E', fontSize: 'clamp(1.05rem, 1.6vw, 1.4rem)', opacity: 0.85 }}>
          {lang === 'da' ? 'ting, jeg har bygget' : 'things I have built'}
        </p>
      </FadeIn>
      <FadeIn delay={0.05} y={40}>
        <h2
          className="hero-heading font-black uppercase leading-none tracking-tight text-center mb-5"
          style={{ fontSize: 'clamp(2.6rem, 10vw, 120px)' }}
        >
          {tx.heading}
        </h2>
      </FadeIn>
      <FadeIn delay={0.15} y={20}>
        <p
          className="text-center max-w-xl mx-auto mb-10 sm:mb-12 md:mb-14 font-light leading-relaxed"
          style={{ color: '#E8DDD0', opacity: 0.4, fontSize: 'clamp(0.85rem, 1.4vw, 1.05rem)' }}
        >
          {tx.subheading}
        </p>
      </FadeIn>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-5 max-w-5xl mx-auto">
        {projects.map((p, i) => (
          <ProjectCard key={p.num} project={p} index={i} lang={lang} btnLabel={tx.viewProject} />
        ))}
      </div>
    </section>
  )
}
