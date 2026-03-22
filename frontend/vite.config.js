import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  test: {
   globals: true,
    environment: 'jsdom',
    // إذا كان الملف داخل src/tests/ ديري هاد المسار:
    setupFiles: './src/tests/setup.js',
  },
})
