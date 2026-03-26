import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  base: '/vesta-buildworks/', // Repository name
  assetsInclude: ['**/*.zip'] // Add zip files to assets
}) 