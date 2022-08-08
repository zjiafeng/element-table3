import { createApp } from 'vue'
import App from './App.vue'
import elementTable3 from '../packages/index'
import { vLoading } from 'element-plus'
import 'element-plus/theme-chalk/el-loading.css'

const app = createApp(App)
app.use(elementTable3)
    .directive('loading', vLoading)
    .mount('#app')
