import { onMounted, onUnmounted, ref, watch, type Ref } from 'vue'
import gsap from 'gsap'

type Options = {
  target: Ref<number>
  duration?: number
  enabled: Ref<boolean>
}

export const useCountUp = ({ target, duration = 1.6, enabled }: Options) => {
  const display = ref(0)
  let tween: gsap.core.Tween | undefined

  const run = () => {
    tween?.kill()
    const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    if (prefersReduced) {
      display.value = target.value
      return
    }

    const state = { value: 0 }
    tween = gsap.to(state, {
      value: target.value,
      duration,
      ease: 'power2.out',
      onUpdate: () => {
        display.value = Math.round(state.value)
      },
    })
  }

  onMounted(() => {
    if (enabled.value) run()
  })

  watch(enabled, (isEnabled) => {
    if (isEnabled) run()
  })

  onUnmounted(() => {
    tween?.kill()
  })

  return { display }
}
