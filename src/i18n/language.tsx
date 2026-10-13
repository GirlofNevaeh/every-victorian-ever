import { createContext, useContext, useEffect, useMemo, useState, type ReactNode } from 'react'

export const languages = [
  { code: 'en', native: 'English' },
  { code: 'gd', native: 'Gàidhlig' },
  { code: 'cy', native: 'Cymraeg' },
  { code: 'ga', native: 'Gaeilge' },
  { code: 'fr', native: 'Français' },
  { code: 'it', native: 'Italiano' },
  { code: 'es', native: 'Español' },
  { code: 'ru', native: 'Русский' },
] as const

export type Lang = (typeof languages)[number]['code']

const loaders: Record<Exclude<Lang, 'en'>, () => Promise<{ default: Record<string, string> }>> = {
  gd: () => import('./locales/gd.json'),
  cy: () => import('./locales/cy.json'),
  ga: () => import('./locales/ga.json'),
  fr: () => import('./locales/fr.json'),
  it: () => import('./locales/it.json'),
  es: () => import('./locales/es.json'),
  ru: () => import('./locales/ru.json'),
}

type LanguageValue = {
  lang: Lang
  setLang: (lang: Lang) => void
  t: (text: string) => string
}

const LanguageContext = createContext<LanguageValue | null>(null)

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [lang, setLangState] = useState<Lang>('en')
  const [dict, setDict] = useState<Record<string, string>>({})

  useEffect(() => {
    const saved = window.localStorage.getItem('victorian-lang')
    if (saved && languages.some((item) => item.code === saved)) setLangState(saved as Lang)
  }, [])

  useEffect(() => {
    document.documentElement.lang = lang === 'gd' ? 'gd' : lang
    let cancel = false
    if (lang === 'en') {
      setDict({})
      return
    }
    loaders[lang]().then((module) => {
      if (!cancel) setDict(module.default)
    })
    return () => {
      cancel = true
    }
  }, [lang])

  const value = useMemo<LanguageValue>(() => {
    function setLang(next: Lang) {
      setLangState(next)
      window.localStorage.setItem('victorian-lang', next)
    }
    function t(text: string) {
      if (!text || lang === 'en') return text
      return dict[text] ?? text
    }
    return { lang, setLang, t }
  }, [dict, lang])

  return <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>
}

export function useLanguage() {
  const value = useContext(LanguageContext)
  if (!value) throw new Error('LanguageProvider is missing')
  return value
}

export function useT() {
  return useLanguage().t
}
