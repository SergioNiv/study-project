import { createRouter, createWebHashHistory } from 'vue-router'

const routes = [
    { path: '/',
     component: () => import('@/pages/HomePage.vue')},

    { path: '/productos',
     component: () => import('@/pages/ProductPage.vue')},

    { path: '/carrito',
     component: () => import('@/pages/CartPage.vue')},

    { path: '/productos/:id',
     name: 'ProductDetails',
     component: () => import('@/pages/ProductDetailsPage.vue')},

    { path: '/:pathMatch(.*)*',
     component: () => import('@/pages/NoPageFound.vue') },
  ]

  const router = createRouter({
    history: createWebHashHistory(),
    routes,
  })

  export default router