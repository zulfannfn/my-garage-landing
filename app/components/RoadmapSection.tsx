'use client'

import { motion } from 'framer-motion'
import { CheckCircle, Clock, Rocket, Sparkles } from 'lucide-react'
import { useLanguage } from '../providers/LanguageProvider'

const milestoneIcons = [CheckCircle, Clock, Rocket, Sparkles]
const statusKeys = ['done', 'active', 'upcoming', 'future'] as const

const statusStyles = {
  done: { dot: 'bg-green-400', labelColor: 'text-green-500', border: 'border-green-500/25' },
  active: { dot: 'bg-red-400 animate-pulse', labelColor: 'text-red-500', border: 'border-red-500/25' },
  upcoming: { dot: 'bg-blue-400/70', labelColor: 'text-blue-400', border: 'border-blue-500/15' },
  future: { dot: 'bg-gray-400/40', labelColor: 'text-gray-400', border: 'border-white/8' },
}

export default function RoadmapSection() {
  const { t } = useLanguage()

  return (
    <section className="relative py-28 overflow-hidden">
      <div className="absolute right-0 top-1/3 w-[400px] h-[400px] rounded-full blur-[100px] pointer-events-none"
        style={{ background: 'rgba(239,68,68,0.04)' }} />

      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }} transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="text-red-500 text-sm font-semibold uppercase tracking-widest mb-4">{t.roadmap.tag}</p>
          <h2 className="section-heading mb-5" style={{ color: 'var(--fg)' }}>
            {t.roadmap.h}<br /><span className="text-gradient-red">{t.roadmap.hRed}</span>
          </h2>
          <p className="text-base max-w-xl mx-auto" style={{ color: 'var(--fg2)' }}>{t.roadmap.sub}</p>
        </motion.div>

        <div className="relative">
          <div className="absolute left-8 top-0 bottom-0 w-px md:left-1/2 md:-translate-x-px"
            style={{ background: 'linear-gradient(to bottom, rgba(34,197,94,0.5), rgba(239,68,68,0.3), rgba(100,116,139,0.15))' }} />

          <div className="space-y-10">
            {t.roadmap.milestones.map((m, i) => {
              const sKey = statusKeys[i]
              const style = statusStyles[sKey]
              const Icon = milestoneIcons[i]
              const isRight = i % 2 === 1
              const statusLabel = t.roadmap.statusLabels[sKey]

              return (
                <motion.div
                  key={m.title}
                  initial={{ opacity: 0, x: isRight ? 30 : -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: '-80px' }}
                  transition={{ duration: 0.6 }}
                  className={`relative flex gap-6 md:gap-0 ${isRight ? 'md:flex-row-reverse' : 'md:flex-row'}`}
                >
                  {/* Dot */}
                  <div className="absolute left-8 md:left-1/2 top-6 md:-translate-x-1/2 z-10">
                    <div className={`w-4 h-4 rounded-full border-2 ${style.dot}`}
                      style={{ borderColor: 'var(--bg)' }} />
                  </div>

                  <div className="hidden md:block flex-1" />

                  <div className={`ml-20 md:ml-0 flex-1 ${isRight ? 'md:pr-12' : 'md:pl-12'}`}>
                    <div className={`glass-card card-shadow rounded-2xl p-6 border ${style.border} transition-all duration-300`}>
                      <div className="flex items-start justify-between mb-3">
                        <div className="flex items-center gap-2.5">
                          <div className="w-8 h-8 rounded-lg flex items-center justify-center"
                            style={{ background: 'var(--card-hover-bg)', border: '1px solid var(--border)' }}>
                            <Icon className={`w-4 h-4 ${style.labelColor}`} />
                          </div>
                          <p className="text-xs" style={{ color: 'var(--muted)' }}>{m.quarter}</p>
                        </div>
                        <span className={`text-xs font-medium ${style.labelColor} px-2.5 py-1 rounded-full`}
                          style={{ background: 'var(--card-hover-bg)' }}>
                          {statusLabel}
                        </span>
                      </div>

                      <h3 className="font-bold text-lg mb-2" style={{ color: 'var(--fg)' }}>{m.title}</h3>
                      <p className="text-sm leading-relaxed mb-4" style={{ color: 'var(--fg2)' }}>{m.desc}</p>

                      <div className="flex flex-wrap gap-2">
                        {m.tags.map((tag) => (
                          <span key={tag} className="text-[10px] rounded-full px-2.5 py-1 border"
                            style={{ color: 'var(--muted)', background: 'var(--card-hover-bg)', borderColor: 'var(--border)' }}>
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </motion.div>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}
