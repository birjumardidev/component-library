import { defineConfig } from 'vite'
import { resolve } from 'path'
// import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  plugins: [
    // tailwindcss(),
  ],
  server:{
    host: true
  },
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'),
        upload: resolve(__dirname, 'upload-page/index.html'),
        component: resolve(__dirname, 'component/index.html'),
      },
    },
  },
})

