// vite.config.js
import { defineConfig } from 'vite'

export default defineConfig({
  base: './', // Esto es CRÍTICO para GitHub Pages
  build: {
    outDir: 'dist',
    emptyOutDir: true,
  },
})
