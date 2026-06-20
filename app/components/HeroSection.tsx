'use client'

import { motion } from 'framer-motion'
import { ArrowRight, Download, Play, Bell, Wrench, BarChart3, CheckCircle } from 'lucide-react'
import { useLanguage } from '../providers/LanguageProvider'
import { useTheme } from '../providers/ThemeProvider'

function LiteMockup() {
  const { t } = useLanguage()
  return (
    <motion.div
      animate={{ y: [0, -6, 0] }}
      transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
      className="relative w-[220px] shrink-0"
    >
      <div className="absolute -top-3 -right-3 z-20 bg-green-500 text-white text-[10px] font-bold px-2.5 py-1 rounded-full shadow-lg">
        LITE
      </div>
      <div className="rounded-2xl overflow-hidden border card-shadow"
        style={{ background: 'var(--bg2)', borderColor: 'var(--border)' }}>
        {/* App header */}
        <div className="px-4 pt-4 pb-3 border-b" style={{ borderColor: 'var(--border)' }}>
          <div className="flex items-center justify-between">
            <span className="font-bold text-sm" style={{ color: 'var(--fg)' }}>My Garage Lite</span>
            <div className="flex items-center gap-1">
              <span className="w-1.5 h-1.5 rounded-full bg-green-400" />
              <span className="text-[10px]" style={{ color: 'var(--muted)' }}>{t.ui.active}</span>
            </div>
          </div>
        </div>

        <div className="p-4 space-y-3">
          {/* Vehicle card */}
          <div className="rounded-xl p-3 border" style={{ background: 'rgba(239,68,68,0.06)', borderColor: 'rgba(239,68,68,0.15)' }}>
            <div className="flex items-center gap-2.5 mb-2">
              <div className="w-7 h-7 bg-gradient-to-br from-red-500 to-red-700 rounded-lg flex items-center justify-center text-xs">🚗</div>
              <div>
                <p className="text-xs font-semibold" style={{ color: 'var(--fg)' }}>Honda PCX 150</p>
                <p className="text-[10px]" style={{ color: 'var(--muted)' }}>B 1234 XYZ</p>
              </div>
            </div>
            <div className="flex items-center justify-between mb-1">
              <span className="text-[10px]" style={{ color: 'var(--muted)' }}>{t.ui.healthScore}</span>
              <span className="text-[10px] font-bold text-green-500">87%</span>
            </div>
            <div className="h-1.5 rounded-full overflow-hidden" style={{ background: 'var(--border)' }}>
              <div className="h-full w-[87%] rounded-full bg-gradient-to-r from-green-400 to-green-500" />
            </div>
          </div>

          {/* Service reminder */}
          <div className="flex items-start gap-2 rounded-xl p-3 border"
            style={{ background: 'rgba(234,179,8,0.07)', borderColor: 'rgba(234,179,8,0.2)' }}>
            <Bell className="w-3.5 h-3.5 text-yellow-500 shrink-0 mt-0.5" />
            <div>
              <p className="text-[10px] font-semibold" style={{ color: 'var(--fg)' }}>{t.ui.serviceReminder}</p>
              <p className="text-[9px]" style={{ color: 'var(--muted)' }}>{t.ui.oilReminder}</p>
            </div>
          </div>

          {/* Feature list */}
          <div className="space-y-1.5">
            {[t.ui.vehicleRecord, t.ui.serviceReminder, t.ui.fuelLog].map((f) => (
              <div key={f} className="flex items-center gap-2">
                <CheckCircle className="w-3 h-3 text-green-500 shrink-0" />
                <span className="text-[10px]" style={{ color: 'var(--fg2)' }}>{f}</span>
              </div>
            ))}
          </div>

          <button className="w-full py-2 rounded-xl text-[11px] font-bold text-white bg-gradient-to-r from-green-500 to-green-600">
            {t.ui.downloadFree}
          </button>
        </div>
      </div>
    </motion.div>
  )
}

function ProMockup() {
  const { t } = useLanguage()
  const { theme } = useTheme()
  const isDark = theme === 'dark'

  return (
    <motion.div
      animate={{ y: [0, -6, 0] }}
      transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut', delay: 0.5 }}
      className="relative w-[240px] shrink-0"
    >
      <div className="absolute -top-3 -right-3 z-20 bg-gradient-to-r from-red-500 to-red-700 text-white text-[10px] font-bold px-2.5 py-1 rounded-full shadow-lg [box-shadow:0_0_14px_rgba(239,68,68,0.5)]">
        PRO BETA
      </div>
      <div className="rounded-2xl overflow-hidden border border-red-500/20 card-shadow"
        style={{
          background: isDark ? 'rgba(20,8,8,0.95)' : 'var(--bg2)',
          boxShadow: '0 8px 32px rgba(239,68,68,0.1)',
        }}>
        {/* App header */}
        <div className="px-4 pt-4 pb-3 border-b border-red-500/15"
          style={{ background: 'rgba(239,68,68,0.05)' }}>
          <div className="flex items-center justify-between">
            <span className="font-bold text-sm" style={{ color: 'var(--fg)' }}>My Garage Pro</span>
            <div className="flex items-center gap-1 rounded-full px-2 py-0.5 border"
              style={{ background: 'rgba(239,68,68,0.1)', borderColor: 'rgba(239,68,68,0.25)' }}>
              <span className="w-1.5 h-1.5 rounded-full bg-red-400 animate-pulse" />
              <span className="text-[9px] text-red-500 font-medium">Beta</span>
            </div>
          </div>
        </div>

        <div className="p-4 space-y-3">
          {/* Fleet overview */}
          <div>
            <div className="flex items-center justify-between mb-2">
              <span className="text-[10px] font-semibold uppercase tracking-wide" style={{ color: 'var(--muted)' }}>
                {t.ui.fleetOverview}
              </span>
              <span className="text-[10px] text-red-500 font-medium">{t.ui.nVehicles}</span>
            </div>
            <div className="space-y-1.5">
              {[
                { name: 'Supra GR', health: 87, color: 'bg-green-400', w: '87%' },
                { name: 'Civic Type R', health: 72, color: 'bg-yellow-400', w: '72%' },
                { name: 'MX-5 Miata', health: 94, color: 'bg-green-400', w: '94%' },
              ].map((v) => (
                <div key={v.name} className="flex items-center gap-2">
                  <span className="text-[9px] w-16 shrink-0" style={{ color: 'var(--fg2)' }}>{v.name}</span>
                  <div className="flex-1 h-1.5 rounded-full overflow-hidden" style={{ background: 'var(--border)' }}>
                    <div className={`h-full rounded-full ${v.color}`} style={{ width: v.w }} />
                  </div>
                  <span className="text-[9px] font-bold w-6 text-right" style={{ color: 'var(--fg)' }}>{v.health}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Analytics mini chart */}
          <div className="rounded-xl p-3 border"
            style={{ background: 'rgba(239,68,68,0.06)', borderColor: 'rgba(239,68,68,0.12)' }}>
            <div className="flex items-center gap-1.5 mb-2">
              <BarChart3 className="w-3 h-3 text-red-500" />
              <span className="text-[10px] font-semibold" style={{ color: 'var(--fg)' }}>
                {t.ui.monthlyAnalytics}
              </span>
            </div>
            <div className="flex items-end gap-1 h-10">
              {[40, 65, 30, 80, 55, 90, 70].map((h, i) => (
                <div key={i} className="flex-1 rounded-sm"
                  style={{
                    height: `${h}%`,
                    background: i === 5 ? 'linear-gradient(to top, #DC2626, #EF4444)' : 'rgba(239,68,68,0.2)',
                  }} />
              ))}
            </div>
          </div>

          {/* Pro features */}
          <div className="space-y-1.5">
            {[t.ui.advancedAnalytics, t.ui.workshopMgmt, t.ui.professionalReports].map((f) => (
              <div key={f} className="flex items-center gap-2">
                <Wrench className="w-3 h-3 text-red-500 shrink-0" />
                <span className="text-[10px]" style={{ color: 'var(--fg2)' }}>{f}</span>
              </div>
            ))}
          </div>

          <button className="w-full py-2 rounded-xl text-[11px] font-bold text-white btn-primary red-glow">
            {t.ui.joinBeta}
          </button>
        </div>
      </div>
    </motion.div>
  )
}

function AppPreview() {
  const { t } = useLanguage()
  return (
    <div className="relative flex items-end justify-center gap-4 lg:gap-6 pb-4">
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-80 h-20 rounded-full blur-3xl pointer-events-none"
        style={{ background: 'rgba(239,68,68,0.08)' }} />

      {/* Lite card */}
      <div className="relative">
        <div className="absolute -top-6 left-1/2 -translate-x-1/2 text-center whitespace-nowrap">
          <p className="text-[10px] font-semibold uppercase tracking-widest text-green-500">{t.hero.liteTitle}</p>
          <p className="text-[9px]" style={{ color: 'var(--muted)' }}>{t.hero.liteSub}</p>
        </div>
        <LiteMockup />
      </div>

      {/* Pro card — higher */}
      <div className="relative -mt-8">
        <div className="absolute -top-6 left-1/2 -translate-x-1/2 text-center whitespace-nowrap">
          <p className="text-[10px] font-semibold uppercase tracking-widest text-red-500">{t.hero.proTitle}</p>
          <p className="text-[9px]" style={{ color: 'var(--muted)' }}>{t.hero.proSub}</p>
        </div>
        <ProMockup />
      </div>
    </div>
  )
}

export default function HeroSection() {
  const { t } = useLanguage()
  const { theme } = useTheme()
  const isDark = theme === 'dark'

  const scrollTo = (id: string) => document.querySelector(id)?.scrollIntoView({ behavior: 'smooth' })

  return (
    <section id="home" className="relative min-h-screen flex items-center pt-20 overflow-hidden">
      {/* Solid bg first, then grid on top */}
      <div className="absolute inset-0" style={{ background: 'var(--bg)' }} />
      <div className="absolute inset-0 grid-bg" />

      {/* Red radial accents */}
      <div className="absolute top-1/4 right-1/4 w-[500px] h-[500px] rounded-full blur-[140px] pointer-events-none"
        style={{ background: isDark ? 'rgba(239,68,68,0.08)' : 'rgba(239,68,68,0.06)' }} />
      <div className="absolute bottom-0 left-1/4 w-[300px] h-[300px] rounded-full blur-[100px] pointer-events-none"
        style={{ background: isDark ? 'rgba(239,68,68,0.05)' : 'rgba(239,68,68,0.04)' }} />

      {/* Racing lines */}
      <div className="absolute top-0 left-0 right-0 h-px"
        style={{ background: 'linear-gradient(90deg, transparent, rgba(239,68,68,0.3), transparent)' }} />
      <div className="absolute inset-0 racing-stripe" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full py-20 lg:py-28">
        <div className="grid lg:grid-cols-2 gap-14 items-center">
          {/* Left — text */}
          <div>
            <motion.div
              initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 rounded-full px-4 py-1.5 mb-7 border"
              style={{ background: 'rgba(239,68,68,0.08)', borderColor: 'rgba(239,68,68,0.2)' }}
            >
              <span className="w-1.5 h-1.5 rounded-full bg-red-500 animate-pulse" />
              <span className="text-red-500 text-xs font-medium tracking-wide uppercase">{t.hero.badge}</span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.1 }}
              className="section-heading mb-6"
              style={{ color: 'var(--fg)' }}
            >
              {t.hero.h1}{' '}
              <span className="text-gradient-red">{t.hero.h2}</span>
              <br />{t.hero.h3}
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.2 }}
              className="text-lg leading-relaxed mb-10 max-w-xl"
              style={{ color: 'var(--fg2)' }}
            >
              {t.hero.sub}
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.3 }}
              className="flex flex-col sm:flex-row gap-4"
            >
              <a
                href="#products"
                onClick={(e) => { e.preventDefault(); scrollTo('#products') }}
                className="btn-primary flex items-center justify-center gap-2.5 px-7 py-4 rounded-xl font-semibold text-white text-sm"
              >
                <Download className="w-4 h-4" />
                {t.hero.cta1}
                <ArrowRight className="w-4 h-4" />
              </a>
              <a
                href="#products"
                onClick={(e) => { e.preventDefault(); scrollTo('#products') }}
                className="flex items-center justify-center gap-2.5 px-7 py-4 rounded-xl font-semibold text-sm transition-all duration-300 border"
                style={{ color: 'var(--fg)', borderColor: 'var(--border)' }}
                onMouseEnter={(e) => { e.currentTarget.style.borderColor = 'rgba(239,68,68,0.4)'; e.currentTarget.style.background = 'rgba(239,68,68,0.05)' }}
                onMouseLeave={(e) => { e.currentTarget.style.borderColor = 'var(--border)'; e.currentTarget.style.background = 'transparent' }}
              >
                <Play className="w-4 h-4 text-red-500" />
                {t.hero.cta2}
              </a>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.6 }}
              className="flex items-center gap-8 mt-12"
            >
              {[
                { value: '10K+', label: t.hero.stat1 },
                { value: '5K+', label: t.hero.stat2 },
                { value: '100+', label: t.hero.stat3 },
              ].map((s) => (
                <div key={s.label}>
                  <p className="font-bold text-2xl" style={{ color: 'var(--fg)' }}>{s.value}</p>
                  <p className="text-xs mt-0.5" style={{ color: 'var(--muted)' }}>{s.label}</p>
                </div>
              ))}
            </motion.div>
          </div>

          {/* Right — app previews */}
          <motion.div
            initial={{ opacity: 0, x: 60 }} animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3, ease: 'easeOut' }}
            className="hidden lg:flex items-center justify-center pt-10"
          >
            <AppPreview />
          </motion.div>
        </div>
      </div>

      {/* Bottom fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 pointer-events-none"
        style={{ background: 'linear-gradient(to top, var(--bg), transparent)' }} />
    </section>
  )
}
