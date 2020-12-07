import { createRouter, createWebHistory } from 'vue-router'
import Landing from '../views/Landing.vue'

const routes = [
  {
    path: '/',
    name: 'Landing',
    component: Landing
  },
  {
    name: 'products',
    path: '/:products',
    component: () => import('../views/Products.vue'),
  },
  {
    name: 'category',
    path: '/category-:category',
    component: () => import('../views/Category.vue'),
  },
  {
    path: '/:product/:id',
    name: 'product-page',
    component: () => import('../views/ProductPage.vue')
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
