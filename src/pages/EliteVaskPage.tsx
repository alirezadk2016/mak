import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { ArrowLeft, ExternalLink } from 'lucide-react'
import { useLang } from '../contexts/LanguageContext'

const packages = [
  {
    name: { da: 'Udvendig', en: 'Exterior' },
    desc: { da: 'Komplet udvendig dampvask — karrosseri, fælge og ruder.', en: 'Complete exterior steam wash — bodywork, rims and windows.' },
  },
  {
    name: { da: 'Indvendig', en: 'Interior' },
    desc: { da: 'Dybderengøring af kabinen — sæder, gulvmåtter, dashboard og alle overflader.', en: 'Deep cleaning of the cabin — seats, floor mats, dashboard and all surfaces.' },
  },
  {
    name: { da: 'Helvask', en: 'Full Wash' },
    desc: { da: 'Den komplette pakke — udvendig + indvendig. Alt i én booking.', en: 'The complete package — exterior + interior. Everything in one booking.' },
  },
  {
    name: { da: 'Gold', en: 'Gold' },
    desc: { da: 'Alt fra Helvask + motorvask, lakforsegling og polering. Premium finish.', en: 'Everything from Full Wash + engine wash, lacquer sealing and polishing. Premium finish.' },
  },
]

const features = [
  {
    title: { da: 'Online booking', en: 'Online Booking' },
    items: [
      { da: 'Kunden vælger biltype og pakke — pris vises øjeblikkeligt', en: 'Customer selects car type and package — price shown instantly' },
      { da: 'Valg af dato og ledig tidslot direkte i kalenderen', en: 'Selection of date and available time slot directly in calendar' },
      { da: 'Automatisk e-mailbekræftelse ved gennemført booking', en: 'Automatic email confirmation upon completed booking' },
      { da: 'Betaling sker efter endt service — ikke online', en: 'Payment after service is completed — not online' },
    ],
  },
  {
    title: { da: 'Admin panel', en: 'Admin Panel' },
    items: [
      { da: 'Ugentlig kalender med real-time visning af alle bookinger', en: 'Weekly calendar with real-time view of all bookings' },
      { da: 'Tidslinje pr. dag med klokkeslæt og kundeinfo', en: 'Timeline per day with times and customer info' },
      { da: 'Dansk tidszone (Europe/Copenhagen) korrekt håndteret', en: 'Danish timezone (Europe/Copenhagen) correctly handled' },
      { da: 'Fuldt responsivt — fungerer på mobil og desktop', en: 'Fully responsive — works on mobile and desktop' },
    ],
  },
]

const stack = ['Next.js 15', 'App Router', 'Vercel', 'Upstash Redis', 'Vercel Blob', 'SMTP Mail', 'TypeScript', 'Tailwind CSS']

const highlights = [
  { num: '4', label: { da: 'Pakker', en: 'Packages' } },
  { num: '∞', label: { da: 'Biltyper', en: 'Car Types' } },
  { num: 'Live', label: { da: 'Status', en: 'Status' } },
  { num: 'DK', label: { da: 'Marked', en: 'Market' } },
]

export default function EliteVaskPage() {
  const { lang } = useLang()

  return (
    <div className="min-h-screen" style={{ background: '#0C0C0C' }}>
      {/* Header */}
      <div className="px-6 sm:px-10 py-6 flex items-center justify-between border-b border-[#D7E2EA]/10">
        <Link
          to="/"
          className="flex items-center gap-2 text-[#D7E2EA]/60 hover:text-[#D7E2EA] transition-colors text-sm uppercase tracking-widest"
        >
          <ArrowLeft size={16} />
          {lang === 'da' ? 'Tilbage' : 'Back'}
        </Link>
        <a
          href="https://www.elite-vask.dk/"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 text-[#D7E2EA]/60 hover:text-[#D7E2EA] transition-colors text-sm uppercase tracking-widest"
        >
          elite-vask.dk
          <ExternalLink size={14} />
        </a>
      </div>

      <div className="px-6 sm:px-10 pt-16 pb-20 max-w-5xl mx-auto">
        {/* Hero */}
        <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
          <p className="text-[#D7E2EA]/40 uppercase tracking-widest text-xs mb-3">
            {lang === 'da' ? 'Kunde — Web Design & Udvikling' : 'Client — Web Design & Development'}
          </p>
          <h1
            className="font-black uppercase leading-none tracking-tight mb-4"
            style={{ fontSize: 'clamp(2.5rem, 8vw, 100px)', color: '#D7E2EA' }}
          >
            Elite Vask
          </h1>
          <p className="text-[#D7E2EA]/60 text-lg mb-2 max-w-2xl leading-relaxed">
            {lang === 'da'
              ? 'Komplet hjemmeside med online bookingsystem til mobil dampvask. Kunden booker, systemet håndterer resten — bekræftelse, kalender og admin.'
              : 'Complete website with online booking system for mobile steam car wash. Customer books, system handles the rest — confirmation, calendar and admin.'}
          </p>
        </motion.div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.15 }}
          className="grid grid-cols-4 gap-3 mt-10 mb-16"
        >
          {highlights.map((h) => (
            <div key={h.num} className="rounded-[16px] border border-[#D7E2EA]/10 p-4 sm:p-5 text-center">
              <span className="block font-black text-2xl sm:text-4xl" style={{ color: '#D7E2EA' }}>{h.num}</span>
              <span className="block text-[10px] uppercase tracking-widest mt-1" style={{ color: '#D7E2EA', opacity: 0.35 }}>{h.label[lang]}</span>
            </div>
          ))}
        </motion.div>

        {/* Screenshot */}
        <motion.a
          href="https://www.elite-vask.dk/"
          target="_blank"
          rel="noopener noreferrer"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="block overflow-hidden rounded-[24px] border border-[#D7E2EA]/15 group mb-16"
          style={{ aspectRatio: '16/7' }}
        >
          <div className="relative w-full h-full">
            <img
              src="https://image.thum.io/get/width/1280/crop/720/https://www.elite-vask.dk/"
              alt="Elite Vask"
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
            />
            <div className="absolute inset-0 bg-black/50 group-hover:bg-black/25 transition-all duration-300 flex items-center justify-center">
              <span className="text-white font-medium uppercase tracking-widest border border-white/60 rounded-full px-6 py-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                {lang === 'da' ? 'Besøg site →' : 'Visit Site →'}
              </span>
            </div>
          </div>
        </motion.a>

        {/* Features */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 mb-5">
          {features.map((f, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 + i * 0.1 }}
              className="rounded-[20px] border border-[#D7E2EA]/10 p-6"
            >
              <h3 className="font-bold uppercase tracking-widest text-xs mb-5" style={{ color: '#D7E2EA', opacity: 0.45 }}>
                {f.title[lang]}
              </h3>
              <ul className="space-y-3">
                {f.items.map((item, j) => (
                  <li key={j} className="flex items-start gap-3 text-[#D7E2EA]/65 text-sm leading-relaxed">
                    <span className="mt-1.5 w-1 h-1 rounded-full flex-shrink-0" style={{ background: '#D7E2EA', opacity: 0.4 }} />
                    {item[lang]}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        {/* Packages */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.45 }}
          className="rounded-[20px] border border-[#D7E2EA]/10 p-6 mb-5"
        >
          <h3 className="font-bold uppercase tracking-widest text-xs mb-6" style={{ color: '#D7E2EA', opacity: 0.45 }}>
            {lang === 'da' ? 'Servicepakker' : 'Service Packages'}
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {packages.map((pkg, i) => (
              <div key={i} className="flex gap-3 p-4 rounded-[14px]" style={{ background: 'rgba(215,226,234,0.03)', border: '1px solid rgba(215,226,234,0.06)' }}>
                <div className="w-1.5 h-1.5 rounded-full mt-2 flex-shrink-0" style={{ background: '#D7E2EA', opacity: 0.3 }} />
                <div>
                  <p className="font-semibold text-sm uppercase tracking-wider mb-1" style={{ color: '#D7E2EA', opacity: 0.8 }}>{pkg.name[lang]}</p>
                  <p className="text-xs leading-relaxed" style={{ color: '#D7E2EA', opacity: 0.45 }}>{pkg.desc[lang]}</p>
                </div>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Tech stack */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.55 }}
          className="rounded-[20px] border border-[#D7E2EA]/10 p-6"
        >
          <h3 className="font-bold uppercase tracking-widest text-xs mb-5" style={{ color: '#D7E2EA', opacity: 0.45 }}>
            {lang === 'da' ? 'Teknologier' : 'Technologies'}
          </h3>
          <div className="flex flex-wrap gap-2">
            {stack.map(tag => (
              <span key={tag} className="text-xs uppercase tracking-wider px-3 py-1.5 rounded-full border" style={{ color: '#D7E2EA', borderColor: 'rgba(215,226,234,0.15)', opacity: 0.7 }}>
                {tag}
              </span>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  )
}
