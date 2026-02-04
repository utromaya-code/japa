import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ChevronDown } from 'lucide-react'
import { features } from '../data/features'

export function UniqueFeatures() {
  const [openId, setOpenId] = useState<string | null>(features[0]?.id ?? null)
  return (
    <section id="features" className="py-16 md:py-24 bg-paper">
      <div className="container mx-auto px-4 max-w-3xl">
        <h2 className="font-display text-3xl md:text-4xl font-bold text-momiji-brown text-center mb-2">
          10 уникальных особенностей
        </h2>
        <p className="text-stone text-center mb-10">
          Почему это путешествие особенное
        </p>
        <div className="space-y-3">
          {features.map((item, i) => {
            const isOpen = openId === item.id
            return (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 8 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.04 }}
                className="rounded-2xl overflow-hidden bg-white border border-stone/10 shadow-sm hover:shadow-md transition-shadow"
              >
                <button
                  type="button"
                  className="w-full flex items-center gap-3 p-4 md:p-5 text-left hover:bg-stone/5 transition-colors text-momiji-brown"
                  onClick={() => setOpenId(isOpen ? null : item.id)}
                  aria-expanded={isOpen}
                >
                  <span className="text-2xl" aria-hidden>{item.icon}</span>
                  <span className="font-display font-semibold text-lg flex-1">{item.title}</span>
                  <ChevronDown
                    className={`w-5 h-5 shrink-0 text-maple-accent transition-transform ${isOpen ? 'rotate-180' : ''}`}
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
                      <p className="px-4 pb-4 md:px-5 md:pb-5 text-stone text-sm md:text-base leading-relaxed border-t border-stone/10 pt-3">
                        {item.content}
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
