import { useEffect } from 'react'
import { MapContainer, TileLayer, Marker, Popup, Polyline, useMap } from 'react-leaflet'
import L from 'leaflet'
import { motion } from 'framer-motion'

// Маршрут: Осака → Киото → Коясан → (перелёт) Саппоро/Хидака → Озеро Тойя → Отару → (перелёт) Токио → Кавагутико (Фудзи)
const routePoints: [number, number][] = [
  [34.6937, 135.5023],   // Осака
  [35.0116, 135.7681],   // Киото
  [34.2129, 135.5842],   // Коясан
  [42.8, 142.4],         // Хидака (горы)
  [42.6, 140.85],        // Озеро Тойя
  [43.1894, 140.9942],   // Отару
  [35.6762, 139.6503],   // Токио
  [35.4983, 138.7536],   // Кавагутико / Фудзи
]

const markers: { position: [number, number]; label: string; days?: string }[] = [
  { position: [34.6937, 135.5023], label: 'Осака', days: 'Прилёт' },
  { position: [35.0116, 135.7681], label: 'Киото', days: 'День 1–3' },
  { position: [34.2129, 135.5842], label: 'Коясан', days: 'День 4' },
  { position: [42.8, 142.4], label: 'Хоккайдо (Хидака)', days: 'День 5–7' },
  { position: [42.6, 140.85], label: 'Озеро Тойя', days: 'День 8–9' },
  { position: [43.1894, 140.9942], label: 'Отару', days: 'День 10' },
  { position: [35.6762, 139.6503], label: 'Токио', days: 'День 11–13' },
  { position: [35.4983, 138.7536], label: 'Фудзи / Кавагутико', days: 'Опция восхождения' },
]

// Иконка маркера для Leaflet (в Vite путь к default icon может ломаться)
const defaultIcon = L.icon({
  iconUrl: 'https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon.png',
  iconRetinaUrl: 'https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon-2x.png',
  shadowUrl: 'https://unpkg.com/leaflet@1.9.4/dist/images/marker-shadow.png',
  iconSize: [25, 41],
  iconAnchor: [12, 41],
  popupAnchor: [1, -34],
  shadowSize: [41, 41],
})
L.Marker.prototype.options.icon = defaultIcon

function MapFitBounds() {
  const map = useMap()
  useEffect(() => {
    map.fitBounds(L.latLngBounds(routePoints as [number, number][]), { padding: [40, 40], maxZoom: 6 })
  }, [map])
  return null
}

export function JourneyMap() {
  return (
    <section id="map" className="py-16 md:py-24 bg-paper">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-10"
        >
          <h2 className="font-display text-3xl md:text-4xl font-bold text-momiji-brown">
            Карта маршрута
          </h2>
          <p className="text-stone mt-2 max-w-xl mx-auto">
            Осака → Киото → Коясан → Хоккайдо → Озеро Тойя → Отару → Токио → Фудзи
          </p>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="rounded-2xl overflow-hidden border border-stone/20 shadow-xl h-[420px] md:h-[520px] bg-stone/5"
        >
          <MapContainer
            center={[37.5, 138]}
            zoom={5}
            className="h-full w-full"
            scrollWheelZoom={true}
          >
            <TileLayer
              attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>'
              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            <MapFitBounds />
            <Polyline
              positions={routePoints}
              pathOptions={{
                color: '#B91C1C',
                weight: 4,
                opacity: 0.8,
                dashArray: '8 8',
              }}
            />
            {markers.map((m, i) => (
              <Marker key={i} position={m.position}>
                <Popup>
                  <span className="font-semibold text-momiji-brown">{m.label}</span>
                  {m.days && (
                    <span className="block text-stone text-sm">{m.days}</span>
                  )}
                </Popup>
              </Marker>
            ))}
          </MapContainer>
        </motion.div>
      </div>
    </section>
  )
}
