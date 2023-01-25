import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'
import 'vfonts/Lato.css'
import naive from 'naive-ui'
import 'vfonts/FiraCode.css'


const app = createApp(App)

app.use(createPinia())
app.use(naive)
app.use(router)

app.mount('#app')
