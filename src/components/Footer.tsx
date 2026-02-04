import { Instagram, Facebook, Youtube, Send } from 'lucide-react'

const social = [
  { icon: Instagram, href: 'https://instagram.com', label: 'Instagram' },
  { icon: Facebook, href: 'https://facebook.com', label: 'Facebook' },
  { icon: Youtube, href: 'https://youtube.com', label: 'YouTube' },
  { icon: Send, href: 'https://t.me', label: 'Telegram' },
]

const navLinks = [
  { href: '#about', label: 'О путешествии' },
  { href: '#locations', label: 'Локации' },
  { href: '#map', label: 'Карта' },
  { href: '#program', label: 'Программа' },
  { href: '#full-program', label: 'Маршрут' },
  { href: '#instructor', label: 'О Леониде' },
  { href: '#booking', label: 'Контакты' },
  { href: '#', label: 'Политика конфиденциальности' },
]

export function Footer() {
  return (
    <footer className="bg-stone/10 border-t border-stone/10 text-momiji-brown py-12 md:py-16">
      <div className="container mx-auto px-4 max-w-5xl">
        <div className="flex flex-col md:flex-row justify-between items-center gap-8 mb-8">
          <p className="font-display text-lg text-momiji-brown/90 text-center md:text-left">
            © 2026 Леонид Кутузов. Путешествия и практики.
          </p>
          <div className="flex gap-4">
            {social.map((item) => (
              <a
                key={item.label}
                href={item.href}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 text-momiji-brown/80 hover:text-maple-accent transition-colors"
                aria-label={item.label}
              >
                <item.icon className="w-5 h-5" />
              </a>
            ))}
          </div>
        </div>
        <nav className="flex flex-wrap justify-center md:justify-start gap-4 md:gap-6 text-sm">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-momiji-brown/80 hover:text-maple-accent transition-colors"
            >
              {link.label}
            </a>
          ))}
        </nav>
      </div>
    </footer>
  )
}
