import { createRouter, createWebHistory } from 'vue-router'

import Card from '../pages/Cart.vue'
import Orders from '../pages/Orders.vue'
import Support from '../pages/Support.vue'
import Contact from '../pages/Contact.vue'
import Profile from '../pages/Profile.vue'
import Order from '../pages/Order.vue'
import Books from '../components/books.vue'
import Notebooks from '../components/notebooks.vue'
import Phone from '../components/phone.vue'

const routes = [
    { path: '/card', component: Card },
    { path: '/orders', component: Orders },
    { path: '/support', component: Support },
    { path: '/contact', component: Contact },
    {
        path: '/profile',
        component: Profile,
        children: [
            { path: 'books', component: Books },
            { path: 'notebooks', component: Notebooks },
            { path: 'phone', component: Phone },
        ]
    },
    { path: '/order/:id', component: Order },
    { path: '/:pathMatch(.*)*', component: () => import('../pages/notfound.vue') },
]

const router = createRouter({
    history: createWebHistory(),
    routes,
})

export default router
