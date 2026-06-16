'use client'

import { motion, type Variants } from 'framer-motion'
import { Bell, Clock, Gauge, TrendingUp, Car, Globe, Wrench, BarChart3 } from 'lucide-react'
import { useLanguage } from '../providers/LanguageProvider'

const featureIcons = [Bell, Clock, Gauge, TrendingUp, Car, Globe, Wrench, BarChart3]
const featureColors = [
  { icon: 'text-yellow-500', border: 'hover:border-yellow-500/30', grad: 'from-yellow-500/10' },
  { icon: 'text-blue-500', border: 'hover:border-blue-500/30', grad: 'from-blue-500/10' },
  { icon: 'text-red-500', border: 'hover:border-red-500/30', grad: 'from-red-500/10' },
  { icon: 'text-green-500', border: 'hover:border-green-500/30', grad: 'from-green-500/10' },
  { icon: 'text-purple-500', border: 'hover:border-purple-500/30', grad: 'from-purple-500/10' },
  { icon: 'text-cyan-500', border: 'hover:border-cyan-500/30', grad: 'from-cyan-500/10' },
  { icon: 'text-orange-500', border: 'hover:border-orange-500/30', grad: 'from-orange-500/10' },
  { icon: 'text-pink-500', border: 'hover:border-pink-500/30', grad: 'from-pink-500/10' },
]

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.08 } },
}
const itemVariants: Variants = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.55, ease: 'easeOut' } },
}

export default function FeaturesSection() {
  const { t } = useLanguage()

  return (
    <section id="features" className="relative py-28 overflow-hidden">
      <div className="absolute right-0 top-0 w-[500px] h-[500px] rounded-full blur-[120px] pointer-events-none"
        style={{ background: 'rgba(239,68,68,0.04)' }} />
      <div className="absolute left-0 bottom-0 w-[400px] h-[400px] rounded-full blur-[100px] pointer-events-none"
        style={{ background: 'rgba(239,68,68,0.04)' }} />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }} transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="text-red-500 text-sm font-semibold uppercase tracking-widest mb-4">{t.features.tag}</p>
          <h2 className="section-heading mb-5" style={{ color: 'var(--fg)' }}>
            {t.features.h}<br /><span className="text-gradient-red">{t.features.hRed}</span>
          </h2>
          <p className="text-base max-w-xl mx-auto" style={{ color: 'var(--fg2)' }}>{t.features.sub}</p>
        </motion.div>

        <motion.div
          variants={containerVariants} initial="hidden" whileInView="visible"
          viewport={{ once: true, margin: '-60px' }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4"
        >
          {t.features.items.map((f, i) => {
            const Icon = featureIcons[i]
            const c = featureColors[i]
            return (
              <motion.div key={f.title} variants={itemVariants}
                className={`group relative glass-card card-shadow rounded-2xl p-6 border transition-all duration-300 red-glow-hover overflow-hidden ${c.border}`}
                style={{ borderColor: 'var(--border)' }}
              >
                <div className={`absolute inset-0 bg-gradient-to-br ${c.grad} to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl`} />
                <div className="relative z-10">
                  <div className="inline-flex items-center justify-center w-11 h-11 rounded-xl mb-4 group-hover:scale-110 transition-transform duration-300"
                    style={{ background: 'var(--card-hover-bg)', border: '1px solid var(--border)' }}>
                    <Icon className={`w-5 h-5 ${c.icon}`} />
                  </div>
                  <h3 className="font-semibold text-sm mb-2 leading-snug" style={{ color: 'var(--fg)' }}>{f.title}</h3>
                  <p className="text-xs leading-relaxed" style={{ color: 'var(--muted)' }}>{f.desc}</p>
                </div>
              </motion.div>
            )
          })}
        </motion.div>
      </div>
    </section>
  )
}
