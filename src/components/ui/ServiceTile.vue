<script setup lang="ts">
import type { ServiceTile as ServiceTileType } from '@/types/content'
import AppIcon from '@/components/ui/AppIcon.vue'
import { ArrowUpRight } from '@lucide/vue'

type Props = {
  item: ServiceTileType
}

defineProps<Props>()

const spanClass: Record<ServiceTileType['span'], string> = {
  sm: 'md:col-span-1 min-h-[200px]',
  md: 'md:col-span-1 min-h-[220px]',
  lg: 'md:col-span-2 min-h-[240px]',
}
</script>

<template>
  <a
    :href="item.href ?? '#contacts'"
    class="group relative flex overflow-hidden rounded-[1.75rem] border border-forest/10 bg-gradient-to-br p-6 transition duration-300 hover:-translate-y-1 hover:border-forest/20 hover:shadow-xl hover:shadow-forest/5 sm:p-8"
    :class="[item.accent, spanClass[item.span]]"
    data-reveal-item
  >
    <div class="relative z-10 flex h-full w-full flex-col justify-between gap-8">
      <div class="flex items-start justify-between gap-4">
        <span
          class="inline-flex size-12 items-center justify-center rounded-2xl transition duration-300 group-hover:scale-105"
          :class="item.iconTone"
        >
          <AppIcon
            :name="item.icon"
            :size="22"
          />
        </span>
        <ArrowUpRight
          class="size-5 text-forest/30 transition duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-forest/70"
          aria-hidden="true"
        />
      </div>

      <div>
        <h3 class="font-display text-xl font-semibold tracking-tight text-forest sm:text-2xl">
          {{ item.title }}
        </h3>
        <p class="mt-3 max-w-md text-sm leading-relaxed text-muted sm:text-base">
          {{ item.description }}
        </p>
      </div>
    </div>
  </a>
</template>
