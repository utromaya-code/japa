import { useInView } from 'react-intersection-observer'
import { motion } from 'framer-motion'

const INSTRUCTOR_IMAGE = 'https://images.unsplash.com/photo-1545205597-3d9d02c29597?w=600&q=80'

const bullets = [
  'Практикует йогу с 1998 года, преподаёт с 2000',
  'Окончил институт «Прикладной неврологии» (Франция) и биофак МГУ',
  'Совладелец центра оздоровления «Сфера»',
  'Преподаватель фридайвинга и йоги',
  '15+ лет проводит выездные ретриты по всему миру',
]

const practices = [
  'Медитация на природе в горах и храмах',
  'Работа с вниманием и осознанностью',
  'Дыхательные техники для восхождений',
  'Лекции о нейрофизиологии медитации',
  'Интеграция йоги и путешествия',
]

export function AboutInstructor() {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.15 })
  return (
    <section id="instructor" className="py-16 md:py-24 bg-momiji-brown text-paper">
      <div ref={ref} className="container mx-auto px-4 max-w-5xl">
        <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-center mb-4">
          О Леониде Кутузове
        </h2>
        <p className="text-mist/90 text-center mb-12">
          Президент Федерации Йоги Санкт-Петербурга
        </p>
        <motion.div
          className="flex flex-col lg:flex-row gap-10 lg:gap-14 items-start"
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <div className="w-full lg:w-80 shrink-0">
            <img
              src={INSTRUCTOR_IMAGE}
              alt="Леонид Кутузов — инструктор путешествия"
              className="rounded-2xl w-full aspect-[3/4] object-cover shadow-xl"
              loading="lazy"
            />
          </div>
          <div className="flex-1 space-y-6">
            <ul className="space-y-2 text-paper/90">
              {bullets.map((item, i) => (
                <li key={i} className="flex gap-2">
                  <span className="text-momiji-gold">•</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
            <div>
              <h3 className="font-display font-semibold text-lg text-momiji-gold mb-2">
                Практики во время путешествия
              </h3>
              <ul className="space-y-2 text-paper/90">
                {practices.map((item, i) => (
                  <li key={i} className="flex gap-2">
                    <span className="text-amber">•</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <blockquote className="border-l-4 border-momiji-gold pl-4 italic text-paper/85">
              «Путешествие в Японию в сезон момидзи — это возможность соединить практику с красотой природы и древней культурой. От храмов Киото до священной Фудзи мы идём вместе».
            </blockquote>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
