import { motion } from 'framer-motion'
import { ChevronDown } from 'lucide-react'

// Киото, момидзи — осенние клены у храма
const HERO_IMAGE = 'https://images.unsplash.com/photo-1545569341-9eb8b30979d9?w=1920&q=85'

export function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex flex-col justify-end pb-20 md:pb-28 bg-momiji-brown"
    >
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${HERO_IMAGE})` }}
      />
      <div
        className="absolute inset-0 bg-gradient-to-t from-paper via-paper/95 to-transparent"
        aria-hidden
      />
      <div className="relative z-10 container mx-auto px-4 text-center text-momiji-brown">
        <motion.h1
          className="font-display text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight mb-4"
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
        >
          Путешествие в Японию
          <br />
          <span className="text-maple-accent">с Леонидом Кутузовым</span>
        </motion.h1>
        <motion.p
          className="text-sm sm:text-lg md:text-2xl text-stone mb-2 px-1"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          10–20 октября 2026 • Киото • Коясан • Хоккайдо • Отару • Токио • Фудзи
        </motion.p>
        <motion.p
          className="text-momiji-brown/90 text-base sm:text-lg max-w-2xl mx-auto mb-10"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.35 }}
        >
          Авторское путешествие в золотой месяц момидзи — от священных храмов до диких вулканов
        </motion.p>
        <motion.div
          className="flex flex-col sm:flex-row gap-4 justify-center items-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
        >
          <a
            href="#booking"
            className="w-full sm:w-auto min-w-0 sm:min-w-[200px] px-8 py-4 min-h-[48px] flex items-center justify-center rounded-lg font-semibold bg-maple-accent hover:bg-momiji-red text-white transition-colors shadow-lg touch-manipulation"
          >
            Забронировать место
          </a>
          <a
            href="#program"
            className="w-full sm:w-auto min-w-0 sm:min-w-[200px] px-8 py-4 min-h-[48px] flex items-center justify-center rounded-lg font-semibold border-2 border-momiji-brown text-momiji-brown hover:bg-momiji-brown/5 transition-colors touch-manipulation"
          >
            Программа путешествия
          </a>
        </motion.div>
      </div>
      <a
        href="#about"
        className="absolute bottom-6 left-1/2 -translate-x-1/2 text-momiji-brown/70 hover:text-momiji-brown transition-colors"
        aria-label="Прокрутить вниз"
      >
        <ChevronDown className="w-8 h-8" />
      </a>
    </section>
  )
}
