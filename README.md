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

1. Repo **Settings → Pages → Source: GitHub Actions**
2. Пуш в `master` (или `main`) → workflow деплоит `dist`
3. CI сам ставит `VITE_BASE=/${{ github.event.repository.name }}/` → для этого репо `/nko-seven/`
4. URL: `https://tartecz.github.io/nko-seven/`
5. `public/404.html` — SPA fallback для дочерних путей

Если Pages ещё не включал: после первого успешного workflow сайт появится сам.
