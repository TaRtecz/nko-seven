<script setup lang="ts">
import { useScrollReveal } from '@/composables/useScrollReveal'
import HeroSection from '@/components/sections/HeroSection.vue'
import ImpactSection from '@/components/sections/ImpactSection.vue'
import ServicesSection from '@/components/sections/ServicesSection.vue'
import MasterclassesSection from '@/components/sections/MasterclassesSection.vue'
import GamesSection from '@/components/sections/GamesSection.vue'
import SouvenirsSection from '@/components/sections/SouvenirsSection.vue'

const reveal = useScrollReveal()
</script>

<template>
  <div :ref="reveal.root">
    <HeroSection />
    <ImpactSection />
    <ServicesSection />
    <MasterclassesSection />
    <GamesSection />
    <SouvenirsSection />
  </div>
</template>
