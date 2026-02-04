import { motion } from 'framer-motion'
import type { LocationCard as LocationCardType } from '../data/locations'

export function LocationCard({ location, index }: { location: LocationCardType; index: number }) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{ duration: 0.5, delay: index * 0.08 }}
      whileHover={{ scale: 1.02 }}
      className="group relative overflow-hidden rounded-2xl bg-white shadow-md border-2 border-transparent hover:border-momiji-gold/60 hover:shadow-[0_20px_50px_rgba(139,0,0,0.2)] transition-all duration-300 ease-out"
    >
      <a href={`#${location.id}`} className="block">
        <div className="aspect-[4/3] overflow-hidden">
          <img
            src={location.image}
            alt={location.imageAlt}
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
            loading="lazy"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-transparent to-transparent group-hover:from-black/80 transition-colors duration-300" />
        </div>
        <div className="absolute bottom-0 left-0 right-0 p-5 md:p-6 text-paper">
          <h3 className="font-display text-2xl md:text-3xl font-semibold mb-2">{location.title}</h3>
          <p className="text-paper/90 text-sm md:text-base">{location.description}</p>
        </div>
      </a>
    </motion.article>
  )
}
