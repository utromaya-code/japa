# Загрузка лендинга на GitHub и GitHub Pages

Репозиторий: **https://github.com/utromaya-code/japa**  
Код уже запушен в ветку `main`. Осталось опубликовать сайт на GitHub Pages.

---

## 1. Установите зависимости и задеплойте сайт

В терминале выполните:

```bash
cd "/Users/poslednijgeroj/Library/Mobile Documents/com~apple~CloudDocs/japan-travel-kutuzov"

npm install
npm run deploy
```

Скрипт `deploy` соберёт проект (Vite) и отправит папку `dist` в ветку `gh-pages` репозитория.

---

## 2. Включите GitHub Pages в настройках репозитория

1. Откройте **https://github.com/utromaya-code/japa**
2. **Settings** → слева **Pages**
3. **Source:** Deploy from a branch
4. **Branch:** выберите `gh-pages` → папка **/ (root)** → **Save**

Через 1–2 минуты сайт будет доступен по адресу:

**https://utromaya-code.github.io/japa/**

---

## Обновление сайта после изменений

После правок в коде:

```bash
cd "/Users/poslednijgeroj/Library/Mobile Documents/com~apple~CloudDocs/japan-travel-kutuzov"
git add .
git commit -m "Описание изменений"
git push
npm run deploy
```

Ветка `gh-pages` обновится, и GitHub Pages пересоберёт сайт автоматически.
