<script setup lang="ts">
import { RouterView } from 'vue-router'
import AppHeader from '@/components/layout/AppHeader.vue'
import AppFooter from '@/components/layout/AppFooter.vue'
</script>

<template>
  <div class="min-h-svh">
    <a
      href="#main"
      class="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-[100] focus:rounded-xl focus:bg-cream focus:px-4 focus:py-3 focus:text-forest focus:shadow-lg"
    >
      Перейти к содержимому
    </a>
    <AppHeader />
    <main id="main">
      <RouterView />
    </main>
    <AppFooter />
  </div>
</template>
