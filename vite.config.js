import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  base: '/teetuner-style-site/',
  assetsInclude: ['**/*.zip'] // Add zip files to assets
}) 