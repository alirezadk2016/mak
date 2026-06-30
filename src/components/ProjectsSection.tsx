import { useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import FadeIn from './FadeIn'
import SmartImage from './SmartImage'
import { useLang } from '../contexts/LanguageContext'
import { t } from '../translations'
import { useNavigate } from 'react-router-dom'
import { ArrowUpRight } from 'lucide-react'

const projects = [
  {
    num: '01',
    category: { da: 'Kunde', en: 'Client' },
    name: 'Elite Vask',
    href: '/projects/elite-vask',
    external: false,
    col1img1: 'https://image.thum.io/get/width/640/crop/500/https://www.elite-vask.dk/',
    col1img2: 'https://image.thum.io/get/width/640/crop/500/https://www.elite-vask.dk/booking',
    col2img: 'https://image.thum.io/get/width/1280/crop/900/https://www.elite-vask.dk/',
  },
  {
    num: '02',
    category: { da: 'Skole — Aarhus Tech', en: 'School — Aarhus Tech' },
    name: 'Svendeprøve',
    href: '/projects/svendeproeve',
    external: false,
    col1img1: '/photo_2026-05-08_09-04-19.jpg',
    col1img2: '/photo_2026-05-08_09-04-19.jpg',
    col2img: '/photo_2026-05-08_09-04-19.jpg',
  },
  {
    num: '03',
    category: { da: 'Kunde — Australien', en: 'Client — Australia' },
    name: 'MAK Painting',
    href: '/projects/mak-painting',
    external: false,
    col1img1: 'https://image.thum.io/get/width/640/crop/500/https://www.makvandi.info/en',
    col1img2: 'https://image.thum.io/get/width/640/crop/500/https://www.makvandi.info/en/gallery',
    col2img: 'https://image.thum.io/get/width/1280/crop/900/https://www.makvandi.info/en',
  },
  {
    num: '04',
    category: { da: 'Personligt projekt', en: 'Personal Project' },
    name: 'Gaming PC Build',
    href: '/projects/gaming-pc',
    external: false,
    col1img1: '/gaming-pc.jpeg',
    col1img2: '/gaming-pc.jpeg',
    col2img: '/gaming-pc.jpeg',
  },
  {
    num: '05',
    category: { da: 'Kommer snart', en: 'Coming Soon' },
    name: '———',
    href: null,
    external: false,
    col1img1: null,
    col1img2: null,
    col2img: null,
  },
]

function ProjectCard({
  project, index, total, lang, btnLabel,
}: {
  project: typeof projects[0]
  index: number
  total: number
  lang: 'da' | 'en'
  btnLabel: string
}) {
  const cardRef = useRef<HTMLDivElement>(null)
  const navigate = useNavigate()
  const { scrollYProgress } = useScroll({ target: cardRef, offset: ['start end', 'end start'] })
  const targetScale = 1 - (total - 1 - index) * 0.025
  const scale = useTransform(scrollYProgress, [0, 1], [1, targetScale])

  function handleClick() {
    if (!project.href) return
    if (project.external) window.open(project.href, '_blank')
    else navigate(project.href)
  }

  return (
    <div
      ref={cardRef}
      className="flex items-start justify-center"
      style={{ height: project.col2img ? 'min(80vh, 680px)' : 'auto', paddingTop: index * 18 + 'px' }}
    >
      <motion.div
        style={{ scale, top: 72 + index * 18 + 'px', position: 'sticky', cursor: project.href ? 'pointer' : 'default' }}
        className="w-full"
        onClick={handleClick}
      >
        {/* Outer frame */}
        <div
          className="relative rounded-[28px] sm:rounded-[44px] border border-[#D7E2EA]/12 overflow-hidden"
          style={{ background: 'linear-gradient(145deg, #111111 0%, #0C0C0C 100%)' }}
        >
          {/* Top bar */}
          <div className="flex items-center justify-between px-5 sm:px-8 pt-5 sm:pt-7 pb-4 sm:pb-5">
            <div className="flex items-center gap-4">
              <span
                className="font-black leading-none"
                style={{ color: '#D7E2EA', opacity: 0.12, fontSize: 'clamp(3rem, 8vw, 7rem)', lineHeight: 1 }}
              >
                {project.num}
              </span>
              <div className="flex flex-col gap-0.5">
                <span style={{ color: '#D7E2EA', opacity: 0.3, fontSize: '10px', letterSpacing: '0.28em', textTransform: 'uppercase' }}>
                  {project.category[lang]}
                </span>
                <span
                  className="font-bold uppercase"
                  style={{ color: '#D7E2EA', fontSize: 'clamp(1rem, 2.5vw, 1.8rem)', letterSpacing: '-0.01em' }}
                >
                  {project.name}
                </span>
              </div>
            </div>

            {project.href && (
              <motion.button
                whileHover={{ scale: 1.06 }}
                whileTap={{ scale: 0.97 }}
                className="flex items-center gap-2 rounded-full border border-[#D7E2EA]/20 hover:border-[#D7E2EA]/50 transition-colors duration-300"
                style={{ color: '#D7E2EA', padding: '8px 18px', fontSize: '11px', letterSpacing: '0.18em', textTransform: 'uppercase', fontWeight: 500 }}
                onClick={(e) => { e.stopPropagation(); handleClick() }}
              >
                {btnLabel}
                <ArrowUpRight size={13} strokeWidth={1.8} />
              </motion.button>
            )}
          </div>

          {/* Thin divider */}
          {project.col2img && <div className="mx-5 sm:mx-8 mb-4 sm:mb-5 h-px" style={{ background: 'rgba(215,226,234,0.06)' }} />}

          {/* Coming Soon placeholder */}
          {!project.col2img && (
            <div className="flex flex-col items-center justify-center gap-4 px-5 sm:px-8 py-16 sm:py-20">
              <div className="w-10 h-px" style={{ background: 'rgba(215,226,234,0.15)' }} />
              <span style={{ color: '#D7E2EA', opacity: 0.18, fontSize: 'clamp(0.65rem, 1.2vw, 0.85rem)', letterSpacing: '0.5em', textTransform: 'uppercase' }}>
                {lang === 'da' ? 'Kommer snart' : 'Coming Soon'}
              </span>
              <div className="w-10 h-px" style={{ background: 'rgba(215,226,234,0.15)' }} />
            </div>
          )}

          {/* Images */}
          {project.col2img && <div className="px-3 sm:px-5 pb-3 sm:pb-5">
            {/* Desktop: two-column */}
            <div className="hidden sm:flex gap-3" style={{ height: 'clamp(260px, 36vw, 460px)' }}>
              <div className="flex flex-col gap-3" style={{ width: '38%' }}>
                <SmartImage
                  src={project.col1img1!}
                  label={project.name}
                  className="w-full rounded-[16px] sm:rounded-[24px]"
                  imgClassName="w-full h-full object-cover"
                  style={{ flex: '0 0 38%' }}
                />
                <SmartImage
                  src={project.col1img2!}
                  label={project.name}
                  className="w-full rounded-[16px] sm:rounded-[24px]"
                  imgClassName="w-full h-full object-cover"
                  style={{ flex: '1 1 0' }}
                />
              </div>
              <div style={{ width: '62%' }}>
                <SmartImage
                  src={project.col2img}
                  label={project.name}
                  className="w-full h-full rounded-[16px] sm:rounded-[24px]"
                  imgClassName="w-full h-full object-cover"
                />
              </div>
            </div>
            {/* Mobile: single image */}
            <div className="sm:hidden">
              <SmartImage
                src={project.col2img}
                label={project.name}
                className="w-full rounded-[14px]"
                imgClassName="w-full h-full object-cover"
                style={{ height: '48vw' }}
              />
            </div>
          </div>
          }
        </div>
      </motion.div>
    </div>
  )
}

export default function ProjectsSection() {
  const { lang } = useLang()
  const tx = t[lang].projects

  return (
    <section
      id="projects"
      className="rounded-t-[40px] sm:rounded-t-[50px] md:rounded-t-[60px] -mt-10 z-10 relative px-3 sm:px-5 md:px-8 py-16 sm:py-24 md:py-32"
      style={{ background: '#0C0C0C' }}
    >
      <FadeIn delay={0} y={40}>
        <h2
          className="hero-heading font-black uppercase leading-none tracking-tight text-center mb-6"
          style={{ fontSize: 'clamp(3rem, 12vw, 160px)', color: '#D7E2EA' }}
        >
          {tx.heading}
        </h2>
      </FadeIn>
      <FadeIn delay={0.15} y={20}>
        <p
          className="text-center max-w-xl mx-auto mb-16 sm:mb-20 md:mb-28 font-light leading-relaxed"
          style={{ color: '#D7E2EA', opacity: 0.4, fontSize: 'clamp(0.85rem, 1.4vw, 1.05rem)' }}
        >
          {tx.subheading}
        </p>
      </FadeIn>

      <div className="flex flex-col max-w-5xl mx-auto">
        {projects.map((p, i) => (
          <ProjectCard
            key={p.num}
            project={p}
            index={i}
            total={projects.length}
            lang={lang}
            btnLabel={p.external ? tx.liveProject : tx.viewProject}
          />
        ))}
      </div>
    </section>
  )
}
