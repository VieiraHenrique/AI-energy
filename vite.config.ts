import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: './', // CRUCIAL : Permet à l'app de fonctionner quel que soit le chemin d'accès (fixe souvent l'écran blanc)
  server: {
    host: true
  }
})