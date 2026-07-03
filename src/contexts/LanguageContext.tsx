import { createContext, useContext, useEffect, useState, ReactNode } from 'react'

type Lang = 'da' | 'en'

const STORAGE_KEY = 'lang'

function initialLang(): Lang {
  try {
    const saved = localStorage.getItem(STORAGE_KEY)
    if (saved === 'da' || saved === 'en') return saved
  } catch { /* storage unavailable (private mode etc.) */ }
  // First visit: follow the browser language
  return navigator.language?.toLowerCase().startsWith('da') ? 'da' : 'en'
}

const LanguageContext = createContext<{ lang: Lang; toggle: () => void }>({
  lang: 'da',
  toggle: () => {},
})

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [lang, setLang] = useState<Lang>(initialLang)

  useEffect(() => {
    try { localStorage.setItem(STORAGE_KEY, lang) } catch { /* ignore */ }
    document.documentElement.lang = lang
  }, [lang])

  const toggle = () => setLang(l => (l === 'da' ? 'en' : 'da'))
  return (
    <LanguageContext.Provider value={{ lang, toggle }}>
      {children}
    </LanguageContext.Provider>
  )
}

export const useLang = () => useContext(LanguageContext)
