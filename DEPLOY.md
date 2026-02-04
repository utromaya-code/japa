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

**https://leo-japan.ru**

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

## Домен leo-japan.ru

Сайт настроен на домен **https://leo-japan.ru**.

### Шаг 1. Указать домен в настройках GitHub

1. Откройте **https://github.com/utromaya-code/japa** → **Settings** → **Pages**
2. В поле **Custom domain** введите: **leo-japan.ru**
3. Нажмите **Save**
4. Включите **Enforce HTTPS** (рекомендуется)

### Шаг 2. Настроить DNS у регистратора домена

Зайдите в панель управления доменом **leo-japan.ru** (Reg.ru, Timeweb, Cloudflare и т.п.) и добавьте записи.

**Корневой домен leo-japan.ru** (сайт открывается по https://leo-japan.ru):

| Тип  | Имя (Host) | Значение (Value)   |
|------|-------------|--------------------|
| A    | `@`         | `185.199.108.153`  |
| A    | `@`         | `185.199.109.153`  |
| A    | `@`         | `185.199.110.153`  |
| A    | `@`         | `185.199.111.153`  |

**Поддомен www.leo-japan.ru** (чтобы https://www.leo-japan.ru тоже открывал сайт):

| Тип   | Имя (Host) | Значение (Value)        |
|-------|------------|--------------------------|
| CNAME | `www`      | `utromaya-code.github.io` |

### Шаг 3. Подождать и проверить

- Изменения DNS могут применяться от нескольких минут до 24–48 часов.
- Когда DNS обновится, в **Settings → Pages** галочка рядом с доменом станет зелёной.
- Сайт будет открываться по **https://leo-japan.ru**. GitHub выдаст бесплатный SSL при включённом **Enforce HTTPS**.

---

## Отправка заявок в Telegram

Чтобы заявки с формы приходили в Telegram, настройте бота и API по инструкции в файле **TELEGRAM.md**.
