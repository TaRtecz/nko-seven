import { createApp } from 'vue'
import { MotionPlugin } from '@vueuse/motion'
import App from './App.vue'
import router from './router'
import './assets/main.css'

// Restore path after GitHub Pages 404.html redirect
const redirect = sessionStorage.getItem('gh-pages-redirect')
if (redirect) {
  sessionStorage.removeItem('gh-pages-redirect')
  const base = import.meta.env.BASE_URL.replace(/\/$/, '')
  const normalized = redirect.startsWith(base) ? redirect.slice(base.length) || '/' : redirect
  if (normalized !== '/' && normalized !== '') {
    history.replaceState(null, '', import.meta.env.BASE_URL.replace(/\/$/, '') + normalized)
  }
}

const app = createApp(App)
app.use(router)
app.use(MotionPlugin)
app.mount('#app')
