import { createRouter, createWebHistory } from 'vue-router'

import Card from '../pages/Cart.vue'
import Orders from '../pages/Orders.vue'
import Support from '../pages/Support.vue'
import Contact from '../pages/Contact.vue'
import Profile from '../pages/Profile.vue'
import Order from '../pages/Order.vue'
import Login from '../pages/Login.vue'
import Books from '../components/books.vue'
import Notebooks from '../components/notebooks.vue'
import Phone from '../components/phone.vue'
import {loginUseStore} from "../store/loginUse.js";

const routes = [
    { path: '/', component: Card , meta: { requireAuth: true }  },
    { path: '/card', component: Card, meta: { requireAuth: true }  },
    { path: '/orders', component: Orders, meta: { requireAuth: true }  },
    { path: '/support', component: Support, meta: { requireAuth: true }},
    { path: '/contact', component: Contact, meta: { requireAuth: true }  },
    { path: '/login', component: Login, },
    {
        path: '/profile',
        component: Profile,
        meta: { requireAuth: true },
        children: [
            { path: 'books', component: Books },
            { path: 'notebooks', component: Notebooks },
            { path: 'phone', component: Phone },

        ]
    },
    { path: '/order/:id', component: Order },
    { path: '/:pathMatch(.*)*', component: () => import('../pages/Cart.vue') },
]

const router = createRouter({
    history: createWebHistory(),
    routes,
})

router.beforeEach((to, from, next) => {
    const loginStore = loginUseStore()

    if (!loginStore.isAuthenticated && to.meta.requireAuth){
        next({ path: '/login' })
    }else{
        next()
    }
})

export default router
