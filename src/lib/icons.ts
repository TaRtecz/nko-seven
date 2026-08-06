import type { Component } from 'vue'
import {
  Boxes,
  Brush,
  Flower2,
  Gift,
  Hammer,
  HeartHandshake,
  Landmark,
  Magnet,
  Map,
  Package,
  Palette,
  Puzzle,
  Shield,
  Snowflake,
  Sparkles,
  Stamp,
  TreePine,
  Users,
} from '@lucide/vue'

export type IconName =
  | 'heart'
  | 'landmark'
  | 'palette'
  | 'boxes'
  | 'gift'
  | 'brush'
  | 'hammer'
  | 'magnet'
  | 'shield'
  | 'sparkles'
  | 'package'
  | 'tree'
  | 'users'
  | 'puzzle'
  | 'stamp'
  | 'map'
  | 'snowflake'
  | 'flower'

export const icons: Record<IconName, Component> = {
  heart: HeartHandshake,
  landmark: Landmark,
  palette: Palette,
  boxes: Boxes,
  gift: Gift,
  brush: Brush,
  hammer: Hammer,
  magnet: Magnet,
  shield: Shield,
  sparkles: Sparkles,
  package: Package,
  tree: TreePine,
  users: Users,
  puzzle: Puzzle,
  stamp: Stamp,
  map: Map,
  snowflake: Snowflake,
  flower: Flower2,
}
