export interface LocationCard {
  id: string
  title: string
  description: string
  image: string
  imageAlt: string
}

// Уникальные фото: осень (момидзи), храмы, вулканы, онсены
export const locations: LocationCard[] = [
  {
    id: 'kyoto',
    title: 'Киото',
    description: '2 дня в древней столице среди 2000+ храмов и пылающих кленов',
    image: 'https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?w=800&q=80',
    imageAlt: 'Киото осенью, храм и момидзи',
  },
  {
    id: 'koyasan',
    title: 'Коясан',
    description: 'Ночь в буддийском храме, вечное Самадхи Кукая и 1200 лет традиций',
    image: 'https://images.unsplash.com/photo-1545569341-9eb8b30979d9?w=800&q=80',
    imageAlt: 'Коясан, храм среди осенних кленов',
  },
  {
    id: 'hokkaido',
    title: 'Хоккайдо (Хидака)',
    description: 'Дикие горы айнов, первозданные леса и священные вершины',
    image: 'https://images.unsplash.com/photo-1528360983277-13d401cdc186?w=800&q=80',
    imageAlt: 'Горы Хоккайдо осенью',
  },
  {
    id: 'toya',
    title: 'Озеро Тойя',
    description: 'Действующие вулканы, геотермальная долина и онсены с видом на Эдзо-Фудзи',
    image: 'https://images.unsplash.com/photo-1480795462217-32e7c4e4e1c?w=800&q=80',
    imageAlt: 'Горячие источники, онсен в Японии',
  },
  {
    id: 'otaru',
    title: 'Отару',
    description: 'Романтичный портовый город с газовыми фонарями и музыкальными шкатулками',
    image: 'https://images.unsplash.com/photo-1590559899731-a382839e5549?w=800&q=80',
    imageAlt: 'Отару, канал с фонарями',
  },
  {
    id: 'fuji',
    title: 'Токио & Фудзи',
    description: 'Священная вершина Японии и опция восхождения с Леонидом',
    image: 'https://images.unsplash.com/photo-1490806843957-31f4c9a91c65?w=800&q=80',
    imageAlt: 'Гора Фудзи и озеро Кавагутико осенью',
  },
]
