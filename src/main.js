import { createApp } from 'vue'

// 引入Element Plus
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'

// 导入Axios模块
import axios from 'axios'
import VueAxios from 'vue-axios'

// 引入路由模块
import Router from './router/Router'

import App from './App.vue'

const app = createApp(App)
 

app.use(ElementPlus)

// 注册Axios
app.use(VueAxios, axios)

app.use(Router)
app.mount('#app')
