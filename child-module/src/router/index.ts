import { createMemoryHistory, createRouter, createWebHistory } from 'vue-router'


export default createRouter({
    routes : [
        {
            path : '/list' , 
            component : () => import('../views/List/index.vue')
        },

        {
            path : '/detail' ,
            component : () => import('../views/Detail/index.vue')
        }
    ],
    history : createWebHistory('/_app')
})