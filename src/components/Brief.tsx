import { useInView } from 'react-intersection-observer'
import { motion } from 'framer-motion'
import { fullProgramIntro } from '../data/fullProgram'

export function Brief() {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.2 })
  return (
    <section id="about" className="relative z-20 py-16 md:py-24 bg-paper">
      <div ref={ref} className="container mx-auto px-4 max-w-4xl">
        <motion.p
          className="text-momiji-brown text-lg md:text-xl lg:text-2xl leading-relaxed text-center"
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
        >
          {fullProgramIntro}
        </motion.p>
      </div>
    </section>
  )
}
