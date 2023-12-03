import { createRouter, createWebHistory } from "vue-router"
import HelloWorld6 from './components/HelloWorld6.vue'
import HelloJSX3 from "./components/HelloJSX3"

export const router = createRouter({
    history: createWebHistory(),
    routes: [
        {
            path: '/',
            name: 'index',
            components: {
                default: HelloWorld6,
                first: HelloWorld6,
                second: HelloJSX3,
            },
        },
        {
            path: '/jsx',
            name: 'jsx',
            components: {
                default: HelloJSX3,
                first: HelloJSX3,
                second: HelloWorld6,
            },
        }
    ]
})