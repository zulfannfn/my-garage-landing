'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import { Check, X, Car, Bell, Clock, Fuel, History, ChevronRight, Smartphone, Apple, Download } from 'lucide-react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import { useLanguage } from '../providers/LanguageProvider'
import { useTheme } from '../providers/ThemeProvider'

const DOWNLOAD_URL = 'https://drive.google.com/drive/folders/1pSV5gnGbIFrtMq4-D0t0CeQVV9pJCIgE?usp=drive_link'

const featureIcons = [Car, Bell, Clock, Fuel, History]

const comparisonRows = [
  // MyGarage Lite Features (available in both Lite and Pro)
  { 
    feature: { id: 'Dashboard', en: 'Dashboard' }, 
    lite: true, pro: true,
    details: { id: 'Ringkasan pendapatan, notifikasi stok, status antrian, quick action', en: 'Revenue summary, stock notifications, queue status, quick action' }
  },
  { 
    feature: { id: 'Manajemen Pelanggan', en: 'Customer Management' }, 
    lite: true, pro: true,
    details: { id: 'CRUD pelanggan, riwayat servis, telepon & WhatsApp langsung', en: 'Customer CRUD, service history, direct phone & WhatsApp' }
  },
  { 
    feature: { id: 'Transaksi & Servis', en: 'Transactions & Service' }, 
    lite: true, pro: true,
    details: { id: 'Transaksi servis & retail, pilih mekanik, kirim struk WhatsApp, cetak Bluetooth', en: 'Service & retail transactions, select mechanic, send WhatsApp receipt, Bluetooth print' }
  },
  { 
    feature: { id: 'Manajemen Sparepart/Stok', en: 'Sparepart/Stock Management' }, 
    lite: true, pro: true,
    details: { id: 'CRUD sparepart, alert stok, riwayat pergerakan, import CSV', en: 'Sparepart CRUD, stock alerts, movement history, CSV import' }
  },
  { 
    feature: { id: 'Purchase Order (PO)', en: 'Purchase Order (PO)' }, 
    lite: true, pro: true,
    details: { id: 'Buat & kelola PO, status PO, filter, export PDF', en: 'Create & manage PO, PO status, filter, export PDF' }
  },
  { 
    feature: { id: 'Reminder Servis Berkala', en: 'Periodic Service Reminder' }, 
    lite: true, pro: true,
    details: { id: 'Reminder otomatis, filter due list, kirim WhatsApp, reminder manual', en: 'Auto reminder, due list filter, send WhatsApp, manual reminder' }
  },
  { 
    feature: { id: 'Manajemen Karyawan/Mekanik', en: 'Employee/Mechanic Management' }, 
    lite: true, pro: true,
    details: { id: 'CRUD karyawan, status aktif/nonaktif, kalkulasi bagi hasil', en: 'Employee CRUD, active/inactive status, profit sharing calculation' }
  },
  { 
    feature: { id: 'Laporan & Analitik', en: 'Reports & Analytics' }, 
    lite: true, pro: true,
    details: { id: 'Laporan harian/bulanan, grafik pendapatan, kelola biaya operasional, export PDF/CSV', en: 'Daily/monthly reports, revenue charts, operational expenses, export PDF/CSV' }
  },
  { 
    feature: { id: 'Pengaturan', en: 'Settings' }, 
    lite: true, pro: true,
    details: { id: 'Profil bengkel, bahasa ID/EN, ukuran kertas struk, printer Bluetooth, mode gelap/terang, backup/restore', en: 'Workshop profile, ID/EN language, receipt paper size, Bluetooth printer, dark/light mode, backup/restore' }
  },
  // Pro-exclusive Features
  { 
    feature: { id: 'Advanced Analytics', en: 'Advanced Analytics' }, 
    lite: false, pro: true,
    details: { id: 'Prediksi pendapatan AI, analisis tren, rekomendasi harga, forecasting stok', en: 'AI revenue prediction, trend analysis, price recommendations, stock forecasting' }
  },
  { 
    feature: { id: 'Manajemen Bengkel', en: 'Workshop Management' }, 
    lite: false, pro: true,
    details: { id: 'Multi-cabang, sinkronisasi data real-time, manajemen lokasi, transfer antar cabang', en: 'Multi-branch, real-time data sync, location management, inter-branch transfer' }
  },
  { 
    feature: { id: 'Fleet Monitoring', en: 'Fleet Monitoring' }, 
    lite: false, pro: true,
    details: { id: 'GPS tracking real-time, monitoring armada, route optimization, maintenance scheduling', en: 'Real-time GPS tracking, fleet monitoring, route optimization, maintenance scheduling' }
  },
  { 
    feature: { id: 'Multi-user & Tim', en: 'Multi-user & Team' }, 
    lite: false, pro: true,
    details: { id: 'Role-based access, permission management, team collaboration, activity log', en: 'Role-based access, permission management, team collaboration, activity log' }
  },
  { 
    feature: { id: 'Quality Control', en: 'Quality Control' }, 
    lite: false, pro: true,
    details: { id: 'Inspeksi kualitas, checklist QC, approval workflow, foto dokumentasi', en: 'Quality inspection, QC checklist, approval workflow, photo documentation' }
  },
  { 
    feature: { id: 'Stock Opname', en: 'Stock Opname' }, 
    lite: false, pro: true,
    details: { id: 'Stock opname digital, selisih otomatis, approval adjustment, history audit', en: 'Digital stock opname, auto discrepancy, adjustment approval, audit history' }
  },
  { 
    feature: { id: 'Monitoring Antrian', en: 'Queue Monitoring' }, 
    lite: false, pro: true,
    details: { id: 'Real-time queue view, estimasi waktu, notifikasi pelanggan, priority queue', en: 'Real-time queue view, time estimation, customer notification, priority queue' }
  },
  { 
    feature: { id: 'Integrasi Pembayaran', en: 'Payment Integration' }, 
    lite: false, pro: true,
    details: { id: 'QRIS, EDC, virtual account, split payment, rekonsiliasi otomatis', en: 'QRIS, EDC, virtual account, split payment, auto reconciliation' }
  },
  { 
    feature: { id: 'Cloud Backup & Sync', en: 'Cloud Backup & Sync' }, 
    lite: false, pro: true,
    details: { id: 'Backup otomatis cloud, multi-device sync, restore instan, version history', en: 'Auto cloud backup, multi-device sync, instant restore, version history' }
  },
  { 
    feature: { id: 'Support 24/7', en: '24/7 Support' }, 
    lite: false, pro: true,
    details: { id: 'Live chat, video call, remote assistance, dedicated account manager', en: 'Live chat, video call, remote assistance, dedicated account manager' }
  },
]

export default function LitePage() {
  const { t, lang } = useLanguage()
  const { theme } = useTheme()
  const isDark = theme === 'dark'
  const p = t.litePage

  return (
    <div style={{ background: 'var(--bg)', color: 'var(--fg)', minHeight: '100vh' }}>
      <Navbar />

      {/* Hero */}
      <section className="relative pt-40 pb-24 overflow-hidden">
        <div className="absolute inset-0 grid-bg" />
        <div className="absolute left-1/2 -translate-x-1/2 top-20 w-[600px] h-[600px] rounded-full blur-[140px] pointer-events-none"
          style={{ background: 'rgba(34,197,94,0.06)' }} />

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link href="/" className="inline-flex items-center gap-2 text-sm mb-10 transition-colors hover:text-green-500"
            style={{ color: 'var(--muted)' }}>
            {p.back}
          </Link>

          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Left */}
            <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}>
              <div className="inline-flex items-center gap-2 rounded-full px-4 py-2 text-xs font-medium mb-6 border"
                style={{ background: 'rgba(34,197,94,0.08)', borderColor: 'rgba(34,197,94,0.25)', color: '#22c55e' }}>
                <span className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse" />
                {p.tag}
              </div>

              <h1 className="font-black leading-tight mb-6" style={{ fontSize: 'clamp(2rem,5vw,3.5rem)', color: 'var(--fg)' }}>
                {p.h}{' '}<span className="text-gradient-red">{p.hRed}</span>
              </h1>

              <p className="text-lg leading-relaxed mb-8" style={{ color: 'var(--fg2)' }}>{p.sub}</p>

              <div className="inline-flex items-center gap-2 rounded-full px-4 py-2 text-xs mb-8 border"
                style={{ background: 'rgba(34,197,94,0.06)', borderColor: 'rgba(34,197,94,0.2)', color: 'var(--muted)' }}>
                <Check className="w-3.5 h-3.5 text-green-500" />
                {p.badge}
              </div>

              <div className="flex flex-wrap gap-3">
                <button disabled className="flex items-center gap-2 px-5 py-3 rounded-xl font-semibold text-sm border cursor-not-allowed opacity-40"
                  style={{ borderColor: 'var(--border)', color: 'var(--muted)', background: 'var(--card-hover-bg)' }}>
                  <Apple className="w-4 h-4" /> App Store — Coming Soon
                </button>
                <button disabled className="flex items-center gap-2 px-5 py-3 rounded-xl font-semibold text-sm border cursor-not-allowed opacity-40"
                  style={{ borderColor: 'var(--border)', color: 'var(--muted)', background: 'var(--card-hover-bg)' }}>
                  <Smartphone className="w-4 h-4" /> Play Store — Coming Soon
                </button>
                <a href={DOWNLOAD_URL} target="_blank" rel="noopener noreferrer"
                  className="flex items-center gap-2 px-5 py-3 rounded-xl font-bold text-sm border transition-all hover:opacity-90"
                  style={{ background: 'rgba(34,197,94,0.12)', borderColor: 'rgba(34,197,94,0.35)', color: '#22c55e' }}>
                  <Download className="w-4 h-4" /> Download Sekarang
                </a>
              </div>
            </motion.div>

            {/* Right — phone mockup */}
            <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.7, delay: 0.15 }}
              className="flex justify-center">
              <div className="relative w-64">
                <div className="rounded-[2.5rem] border-4 overflow-hidden shadow-2xl"
                  style={{ borderColor: 'rgba(34,197,94,0.3)', background: 'var(--bg2)' }}>
                  {/* Notch */}
                  <div className="flex justify-center pt-3 pb-1">
                    <div className="w-24 h-5 rounded-full" style={{ background: 'var(--bg)' }} />
                  </div>
                  {/* App content */}
                  <div className="px-4 pb-6 pt-2 space-y-3">
                    <div className="flex items-center justify-between">
                      <p className="text-sm font-bold" style={{ color: 'var(--fg)' }}>My Garage Lite</p>
                      <span className="text-[10px] px-2 py-0.5 rounded-full"
                        style={{ background: 'rgba(34,197,94,0.12)', color: '#22c55e' }}>Free</span>
                    </div>
                    {/* Bar chart */}
                    <div className="rounded-xl p-3 border" style={{ background: 'var(--card-hover-bg)', borderColor: 'var(--border)' }}>
                      <p className="text-[10px] mb-2" style={{ color: 'var(--muted)' }}>Monthly Service</p>
                      <div className="flex items-end gap-1 h-10">
                        {[40, 65, 50, 80, 55, 70, 60].map((h, i) => (
                          <div key={i} className="flex-1 rounded-t"
                            style={{ height: `${h}%`, background: i === 3 ? '#22c55e' : 'rgba(34,197,94,0.2)' }} />
                        ))}
                      </div>
                    </div>
                    {/* Pie chart */}
                    <div className="rounded-xl p-3 border flex items-center justify-center" style={{ background: 'var(--card-hover-bg)', borderColor: 'var(--border)' }}>
                      <div className="relative w-16 h-16">
                        <svg viewBox="0 0 60 60" className="w-full h-full">
                          <circle cx="30" cy="30" r="25" fill="none" stroke="rgba(34,197,94,0.15)" strokeWidth="8" />
                          <circle cx="30" cy="30" r="25" fill="none" stroke="#22c55e" strokeWidth="8"
                            strokeDasharray="157" strokeDashoffset="50" strokeLinecap="round" transform="rotate(-90 30 30)" />
                          <circle cx="30" cy="30" r="25" fill="none" stroke="#16a34a" strokeWidth="8"
                            strokeDasharray="157" strokeDashoffset="110" strokeLinecap="round" transform="rotate(45 30 30)" />
                        </svg>
                      </div>
                    </div>
                    {/* Reminders */}
                    {[
                      { label: 'Oil Change', due: '3 days', dot: 'bg-yellow-400' },
                      { label: 'Tire Rotation', due: 'Done', dot: 'bg-green-400' },
                    ].map((r) => (
                      <div key={r.label} className="flex items-center justify-between rounded-lg px-3 py-2 border"
                        style={{ background: 'var(--card-hover-bg)', borderColor: 'var(--border)' }}>
                        <div className="flex items-center gap-2">
                          <div className={`w-2 h-2 rounded-full ${r.dot}`} />
                          <span className="text-[11px]" style={{ color: 'var(--fg2)' }}>{r.label}</span>
                        </div>
                        <span className="text-[10px]" style={{ color: 'var(--muted)' }}>{r.due}</span>
                      </div>
                    ))}
                  </div>
                </div>
                {/* Glow */}
                <div className="absolute inset-0 rounded-[2.5rem] blur-2xl -z-10"
                  style={{ background: 'rgba(34,197,94,0.12)' }} />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Stats bar */}
      <section className="py-10 border-y" style={{ borderColor: 'var(--border)', background: 'var(--bg2)' }}>
        <div className="max-w-4xl mx-auto px-4 grid grid-cols-2 sm:grid-cols-4 gap-6">
          {p.stats.map((s, i) => (
            <motion.div key={i} initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }} transition={{ delay: i * 0.08 }}
              className="text-center">
              <p className="text-3xl font-black text-green-500">{s.value}</p>
              <p className="text-sm mt-1" style={{ color: 'var(--muted)' }}>{s.label}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Features */}
      <section className="py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }} className="text-center mb-16">
            <p className="text-green-500 text-sm font-semibold uppercase tracking-widest mb-4">{p.featuresTag}</p>
            <h2 className="section-heading mb-5" style={{ color: 'var(--fg)' }}>
              {p.featuresH} <span className="text-gradient-red">{p.featuresHRed}</span>
            </h2>
            <p className="text-base max-w-xl mx-auto" style={{ color: 'var(--fg2)' }}>{p.featuresSub}</p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {p.features.map((f, i) => {
              const Icon = featureIcons[i]
              return (
                <motion.div key={i} initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }} transition={{ delay: i * 0.1 }}
                  whileHover={{ y: -4 }}
                  className="glass-card card-shadow rounded-2xl p-6 border"
                  style={{ borderColor: 'var(--border)' }}>
                  <div className="w-11 h-11 rounded-xl flex items-center justify-center mb-4"
                    style={{ background: 'rgba(34,197,94,0.12)' }}>
                    <Icon className="w-5 h-5 text-green-500" />
                  </div>
                  <h3 className="font-bold text-lg mb-2" style={{ color: 'var(--fg)' }}>{f.title}</h3>
                  <p className="text-sm leading-relaxed mb-4" style={{ color: 'var(--fg2)' }}>{f.desc}</p>
                  <ul className="space-y-2">
                    {f.points.map((pt, j) => (
                      <li key={j} className="flex items-start gap-2 text-sm" style={{ color: 'var(--muted)' }}>
                        <Check className="w-4 h-4 text-green-500 shrink-0 mt-0.5" />
                        {pt}
                      </li>
                    ))}
                  </ul>
                </motion.div>
              )
            })}

            {/* 6th card placeholder — 5 features but 3-col grid */}
            <motion.div initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }} transition={{ delay: 0.5 }}
              className="glass-card card-shadow rounded-2xl p-6 border flex flex-col items-center justify-center text-center md:col-span-2 lg:col-span-1"
              style={{ borderColor: 'rgba(34,197,94,0.2)', background: 'rgba(34,197,94,0.03)' }}>
              <div className="text-4xl mb-3">✨</div>
              <p className="font-bold mb-2" style={{ color: 'var(--fg)' }}>
                {lang === 'id' ? 'Semuanya Gratis' : 'All of This is Free'}
              </p>
              <p className="text-sm" style={{ color: 'var(--muted)' }}>
                {lang === 'id'
                  ? 'Tidak ada biaya tersembunyi, tidak ada batasan penggunaan.'
                  : 'No hidden fees, no usage limits.'}
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* How it works */}
      <section className="py-24" style={{ background: 'var(--bg2)' }}>
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }} className="text-center mb-16">
            <p className="text-red-500 text-sm font-semibold uppercase tracking-widest mb-4">{p.howTag}</p>
            <h2 className="section-heading mb-4" style={{ color: 'var(--fg)' }}>
              {p.howH} <span className="text-gradient-red">{p.howHRed}</span>
            </h2>
          </motion.div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {p.steps.map((s, i) => (
              <motion.div key={i} initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }} transition={{ delay: i * 0.1 }}
                className="relative glass-card card-shadow rounded-2xl p-6 border text-center"
                style={{ borderColor: 'var(--border)' }}>
                {i < p.steps.length - 1 && (
                  <ChevronRight className="absolute -right-3 top-1/2 -translate-y-1/2 w-6 h-6 text-red-500/40 hidden lg:block" />
                )}
                <div className="w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4 font-black text-sm"
                  style={{ background: 'rgba(239,68,68,0.1)', color: '#EF4444' }}>
                  {s.num}
                </div>
                <h3 className="font-bold mb-2" style={{ color: 'var(--fg)' }}>{s.title}</h3>
                <p className="text-sm leading-relaxed" style={{ color: 'var(--muted)' }}>{s.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Platform */}
      <section className="py-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }} className="text-center mb-14">
            <p className="text-red-500 text-sm font-semibold uppercase tracking-widest mb-4">{p.platformTag}</p>
            <h2 className="section-heading mb-4" style={{ color: 'var(--fg)' }}>
              {p.platformH} <span className="text-gradient-red">{p.platformHRed}</span>
            </h2>
          </motion.div>

          <div className="grid sm:grid-cols-3 gap-6">
            {p.platforms.map((pl, i) => (
              <motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }} transition={{ delay: i * 0.1 }}
                className="glass-card card-shadow rounded-2xl p-8 border text-center"
                style={{ borderColor: 'var(--border)' }}>
                <div className="text-4xl mb-4">{pl.icon}</div>
                <h3 className="font-bold text-xl mb-1" style={{ color: 'var(--fg)' }}>{pl.name}</h3>
                <p className="text-sm mb-3" style={{ color: 'var(--fg2)' }}>{pl.sub}</p>
                <div className="text-xs px-3 py-1 rounded-full inline-block"
                  style={{ background: 'rgba(239,68,68,0.08)', color: '#EF4444' }}>
                  {pl.req}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Comparison table */}
      <section className="py-24" style={{ background: 'var(--bg2)' }}>
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
            style={{ borderColor: 'var(--border)' }}>
            {/* Header */}
            <div className="grid grid-cols-3 border-b" style={{ borderColor: 'var(--border)' }}>
              <div className="p-4 text-sm font-semibold" style={{ color: 'var(--muted)' }}>
                {lang === 'id' ? 'Fitur' : 'Feature'}
              </div>
              <div className="p-4 text-center border-l" style={{ borderColor: 'var(--border)' }}>
                <p className="font-bold text-sm text-green-500">Lite</p>
                <p className="text-xs" style={{ color: 'var(--muted)' }}>Free</p>
              </div>
              <div className="p-4 text-center border-l" style={{ borderColor: 'var(--border)' }}>
                <p className="font-bold text-sm text-red-500">Pro</p>
                <p className="text-xs" style={{ color: 'var(--muted)' }}>Beta</p>
              </div>
            </div>
            {/* Rows */}
            {comparisonRows.map((row, i) => (
              <div key={i} className="grid grid-cols-3 border-b last:border-0"
                style={{ borderColor: 'var(--border)', background: i % 2 === 0 ? 'transparent' : 'var(--card-hover-bg)' }}>
                <div className="p-3.5" style={{ color: 'var(--fg2)' }}>
                  <p className="text-sm font-medium">{lang === 'id' ? row.feature.id : row.feature.en}</p>
                  {row.details && (
                    <p className="text-xs mt-1" style={{ color: 'var(--muted)' }}>
                      {lang === 'id' ? row.details.id : row.details.en}
                    </p>
                  )}
                </div>
                <div className="p-3.5 flex items-center justify-center border-l" style={{ borderColor: 'var(--border)' }}>
                  {row.lite
                    ? <Check className="w-4 h-4 text-green-500" />
                    : <X className="w-4 h-4" style={{ color: 'var(--muted)' }} />}
                </div>
                <div className="p-3.5 flex items-center justify-center border-l" style={{ borderColor: 'var(--border)' }}>
                  {row.pro
                    ? <Check className="w-4 h-4 text-red-500" />
                    : <X className="w-4 h-4" style={{ color: 'var(--muted)' }} />}
                </div>
              </div>
            ))}
          </motion.div>

          <p className="text-center text-sm mt-6" style={{ color: 'var(--muted)' }}>
            <Link href="/pro" className="text-red-500 hover:underline font-medium">{p.tryPro}</Link>
          </p>
        </div>
      </section>

      {/* CTA */}
      <section className="py-28 relative overflow-hidden">
        <div className="absolute inset-0"
          style={{
            background: isDark
              ? 'linear-gradient(135deg, rgba(20,40,20,0.6) 0%, rgba(10,10,10,0) 60%)'
              : 'linear-gradient(135deg, rgba(240,255,240,0.8) 0%, rgba(245,245,247,0) 60%)',
          }} />
        <div className="absolute left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full blur-[120px] pointer-events-none"
          style={{ background: 'rgba(34,197,94,0.08)' }} />

        <div className="relative z-10 max-w-2xl mx-auto px-4 text-center">
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <h2 className="section-heading mb-4" style={{ color: 'var(--fg)' }}>
              {p.ctaH} <span className="text-gradient-red">{p.ctaHRed}</span>
            </h2>
            <p className="text-base mb-10" style={{ color: 'var(--fg2)' }}>{p.ctaSub}</p>

            <div className="flex flex-wrap gap-4 justify-center">
              <button disabled className="flex items-center gap-2 px-7 py-4 rounded-xl font-bold border cursor-not-allowed opacity-40"
                style={{ borderColor: 'var(--border)', color: 'var(--muted)', background: 'var(--card-hover-bg)', fontSize: '0.9rem' }}>
                <Apple className="w-5 h-5" /> App Store — Coming Soon
              </button>
              <button disabled className="flex items-center gap-2 px-7 py-4 rounded-xl font-bold border cursor-not-allowed opacity-40"
                style={{ borderColor: 'var(--border)', color: 'var(--muted)', background: 'var(--card-hover-bg)', fontSize: '0.9rem' }}>
                <Smartphone className="w-5 h-5" /> Play Store — Coming Soon
              </button>
              <a href={DOWNLOAD_URL} target="_blank" rel="noopener noreferrer"
                className="flex items-center gap-2 px-8 py-4 rounded-xl font-bold border transition-all hover:opacity-90"
                style={{ background: 'rgba(34,197,94,0.12)', borderColor: 'rgba(34,197,94,0.35)', color: '#22c55e', fontSize: '0.95rem' }}>
                <Download className="w-5 h-5" /> Download Sekarang
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
