import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import '@/style.css' //Realizar la importacion para que funcione Tailwind

createApp(App).use(store).use(router).mount('#app')
