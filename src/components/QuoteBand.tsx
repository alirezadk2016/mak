import { Link } from 'react-router-dom'
import { ArrowUpRight } from 'lucide-react'
import FadeIn from './FadeIn'
import { useLang } from '../contexts/LanguageContext'
import { t } from '../translations'

/** Trust signal on the home page: the first two sentences of the official YouSee reference. */
export default function QuoteBand() {
  const { lang } = useLang()
  const r = t[lang].recommendations
  const item = r.items[0]
  const excerpt = item.quote.split(/(?<=\.)\s+/).slice(0, 2).join(' ')

  return (
    <section className="px-5 sm:px-8 md:px-10 py-12 sm:py-16 relative z-10" style={{ background: '#0A0908' }} aria-label={r.heading}>
      <FadeIn delay={0} y={24}>
        <figure className="max-w-3xl mx-auto text-center">
          <span aria-hidden="true" className="serif-accent block" style={{ color: '#C9A96E', fontSize: '4rem', lineHeight: 0.6, opacity: 0.7 }}>“</span>
          <blockquote
            className="serif-accent"
            style={{ color: '#EFE8DB', fontSize: 'clamp(1.2rem, 2.4vw, 1.75rem)', lineHeight: 1.5 }}
          >
            {excerpt}
          </blockquote>
          <figcaption className="mt-6" style={{ color: '#E8DDD0', opacity: 0.7, fontSize: '12px', letterSpacing: '0.16em', textTransform: 'uppercase' }}>
            {item.name} · {item.role}, {item.company}
          </figcaption>
          <Link
            to="/recommendations"
            className="btn-outline-gold inline-flex items-center gap-2 rounded-full mt-7"
            style={{ padding: '10px 20px', fontSize: '11px', letterSpacing: '0.16em', textTransform: 'uppercase', fontWeight: 500 }}
          >
            {lang === 'da' ? 'Læs hele anbefalingen' : 'Read the full reference'}
            <ArrowUpRight size={13} strokeWidth={1.8} style={{ color: '#C9A96E' }} />
          </Link>
        </figure>
      </FadeIn>
    </section>
  )
}
