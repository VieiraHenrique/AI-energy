import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: './', // Ensures assets are loaded correctly regardless of deployment path
  server: {
    host: true,
    port: 3000
  },
  build: {
    outDir: 'dist',
  }
})