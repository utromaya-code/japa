import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ChevronDown } from 'lucide-react'
import { features } from '../data/features'

export function UniqueFeatures() {
  const [openId, setOpenId] = useState<string | null>(features[0]?.id ?? null)
  return (
    <section id="features" className="py-16 md:py-24 bg-momiji-brown text-paper">
      <div className="container mx-auto px-4 max-w-3xl">
        <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-center mb-4">
          10 уникальных особенностей
        </h2>
        <p className="text-mist/90 text-center mb-12">
          Почему это путешествие особенное
        </p>
        <div className="space-y-2">
          {features.map((item, i) => {
            const isOpen = openId === item.id
            return (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, x: -12 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05 }}
                className="rounded-xl overflow-hidden bg-momiji-brown/80 border border-paper/10"
              >
                <button
                  type="button"
                  className="w-full flex items-center gap-3 p-4 md:p-5 text-left hover:bg-paper/5 transition-colors"
                  onClick={() => setOpenId(isOpen ? null : item.id)}
                  aria-expanded={isOpen}
                >
                  <span className="text-2xl" aria-hidden>{item.icon}</span>
                  <span className="font-display font-semibold text-lg flex-1">{item.title}</span>
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
