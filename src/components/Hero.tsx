import { motion, useScroll, useTransform } from 'framer-motion'
import { ChevronDown } from 'lucide-react'

const HERO_IMAGE = `${import.meta.env.BASE_URL}images/hero-temple.jpg`

export function Hero() {
  const { scrollY } = useScroll()
  const backgroundY = useTransform(scrollY, [0, 500], [0, 40])
  const contentOpacity = useTransform(scrollY, [0, 400], [1, 0])
  const contentY = useTransform(scrollY, [0, 400], [0, 30])

  return (
    <section
      id="hero"
      className="relative min-h-screen flex flex-col justify-end pb-20 md:pb-28 bg-momiji-brown overflow-hidden"
    >
      <motion.div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${HERO_IMAGE})`, y: backgroundY }}
        aria-hidden
      />
      <div
        className="absolute inset-0 bg-gradient-to-t from-paper via-paper/98 to-transparent"
        aria-hidden
      />
      <motion.div
        className="relative z-10 container mx-auto px-4 text-center text-momiji-brown"
        style={{ opacity: contentOpacity, y: contentY }}
      >
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
          <motion.a
            href="#booking"
            className="w-full sm:w-auto min-w-0 sm:min-w-[200px] px-8 py-4 min-h-[48px] flex items-center justify-center rounded-lg font-semibold bg-maple-accent hover:bg-momiji-red text-white shadow-lg touch-manipulation"
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.98 }}
            transition={{ duration: 0.2 }}
          >
            Забронировать место
          </motion.a>
          <motion.a
            href="#full-program"
            className="w-full sm:w-auto min-w-0 sm:min-w-[200px] px-8 py-4 min-h-[48px] flex items-center justify-center rounded-lg font-semibold border-2 border-momiji-brown text-momiji-brown hover:bg-momiji-brown/5 touch-manipulation"
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.98 }}
            transition={{ duration: 0.2 }}
          >
            Программа путешествия
          </motion.a>
        </motion.div>
      </motion.div>
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
