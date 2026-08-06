<script setup lang="ts">
import MetricCounter from '@/components/ui/MetricCounter.vue'
import { impactMetrics } from '@/data/content'
</script>

<template>
  <section
    id="impact"
    class="bg-cream py-16 sm:py-20 lg:py-24"
    aria-labelledby="impact-title"
  >
    <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
      <h2
        id="impact-title"
        class="sr-only"
      >
        Наш вклад
      </h2>
      <div
        class="grid gap-10 rounded-[2rem] border border-forest/10 bg-gradient-to-br from-sand via-cream to-mist/20 px-6 py-10 shadow-sm shadow-forest/5 sm:grid-cols-2 sm:px-10 lg:grid-cols-4 lg:gap-8 lg:px-12 lg:py-14"
        data-reveal-stagger
      >
        <MetricCounter
          v-for="metric in impactMetrics"
          :key="metric.id"
          :value="metric.value"
          :suffix="metric.suffix"
          :label="metric.label"
          :icon="metric.icon"
          data-reveal-item
        />
      </div>
    </div>
  </section>
</template>
