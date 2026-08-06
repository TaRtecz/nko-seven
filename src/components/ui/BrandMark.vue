<script setup lang="ts">
type Props = {
  class?: string
}

defineProps<Props>()
</script>

<template>
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 64 64"
    fill="none"
    aria-hidden="true"
    :class="['shrink-0', $props.class]"
  >
    <circle
      cx="32"
      cy="32"
      r="28"
      class="fill-forest"
    />
    <circle
      cx="32"
      cy="18"
      r="5.5"
      class="fill-peach"
    />
    <circle
      cx="44"
      cy="24"
      r="5.5"
      class="fill-coral"
    />
    <circle
      cx="48"
      cy="36"
      r="5.5"
      class="fill-sun"
    />
    <circle
      cx="40"
      cy="46"
      r="5.5"
      class="fill-teal"
    />
    <circle
      cx="24"
      cy="46"
      r="5.5"
      class="fill-sky"
    />
    <circle
      cx="16"
      cy="36"
      r="5.5"
      class="fill-mist"
    />
    <circle
      cx="20"
      cy="24"
      r="5.5"
      class="fill-cream"
    />
  </svg>
</template>
