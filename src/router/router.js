import { createRouter, createWebHashHistory } from 'vue-router'

const routes = [
    { path: '/',
     component: () => import(/*webpackChuckName: 'HomePage'*/'@/pages/HomePage.vue')},

    { path: '/productos',
     component: () => import(/*webpackChuckName: 'ProductPage'*/'@/pages/ProductPage.vue')},

     { path: '/productos/detalles',
     component: () => import(/*webpackChuckName: 'ProductDetailsPage'*/'@/pages/ProductDetailsPage.vue')},

    { path: '/:pathMatch(.*)*',
     component: () => import(/*webpackChuckName: 'noPageFound'*/'@/pages/NoPageFound.vue') },
  ]

  const router = createRouter({
    history: createWebHashHistory(),
    routes,
  })

  export default router