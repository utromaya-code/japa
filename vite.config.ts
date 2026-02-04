import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  // Домен: https://leo-japan.ru (GitHub Pages)
  base: '/',
})
