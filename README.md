# Путешествие в Японию с Леонидом Кутузовым

Лендинг авторского путешествия в Японию (10–20 октября 2026): момидзи, храмы Киото, Коясан, Хоккайдо, онсены, Фудзи.

## Стек

- React 18 + Vite + TypeScript
- Tailwind CSS (палитра момидзи)
- Framer Motion (анимации)
- React Hook Form + Zod + Formspree
- yet-another-react-lightbox (галерея)

## Запуск

```bash
cd japan-travel-kutuzov
npm install
npm run dev
```

Откройте [http://localhost:5173](http://localhost:5173).

## Сборка и деплой на GitHub Pages

1. Создайте репозиторий на GitHub.
2. В `package.json` уже есть скрипт: `"deploy": "npm run build && gh-pages -d dist"`.
3. В настройках репозитория: **Settings → Pages → Source**: выберите ветку `gh-pages` и папку `/ (root)`.
4. Выполните:
   ```bash
   git remote add origin https://github.com/USERNAME/japan-travel-kutuzov.git
   npm run deploy
   ```

Сайт будет доступен по адресу `https://USERNAME.github.io/japan-travel-kutuzov/`.

## Контакты на лендинге

Замените в файле `src/components/ContactForm.tsx` плейсхолдеры на реальные данные:

- `info@example.com` → ваш email
- `https://formspree.io/f/xpwnqgjk` → ваш Formspree endpoint (или создайте форму на [formspree.io](https://formspree.io))
- Telegram, WhatsApp, Instagram — ваши ссылки

В `src/components/Footer.tsx` при необходимости обновите ссылки на соцсети.

## Структура

- `src/components/` — секции: Hero (с падающими листьями), Nav, Brief, Locations, UniqueFeatures, ProgramTimeline, AboutInstructor, Gallery, PracticalInfo, FAQ, ContactForm, Footer
- `src/data/` — контент: локации, особенности, программа, FAQ, галерея
- Изображения подгружаются с Unsplash по URL (можно заменить на локальные в `public/images/`)

🍁 **Момидзи 2026**
