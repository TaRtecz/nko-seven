# Семицветик — лендинг НКО

Vue 3 + TypeScript + Tailwind CSS SPA для GitHub Pages.

## Dev

```bash
npm install
npm run dev
```

## Build

```bash
npm run build
npm run preview
```

## GitHub Pages

1. Settings → Pages → Source: **GitHub Actions**
2. Пуш в `main` → workflow `.github/workflows/deploy.yml` собирает и деплоит `dist`
3. `base` в `vite.config.ts` = `/nko-seven-color/` (имя репозитория)
4. Роутер: `createWebHistory` + `public/404.html` fallback для дочерних путей
5. Якоря секций (`#services`, `#contacts`) работают нативно

Если репозиторий называется иначе — поменяй `base` в `vite.config.ts` и путь в `public/404.html`.
