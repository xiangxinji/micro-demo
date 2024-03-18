import { createWebHistory, createRouter } from 'vue-router'
import Render from '../components/render.vue'


export default createRouter({
    routes : [
        {
            path : '/_app/list' ,
            component :Render 
        },
        {
            path : '/_app/detail' ,
            component : Render
        }
    ],
    history : createWebHistory()
})