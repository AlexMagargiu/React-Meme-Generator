// vite.config.js
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig(({ command }) => {
  const config = {
    plugins: [react()],
    base: 'https://alexmagargiu.github.io/React-Meme-Generator',
  }

  if (command !== 'serve') {
    config.base = '/React-Meme-Generator/'
  }

  return config
})
