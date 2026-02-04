import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X } from 'lucide-react'

const links = [
  { href: '#about', label: 'О путешествии' },
  { href: '#locations', label: 'Локации' },
  { href: '#features', label: 'Особенности' },
  { href: '#program', label: 'Программа' },
  { href: '#instructor', label: 'О гиде' },
  { href: '#practical', label: 'Информация' },
  { href: '#faq', label: 'FAQ' },
  { href: '#booking', label: 'Забронировать' },
]

export function Nav() {
  const [open, setOpen] = useState(false)
  return (
    <nav className="sticky top-0 z-50 w-full bg-momiji-brown/95 backdrop-blur-sm border-b border-paper/10">
      <div className="container mx-auto px-4 flex items-center justify-between h-16 md:h-18">
        <a href="#hero" className="font-display text-xl font-semibold text-paper">
          Япония 2026
        </a>
        <ul className="hidden md:flex items-center gap-6">
          {links.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="text-paper/90 hover:text-momiji-gold text-sm font-medium transition-colors"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>
        <button
          type="button"
          className="md:hidden p-2 text-paper"
          onClick={() => setOpen((o) => !o)}
          aria-label={open ? 'Закрыть меню' : 'Открыть меню'}
        >
          {open ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-momiji-brown border-t border-paper/10"
          >
            <ul className="container mx-auto px-4 py-4 flex flex-col gap-2">
              {links.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="block py-2 text-paper/90 hover:text-momiji-gold"
                    onClick={() => setOpen(false)}
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  )
}
