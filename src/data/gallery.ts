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
  // Коясан (Окуно-ин и храм на горе Койя — одна фото, оставлена Окуно-ин)
  { src: 'images/koyasan-okunoin.jpg', alt: 'Коясан, кладбище Окуно-ин и фонари', title: 'Окуно-ин, Коясан', category: 'koyasan' },
  { src: 'images/koyasan.jpg', alt: 'Коясан, священная гора', title: 'Гора Койя', category: 'koyasan' },
  // Хоккайдо — озеро Тойя, гора Ётэй, Отару (без снега)
  { src: 'images/hokkaido-yotei.jpg', alt: 'Хоккайдо, гора Ётэй (Эдзо-Фудзи)', title: 'Гора Ётэй', category: 'hokkaido' },
  { src: 'images/lake-toya.jpg', alt: 'Озеро Тойя, вид с побережья', title: 'Озеро Тойя', category: 'hokkaido' },
  { src: 'images/lake-toya-new.jpg', alt: 'Озеро Тойя и окрестности', title: 'Озеро Тойя и вулканы', category: 'hokkaido' },
  { src: 'images/hokkaido-new.jpg', alt: 'Горы и природа Хоккайдо', title: 'Горы Хоккайдо', category: 'hokkaido' },
  { src: 'images/otaru-canal.jpg', alt: 'Отару, канал с фонарями', title: 'Канал Отару', category: 'hokkaido' },
  { src: 'images/otaru-new.jpg', alt: 'Отару, портовый город', title: 'Отару', category: 'hokkaido' },
  // Хоккайдо — фото из gallery/ (оставлены без снега)
  { src: 'images/gallery/hokkaido-flowers-1.jpg', alt: 'Хоккайдо, цветочные поля и горы', title: 'Цветы и горы', category: 'hokkaido' },
  { src: 'images/gallery/hokkaido-city-night-1.jpg', alt: 'Хоккайдо, город у воды ночью', title: 'Город у залива', category: 'hokkaido' },
  // Токио и Фудзи
  { src: 'images/fuji-kawaguchiko.jpg', alt: 'Озеро Кавагутико и Фудзи в сезон момидзи', title: 'Фудзи и Кавагутико', category: 'tokyo' },
  { src: 'images/tokyo-fuji.jpg', alt: 'Вид на Фудзи из Токио', title: 'Фудзи из Токио', category: 'tokyo' },
  { src: 'images/torii-autumn.jpg', alt: 'Тории и осенние клены', title: 'Тории осенью', category: 'tokyo' },
  // Авторские фотографии (Новая папка с объектами)
  { src: 'images/gallery/author-01.jpg', alt: 'Авторское фото из путешествия', title: 'Авторское фото', category: 'tokyo' },
  { src: 'images/gallery/author-02.jpg', alt: 'Авторское фото из путешествия', title: 'Авторское фото', category: 'tokyo' },
  { src: 'images/gallery/author-03.jpg', alt: 'Авторское фото из путешествия', title: 'Авторское фото', category: 'tokyo' },
  { src: 'images/gallery/author-04.jpg', alt: 'Авторское фото из путешествия', title: 'Авторское фото', category: 'tokyo' },
  { src: 'images/gallery/author-05.jpg', alt: 'Авторское фото из путешествия', title: 'Авторское фото', category: 'tokyo' },
  { src: 'images/gallery/author-06.jpg', alt: 'Авторское фото из путешествия', title: 'Авторское фото', category: 'tokyo' },
  { src: 'images/gallery/author-07.jpg', alt: 'Авторское фото из путешествия', title: 'Авторское фото', category: 'tokyo' },
  { src: 'images/gallery/author-08.jpg', alt: 'Авторское фото из путешествия', title: 'Авторское фото', category: 'tokyo' },
  { src: 'images/gallery/author-09.jpg', alt: 'Авторское фото из путешествия', title: 'Авторское фото', category: 'tokyo' },
  { src: 'images/gallery/author-10.jpg', alt: 'Авторское фото из путешествия', title: 'Авторское фото', category: 'tokyo' },
]
