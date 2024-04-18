import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import router from './Router.js'

const app = createApp(App)
app.config.globalProperties.testuser = ''

app.use(router).mount('#app')