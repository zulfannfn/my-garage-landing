'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import { Check, Car, Bell, Clock, Fuel, History, BarChart3, Building2, Layers, FileBarChart, Star } from 'lucide-react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import { useLanguage } from '../providers/LanguageProvider'
import { useTheme } from '../providers/ThemeProvider'

const liteIcons = [Car, Bell, Clock, Fuel, History]
const proIcons = [BarChart3, Building2, Layers, FileBarChart, Star]

export default function PricingPage() {
  const { t } = useLanguage()
  const { theme } = useTheme()
  const isDark = theme === 'dark'
  const p = t.products

  return (
    <div style={{ background: 'var(--bg)', color: 'var(--fg)', minHeight: '100vh' }}>
      <Navbar />

      {/* Hero */}
      <section className="relative pt-32 pb-24 overflow-hidden">
        <div className="absolute inset-0 grid-bg" />
        <div className="absolute left-1/2 -translate-x-1/2 top-20 w-[600px] h-[600px] rounded-full blur-[140px] pointer-events-none"
          style={{ background: 'rgba(239,68,68,0.06)' }} />

        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}>
            <p className="text-red-500 text-sm font-semibold uppercase tracking-widest mb-4">{p.tag}</p>
            <h1 className="font-black leading-tight mb-6" style={{ fontSize: 'clamp(2rem,5vw,3.5rem)', color: 'var(--fg)' }}>
              {p.h} <span className="text-gradient-red">{p.hRed}</span>
            </h1>
            <p className="text-lg leading-relaxed max-w-2xl mx-auto" style={{ color: 'var(--fg2)' }}>{p.sub}</p>
          </motion.div>
        </div>
      </section>

      {/* Pricing Cards */}
      <section className="relative py-28 overflow-hidden">
        <div className="absolute left-1/2 -translate-x-1/2 top-0 w-[800px] h-[1px]"
          style={{ background: 'linear-gradient(90deg,transparent,rgba(239,68,68,0.25),transparent)' }} />
        <div className="absolute left-0 top-1/2 w-[400px] h-[400px] rounded-full blur-[100px] pointer-events-none"
          style={{ background: 'rgba(239,68,68,0.04)' }} />

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {/* Lite Card */}
            <motion.div
              initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.1 }}
              whileHover={{ y: -4 }}
              className="glass-card card-shadow red-glow-hover rounded-2xl p-8 flex flex-col border"
              style={{ borderColor: 'var(--border)' }}
            >
              <div className="flex items-start justify-between mb-6">
                <div>
                  <div className="inline-flex items-center gap-1.5 rounded-full px-3 py-1 mb-3 border"
                    style={{ background: 'rgba(34,197,94,0.08)', borderColor: 'rgba(34,197,94,0.25)' }}>
                    <span className="w-1.5 h-1.5 rounded-full bg-green-400" />
                    <span className="text-green-500 text-xs font-medium">{p.liteBadge}</span>
                  </div>
                  <h3 className="font-bold text-2xl" style={{ color: 'var(--fg)' }}>{p.liteTitle}</h3>
                  <p className="text-sm mt-1" style={{ color: 'var(--muted)' }}>{p.liteSub}</p>
                </div>
              </div>

              <div className="mb-6">
                <p className="text-4xl font-bold" style={{ color: 'var(--fg)' }}>{p.liteFree}</p>
                <p className="text-sm mt-1" style={{ color: 'var(--muted)' }}>{p.liteFreeSub}</p>
              </div>

              <ul className="space-y-3 mb-8 flex-1">
                {p.liteFeatures.map((f, i) => {
                  const Icon = liteIcons[i]
                  return (
                    <li key={f} className="flex items-center gap-3">
                      <div className="w-7 h-7 rounded-lg flex items-center justify-center shrink-0"
                        style={{ background: 'rgba(34,197,94,0.1)' }}>
                        <Icon className="w-3.5 h-3.5 text-green-500" />
                      </div>
                      <span className="text-sm" style={{ color: 'var(--fg2)' }}>{f}</span>
                      <Check className="w-4 h-4 text-green-500 ml-auto" />
                    </li>
                  )
                })}
              </ul>

              <Link href="/lite"
                className="block text-center py-3.5 rounded-xl font-semibold text-sm transition-all duration-300 border"
                style={{ color: 'var(--fg)', borderColor: 'var(--border)' }}
                onMouseEnter={(e) => { e.currentTarget.style.background = 'var(--card-hover-bg)' }}
                onMouseLeave={(e) => { e.currentTarget.style.background = 'transparent' }}>
                {p.liteCTA}
              </Link>
            </motion.div>

            {/* Pro Card — theme-aware */}
            <motion.div
              initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.2 }}
              whileHover={{ y: -4 }}
              className="relative rounded-2xl p-8 border border-red-500/25 flex flex-col overflow-hidden card-shadow"
              style={{
                background: isDark
                  ? 'linear-gradient(135deg, rgba(20,5,5,0.98) 0%, rgba(30,8,8,0.98) 100%)'
                  : 'linear-gradient(135deg, rgba(255,245,245,1) 0%, rgba(255,250,250,1) 100%)',
                boxShadow: '0 0 40px rgba(239,68,68,0.1), 0 4px 24px rgba(239,68,68,0.06)',
              }}
            >
              {/* Top shimmer line */}
              <div className="absolute top-0 left-0 right-0 h-px"
                style={{ background: 'linear-gradient(90deg,transparent,rgba(239,68,68,0.6),transparent)' }} />
              <div className="absolute top-0 right-0 w-40 h-40 rounded-full blur-3xl pointer-events-none"
                style={{ background: 'rgba(239,68,68,0.06)' }} />

              <div className="flex items-start justify-between mb-6 relative z-10">
                <div>
                  <div className="inline-flex items-center gap-1.5 rounded-full px-3 py-1 mb-3 border"
                    style={{ background: 'rgba(239,68,68,0.1)', borderColor: 'rgba(239,68,68,0.3)' }}>
                    <span className="w-1.5 h-1.5 rounded-full bg-red-400 animate-pulse" />
                    <span className="text-red-500 text-xs font-medium">{p.proBadge}</span>
                  </div>
                  <h3 className="font-bold text-2xl" style={{ color: 'var(--fg)' }}>{p.proTitle}</h3>
                  <p className="text-sm mt-1" style={{ color: 'var(--muted)' }}>{p.proSub}</p>
                </div>
              </div>

              <div className="mb-6 relative z-10">
                <p className="text-4xl font-bold" style={{ color: 'var(--fg)' }}>{p.proBeta}</p>
                <p className="text-sm mt-1" style={{ color: 'var(--muted)' }}>{p.proBetaSub}</p>
              </div>

              <ul className="space-y-3 mb-8 flex-1 relative z-10">
                {p.proFeatures.map((f, i) => {
                  const Icon = proIcons[i]
                  return (
                    <li key={f} className="flex items-center gap-3">
                      <div className="w-7 h-7 rounded-lg flex items-center justify-center shrink-0"
                        style={{ background: 'rgba(239,68,68,0.12)' }}>
                        <Icon className="w-3.5 h-3.5 text-red-500" />
                      </div>
                      <span className="text-sm" style={{ color: 'var(--fg2)' }}>{f}</span>
                      <Check className="w-4 h-4 text-red-500 ml-auto" />
                    </li>
                  )
                })}
              </ul>

              <Link href="/pro" className="relative z-10 block text-center btn-primary py-3.5 rounded-xl font-semibold text-white text-sm red-glow">
                {p.proCTA}
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
