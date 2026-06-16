'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ChevronDown } from 'lucide-react'
import { useLanguage } from '../providers/LanguageProvider'

function FAQItem({ q, a, isOpen, onToggle, index }: {
  q: string; a: string; isOpen: boolean; onToggle: () => void; index: number
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }} transition={{ duration: 0.5, delay: index * 0.08 }}
      className="glass-card card-shadow rounded-xl border overflow-hidden transition-all duration-300"
      style={{ borderColor: isOpen ? 'rgba(239,68,68,0.25)' : 'var(--border)' }}
    >
      <button onClick={onToggle} className="w-full flex items-center justify-between gap-4 px-6 py-5 text-left">
        <span className="font-medium text-sm pr-4" style={{ color: 'var(--fg)' }}>{q}</span>
        <motion.div
          animate={{ rotate: isOpen ? 180 : 0 }} transition={{ duration: 0.3 }}
          className="shrink-0 w-8 h-8 rounded-lg flex items-center justify-center transition-colors duration-300"
          style={{
            background: isOpen ? 'rgba(239,68,68,0.15)' : 'var(--card-hover-bg)',
            color: isOpen ? '#EF4444' : 'var(--muted)',
          }}
        >
          <ChevronDown className="w-4 h-4" />
        </motion.div>
      </button>

      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            key="content"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: 'easeInOut' }}
          >
            <div className="px-6 pb-5">
              <div className="h-px mb-4" style={{ background: 'linear-gradient(90deg,rgba(239,68,68,0.2),transparent)' }} />
              <p className="text-sm leading-relaxed" style={{ color: 'var(--fg2)' }}>{a}</p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  )
}

export default function FAQSection() {
  const { t } = useLanguage()
  const [openIndex, setOpenIndex] = useState<number | null>(0)

  return (
    <section id="contact" className="relative py-28 overflow-hidden">
      <div className="absolute left-0 bottom-0 w-[400px] h-[400px] rounded-full blur-[100px] pointer-events-none"
        style={{ background: 'rgba(239,68,68,0.04)' }} />
      <div className="absolute left-1/2 -translate-x-1/2 top-0 w-[600px] h-px"
        style={{ background: 'linear-gradient(90deg,transparent,rgba(239,68,68,0.2),transparent)' }} />

      <div className="relative z-10 max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }} transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <p className="text-red-500 text-sm font-semibold uppercase tracking-widest mb-4">{t.faq.tag}</p>
          <h2 className="section-heading mb-5" style={{ color: 'var(--fg)' }}>
            {t.faq.h}<br /><span className="text-gradient-red">{t.faq.hRed}</span>
          </h2>
          <p className="text-base" style={{ color: 'var(--fg2)' }}>{t.faq.sub}</p>
        </motion.div>

        <div className="space-y-3">
          {t.faq.items.map((item, i) => (
            <FAQItem
              key={i} q={item.q} a={item.a} index={i}
              isOpen={openIndex === i}
              onToggle={() => setOpenIndex(openIndex === i ? null : i)}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
