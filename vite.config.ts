import { defineConfig, type Plugin } from 'vite'
import react from '@vitejs/plugin-react'
import { cp } from 'node:fs/promises'
import { existsSync } from 'node:fs'
import { resolve } from 'node:path'

// After `vite build`, overlay the committed pre-rendered HTML onto dist/.
// This runs in plain Node (no browser), so the host builds normally while
// still shipping static HTML with all text + per-route meta in the source.
function copyPrerendered(): Plugin {
  return {
    name: 'copy-prerendered',
    apply: 'build',
    async closeBundle() {
      const src = resolve(__dirname, 'prerendered')
      if (existsSync(src)) {
        await cp(src, resolve(__dirname, 'dist'), { recursive: true, force: true })
        this.warn?.('copy-prerendered: overlaid prerendered/ onto dist/')
      }
    },
  }
}

// Stable asset filenames (no content hash) so the pre-rendered static HTML
// keeps referencing the same /assets/*.js and *.css across rebuilds.
export default defineConfig({
  plugins: [react(), copyPrerendered()],
  build: {
    rollupOptions: {
      output: {
        entryFileNames: 'assets/[name].js',
        chunkFileNames: 'assets/[name].js',
        assetFileNames: 'assets/[name][extname]',
      },
    },
  },
})
