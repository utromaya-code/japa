export interface LocationCard {
  id: string
  title: string
  description: string
  image: string
  imageAlt: string
}

// Все фото локальные (public/images/)
export const locations: LocationCard[] = [
  {
    id: 'kyoto',
    title: 'Киото',
    description: '2 дня в древней столице среди 2000+ храмов и пылающих кленов',
    image: 'images/kyoto-kiyomizu.jpg',
    imageAlt: 'Киото, пагода Кийомидзу и момидзи',
  },
  {
    id: 'koyasan',
    title: 'Коясан',
    description: 'Ночь в буддийском храме, вечное Самадхи Кукая и 1200 лет традиций',
    image: 'images/koyasan-okunoin.jpg',
    imageAlt: 'Коясан, Окуно-ин',
  },
  {
    id: 'hokkaido',
    title: 'Хоккайдо (Хидака)',
    description: 'Дикие горы айнов, первозданные леса и священные вершины',
    image: 'images/hokkaido-yotei.jpg',
    imageAlt: 'Хоккайдо, гора Ётэй',
  },
  {
    id: 'toya',
    title: 'Озеро Тойя',
    description: 'Действующие вулканы, геотермальная долина и онсены с видом на Эдзо-Фудзи',
    image: 'images/lake-toya-new.jpg',
    imageAlt: 'Озеро Тойя, онсены и вулканы',
  },
  {
    id: 'otaru',
    title: 'Отару',
    description: 'Романтичный портовый город с газовыми фонарями и музыкальными шкатулками',
    image: 'images/otaru-new.jpg',
    imageAlt: 'Отару, романтичный канал с кирпичными складами и фонарями',
  },
  {
    id: 'fuji',
    title: 'Токио & Фудзи',
    description: 'Священная вершина Японии и опция восхождения с Леонидом',
    image: 'images/fuji-kawaguchiko.jpg',
    imageAlt: 'Гора Фудзи и озеро Кавагутико осенью',
  },
]
