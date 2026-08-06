<script setup lang="ts">
type Variant = 'primary' | 'secondary' | 'ghost' | 'donate'
type Size = 'md' | 'lg'

type Props = {
  href?: string
  type?: 'button' | 'submit'
  variant?: Variant
  size?: Size
  ariaLabel?: string
  external?: boolean
}

const props = withDefaults(defineProps<Props>(), {
  type: 'button',
  variant: 'primary',
  size: 'md',
  external: false,
})

const variantClass: Record<Variant, string> = {
  primary:
    'bg-forest text-cream hover:bg-forest-deep shadow-sm shadow-forest/10',
  secondary:
    'bg-cream/80 text-forest border border-forest/15 hover:border-forest/35 hover:bg-cream',
  ghost: 'bg-transparent text-forest hover:bg-forest/5',
  donate:
    'bg-coral text-cream hover:bg-[#d45f42] shadow-md shadow-coral/20',
}

const sizeClass: Record<Size, string> = {
  md: 'px-5 py-3 text-sm sm:text-base',
  lg: 'gap-2.5 px-6 py-3.5 text-base sm:text-lg',
}
</script>

<template>
  <a
    v-if="href"
    :href="href"
    class="tap-target inline-flex items-center justify-center gap-2 rounded-2xl font-semibold transition duration-200 hover:-translate-y-0.5 active:translate-y-0 focus-visible:ring-2 focus-visible:ring-teal focus-visible:ring-offset-2"
    :class="[variantClass[props.variant], sizeClass[props.size]]"
    :aria-label="ariaLabel"
    :target="external ? '_blank' : undefined"
    :rel="external ? 'noopener noreferrer' : undefined"
  >
    <slot name="icon" />
    <slot />
  </a>
  <button
    v-else
    :type="type"
    class="tap-target inline-flex items-center justify-center gap-2 rounded-2xl font-semibold transition duration-200 hover:-translate-y-0.5 active:translate-y-0 focus-visible:ring-2 focus-visible:ring-teal focus-visible:ring-offset-2"
    :class="[variantClass[props.variant], sizeClass[props.size]]"
    :aria-label="ariaLabel"
  >
    <slot name="icon" />
    <slot />
  </button>
</template>
