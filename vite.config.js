// vite.config.js
import { defineConfig } from 'vite'

export default defineConfig({
  base: 'https://asgoDev.github.io/UE-Cristo-Rey-Maestro', // Esto es CRÍTICO para GitHub Pages
  build: {
    outDir: 'dist',
    emptyOutDir: true,
  },
})
