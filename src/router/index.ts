import { createRouter, createWebHistory } from 'vue-router';
import type { RouteRecordRaw } from 'vue-router';

const routes: RouteRecordRaw[] = [
  {
    path: '/',
    redirect: '/home'
  },
  {
    path: '/home',
    component: () => import('@/views/home/index.vue')
  },
  {
    path: '/favor',
    component: () => import('@/views/favor/index.vue')
  },
  {
    path: '/order',
    component: () => import('@/views/order/index.vue')
  },
  {
    path: '/message',
    component: () => import('@/views/message/index.vue')
  },
  {
    path: '/city',
    component: () => import('@/views/city/index.vue')
  }
];

const router = createRouter({
  routes,
  history: createWebHistory()
});

export default router;
