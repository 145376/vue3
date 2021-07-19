import {createRouter, createWebHistory} from 'vue-router';
import sidebar from './sidebar'

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
    ...sidebar
]

const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router