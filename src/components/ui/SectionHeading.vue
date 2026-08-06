<script setup lang="ts">
type Props = {
  eyebrow?: string
  title: string
  description?: string
  align?: 'left' | 'center'
}

withDefaults(defineProps<Props>(), {
  align: 'left',
})
</script>

<template>
  <div
    class="max-w-3xl"
    :class="align === 'center' ? 'mx-auto text-center' : ''"
    data-reveal
  >
    <p
      v-if="eyebrow"
      class="mb-3 text-sm font-semibold uppercase tracking-[0.16em] text-teal"
    >
      {{ eyebrow }}
    </p>
    <h2 class="font-display text-3xl font-semibold tracking-tight text-forest sm:text-4xl lg:text-5xl">
      {{ title }}
    </h2>
    <p
      v-if="description"
      class="mt-4 text-base leading-relaxed text-muted sm:text-lg"
    >
      {{ description }}
    </p>
  </div>
</template>
