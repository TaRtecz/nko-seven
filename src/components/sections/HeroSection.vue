<script setup lang="ts">
import AppButton from '@/components/ui/AppButton.vue'
import AppIcon from '@/components/ui/AppIcon.vue'
import BrandMark from '@/components/ui/BrandMark.vue'
import { org } from '@/data/content'
import { ArrowRight, Heart } from '@lucide/vue'
</script>

<template>
  <section
    id="hero"
    class="relative isolate min-h-[100svh] overflow-hidden"
    aria-labelledby="hero-title"
  >
    <div
      class="absolute inset-0 -z-10 bg-sand"
      aria-hidden="true"
    >
      <div class="mesh-orb absolute -left-20 -top-24 size-[28rem] rounded-full bg-peach/40 blur-3xl" />
      <div class="mesh-orb mesh-orb-delay-1 absolute right-[-6rem] top-10 size-[26rem] rounded-full bg-coral/30 blur-3xl" />
      <div class="mesh-orb mesh-orb-delay-2 absolute bottom-10 left-1/4 size-[24rem] rounded-full bg-sun/35 blur-3xl" />
      <div class="mesh-orb mesh-orb-delay-3 absolute bottom-0 right-1/4 size-[22rem] rounded-full bg-teal/30 blur-3xl" />
      <div class="mesh-orb absolute left-1/2 top-1/3 size-[20rem] -translate-x-1/2 rounded-full bg-mist/45 blur-3xl" />
      <div class="mesh-orb mesh-orb-delay-1 absolute left-[10%] top-[45%] size-[18rem] rounded-full bg-sky/25 blur-3xl" />
      <div class="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_transparent_20%,_rgba(255,252,247,0.75)_75%)]" />
      <div class="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-cream to-transparent" />
    </div>

    <div class="mx-auto grid min-h-[100svh] max-w-7xl items-end gap-12 px-4 pb-16 pt-28 sm:px-6 sm:pb-20 sm:pt-32 lg:grid-cols-[1.1fr_0.9fr] lg:items-center lg:px-8 lg:pb-24 lg:pt-28">
      <div
        v-motion
        :initial="{ opacity: 0, y: 28 }"
        :enter="{ opacity: 1, y: 0, transition: { duration: 700, ease: 'easeOut' } }"
        class="max-w-2xl"
      >
        <p class="mb-5 inline-flex items-center gap-2 rounded-full border border-forest/15 bg-cream/90 px-3.5 py-2 text-xs font-semibold uppercase tracking-[0.12em] text-forest shadow-sm shadow-forest/5 backdrop-blur-sm sm:text-sm">
          <AppIcon
            name="snowflake"
            :size="14"
            class="text-teal"
          />
          {{ org.tagline }}
        </p>
        <h1
          id="hero-title"
          class="font-display text-4xl font-bold leading-[1.05] tracking-tight text-forest sm:text-5xl md:text-6xl lg:text-7xl"
        >
          Семицветик
        </h1>
        <p class="mt-6 max-w-xl text-lg leading-relaxed text-ink/85 sm:text-xl">
          {{ org.mission }}
        </p>
        <div class="mt-10 flex flex-col gap-3 sm:flex-row sm:items-center">
          <AppButton
            href="#contacts"
            variant="donate"
            size="lg"
          >
            <template #icon>
              <Heart
                class="size-5"
                aria-hidden="true"
              />
            </template>
            Помочь детям
          </AppButton>
          <AppButton
            href="#masterclasses"
            variant="secondary"
            size="lg"
          >
            Смотреть мастер-классы
            <ArrowRight
              class="size-5"
              aria-hidden="true"
            />
          </AppButton>
        </div>
      </div>

      <div
        v-motion
        :initial="{ opacity: 0, y: 36 }"
        :enter="{ opacity: 1, y: 0, transition: { duration: 800, delay: 120, ease: 'easeOut' } }"
        class="relative hidden lg:block"
        aria-hidden="true"
      >
        <div class="relative mx-auto aspect-square max-w-md">
          <div class="absolute inset-6 rounded-full border border-forest/10 bg-cream/55 backdrop-blur-md" />
          <BrandMark class="absolute inset-[18%] size-auto drop-shadow-2xl" />
          <div class="absolute -bottom-2 left-1/2 w-max -translate-x-1/2 rounded-2xl border border-forest/10 bg-cream/90 px-4 py-3 text-sm font-medium text-forest shadow-lg shadow-forest/10 backdrop-blur-md">
            7 цветов · одна миссия
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
