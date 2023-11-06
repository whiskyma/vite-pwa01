import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { VitePWA } from 'vite-plugin-pwa'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    VitePWA({
      registerType: 'autoUpdate',
      manifest: {
        // 安装应用后显示的应用名
        name: "AAAA",
        description: "应用描述",
        // 至少配置一个图标
        icons: [{
          // 注意如果应用不是部署在站点根目录则需要相对路径，图片文件放在项目/public/pwa/192x192.png
            src: "/pwa/android-192x192.png",
            sizes: "192x192",
            type: "image/png"
        }]
      },
      workbox: {
        // 对所有匹配的静态资源进行缓存
        globPatterns: ["**/*.{js,css,html,ico,png,svg}"],
      },
      devOptions: {
        enabled: true
      }
    })
  ],
  base: './'
})
