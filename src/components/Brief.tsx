import { useInView } from 'react-intersection-observer'
import { motion } from 'framer-motion'

const text =
  'Это уникальное 11-дневное путешествие проведёт вас через контрасты Японии осеннего сезона — от древних храмов Киото, утопающих в багряных кленах, до священных вершин Коясан, где веками живут буддийские монахи в уединении и медитации. Вы ощутите дух первозданного Хоккайдо с действующими вулканами, кальдерными озёрами и горячими источниками.'

export function Brief() {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.2 })
  return (
    <section id="about" className="py-16 md:py-24 bg-paper bg-paper-texture">
      <div ref={ref} className="container mx-auto px-4 max-w-4xl">
        <motion.p
          className="text-momiji-brown text-xl md:text-2xl lg:text-[28px] leading-relaxed text-center"
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
        >
          {text}
        </motion.p>
      </div>
    </section>
  )
}
