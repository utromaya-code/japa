import { motion } from 'framer-motion'
import { Send } from 'lucide-react'
import { TELEGRAM_BOOKING_LINK } from '../constants'

export function ContactForm() {
  return (
    <section id="booking" className="py-16 md:py-24 bg-paper">
      <div className="container mx-auto px-4 max-w-2xl text-center">
        <h2 className="font-display text-3xl md:text-4xl font-bold text-momiji-brown mb-4">
          Забронировать место
        </h2>
        <p className="text-stone mb-6">
          Напишите нам в Telegram — мы ответим и оформим бронь
        </p>
        <p className="text-momiji-brown font-medium mb-10">
          Лучшие условия для первых пяти участников — минимальная стоимость.
        </p>
        <motion.a
          href={TELEGRAM_BOOKING_LINK}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-3 px-10 py-5 rounded-xl font-semibold text-lg bg-momiji-orange hover:bg-maple-accent text-white shadow-lg hover:shadow-xl transition-colors"
          whileHover={{ scale: 1.03 }}
          whileTap={{ scale: 0.98 }}
        >
          <Send className="w-6 h-6 shrink-0" />
          Забронировать место
        </motion.a>
      </div>
    </section>
  )
}
