import { createRouter, createWebHistory } from "vue-router"
import HelloWorld6 from './components/HelloWorld6.vue'
import HelloJSX3 from "./components/HelloJSX3"

export const router = createRouter({
    history: createWebHistory(),
    routes: [
        {
            path: '/',
            name: 'index',
            component: HelloWorld6,
        },
        {
            path: '/jsx',
            name: 'jsx',
            component: HelloJSX3,
        }
    ]
})