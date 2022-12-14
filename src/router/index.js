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
    path: '/myFavorite',
    name: '收藏清單',
    component: () => import('../views/fornt/favoritePageMobile.vue'),
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
