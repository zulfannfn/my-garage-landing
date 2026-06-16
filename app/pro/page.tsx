'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import { Check, X, BarChart3, Building2, Layers, FileBarChart, Star, Download } from 'lucide-react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import { useLanguage } from '../providers/LanguageProvider'
import { useTheme } from '../providers/ThemeProvider'

const DOWNLOAD_URL = 'https://drive.google.com/drive/folders/1pSV5gnGbIFrtMq4-D0t0CeQVV9pJCIgE?usp=drive_link'

const featureIcons = [BarChart3, Building2, Layers, FileBarChart, Star]

const comparisonRows = [
  { feature: { id: 'Manajemen Kendaraan', en: 'Vehicle Management' }, lite: true, pro: true },
  { feature: { id: 'Pengingat Servis', en: 'Service Reminder' }, lite: true, pro: true },
  { feature: { id: 'Catatan Perawatan', en: 'Maintenance Tracking' }, lite: true, pro: true },
  { feature: { id: 'Catatan Bahan Bakar', en: 'Fuel Records' }, lite: true, pro: true },
  { feature: { id: 'Riwayat Kendaraan', en: 'Vehicle History' }, lite: true, pro: true },
  { feature: { id: 'Ekspor PDF', en: 'PDF Export' }, lite: true, pro: true },
  { feature: { id: 'Sinkronisasi Cloud', en: 'Cloud Sync' }, lite: true, pro: true },
  { feature: { id: 'Advanced Analytics', en: 'Advanced Analytics' }, lite: false, pro: true },
  { feature: { id: 'Manajemen Bengkel', en: 'Workshop Management' }, lite: false, pro: true },
  { feature: { id: 'Fleet Monitoring', en: 'Fleet Monitoring' }, lite: false, pro: true },
  { feature: { id: 'Laporan Profesional', en: 'Professional Reports' }, lite: false, pro: true },
  { feature: { id: 'Multi-user & Tim', en: 'Multi-user & Team' }, lite: false, pro: true },
  { feature: { id: 'API Access', en: 'API Access' }, lite: false, pro: true },
  { feature: { id: 'Support 24/7', en: '24/7 Support' }, lite: false, pro: true },
]

export default function ProPage() {
  const { t, lang } = useLanguage()
  const { theme } = useTheme()
  const isDark = theme === 'dark'
  const p = t.proPage

  return (
    <div style={{ background: 'var(--bg)', color: 'var(--fg)', minHeight: '100vh' }}>
      <Navbar />

      {/* Beta banner */}
      <div className="w-full py-2.5 text-center text-xs font-semibold"
        style={{ background: 'linear-gradient(90deg,#DC2626,#EF4444,#DC2626)', color: '#fff' }}>
        {p.betaBanner}
      </div>

      {/* Hero */}
      <section className="relative pt-28 pb-24 overflow-hidden">
        <div className="absolute inset-0 grid-bg" />
        <div className="absolute right-0 top-0 w-[600px] h-[600px] rounded-full blur-[140px] pointer-events-none"
          style={{ background: 'rgba(239,68,68,0.07)' }} />

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link href="/" className="inline-flex items-center gap-2 text-sm mb-10 transition-colors hover:text-red-500"
            style={{ color: 'var(--muted)' }}>
            {p.back}
          </Link>

          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Left */}
            <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}>
              <div className="inline-flex items-center gap-2 rounded-full px-4 py-2 text-xs font-medium mb-6 border"
                style={{ background: 'rgba(239,68,68,0.08)', borderColor: 'rgba(239,68,68,0.25)', color: '#EF4444' }}>
                <span className="w-1.5 h-1.5 rounded-full bg-red-400 animate-pulse" />
                {p.tag}
              </div>

              <h1 className="font-black leading-tight mb-6" style={{ fontSize: 'clamp(2rem,5vw,3.5rem)', color: 'var(--fg)' }}>
                {p.h}{' '}<span className="text-gradient-red">{p.hRed}</span>
              </h1>

              <p className="text-lg leading-relaxed mb-8" style={{ color: 'var(--fg2)' }}>{p.sub}</p>

              <div className="inline-flex items-center gap-2 rounded-full px-4 py-2 text-xs mb-8 border"
                style={{ background: 'rgba(239,68,68,0.06)', borderColor: 'rgba(239,68,68,0.2)', color: 'var(--muted)' }}>
                <span className="w-1.5 h-1.5 rounded-full bg-red-400" />
                {p.badge}
              </div>

              <div className="flex flex-wrap gap-3">
                <a href={DOWNLOAD_URL} target="_blank" rel="noopener noreferrer"
                  className="btn-primary flex items-center gap-2 px-7 py-3.5 rounded-xl font-bold text-white text-sm red-glow">
                  <Download className="w-4 h-4" /> {p.cta1}
                </a>
                <a href={DOWNLOAD_URL} target="_blank" rel="noopener noreferrer"
                  className="flex items-center gap-2 px-7 py-3.5 rounded-xl font-semibold text-sm border transition-all hover:opacity-90"
                  style={{ color: 'var(--fg2)', borderColor: 'var(--border)', background: 'var(--card-hover-bg)' }}>
                  {p.cta2}
                </a>
              </div>
            </motion.div>

            {/* Right — dashboard mockup */}
            <motion.div initial={{ opacity: 0, x: 40 }} animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7, delay: 0.15 }}>
              <div className="relative rounded-2xl border overflow-hidden p-5"
                style={{
                  background: isDark
                    ? 'linear-gradient(135deg,rgba(20,5,5,0.98),rgba(30,8,8,0.98))'
                    : 'linear-gradient(135deg,rgba(255,245,245,1),rgba(255,250,250,1))',
                  borderColor: 'rgba(239,68,68,0.2)',
                  boxShadow: '0 0 60px rgba(239,68,68,0.1)',
                }}>
                <div className="absolute top-0 left-0 right-0 h-px"
                  style={{ background: 'linear-gradient(90deg,transparent,rgba(239,68,68,0.6),transparent)' }} />

                {/* Header */}
                <div className="flex items-center justify-between mb-5">
                  <div>
                    <p className="font-bold text-base" style={{ color: 'var(--fg)' }}>
                      {lang === 'id' ? 'Dashboard Pro' : 'Pro Dashboard'}
                    </p>
                    <p className="text-xs" style={{ color: 'var(--muted)' }}>
                      {lang === 'id' ? '3 armada · Aktif' : '3 fleet · Active'}
                    </p>
                  </div>
                  <span className="text-xs px-3 py-1 rounded-full font-semibold"
                    style={{ background: 'rgba(239,68,68,0.12)', color: '#EF4444', border: '1px solid rgba(239,68,68,0.25)' }}>
                    Pro Beta
                  </span>
                </div>

                {/* Fleet bars */}
                <div className="space-y-2.5 mb-5">
                  {[
                    { name: 'Toyota Supra GR', plate: 'B 1234 XYZ', health: 87, color: '#22c55e' },
                    { name: 'Honda Civic Type R', plate: 'D 5678 ABC', health: 72, color: '#f59e0b' },
                    { name: 'Mazda MX-5 Miata', plate: 'L 9012 DEF', health: 94, color: '#22c55e' },
                  ].map((v) => (
                    <div key={v.name} className="rounded-xl px-4 py-3 border"
                      style={{ background: 'var(--card-hover-bg)', borderColor: 'var(--border)' }}>
                      <div className="flex items-center justify-between mb-2">
                        <div>
                          <p className="text-xs font-semibold" style={{ color: 'var(--fg)' }}>{v.name}</p>
                          <p className="text-[10px]" style={{ color: 'var(--muted)' }}>{v.plate}</p>
                        </div>
                        <span className="text-xs font-bold" style={{ color: v.color }}>{v.health}%</span>
                      </div>
                      <div className="h-1.5 rounded-full" style={{ background: 'var(--border)' }}>
                        <div className="h-full rounded-full transition-all" style={{ width: `${v.health}%`, background: v.color }} />
                      </div>
                    </div>
                  ))}
                </div>

                {/* Mini analytics */}
                <div className="rounded-xl p-4 border" style={{ background: 'var(--card-hover-bg)', borderColor: 'var(--border)' }}>
                  <div className="flex items-center justify-between mb-3">
                    <p className="text-[10px] uppercase tracking-wider" style={{ color: 'var(--muted)' }}>
                      {lang === 'id' ? 'Biaya Perawatan' : 'Maintenance Cost'}
                    </p>
                    <span className="text-xs text-green-500 font-semibold">↓ 12%</span>
                  </div>
                  <div className="flex items-end gap-1.5 h-16">
                    {[45, 60, 35, 75, 55, 90, 70].map((h, i) => (
                      <motion.div key={i} initial={{ height: 0 }} animate={{ height: `${h}%` }}
                        transition={{ duration: 0.6, delay: 0.3 + i * 0.05 }}
                        className="flex-1 rounded-t"
                        style={{ background: i === 5 ? 'linear-gradient(to top,#DC2626,#EF4444)' : 'rgba(239,68,68,0.2)' }} />
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

      {/* Who it's for */}
      <section className="py-24" style={{ background: 'var(--bg2)' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }} className="text-center mb-14">
            <p className="text-red-500 text-sm font-semibold uppercase tracking-widest mb-4">{p.usersTag}</p>
            <h2 className="section-heading" style={{ color: 'var(--fg)' }}>
              {p.usersH} <span className="text-gradient-red">{p.usersHRed}</span>
            </h2>
          </motion.div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {p.users.map((u, i) => (
              <motion.div key={i} initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }} transition={{ delay: i * 0.1 }}
                whileHover={{ y: -4 }}
                className="glass-card card-shadow rounded-2xl p-6 border"
                style={{ borderColor: 'var(--border)' }}>
                <div className="text-3xl mb-4">{u.icon}</div>
                <h3 className="font-bold text-base mb-2" style={{ color: 'var(--fg)' }}>{u.title}</h3>
                <p className="text-sm leading-relaxed" style={{ color: 'var(--muted)' }}>{u.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }} className="text-center mb-16">
            <p className="text-red-500 text-sm font-semibold uppercase tracking-widest mb-4">{p.featuresTag}</p>
            <h2 className="section-heading mb-5" style={{ color: 'var(--fg)' }}>
              {p.featuresH} <span className="text-gradient-red">{p.featuresHRed}</span>
            </h2>
            <p className="text-base max-w-xl mx-auto" style={{ color: 'var(--fg2)' }}>{p.featuresSub}</p>
          </motion.div>

          <div className="space-y-6">
            {p.features.map((f, i) => {
              const Icon = featureIcons[i]
              const isEven = i % 2 === 0
              return (
                <motion.div key={i} initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }} transition={{ delay: 0.1 }}
                  className="glass-card card-shadow rounded-2xl border overflow-hidden"
                  style={{ borderColor: i === 0 ? 'rgba(239,68,68,0.2)' : 'var(--border)' }}>
                  <div className={`grid md:grid-cols-2 gap-0 ${isEven ? '' : 'md:flex-row-reverse'}`}>
                    {/* Text side */}
                    <div className={`p-8 ${isEven ? '' : 'md:order-2'}`}>
                      <div className="w-12 h-12 rounded-xl flex items-center justify-center mb-5"
                        style={{ background: 'rgba(239,68,68,0.1)' }}>
                        <Icon className="w-6 h-6 text-red-500" />
                      </div>
                      <h3 className="font-bold text-xl mb-3" style={{ color: 'var(--fg)' }}>{f.title}</h3>
                      <p className="text-sm leading-relaxed mb-5" style={{ color: 'var(--fg2)' }}>{f.desc}</p>
                      <ul className="space-y-2.5">
                        {f.points.map((pt, j) => (
                          <li key={j} className="flex items-start gap-2.5 text-sm" style={{ color: 'var(--fg2)' }}>
                            <Check className="w-4 h-4 text-red-500 shrink-0 mt-0.5" />
                            {pt}
                          </li>
                        ))}
                      </ul>
                    </div>
                    {/* Visual side */}
                    <div className={`p-8 flex items-center justify-center ${isEven ? 'md:order-2' : ''}`}
                      style={{ background: isDark ? 'rgba(239,68,68,0.03)' : 'rgba(239,68,68,0.02)', borderLeft: isEven ? `1px solid var(--border)` : undefined, borderRight: !isEven ? `1px solid var(--border)` : undefined }}>
                      <div className="w-full max-w-xs rounded-xl p-4 border"
                        style={{ background: 'var(--bg2)', borderColor: 'var(--border)' }}>
                        <div className="flex items-center gap-2 mb-3">
                          <div className="w-7 h-7 rounded-lg flex items-center justify-center"
                            style={{ background: 'rgba(239,68,68,0.1)' }}>
                            <Icon className="w-3.5 h-3.5 text-red-500" />
                          </div>
                          <span className="text-xs font-semibold" style={{ color: 'var(--fg)' }}>{f.title}</span>
                        </div>
                        {/* Generic chart visualization */}
                        <div className="flex items-end gap-1.5 h-16 mb-2">
                          {[40 + i * 5, 65, 30 + i * 3, 80, 55 + i * 2, 90, 70 + i].map((h, j) => (
                            <motion.div key={j}
                              initial={{ height: 0 }} whileInView={{ height: `${Math.min(h, 100)}%` }}
                              viewport={{ once: true }} transition={{ duration: 0.5, delay: j * 0.05 }}
                              className="flex-1 rounded-t"
                              style={{ background: j === 5 ? 'linear-gradient(to top,#DC2626,#EF4444)' : 'rgba(239,68,68,0.18)' }} />
                          ))}
                        </div>
                        <div className="space-y-1.5">
                          {f.points.slice(0, 2).map((pt, j) => (
                            <div key={j} className="flex items-center gap-2 rounded-lg px-2.5 py-1.5"
                              style={{ background: 'var(--card-hover-bg)' }}>
                              <div className="w-1.5 h-1.5 rounded-full bg-red-500" />
                              <span className="text-[10px]" style={{ color: 'var(--muted)' }}>{pt}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </motion.div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Beta program */}
      <section className="py-24" style={{ background: 'var(--bg2)' }}>
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }} className="text-center mb-14">
            <p className="text-red-500 text-sm font-semibold uppercase tracking-widest mb-4">{p.betaTag}</p>
            <h2 className="section-heading mb-4" style={{ color: 'var(--fg)' }}>
              {p.betaH} <span className="text-gradient-red">{p.betaHRed}</span>
            </h2>
            <p className="text-base max-w-xl mx-auto" style={{ color: 'var(--fg2)' }}>{p.betaSub}</p>
          </motion.div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {p.benefits.map((b, i) => (
              <motion.div key={i} initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }} transition={{ delay: i * 0.1 }}
                className="glass-card card-shadow rounded-2xl p-6 border text-center"
                style={{ borderColor: 'rgba(239,68,68,0.15)' }}>
                <div className="text-3xl mb-3">{b.icon}</div>
                <h3 className="font-bold text-sm mb-2" style={{ color: 'var(--fg)' }}>{b.title}</h3>
                <p className="text-xs leading-relaxed" style={{ color: 'var(--muted)' }}>{b.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Comparison table */}
      <section className="py-24">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }} className="text-center mb-14">
            <p className="text-red-500 text-sm font-semibold uppercase tracking-widest mb-4">{p.compTag}</p>
            <h2 className="section-heading mb-4" style={{ color: 'var(--fg)' }}>
              {p.compH} <span className="text-gradient-red">{p.compHRed}</span>
            </h2>
            <p className="text-base" style={{ color: 'var(--fg2)' }}>{p.compSub}</p>
          </motion.div>

          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="glass-card card-shadow rounded-2xl border overflow-hidden"
            style={{ borderColor: 'rgba(239,68,68,0.2)' }}>
            {/* Header */}
            <div className="grid grid-cols-3 border-b" style={{ borderColor: 'var(--border)' }}>
              <div className="p-4 text-sm font-semibold" style={{ color: 'var(--muted)' }}>
                {lang === 'id' ? 'Fitur' : 'Feature'}
              </div>
              <div className="p-4 text-center border-l" style={{ borderColor: 'var(--border)' }}>
                <p className="font-bold text-sm text-green-500">Lite</p>
                <p className="text-xs" style={{ color: 'var(--muted)' }}>Free</p>
              </div>
              <div className="p-4 text-center border-l" style={{ borderColor: 'var(--border)', background: 'rgba(239,68,68,0.04)' }}>
                <p className="font-bold text-sm text-red-500">Pro</p>
                <p className="text-xs" style={{ color: 'var(--muted)' }}>Beta</p>
              </div>
            </div>
            {/* Rows */}
            {comparisonRows.map((row, i) => (
              <div key={i} className="grid grid-cols-3 border-b last:border-0"
                style={{ borderColor: 'var(--border)', background: i % 2 === 0 ? 'transparent' : 'var(--card-hover-bg)' }}>
                <div className="p-3.5 text-sm" style={{ color: 'var(--fg2)' }}>
                  {lang === 'id' ? row.feature.id : row.feature.en}
                </div>
                <div className="p-3.5 flex items-center justify-center border-l" style={{ borderColor: 'var(--border)' }}>
                  {row.lite
                    ? <Check className="w-4 h-4 text-green-500" />
                    : <X className="w-4 h-4" style={{ color: 'var(--muted)' }} />}
                </div>
                <div className="p-3.5 flex items-center justify-center border-l"
                  style={{ borderColor: 'var(--border)', background: 'rgba(239,68,68,0.02)' }}>
                  {row.pro
                    ? <Check className="w-4 h-4 text-red-500" />
                    : <X className="w-4 h-4" style={{ color: 'var(--muted)' }} />}
                </div>
              </div>
            ))}
          </motion.div>

          <p className="text-center text-sm mt-6" style={{ color: 'var(--muted)' }}>
            <Link href="/lite" className="text-green-500 hover:underline font-medium">{p.tryLite}</Link>
          </p>
        </div>
      </section>

      {/* CTA */}
      <section className="py-28 relative overflow-hidden">
        <div className="absolute inset-0"
          style={{
            background: isDark
              ? 'linear-gradient(135deg, rgba(40,8,8,0.7) 0%, rgba(10,10,10,0) 70%)'
              : 'linear-gradient(135deg, rgba(255,245,245,0.9) 0%, rgba(245,245,247,0) 70%)',
          }} />
        <div className="absolute left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2 w-[700px] h-[500px] rounded-full blur-[120px] pointer-events-none"
          style={{ background: 'rgba(239,68,68,0.08)' }} />
        <div className="absolute top-0 left-0 right-0 h-px"
          style={{ background: 'linear-gradient(90deg,transparent,rgba(239,68,68,0.3),transparent)' }} />

        <div className="relative z-10 max-w-2xl mx-auto px-4 text-center">
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <h2 className="section-heading mb-4" style={{ color: 'var(--fg)' }}>
              {p.ctaH} <span className="text-gradient-red">{p.ctaHRed}</span>
            </h2>
            <p className="text-base mb-10" style={{ color: 'var(--fg2)' }}>{p.ctaSub}</p>

            <div className="flex flex-wrap gap-4 justify-center">
              <a href={DOWNLOAD_URL} target="_blank" rel="noopener noreferrer"
                className="btn-primary flex items-center gap-2 px-10 py-4 rounded-xl font-bold text-white red-glow"
                style={{ fontSize: '0.95rem' }}>
                <Download className="w-5 h-5" /> {p.cta1}
              </a>
              <a href={DOWNLOAD_URL} target="_blank" rel="noopener noreferrer"
                className="flex items-center gap-2 px-10 py-4 rounded-xl font-semibold border transition-all hover:opacity-90"
                style={{ color: 'var(--fg2)', borderColor: 'var(--border)', background: 'var(--card-hover-bg)', fontSize: '0.95rem' }}>
                {p.cta2}
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
