import { useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import FadeIn from './FadeIn'
import LiveProjectButton from './LiveProjectButton'

const projects = [
  {
    num: '01',
    category: 'Client',
    name: 'Elite Vask',
    href: 'https://www.elite-vask.dk/',
    col1img1: 'https://image.thum.io/get/width/640/crop/500/https://www.elite-vask.dk/',
    col1img2: 'https://image.thum.io/get/width/640/crop/500/https://www.elite-vask.dk/eksempler',
    col2img: 'https://image.thum.io/get/width/1280/crop/900/https://www.elite-vask.dk/',
  },
  {
    num: '02',
    category: 'Client',
    name: 'Nextlevel Studio',
    col1img1: 'https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_38xzZboKViGWJOttwIXH07lWA1P%2Fhf_20260412_055344_5eff02e0-87a5-41ce-b64f-eb08da8f33db.png&w=1280&q=85',
    col1img2: 'https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_38xzZboKViGWJOttwIXH07lWA1P%2Fhf_20260412_055431_11d841fd-8b41-46a5-82e4-b04f2407a7d8.png&w=1280&q=85',
    col2img: 'https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_38xzZboKViGWJOttwIXH07lWA1P%2Fhf_20260412_055451_e317bf2d-28d4-48cc-86b0-6f72f25b6327.png&w=1280&q=85',
  },
  {
    num: '03',
    category: 'Personal',
    name: 'Aura Brand Identity',
    col1img1: 'https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_38xzZboKViGWJOttwIXH07lWA1P%2Fhf_20260412_055654_911201c5-36d9-4bc6-bac7-331adfce159f.png&w=1280&q=85',
    col1img2: 'https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_38xzZboKViGWJOttwIXH07lWA1P%2Fhf_20260412_055723_5ceda0b8-d9c2-4665-b2e3-83ba19ba76d1.png&w=1280&q=85',
    col2img: 'https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_38xzZboKViGWJOttwIXH07lWA1P%2Fhf_20260412_055753_adc5dcbd-a8e6-49c0-b43a-9b030d835cea.png&w=1280&q=85',
  },
  {
    num: '04',
    category: 'Skole — Aarhus Tech',
    name: 'Svendeprøve Projekt',
    href: '/Svendepr%C3%B8ve-Projekt.docx%20(2).pdf',
    label: 'View PDF',
    col1img1: '/photo_2026-05-08_09-04-19.jpg',
    col1img2: '/photo_2026-05-08_09-04-19.jpg',
    col2img: '/photo_2026-05-08_09-04-19.jpg',
  },
  {
    num: '05',
    category: 'Client',
    name: 'Solaris Digital',
    col1img1: 'https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_38xzZboKViGWJOttwIXH07lWA1P%2Fhf_20260412_055759_963cfb0b-4bd1-4b0f-9d0a-09bd6cf95b2f.png&w=1280&q=85',
    col1img2: 'https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_38xzZboKViGWJOttwIXH07lWA1P%2Fhf_20260412_060108_438f781a-9846-4dcc-89ab-c4e6cb830f5b.png&w=1280&q=85',
    col2img: 'https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_38xzZboKViGWJOttwIXH07lWA1P%2Fhf_20260412_055818_9d062121-ad7e-46b9-999a-1a6a692ef1ee.png&w=1280&q=85',
  },
]

function ProjectCard({ project, index, total }: { project: typeof projects[0]; index: number; total: number }) {
  const cardRef = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({ target: cardRef, offset: ['start end', 'end start'] })
  const targetScale = 1 - (total - 1 - index) * 0.03
  const scale = useTransform(scrollYProgress, [0, 1], [1, targetScale])

  return (
    <div ref={cardRef} className="h-[80vh] sm:h-[85vh] flex items-start justify-center" style={{ paddingTop: `${index * 20}px` }}>
      <motion.div
        style={{ scale, top: `${80 + index * 20}px`, position: 'sticky', background: '#0C0C0C' }}
        className="w-full rounded-[24px] sm:rounded-[40px] md:rounded-[60px] border-2 border-[#D7E2EA] p-3 sm:p-6 md:p-8"
      >
        {/* Top row */}
        <div className="flex items-center justify-between mb-3 sm:mb-6">
          <div className="flex items-end gap-2 sm:gap-4 min-w-0">
            <span
              className="font-black leading-none flex-shrink-0"
              style={{ color: '#D7E2EA', fontSize: 'clamp(2rem, 6vw, 100px)' }}
            >
              {project.num}
            </span>
            <div className="flex flex-col pb-1 min-w-0">
              <span className="text-[#D7E2EA] opacity-50 uppercase tracking-widest text-[10px] sm:text-sm truncate">{project.category}</span>
              <span className="text-[#D7E2EA] font-medium uppercase text-sm sm:text-xl md:text-2xl truncate">{project.name}</span>
            </div>
          </div>
          <div className="flex-shrink-0 ml-2">
            <LiveProjectButton href={project.href} label={project.label} />
          </div>
        </div>

        {/* Images — mobile: single image, desktop: two-column */}
        <div className="hidden sm:flex gap-3 sm:gap-4">
          <div className="flex flex-col gap-3 sm:gap-4" style={{ width: '40%' }}>
            <img src={project.col1img1} alt="" className="w-full object-cover rounded-[20px] sm:rounded-[40px] md:rounded-[50px]" style={{ height: 'clamp(100px, 16vw, 230px)' }} />
            <img src={project.col1img2} alt="" className="w-full object-cover rounded-[20px] sm:rounded-[40px] md:rounded-[50px]" style={{ height: 'clamp(120px, 22vw, 340px)' }} />
          </div>
          <div style={{ width: '60%' }}>
            <img src={project.col2img} alt="" className="w-full h-full object-cover rounded-[20px] sm:rounded-[40px] md:rounded-[50px]" />
          </div>
        </div>
        {/* Mobile: single image */}
        <div className="sm:hidden">
          <img src={project.col2img} alt="" className="w-full object-cover rounded-[16px]" style={{ height: '45vw' }} />
        </div>
      </motion.div>
    </div>
  )
}

export default function ProjectsSection() {
  return (
    <section
      id="projects"
      className="rounded-t-[40px] sm:rounded-t-[50px] md:rounded-t-[60px] -mt-10 sm:-mt-12 md:-mt-14 z-10 relative px-5 sm:px-8 md:px-10 py-20 sm:py-24 md:py-32"
      style={{ background: '#0C0C0C' }}
    >
      <FadeIn delay={0} y={40}>
        <h2
          className="hero-heading font-black uppercase leading-none tracking-tight text-center mb-16 sm:mb-20 md:mb-28"
          style={{ fontSize: 'clamp(3rem, 12vw, 160px)' }}
        >
          Project
        </h2>
      </FadeIn>

      <div className="flex flex-col">
        {projects.map((p, i) => (
          <ProjectCard key={p.num} project={p} index={i} total={projects.length} />
        ))}
      </div>
    </section>
  )
}
