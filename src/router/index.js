import {createRouter, createWebHistory} from 'vue-router';
import Layout from '@/layout/index.vue'

const routes = [
    {
        path: '/login',
        name: 'login',
        component: () => import('../pages/Login')
    },
    {
        path: '/register',
        name: 'register',
        component: () => import('../pages/Register')
    },
    {
        path: '/',
        redirect: '/home',
        component: Layout,
        children:[
            {
                path: 'home',
                name: 'Home',
                component: () => import('@/pages/Home'),
                mate:{title: '首页'}
            }
        ]

    },
    {
        path: '/about',
        component: Layout,
        children:[
            {
                path: 'index',
                name: 'About',
                component: () => import('@/pages/About'),
                mate:{title: '关于'}
            }
        ]
    },
]

const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router