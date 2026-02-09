import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  // Для работы на leo-japan.ru (custom domain). Ссылка utromaya-code.github.io/japa/ при этом перестаёт работать.
  base: '/',
})
