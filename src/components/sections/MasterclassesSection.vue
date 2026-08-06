<script setup lang="ts">
import SectionHeading from '@/components/ui/SectionHeading.vue'
import MasterclassCard from '@/components/ui/MasterclassCard.vue'
import { masterclasses } from '@/data/content'
</script>

<template>
  <section
    id="masterclasses"
    class="relative overflow-hidden bg-sand/70 py-16 sm:py-20 lg:py-28"
    aria-labelledby="masterclasses-title"
  >
    <div
      class="pointer-events-none absolute -right-24 top-20 size-72 rounded-full bg-peach/20 blur-3xl"
      aria-hidden="true"
    />
    <div class="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
      <SectionHeading
        eyebrow="Мастер-классы"
        title="Познаём. Творим. Сохраняем традиции"
        description="Творчество объединяет поколения. Возраст 6+, стоимость — от 300 ₽. Подробности уточняйте по телефону."
      />

      <div
        class="mt-12 grid grid-cols-1 gap-4 sm:mt-14 sm:grid-cols-2 sm:gap-5 xl:grid-cols-3"
        data-reveal-stagger
      >
        <MasterclassCard
          v-for="item in masterclasses"
          :key="item.id"
          :item="item"
          :class="item.id === 'easel' ? 'sm:col-span-2 xl:col-span-1' : ''"
        />
      </div>
    </div>
  </section>
</template>
