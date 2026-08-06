import { onMounted, onUnmounted, ref } from 'vue'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

export const useScrollReveal = () => {
  const root = ref<HTMLElement | null>(null)
  let ctx: gsap.Context | undefined

  onMounted(() => {
    if (!root.value) return

    const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    if (prefersReduced) return

    ctx = gsap.context(() => {
      gsap.utils.toArray<HTMLElement>('[data-reveal]').forEach((el) => {
        gsap.set(el, { autoAlpha: 0, y: 24 })
        gsap.to(el, {
          autoAlpha: 1,
          y: 0,
          duration: 0.75,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: el,
            start: 'top 90%',
            toggleActions: 'play none none none',
            once: true,
          },
        })
      })

      gsap.utils.toArray<HTMLElement>('[data-reveal-stagger]').forEach((group) => {
        const items = group.querySelectorAll<HTMLElement>('[data-reveal-item]')
        gsap.set(items, { autoAlpha: 0, y: 20 })
        gsap.to(items, {
          autoAlpha: 1,
          y: 0,
          duration: 0.65,
          ease: 'power2.out',
          stagger: 0.08,
          scrollTrigger: {
            trigger: group,
            start: 'top 88%',
            toggleActions: 'play none none none',
            once: true,
          },
        })
      })

      requestAnimationFrame(() => {
        ScrollTrigger.refresh()
      })
    }, root.value)
  })

  onUnmounted(() => {
    ctx?.revert()
  })

  return { root }
}
