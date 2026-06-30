import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { ArrowLeft, ExternalLink } from 'lucide-react'
import { useLang } from '../contexts/LanguageContext'
import SmartImage from '../components/SmartImage'

const features = [
  {
    title: { da: 'Booking & Kalender', en: 'Booking & Calendar' },
    items: [
      { da: 'Kunder sender forespørgsel direkte fra hjemmesiden', en: 'Customers submit quote requests directly from the website' },
      { da: 'Admin godkender, afviser eller annullerer bookinger', en: 'Admin approves, rejects or cancels bookings' },
      { da: 'Kalendervisning med overblik over pending og godkendte jobs', en: 'Calendar view showing pending and approved jobs at a glance' },
      { da: 'Listevisning med filtrering og statusoverblik', en: 'List view with filtering and status overview' },
    ],
  },
  {
    title: { da: 'Media-håndtering', en: 'Media Management' },
    items: [
      { da: 'Upload billeder direkte til galleriet fra admin-panelet', en: 'Upload images directly to the gallery from the admin panel' },
      { da: 'Slet eller rediger eksisterende billeder og titler', en: 'Delete or edit existing images and their titles' },
      { da: 'Billedgalleri vises live på hjemmesiden øjeblikkeligt', en: 'Image gallery updates live on the website instantly' },
    ],
  },
  {
    title: { da: 'Indhold & Priser', en: 'Content & Pricing' },
    items: [
      { da: 'Rediger prisliste og servicebeskrivelser direkte i admin', en: 'Edit pricing list and service descriptions directly in admin' },
      { da: 'Opdater FAQ — spørgsmål og svar uden kode', en: 'Update FAQ — questions and answers without touching code' },
      { da: 'Rediger "Om os"-siden med tekst og information', en: 'Edit the "About" page with text and company information' },
    ],
  },
  {
    title: { da: 'Hjemmeside', en: 'Website' },
    items: [
      { da: 'To-sproget: Engelsk og Persisk (Farsi)', en: 'Bilingual: English and Persian (Farsi)' },
      { da: '"Get a free quote" — direkte bookingformular', en: '"Get a free quote" — direct booking form' },
      { da: '5.0 ★ Google-rating integreret og synlig', en: '5.0 ★ Google rating integrated and visible' },
      { da: 'Services, Galleri, Løfte og Kontakt-sektioner', en: 'Services, Gallery, Our Promise and Contact sections' },
    ],
  },
]

const content = {
  da: {
    back: 'Tilbage',
    category: 'Kunde — Australien',
    live: 'Se live site',
    desc: 'MAK Painting er en professionel malervirksomhed baseret i Melbourne, Australien. Jeg designede og udviklede deres komplette digitale løsning — en moderne, to-sproget hjemmeside kombineret med et kraftfuldt admin-panel, så ejeren selv kan styre alt fra ét sted uden teknisk viden.',
    featuresLabel: 'Funktioner',
  },
  en: {
    back: 'Back',
    category: 'Client — Australia',
    live: 'View Live Site',
    desc: 'MAK Painting is a professional painting company based in Melbourne, Australia. I designed and developed their complete digital solution — a modern, bilingual website combined with a powerful admin panel, so the owner can manage everything from one place without any technical knowledge.',
    featuresLabel: 'Features',
  },
}

export default function MakPaintingPage() {
  const { lang } = useLang()
  const tx = content[lang]

  return (
    <main style={{ background: '#0C0C0C', minHeight: '100vh' }} className="px-5 sm:px-10 md:px-16 py-10 sm:py-16">

      {/* Back */}
      <motion.div initial={{ opacity: 0, x: -16 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.4 }}>
        <Link
          to="/"
          className="inline-flex items-center gap-2 mb-10 sm:mb-14 transition-opacity hover:opacity-60"
          style={{ color: '#D7E2EA', opacity: 0.45, fontSize: '12px', letterSpacing: '0.2em', textTransform: 'uppercase' }}
        >
          <ArrowLeft size={13} strokeWidth={1.8} />
          {tx.back}
        </Link>
      </motion.div>

      {/* Header */}
      <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} className="mb-10 sm:mb-14">
        <p style={{ color: '#D7E2EA', opacity: 0.3, fontSize: '10px', letterSpacing: '0.35em', textTransform: 'uppercase', marginBottom: '12px' }}>
          {tx.category}
        </p>
        <div className="flex flex-wrap items-end gap-4 sm:gap-6 mb-5">
          <h1
            className="font-black uppercase leading-none"
            style={{ color: '#D7E2EA', fontSize: 'clamp(2.2rem, 8vw, 6rem)', letterSpacing: '-0.03em' }}
          >
            MAK Painting
          </h1>
          <a
            href="https://www.makvandi.info/en"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-full border border-[#D7E2EA]/20 hover:border-[#D7E2EA]/50 transition-colors duration-300 mb-1 sm:mb-3"
            style={{ color: '#D7E2EA', opacity: 0.6, padding: '8px 18px', fontSize: '11px', letterSpacing: '0.18em', textTransform: 'uppercase' }}
          >
            {tx.live}
            <ExternalLink size={12} strokeWidth={1.8} />
          </a>
        </div>
        <p style={{ color: '#D7E2EA', opacity: 0.5, fontSize: 'clamp(0.9rem, 1.4vw, 1.05rem)', lineHeight: 1.8, fontWeight: 300, maxWidth: '680px' }}>
          {tx.desc}
        </p>
      </motion.div>

      {/* Screenshots */}
      <motion.div
        initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.1 }}
        className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4 mb-12 sm:mb-16"
      >
        <SmartImage
          src="https://image.thum.io/get/width/1280/crop/800/https://www.makvandi.info/en"
          alt="MAK Painting — Public site"
          label="MAK Painting"
          className="rounded-[20px] sm:rounded-[28px] border border-[#D7E2EA]/06"
          imgClassName="w-full h-full object-cover object-top"
          style={{ aspectRatio: '16/10' }}
        />
        <SmartImage
          src="https://image.thum.io/get/width/1280/crop/800/https://www.makvandi.info/en/gallery"
          alt="MAK Painting — Gallery"
          label="Gallery"
          className="rounded-[20px] sm:rounded-[28px] border border-[#D7E2EA]/06"
          imgClassName="w-full h-full object-cover object-top"
          style={{ aspectRatio: '16/10' }}
        />
      </motion.div>

      {/* Features grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-8 max-w-5xl">
        {features.map((block, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 + i * 0.07 }}
            className="rounded-[20px] p-5 sm:p-7 border border-[#D7E2EA]/07"
            style={{ background: 'rgba(215,226,234,0.03)' }}
          >
            <p style={{ color: '#D7E2EA', opacity: 0.28, fontSize: '10px', letterSpacing: '0.32em', textTransform: 'uppercase', marginBottom: '14px' }}>
              {block.title[lang]}
            </p>
            <ul className="flex flex-col gap-2.5">
              {block.items.map((item, j) => (
                <li key={j} className="flex items-start gap-2.5">
                  <span style={{ color: '#D7E2EA', opacity: 0.2, marginTop: '5px', flexShrink: 0, fontSize: '8px' }}>◆</span>
                  <span style={{ color: '#D7E2EA', opacity: 0.55, fontSize: '13px', lineHeight: 1.6 }}>{item[lang]}</span>
                </li>
              ))}
            </ul>
          </motion.div>
        ))}
      </div>
    </main>
  )
}
