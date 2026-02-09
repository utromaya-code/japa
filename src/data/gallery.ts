// Галерея: Киото, Коясан, Хоккайдо (озеро Тойя, Отару, горы), Токио и Фудзи.
// Новые фото Хоккайдо класть в public/images/gallery/ и добавлять сюда с category: 'hokkaido'.

export type GalleryCategory = 'kyoto' | 'koyasan' | 'hokkaido' | 'tokyo'

export interface GalleryImage {
  src: string
  alt: string
  title?: string
  category: GalleryCategory
}

export const galleryImages: GalleryImage[] = [
  // Киото
  { src: 'images/kyoto-bamboo.jpg', alt: 'Киото, бамбуковая роща Арасияма', title: 'Бамбуковая роща Арасияма', category: 'kyoto' },
  { src: 'images/kyoto-kiyomizu.jpg', alt: 'Киото, пагода Киёмидзу и осенние клены', title: 'Киёмидзу и момидзи', category: 'kyoto' },
  { src: 'images/kyoto-maples.jpg', alt: 'Киото, момидзи в Рёан-дзи', title: 'Рёан-дзи, осенние клены', category: 'kyoto' },
  { src: 'images/kyoto-eikando.jpg', alt: 'Киото, храм Эйкан-до, пагода и клены', title: 'Эйкан-до осенью', category: 'kyoto' },
  { src: 'images/kyoto-tofukuji.jpg', alt: 'Киото, сад Тофуку-дзи осенью', title: 'Тофуку-дзи', category: 'kyoto' },
  { src: 'images/kyoto-autumn.jpg', alt: 'Киото осенью', title: 'Киото осенью', category: 'kyoto' },
  // Коясан
  { src: 'images/koyasan-okunoin.jpg', alt: 'Коясан, кладбище Окуно-ин и фонари', title: 'Окуно-ин, Коясан', category: 'koyasan' },
  { src: 'images/koyasan-temple.jpg', alt: 'Храм на горе Койя', title: 'Храм на горе Койя', category: 'koyasan' },
  { src: 'images/koyasan.jpg', alt: 'Коясан, священная гора', title: 'Гора Койя', category: 'koyasan' },
  // Хоккайдо — озеро Тойя, гора Ётэй, Отару, природа
  { src: 'images/hokkaido-yotei.jpg', alt: 'Хоккайдо, гора Ётэй (Эдзо-Фудзи)', title: 'Гора Ётэй', category: 'hokkaido' },
  { src: 'images/lake-toya.jpg', alt: 'Озеро Тойя, вид с побережья', title: 'Озеро Тойя', category: 'hokkaido' },
  { src: 'images/lake-toya-new.jpg', alt: 'Озеро Тойя и окрестности', title: 'Озеро Тойя и вулканы', category: 'hokkaido' },
  { src: 'images/hokkaido.jpg', alt: 'Хоккайдо, первозданная природа', title: 'Хоккайдо', category: 'hokkaido' },
  { src: 'images/hokkaido-new.jpg', alt: 'Горы и природа Хоккайдо', title: 'Горы Хоккайдо', category: 'hokkaido' },
  { src: 'images/otaru-canal.jpg', alt: 'Отару, канал с фонарями', title: 'Канал Отару', category: 'hokkaido' },
  { src: 'images/otaru-new.jpg', alt: 'Отару, портовый город', title: 'Отару', category: 'hokkaido' },
  { src: 'images/otaru-sakaimachi.jpg', alt: 'Отару, улица Сакаимати', title: 'Сакаимати, Отару', category: 'hokkaido' },
  // Хоккайдо — новые фото из gallery/
  { src: 'images/gallery/hokkaido-lake-1.jpg', alt: 'Хоккайдо, озеро и осенние деревья', title: 'Озеро и клены', category: 'hokkaido' },
  { src: 'images/gallery/otaru-harbor-1.jpg', alt: 'Отару, порт и вода', title: 'Порт Отару', category: 'hokkaido' },
  { src: 'images/gallery/otaru-street-1.jpg', alt: 'Отару, городская улица', title: 'Улица Отару', category: 'hokkaido' },
  { src: 'images/gallery/hokkaido-flowers-1.jpg', alt: 'Хоккайдо, цветочные поля и горы', title: 'Цветы и горы', category: 'hokkaido' },
  { src: 'images/gallery/hokkaido-nature-1.jpg', alt: 'Хоккайдо, дорога среди деревьев', title: 'Природа Хоккайдо', category: 'hokkaido' },
  { src: 'images/gallery/hokkaido-city-night-1.jpg', alt: 'Хоккайдо, город у воды ночью', title: 'Город у залива', category: 'hokkaido' },
  // Токио и Фудзи
  { src: 'images/fuji-kawaguchiko.jpg', alt: 'Озеро Кавагутико и Фудзи в сезон момидзи', title: 'Фудзи и Кавагутико', category: 'tokyo' },
  { src: 'images/tokyo-fuji.jpg', alt: 'Вид на Фудзи из Токио', title: 'Фудзи из Токио', category: 'tokyo' },
  { src: 'images/torii-autumn.jpg', alt: 'Тории и осенние клены', title: 'Тории осенью', category: 'tokyo' },
]
