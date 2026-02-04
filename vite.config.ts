import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  // GitHub Pages: utromaya-code.github.io/japa/ ; для leo-japan.ru см. DEPLOY.md (base: '/')
  base: '/japa/',
})
