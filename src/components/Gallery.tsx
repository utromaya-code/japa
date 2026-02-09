import { useState, useRef } from 'react'
import Lightbox from 'yet-another-react-lightbox'
import 'yet-another-react-lightbox/styles.css'
import { galleryImages, type GalleryCategory } from '../data/gallery'
import { motion } from 'framer-motion'
import { getImageUrl } from '../utils/imageUrl'
import { ChevronLeft, ChevronRight } from 'lucide-react'

const CARD_WIDTH = 280
const GAP = 16

const CATEGORIES: { id: GalleryCategory | 'all'; label: string }[] = [
  { id: 'all', label: 'Все' },
  { id: 'kyoto', label: 'Киото' },
  { id: 'koyasan', label: 'Коясан' },
  { id: 'hokkaido', label: 'Хоккайдо' },
  { id: 'tokyo', label: 'Токио' },
]

export function Gallery() {
  const [index, setIndex] = useState(-1)
  const [filter, setFilter] = useState<GalleryCategory | 'all'>('all')
  const scrollRef = useRef<HTMLDivElement>(null)

  const filteredImages =
    filter === 'all'
      ? galleryImages
      : galleryImages.filter((img) => img.category === filter)

  const slides = galleryImages.map((img) => ({ src: getImageUrl(img.src), alt: img.alt }))

  const openAt = (img: (typeof galleryImages)[number]) => {
    const i = galleryImages.findIndex((x) => x.src === img.src)
    setIndex(i >= 0 ? i : -1)
  }

  const scroll = (dir: 'left' | 'right') => {
    if (!scrollRef.current) return
    const step = CARD_WIDTH + GAP
    scrollRef.current.scrollBy({ left: dir === 'left' ? -step : step, behavior: 'smooth' })
  }

  return (
    <section id="gallery" className="py-16 md:py-24 bg-paper">
      <div className="container mx-auto px-4">
        <h2 className="font-display text-3xl md:text-4xl font-bold text-momiji-brown text-center mb-4">
          Галерея
        </h2>
        <p className="text-stone text-center mb-6">
          Ключевые места маршрута — листайте влево/вправо
        </p>

        <div className="flex flex-wrap justify-center gap-2 mb-8">
          {CATEGORIES.map((cat) => (
            <button
              key={cat.id}
              type="button"
              onClick={() => setFilter(cat.id)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                filter === cat.id
                  ? 'bg-momiji-brown text-paper'
                  : 'bg-white/80 text-momiji-brown border border-stone/20 hover:bg-momiji-gold/20'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        <div className="relative">
          <button
            type="button"
            onClick={() => scroll('left')}
            className="absolute left-0 top-1/2 -translate-y-1/2 z-10 w-10 h-10 md:w-12 md:h-12 rounded-full bg-white/90 shadow-lg border border-stone/10 flex items-center justify-center text-momiji-brown hover:bg-momiji-gold/20 transition-colors -ml-2 md:ml-0"
            aria-label="Предыдущее фото"
          >
            <ChevronLeft className="w-5 h-5 md:w-6 md:h-6" />
          </button>
          <button
            type="button"
            onClick={() => scroll('right')}
            className="absolute right-0 top-1/2 -translate-y-1/2 z-10 w-10 h-10 md:w-12 md:h-12 rounded-full bg-white/90 shadow-lg border border-stone/10 flex items-center justify-center text-momiji-brown hover:bg-momiji-gold/20 transition-colors -mr-2 md:mr-0"
            aria-label="Следующее фото"
          >
            <ChevronRight className="w-5 h-5 md:w-6 md:h-6" />
          </button>

          <div
            ref={scrollRef}
            className="flex gap-4 overflow-x-auto overflow-y-hidden py-2 px-1 snap-x snap-mandatory scroll-smooth hide-scrollbar"
            style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
          >
            {filteredImages.map((img, i) => (
              <motion.button
                key={img.src}
                type="button"
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: Math.min(i * 0.05, 0.4) }}
                className="group flex-shrink-0 w-[260px] md:w-[280px] snap-center focus:ring-2 focus:ring-momiji-orange focus:ring-offset-2 rounded-xl overflow-hidden relative"
                onClick={() => openAt(img)}
              >
                <div className="aspect-[4/3] rounded-xl overflow-hidden bg-stone/10">
                  <img
                    src={getImageUrl(img.src)}
                    alt={img.alt}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                    loading="lazy"
                  />
                </div>
                <div
                  className="absolute inset-x-0 bottom-0 rounded-b-xl bg-gradient-to-t from-black/80 to-transparent p-3 pt-8 text-white opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none"
                  aria-hidden
                >
                  <span className="font-medium text-sm">
                    {img.title ?? img.alt}
                  </span>
                </div>
              </motion.button>
            ))}
          </div>
        </div>
      </div>
      <style>{`
        .hide-scrollbar::-webkit-scrollbar { display: none; }
      `}</style>
      <Lightbox
        open={index >= 0}
        close={() => setIndex(-1)}
        index={index}
        slides={slides}
      />
    </section>
  )
}
