import { createRouter, createWebHistory } from 'vue-router'
import Landing from '../views/Landing.vue'

const routes = [
  {
    path: '/',
    name: 'Landing',
    component: Landing
  },
  {
    path: '/:products',
    name: 'products',
    component: () => import('../views/Products.vue'),
  },
  {
    path: '/category/:cat/:products',
    name: 'productsCat',
    component: () => import('../views/Products.vue'),
  },
  {
    path: '/category/:products',
    name: 'category',
    component: () => import('../views/Category.vue')
  },
  {
    path: '/:product/:id',
    name: 'productPage',
    props: true,
    component: () => import('../views/ProductPage.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
