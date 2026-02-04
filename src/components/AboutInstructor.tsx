import { useState } from 'react'
import { useInView } from 'react-intersection-observer'
import { motion } from 'framer-motion'
import { Quote } from 'lucide-react'

const INSTRUCTOR_IMAGE_LOCAL = '/images/leonid-kutuzov.png'
const INSTRUCTOR_IMAGE_FALLBACK = 'https://images.unsplash.com/photo-1545205597-3d9d02c29597?w=600&q=80'

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
  'Практики управления эмоциями через работу с центрами положительных и отрицательных эмоций',
]

export function AboutInstructor() {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.15 })
  const [imgSrc, setImgSrc] = useState(INSTRUCTOR_IMAGE_LOCAL)
  const handleImgError = () => setImgSrc(INSTRUCTOR_IMAGE_FALLBACK)
  return (
    <section
      id="instructor"
      className="relative py-20 md:py-28 overflow-hidden bg-paper"
      aria-labelledby="instructor-heading"
    >
      <div className="absolute inset-0 bg-stone/5" aria-hidden />
      <div
        className="absolute inset-0 opacity-[0.06] bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: "url('/images/leonid-kutuzov.png')" }}
        aria-hidden
      />
      <div
        className="absolute inset-0 opacity-[0.06] bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${INSTRUCTOR_IMAGE_LOCAL})` }}
        aria-hidden
      />
      <div className="relative z-10 container mx-auto px-4 max-w-5xl">
        <div className="text-center mb-12">
          <span className="inline-block text-maple-accent font-display font-semibold text-sm uppercase tracking-widest mb-2">
            Ваш проводник
          </span>
          <h2
            id="instructor-heading"
            className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-momiji-brown"
          >
            Леонид Кутузов
          </h2>
          <p className="text-stone text-lg md:text-xl mt-2">
            Президент Федерации Йоги Санкт-Петербурга
          </p>
        </div>
        <motion.div
          ref={ref}
          className="flex flex-col lg:flex-row gap-12 lg:gap-16 items-start bg-white rounded-3xl p-8 md:p-10 lg:p-12 border border-stone/10 shadow-lg"
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <div className="w-full lg:w-96 shrink-0 mx-auto lg:mx-0">
            <img
              src={imgSrc}
              alt="Леонид Кутузов — инструктор путешествия"
              className="rounded-2xl w-full aspect-[3/4] object-cover shadow-xl ring-2 ring-maple-accent/20"
              loading="lazy"
              onError={handleImgError}
            />
          </div>
          <div className="flex-1 space-y-8">
            <div>
              <h3 className="font-display font-semibold text-maple-accent text-lg mb-3">
                Опыт и образование
              </h3>
              <ul className="space-y-2 text-momiji-brown">
                {bullets.map((item, i) => (
                  <li key={i} className="flex gap-2">
                    <span className="text-maple-accent shrink-0">•</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="font-display font-semibold text-amber text-lg mb-3">
                Практики во время путешествия
              </h3>
              <ul className="space-y-2 text-momiji-brown">
                {practices.map((item, i) => (
                  <li key={i} className="flex gap-2">
                    <span className="text-amber shrink-0">•</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <blockquote className="relative border-l-4 border-maple-accent pl-6 py-2 bg-stone/5 rounded-r-xl">
              <Quote className="absolute -left-1 top-2 w-8 h-8 text-maple-accent/20" aria-hidden />
              <p className="text-momiji-brown text-lg md:text-xl italic leading-relaxed">
                «Путешествие в Японию в сезон момидзи — это возможность соединить практику с красотой природы и древней культурой. От храмов Киото до священной Фудзи мы идём вместе».
              </p>
              <cite className="not-italic text-stone text-sm mt-2 block">— Леонид Кутузов</cite>
            </blockquote>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
