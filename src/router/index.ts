import { createRouter, createWebHistory } from 'vue-router';
import type { RouteRecordRaw } from 'vue-router';

const routes: RouteRecordRaw[] = [
  {
    path: '/',
    redirect: '/home'
  },
  {
    path: '/home',
    component: () => import('@/views/home/index.vue'),
    meta: {
      title: '首页'
    }
  },
  {
    path: '/favor',
    component: () => import('@/views/favor/index.vue'),
    meta: {
      title: '收藏'
    }
  },
  {
    path: '/order',
    component: () => import('@/views/order/index.vue'),
    meta: {
      title: '订单'
    }
  },
  {
    path: '/message',
    component: () => import('@/views/message/index.vue'),
    meta: {
      title: '消息'
    }
  }
];

const router = createRouter({
  routes,
  history: createWebHistory()
});

export default router;
