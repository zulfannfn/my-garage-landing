'use client'

import { motion } from 'framer-motion'
import { Download, ArrowRight, Zap } from 'lucide-react'
import { useLanguage } from '../providers/LanguageProvider'
import { useTheme } from '../providers/ThemeProvider'

export default function CTASection() {
  const { t } = useLanguage()
  const { theme } = useTheme()
  const isDark = theme === 'dark'

  return (
    <section className="relative py-32 overflow-hidden">
      <div className="absolute inset-0" style={{ background: 'var(--bg)' }} />
      <div className="absolute inset-0"
        style={{ background: isDark
          ? 'linear-gradient(135deg, rgba(127,0,0,0.15) 0%, transparent 50%, rgba(127,0,0,0.1) 100%)'
          : 'linear-gradient(135deg, rgba(239,68,68,0.07) 0%, transparent 50%, rgba(239,68,68,0.05) 100%)' }} />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full blur-[140px] pointer-events-none"
        style={{ background: isDark ? 'rgba(239,68,68,0.1)' : 'rgba(239,68,68,0.07)' }} />
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-px"
        style={{ background: 'linear-gradient(90deg,transparent,rgba(239,68,68,0.35),transparent)' }} />
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full h-px"
        style={{ background: 'linear-gradient(90deg,transparent,rgba(239,68,68,0.35),transparent)' }} />

      {/* Racing stripes */}
      <div className="absolute inset-0 overflow-hidden" style={{ opacity: isDark ? 0.04 : 0.03 }}>
        {[...Array(8)].map((_, i) => (
          <div key={i} className="absolute h-0.5 w-[200%] bg-red-500"
            style={{ top: `${i * 14}%`, left: '-50%', transform: 'rotate(-8deg)' }} />
        ))}
      </div>

      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }} whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }} transition={{ duration: 0.7 }}
        >
          <div className="inline-flex items-center gap-2 rounded-full px-5 py-2 mb-8 border"
            style={{ background: 'rgba(239,68,68,0.08)', borderColor: 'rgba(239,68,68,0.25)' }}>
            <Zap className="w-3.5 h-3.5 text-red-500" />
            <span className="text-red-500 text-xs font-medium tracking-wide">{t.cta.badge}</span>
          </div>

          <h2 className="section-heading mb-6" style={{ color: 'var(--fg)', fontSize: 'clamp(2.2rem, 5vw, 4rem)' }}>
            {t.cta.h1}<br /><span className="text-gradient-red">{t.cta.hRed}</span>
          </h2>

          <p className="text-lg max-w-xl mx-auto mb-12 leading-relaxed" style={{ color: 'var(--fg2)' }}>{t.cta.sub}</p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <motion.a href="#" whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.98 }}
              className="btn-primary flex items-center justify-center gap-2.5 px-8 py-4 rounded-xl font-bold text-white text-sm red-glow">
              <Download className="w-4 h-4" />
              {t.cta.cta1}
              <ArrowRight className="w-4 h-4" />
            </motion.a>
            <motion.a href="#" whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.98 }}
              className="flex items-center justify-center gap-2.5 px-8 py-4 rounded-xl font-bold text-sm border transition-all duration-300"
              style={{ color: 'var(--fg)', borderColor: 'rgba(239,68,68,0.3)' }}
              onMouseEnter={(e) => { e.currentTarget.style.borderColor = 'rgba(239,68,68,0.6)'; e.currentTarget.style.background = 'rgba(239,68,68,0.08)' }}
              onMouseLeave={(e) => { e.currentTarget.style.borderColor = 'rgba(239,68,68,0.3)'; e.currentTarget.style.background = 'transparent' }}>
              {t.cta.cta2}
              <ArrowRight className="w-4 h-4 text-red-500" />
            </motion.a>
          </div>

          <p className="text-xs mt-6" style={{ color: 'var(--muted)' }}>{t.cta.note}</p>
        </motion.div>
      </div>
    </section>
  )
}
