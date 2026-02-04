import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ChevronDown, ChevronUp } from 'lucide-react'
import { program } from '../data/program'
import { getImageUrl } from '../utils/imageUrl'

export function ProgramTimeline() {
  const [expandedId, setExpandedId] = useState<string | null>(null)
  return (
    <section id="program" className="py-16 md:py-24 bg-paper">
      <div className="container mx-auto px-4 max-w-4xl">
        <h2 className="font-display text-3xl md:text-4xl font-bold text-momiji-brown text-center mb-2">
          Программа по дням
        </h2>
        <p className="text-stone text-center mb-12">
          11 дней: от Киото до Фудзи
        </p>
        <div className="space-y-4">
          {program.map((day, i) => {
            const isExpanded = expandedId === day.id
            return (
              <motion.article
                key={day.id}
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05 }}
                className="rounded-2xl overflow-hidden bg-white border border-stone/10 shadow-sm hover:shadow-md transition-shadow"
              >
                <button
                  type="button"
                  className="w-full flex flex-col sm:flex-row sm:items-center gap-4 p-5 md:p-6 text-left hover:bg-stone/5 transition-colors touch-manipulation min-h-[52px] sm:min-h-0"
                  onClick={() => setExpandedId(isExpanded ? null : day.id)}
                  aria-expanded={isExpanded}
                >
                  <div className="flex items-center gap-4 shrink-0">
                    <span className="flex h-10 w-10 items-center justify-center rounded-full bg-momiji-orange/15 text-momiji-orange font-semibold text-sm">
                      {i + 1}
                    </span>
                    <div>
                      <p className="font-display font-semibold text-momiji-brown">{day.days}</p>
                      <p className="text-stone text-sm">{day.location}</p>
                    </div>
                  </div>
                  <p className="flex-1 text-stone text-sm sm:text-base line-clamp-2 sm:line-clamp-1">
                    {day.short}
                  </p>
                  <span className="shrink-0 text-momiji-orange">
                    {isExpanded ? <ChevronUp className="w-5 h-5" /> : <ChevronDown className="w-5 h-5" />}
                  </span>
                </button>
                <AnimatePresence>
                  {isExpanded && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.2 }}
                      className="overflow-hidden border-t border-stone/10"
                    >
                      <div className="flex flex-col sm:flex-row gap-4 p-5 md:p-6 pt-4 bg-stone/[0.03]">
                        <img
                          src={getImageUrl(day.image)}
                          alt={day.imageAlt}
                          className="w-full sm:w-48 h-40 sm:h-32 rounded-xl object-cover shrink-0"
                          loading="lazy"
                        />
                        <p className="text-stone text-sm leading-relaxed flex-1">
                          {day.full}
                        </p>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.article>
            )
          })}
        </div>
      </div>
    </section>
  )
}
