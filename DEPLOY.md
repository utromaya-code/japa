# Загрузка и обновление лендинга на GitHub Pages

Репозиторий: **https://github.com/utromaya-code/japa**

---

## Как обновить сайт (запустить последние изменения)

Деплой идёт через **GitHub Actions**: при каждом пуше в ветку `main` сайт автоматически собирается и публикуется.

В терминале:

```bash
cd "/Users/poslednijgeroj/Library/Mobile Documents/com~apple~CloudDocs/japan-travel-kutuzov"

git add .
git commit -m "Фото Леонида, организатор Андрей Баранов, контакт @vsemaya"
git push origin main
```

Через 1–3 минуты после `git push` обновлённый сайт будет на:

**https://utromaya-code.github.io/japa/**

Статус сборки смотрите во вкладке **Actions** репозитория на GitHub.

---

## Первый запуск: включить GitHub Pages

Если сайт ещё не открывался:

1. Откройте **https://github.com/utromaya-code/japa**
2. **Settings** → слева **Pages**
3. В блоке **Build and deployment**:
   - **Source:** GitHub Actions
4. Сохраните. При следующем пуше в `main` workflow соберёт и задеплоит сайт.

---

## Привязка своего домена (внешний домен)

К этому сайту **можно привязать свой домен** (например `japan-trip.ru` или `trip.vashsite.ru`). GitHub Pages это поддерживает.

### Шаг 1. Указать домен в настройках репозитория

1. Откройте **https://github.com/utromaya-code/japa** → **Settings** → **Pages**
2. В поле **Custom domain** введите ваш домен (например `japan-trip.ru` или `www.japan-trip.ru`)
3. Нажмите **Save**
4. По желанию включите **Enforce HTTPS** (рекомендуется)

GitHub покажет, какие записи нужно добавить у регистратора домена.

### Шаг 2. Настроить DNS у регистратора домена

Зайдите в панель управления доменом (Reg.ru, Timeweb, Cloudflare, и т.п.) и добавьте записи.

**Вариант A: поддомен** (например `japan.vashsite.ru` или `www.japan-trip.ru`)

| Тип  | Имя (Host) | Значение (Value)        |
|------|------------|--------------------------|
| CNAME| `japan` или `www` | `utromaya-code.github.io` |

**Вариант B: корневой домен** (например `japan-trip.ru` без www)

| Тип | Имя | Значение        |
|-----|-----|------------------|
| A   | @   | `185.199.108.153` |
| A   | @   | `185.199.109.153` |
| A   | @   | `185.199.110.153` |
| A   | @   | `185.199.111.153` |

(Актуальные IP для GitHub Pages лучше сверить в справке: [GitHub Pages custom domain](https://docs.github.com/en/pages/configuring-a-custom-domain-for-your-github-pages-site).)

### Шаг 3. Подождать и проверить

- Изменения DNS могут применяться от нескольких минут до 24–48 часов.
- Когда DNS обновится, в **Settings → Pages** галочка рядом с доменом станет зелёной.
- После этого сайт будет открываться по вашему домену. Если включён **Enforce HTTPS**, GitHub выдаст бесплатный SSL-сертификат.

### Важно для Vite (SPA)

В `vite.config.ts` задано `base: '/japa/'` — так фото и ассеты корректно грузятся на **utromaya-code.github.io/japa/**. Если привяжете свой домен в корне (например japan-trip.ru), поменяйте в `vite.config.ts` на `base: '/'` и пересоберите проект.

---

## Отправка заявок в Telegram

Чтобы заявки с формы приходили в Telegram, настройте бота и API по инструкции в файле **TELEGRAM.md**.
