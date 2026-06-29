import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import {
  ArrowLeft, MapPin, Calendar, Languages, Dumbbell,
  Gamepad2, Cpu, Server, PenTool, Users, Sparkles,
} from 'lucide-react'
import { useLang } from '../contexts/LanguageContext'
import { t } from '../translations'
import ContactButton from '../components/ContactButton'

const IMG = '/f1145949-0bb9-49ee-984f-8586244456a5.png'

const content = {
  da: {
    back: 'Tilbage',
    label: 'Om mig',
    heading: 'Om mig',
    facts: [
      { icon: Calendar, k: 'Født', v: '1994' },
      { icon: MapPin, k: 'Oprindelse', v: 'Ahvaz, Iran' },
      { icon: MapPin, k: 'Bosat', v: 'Aarhus, Danmark' },
      { icon: Calendar, k: 'I Danmark', v: '10 år' },
    ],
    journeyLabel: 'Min rejse',
    journey: [
      { year: '2016', title: 'Ankomst til Danmark', desc: 'Jeg startede i sprogskole næsten med det samme — fast besluttet på at lære dansk og bygge et nyt liv her.' },
      { year: '2017 – 2021', title: 'YouSee / TDC — Aarhus', desc: 'Næsten fire år som studentermedhjælper med kundeservice, drift, bogføring og praktiske IT-opgaver. Fik en officiel anbefaling fra butikschefen.' },
      { year: '2018 – 2020', title: 'IGU — Nuuday A/S', desc: 'Integrationsgrunduddannelse med fokus på dansk som nyt sprog og faglige kompetencer.' },
      { year: '2020 – 2023', title: 'Aarhus HF & VUC', desc: 'Afsluttede C-niveau og styrkede mit sprog — de nødvendige skridt mod en erhvervsuddannelse.' },
      { year: '2024', title: 'Praktik hos Fourcom ApS', desc: 'Opsætning af Windows, fejlfinding og reparation af hardware, samt brugersupport og dokumentation.' },
      { year: '2024 – 2026', title: 'Aarhus Tech — IT Support', desc: 'IT-supporteruddannelsen med skolepraktik — bl.a. én dag om ugen på et plejehjem med brugersupport. Afsluttede Hovedforløb 2 i oktober 2025.' },
      { year: 'I dag', title: 'Søger læreplads', desc: 'Klar til at færdiggøre min uddannelse i praksis og bidrage fra dag ét med energi og engagement.' },
    ],
    expertiseLabel: 'Mine kompetencer',
    expertise: [
      { icon: Server, title: 'IT & Netværk', desc: 'Windows Server, Active Directory, DNS/DHCP, Linux og netværksopsætning.' },
      { icon: Cpu, title: 'Hardware', desc: 'PC-opsætning, fejlfinding, reparation af komponenter og klargøring af arbejdsstationer.' },
      { icon: PenTool, title: 'Software & OS', desc: 'Installation og opsætning af Windows, software og fejlfinding på systemer.' },
      { icon: Users, title: 'Brugersupport', desc: 'Tålmodig og professionel support til brugere på alle tekniske niveauer.' },
    ],
    extraLabel: 'Øvrige kvalifikationer',
    extra: ['Excel & regneark', 'Web Design', 'Dokumentation', 'Bogføring', 'SEO', 'AutoCAD (tidligere)'],
    beyondLabel: 'Ud over IT',
    beyondText: 'I min tid i Danmark har jeg prøvet kræfter med mange forskellige felter — som hjælpetræner i bokseklubben Champs Camp, som frisørassistent hos Frisør Katalina, og som lagermedarbejder gennem vikarbureauet Moment (bl.a. Salling Group og Søstrene Grene). Det har lært mig at tilpasse mig, samarbejde med alle slags mennesker og tage ansvar i forskellige miljøer.',
    interestsLabel: 'Interesser & fritid',
    interests: [
      { icon: Cpu, title: 'Teknologi & IT', desc: 'Jeg kan blive helt opslugt af computere. Alt inden for IT og internettets fremtid fascinerer mig.' },
      { icon: Gamepad2, title: 'Gaming', desc: 'Spiller FIFA og Apex i fritiden.' },
      { icon: Dumbbell, title: 'Sport', desc: 'Fodbold og boksning er mine passioner — jeg træner i fitness og spiller fodbold flere gange om ugen.' },
    ],
    langLabel: 'Sprog',
    languages: [
      { name: 'Persisk', level: 'Modersmål', pct: 100 },
      { name: 'Dansk', level: 'Flydende', pct: 85 },
      { name: 'Engelsk', level: 'Mellem — under udvikling', pct: 60 },
    ],
    valuesLabel: 'Hvad jeg står for',
    valuesText: 'Jeg vil gerne være kendt som en, der brænder for sit arbejde, lærer hurtigt og tager ansvar fuldt ud. Jeg stræber altid efter at udvikle mig og levere det bedst mulige resultat — og bygge tillid med dem, jeg arbejder for.',
    ctaLabel: 'Lad os tage en snak',
  },
  en: {
    back: 'Back',
    label: 'About me',
    heading: 'About me',
    facts: [
      { icon: Calendar, k: 'Born', v: '1994' },
      { icon: MapPin, k: 'Origin', v: 'Ahvaz, Iran' },
      { icon: MapPin, k: 'Based in', v: 'Aarhus, Denmark' },
      { icon: Calendar, k: 'In Denmark', v: '10 years' },
    ],
    journeyLabel: 'My journey',
    journey: [
      { year: '2016', title: 'Arrival in Denmark', desc: 'I started language school almost immediately — determined to learn Danish and build a new life here.' },
      { year: '2017 – 2021', title: 'YouSee / TDC — Aarhus', desc: 'Nearly four years as a student assistant in customer service, operations, bookkeeping and practical IT tasks. Received an official reference from the store manager.' },
      { year: '2018 – 2020', title: 'IGU — Nuuday A/S', desc: 'Integration training focused on Danish as a new language and professional skills.' },
      { year: '2020 – 2023', title: 'Aarhus HF & VUC', desc: 'Completed C-level and strengthened my language — the necessary steps towards vocational education.' },
      { year: '2024', title: 'Internship at Fourcom ApS', desc: 'Windows setup, troubleshooting and hardware repair, along with user support and documentation.' },
      { year: '2024 – 2026', title: 'Aarhus Tech — IT Support', desc: 'IT Support education with school practice — including one day a week at a nursing home doing user support. Completed Main Course 2 in October 2025.' },
      { year: 'Today', title: 'Seeking an apprenticeship', desc: 'Ready to complete my education in practice and contribute from day one with energy and commitment.' },
    ],
    expertiseLabel: 'My expertise',
    expertise: [
      { icon: Server, title: 'IT & Networking', desc: 'Windows Server, Active Directory, DNS/DHCP, Linux and network setup.' },
      { icon: Cpu, title: 'Hardware', desc: 'PC setup, troubleshooting, component repair and workstation preparation.' },
      { icon: PenTool, title: 'Software & OS', desc: 'Installation and setup of Windows, software and system troubleshooting.' },
      { icon: Users, title: 'User Support', desc: 'Patient, professional support for users at every technical level.' },
    ],
    extraLabel: 'Other qualifications',
    extra: ['Excel & spreadsheets', 'Web Design', 'Documentation', 'Bookkeeping', 'SEO', 'AutoCAD (past)'],
    beyondLabel: 'Beyond IT',
    beyondText: 'During my time in Denmark I have worked across many different fields — as an assistant coach at the boxing club Champs Camp, as a hairdresser assistant at Frisør Katalina, and as a warehouse worker through the Moment agency (including Salling Group and Søstrene Grene). It taught me to adapt, work with all kinds of people and take responsibility in different environments.',
    interestsLabel: 'Interests & hobbies',
    interests: [
      { icon: Cpu, title: 'Technology & IT', desc: 'I can get completely absorbed in computers. Everything about IT and the future of the internet fascinates me.' },
      { icon: Gamepad2, title: 'Gaming', desc: 'I play FIFA and Apex in my free time.' },
      { icon: Dumbbell, title: 'Sport', desc: 'Football and boxing are my passions — I train at the gym and play football several times a week.' },
    ],
    langLabel: 'Languages',
    languages: [
      { name: 'Persian', level: 'Native', pct: 100 },
      { name: 'Danish', level: 'Fluent', pct: 85 },
      { name: 'English', level: 'Intermediate — improving', pct: 60 },
    ],
    valuesLabel: 'What I stand for',
    valuesText: 'I want to be known as someone who is passionate about their work, learns quickly and takes full responsibility. I always strive to grow and deliver the best possible result — and to build trust with the people I work for.',
    ctaLabel: "Let's have a chat",
  },
}

function Section({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <div className="mb-16 sm:mb-24">
      <motion.div
        initial={{ opacity: 0, x: -12 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="flex items-center gap-3 mb-8"
      >
        <div className="w-6 h-px" style={{ background: 'rgba(232,224,213,0.25)' }} />
        <span style={{ color: '#E8DDD0', opacity: 0.3, fontSize: '10px', letterSpacing: '0.38em', textTransform: 'uppercase', fontWeight: 500 }}>
          {label}
        </span>
      </motion.div>
      {children}
    </div>
  )
}

export default function AboutPage() {
  const { lang } = useLang()
  const c = content[lang]
  const bio = t[lang].about.bio

  return (
    <main style={{ background: '#0A0908', minHeight: '100vh' }} className="px-5 sm:px-10 md:px-16 py-10 sm:py-16">

      {/* Back */}
      <motion.div initial={{ opacity: 0, x: -16 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.4 }}>
        <Link
          to="/"
          className="inline-flex items-center gap-2 mb-10 sm:mb-14 transition-opacity hover:opacity-60"
          style={{ color: '#E8DDD0', opacity: 0.45, fontSize: '12px', letterSpacing: '0.2em', textTransform: 'uppercase' }}
        >
          <ArrowLeft size={13} strokeWidth={1.8} />
          {c.back}
        </Link>
      </motion.div>

      <div className="max-w-4xl mx-auto">

        {/* Hero */}
        <div className="flex flex-col sm:flex-row sm:items-center gap-8 sm:gap-12 mb-16 sm:mb-24">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            className="flex-shrink-0"
          >
            <img
              src={IMG}
              alt="Alireza Makvandi"
              className="w-28 h-28 sm:w-40 sm:h-40 rounded-full object-cover"
              style={{ border: '1px solid rgba(232,224,213,0.15)' }}
            />
          </motion.div>
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.1 }}>
            <p style={{ color: '#E8DDD0', opacity: 0.22, fontSize: '10px', letterSpacing: '0.35em', textTransform: 'uppercase', marginBottom: '10px' }}>
              {c.label}
            </p>
            <h1
              className="hero-heading font-black uppercase leading-none mb-1"
              style={{ fontSize: 'clamp(2.6rem, 8vw, 5.5rem)', letterSpacing: '-0.03em' }}
            >
              Alireza
            </h1>
            <p style={{ color: '#E8DDD0', opacity: 0.4, fontSize: '13px', letterSpacing: '0.06em' }}>
              IT Support & Web Designer · Aarhus, DK
            </p>
          </motion.div>
        </div>

        {/* Bio */}
        <motion.p
          initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="font-light leading-relaxed mb-16 sm:mb-24"
          style={{ color: '#E8DDD0', opacity: 0.7, fontSize: 'clamp(1rem, 1.6vw, 1.25rem)', lineHeight: 1.9 }}
        >
          {bio}
        </motion.p>

        {/* Quick facts */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mb-16 sm:mb-24">
          {c.facts.map((f, i) => {
            const Icon = f.icon
            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.06 }}
                className="rounded-[16px] p-4 sm:p-5"
                style={{ background: 'rgba(232,224,213,0.04)', border: '1px solid rgba(232,224,213,0.08)' }}
              >
                <Icon size={16} strokeWidth={1.5} style={{ color: '#C9A96E', opacity: 0.8, marginBottom: '10px' }} />
                <p style={{ color: '#E8DDD0', opacity: 0.3, fontSize: '9px', letterSpacing: '0.2em', textTransform: 'uppercase', marginBottom: '3px' }}>{f.k}</p>
                <p style={{ color: '#E8DDD0', opacity: 0.85, fontSize: '14px', fontWeight: 600 }}>{f.v}</p>
              </motion.div>
            )
          })}
        </div>

        {/* Journey timeline */}
        <Section label={c.journeyLabel}>
          <div className="flex flex-col">
            {c.journey.map((step, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -16 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true, margin: '-40px' }}
                transition={{ duration: 0.5, delay: i * 0.05 }}
                className="relative flex gap-5 sm:gap-8 pb-8 last:pb-0"
              >
                {/* Line + dot */}
                <div className="flex flex-col items-center flex-shrink-0">
                  <div className="w-2.5 h-2.5 rounded-full mt-1.5" style={{ background: '#C9A96E' }} />
                  {i < c.journey.length - 1 && <div className="w-px flex-1 mt-1" style={{ background: 'rgba(232,224,213,0.12)' }} />}
                </div>
                <div className="pb-2">
                  <span style={{ color: '#C9A96E', opacity: 0.8, fontSize: '10px', letterSpacing: '0.18em', textTransform: 'uppercase', fontWeight: 600 }}>{step.year}</span>
                  <h3 style={{ color: '#E8DDD0', opacity: 0.9, fontSize: 'clamp(1rem, 2vw, 1.3rem)', fontWeight: 600, margin: '4px 0 8px' }}>{step.title}</h3>
                  <p style={{ color: '#E8DDD0', opacity: 0.5, fontSize: '14px', lineHeight: 1.7, fontWeight: 300 }}>{step.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </Section>

        {/* Expertise */}
        <Section label={c.expertiseLabel}>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {c.expertise.map((e, i) => {
              const Icon = e.icon
              return (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 18 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
                  transition={{ duration: 0.45, delay: i * 0.06 }}
                  className="rounded-[18px] p-6"
                  style={{ background: 'rgba(232,224,213,0.035)', border: '1px solid rgba(232,224,213,0.08)' }}
                >
                  <Icon size={22} strokeWidth={1.4} style={{ color: '#C9A96E', opacity: 0.85, marginBottom: '14px' }} />
                  <h3 style={{ color: '#E8DDD0', opacity: 0.9, fontSize: '15px', fontWeight: 600, marginBottom: '6px' }}>{e.title}</h3>
                  <p style={{ color: '#E8DDD0', opacity: 0.5, fontSize: '13px', lineHeight: 1.65, fontWeight: 300 }}>{e.desc}</p>
                </motion.div>
              )
            })}
          </div>

          {/* Other qualifications */}
          <div className="mt-6">
            <p style={{ color: '#E8DDD0', opacity: 0.28, fontSize: '9px', letterSpacing: '0.28em', textTransform: 'uppercase', marginBottom: '12px' }}>
              {c.extraLabel}
            </p>
            <div className="flex flex-wrap gap-2">
              {c.extra.map((x) => (
                <span
                  key={x}
                  style={{ color: '#E8DDD0', opacity: 0.45, fontSize: '10px', letterSpacing: '0.16em', textTransform: 'uppercase', padding: '5px 12px', border: '1px solid rgba(232,224,213,0.1)', borderRadius: '100px' }}
                >
                  {x}
                </span>
              ))}
            </div>
          </div>
        </Section>

        {/* Beyond IT */}
        <Section label={c.beyondLabel}>
          <motion.p
            initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="font-light leading-relaxed"
            style={{ color: '#E8DDD0', opacity: 0.6, fontSize: 'clamp(0.95rem, 1.5vw, 1.15rem)', lineHeight: 1.85 }}
          >
            {c.beyondText}
          </motion.p>
        </Section>

        {/* Interests */}
        <Section label={c.interestsLabel}>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
            {c.interests.map((it, i) => {
              const Icon = it.icon
              return (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 18 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
                  transition={{ duration: 0.45, delay: i * 0.06 }}
                  className="rounded-[18px] p-6"
                  style={{ background: 'rgba(232,224,213,0.035)', border: '1px solid rgba(232,224,213,0.08)' }}
                >
                  <Icon size={22} strokeWidth={1.4} style={{ color: '#C9A96E', opacity: 0.85, marginBottom: '14px' }} />
                  <h3 style={{ color: '#E8DDD0', opacity: 0.9, fontSize: '15px', fontWeight: 600, marginBottom: '6px' }}>{it.title}</h3>
                  <p style={{ color: '#E8DDD0', opacity: 0.5, fontSize: '13px', lineHeight: 1.65, fontWeight: 300 }}>{it.desc}</p>
                </motion.div>
              )
            })}
          </div>
        </Section>

        {/* Languages */}
        <Section label={c.langLabel}>
          <div className="flex flex-col gap-6">
            {c.languages.map((l, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
              >
                <div className="flex items-center justify-between mb-2">
                  <div className="flex items-center gap-2">
                    <Languages size={14} strokeWidth={1.5} style={{ color: '#C9A96E', opacity: 0.7 }} />
                    <span style={{ color: '#E8DDD0', opacity: 0.85, fontSize: '14px', fontWeight: 600 }}>{l.name}</span>
                  </div>
                  <span style={{ color: '#E8DDD0', opacity: 0.35, fontSize: '11px' }}>{l.level}</span>
                </div>
                <div className="h-1.5 rounded-full overflow-hidden" style={{ background: 'rgba(232,224,213,0.08)' }}>
                  <motion.div
                    initial={{ width: 0 }} whileInView={{ width: `${l.pct}%` }} viewport={{ once: true }}
                    transition={{ duration: 1, delay: 0.2 + i * 0.1, ease: [0.22, 1, 0.36, 1] }}
                    className="h-full rounded-full"
                    style={{ background: 'linear-gradient(to right, #C9A96E, #8A7250)' }}
                  />
                </div>
              </motion.div>
            ))}
          </div>
        </Section>

        {/* Values */}
        <Section label={c.valuesLabel}>
          <motion.div
            initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="rounded-[22px] p-8 sm:p-10 relative overflow-hidden"
            style={{ background: 'linear-gradient(160deg, rgba(201,169,110,0.07) 0%, rgba(232,224,213,0.015) 100%)', border: '1px solid rgba(201,169,110,0.18)' }}
          >
            <Sparkles size={26} strokeWidth={1.3} style={{ color: '#C9A96E', opacity: 0.7, marginBottom: '16px' }} />
            <p
              className="font-light leading-relaxed"
              style={{ color: '#E8DDD0', opacity: 0.8, fontSize: 'clamp(1rem, 1.7vw, 1.3rem)', lineHeight: 1.85 }}
            >
              {c.valuesText}
            </p>
          </motion.div>
        </Section>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="flex justify-center pt-4"
        >
          <ContactButton label={c.ctaLabel} />
        </motion.div>
      </div>
    </main>
  )
}
