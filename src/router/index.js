import { createRouter, createWebHashHistory } from 'vue-router';
import HomeView from '../views/fornt/HomeView.vue';

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView,
  },
  {
    path: '/product/:category',
    name: '產品',
    component: () => import('../views/fornt/ProductListPage.vue'),
  },
  {
    path: '/about',
    name: '關於我們',
    component: () => import('../views/fornt/AboutView.vue'),
  },
  {
    path: '/contact',
    name: '聯絡我們',
    component: () => import('../views/fornt/ContactUs.vue'),
  },
  {
    path: '/order-search',
    name: '訂單查詢',
    component: () => import('../views/fornt/OrderSearch.vue'),
  },
  {
    path: '/myFavorite',
    name: '收藏清單',
    component: () => import('../views/fornt/favoritePage.vue'),
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
  scrollBehavior() {
    return {
      top: 0,
    };
  },
});

export default router;
