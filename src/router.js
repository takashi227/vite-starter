import { createRouter, createWebHistory } from "vue-router"
import HelloWorld6 from './components/HelloWorld6.vue'
import HelloJSX3 from "./components/HelloJSX3"

export const router = createRouter({
    history: createWebHistory(),
    routes: [
        {
            path: '/',
            redirect: {name:'index', params:{name:'TARO'}},
        },
        {
            path: '/index/:name',
            name: 'index',
            components: {
                default: HelloWorld6,
                first: HelloWorld6,
                second: HelloJSX3,
            },
            props: true,
        },
        {
            path: '/jsx/:name',
            name: 'jsx',
            components: {
                default: HelloJSX3,
                first: HelloJSX3,
                second: HelloWorld6,
            },
            props: true,
        }
    ]
})