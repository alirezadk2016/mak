import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { ArrowLeft, ArrowUpRight, Palette, Code2, Search, ShieldCheck } from 'lucide-react'
import BrandCover from '../components/BrandCover'
import { useLang } from '../contexts/LanguageContext'

type L = { da: string; en: string }

const facts: { num: string; label: L }[] = [
  { num: '2', label: { da: 'Sprog', en: 'Languages' } },
  { num: '2', label: { da: 'Markeder', en: 'Markets' } },
  { num: '8', label: { da: 'Vejledninger', en: 'Guides' } },
  { num: '3', label: { da: 'Adgangslag i admin', en: 'Admin access layers' } },
]

const groups: { icon: typeof Palette; title: L; items: L[] }[] = [
  {
    icon: Palette,
    title: { da: 'Design', en: 'Design' },
    items: [
      { da: 'Eget logo, ikonsæt, farver og typografi', en: 'Own logo, icon set, colours and typography' },
      { da: 'Kort og illustrationer til produkter og vejledninger', en: 'Cards and illustrations for products and guides' },
      { da: 'Samme designsprog på alle sider, så siden virker som ét produkt', en: 'One design language across every page so the site feels like a single product' },
    ],
  },
  {
    icon: Code2,
    title: { da: 'Udvikling', en: 'Development' },
    items: [
      { da: 'Tosproget site (dansk og engelsk) i Next.js, TypeScript og Tailwind, hostet på Vercel', en: 'Bilingual site (Danish and English) in Next.js, TypeScript and Tailwind, hosted on Vercel' },
      { da: 'Interaktiv 3D-bærbar i toppen, som kun indlæses på enheder, der kan klare den. Alle andre ser et billede', en: 'Interactive 3D laptop at the top that only loads on devices that can handle it. Everyone else sees a still image' },
      { da: 'Kontaktformular og en admin-indbakke til henvendelser', en: 'Contact form and an admin inbox for enquiries' },
    ],
  },
  {
    icon: Search,
    title: { da: 'SEO og indhold', en: 'SEO and content' },
    items: [
      { da: 'hreflang, sitemap, struktureret data, FAQ og en llms.txt til AI-søgning', en: 'hreflang, sitemap, structured data, FAQ and an llms.txt for AI search' },
      { da: '8 vejledninger om bl.a. Windows 10, RAM og køb af brugt computer, med RSS-feed', en: '8 guides on Windows 10, RAM and buying a used laptop, among others, with an RSS feed' },
      { da: 'Kun verificerede kilder. Ingen opdigtede tal, priser eller kundehistorier', en: 'Verified sources only. No made-up numbers, prices or customer stories' },
    ],
  },
  {
    icon: ShieldCheck,
    title: { da: 'Kvalitet og sikkerhed', en: 'Quality and security' },
    items: [
      { da: 'Automatisk test i en rigtig browser af kontrast, overflow og overskriftsstruktur', en: 'Automated tests in a real browser for contrast, overflow and heading structure' },
      { da: 'Adgangskontrol i tre lag på admin-delen', en: 'Three-layer access control on the admin part' },
      { da: 'Samtykkebanner til statistik', en: 'Consent banner for analytics' },
    ],
  },
]

const learned: L[] = [
  { da: 'At svare først: en side starter med svaret på det, læseren kom for', en: 'Answering first: a page opens with the answer to what the reader came for' },
  { da: 'At måle i stedet for at gætte, fx kontrast, hastighed og overskriftsniveauer', en: 'Measuring instead of guessing, e.g. contrast, speed and heading levels' },
  { da: 'At skrive for både mennesker og søgemaskiner uden at opfinde noget', en: 'Writing for both people and search engines without inventing anything' },
  { da: 'At tænke i sikkerhed fra start, især hvor der ligger kundedata', en: 'Thinking about security from the start, especially where customer data lives' },
  { da: 'At sætte et projekt op, så andre (og jeg selv om et år) kan forstå det', en: 'Setting a project up so that others (and I, a year from now) can understand it' },
]

const tech = ['Next.js', 'React', 'TypeScript', 'Tailwind CSS', 'three.js', 'Vercel', 'Postgres (Neon)', 'SEO']

export default function KestroPage() {
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
          href="https://kestro.dk"
          target="_blank"
          rel="noopener noreferrer"
          className="text-[#E8DDD0]/70 hover:text-[#E8DDD0] transition-colors text-xs uppercase tracking-widest"
        >
          kestro.dk ↗
        </a>
      </div>

      <div className="px-6 sm:px-10 pt-16 pb-20 max-w-5xl mx-auto">
        {/* Hero */}
        <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
          <p className="uppercase tracking-widest text-xs mb-3" style={{ color: '#A58BE0', letterSpacing: '0.28em', fontWeight: 600 }}>
            {lang === 'da' ? 'Eget projekt · 2026 · Under opbygning' : 'Own project · 2026 · In progress'}
          </p>
          <h1
            className="font-black uppercase leading-none tracking-tight mb-3"
            style={{ fontSize: 'clamp(2.5rem, 8vw, 100px)', color: '#E8DDD0' }}
          >
            Kestro
          </h1>
          <p className="serif-accent mb-6" style={{ color: '#C9A96E', fontSize: 'clamp(1.1rem, 1.8vw, 1.5rem)', opacity: 0.85 }}>
            {lang === 'da' ? 'min træningsplads: en hel hjemmeside, bygget fra bunden' : 'my training ground: a whole website, built from scratch'}
          </p>
          <p className="text-[#E8DDD0]/70 text-lg mb-4 max-w-2xl leading-relaxed">
            {lang === 'da'
              ? 'Kestro er min egen tosprogede B2B-hjemmeside om istandsat erhvervs-IT til Danmark og Norge. Jeg bygger den for at øve mig i at finde kunder, designe, skrive kode og få et site frem på Google, ved at gøre det i praksis.'
              : 'Kestro is my own bilingual B2B website about refurbished business IT for Denmark and Norway. I build it to practise finding customers, designing, writing code and getting a site to rank on Google, by doing it for real.'}
          </p>
          <p className="text-[#E8DDD0]/70 text-base max-w-2xl leading-relaxed">
            {lang === 'da'
              ? 'Det er et projekt med en vision, ikke en etableret forretning endnu. Visionen er, at det på sigt kan blive en ekstra indtægtskilde ved siden af mit job.'
              : 'It is a project with a vision, not an established business yet. The vision is that, over time, it can become an extra source of income alongside my job.'}
          </p>
          <a
            href="https://kestro.dk"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-outline-gold inline-flex items-center gap-2 rounded-full mt-7"
            style={{ padding: '12px 24px', fontSize: '11px', letterSpacing: '0.18em', textTransform: 'uppercase', fontWeight: 500 }}
          >
            {lang === 'da' ? 'Besøg kestro.dk' : 'Visit kestro.dk'}
            <ArrowUpRight size={14} strokeWidth={1.8} style={{ color: '#C9A96E' }} />
          </a>
        </motion.div>

        {/* Facts */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.15 }}
          className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-16 mt-10"
        >
          {facts.map((f) => (
            <div key={f.label.da} className="rounded-[16px] border border-[#E8DDD0]/10 p-5 text-center">
              <span className="block font-black text-3xl sm:text-4xl" style={{ color: '#E8DDD0' }}>{f.num}</span>
              <span className="block text-[10px] uppercase tracking-widest mt-1" style={{ color: '#E8DDD0', opacity: 0.65 }}>{f.label[lang]}</span>
            </div>
          ))}
        </motion.div>

        {/* Cover */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="rounded-[24px] overflow-hidden border border-[#E8DDD0]/15 mb-16"
          style={{ aspectRatio: '16/6' }}
        >
          <BrandCover name="Kestro" sub={lang === 'da' ? 'B2B · Tosproget · SEO' : 'B2B · Bilingual · SEO'} accent="#7C5CBF" className="w-full h-full" />
        </motion.div>

        {/* What I built */}
        <h2 className="font-bold uppercase tracking-widest text-xs mb-5" style={{ color: '#E8DDD0', opacity: 0.7 }}>
          {lang === 'da' ? 'Det har jeg bygget' : 'What I have built'}
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 mb-16">
          {groups.map((g, gi) => {
            const Icon = g.icon
            return (
              <motion.div
                key={g.title.da}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-40px' }}
                transition={{ duration: 0.5, delay: (gi % 2) * 0.08 }}
                className="rounded-[20px] border border-[#E8DDD0]/10 p-6"
              >
                <div className="flex items-center gap-2.5 mb-4" style={{ color: '#A58BE0' }}>
                  <Icon size={18} strokeWidth={1.7} aria-hidden="true" />
                  <h3 style={{ color: '#EFE8DB', fontSize: '15px', fontWeight: 700 }}>{g.title[lang]}</h3>
                </div>
                <ul className="space-y-3">
                  {g.items.map((it) => (
                    <li key={it.da} className="flex items-start gap-3 text-[#E8DDD0]/70 text-sm leading-relaxed">
                      <span className="mt-2 w-1 h-1 rounded-full flex-shrink-0" style={{ background: '#A58BE0' }} />
                      {it[lang]}
                    </li>
                  ))}
                </ul>
              </motion.div>
            )
          })}
        </div>

        {/* What I learned + tech */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
          <div className="rounded-[20px] border border-[#E8DDD0]/10 p-6">
            <h2 className="font-bold uppercase tracking-widest text-xs mb-5" style={{ color: '#E8DDD0', opacity: 0.7 }}>
              {lang === 'da' ? 'Det har jeg lært' : 'What I have learned'}
            </h2>
            <ul className="space-y-3">
              {learned.map((l) => (
                <li key={l.da} className="flex items-start gap-3 text-[#E8DDD0]/70 text-sm leading-relaxed">
                  <span className="mt-2 w-1 h-1 rounded-full flex-shrink-0" style={{ background: '#C9A96E' }} />
                  {l[lang]}
                </li>
              ))}
            </ul>
          </div>
          <div className="rounded-[20px] border border-[#E8DDD0]/10 p-6">
            <h2 className="font-bold uppercase tracking-widest text-xs mb-4" style={{ color: '#E8DDD0', opacity: 0.7 }}>
              {lang === 'da' ? 'Teknologier' : 'Technologies'}
            </h2>
            <div className="flex flex-wrap gap-2">
              {tech.map((tag) => (
                <span key={tag} className="text-xs uppercase tracking-wider px-3 py-1 rounded-full border" style={{ color: '#E8DDD0', borderColor: 'rgba(232,224,213,0.25)', opacity: 0.85 }}>
                  {tag}
                </span>
              ))}
            </div>
            <p className="mt-6 text-[#E8DDD0]/60 text-xs leading-relaxed">
              {lang === 'da'
                ? 'Kestro er endnu ikke i drift som forretning. Der er ingen omsætning, og jeg påstår ikke andet. Det er et projekt, hvor jeg lærer.'
                : 'Kestro is not yet running as a business. There is no revenue, and I do not claim otherwise. It is a project where I learn.'}
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
