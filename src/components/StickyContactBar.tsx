import { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Phone, Mail, Download } from 'lucide-react'
import { useLang } from '../contexts/LanguageContext'

/**
 * Mobile-only quick-contact bar for recruiters. Appears after the hero is
 * scrolled past and hides again once the contact section is in view.
 */
export default function StickyContactBar() {
  const { lang } = useLang()
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const contact = document.getElementById('contact')
    let pastHero = false
    let inContact = false
    const update = () => setVisible(pastHero && !inContact)
    const onScroll = () => { pastHero = window.scrollY > window.innerHeight * 0.8; update() }
    const io = contact
      ? new IntersectionObserver(([e]) => { inContact = e.isIntersecting; update() }, { threshold: 0.15 })
      : null
    if (contact && io) io.observe(contact)
    window.addEventListener('scroll', onScroll, { passive: true })
    onScroll()
    return () => { window.removeEventListener('scroll', onScroll); io?.disconnect() }
  }, [])

  const item = 'flex-1 flex items-center justify-center gap-2 py-3 text-[11px] uppercase tracking-[0.14em] font-medium'

  return (
    <AnimatePresence>
      {visible && (
        <motion.nav
          aria-label={lang === 'da' ? 'Hurtig kontakt' : 'Quick contact'}
          initial={{ y: 80, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 80, opacity: 0 }}
          transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
          className="sm:hidden fixed left-3 right-3 bottom-3 z-[95] flex rounded-full overflow-hidden"
          style={{
            background: 'rgba(18,17,16,0.92)',
            backdropFilter: 'blur(14px)',
            WebkitBackdropFilter: 'blur(14px)',
            border: '1px solid rgba(201,169,110,0.35)',
            boxShadow: '0 12px 32px -8px rgba(0,0,0,0.7)',
            color: '#E8DDD0',
          }}
        >
          <a href="tel:+4591488843" className={item}><Phone size={14} strokeWidth={1.7} style={{ color: '#C9A96E' }} />{lang === 'da' ? 'Ring' : 'Call'}</a>
          <a href="mailto:alirezadk2016@gmail.com" className={item} style={{ borderLeft: '1px solid rgba(232,224,213,0.1)', borderRight: '1px solid rgba(232,224,213,0.1)' }}><Mail size={14} strokeWidth={1.7} style={{ color: '#C9A96E' }} />Mail</a>
          <a href="/cv-alireza-makvandi.pdf" target="_blank" rel="noopener noreferrer" className={item}><Download size={14} strokeWidth={1.7} style={{ color: '#C9A96E' }} />CV</a>
        </motion.nav>
      )}
    </AnimatePresence>
  )
}
