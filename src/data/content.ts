import type {
  ContactInfo,
  GameSet,
  ImpactMetric,
  Masterclass,
  NavItem,
  ServiceTile,
  Souvenir,
} from '@/types/content'

export const org = {
  name: 'Семицветик',
  tagline: 'Помогаем детям · Сохраняем культуру Севера',
  mission:
    'Творческие программы, игровые наборы и мастер-классы, которые развивают детей и бережно передают традиции народов Югры.',
} as const

export const contact: ContactInfo = {
  name: 'Газизова Гульназ Айдаровна',
  phone: '+7 (922) 436-82-60',
  phoneHref: 'tel:+79224368260',
  email: 'chingizhan2007@mail.ru',
  note: 'Подробности и стоимость уточните по телефону.',
}

export const navItems: NavItem[] = [
  { label: 'О нас', href: '#hero' },
  { label: 'Помощь', href: '#services' },
  { label: 'Мастер-классы', href: '#masterclasses' },
  { label: 'Наборы', href: '#games' },
  { label: 'Сувениры', href: '#souvenirs' },
  { label: 'Контакты', href: '#contacts' },
]

export const impactMetrics: ImpactMetric[] = [
  { id: 'kids', value: 1200, suffix: '+', label: 'детей на программах', icon: 'users' },
  { id: 'mk', value: 5, suffix: '', label: 'направлений мастер-классов', icon: 'palette' },
  { id: 'sets', value: 8, suffix: '', label: 'игровых наборов и фигурок', icon: 'boxes' },
  { id: 'years', value: 7, suffix: '', label: 'цветов одной миссии', icon: 'flower' },
]

export const services: ServiceTile[] = [
  {
    id: 'support',
    title: 'Поддержка детей',
    description:
      'Тёплые развивающие занятия и внимание к каждому ребёнку — в безопасной и доброжелательной среде.',
    accent: 'from-peach/35 via-sun/20 to-cream',
    iconTone: 'bg-peach/25 text-coral',
    span: 'lg',
    icon: 'heart',
    href: '#contacts',
  },
  {
    id: 'culture',
    title: 'Культура Севера',
    description:
      'Знакомим с бытом, орнаментами и природой народов Севера через игру и творчество.',
    accent: 'from-teal/25 via-mist/30 to-cream',
    iconTone: 'bg-teal/15 text-teal',
    span: 'md',
    icon: 'landmark',
    href: '#games',
  },
  {
    id: 'workshops',
    title: 'Мастер-классы',
    description: 'От 300 ₽ · возраст 6+. Познаём. Творим. Сохраняем традиции.',
    accent: 'from-coral/20 via-peach/20 to-cream',
    iconTone: 'bg-coral/15 text-coral',
    span: 'md',
    icon: 'palette',
    href: '#masterclasses',
  },
  {
    id: 'games',
    title: 'Игровые наборы',
    description:
      '«Северное сияние» — комплексные наборы из натуральных материалов в деревянном боксе.',
    accent: 'from-sky/20 via-mist/25 to-cream',
    iconTone: 'bg-sky/15 text-sky',
    span: 'sm',
    icon: 'boxes',
    href: '#games',
  },
  {
    id: 'souvenirs',
    title: 'Сувениры',
    description: 'Сделано на Севере. Создано с душой — ручная работа и лазерная резка.',
    accent: 'from-sun/30 via-peach/15 to-cream',
    iconTone: 'bg-sun/30 text-forest',
    span: 'sm',
    icon: 'gift',
    href: '#souvenirs',
  },
]

export const masterclasses: Masterclass[] = [
  {
    id: '3d',
    title: '3D-рисование',
    subtitle: 'Объёмные сюжеты своими руками',
    items: ['Арт-матрёшка', 'Богатырь', '9 Мая', 'Ёлка', 'Зайчик'],
    priceFrom: 300,
    age: '6+',
    tone: 'bg-[#FFF6EF]',
    iconTone: 'bg-peach/30 text-coral',
    icon: 'brush',
  },
  {
    id: 'wood',
    title: 'Деревянные конструкторы',
    subtitle: 'Собираем северный мир',
    items: ['Чум', 'Охотничий дом', 'Мой Лянтор'],
    priceFrom: 300,
    age: '6+',
    tone: 'bg-[#EEF8F5]',
    iconTone: 'bg-teal/15 text-teal',
    icon: 'hammer',
  },
  {
    id: 'magnet',
    title: 'Изготовление магнита',
    subtitle: 'Память о родном крае',
    items: ['Лянтор', 'Сургут'],
    priceFrom: 300,
    age: '6+',
    tone: 'bg-[#F2F7FB]',
    iconTone: 'bg-sky/15 text-sky',
    icon: 'magnet',
  },
  {
    id: 'amulet',
    title: 'Хантыйский оберег',
    subtitle: 'Символ защиты и удачи',
    items: ['Хантыйский оберег'],
    priceFrom: 300,
    age: '6+',
    tone: 'bg-[#FBF6EE]',
    iconTone: 'bg-sun/35 text-forest',
    icon: 'shield',
  },
  {
    id: 'easel',
    title: 'Рисование на прозрачных мольбертах',
    subtitle: 'Свет, цвет и фантазия',
    items: [
      'Птицы',
      'Солнце и природа',
      'Огонь',
      'Животные',
      'Цветы и узоры',
      'Праздничные сюжеты',
    ],
    priceFrom: 300,
    age: '6+',
    tone: 'bg-[#F4FAF7]',
    iconTone: 'bg-mist/50 text-teal',
    icon: 'sparkles',
  },
]

export const gameSets: GameSet[] = [
  {
    id: 'chum',
    title: 'Конструктор «Чум»',
    description: 'Собери жилище народов Севера из натуральных материалов.',
    price: 2800,
    icon: 'tree',
  },
  {
    id: 'hunt-house',
    title: '«Охотничий дом»',
    description: 'Изучай быт и архитектуру Севера через игру.',
    price: 3000,
    icon: 'package',
  },
  {
    id: 'family',
    title: 'Игровой набор «Семья»',
    description: 'Комплексный набор для знакомства с культурой и природой Севера.',
    price: 5000,
    badge: 'Хит',
    icon: 'users',
  },
]

export const gameExtras: GameSet[] = [
  {
    id: 'boards',
    title: 'Межполушарные доски',
    description: 'Развивает моторику, внимание и мышление.',
    price: 300,
    icon: 'puzzle',
  },
  {
    id: 'stamps',
    title: 'Штампы «Хантыйские орнаменты»',
    description: 'Творческие задания с национальным узором.',
    price: 300,
    icon: 'stamp',
  },
  {
    id: 'map',
    title: 'Карта Сургутского района',
    description: 'Играй. Изучай. Сохраняй культуру Севера.',
    price: 300,
    icon: 'map',
  },
]

export const souvenirs: Souvenir[] = [
  { id: 'stella', title: 'Стелла «Мой Лянтор»', price: 350, icon: 'landmark' },
  { id: 'labaz', title: 'Лабаз', price: 200, icon: 'package' },
  { id: 'plate', title: 'Тарелка', price: 350, icon: 'flower' },
  { id: 'magnet-yugra', title: 'Магнит', series: '«С любовью из Югры!»', price: 250, icon: 'magnet' },
  { id: 'magnet-animals', title: 'Магнит', series: '«Животные севера»', price: 200, icon: 'snowflake' },
  { id: 'magnet-aurora', title: 'Магнит', series: '«Северное сияние»', price: 350, icon: 'sparkles' },
  { id: 'hanging', title: 'Автомобильная подвеска', price: 300, icon: 'gift' },
  { id: 'magnet-chum', title: 'Магнит «Чум»', price: 300, icon: 'tree' },
  { id: 'magnet-house', title: 'Магнит «Охотничий дом»', price: 300, icon: 'package' },
]

export const formatPrice = (price: number): string =>
  new Intl.NumberFormat('ru-RU').format(price)
