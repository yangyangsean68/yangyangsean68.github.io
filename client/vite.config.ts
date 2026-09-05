import fs from 'node:fs'
import path from 'node:path'
import { fileURLToPath } from 'node:url'
import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'

const configDir = path.dirname(fileURLToPath(import.meta.url))
const docsDir = path.resolve(configDir, '../docs')

function githubPagesSpa() {
  return {
    name: 'github-pages-spa',
    closeBundle() {
      const indexFile = path.join(docsDir, 'index.html')
      if (!fs.existsSync(indexFile)) return
      fs.copyFileSync(indexFile, path.join(docsDir, '404.html'))
      fs.writeFileSync(path.join(docsDir, '.nojekyll'), '')
    },
  }
}

export default defineConfig({
  plugins: [react(), githubPagesSpa()],
  base: '/',
  build: {
    outDir: docsDir,
    emptyOutDir: true,
  },
  server: {
    port: 5173,
    proxy: {
      '/api': {
        target: 'http://localhost:3001',
        changeOrigin: true,
      },
    },
  },
})
