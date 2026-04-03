import js from '@eslint/js'// Importation de la configuration de base pour JavaScript
import globals from 'globals'
import reactHooks from 'eslint-plugin-react-hooks'// Importation du plugin pour les hooks React
import reactRefresh from 'eslint-plugin-react-refresh'// Importation du plugin pour le rafraîchissement rapide de React avec Vite
import { defineConfig, globalIgnores } from 'eslint/config'// Importation des fonctions pour définir la configuration ESLint et ignorer certains fichiers ou dossiers

export default defineConfig([// Définition de la configuration ESLint pour les fichiers JavaScript et JSX
  globalIgnores(['dist']),// Ignorer le dossier de distribution
  {
    files: ['**/*.{js,jsx}'],
    extends: [
      js.configs.recommended,
      reactHooks.configs.flat.recommended,
      reactRefresh.configs.vite,
    ],
    languageOptions: {
      ecmaVersion: 2020,
      globals: globals.browser,
      parserOptions: {
        ecmaVersion: 'latest',
        ecmaFeatures: { jsx: true },
        sourceType: 'module',
      },
    },
    rules: {
      'no-unused-vars': ['error', { varsIgnorePattern: '^[A-Z_]' }],
    },
  },
])
