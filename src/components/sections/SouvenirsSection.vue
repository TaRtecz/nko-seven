<script setup lang="ts">
import SectionHeading from '@/components/ui/SectionHeading.vue'
import AppIcon from '@/components/ui/AppIcon.vue'
import { formatPrice, souvenirs } from '@/data/content'
</script>

<template>
  <section
    id="souvenirs"
    class="bg-sand/60 py-16 sm:py-20 lg:py-28"
    aria-labelledby="souvenirs-title"
  >
    <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
      <SectionHeading
        eyebrow="Сувенирная продукция"
        title="Сделано на Севере. Создано с душой"
        description="Экологичные материалы, ручная работа и лазерная резка, уникальный национальный стиль."
      />

      <ul
        class="mt-12 grid grid-cols-1 gap-3 sm:mt-14 sm:grid-cols-2 sm:gap-4 lg:grid-cols-3"
        data-reveal-stagger
      >
        <li
          v-for="item in souvenirs"
          :key="item.id"
          class="group flex items-center justify-between gap-4 rounded-2xl border border-forest/10 bg-cream px-5 py-4 transition duration-300 hover:-translate-y-0.5 hover:border-forest/20 hover:shadow-md hover:shadow-forest/5"
          data-reveal-item
        >
          <div class="flex min-w-0 items-center gap-3">
            <span class="inline-flex size-10 shrink-0 items-center justify-center rounded-xl bg-teal/10 text-teal transition duration-300 group-hover:scale-105">
              <AppIcon
                :name="item.icon"
                :size="18"
              />
            </span>
            <div class="min-w-0">
              <p class="truncate font-semibold text-forest">{{ item.title }}</p>
              <p
                v-if="item.series"
                class="mt-0.5 truncate text-sm text-muted"
              >
                {{ item.series }}
              </p>
            </div>
          </div>
          <p class="shrink-0 font-display text-lg font-semibold text-teal">
            {{ formatPrice(item.price) }} ₽
          </p>
        </li>
      </ul>
    </div>
  </section>
</template>
