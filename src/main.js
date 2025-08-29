import { createApp } from 'vue'
import App from './App.vue'
import router from './router/document.js'

const app = createApp(App)
app.use(router)
app.mount('#app')

