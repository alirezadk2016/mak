import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { ArrowLeft } from 'lucide-react'
import { useLang } from '../contexts/LanguageContext'

const requirements = [
  { da: 'Domain Controller med AD/DS, DNS og DHCP, samt en dedikeret filserver', en: 'Domain Controller with AD/DS, DNS and DHCP, plus a dedicated file server' },
  { da: 'Filserver med sikret adgangskontrol, brugere kan kun tilgå egne mapper', en: 'File server with secured access control, users can only access their own folders' },
  { da: 'Personligt drev pr. bruger, afdelingsdrev og fælles drev', en: 'Personal drive per user, department drive and shared drive' },
  { da: 'Gruppepolitikker (GPO) til klientkonfiguration på tværs af afdelinger', en: 'Group Policies (GPO) for client configuration across departments' },
  { da: 'pfSense firewall som sikkerhed til internetadgang', en: 'pfSense firewall for internet access security' },
  { da: 'VLAN-segmentering til at adskille de tre netværksområder', en: 'VLAN segmentation to separate the three network zones' },
  { da: 'Dynamisk routing-protokol mellem VLAN og internetadgang', en: 'Dynamic routing protocol between VLANs and internet access' },
  { da: 'PowerShell-automatisering af serverfunktioner', en: 'PowerShell automation of server functions' },
  { da: 'Redundant Domain Controller, DNS og DHCP (sekundær server)', en: 'Redundant Domain Controller, DNS and DHCP (secondary server)' },
  { da: 'Backup-løsning og lukning af ubrugte porte', en: 'Backup solution and closure of unused ports' },
]

const deliverables = [
  { da: 'Netværkstopologi med IP-adresser, porte og hardware-roller', en: 'Network topology with IP addresses, ports and hardware roles' },
  { da: 'Komplet IP-adresseskema for hele netværket', en: 'Complete IP address schema for the entire network' },
  { da: 'Password-politik med kildedokumentation', en: 'Password policy with source documentation' },
  { da: 'Begrundelse for valg af hardware og software', en: 'Justification for hardware and software choices' },
  { da: 'Medarbejderskema over brugere og afdelinger', en: 'Employee schema for users and departments' },
]

const highlights = [
  { num: '10', label: { da: 'Brugere', en: 'Users' } },
  { num: '3', label: { da: 'Afdelinger', en: 'Departments' } },
  { num: '2', label: { da: 'Servere', en: 'Servers' } },
  { num: 'A', label: { da: 'Karakter', en: 'Grade' } },
]

export default function SvendeproevePage() {
  const { lang } = useLang()

  return (
    <div className="min-h-screen" style={{ background: '#0A0908' }}>
      {/* Header */}
      <div className="px-6 sm:px-10 py-6 flex items-center justify-between border-b border-[#E8DDD0]/10">
        <Link
          to="/"
          className="flex items-center gap-2 text-[#E8DDD0]/60 hover:text-[#E8DDD0] transition-colors text-sm uppercase tracking-widest"
        >
          <ArrowLeft size={16} />
          {lang === 'da' ? 'Tilbage' : 'Back'}
        </Link>
        <a
          href="/svendeproeve-projekt.pdf"
          target="_blank"
          rel="noopener noreferrer"
          className="text-[#E8DDD0]/40 hover:text-[#E8DDD0]/70 transition-colors text-xs uppercase tracking-widest"
        >
          {lang === 'da' ? 'Se PDF' : 'View PDF'} ↗
        </a>
      </div>

      <div className="px-6 sm:px-10 pt-16 pb-20 max-w-5xl mx-auto">
        {/* Hero */}
        <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
          <p className="uppercase tracking-widest text-xs mb-3" style={{ color: '#FF6B00', opacity: 0.85, letterSpacing: '0.28em', fontWeight: 600 }}>
            {lang === 'da' ? 'Skole · Aarhus Tech · 2026' : 'School · Aarhus Tech · 2026'}
          </p>
          <h1
            className="font-black uppercase leading-none tracking-tight mb-3"
            style={{ fontSize: 'clamp(2.5rem, 8vw, 100px)', color: '#E8DDD0' }}
          >
            {lang === 'da' ? 'Svendeprøve' : 'Final Exam'}
          </h1>
          <p className="serif-accent mb-6" style={{ color: '#C9A96E', fontSize: 'clamp(1.1rem, 1.8vw, 1.5rem)', opacity: 0.85 }}>
            {lang === 'da' ? 'en hel virksomheds netværk, bygget fra bunden' : 'an entire company network, built from scratch'}
          </p>
          <p className="text-[#E8DDD0]/60 text-lg mb-4 max-w-2xl leading-relaxed">
            {lang === 'da'
              ? 'Afsluttende projekt for IT-supporter, Opgave 05. Opsætning af komplet netværksinfrastruktur for Cykelværkstedet CykelMyggen med 10 ansatte fordelt på 3 afdelinger.'
              : 'Final project for IT Support Technician, Task 05. Setup of complete network infrastructure for CykelMyggen bicycle workshop with 10 employees across 3 departments.'}
          </p>
        </motion.div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.15 }}
          className="grid grid-cols-4 gap-4 mb-16 mt-10"
        >
          {highlights.map((h) => (
            <div key={h.num} className="rounded-[16px] border border-[#E8DDD0]/10 p-5 text-center">
              <span className="block font-black text-3xl sm:text-4xl" style={{ color: '#E8DDD0' }}>{h.num}</span>
              <span className="block text-[10px] uppercase tracking-widest mt-1" style={{ color: '#E8DDD0', opacity: 0.35 }}>{h.label[lang]}</span>
            </div>
          ))}
        </motion.div>

        {/* Server room photo */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="rounded-[24px] overflow-hidden border border-[#E8DDD0]/15 mb-16"
          style={{ aspectRatio: '16/7' }}
        >
          <img
            src="/photo_2026-05-08_09-04-19.jpg"
            alt="Server room"
            className="w-full h-full object-cover"
          />
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
          {/* Requirements */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="rounded-[20px] border border-[#E8DDD0]/10 p-6"
          >
            <h3 className="font-bold uppercase tracking-widest text-xs mb-5" style={{ color: '#E8DDD0', opacity: 0.5 }}>
              {lang === 'da' ? 'Tekniske krav' : 'Technical Requirements'}
            </h3>
            <ul className="space-y-3">
              {requirements.map((r, i) => (
                <li key={i} className="flex items-start gap-3 text-[#E8DDD0]/65 text-sm leading-relaxed">
                  <span className="mt-1.5 w-1 h-1 rounded-full flex-shrink-0" style={{ background: '#E8DDD0', opacity: 0.4 }} />
                  {r[lang]}
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Deliverables */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="flex flex-col gap-6"
          >
            <div className="rounded-[20px] border border-[#E8DDD0]/10 p-6">
              <h3 className="font-bold uppercase tracking-widest text-xs mb-5" style={{ color: '#E8DDD0', opacity: 0.5 }}>
                {lang === 'da' ? 'Dokumentation' : 'Documentation'}
              </h3>
              <ul className="space-y-3">
                {deliverables.map((d, i) => (
                  <li key={i} className="flex items-start gap-3 text-[#E8DDD0]/65 text-sm leading-relaxed">
                    <span className="mt-1.5 w-1 h-1 rounded-full flex-shrink-0" style={{ background: '#E8DDD0', opacity: 0.4 }} />
                    {d[lang]}
                  </li>
                ))}
              </ul>
            </div>

            <div className="rounded-[20px] border border-[#E8DDD0]/10 p-6">
              <h3 className="font-bold uppercase tracking-widest text-xs mb-4" style={{ color: '#E8DDD0', opacity: 0.5 }}>
                {lang === 'da' ? 'Teknologier brugt' : 'Technologies Used'}
              </h3>
              <div className="flex flex-wrap gap-2">
                {([
                  ['Windows Server', 'windows-server'],
                  ['Active Directory', 'active-directory'],
                  ['DNS', 'dns'],
                  ['DHCP', 'dhcp'],
                  ['pfSense', 'firewall'],
                  ['VLAN', 'vlan'],
                  ['GPO', 'gpo'],
                  ['PowerShell', null],
                  ['VMware', 'virtualisering'],
                  ['Backup', 'backup'],
                ] as [string, string | null][]).map(([tag, slug]) =>
                  slug ? (
                    <Link
                      key={tag}
                      to={`/viden/${slug}`}
                      className="text-xs uppercase tracking-wider px-3 py-1 rounded-full border transition-opacity hover:opacity-100"
                      style={{ color: '#E8DDD0', borderColor: 'rgba(201,169,110,0.45)', opacity: 0.85, textDecoration: 'none' }}
                      title={`Hvad er ${tag}?`}
                    >
                      {tag} <span aria-hidden="true" style={{ color: '#C9A96E' }}>↗</span>
                    </Link>
                  ) : (
                    <span key={tag} className="text-xs uppercase tracking-wider px-3 py-1 rounded-full border" style={{ color: '#E8DDD0', borderColor: 'rgba(232,224,213,0.2)', opacity: 0.7 }}>
                      {tag}
                    </span>
                  )
                )}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  )
}
