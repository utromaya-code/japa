import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ChevronDown, ChevronUp } from 'lucide-react'
import { program } from '../data/program'

export function ProgramTimeline() {
  const [expandedId, setExpandedId] = useState<string | null>(null)
  return (
    <section id="program" className="py-16 md:py-24 bg-paper">
      <div className="container mx-auto px-4 max-w-4xl">
        <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-momiji-brown text-center mb-4">
          Программа по дням
        </h2>
        <p className="text-stone text-center mb-12">
          11 дней: от Киото до Фудзи
        </p>
        <div className="relative">
          <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-0.5 bg-momiji-orange/30 -translate-x-1/2 hidden md:block" />
          {program.map((day, i) => {
            const isExpanded = expandedId === day.id
            const isLeft = i % 2 === 0
            return (
              <motion.div
                key={day.id}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
                className={`relative flex flex-col md:flex-row md:items-stretch gap-4 mb-8 md:mb-12 ${
                  isLeft ? 'md:flex-row' : 'md:flex-row-reverse'
                }`}
              >
                <div className="md:w-1/2 md:pr-12 md:pl-0 md:text-right flex flex-col md:items-end">
                  <div className="flex items-center gap-3 md:flex-row-reverse">
                    <div className="w-8 h-8 rounded-full bg-momiji-orange border-4 border-paper shrink-0 z-10" />
                    <div>
                      <p className="font-display font-semibold text-momiji-red">{day.days}</p>
                      <p className="text-stone font-medium">{day.location}</p>
                    </div>
                  </div>
                </div>
                <div className="md:w-1/2 md:pl-12 md:pr-0 md:text-left">
                  <div className="rounded-xl overflow-hidden bg-white shadow-md border border-paper/20">
                    <img
                      src={day.image}
                      alt={day.imageAlt}
                      className="w-full h-40 object-cover"
                      loading="lazy"
                    />
                    <div className="p-4">
                      <p className="text-momiji-brown text-sm md:text-base">{day.short}</p>
                      <button
                        type="button"
                        className="mt-3 flex items-center gap-1 text-momiji-orange font-medium text-sm hover:underline"
                        onClick={() => setExpandedId(isExpanded ? null : day.id)}
                      >
                        {isExpanded ? (
                          <>
                            Свернуть <ChevronUp className="w-4 h-4" />
                          </>
                        ) : (
                          <>
                            Подробнее <ChevronDown className="w-4 h-4" />
                          </>
                        )}
                      </button>
                      <AnimatePresence>
                        {isExpanded && (
                          <motion.p
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: 'auto', opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            className="mt-3 text-stone text-sm leading-relaxed border-t border-paper/20 pt-3"
                          >
                            {day.full}
                          </motion.p>
                        )}
                      </AnimatePresence>
                    </div>
                  </div>
                </div>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
