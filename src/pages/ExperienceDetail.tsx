import { useParams, Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { ArrowLeft, ExternalLink } from 'lucide-react'
import { useLang } from '../contexts/LanguageContext'
import { t } from '../translations'

type ExpData = {
  company: string
  role: { da: string; en: string }
  period: { da: string; en: string }
  url: string
  priceUrl: string
  screenshot: string
  color: string
  tasks: { title: { da: string; en: string }; items: { da: string; en: string }[] }[]
}

const experiences: Record<string, ExpData> = {
  yousee: {
    company: 'YouSee',
    role: { da: 'Kundeservice & Administration', en: 'Customer Service & Administration' },
    period: { da: 'IGU Program', en: 'IGU Program' },
    url: 'https://yousee.dk/',
    priceUrl: 'https://yousee.dk/tv/pakker',
    screenshot: 'https://image.thum.io/get/width/1280/crop/720/https://yousee.dk/',
    color: '#E4002B',
    tasks: [
      {
        title: { da: 'Kundeservice', en: 'Customer Service' },
        items: [
          { da: 'Daglig kundekontakt og håndtering af henvendelser', en: 'Daily customer contact and handling of inquiries' },
          { da: 'Klar kommunikation med ikke-tekniske brugere', en: 'Clear communication with non-technical users' },
          { da: 'Løsning af problemer relateret til TV, internet og telefoni', en: 'Resolving issues related to TV, internet and telephony' },
        ],
      },
      {
        title: { da: 'Administration', en: 'Administration' },
        items: [
          { da: 'Daglig administrativ sagsbehandling', en: 'Daily administrative case processing' },
          { da: 'Registrering og opfølgning på kundedata', en: 'Registration and follow-up on customer data' },
          { da: 'Samarbejde på tværs af afdelinger', en: 'Cross-departmental collaboration' },
        ],
      },
    ],
  },
  fourcom: {
    company: 'Fourcom',
    role: { da: 'IT Support Praktikant', en: 'IT Support Intern' },
    period: { da: '2 måneders praktik', en: '2 month internship' },
    url: 'https://en.fourcom.dk/',
    priceUrl: 'https://en.fourcom.dk/services',
    screenshot: 'https://image.thum.io/get/width/1280/crop/720/https://en.fourcom.dk/',
    color: '#0057B8',
    tasks: [
      {
        title: { da: 'Hardware Support', en: 'Hardware Support' },
        items: [
          { da: 'Installation og konfiguration af Windows på arbejdsstationer', en: 'Installation and configuration of Windows on workstations' },
          { da: 'Fejlfinding og udskiftning af hardwarekomponenter', en: 'Troubleshooting and replacement of hardware components' },
          { da: 'Klargøring af nye computere til slutbrugere', en: 'Preparation of new computers for end users' },
        ],
      },
      {
        title: { da: 'Teknisk Support', en: 'Technical Support' },
        items: [
          { da: 'Brugersupport ved tekniske problemer', en: 'User support for technical issues' },
          { da: 'Dokumentation af udførte opgaver', en: 'Documentation of completed tasks' },
          { da: 'Samarbejde med senior-teknikere om komplekse sager', en: 'Collaboration with senior technicians on complex cases' },
        ],
      },
    ],
  },
  aarhustech: {
    company: 'Aarhus Tech',
    role: { da: 'Eksamensvagt — IT Support', en: 'Exam Supervisor — IT Support' },
    period: { da: 'Frivillig', en: 'Volunteer' },
    url: 'https://www.aarhustech.dk/',
    priceUrl: 'https://www.aarhustech.dk/',
    screenshot: 'https://image.thum.io/get/width/1280/crop/720/https://www.aarhustech.dk/',
    color: '#FF6B00',
    tasks: [
      {
        title: { da: 'Teknisk Support Under Eksamener', en: 'Technical Support During Exams' },
        items: [
          { da: 'Ydede professionel IT-support til studerende under eksamensforhold', en: 'Provided professional IT support to students under exam conditions' },
          { da: 'Diagnosticerede og løste hardware-, software- og netværksproblemer on-site', en: 'Diagnosed and resolved hardware, software and network issues on-site' },
          { da: 'Håndterede systemfrysning, loginproblemer og softwarefejl hurtigt og effektivt', en: 'Handled system freezes, login issues and software errors quickly and efficiently' },
          { da: 'Sikrede minimal forstyrrelse af eksamensforløbet gennem struktureret problemløsning', en: 'Ensured minimal disruption to the exam process through structured problem-solving' },
        ],
      },
      {
        title: { da: 'Infrastruktur & Koordinering', en: 'Infrastructure & Coordination' },
        items: [
          { da: 'Konfigurering og fejlfinding af printere og netværkstilslutninger i eksamenslokalerne', en: 'Configuration and troubleshooting of printers and network connections in exam rooms' },
          { da: 'Tæt samarbejde med skolens IT-afdeling om eskalering af komplekse sager', en: 'Close collaboration with the school IT department on escalating complex cases' },
          { da: 'Opretholdt overblik over tekniske ressourcer og sikrede driftstabilitet', en: 'Maintained oversight of technical resources and ensured operational stability' },
        ],
      },
    ],
  },
  folkehuse: {
    company: 'Folkehuse Aarhus',
    role: { da: 'IT Support — Skolepraktik', en: 'IT Support — School Placement' },
    period: { da: 'Skolepraktik — Aarhus Tech', en: 'School Placement — Aarhus Tech' },
    url: 'https://folkehuse.aarhus.dk/',
    priceUrl: 'https://folkehuse.aarhus.dk/',
    screenshot: 'https://image.thum.io/get/width/1280/crop/720/https://folkehuse.aarhus.dk/',
    color: '#2E7D32',
    tasks: [
      {
        title: { da: 'Brugersupport', en: 'User Support' },
        items: [
          { da: 'IT-support på tværs af flere institutioner i Aarhus', en: 'IT support across multiple institutions in Aarhus' },
          { da: 'Hjælp til ældre borgere på plejehjem med daglig IT-brug', en: 'Assistance to elderly citizens at care homes with daily IT use' },
          { da: 'Teknisk support under eksamener', en: 'Technical support during exams' },
        ],
      },
      {
        title: { da: 'Daglige Opgaver', en: 'Daily Tasks' },
        items: [
          { da: 'Loginproblemer og adgangsstyring', en: 'Login issues and access management' },
          { da: 'E-mail opsætning og fejlfinding', en: 'Email setup and troubleshooting' },
          { da: 'Printeropsætning og vedligeholdelse', en: 'Printer setup and maintenance' },
          { da: 'Softwareinstallation og opdateringer', en: 'Software installation and updates' },
        ],
      },
    ],
  },
}

export default function ExperienceDetail() {
  const { slug } = useParams<{ slug: string }>()
  const { lang } = useLang()
  const tx = t[lang].experienceDetail
  const exp = experiences[slug ?? '']

  if (!exp) {
    return (
      <div className="min-h-screen flex items-center justify-center" style={{ background: '#0C0C0C' }}>
        <p className="text-white">Not found</p>
      </div>
    )
  }

  return (
    <div className="min-h-screen" style={{ background: '#0C0C0C' }}>
      <div className="px-6 sm:px-10 py-6 flex items-center justify-between border-b border-[#D7E2EA]/10">
        <Link
          to="/"
          className="flex items-center gap-2 text-[#D7E2EA]/60 hover:text-[#D7E2EA] transition-colors text-sm uppercase tracking-widest"
        >
          <ArrowLeft size={16} />
          {tx.back}
        </Link>
        <a
          href={exp.url}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 text-[#D7E2EA]/60 hover:text-[#D7E2EA] transition-colors text-sm uppercase tracking-widest"
        >
          {tx.visitSite}
          <ExternalLink size={14} />
        </a>
      </div>

      <div className="px-6 sm:px-10 pt-16 pb-10 max-w-5xl mx-auto">
        <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
          <p className="text-[#D7E2EA]/40 uppercase tracking-widest text-sm mb-2">{exp.period[lang]}</p>
          <h1 className="font-black uppercase leading-none tracking-tight mb-4" style={{ fontSize: 'clamp(3rem, 10vw, 120px)', color: '#D7E2EA' }}>
            {exp.company}
          </h1>
          <p className="text-[#D7E2EA]/60 text-lg mb-10">{exp.role[lang]}</p>
        </motion.div>

        <motion.a
          href={exp.priceUrl}
          target="_blank"
          rel="noopener noreferrer"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="block overflow-hidden rounded-[24px] border-2 border-[#D7E2EA]/20 hover:border-[#D7E2EA]/50 transition-all duration-300 group mb-16"
        >
          <div className="relative" style={{ aspectRatio: '16/7' }}>
            <img src={exp.screenshot} alt={exp.company} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
            <div className="absolute inset-0 bg-black/50 group-hover:bg-black/30 transition-all duration-300 flex items-center justify-center">
              <span className="text-white font-medium uppercase tracking-widest border border-white rounded-full px-6 py-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                {tx.viewSite}
              </span>
            </div>
          </div>
        </motion.a>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
          {exp.tasks.map((section, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 + i * 0.1 }}
              className="rounded-[20px] border border-[#D7E2EA]/15 p-6"
            >
              <h3 className="font-bold uppercase tracking-widest text-sm mb-4" style={{ color: exp.color }}>
                {section.title[lang]}
              </h3>
              <ul className="space-y-3">
                {section.items.map((item, j) => (
                  <li key={j} className="flex items-start gap-3 text-[#D7E2EA]/70 text-sm leading-relaxed">
                    <span className="mt-1.5 w-1.5 h-1.5 rounded-full flex-shrink-0" style={{ background: exp.color }} />
                    {item[lang]}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  )
}
