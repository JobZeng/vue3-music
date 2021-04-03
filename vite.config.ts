import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import path from 'path'
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  base: './',
  resolve: {
    alias: {
      'src': path.resolve(__dirname, 'src'),
      'common': path.resolve(__dirname, 'src/common') 

    },
    extensions: ['.mjs', '.js', '.ts', '.jsx', '.tsx', '.json']
  },
  server: {
    // 指定服务器主机名
    host: 'localhost',
    // 开发环境启动的端口号
    port: 3008,
    // 是否在开发环境下自动打开应用程序
    open: true,
    // 代理
    proxy: {
      '/api': {
        target: 'http://jsonplaceholder.typicode.com',
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api/, '')
      }
    }
  }
})
