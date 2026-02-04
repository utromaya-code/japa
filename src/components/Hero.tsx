import { motion } from 'framer-motion'
import { ChevronDown } from 'lucide-react'
import { FallingLeaves } from './FallingLeaves'

const HERO_IMAGE = 'https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?w=1920&q=85'

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
        className="absolute inset-0 bg-gradient-to-t from-momiji-brown/95 via-momiji-brown/50 to-transparent"
        aria-hidden
      />
      <FallingLeaves />
      <div className="relative z-10 container mx-auto px-4 text-center text-paper">
        <motion.h1
          className="font-display text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight mb-4"
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
        >
          Путешествие в Японию
          <br />
          <span className="text-momiji-gold">с Леонидом Кутузовым</span>
        </motion.h1>
        <motion.p
          className="text-lg sm:text-xl md:text-2xl text-mist/95 mb-2"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          10–20 октября 2026 • Киото • Коясан • Хоккайдо • Отару • Токио • Фудзи
        </motion.p>
        <motion.p
          className="text-paper/90 text-base sm:text-lg max-w-2xl mx-auto mb-10"
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
            className="min-w-[200px] px-8 py-4 rounded-lg font-semibold bg-momiji-orange hover:bg-maple-accent text-white transition-colors shadow-lg"
          >
            Забронировать место
          </a>
          <a
            href="#program"
            className="min-w-[200px] px-8 py-4 rounded-lg font-semibold border-2 border-paper/80 text-paper hover:bg-paper/10 transition-colors"
          >
            Программа путешествия
          </a>
        </motion.div>
      </div>
      <motion.a
        href="#about"
        className="absolute bottom-6 left-1/2 -translate-x-1/2 text-paper/70 hover:text-paper transition-colors"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1 }}
        aria-label="Прокрутить вниз"
      >
        <ChevronDown className="w-8 h-8 animate-bounce" />
      </motion.a>
    </section>
  )
}
