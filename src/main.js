import { createApp } from 'vue'

// 引入Element Plus
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'

// 导入Axios模块
import axios from 'axios'
import VueAxios from 'vue-axios'

import App from './App.vue'

const app = createApp(App)

app.use(Router)
app.use(Store)

app.use(ElementPlus)

// 注册Axios
app.use(VueAxios, axios)
app.mount('#app')
