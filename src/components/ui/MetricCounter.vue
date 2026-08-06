<script setup lang="ts">
import { computed, onMounted, onUnmounted, ref } from 'vue'
import { useCountUp } from '@/composables/useCountUp'
import AppIcon from '@/components/ui/AppIcon.vue'
import type { IconName } from '@/lib/icons'

type Props = {
  value: number
  suffix?: string
  label: string
  icon: IconName
}

const props = withDefaults(defineProps<Props>(), {
  suffix: '',
})

const el = ref<HTMLElement | null>(null)
const isVisible = ref(false)
const { display } = useCountUp({
  target: computed(() => props.value),
  enabled: isVisible,
})

let observer: IntersectionObserver | undefined

onMounted(() => {
  if (!el.value) return
  observer = new IntersectionObserver(
    ([entry]) => {
      if (entry?.isIntersecting) {
        isVisible.value = true
        observer?.disconnect()
      }
    },
    { threshold: 0.4 },
  )
  observer.observe(el.value)
})

onUnmounted(() => {
  observer?.disconnect()
})
</script>

<template>
  <div
    ref="el"
    class="flex flex-col gap-4"
  >
    <span class="inline-flex size-11 items-center justify-center rounded-2xl bg-teal/10 text-teal">
      <AppIcon
        :name="icon"
        :size="20"
      />
    </span>
    <div>
      <p class="font-display text-4xl font-semibold tracking-tight text-forest sm:text-5xl">
        <span>{{ display }}</span><span class="text-coral">{{ suffix }}</span>
      </p>
      <p class="mt-2 text-sm text-muted sm:text-base">
        {{ label }}
      </p>
    </div>
  </div>
</template>
