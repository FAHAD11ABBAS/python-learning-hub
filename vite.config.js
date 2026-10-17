import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: '/python-learning-hub/',
  server: {
    port: 3000,
    open: true,
  },
})
