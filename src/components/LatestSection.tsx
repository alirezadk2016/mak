import { motion } from 'framer-motion'
import { Car, Cloud, Rocket, Check, ArrowUpRight, Palette, Code2, Search, ShieldCheck } from 'lucide-react'
import FadeIn from './FadeIn'
import { useLang } from '../contexts/LanguageContext'

type Status = 'done' | 'active' | 'longterm'

const groupIcons = { design: Palette, code: Code2, seo: Search, quality: ShieldCheck } as const

const copy = {
  da: {
    kicker: 'lige nu',
    heading: 'Seneste',
    sub: 'Hvad jeg arbejder på og lærer, lige nu.',
    updated: 'Opdateret oktober 2026',
    status: { done: 'Bestået', active: 'I gang', longterm: 'Vision' },
    cards: {
      license: {
        tag: 'Kørekort',
        title: 'Kørekort: teoriprøven er bestået',
        text: 'Mit iranske kørekort er ombyttet til et dansk, og jeg har bestået teoriprøven. Nu tager jeg køretimer, så jeg er klar til køreprøven.',
        steps: ['Ombytning af kørekort', 'Teoriprøve', 'Køretimer', 'Køreprøve'],
      },
      m365: {
        tag: 'Faglig udvikling',
        title: 'Dykker ned i Microsoft 365',
        text: 'Jeg bygger videre på min uddannelse og studerer Microsoft 365 for at blive endnu stærkere i brugeradministration og daglig support.',
        chips: ['Microsoft 365', 'Brugeradministration', 'Daglig support'],
      },
      kestro: {
        tag: 'Eget projekt',
        title: 'Kestro: mit langsigtede projekt',
        text: 'Kestro er min egen tosprogede B2B-hjemmeside om istandsat erhvervs-IT til Danmark og Norge. Det er min træningsplads: her øver jeg mig i at finde kunder, designe, skrive kode og få et site frem på Google, ved at gøre det i praksis. Visionen er, at det på sigt kan blive en ekstra indtægtskilde ved siden af mit job.',
        built: 'Det har jeg bygget og lært indtil nu',
        groups: [
          { icon: 'design', title: 'Design', items: ['Eget logo, ikonsæt, farver og typografi', 'Kort og illustrationer til produkter og vejledninger'] },
          { icon: 'code', title: 'Udvikling', items: ['Tosproget site i Next.js, TypeScript og Tailwind på Vercel', 'Interaktiv 3D-bærbar, der kun indlæses på kapable enheder', 'Kontaktformular og admin-indbakke'] },
          { icon: 'seo', title: 'SEO og indhold', items: ['hreflang, sitemap, struktureret data, FAQ og llms.txt', '8 vejledninger med RSS-feed', 'Kun verificerede kilder, ingen opdigtede tal'] },
          { icon: 'quality', title: 'Kvalitet og sikkerhed', items: ['Automatisk browsertest af kontrast, overflow og overskrifter', 'Adgangskontrol i tre lag på admin', 'Samtykkebanner til statistik'] },
        ],
        visit: 'Besøg kestro.dk',
        chips: ['Kundeopsøgning', 'Grafisk design', 'Webudvikling', 'SEO'],
      },
    },
  },
  en: {
    kicker: 'right now',
    heading: 'Latest',
    sub: 'What I am working on and learning at the moment.',
    updated: 'Updated October 2026',
    status: { done: 'Passed', active: 'In progress', longterm: 'Vision' },
    cards: {
      license: {
        tag: "Driver's licence",
        title: "Driving licence: theory test passed",
        text: 'My Iranian licence has been exchanged for a Danish one and I have passed the theory test. I am now taking driving lessons to get ready for the driving test.',
        steps: ['Licence exchange', 'Theory test', 'Driving lessons', 'Driving test'],
      },
      m365: {
        tag: 'Professional development',
        title: 'Diving into Microsoft 365',
        text: 'Building on my education, I am studying Microsoft 365 to get even stronger at user administration and day-to-day support.',
        chips: ['Microsoft 365', 'User administration', 'Day-to-day support'],
      },
      kestro: {
        tag: 'Own project',
        title: 'Kestro: my long-term project',
        text: 'Kestro is my own bilingual B2B website about refurbished business IT for Denmark and Norway. It is my training ground: here I practise finding customers, designing, writing code and getting a site to rank on Google, by doing it for real. The vision is that, over time, it can become an extra source of income alongside my job.',
        built: 'What I have built and learned so far',
        groups: [
          { icon: 'design', title: 'Design', items: ['Own logo, icon set, colours and typography', 'Cards and illustrations for products and guides'] },
          { icon: 'code', title: 'Development', items: ['Bilingual site in Next.js, TypeScript and Tailwind on Vercel', 'Interactive 3D laptop that only loads on capable devices', 'Contact form and admin inbox'] },
          { icon: 'seo', title: 'SEO and content', items: ['hreflang, sitemap, structured data, FAQ and llms.txt', '8 guides with an RSS feed', 'Verified sources only, no made-up numbers'] },
          { icon: 'quality', title: 'Quality and security', items: ['Automated browser tests for contrast, overflow and headings', 'Three-layer access control on the admin', 'Consent banner for analytics'] },
        ],
        visit: 'Visit kestro.dk',
        chips: ['Finding customers', 'Graphic design', 'Web development', 'SEO'],
      },
    },
  },
}

const pillStyle: Record<Status, { color: string; bg: string; border: string }> = {
  done: { color: '#6ee7b7', bg: 'rgba(110,231,183,0.08)', border: 'rgba(110,231,183,0.3)' },
  active: { color: '#C9A96E', bg: 'rgba(201,169,110,0.1)', border: 'rgba(201,169,110,0.35)' },
  longterm: { color: '#A58BE0', bg: 'rgba(165,139,224,0.1)', border: 'rgba(165,139,224,0.35)' },
}

function StatusPill({ status, label }: { status: Status; label: string }) {
  const s = pillStyle[status]
  return (
    <span
      className="inline-flex items-center gap-1.5 rounded-full"
      style={{ color: s.color, background: s.bg, border: `1px solid ${s.border}`, fontSize: '10px', letterSpacing: '0.16em', textTransform: 'uppercase', fontWeight: 600, padding: '4px 11px' }}
    >
      {status === 'active' ? (
        <span className="relative flex h-1.5 w-1.5">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full opacity-60" style={{ background: s.color }} />
          <span className="relative inline-flex rounded-full h-1.5 w-1.5" style={{ background: s.color }} />
        </span>
      ) : status === 'done' ? (
        <Check size={11} strokeWidth={2.4} />
      ) : null}
      {label}
    </span>
  )
}

function Card({ index, icon, tag, title, text, status, statusLabel, accent, className = '', children }: {
  index: number
  icon: React.ReactNode
  tag: string
  title: string
  text: string
  status: Status
  statusLabel: string
  accent: string
  className?: string
  children?: React.ReactNode
}) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.55, delay: index * 0.1, ease: [0.22, 1, 0.36, 1] }}
      whileHover={{ y: -6, boxShadow: `0 24px 48px -22px ${accent}66` }}
      className={`relative rounded-[22px] overflow-hidden p-6 sm:p-7 flex flex-col gap-4 ${className}`}
      style={{
        background: `radial-gradient(ellipse 80% 60% at 100% 0%, ${accent}1f 0%, transparent 60%), linear-gradient(160deg, rgba(232,224,213,0.05) 0%, rgba(232,224,213,0.015) 100%)`,
        border: '1px solid rgba(232,224,213,0.1)',
      }}
    >
      <div className="absolute top-0 left-0 right-0 h-[2px]" style={{ background: `linear-gradient(to right, ${accent}, transparent 75%)` }} />
      <div className="flex items-center justify-between gap-3">
        <div className="flex items-center gap-3">
          <span
            className="flex items-center justify-center rounded-full"
            style={{ width: 38, height: 38, color: accent, background: `${accent}18`, border: `1px solid ${accent}55` }}
          >
            {icon}
          </span>
          <span style={{ color: '#E8DDD0', opacity: 0.6, fontSize: '11px', letterSpacing: '0.2em', textTransform: 'uppercase', fontWeight: 600 }}>
            {tag}
          </span>
        </div>
        <StatusPill status={status} label={statusLabel} />
      </div>
      <h3 className="font-bold" style={{ color: '#EFE8DB', fontSize: 'clamp(1.1rem, 1.7vw, 1.4rem)', lineHeight: 1.25 }}>{title}</h3>
      <p style={{ color: '#E8DDD0', opacity: 0.68, fontSize: '14.5px', fontWeight: 300, lineHeight: 1.75 }}>{text}</p>
      {children}
    </motion.article>
  )
}

export default function LatestSection() {
  const { lang } = useLang()
  const c = copy[lang]
  const steps = c.cards.license.steps
  // theory test is passed, driving lessons are in progress
  const stepState = (i: number) => (i < 2 ? 'done' : i === 2 ? 'active' : 'todo')

  return (
    <section id="latest" className="px-5 sm:px-8 md:px-10 py-14 sm:py-20 md:py-24 relative z-10" style={{ background: '#0A0908' }}>
      <FadeIn delay={0} y={16}>
        <p className="serif-accent text-center mb-2" style={{ color: '#C9A96E', fontSize: 'clamp(1.05rem, 1.6vw, 1.4rem)', opacity: 0.9 }}>
          {c.kicker}
        </p>
      </FadeIn>
      <FadeIn delay={0.05} y={40}>
        <h2 className="hero-heading font-black uppercase leading-none tracking-tight text-center mb-5" style={{ fontSize: 'clamp(2.6rem, 10vw, 120px)' }}>
          {c.heading}
        </h2>
      </FadeIn>
      <FadeIn delay={0.15} y={20}>
        <p className="text-center max-w-xl mx-auto mb-3 font-light leading-relaxed" style={{ color: '#E8DDD0', opacity: 0.62, fontSize: 'clamp(0.9rem, 1.4vw, 1.05rem)' }}>
          {c.sub}
        </p>
        <p className="text-center mb-10 sm:mb-12 md:mb-14" style={{ color: '#E8DDD0', opacity: 0.65, fontSize: '11px', letterSpacing: '0.2em', textTransform: 'uppercase' }}>
          {c.updated}
        </p>
      </FadeIn>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-5 max-w-5xl mx-auto">
        {/* Driving licence */}
        <Card index={0} icon={<Car size={18} strokeWidth={1.7} />} tag={c.cards.license.tag} title={c.cards.license.title} text={c.cards.license.text} status="done" statusLabel={c.status.done} accent="#6ee7b7">
          <ol className="grid grid-cols-4 gap-2 mt-1" aria-label={c.cards.license.tag}>
            {steps.map((label, i) => {
              const st = stepState(i)
              const col = st === 'done' ? '#6ee7b7' : st === 'active' ? '#C9A96E' : 'rgba(232,224,213,0.2)'
              return (
                <li key={label} className="flex flex-col gap-2">
                  <span className="h-[3px] rounded-full" style={{ background: col }} />
                  <span style={{ color: '#E8DDD0', opacity: st === 'todo' ? 0.45 : 0.8, fontSize: '10px', letterSpacing: '0.04em', lineHeight: 1.35 }}>{label}</span>
                </li>
              )
            })}
          </ol>
        </Card>

        {/* Microsoft 365 */}
        <Card index={1} icon={<Cloud size={18} strokeWidth={1.7} />} tag={c.cards.m365.tag} title={c.cards.m365.title} text={c.cards.m365.text} status="active" statusLabel={c.status.active} accent="#3E9BD6">
          <div className="flex flex-wrap gap-2 mt-auto pt-1">
            {c.cards.m365.chips.map((chip) => (
              <span key={chip} className="hero-chip" style={{ opacity: 0.85 }}>{chip}</span>
            ))}
          </div>
        </Card>

        {/* Kestro, full width */}
        <Card index={2} icon={<Rocket size={18} strokeWidth={1.7} />} tag={c.cards.kestro.tag} title={c.cards.kestro.title} text={c.cards.kestro.text} status="longterm" statusLabel={c.status.longterm} accent="#A58BE0" className="md:col-span-2">
          <div className="mt-1">
            <p style={{ color: '#C9A96E', fontSize: '11px', letterSpacing: '0.2em', textTransform: 'uppercase', fontWeight: 600 }}>
              {c.cards.kestro.built}
            </p>
            <div className="mt-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
              {c.cards.kestro.groups.map((g) => {
                const Icon = groupIcons[g.icon as keyof typeof groupIcons]
                return (
                  <div
                    key={g.title}
                    className="rounded-[16px] p-4"
                    style={{ background: 'rgba(232,224,213,0.03)', border: '1px solid rgba(232,224,213,0.08)' }}
                  >
                    <div className="flex items-center gap-2 mb-3" style={{ color: '#A58BE0' }}>
                      <Icon size={16} strokeWidth={1.7} aria-hidden="true" />
                      <h4 style={{ color: '#EFE8DB', fontSize: '13px', fontWeight: 600, letterSpacing: '0.04em' }}>{g.title}</h4>
                    </div>
                    <ul className="flex flex-col gap-2">
                      {g.items.map((it) => (
                        <li key={it} style={{ color: '#E8DDD0', opacity: 0.74, fontSize: '13px', fontWeight: 300, lineHeight: 1.55 }}>{it}</li>
                      ))}
                    </ul>
                  </div>
                )
              })}
            </div>
          </div>
          <div className="flex flex-wrap items-center gap-3 mt-2">
            <a
              href="https://kestro.dk"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-outline-gold inline-flex items-center gap-2 rounded-full"
              style={{ padding: '11px 22px', fontSize: '11px', letterSpacing: '0.18em', textTransform: 'uppercase', fontWeight: 500 }}
            >
              {c.cards.kestro.visit}
              <ArrowUpRight size={13} strokeWidth={1.8} style={{ color: '#C9A96E' }} />
            </a>
            {c.cards.kestro.chips.map((chip) => (
              <span key={chip} className="hero-chip" style={{ opacity: 0.85 }}>{chip}</span>
            ))}
          </div>
        </Card>
      </div>
    </section>
  )
}
