<script setup lang="ts">
import { computed } from 'vue'
import { icons, type IconName } from '@/lib/icons'

type Props = {
  name: IconName
  size?: number
  strokeWidth?: number
  class?: string
}

const props = withDefaults(defineProps<Props>(), {
  size: 22,
  strokeWidth: 1.75,
})

const icon = computed(() => icons[props.name])
</script>

<template>
  <component
    :is="icon"
    :size="size"
    :stroke-width="strokeWidth"
    :class="props.class"
    aria-hidden="true"
  />
</template>
