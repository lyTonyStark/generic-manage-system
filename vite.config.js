import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import WindiCSS from 'vite-plugin-windicss'
import path from 'path'

// https://vitejs.dev/config/
export default defineConfig({
  resolve: {
    alias: {
      "~": path.resolve(__dirname, "src")
    }
  },
  plugins: [vue(),WindiCSS()],
  
  //反向代理
  server: {
    proxy: {
      '/users': {
        target: 'http://localhost:3000/users',
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/users/, '')
      }
    }
  }
})
