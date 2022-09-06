import { createApp } from 'vue'
import App from './App.vue'
import store from './store/localStoage.ts'
import router from './router' 
import request from './api/Request.ts'
import './index.css'
import 'material-design-icons-iconfont/dist/material-design-icons.css'
import usePub from './utils/pub-use.ts'


const app = createApp(App)

app.use(router).use(request).use(usePub).use(store)
  .mount('#app')
