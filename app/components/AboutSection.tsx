'use client'

import { motion } from 'framer-motion'
import { CheckCircle, Cpu, Globe, Shield } from 'lucide-react'
import { useLanguage } from '../providers/LanguageProvider'
import { useTheme } from '../providers/ThemeProvider'

const pillarIcons = [Cpu, Shield, Globe]

export default function AboutSection() {
  const { t } = useLanguage()
  const { theme } = useTheme()
  const isDark = theme === 'dark'

  return (
    <section id="about" className="relative py-28 overflow-hidden">
      <div className="absolute right-0 top-1/2 -translate-y-1/2 w-[500px] h-[500px] rounded-full blur-[100px] pointer-events-none"
        style={{ background: 'rgba(239,68,68,0.04)' }} />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left */}
          <motion.div
            initial={{ opacity: 0, x: -40 }} whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-80px' }} transition={{ duration: 0.7 }}
          >
            <p className="text-red-500 text-sm font-semibold uppercase tracking-widest mb-4">{t.about.tag}</p>
            <h2 className="section-heading mb-6" style={{ color: 'var(--fg)' }}>
              {t.about.h}<br />
              <span className="text-gradient-red">{t.about.hRed}</span>
            </h2>
            <p className="text-base leading-relaxed mb-8" style={{ color: 'var(--fg2)' }}>{t.about.sub}</p>

            <ul className="space-y-3 mb-10">
              {t.about.checks.map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-red-500 shrink-0 mt-0.5" />
                  <span className="text-sm" style={{ color: 'var(--fg2)' }}>{item}</span>
                </li>
              ))}
            </ul>

            <div className="grid grid-cols-3 gap-4">
              {t.about.pillars.map((p, i) => {
                const Icon = pillarIcons[i]
                return (
                  <div key={p.label} className="glass-card card-shadow rounded-xl p-4 text-center">
                    <Icon className="w-6 h-6 text-red-500 mx-auto mb-2" />
                    <p className="text-xs font-semibold leading-tight mb-1" style={{ color: 'var(--fg)' }}>{p.label}</p>
                    <p className="text-[10px]" style={{ color: 'var(--muted)' }}>{p.desc}</p>
                  </div>
                )
              })}
            </div>
          </motion.div>

          {/* Right — UI illustration */}
          <motion.div
            initial={{ opacity: 0, x: 40 }} whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-80px' }} transition={{ duration: 0.7, delay: 0.1 }}
          >
            <div className="glass-card card-shadow rounded-2xl p-6 border" style={{ borderColor: 'rgba(239,68,68,0.15)' }}>
              <div className="flex items-center justify-between mb-6">
                <div>
                  <p className="font-bold text-lg" style={{ color: 'var(--fg)' }}>{t.ui.fleetOverview}</p>
                  <p className="text-xs" style={{ color: 'var(--muted)' }}>{t.ui.nVehiclesReg}</p>
                </div>
                <div className="text-xs font-semibold px-3 py-1.5 rounded-full border"
                  style={{ color: '#EF4444', background: 'rgba(239,68,68,0.08)', borderColor: 'rgba(239,68,68,0.2)' }}>
                  {t.ui.proPlan}
                </div>
              </div>

              <div className="space-y-3 mb-6">
                {[
                  { name: 'Honda PCX 150', plate: 'B 1234 XYZ', health: 87, dot: 'bg-green-400' },
                  { name: 'Honda Civic Type R', plate: 'D 5678 ABC', health: 72, dot: 'bg-yellow-400' },
                  { name: 'Mazda MX-5 Miata', plate: 'L 9012 DEF', health: 94, dot: 'bg-green-400' },
                ].map((v) => (
                  <div key={v.name} className="flex items-center justify-between rounded-xl px-4 py-3"
                    style={{ background: 'var(--card-hover-bg)', border: '1px solid var(--border)' }}>
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 rounded-lg flex items-center justify-center"
                        style={{ background: 'rgba(239,68,68,0.1)' }}>
                        <span className="text-xs">🚗</span>
                      </div>
                      <div>
                        <p className="text-sm font-medium" style={{ color: 'var(--fg)' }}>{v.name}</p>
                        <p className="text-xs" style={{ color: 'var(--muted)' }}>{v.plate}</p>
                      </div>
                    </div>
                    <div className="text-right">
                      <p className="text-sm font-bold" style={{ color: 'var(--fg)' }}>{v.health}%</p>
                      <div className="flex items-center gap-1 justify-end mt-1">
                        <div className={`w-1.5 h-1.5 rounded-full ${v.dot}`} />
                        <span className="text-[10px]" style={{ color: 'var(--muted)' }}>{t.ui.health}</span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Chart */}
              <div className="rounded-xl p-4" style={{ background: 'var(--card-hover-bg)', border: '1px solid var(--border)' }}>
                <p className="text-xs mb-3 uppercase tracking-wider" style={{ color: 'var(--muted)' }}>{t.about.chartLabel}</p>
                <div className="flex items-end gap-2 h-16">
                  {[40, 65, 30, 80, 55, 90, 70].map((h, i) => (
                    <div key={i} className="flex-1 flex items-end">
                      <motion.div
                        initial={{ height: 0 }} whileInView={{ height: `${h}%` }} viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: i * 0.05 }}
                        className="w-full rounded-sm"
                        style={{
                          background: i === 5 ? 'linear-gradient(to top, #DC2626, #EF4444)' : 'rgba(239,68,68,0.2)',
                        }}
                      />
                    </div>
                  ))}
                </div>
                <div className="flex justify-between mt-2">
                  {['Jan','Feb','Mar','Apr','May','Jun','Jul'].map((m) => (
                    <span key={m} className="text-[9px]" style={{ color: 'var(--muted)' }}>{m}</span>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
