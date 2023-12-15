import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'home',
    component: () => import('../view/HomeView.vue')
  },
  {
    path: '/media',
    name: 'media',
    component: () => import('../view/MediaView.vue')
  },
  {
    path: '/model',
    name: 'model',
    component: () => import('../components/YModel.vue')
  },
  {
    path: '/text_hybrid_identity',
    name: 'text_hybrid_identity',
    component: () => import('../view/TextView1.vue')
  },
  {
    path: '/text_why_it_profitable',
    name: 'text_why_it_profitable',
    component: () => import('../view/TextView2.vue')
  },
  {
    path: '/text_future',
    name: 'text_future',
    component: () => import('../view/TextView3.vue')
  },
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes
})

export default router
