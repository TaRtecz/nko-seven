<script setup lang="ts">
import SectionHeading from '@/components/ui/SectionHeading.vue'
import AppButton from '@/components/ui/AppButton.vue'
import AppIcon from '@/components/ui/AppIcon.vue'
import { formatPrice, gameExtras, gameSets } from '@/data/content'
</script>

<template>
  <section
    id="games"
    class="bg-cream py-16 sm:py-20 lg:py-28"
    aria-labelledby="games-title"
  >
    <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
      <SectionHeading
        eyebrow="Игровой набор «Северное сияние»"
        title="Играй. Изучай. Сохраняй культуру Севера"
        description="Возраст 6+. Натуральные материалы. Упаковка — деревянный бокс. Отличный подарок для детей и взрослых."
      />

      <div
        class="mt-12 grid gap-4 sm:mt-14 sm:gap-5 lg:grid-cols-3"
        data-reveal-stagger
      >
        <article
          v-for="set in gameSets"
          :key="set.id"
          class="group relative flex flex-col justify-between rounded-[1.75rem] border border-forest/10 bg-sand/80 p-6 transition duration-300 hover:-translate-y-1 hover:border-forest/20 hover:shadow-xl hover:shadow-forest/5 sm:p-8"
          data-reveal-item
        >
          <span
            v-if="set.badge"
            class="absolute right-5 top-5 rounded-full bg-coral px-3 py-1 text-xs font-semibold text-cream"
          >
            {{ set.badge }}
          </span>

          <div>
            <span class="mb-5 inline-flex size-12 items-center justify-center rounded-2xl bg-forest/8 text-forest transition duration-300 group-hover:scale-105">
              <AppIcon
                :name="set.icon"
                :size="22"
              />
            </span>
            <h3 class="font-display text-xl font-semibold tracking-tight text-forest sm:text-2xl">
              {{ set.title }}
            </h3>
            <p class="mt-3 text-sm leading-relaxed text-muted sm:text-base">
              {{ set.description }}
            </p>
          </div>

          <div class="mt-8 flex items-end justify-between gap-4">
            <p class="font-display text-2xl font-semibold text-forest">
              {{ formatPrice(set.price) }} ₽
            </p>
            <AppButton
              href="#contacts"
              variant="secondary"
            >
              Заказать
            </AppButton>
          </div>
        </article>
      </div>

      <div
        class="mt-8 grid gap-3 sm:mt-10 sm:grid-cols-3"
        data-reveal-stagger
      >
        <article
          v-for="extra in gameExtras"
          :key="extra.id"
          class="group rounded-2xl border border-forest/10 bg-cream px-5 py-5 transition duration-300 hover:-translate-y-0.5 hover:border-forest/20 hover:shadow-md hover:shadow-forest/5"
          data-reveal-item
        >
          <span class="mb-3 inline-flex size-10 items-center justify-center rounded-xl bg-teal/10 text-teal">
            <AppIcon
              :name="extra.icon"
              :size="18"
            />
          </span>
          <h3 class="font-semibold text-forest">{{ extra.title }}</h3>
          <p class="mt-2 text-sm text-muted">{{ extra.description }}</p>
          <p class="mt-4 text-sm font-semibold text-coral">от {{ formatPrice(extra.price) }} ₽</p>
        </article>
      </div>
    </div>
  </section>
</template>
