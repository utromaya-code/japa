import { motion } from 'framer-motion'
import type { LocationCard as LocationCardType } from '../data/locations'

export function LocationCard({ location, index }: { location: LocationCardType; index: number }) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{ duration: 0.5, delay: index * 0.08 }}
      className="group relative overflow-hidden rounded-2xl bg-stone shadow-lg"
    >
      <a href={`#${location.id}`} className="block">
        <div className="aspect-[4/3] overflow-hidden">
          <img
            src={location.image}
            alt={location.imageAlt}
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105 group-hover:brightness-90"
            loading="lazy"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-momiji-brown/80 via-transparent to-transparent opacity-60 group-hover:opacity-70 transition-opacity" />
        </div>
        <div className="absolute bottom-0 left-0 right-0 p-5 md:p-6 text-paper">
          <h3 className="font-display text-2xl md:text-3xl font-semibold mb-2">{location.title}</h3>
          <p className="text-paper/90 text-sm md:text-base">{location.description}</p>
        </div>
      </a>
    </motion.article>
  )
}
