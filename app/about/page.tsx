'use client'

import { motion } from 'framer-motion'
import { Target, Shield, Zap, Check } from 'lucide-react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import { useLanguage } from '../providers/LanguageProvider'

export default function AboutPage() {
  const { t, lang } = useLanguage()
  const p = t.about

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

      {/* Checks */}
      <section className="relative py-24 overflow-hidden">
        <div className="absolute left-0 top-1/2 w-[400px] h-[400px] rounded-full blur-[100px] pointer-events-none"
          style={{ background: 'rgba(239,68,68,0.04)' }} />
        <div className="absolute right-0 top-1/3 w-[300px] h-[300px] rounded-full blur-[80px] pointer-events-none"
          style={{ background: 'rgba(34,197,94,0.04)' }} />
        <div className="absolute left-1/2 -translate-x-1/2 top-0 w-[800px] h-[1px]"
          style={{ background: 'linear-gradient(90deg,transparent,rgba(239,68,68,0.25),transparent)' }} />

        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <h2 className="text-2xl font-bold mb-12 text-center" style={{ color: 'var(--fg)' }}>
              {lang === 'id' ? 'Kenapa My Garage?' : 'Why My Garage?'}
            </h2>
            <div className="space-y-4">
              {p.checks.map((check, i) => (
                <motion.div key={i} initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }} transition={{ delay: i * 0.1 }}
                  whileHover={{ scale: 1.02, x: 4 }}
                  className="flex items-start gap-3 p-5 rounded-xl border cursor-pointer"
                  style={{ background: 'var(--card-hover-bg)', borderColor: 'var(--border)' }}>
                  <div className="w-7 h-7 rounded-full flex items-center justify-center shrink-0 mt-0.5"
                    style={{ background: 'linear-gradient(135deg, rgba(239,68,68,0.15), rgba(239,68,68,0.05))' }}>
                    <Check className="w-4 h-4 text-red-500" />
                  </div>
                  <p className="text-sm leading-relaxed" style={{ color: 'var(--fg2)' }}>{check}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Pillars */}
      <section className="relative py-24 overflow-hidden">
        <div className="absolute left-1/2 -translate-x-1/2 top-0 w-[800px] h-[1px]"
          style={{ background: 'linear-gradient(90deg,transparent,rgba(239,68,68,0.25),transparent)' }} />
        <div className="absolute left-1/4 top-1/2 w-[500px] h-[500px] rounded-full blur-[120px] pointer-events-none"
          style={{ background: 'rgba(239,68,68,0.05)' }} />

        <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <h2 className="text-2xl font-bold mb-12 text-center" style={{ color: 'var(--fg)' }}>
              {lang === 'id' ? 'Nilai Kami' : 'Our Values'}
            </h2>
            <div className="grid md:grid-cols-3 gap-8">
              {p.pillars.map((pillar, i) => {
                const Icon = i === 0 ? Target : i === 1 ? Shield : Zap
                return (
                  <motion.div key={i} initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }} transition={{ delay: i * 0.1 }}
                    whileHover={{ y: -8, scale: 1.02 }}
                    className="glass-card card-shadow rounded-2xl p-8 border text-center relative overflow-hidden"
                    style={{ borderColor: 'var(--border)' }}>
                    <div className="absolute top-0 left-0 right-0 h-1"
                      style={{ background: 'linear-gradient(90deg, transparent, rgba(239,68,68,0.5), transparent)' }} />
                    <div className="w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-5 relative"
                      style={{ background: 'linear-gradient(135deg, rgba(239,68,68,0.15), rgba(239,68,68,0.05))' }}>
                      <div className="absolute inset-0 rounded-2xl blur-xl opacity-50"
                        style={{ background: 'rgba(239,68,68,0.2)' }} />
                      <Icon className="w-8 h-8 text-red-500 relative z-10" />
                    </div>
                    <h3 className="font-bold text-xl mb-3" style={{ color: 'var(--fg)' }}>{pillar.label}</h3>
                    <p className="text-sm leading-relaxed" style={{ color: 'var(--muted)' }}>{pillar.desc}</p>
                  </motion.div>
                )
              })}
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
