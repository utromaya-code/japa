# Отправка заявок с лендинга в Telegram

Чтобы заявки с формы «Забронировать место» приходили в ваш Telegram, нужно:

1. Создать бота и получить токен  
2. Узнать свой `chat_id`  
3. Задеплоить API на Vercel и указать переменные  
4. Указать URL API в проекте лендинга  

---

## 1. Создать бота в Telegram

1. Откройте Telegram и найдите **@BotFather**.  
2. Отправьте команду `/newbot`.  
3. Введите имя бота (например: «Заявки Япония») и username (например: `japan_travel_bot`).  
4. BotFather пришлёт **токен** вида `123456789:ABCdefGHIjklMNOpqrsTUVwxyz`.  
   Сохраните его — это ваш **TELEGRAM_BOT_TOKEN**.  

---

## 2. Узнать chat_id

1. Напишите вашему новому боту любое сообщение (например: «Привет»).  
2. Откройте в браузере (подставьте свой токен):  
   `https://api.telegram.org/bot<ВАШ_ТОКЕН>/getUpdates`  
3. В ответе найдите блок `"chat":{"id": 123456789}`.  
   Число `123456789` — это ваш **TELEGRAM_CHAT_ID**.  

---

## 3. Деплой API на Vercel

В проекте уже есть папка **api** с функцией `api/telegram.js`. Её нужно задеплоить на Vercel.

### Вариант A: весь проект на Vercel

1. Зарегистрируйтесь на [vercel.com](https://vercel.com) и привяжите GitHub.  
2. Импортируйте репозиторий **utromaya-code/japa**.  
3. В настройках проекта (**Settings → Environment Variables**) добавьте:
   - **TELEGRAM_BOT_TOKEN** — токен от BotFather  
   - **TELEGRAM_CHAT_ID** — ваш chat_id (число или строка)  
4. Деплой. Vercel соберёт сайт и создаст endpoint вида:  
   `https://ваш-проект.vercel.app/api/telegram`  

Тогда лендинг можно открывать с Vercel, и форма будет слать запросы на тот же домен (`/api/telegram`).  
Если в Vite не задан `VITE_TELEGRAM_API_URL`, можно в **Vercel → Settings → Environment Variables** добавить для Production:  
**VITE_TELEGRAM_API_URL** = `https://ваш-проект.vercel.app/api/telegram`  
и пересобрать проект.

### Вариант B: лендинг на GitHub Pages, API на Vercel

1. Создайте на Vercel отдельный проект (можно тот же репозиторий **japa** или копию только с папкой **api**).  
2. В настройках проекта задайте **TELEGRAM_BOT_TOKEN** и **TELEGRAM_CHAT_ID**.  
3. После деплоя скопируйте URL функции, например:  
   `https://japa-api.vercel.app/api/telegram`  

В проекте лендинга (перед сборкой для GitHub Pages) создайте файл **.env.production** в корне:

```
VITE_TELEGRAM_API_URL=https://ваш-проект.vercel.app/api/telegram
```

При `npm run build` Vite подставит этот URL в форму. После деплоя на GitHub Pages заявки будут уходить на Vercel → в Telegram.

---

## 4. Проверка

1. Откройте лендинг и отправьте тестовую заявку.  
2. В Telegram должно прийти сообщение от бота с полями: Имя, Email, Телефон, Комментарий.  

Если сообщение не пришло:

- Проверьте, что **TELEGRAM_BOT_TOKEN** и **TELEGRAM_CHAT_ID** заданы в Vercel и пересобран проект.  
- Для GitHub Pages проверьте, что в **.env.production** указан правильный **VITE_TELEGRAM_API_URL** и вы заново выполнили `npm run build` и деплой.  
- В браузере (F12 → Network) посмотрите запрос к `/api/telegram`: статус и ответ сервера.  

---

**Без настройки Telegram** форма продолжит работать через Formspree (если вы его настраивали). Чтобы использовать только Telegram, задайте **VITE_TELEGRAM_API_URL** и при необходимости замените или удалите URL Formspree в коде формы.
