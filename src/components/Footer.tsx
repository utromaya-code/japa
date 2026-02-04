const navLinks = [
  { href: '#about', label: 'О поездке' },
  { href: '#locations', label: 'Локации' },
  { href: '#full-program', label: 'Маршрут' },
  { href: '#instructor', label: 'Команда' },
  { href: '#practical', label: 'Инфо' },
  { href: '#faq', label: 'FAQ' },
  { href: '#booking', label: 'Бронь' },
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
