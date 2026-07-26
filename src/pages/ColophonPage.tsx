import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { ArrowLeft, Layers, ShieldCheck, Gauge, Search, Heart, Globe } from 'lucide-react'
import { useLang } from '../contexts/LanguageContext'

export default function ColophonPage() {
  const { lang, toggle } = useLang()
  const da = lang === 'da'

  const facts = [
    {
      icon: Layers,
      title: da ? 'Teknologi' : 'Technology',
      text: da
        ? 'React 18, TypeScript, Vite og Tailwind CSS. Hostet på Vercel, hver ændring deployes automatisk fra GitHub.'
        : 'React 18, TypeScript, Vite and Tailwind CSS. Hosted on Vercel, every change deploys automatically from GitHub.',
    },
    {
      icon: Search,
      title: 'SEO',
      text: da
        ? '24 sider pre-renderes til statisk HTML, så søgemaskiner ser alt indhold. Hver side har sin egen titel, beskrivelse og plads i sitemap.xml.'
        : '24 pages are pre-rendered to static HTML so search engines see all content. Every page has its own title, description and place in sitemap.xml.',
    },
    {
      icon: ShieldCheck,
      title: da ? 'Sikkerhed & privatliv' : 'Security & privacy',
      text: da
        ? 'HTTPS med HSTS, Content-Security-Policy og øvrige sikkerhedsheaders. Skrifttyper er self-hosted, ingen Google Fonts, ingen tracking, ingen cookies.'
        : 'HTTPS with HSTS, Content-Security-Policy and other security headers. Fonts are self-hosted, no Google Fonts, no tracking, no cookies.',
    },
    {
      icon: Gauge,
      title: 'Performance',
      text: da
        ? 'Optimerede billeder, lazy-loading og statisk HTML gør siden hurtig, også på mobil.'
        : 'Optimized images, lazy-loading and static HTML keep the site fast, on mobile too.',
    },
  ]

  return (
    <main style={{ background: '#0A0908', minHeight: '100vh' }} className="px-5 sm:px-10 md:px-16 py-10 sm:py-16">

      {/* Top bar: back + language */}
      <motion.div
        initial={{ opacity: 0, y: -8 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.4 }}
        className="flex items-center justify-between mb-10 sm:mb-14"
      >
        <Link
          to="/"
          className="inline-flex items-center gap-2 transition-opacity hover:opacity-60"
          style={{ color: '#E8DDD0', opacity: 0.45, fontSize: '12px', letterSpacing: '0.2em', textTransform: 'uppercase' }}
        >
          <ArrowLeft size={13} strokeWidth={1.8} />
          {da ? 'Tilbage' : 'Back'}
        </Link>
        <button
          onClick={toggle}
          className="inline-flex items-center gap-1.5 transition-opacity hover:opacity-60"
          style={{ color: '#E8DDD0', opacity: 0.45, fontSize: '11px', letterSpacing: '0.2em', textTransform: 'uppercase', fontWeight: 600 }}
          aria-label={da ? 'Switch to English' : 'Skift til dansk'}
        >
          <Globe size={12} strokeWidth={1.5} />
          {da ? 'EN' : 'DA'}
        </button>
      </motion.div>

      <div className="max-w-3xl mx-auto">
        {/* Header */}
        <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
          <p className="serif-accent mb-2" style={{ color: '#C9A96E', fontSize: 'clamp(1.05rem, 1.6vw, 1.4rem)', opacity: 0.85 }}>
            {da ? 'kolofon' : 'colophon'}
          </p>
          <h1
            className="hero-heading font-black uppercase leading-none mb-8"
            style={{ fontSize: 'clamp(2.2rem, 7vw, 5rem)', letterSpacing: '-0.03em' }}
          >
            {da ? 'Om dette website' : 'About this website'}
          </h1>
        </motion.div>

        {/* Story */}
        <motion.div
          initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="mb-12"
        >
          <p className="font-light leading-relaxed mb-5" style={{ color: '#E8DDD0', opacity: 0.65, fontSize: 'clamp(1rem, 1.6vw, 1.15rem)', lineHeight: 1.9 }}>
            {da
              ? 'Dette website er mit eget projekt. Jeg byggede det, fordi et CV på papir ikke kan vise, hvem man er, men det kan en side som denne. Alt indhold, alle billeder og alle beslutninger om design og struktur er mine egne.'
              : 'This website is my own project. I built it because a paper CV cannot show who you are, but a page like this can. All content, all photos and every decision about design and structure are my own.'}
          </p>
          <p className="font-light leading-relaxed" style={{ color: '#E8DDD0', opacity: 0.65, fontSize: 'clamp(1rem, 1.6vw, 1.15rem)', lineHeight: 1.9 }}>
            {da
              ? 'I byggeprocessen brugte jeg moderne værktøjer, herunder AI, på samme måde, som en håndværker bruger sit værktøj: Det gør arbejdet hurtigere, men retningen, indholdet og ansvaret er mit.'
              : 'In the building process I used modern tools, including AI, the same way a craftsman uses his toolbox: it makes the work faster, but the direction, the content and the responsibility are mine.'}
          </p>
        </motion.div>

        {/* Fact cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-12">
          {facts.map((f, i) => {
            const Icon = f.icon
            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 18 }} animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 + i * 0.07 }}
                className="rounded-[18px] p-6"
                style={{ background: 'rgba(232,224,213,0.035)', border: '1px solid rgba(232,224,213,0.09)' }}
              >
                <Icon size={20} strokeWidth={1.5} style={{ color: '#C9A96E', opacity: 0.85, marginBottom: '12px' }} />
                <h2 style={{ color: '#E8DDD0', opacity: 0.9, fontSize: '14px', fontWeight: 700, marginBottom: '6px' }}>{f.title}</h2>
                <p style={{ color: '#E8DDD0', opacity: 0.5, fontSize: '13px', lineHeight: 1.7, fontWeight: 300 }}>{f.text}</p>
              </motion.div>
            )
          })}
        </div>

        {/* Personal sign-off */}
        <motion.div
          initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="rounded-[20px] p-7 sm:p-9 flex items-start gap-4"
          style={{ background: 'linear-gradient(160deg, rgba(201,169,110,0.08) 0%, rgba(232,224,213,0.015) 100%)', border: '1px solid rgba(201,169,110,0.2)' }}
        >
          <Heart size={18} strokeWidth={1.5} style={{ color: '#C9A96E', opacity: 0.8, marginTop: '4px', flexShrink: 0 }} />
          <div>
            <p className="font-light leading-relaxed mb-3" style={{ color: '#E8DDD0', opacity: 0.75, fontSize: 'clamp(0.95rem, 1.5vw, 1.1rem)', lineHeight: 1.85 }}>
              {da
                ? 'Siden her er også et løbende projekt: Jeg forbedrer den, når jeg lærer noget nyt. Finder du en fejl, eller har du en idé, så skriv endelig.'
                : 'This site is also an ongoing project: I improve it as I learn. If you find a bug or have an idea, do write to me.'}
            </p>
            <span className="serif-accent" style={{ color: '#C9A96E', fontSize: '17px' }}>— Alireza</span>
          </div>
        </motion.div>
      </div>
    </main>
  )
}
