'use client'

import { motion, type Variants } from 'framer-motion'
import { Cpu, Shield, Layers, Zap, Target, Rocket } from 'lucide-react'
import { useLanguage } from '../providers/LanguageProvider'

const itemIcons = [Cpu, Shield, Layers, Zap, Target, Rocket]
const itemColors = [
  { icon: 'text-red-500', grad: 'from-red-500/10', border: 'hover:border-red-500/25' },
  { icon: 'text-blue-500', grad: 'from-blue-500/10', border: 'hover:border-blue-500/25' },
  { icon: 'text-green-500', grad: 'from-green-500/10', border: 'hover:border-green-500/25' },
  { icon: 'text-yellow-500', grad: 'from-yellow-500/10', border: 'hover:border-yellow-500/25' },
  { icon: 'text-purple-500', grad: 'from-purple-500/10', border: 'hover:border-purple-500/25' },
  { icon: 'text-cyan-500', grad: 'from-cyan-500/10', border: 'hover:border-cyan-500/25' },
]

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.1 } },
}
const itemVariants: Variants = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.55, ease: 'easeOut' } },
}

export default function WhyChooseSection() {
  const { t } = useLanguage()

  return (
    <section className="relative py-28 overflow-hidden">
      <div className="absolute inset-0 grid-bg" style={{ opacity: 0.4 }} />
      <div className="absolute left-1/2 -translate-x-1/2 top-0 w-[600px] h-px"
        style={{ background: 'linear-gradient(90deg,transparent,rgba(239,68,68,0.2),transparent)' }} />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }} transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="text-red-500 text-sm font-semibold uppercase tracking-widest mb-4">{t.why.tag}</p>
          <h2 className="section-heading mb-5" style={{ color: 'var(--fg)' }}>
            {t.why.h}<br /><span className="text-gradient-red">{t.why.hRed}</span>
          </h2>
          <p className="text-base max-w-xl mx-auto" style={{ color: 'var(--fg2)' }}>{t.why.sub}</p>
        </motion.div>

        <motion.div
          variants={containerVariants} initial="hidden" whileInView="visible"
          viewport={{ once: true, margin: '-60px' }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5"
        >
          {t.why.items.map((r, i) => {
            const Icon = itemIcons[i]
            const c = itemColors[i]
            return (
              <motion.div key={r.title} variants={itemVariants}
                className={`group relative glass-card card-shadow red-glow-hover rounded-2xl p-7 border transition-all duration-300 overflow-hidden ${c.border}`}
                style={{ borderColor: 'var(--border)' }}
              >
                <div className={`absolute inset-0 bg-gradient-to-br ${c.grad} to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl`} />
                <div className="relative z-10">
                  <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl mb-5 group-hover:scale-110 transition-transform duration-300"
                    style={{ background: 'var(--card-hover-bg)', border: '1px solid var(--border)' }}>
                    <Icon className={`w-6 h-6 ${c.icon}`} />
                  </div>
                  <h3 className="font-bold text-base mb-3" style={{ color: 'var(--fg)' }}>{r.title}</h3>
                  <p className="text-sm leading-relaxed" style={{ color: 'var(--muted)' }}>{r.desc}</p>
                </div>
              </motion.div>
            )
          })}
        </motion.div>
      </div>
    </section>
  )
}
