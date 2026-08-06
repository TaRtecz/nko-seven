<script setup lang="ts">
import BrandMark from '@/components/ui/BrandMark.vue'

type Props = {
  compact?: boolean
}

withDefaults(defineProps<Props>(), {
  compact: false,
})
</script>

<template>
  <a
    href="#hero"
    class="group inline-flex items-center gap-3 rounded-xl focus-visible:ring-2 focus-visible:ring-teal focus-visible:ring-offset-2"
    aria-label="Семицветик — на главную"
  >
    <BrandMark :class="compact ? 'size-10' : 'size-11 sm:size-12'" />

    <span class="flex flex-col leading-tight">
      <span
        class="font-display font-semibold tracking-tight text-forest"
        :class="compact ? 'text-base' : 'text-lg sm:text-xl'"
      >
        Семицветик
      </span>
      <span
        v-if="!compact"
        class="text-xs text-muted sm:text-sm"
      >
        Югра · детям
      </span>
    </span>
  </a>
</template>
