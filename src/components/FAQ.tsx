import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ChevronDown } from 'lucide-react'
import { faqItems } from '../data/faq'

export function FAQ() {
  const [openId, setOpenId] = useState<string | null>(null)
  return (
    <section id="faq" className="py-16 md:py-24 bg-momiji-brown text-paper">
      <div className="container mx-auto px-4 max-w-2xl">
        <h2 className="font-display text-3xl md:text-4xl font-bold text-center mb-4">
          Частые вопросы
        </h2>
        <p className="text-mist/90 text-center mb-12">
          Ответы на типичные вопросы о путешествии
        </p>
        <div className="space-y-2">
          {faqItems.map((item) => {
            const isOpen = openId === item.id
            return (
              <div
                key={item.id}
                className="rounded-xl overflow-hidden bg-momiji-brown/80 border border-paper/10"
              >
                <button
                  type="button"
                  className="w-full flex items-center justify-between gap-3 p-4 md:p-5 text-left hover:bg-paper/5 transition-colors"
                  onClick={() => setOpenId(isOpen ? null : item.id)}
                  aria-expanded={isOpen}
                >
                  <span className="font-semibold text-paper">{item.question}</span>
                  <ChevronDown
                    className={`w-5 h-5 shrink-0 transition-transform ${isOpen ? 'rotate-180' : ''}`}
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
                      <p className="px-4 pb-4 md:px-5 md:pb-5 text-paper/85 text-sm md:text-base leading-relaxed border-t border-paper/10 pt-3">
                        {item.answer}
                      </p>
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
