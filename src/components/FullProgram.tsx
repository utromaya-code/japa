import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ChevronDown } from 'lucide-react'
import { fullProgramDays } from '../data/fullProgram'
import { getImageUrl } from '../utils/imageUrl'

function formatContent(content: string) {
  return content.split('\n').map((line, i) =>
    line.trim() ? (
      <p key={i} className={i === 0 ? 'font-medium text-momiji-brown' : 'mt-2'}>
        {line}
      </p>
    ) : (
      <br key={i} />
    )
  )
}

export function FullProgram() {
  const [openDay, setOpenDay] = useState<number | null>(1)
  return (
    <section id="full-program" className="py-16 md:py-24 bg-paper">
      <div className="container mx-auto px-4 max-w-3xl">
        <h2 className="font-display text-3xl md:text-4xl font-bold text-momiji-brown text-center mb-2">
          Маршрут путешествия
        </h2>
        <p className="text-stone text-center mb-10">
          Полная программа по дням — раскройте для подробностей
        </p>
        <div className="space-y-2">
          {fullProgramDays.map((item) => {
            const isOpen = openDay === item.day
            return (
              <div
                key={item.day}
                className="rounded-2xl overflow-hidden border border-stone/10 bg-white shadow-sm hover:shadow-md transition-shadow"
              >
                <button
                  type="button"
                  className="w-full flex items-center justify-between gap-3 p-4 md:p-5 min-h-[52px] text-left hover:bg-paper/50 active:bg-paper/30 transition-colors touch-manipulation"
                  onClick={() => setOpenDay(isOpen ? null : item.day)}
                  aria-expanded={isOpen}
                >
                  <span className="font-display font-semibold text-momiji-brown text-base sm:text-lg text-left">
                    {item.title}
                  </span>
                  <ChevronDown
                    className={`w-5 h-5 shrink-0 text-momiji-orange transition-transform ${isOpen ? 'rotate-180' : ''}`}
                  />
                </button>
                <AnimatePresence>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.25 }}
                      className="overflow-hidden"
                    >
                      <div className="border-t border-paper/30">
                        <img
                          src={getImageUrl(item.image)}
                          alt={item.imageAlt}
                          className="w-full aspect-[16/10] object-cover"
                          loading="lazy"
                        />
                        <div className="px-4 pb-4 md:px-5 md:pb-5 pt-4 text-stone text-sm md:text-base leading-relaxed whitespace-pre-line">
                          {formatContent(item.content)}
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
