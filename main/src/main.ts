import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import router from './router'
import microApp from '@micro-zoe/micro-app'


microApp.start({
    'disable-memory-router': true,
    'disable-patch-request': true,
    iframe : true 
})


createApp(App).use(router).mount('#app')
