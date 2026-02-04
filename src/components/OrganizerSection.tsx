import { useState } from 'react'
import { useInView } from 'react-intersection-observer'
import { motion } from 'framer-motion'
import { Send } from 'lucide-react'

// Фото организатора: положите файл в public/images/andrey-baranov.png
const ORGANIZER_IMAGE = `${import.meta.env.BASE_URL}images/andrey-baranov.png`
const ORGANIZER_IMAGE_FALLBACK = 'https://images.unsplash.com/photo-1560250097-0b93528c311a?w=600&q=80'

const description = `Координирует маршрут, связь с участниками и ответы на все вопросы по поездке. По вопросам бронирования и программы пишите в Telegram — отвечу в течение дня.`

export function OrganizerSection() {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.15 })
  const [imgSrc, setImgSrc] = useState(ORGANIZER_IMAGE)
  const handleImgError = () => setImgSrc(ORGANIZER_IMAGE_FALLBACK)

  return (
    <section
      id="organizer"
      className="relative py-16 md:py-24 bg-white border-y border-stone/10"
      aria-labelledby="organizer-heading"
    >
      <div className="container mx-auto px-4 max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-10"
        >
          <span className="inline-block text-maple-accent font-display font-semibold text-sm uppercase tracking-widest mb-2">
            Связь и бронирование
          </span>
          <h2
            id="organizer-heading"
            className="font-display text-3xl md:text-4xl font-bold text-momiji-brown"
          >
            Организатор путешествия
          </h2>
        </motion.div>
        <motion.div
          ref={ref}
          className="flex flex-col md:flex-row gap-8 md:gap-12 items-center md:items-start bg-paper/50 rounded-3xl p-8 md:p-10 border border-stone/10 shadow-sm"
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <div className="w-full md:w-72 shrink-0 mx-auto md:mx-0">
            <img
              src={imgSrc}
              alt="Андрей Баранов — организатор путешествия"
              className="rounded-2xl w-full aspect-square object-cover shadow-lg ring-2 ring-maple-accent/20"
              loading="lazy"
              onError={handleImgError}
            />
          </div>
          <div className="flex-1 text-center md:text-left">
            <h3 className="font-display text-2xl md:text-3xl font-bold text-momiji-brown mb-2">
              Андрей Баранов
            </h3>
            <p className="text-stone leading-relaxed mb-6 max-w-xl mx-auto md:mx-0">
              {description}
            </p>
            <a
              href="https://t.me/vsemaya"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl font-semibold bg-momiji-orange hover:bg-maple-accent text-white shadow-md hover:shadow-lg transition-all duration-300 hover:scale-[1.02] active:scale-[0.98]"
            >
              <Send className="w-5 h-5" />
              Написать в Telegram: @vsemaya
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
