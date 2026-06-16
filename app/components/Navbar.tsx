'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X, Gauge, Sun, Moon } from 'lucide-react'
import { useTheme } from '../providers/ThemeProvider'
import { useLanguage } from '../providers/LanguageProvider'

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const { theme, toggle: toggleTheme } = useTheme()
  const { lang, t, toggle: toggleLang } = useLanguage()

  const navLinks = [
    { label: t.nav.home, href: '#home' },
    { label: t.nav.features, href: '#features' },
    { label: t.nav.products, href: '#products' },
    { label: t.nav.about, href: '#about' },
    { label: t.nav.contact, href: '#contact' },
  ]

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const scrollTo = (href: string) => {
    setMobileOpen(false)
    document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' })
  }

  const isDark = theme === 'dark'

  return (
    <>
      <motion.nav
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled
            ? 'backdrop-blur-2xl border-b'
            : 'bg-transparent'
        }`}
        style={scrolled ? {
          background: isDark ? 'rgba(10,10,10,0.85)' : 'rgba(245,245,247,0.85)',
          borderColor: 'var(--section-divider)',
        } : {}}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 lg:h-20">
            {/* Logo */}
            <a
              href="#home"
              onClick={(e) => { e.preventDefault(); scrollTo('#home') }}
              className="flex items-center gap-2.5 group"
            >
              <div className="relative w-9 h-9 bg-gradient-to-br from-red-500 to-red-700 rounded-xl flex items-center justify-center shadow-lg group-hover:[box-shadow:0_0_20px_rgba(239,68,68,0.6)] transition-all duration-300">
                <Gauge className="w-5 h-5 text-white" strokeWidth={2.5} />
              </div>
              <span className="font-bold text-xl tracking-tight" style={{ color: 'var(--fg)' }}>
                My<span className="text-red-500">Garage</span>
              </span>
            </a>

            {/* Desktop nav links */}
            <div className="hidden md:flex items-center gap-1">
              {navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  onClick={(e) => { e.preventDefault(); scrollTo(link.href) }}
                  className="px-4 py-2 text-sm transition-colors duration-200 rounded-lg hover:bg-black/5 dark:hover:bg-white/5"
                  style={{ color: 'var(--muted)' }}
                  onMouseEnter={(e) => (e.currentTarget.style.color = 'var(--fg)')}
                  onMouseLeave={(e) => (e.currentTarget.style.color = 'var(--muted)')}
                >
                  {link.label}
                </a>
              ))}
            </div>

            {/* Right controls */}
            <div className="flex items-center gap-2">
              {/* Language toggle */}
              <button
                onClick={toggleLang}
                className="hidden sm:flex items-center gap-1.5 px-3 py-2 rounded-xl text-xs font-semibold transition-all duration-200 border"
                style={{
                  color: 'var(--fg2)',
                  borderColor: 'var(--border)',
                  background: 'var(--glass-bg)',
                }}
                title={lang === 'id' ? 'Switch to English' : 'Ganti ke Indonesia'}
              >
                <span className="text-sm">{lang === 'id' ? '🇮🇩' : '🇺🇸'}</span>
                <span>{lang === 'id' ? 'ID' : 'EN'}</span>
              </button>

              {/* Theme toggle */}
              <button
                onClick={toggleTheme}
                className="w-10 h-10 flex items-center justify-center rounded-xl transition-all duration-200 border"
                style={{
                  color: 'var(--fg2)',
                  borderColor: 'var(--border)',
                  background: 'var(--glass-bg)',
                }}
                title={isDark ? 'Switch to light mode' : 'Switch to dark mode'}
              >
                <AnimatePresence mode="wait">
                  {isDark ? (
                    <motion.div key="sun" initial={{ rotate: -90, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }} exit={{ rotate: 90, opacity: 0 }} transition={{ duration: 0.2 }}>
                      <Sun className="w-4 h-4 text-yellow-400" />
                    </motion.div>
                  ) : (
                    <motion.div key="moon" initial={{ rotate: 90, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }} exit={{ rotate: -90, opacity: 0 }} transition={{ duration: 0.2 }}>
                      <Moon className="w-4 h-4" />
                    </motion.div>
                  )}
                </AnimatePresence>
              </button>

              {/* CTA */}
              <a
                href="#products"
                onClick={(e) => { e.preventDefault(); scrollTo('#products') }}
                className="hidden md:block btn-primary px-5 py-2.5 rounded-xl text-sm font-semibold text-white"
              >
                {t.nav.cta}
              </a>

              {/* Mobile hamburger */}
              <button
                onClick={() => setMobileOpen(!mobileOpen)}
                className="md:hidden p-2 rounded-xl transition-colors border"
                style={{ color: 'var(--fg2)', borderColor: 'var(--border)', background: 'var(--glass-bg)' }}
              >
                {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
              </button>
            </div>
          </div>
        </div>
      </motion.nav>

      {/* Mobile menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.2 }}
            className="fixed top-16 left-0 right-0 z-40 backdrop-blur-2xl border-b md:hidden"
            style={{ background: isDark ? 'rgba(10,10,10,0.97)' : 'rgba(245,245,247,0.97)', borderColor: 'var(--section-divider)' }}
          >
            <div className="max-w-7xl mx-auto px-4 py-4 flex flex-col gap-1">
              {navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  onClick={(e) => { e.preventDefault(); scrollTo(link.href) }}
                  className="px-4 py-3 rounded-xl transition-colors text-sm font-medium hover:bg-black/5 dark:hover:bg-white/5"
                  style={{ color: 'var(--fg2)' }}
                >
                  {link.label}
                </a>
              ))}
              <div className="flex gap-2 pt-2 pb-1">
                <button onClick={toggleLang} className="flex items-center gap-1.5 px-3 py-2 rounded-xl text-xs font-semibold border flex-1 justify-center"
                  style={{ color: 'var(--fg2)', borderColor: 'var(--border)' }}>
                  <span>{lang === 'id' ? '🇮🇩 ID' : '🇺🇸 EN'}</span>
                </button>
                <button onClick={toggleTheme} className="flex items-center gap-1.5 px-3 py-2 rounded-xl text-xs font-semibold border flex-1 justify-center"
                  style={{ color: 'var(--fg2)', borderColor: 'var(--border)' }}>
                  {isDark ? <><Sun className="w-4 h-4 text-yellow-400" /> Light</> : <><Moon className="w-4 h-4" /> Dark</>}
                </button>
              </div>
              <a
                href="#products"
                onClick={(e) => { e.preventDefault(); scrollTo('#products') }}
                className="btn-primary block text-center px-5 py-3 rounded-xl text-sm font-semibold text-white mt-1"
              >
                {t.nav.cta}
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
