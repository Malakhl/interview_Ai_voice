import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  test: {
    globals: true,
    environment: 'jsdom', // ضروري باش يحاكي المتصفح
    setupFiles: './tests/setup.js', // هادا هو الملف لي صيفطتي قبيلة
  },
})
