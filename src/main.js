import { createApp } from 'vue'
import { createPinia } from 'pinia'
import piniaPluginPersistedstate from 'pinia-plugin-persistedstate'
import App from './App.vue'
import router from './router'
import 'vfonts/Lato.css'
import naive from 'naive-ui'
import 'vfonts/FiraCode.css'

import mitt from 'mitt';  
const emitter = mitt(); 

const app = createApp(App)
const pinia = createPinia()
pinia.use(({ store }) => {
    const init = JSON.parse(JSON.stringify(store.$state));
    store.$reset = () => {
        store.$patch(init)
    }
})
pinia.use(piniaPluginPersistedstate)
app.use(pinia)
app.use(naive)

app.provide('emitter', emitter);  
app.use(router)

app.mount('#app')
