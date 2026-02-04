import { Calendar, Clock, Users, MapPin, Check, X } from 'lucide-react'
import { motion } from 'framer-motion'
import { AnimatedNumber } from './AnimatedNumber'

const included = [
  'Все внутренние перелёты, переезды и трансферы',
  'Размещение (рёканы, отели, храм-сюкубо)',
  'Сопровождение гида',
]

const excluded = [
  'Международный перелёт',
  'Страховка',
  'Питание (кроме завтраков в отелях и ужина сёдзин-рёри)',
  'Личные расходы',
]

const cards = [
  { icon: Calendar, label: 'Даты', value: '10–20 октября 2026' },
  {
    icon: Clock,
    label: 'Продолжительность',
    valueJsx: (
      <>
        <AnimatedNumber end={11} /> дней / <AnimatedNumber end={10} /> ночей
      </>
    ),
  },
  {
    icon: Users,
    label: 'Группа',
    valueJsx: (
      <>
        до <AnimatedNumber end={15} /> человек
      </>
    ),
  },
  { icon: MapPin, label: 'Маршрут', value: 'Осака → Киото → Коясан → Хоккайдо → Токио' },
]

export function PracticalInfo() {
  return (
    <section id="practical" className="py-16 md:py-24 bg-paper">
      <div className="container mx-auto px-4 max-w-4xl">
        <h2 className="font-display text-3xl md:text-4xl font-bold text-momiji-brown text-center mb-4">
          Практическая информация
        </h2>
        <p className="text-stone text-center mb-12">
          Даты, маршрут и что входит в стоимость
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-12">
          {cards.map((card, i) => (
            <motion.div
              key={card.label}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
              className="flex items-start gap-4 p-5 rounded-xl bg-white border border-paper/30 shadow-sm"
            >
              <card.icon className="w-6 h-6 text-momiji-orange shrink-0 mt-0.5" />
              <div>
                <p className="text-stone text-sm font-medium">{card.label}</p>
                <p className="text-momiji-brown font-semibold">
                  {'valueJsx' in card ? card.valueJsx : card.value}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
        <div className="grid md:grid-cols-2 gap-8">
          <motion.div
            initial={{ opacity: 0, x: -16 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="p-6 rounded-xl bg-white border border-green-200 shadow-sm"
          >
            <h3 className="font-display font-semibold text-lg text-momiji-brown mb-4 flex items-center gap-2">
              <Check className="w-5 h-5 text-green-600" />
              В стоимость включено
            </h3>
            <ul className="space-y-2 text-stone">
              {included.map((item, i) => (
                <li key={i} className="flex gap-2">
                  <span className="text-green-600">•</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 16 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="p-6 rounded-xl bg-white border border-stone/20 shadow-sm"
          >
            <h3 className="font-display font-semibold text-lg text-momiji-brown mb-4 flex items-center gap-2">
              <X className="w-5 h-5 text-stone" />
              Дополнительно оплачивается
            </h3>
            <ul className="space-y-2 text-stone">
              {excluded.map((item, i) => (
                <li key={i} className="flex gap-2">
                  <span className="text-stone">•</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
