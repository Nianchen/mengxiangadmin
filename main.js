import { createApp } from 'vue'
import App from './App.vue'
import  Antd from 'ant-design-vue'
import 'ant-design-vue/dist/antd.css'
import router from './router/index'
import VueParticles from 'vue-particles'
import {createPinia}  from 'pinia'


const app = createApp(App)
app.use(Antd)
app.use(createPinia())
app.use(router)
app.use(VueParticles)
app.mount('#app')


