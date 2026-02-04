import { useState } from 'react'
import Lightbox from 'yet-another-react-lightbox'
import 'yet-another-react-lightbox/styles.css'
import { galleryImages } from '../data/gallery'
import { motion } from 'framer-motion'

export function Gallery() {
  const [index, setIndex] = useState(-1)
  const slides = galleryImages.map((img) => ({ src: img.src, alt: img.alt }))
  return (
    <section id="gallery" className="py-16 md:py-24 bg-paper">
      <div className="container mx-auto px-4">
        <h2 className="font-display text-3xl md:text-4xl font-bold text-momiji-brown text-center mb-4">
          Галерея
        </h2>
        <p className="text-stone text-center mb-12">
          Ключевые места маршрута
        </p>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-3 md:gap-4">
          {galleryImages.map((img, i) => (
            <motion.button
              key={i}
              type="button"
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.04 }}
              className="aspect-square rounded-xl overflow-hidden focus:ring-2 focus:ring-momiji-orange focus:ring-offset-2"
              onClick={() => setIndex(i)}
            >
              <img
                src={img.src}
                alt={img.alt}
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                loading="lazy"
              />
            </motion.button>
          ))}
        </div>
      </div>
      <Lightbox
        open={index >= 0}
        close={() => setIndex(-1)}
        index={index}
        slides={slides}
      />
    </section>
  )
}
