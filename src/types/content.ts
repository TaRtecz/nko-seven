export type NavItem = {
  label: string
  href: string
}

export type ImpactMetric = {
  id: string
  value: number
  suffix: string
  label: string
  icon: import('@/lib/icons').IconName
}

export type ServiceTile = {
  id: string
  title: string
  description: string
  accent: string
  iconTone: string
  span: 'sm' | 'md' | 'lg'
  icon: import('@/lib/icons').IconName
  href?: string
}

export type Masterclass = {
  id: string
  title: string
  subtitle: string
  items: string[]
  priceFrom: number
  age: string
  tone: string
  iconTone: string
  icon: import('@/lib/icons').IconName
}

export type GameSet = {
  id: string
  title: string
  description: string
  price: number
  badge?: string
  icon: import('@/lib/icons').IconName
}

export type Souvenir = {
  id: string
  title: string
  series?: string
  price: number
  icon: import('@/lib/icons').IconName
}

export type ContactInfo = {
  name: string
  phone: string
  phoneHref: string
  email: string
  note: string
}
