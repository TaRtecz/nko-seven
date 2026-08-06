import { createRouter, createWebHistory } from 'vue-router'
import HomePage from '@/pages/HomePage.vue'

const router = createRouter({
  // History + единственный маршрут `/`: якоря #section работают,
  // refresh на корне GH Pages отдаёт index.html.
  // Если появятся дочерние пути — добавь public/404.html redirect-хак.
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomePage,
    },
    {
      path: '/:pathMatch(.*)*',
      redirect: '/',
    },
  ],
  scrollBehavior(to) {
    if (to.hash) {
      return {
        el: to.hash,
        behavior: 'smooth',
        top: 88,
      }
    }
    return { top: 0 }
  },
})

export default router
