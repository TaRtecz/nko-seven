<script setup lang="ts">
import { Mail, Phone, Heart, HandHeart } from '@lucide/vue'
import { contact, navItems } from '@/data/content'
</script>

<template>
  <footer
    id="contacts"
    class="border-t border-forest/10 bg-forest text-cream"
  >
    <div class="mx-auto grid max-w-7xl gap-12 px-4 py-16 sm:px-6 lg:grid-cols-12 lg:px-8 lg:py-20">
      <div class="lg:col-span-5">
        <p class="font-display text-2xl font-semibold tracking-tight text-cream">Семицветик</p>
        <p class="mt-2 text-sm text-cream/70">Югра · детям</p>
        <p class="mt-5 max-w-md text-sm leading-relaxed text-cream/75 sm:text-base">
          Помогаем детям через творчество, игру и бережное знакомство с культурой народов Севера.
        </p>
      </div>

      <div class="lg:col-span-3">
        <h2 class="font-display text-lg font-semibold">Навигация</h2>
        <ul class="mt-4 space-y-1">
          <li
            v-for="item in navItems"
            :key="item.href"
          >
            <a
              :href="item.href"
              class="tap-target inline-flex items-center rounded-lg px-1 text-cream/75 transition-colors hover:text-cream"
            >
              {{ item.label }}
            </a>
          </li>
        </ul>
      </div>

      <div class="lg:col-span-4">
        <h2 class="font-display text-lg font-semibold">Контакты</h2>
        <address class="mt-4 not-italic">
          <p class="text-cream/90">{{ contact.name }}</p>
          <p class="mt-4">
            <a
              :href="contact.phoneHref"
              class="tap-target inline-flex items-center gap-2 text-lg font-semibold text-sun transition-colors hover:text-peach"
            >
              <Phone
                class="size-5 shrink-0"
                aria-hidden="true"
              />
              {{ contact.phone }}
            </a>
          </p>
          <p class="mt-3">
            <a
              :href="`mailto:${contact.email}`"
              class="tap-target inline-flex items-center gap-2 break-all text-cream/80 transition-colors hover:text-cream"
            >
              <Mail
                class="size-5 shrink-0"
                aria-hidden="true"
              />
              {{ contact.email }}
            </a>
          </p>
          <p class="mt-4 text-sm text-cream/60">
            {{ contact.note }}
          </p>
        </address>

        <div class="mt-8 flex flex-wrap gap-3">
          <a
            href="#contacts"
            class="tap-target inline-flex items-center justify-center gap-2 rounded-2xl bg-coral px-5 py-3 text-sm font-semibold text-cream transition duration-200 hover:-translate-y-0.5"
          >
            <Heart
              class="size-4"
              aria-hidden="true"
            />
            Помочь / пожертвовать
          </a>
          <a
            :href="contact.phoneHref"
            class="tap-target inline-flex items-center justify-center gap-2 rounded-2xl border border-cream/25 px-5 py-3 text-sm font-semibold text-cream transition-colors hover:bg-cream/10"
          >
            <HandHeart
              class="size-4"
              aria-hidden="true"
            />
            Стать волонтёром
          </a>
        </div>
      </div>
    </div>

    <div class="border-t border-cream/10">
      <div class="mx-auto flex max-w-7xl flex-col gap-2 px-4 py-6 text-sm text-cream/55 sm:flex-row sm:items-center sm:justify-between sm:px-6 lg:px-8">
        <p>© {{ new Date().getFullYear() }} Семицветик. Все права защищены.</p>
        <p>Сделано на Севере. Создано с душой.</p>
      </div>
    </div>
  </footer>
</template>
