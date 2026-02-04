import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

export function LoadingScreen() {
  const [visible, setVisible] = useState(true)

  useEffect(() => {
    const hide = () => setVisible(false)
    if (document.readyState === 'complete') {
      const t = setTimeout(hide, 1200)
      return () => clearTimeout(t)
    }
    window.addEventListener('load', () => setTimeout(hide, 1200))
    return () => window.removeEventListener('load', hide)
  }, [])

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          className="fixed inset-0 z-[200] flex flex-col items-center justify-center bg-gradient-to-br from-momiji-brown via-momiji-red/90 to-momiji-brown"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.6, ease: 'easeInOut' }}
        >
          <motion.div
            className="w-20 h-20 rounded-full border-4 border-momiji-gold/60 border-t-momiji-gold"
            animate={{ rotate: 360 }}
            transition={{ duration: 1.2, repeat: Infinity, ease: 'linear' }}
          />
          <motion.p
            className="mt-6 font-display text-xl text-paper/90"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
          >
            Загрузка путешествия…
          </motion.p>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
