<script setup lang="ts">
import SectionHeading from '@/components/ui/SectionHeading.vue'
import ServiceTile from '@/components/ui/ServiceTile.vue'
import { services } from '@/data/content'
</script>

<template>
  <section
    id="services"
    class="bg-cream py-16 sm:py-20 lg:py-28"
    aria-labelledby="services-title"
  >
    <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
      <SectionHeading
        eyebrow="Как мы помогаем"
        title="Забота, творчество и культура Севера"
        description="Каждое направление — отдельный путь поддержки детей: от тёплых занятий до игровых наборов и сувениров ручной работы."
      />

      <div
        class="mt-12 grid auto-rows-fr grid-cols-1 gap-4 sm:mt-14 sm:gap-5 md:grid-cols-2 lg:grid-cols-3"
        data-reveal-stagger
      >
        <ServiceTile
          v-for="item in services"
          :key="item.id"
          :item="item"
        />
      </div>
    </div>
  </section>
</template>
