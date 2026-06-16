'use client'

import { createContext, useContext, useEffect, useState } from 'react'

type Theme = 'light' | 'dark'

interface ThemeCtx {
  theme: Theme
  toggle: () => void
}

const Ctx = createContext<ThemeCtx>({ theme: 'light', toggle: () => {} })

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  const [theme, setTheme] = useState<Theme>('light')
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
    const saved = localStorage.getItem('mg-theme') as Theme | null
    if (saved === 'dark' || saved === 'light') {
      setTheme(saved)
      document.documentElement.classList.toggle('dark', saved === 'dark')
    }
  }, [])

  const toggle = () => {
    const next: Theme = theme === 'light' ? 'dark' : 'light'
    setTheme(next)
    localStorage.setItem('mg-theme', next)
    document.documentElement.classList.toggle('dark', next === 'dark')
  }

  if (!mounted) return <>{children}</>

  return <Ctx.Provider value={{ theme, toggle }}>{children}</Ctx.Provider>
}

export const useTheme = () => useContext(Ctx)
