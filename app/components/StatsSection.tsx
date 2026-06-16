'use client'

import { useRef, useEffect, useState } from 'react'
import { motion, useInView, type Variants } from 'framer-motion'
import { Car, FileText, Users, Wrench } from 'lucide-react'
import { useLanguage } from '../providers/LanguageProvider'

const icons = [Car, FileText, Users, Wrench]
const values = [10000, 50000, 5000, 100]

function Counter({ end, suffix }: { end: number; suffix: string }) {
  const [count, setCount] = useState(0)
  const ref = useRef<HTMLSpanElement>(null)
  const isInView = useInView(ref, { once: true, margin: '-80px' })

  useEffect(() => {
    if (!isInView) return
    const steps = 60 * 2.2
    const increment = end / steps
    let current = 0
    const timer = setInterval(() => {
      current += increment
      if (current >= end) { setCount(end); clearInterval(timer) }
      else setCount(Math.floor(current))
    }, 1000 / 60)
    return () => clearInterval(timer)
  }, [isInView, end])

  return <span ref={ref}>{count.toLocaleString('id-ID')}{suffix}</span>
}

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.12 } },
}
const itemVariants: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } },
}

export default function StatsSection() {
  const { t } = useLanguage()

  return (
    <section className="relative py-24 overflow-hidden">
      <div className="absolute top-0 left-0 right-0 h-px" style={{ background: 'linear-gradient(90deg,transparent,rgba(239,68,68,0.2),transparent)' }} />
      <div className="absolute bottom-0 left-0 right-0 h-px" style={{ background: 'linear-gradient(90deg,transparent,rgba(239,68,68,0.2),transparent)' }} />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.p
          initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center text-xs uppercase tracking-widest mb-12"
          style={{ color: 'var(--muted)' }}
        >
          {t.stats.trusted}
        </motion.p>

        <motion.div
          variants={containerVariants} initial="hidden" whileInView="visible"
          viewport={{ once: true, margin: '-60px' }}
          className="grid grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6"
        >
          {t.stats.items.map((item, i) => {
            const Icon = icons[i]
            return (
              <motion.div key={item.label} variants={itemVariants}
                className="glass-card red-glow-hover rounded-2xl p-6 lg:p-8 text-center card-shadow cursor-default group"
              >
                <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl mb-4 group-hover:bg-red-500/20 transition-colors duration-300"
                  style={{ background: 'rgba(239,68,68,0.08)' }}>
                  <Icon className="w-6 h-6 text-red-500" />
                </div>
                <p className="text-3xl lg:text-4xl font-bold mb-1 tabular-nums" style={{ color: 'var(--fg)' }}>
                  <Counter end={values[i]} suffix={item.suffix} />
                </p>
                <p className="font-semibold text-sm mb-1" style={{ color: 'var(--fg)' }}>{item.label}</p>
                <p className="text-xs leading-relaxed" style={{ color: 'var(--muted)' }}>{item.sub}</p>
              </motion.div>
            )
          })}
        </motion.div>
      </div>
    </section>
  )
}
