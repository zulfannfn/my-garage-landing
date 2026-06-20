'use client'

import { Gauge } from 'lucide-react'
import { useLanguage } from '../providers/LanguageProvider'

const productHrefs = ['/pricing', '/lite', '/pro', '#features', '#']
const companyHrefs = ['/about', '/contact', '#', '#', '#']
const socialHrefs = ['#', '#', '#', '#', '#']

export default function Footer() {
  const { t } = useLanguage()

  return (
    <footer className="relative border-t" style={{ background: 'var(--bg)', borderColor: 'var(--section-divider)' }}>
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[400px] h-px"
        style={{ background: 'linear-gradient(90deg,transparent,rgba(239,68,68,0.25),transparent)' }} />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="py-16 grid grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-16">
          {/* Brand */}
          <div className="col-span-2 lg:col-span-1">
            <div className="flex items-center gap-2.5 mb-5">
              <div className="w-9 h-9 bg-gradient-to-br from-red-500 to-red-700 rounded-xl flex items-center justify-center">
                <Gauge className="w-5 h-5 text-white" strokeWidth={2.5} />
              </div>
              <span className="font-bold text-xl tracking-tight" style={{ color: 'var(--fg)' }}>
                My<span className="text-red-500">Garage</span>
              </span>
            </div>
            <p className="text-sm leading-relaxed mb-6 max-w-[240px]" style={{ color: 'var(--muted)' }}>
              {t.footer.desc}
            </p>
            <div className="flex items-center gap-1.5 text-xs" style={{ color: 'var(--muted)' }}>
              <span className="w-1.5 h-1.5 rounded-full bg-green-400" />
              <span>{t.footer.status}</span>
            </div>
          </div>

          {/* Products */}
          <div>
            <p className="font-semibold text-sm mb-5 uppercase tracking-wide" style={{ color: 'var(--fg)' }}>
              {t.footer.products}
            </p>
            <ul className="space-y-3">
              {t.footer.productLinks.map((label, i) => (
                <li key={label}>
                  <a href={productHrefs[i]}
                    className="text-sm transition-colors duration-200 hover:text-red-500"
                    style={{ color: 'var(--muted)' }}>
                    {label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <p className="font-semibold text-sm mb-5 uppercase tracking-wide" style={{ color: 'var(--fg)' }}>
              {t.footer.company}
            </p>
            <ul className="space-y-3">
              {t.footer.companyLinks.map((label, i) => (
                <li key={label}>
                  <a href={companyHrefs[i]}
                    className="text-sm transition-colors duration-200"
                    style={{ color: 'var(--muted)' }}
                    onMouseEnter={(e) => (e.currentTarget.style.color = 'var(--fg)')}
                    onMouseLeave={(e) => (e.currentTarget.style.color = 'var(--muted)')}>
                    {label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Social */}
          <div>
            <p className="font-semibold text-sm mb-5 uppercase tracking-wide" style={{ color: 'var(--fg)' }}>
              {t.footer.social}
            </p>
            <ul className="space-y-3">
              {t.footer.socialLinks.map((label, i) => (
                <li key={label}>
                  <a href={socialHrefs[i]}
                    className="text-sm transition-colors duration-200 hover:text-red-500"
                    style={{ color: 'var(--muted)' }}>
                    {label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="py-6 border-t flex flex-col sm:flex-row items-center justify-between gap-3"
          style={{ borderColor: 'var(--section-divider)' }}>
          <p className="text-xs" style={{ color: 'var(--muted)' }}>
            © {new Date().getFullYear()} My Garage. {t.footer.copyright}
          </p>
          <p className="text-xs" style={{ color: 'var(--muted)' }}>{t.footer.tagline}</p>
        </div>
      </div>
    </footer>
  )
}
