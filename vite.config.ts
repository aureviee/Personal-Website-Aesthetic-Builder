import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  base: './', // ✅ 使用相對路徑才能部署在 root
  plugins: [react()],
})
