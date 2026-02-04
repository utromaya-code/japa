import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X } from 'lucide-react'

const links = [
  { href: '#about', label: 'О путешествии' },
  { href: '#locations', label: 'Локации' },
  { href: '#map', label: 'Карта' },
  { href: '#features', label: 'Особенности' },
  { href: '#program', label: 'Программа' },
  { href: '#full-program', label: 'Маршрут' },
  { href: '#instructor', label: 'О Леониде' },
  { href: '#practical', label: 'Информация' },
  { href: '#faq', label: 'FAQ' },
  { href: '#booking', label: 'Забронировать' },
]

export function Nav() {
  const [open, setOpen] = useState(false)
  return (
    <nav className="sticky top-0 z-50 w-full bg-paper/98 backdrop-blur-md border-b border-stone/10 shadow-sm">
      <div className="container mx-auto px-4 flex items-center justify-between h-16 md:h-18">
        <a href="#hero" className="font-display text-xl font-semibold text-momiji-brown">
          Япония 2026
        </a>
        <ul className="hidden md:flex items-center gap-6">
          {links.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="text-momiji-brown/90 hover:text-maple-accent text-sm font-medium transition-colors"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>
        <button
          type="button"
          className="md:hidden p-3 min-h-[44px] min-w-[44px] flex items-center justify-center text-momiji-brown touch-manipulation"
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
            className="md:hidden bg-paper border-t border-stone/10"
          >
            <ul className="container mx-auto px-4 py-4 flex flex-col gap-2">
              {links.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="block py-3 min-h-[44px] flex items-center text-momiji-brown hover:text-maple-accent active:bg-stone/5 touch-manipulation"
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
