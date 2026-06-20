'use client'

import { motion } from 'framer-motion'
import { Mail, MessageCircle } from 'lucide-react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import { useLanguage } from '../providers/LanguageProvider'

const WHATSAPP_NUMBER = '6285643408281'
const EMAIL = 'dzulfannurf@gmail.com'

export default function ContactPage() {
  const { t, lang } = useLanguage()

  const handleWhatsAppClick = () => {
    const message = lang === 'id' 
      ? 'Halo, saya ingin bertanya tentang My Garage'
      : 'Hello, I want to ask about My Garage'
    window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`, '_blank')
  }

  const handleEmailClick = () => {
    window.open(`mailto:${EMAIL}`, '_blank')
  }

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
            <p className="text-red-500 text-sm font-semibold uppercase tracking-widest mb-4">
              {lang === 'id' ? 'Hubungi Kami' : 'Contact Us'}
            </p>
            <h1 className="font-black leading-tight mb-6" style={{ fontSize: 'clamp(2rem,5vw,3.5rem)', color: 'var(--fg)' }}>
              {lang === 'id' ? 'Ada Pertanyaan?' : 'Have Questions?'}
            </h1>
            <p className="text-lg leading-relaxed max-w-2xl mx-auto mb-8" style={{ color: 'var(--fg2)' }}>
              {lang === 'id' 
                ? 'Kami siap membantu Anda. Hubungi kami melalui WhatsApp atau email untuk dukungan dan informasi lebih lanjut.'
                : 'We are here to help. Contact us via WhatsApp or email for support and more information.'}
            </p>
            <p className="text-sm" style={{ color: 'var(--muted)' }}>
              {lang === 'id' 
                ? 'Tim kami siap membantu Anda kapan saja. Jangan ragu untuk menghubungi kami jika Anda memiliki pertanyaan atau membutuhkan bantuan.'
                : 'Our team is ready to help you anytime. Do not hesitate to contact us if you have questions or need assistance.'}
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Options */}
      <section className="relative py-24 overflow-hidden">
        <div className="absolute left-1/4 top-1/2 w-[500px] h-[500px] rounded-full blur-[120px] pointer-events-none"
          style={{ background: 'rgba(34,197,94,0.05)' }} />
        <div className="absolute right-1/4 top-1/3 w-[400px] h-[400px] rounded-full blur-[100px] pointer-events-none"
          style={{ background: 'rgba(239,68,68,0.05)' }} />
        <div className="absolute left-1/2 -translate-x-1/2 top-0 w-[800px] h-[1px]"
          style={{ background: 'linear-gradient(90deg,transparent,rgba(239,68,68,0.2),transparent)' }} />

        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-8">
            {/* WhatsApp */}
            <motion.div initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              whileHover={{ y: -8, scale: 1.02 }}
              className="glass-card card-shadow rounded-2xl p-8 border text-center cursor-pointer relative overflow-hidden"
              style={{ borderColor: 'rgba(34,197,94,0.2)' }}
              onClick={handleWhatsAppClick}>
              <div className="absolute top-0 left-0 right-0 h-1"
                style={{ background: 'linear-gradient(90deg, transparent, rgba(34,197,94,0.6), transparent)' }} />
              <div className="absolute top-0 right-0 w-32 h-32 rounded-full blur-3xl pointer-events-none"
                style={{ background: 'rgba(34,197,94,0.1)' }} />
              <div className="relative z-10">
                <div className="w-20 h-20 rounded-2xl flex items-center justify-center mx-auto mb-6 relative"
                  style={{ background: 'linear-gradient(135deg, rgba(34,197,94,0.15), rgba(34,197,94,0.05))' }}>
                  <div className="absolute inset-0 rounded-2xl blur-xl opacity-50"
                    style={{ background: 'rgba(34,197,94,0.2)' }} />
                  <MessageCircle className="w-10 h-10 text-green-500 relative z-10" />
                </div>
                <h3 className="font-bold text-2xl mb-3" style={{ color: 'var(--fg)' }}>WhatsApp</h3>
                <p className="text-sm mb-4" style={{ color: 'var(--muted)' }}>
                  {lang === 'id' ? 'Chat langsung dengan kami untuk respon cepat' : 'Chat directly with us for quick response'}
                </p>
                <p className="font-mono text-sm font-semibold px-4 py-2 rounded-lg inline-block"
                  style={{ background: 'rgba(34,197,94,0.1)', color: '#22c55e' }}>
                  {WHATSAPP_NUMBER}
                </p>
              </div>
            </motion.div>

            {/* Email */}
            <motion.div initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }} transition={{ delay: 0.1 }}
              whileHover={{ y: -8, scale: 1.02 }}
              className="glass-card card-shadow rounded-2xl p-8 border text-center cursor-pointer relative overflow-hidden"
              style={{ borderColor: 'rgba(239,68,68,0.2)' }}
              onClick={handleEmailClick}>
              <div className="absolute top-0 left-0 right-0 h-1"
                style={{ background: 'linear-gradient(90deg, transparent, rgba(239,68,68,0.6), transparent)' }} />
              <div className="absolute top-0 right-0 w-32 h-32 rounded-full blur-3xl pointer-events-none"
                style={{ background: 'rgba(239,68,68,0.1)' }} />
              <div className="relative z-10">
                <div className="w-20 h-20 rounded-2xl flex items-center justify-center mx-auto mb-6 relative"
                  style={{ background: 'linear-gradient(135deg, rgba(239,68,68,0.15), rgba(239,68,68,0.05))' }}>
                  <div className="absolute inset-0 rounded-2xl blur-xl opacity-50"
                    style={{ background: 'rgba(239,68,68,0.2)' }} />
                  <Mail className="w-10 h-10 text-red-500 relative z-10" />
                </div>
                <h3 className="font-bold text-2xl mb-3" style={{ color: 'var(--fg)' }}>Email</h3>
                <p className="text-sm mb-4" style={{ color: 'var(--muted)' }}>
                  {lang === 'id' ? 'Kirim email untuk pertanyaan detail atau dukungan' : 'Send email for detailed questions or support'}
                </p>
                <p className="font-mono text-sm font-semibold px-4 py-2 rounded-lg inline-block"
                  style={{ background: 'rgba(239,68,68,0.1)', color: '#EF4444' }}>
                  {EMAIL}
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
