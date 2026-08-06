<script setup lang="ts">
import type { Masterclass } from '@/types/content'
import { formatPrice } from '@/data/content'
import AppButton from '@/components/ui/AppButton.vue'
import AppIcon from '@/components/ui/AppIcon.vue'

type Props = {
  item: Masterclass
}

defineProps<Props>()
</script>

<template>
  <article
    class="group flex h-full flex-col justify-between rounded-[1.75rem] border border-forest/10 p-6 transition duration-300 hover:-translate-y-1 hover:border-forest/20 hover:shadow-xl hover:shadow-forest/5 sm:p-7"
    :class="item.tone"
    data-reveal-item
  >
    <div>
      <div class="mb-5 flex items-start justify-between gap-3">
        <span
          class="inline-flex size-12 items-center justify-center rounded-2xl transition duration-300 group-hover:scale-105"
          :class="item.iconTone"
        >
          <AppIcon
            :name="item.icon"
            :size="22"
          />
        </span>
        <div class="flex flex-col items-end gap-2">
          <span class="rounded-full bg-forest/8 px-3 py-1 text-xs font-semibold text-forest">
            {{ item.age }}
          </span>
          <span class="text-sm font-semibold text-coral">
            от {{ formatPrice(item.priceFrom) }} ₽
          </span>
        </div>
      </div>

      <h3 class="font-display text-xl font-semibold tracking-tight text-forest sm:text-2xl">
        {{ item.title }}
      </h3>
      <p class="mt-2 text-sm leading-relaxed text-muted sm:text-base">
        {{ item.subtitle }}
      </p>

      <ul class="mt-5 flex flex-wrap gap-2">
        <li
          v-for="chip in item.items"
          :key="chip"
          class="rounded-full border border-forest/8 bg-cream/90 px-3 py-1.5 text-xs font-medium text-forest/80"
        >
          {{ chip }}
        </li>
      </ul>
    </div>

    <div class="mt-8">
      <AppButton
        href="#contacts"
        variant="secondary"
        class="w-full"
      >
        Записаться
      </AppButton>
    </div>
  </article>
</template>
