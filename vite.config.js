import {UserConfig, ConfigEnv,defineConfig , loadEnv} from 'vite'
import path from 'path'
import vue from '@vitejs/plugin-vue'
import viteSvgIcons from 'vite-plugin-svg-icons';

// https://vitejs.dev/config/
export default defineConfig(({ command, mode }) => {
  const env = loadEnv(mode, process.cwd())
  
  if (command === 'dev') {
    return {
    plugins: [vue()],
    assetsInclude: ['**/*.gltf'],
     // 本地反向代理解决浏览器跨域限制
    server: {
      host: '0.0.0.0',
      port: Number(env.VITE_APP_PORT),
      open: true, // 运行自动打开浏览器
      proxy: {
          [env.VITE_APP_BASE_API]: {
              target: 'http://127.0.0.1:3002',
              changeOrigin: true,
              rewrite: path => path.replace(new RegExp('^' + env.VITE_APP_BASE_API), '')
          },
          '/api':{
               target: 'http://127.0.0.1:8593',
               changeOrigin: true,
               rewrite: path => path.replace(new RegExp('^' + env.VITE_APP_BASE_API), '')
          }
      }
  },
    resolve: {
       extensions:['.mjs', '.js', '.ts', '.jsx', '.tsx', '.json'],
        // Vite 设置别名路径
        alias: {
          '@': path.resolve('./src'),
        }
    }
    }
  }else {
    return(
      {
          plugins: [
              vue(),
              viteSvgIcons({
                  // 指定需要缓存的图标文件夹
                  iconDirs: [path.resolve(process.cwd(), 'src/assets/icons')],
                  // 指定symbolId格式
                  symbolId: 'icon-[dir]-[name]',
              })

          ],
          // 本地反向代理解决浏览器跨域限制
          server: {
              host: '0.0.0.0',
              port: Number(env.VITE_APP_PORT),
              open: true, // 运行自动打开浏览器
              proxy: {
                  [env.VITE_APP_BASE_API]: {
                      target: 'http://127.0.0.1:3001',
                      changeOrigin: true,
                      rewrite: path => path.replace(new RegExp('^' + env.VITE_APP_BASE_API), '')
                  },
                  '/api':{
                       target: 'http://127.0.0.1:8598',
                       changeOrigin: true,
                       rewrite: path => path.replace(new RegExp('^' + env.VITE_APP_BASE_API), '')
                  }
              }
          },
          resolve: {
              // Vite 设置别名路径
              alias: {
                '@': path.resolve('./src'),
              }
          }
      }
    )
  }
})
