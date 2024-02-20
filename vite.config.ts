import { fileURLToPath, URL } from 'node:url'
import { VitePWA } from 'vite-plugin-pwa';
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({  
  /*server: {
    proxy: {
      '/api': 'http://fu2.computerhuys.nl', 
    },
  },*/
  plugins: [
    vue(),
    VitePWA({
      registerType: 'autoUpdate',
      includeAssets: ['favicon.ico', 'robots.txt', '/img/icons/ios/180.png'],
      workbox: {
        globPatterns: ['**/*.{js,css,html,png,svg,ico,pdf}'],
      },
      manifest: {
        name: 'WKB App',
        short_name: 'WKB',
        description: 'WKB app',
        theme_color: '#01bd7e',
        start_url: '/',
        display: 'standalone',
        background_color: "#fff",
        icons: [
          {
            "src": "pwa-64x64.png",
            "sizes": "64x64",
            "type": "image/png"
          },
          {
            "src": "pwa-192x192.png",
            "sizes": "192x192",
            "type": "image/png"
          },
          {
            "src": "pwa-512x512.png",
            "sizes": "512x512",
            "type": "image/png"
          },
          {
            "src": "maskable-icon-512x512.png",
            "sizes": "512x512",
            "type": "image/png",
            "purpose": "maskable"
          }
        ]
      },
    }),          


  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  },
  build: {
    manifest: false,
    rollupOptions: {
      external: [
        'https://fu2.computerhuys.nl/file/CHA.pdf',
        'https://fu2.computerhuys.nl/file/CHB.pdf',
        'https://fu2.computerhuys.nl/file/CHC1.pdf',
        'https://fu2.computerhuys.nl/file/CHC2.pdf',
        'https://fu2.computerhuys.nl/file/CDA.pdf',
        'https://fu2.computerhuys.nl/file/CDB.pdf',
        'https://fu2.computerhuys.nl/file/CDC1pdf',
        'https://fu2.computerhuys.nl/file/CDC2.pdf',
        'https://fu2.computerhuys.nl/file/CHT1.pdf',
        'https://fu2.computerhuys.nl/file/CHT2.pdf',
        'https://fu2.computerhuys.nl/file/CDT1.pdf',
        'https://fu2.computerhuys.nl/file/CDT2.pdf'
      ]
    }
  }
})
