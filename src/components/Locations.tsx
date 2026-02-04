import { locations } from '../data/locations'
import { LocationCard } from './LocationCard'

export function Locations() {
  return (
    <section id="locations" className="py-16 md:py-24 bg-paper">
      <div className="container mx-auto px-4">
        <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-momiji-brown text-center mb-4">
          Основные локации
        </h2>
        <p className="text-stone text-center max-w-2xl mx-auto mb-12">
          Маршрут от древней столицы до священной Фудзи
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {locations.map((loc, i) => (
            <LocationCard key={loc.id} location={loc} index={i} />
          ))}
        </div>
      </div>
    </section>
  )
}
