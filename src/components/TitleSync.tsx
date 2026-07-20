import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import { glossaryBySlug } from '../data/glossary'

const SUFFIX = 'Alireza Makvandi'

const titles: Record<string, string> = {
  '/': 'Alireza Makvandi – IT-supporter i Aarhus',
  '/about': `Om mig – ${SUFFIX} | IT-supporter`,
  '/recommendations': `Anbefalinger – ${SUFFIX} | IT-supporter`,
  '/viden': `IT-ordbog – teknik forklaret enkelt | ${SUFFIX}`,
  '/kolofon': `Om dette website – ${SUFFIX}`,
  '/projects/elite-vask': `Elite Vask – ${SUFFIX} | IT-supporter`,
  '/projects/svendeproeve': `Svendeprøve – ${SUFFIX} | IT-supporter`,
  '/projects/mak-painting': `MAK Painting – ${SUFFIX} | IT-supporter`,
  '/projects/gaming-pc': `Gaming PC Build – ${SUFFIX} | IT-supporter`,
  '/experience/yousee': `YouSee – ${SUFFIX} | IT-supporter`,
  '/experience/fourcom': `Fourcom – ${SUFFIX} | IT-supporter`,
  '/experience/folkehuse': `Folkehuse Aarhus – ${SUFFIX} | IT-supporter`,
  '/experience/aarhustech': `Aarhus Tech – ${SUFFIX} | IT-supporter`,
}

/** Keeps the browser tab title in sync during client-side navigation. */
export default function TitleSync() {
  const { pathname } = useLocation()

  useEffect(() => {
    let title = titles[pathname]
    if (!title && pathname.startsWith('/viden/')) {
      const term = glossaryBySlug[pathname.slice('/viden/'.length)]
      if (term) title = `Hvad er ${term.name}? – forklaret enkelt | ${SUFFIX}`
    }
    document.title = title ?? titles['/']
  }, [pathname])

  return null
}
