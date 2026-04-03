import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'// Importation du plugin React pour Vite afin de permettre le support de React dans le projet

export default defineConfig({// Configuration de Vite pour le projet React
  plugins: [react()],
  test: {
    environment: 'jsdom',// Utilisation de l'environnement jsdom pour les tests
    globals: true,
    setupFiles: './src/setupTests.js',
    coverage: {
      provider: 'v8',
      reporter: ['text', 'html'],
    },
  }
})