# Загрузка лендинга на GitHub и GitHub Pages

Лендинг собран на Vite: сайт публикуется из папки `dist` через ветку `gh-pages`.

---

## 1. Создайте репозиторий на GitHub

1. Откройте **https://github.com/new**
2. **Repository name:** `japan-travel-kutuzov` (или другое имя)
3. **Public**
4. **НЕ** ставьте галочки «Add a README» / «Add .gitignore» — репозиторий должен быть пустым
5. Нажмите **Create repository**

---

## 2. Установите зависимости и соберите проект

В терминале:

```bash
cd "/Users/poslednijgeroj/Library/Mobile Documents/com~apple~CloudDocs/japan-travel-kutuzov"

npm install
npm run build
```

Убедитесь, что появилась папка `dist`.

---

## 3. Подключите remote и запушьте код

Подставьте **ваш логин GitHub** вместо `utromaya-code` (или используйте свой):

```bash
git remote add origin https://github.com/utromaya-code/japan-travel-kutuzov.git
git branch -M main
git push -u origin main
```

Если используете **Personal Access Token**: при запросе пароля введите токен вместо пароля от аккаунта.  
Либо используйте SSH: `git@github.com:utromaya-code/japan-travel-kutuzov.git`.

---

## 4. Опубликуйте сайт на GitHub Pages

Выполните деплой (сборка + отправка ветки `gh-pages`):

```bash
npm run deploy
```

Затем в репозитории на GitHub:

1. **Settings** → слева **Pages**
2. **Source:** Deploy from a branch
3. **Branch:** `gh-pages` → папка **/ (root)** → **Save**

Через 1–2 минуты сайт откроется по адресу:

**https://utromaya-code.github.io/japan-travel-kutuzov/**

(замените `utromaya-code` на ваш логин, если создавали репозиторий под другим аккаунтом)

---

## Если репозиторий уже создан

Если вы уже создали репозиторий и хотите только обновить сайт:

```bash
cd "/Users/poslednijgeroj/Library/Mobile Documents/com~apple~CloudDocs/japan-travel-kutuzov"
npm run deploy
```

Этого достаточно: скрипт соберёт проект и обновит ветку `gh-pages`.
