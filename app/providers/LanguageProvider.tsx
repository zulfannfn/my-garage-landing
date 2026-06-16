'use client'

import { createContext, useContext, useEffect, useState } from 'react'
import { translations, type Lang } from '../i18n/translations'

type TranslationSet = (typeof translations)[Lang]

interface LangCtx {
  lang: Lang
  t: TranslationSet
  toggle: () => void
}

const Ctx = createContext<LangCtx>({
  lang: 'id',
  t: translations.id,
  toggle: () => {},
})

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [lang, setLang] = useState<Lang>('id')

  useEffect(() => {
    const saved = localStorage.getItem('mg-lang') as Lang | null
    if (saved === 'id' || saved === 'en') setLang(saved)
  }, [])

  const toggle = () => {
    const next: Lang = lang === 'id' ? 'en' : 'id'
    setLang(next)
    localStorage.setItem('mg-lang', next)
  }

  return (
    <Ctx.Provider value={{ lang, t: translations[lang], toggle }}>
      {children}
    </Ctx.Provider>
  )
}

export const useLanguage = () => useContext(Ctx)
