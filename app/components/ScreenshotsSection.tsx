'use client'

import { useCallback, useEffect, useState } from 'react'
import useEmblaCarousel from 'embla-carousel-react'
import { motion } from 'framer-motion'
import { ChevronLeft, ChevronRight, Gauge, FileText, Clock, BarChart3, Car } from 'lucide-react'
import { useLanguage } from '../providers/LanguageProvider'

const screenIcons = [Gauge, Car, Clock, BarChart3, FileText]
const screenColors = ['from-red-500/20', 'from-blue-500/20', 'from-green-500/20', 'from-purple-500/20', 'from-yellow-500/20']
const barSets = [
  [70, 45, 90, 55, 80],
  [85, 60, 75, 90, 65],
  [40, 60, 80, 55, 90],
  [55, 70, 45, 85, 60],
  [80, 65, 90, 70, 85],
]
const barLabelSets = [
  ['Eng', 'Tire', 'Oil', 'Brk', 'Bat'],
  ['Hlth', 'Svc', 'Fuel', 'Mil', 'Doc'],
  ['Jan', 'Feb', 'Mar', 'Apr', 'May'],
  ['Cost', 'Fuel', 'Svc', 'Dist', 'Time'],
  ['Q1', 'Q2', 'Q3', 'Q4', 'YTD'],
]

function ScreenCard({ label, iconIdx, colorIdx, barIdx, isActive }: {
  label: string; iconIdx: number; colorIdx: number; barIdx: number; isActive: boolean
}) {
  const { t } = useLanguage()
  const Icon = screenIcons[iconIdx]
  const bars = barSets[barIdx]
  const barLabels = barLabelSets[barIdx]

  return (
    <div className="shrink-0 w-[280px] sm:w-[340px] px-3">
      <motion.div
        animate={{ scale: isActive ? 1 : 0.95, opacity: isActive ? 1 : 0.45 }}
        transition={{ duration: 0.35 }}
        className="relative rounded-2xl overflow-hidden border"
        style={{
          aspectRatio: '9/16', maxHeight: 500,
          background: 'var(--bg2)', borderColor: 'var(--border)',
          boxShadow: isActive ? '0 8px 40px rgba(0,0,0,0.12)' : undefined,
        }}
      >
        {/* Notch */}
        <div className="absolute top-3 left-1/2 -translate-x-1/2 w-20 h-5 rounded-full z-20 flex items-center justify-center"
          style={{ background: 'var(--bg)' }}>
          <div className="w-2 h-2 rounded-full" style={{ background: 'var(--border)' }} />
        </div>

        <div className={`absolute inset-0 bg-gradient-to-br ${screenColors[colorIdx]} to-transparent opacity-30`} />

        <div className="relative z-10 p-4 pt-10 h-full flex flex-col">
          <div className="flex items-center justify-between mb-4 text-[10px]" style={{ color: 'var(--muted)' }}>
            <span>9:41</span>
            <span>●●● WiFi 87%</span>
          </div>

          <div className="flex items-center gap-3 mb-5">
            <div className="w-9 h-9 bg-gradient-to-br from-red-500 to-red-700 rounded-xl flex items-center justify-center">
              <Icon className="w-4 h-4 text-white" />
            </div>
            <div>
              <p className="text-sm font-bold" style={{ color: 'var(--fg)' }}>{label}</p>
              <p className="text-[10px]" style={{ color: 'var(--muted)' }}>My Garage</p>
            </div>
          </div>

          <div className="flex items-end gap-1.5 h-24 mb-2">
            {bars.map((h, i) => (
              <div key={i} className="flex-1 flex flex-col items-center gap-0.5">
                <motion.div
                  initial={{ height: 0 }} whileInView={{ height: `${h}%` }}
                  viewport={{ once: true }} transition={{ duration: 0.7, delay: i * 0.07 }}
                  className="w-full rounded-t"
                  style={{
                    background: i === barIdx % 5
                      ? 'linear-gradient(to top, #DC2626, #EF4444)'
                      : 'rgba(239,68,68,0.2)',
                  }}
                />
              </div>
            ))}
          </div>
          <div className="flex gap-1.5 mb-4">
            {barLabels.map((l) => (
              <span key={l} className="flex-1 text-center text-[9px]" style={{ color: 'var(--muted)' }}>{l}</span>
            ))}
          </div>

          <div className="grid grid-cols-3 gap-2 mb-3">
            {['87%', '24', '850km'].map((val, i) => (
              <div key={i} className="rounded-xl p-2.5 text-center border"
                style={{ background: 'var(--card-hover-bg)', borderColor: 'var(--border)' }}>
                <p className="text-sm font-bold" style={{ color: 'var(--fg)' }}>{val}</p>
                <p className="text-[9px] mt-0.5" style={{ color: 'var(--muted)' }}>
                  {[t.ui.health, t.ui.logs, t.ui.next][i]}
                </p>
              </div>
            ))}
          </div>

          <div className="space-y-1.5 flex-1">
            {[t.ui.statusDone, t.ui.statusDue, t.ui.statusComplete].map((item, i) => (
              <div key={i} className="flex items-center justify-between rounded-lg px-3 py-2 border"
                style={{ background: 'var(--card-hover-bg)', borderColor: 'var(--border)' }}>
                <span className="text-[10px]" style={{ color: 'var(--fg2)' }}>{item}</span>
                <span className={`w-1.5 h-1.5 rounded-full ${i === 1 ? 'bg-yellow-400' : 'bg-green-400'}`} />
              </div>
            ))}
          </div>

          <div className="flex justify-around pt-3 border-t mt-auto" style={{ borderColor: 'var(--border)' }}>
            {['🏠','🚗','🔧','📊','⚙️'].map((icon, i) => (
              <button key={i} className={`text-sm ${i === iconIdx % 5 ? 'opacity-100' : 'opacity-20'}`}>{icon}</button>
            ))}
          </div>
        </div>
      </motion.div>
      <p className="text-center text-sm font-medium mt-4" style={{ color: 'var(--fg2)' }}>{label}</p>
    </div>
  )
}

export default function ScreenshotsSection() {
  const { t } = useLanguage()
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true, align: 'center' })
  const [activeIndex, setActiveIndex] = useState(0)

  const scrollPrev = useCallback(() => emblaApi?.scrollPrev(), [emblaApi])
  const scrollNext = useCallback(() => emblaApi?.scrollNext(), [emblaApi])

  useEffect(() => {
    if (!emblaApi) return
    const onSelect = () => setActiveIndex(emblaApi.selectedScrollSnap())
    emblaApi.on('select', onSelect)
    return () => { emblaApi.off('select', onSelect) }
  }, [emblaApi])

  return (
    <section className="relative py-28 overflow-hidden">
      <div className="absolute left-1/2 -translate-x-1/2 top-0 w-[600px] h-px"
        style={{ background: 'linear-gradient(90deg,transparent,rgba(239,68,68,0.2),transparent)' }} />

      <div className="relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }} transition={{ duration: 0.6 }}
          className="text-center mb-14 px-4"
        >
          <p className="text-red-500 text-sm font-semibold uppercase tracking-widest mb-4">{t.screenshots.tag}</p>
          <h2 className="section-heading mb-5" style={{ color: 'var(--fg)' }}>
            {t.screenshots.h}<br /><span className="text-gradient-red">{t.screenshots.hRed}</span>
          </h2>
          <p className="text-base max-w-xl mx-auto" style={{ color: 'var(--fg2)' }}>{t.screenshots.sub}</p>
        </motion.div>

        <div ref={emblaRef} className="overflow-hidden">
          <div className="flex py-6">
            {t.screenshots.labels.map((label, i) => (
              <ScreenCard
                key={i} label={label} iconIdx={i} colorIdx={i}
                barIdx={i} isActive={i === activeIndex}
              />
            ))}
          </div>
        </div>

        <div className="flex items-center justify-center gap-4 mt-8">
          <button onClick={scrollPrev}
            className="w-11 h-11 glass-card card-shadow rounded-full flex items-center justify-center border transition-all duration-300 hover:border-red-500/30"
            style={{ borderColor: 'var(--border)', color: 'var(--fg2)' }}>
            <ChevronLeft className="w-5 h-5" />
          </button>

          <div className="flex gap-2">
            {t.screenshots.labels.map((_, i) => (
              <button key={i} onClick={() => emblaApi?.scrollTo(i)}
                className={`rounded-full transition-all duration-300 ${i === activeIndex ? 'w-6 h-2 bg-red-500' : 'w-2 h-2'}`}
                style={i !== activeIndex ? { background: 'var(--border)' } : {}} />
            ))}
          </div>

          <button onClick={scrollNext}
            className="w-11 h-11 glass-card card-shadow rounded-full flex items-center justify-center border transition-all duration-300 hover:border-red-500/30"
            style={{ borderColor: 'var(--border)', color: 'var(--fg2)' }}>
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>
      </div>
    </section>
  )
}
