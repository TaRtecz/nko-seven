<script setup lang="ts">
import { onMounted, onUnmounted, ref, watch } from 'vue'
import { Menu, X, Heart } from '@lucide/vue'
import AppLogo from '@/components/ui/AppLogo.vue'
import AppButton from '@/components/ui/AppButton.vue'
import { navItems } from '@/data/content'

const isOpen = ref(false)
const isScrolled = ref(false)

const onScroll = () => {
  isScrolled.value = window.scrollY > 12
}

const closeMenu = () => {
  isOpen.value = false
}

const toggleMenu = () => {
  isOpen.value = !isOpen.value
}

const onKeydown = (event: KeyboardEvent) => {
  if (event.key === 'Escape') closeMenu()
}

watch(isOpen, (open) => {
  document.body.style.overflow = open ? 'hidden' : ''
})

onMounted(() => {
  onScroll()
  window.addEventListener('scroll', onScroll, { passive: true })
  window.addEventListener('keydown', onKeydown)
})

onUnmounted(() => {
  window.removeEventListener('scroll', onScroll)
  window.removeEventListener('keydown', onKeydown)
  document.body.style.overflow = ''
})
</script>

<template>
  <header
    class="fixed inset-x-0 top-0 z-50 transition-[background-color,box-shadow,backdrop-filter] duration-300"
    :class="
      isScrolled || isOpen
        ? 'border-b border-forest/8 bg-cream/85 shadow-sm shadow-forest/5 backdrop-blur-xl'
        : 'bg-transparent'
    "
  >
    <div class="mx-auto flex max-w-7xl items-center justify-between gap-4 px-4 py-3 sm:px-6 lg:px-8">
      <AppLogo :compact="isScrolled" />

      <nav
        class="hidden items-center gap-1 lg:flex"
        aria-label="Основная навигация"
      >
        <a
          v-for="item in navItems"
          :key="item.href"
          :href="item.href"
          class="tap-target inline-flex items-center rounded-xl px-3 py-2 text-sm font-medium text-forest/75 transition-colors hover:bg-forest/5 hover:text-forest"
        >
          {{ item.label }}
        </a>
      </nav>

      <div class="flex items-center gap-2">
        <AppButton
          href="#contacts"
          variant="donate"
          class="hidden sm:inline-flex"
        >
          <template #icon>
            <Heart
              class="size-4"
              aria-hidden="true"
            />
          </template>
          Помочь
        </AppButton>

        <button
          type="button"
          class="tap-target inline-flex items-center justify-center rounded-xl border border-forest/15 bg-cream/80 text-forest backdrop-blur-md lg:hidden"
          :aria-expanded="isOpen"
          aria-controls="mobile-menu"
          :aria-label="isOpen ? 'Закрыть меню' : 'Открыть меню'"
          @click="toggleMenu"
        >
          <X
            v-if="isOpen"
            class="size-5"
            aria-hidden="true"
          />
          <Menu
            v-else
            class="size-5"
            aria-hidden="true"
          />
        </button>
      </div>
    </div>

    <div
      id="mobile-menu"
      class="border-t border-forest/8 bg-cream/95 backdrop-blur-xl lg:hidden"
      :class="isOpen ? 'block' : 'hidden'"
    >
      <nav
        class="mx-auto flex max-w-7xl flex-col gap-1 px-4 py-4 sm:px-6"
        aria-label="Мобильная навигация"
      >
        <a
          v-for="item in navItems"
          :key="item.href"
          :href="item.href"
          class="tap-target inline-flex items-center rounded-xl px-4 py-3 text-base font-medium text-forest hover:bg-forest/5"
          @click="closeMenu"
        >
          {{ item.label }}
        </a>
        <AppButton
          href="#contacts"
          variant="donate"
          class="mt-2 w-full"
          @click="closeMenu"
        >
          <template #icon>
            <Heart
              class="size-4"
              aria-hidden="true"
            />
          </template>
          Помочь проекту
        </AppButton>
      </nav>
    </div>
  </header>
</template>
