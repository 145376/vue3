import {createRouter, createWebHistory} from 'vue-router';

const routes = [
    {
        path: '/',
        redirect: '/login'
    },
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
        path: '/about',
        name: 'about',
        component: () => import('../pages/About')
    },
    {
        path: '/home',
        name: 'home',
        component: () => import('../pages/Home')
    }
]

const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router