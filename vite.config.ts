import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  // Для GitHub Pages: https://utromaya-code.github.io/japa/
  base: '/japa/',
})
