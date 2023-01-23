import { createRouter, createWebHashHistory } from 'vue-router';

const routes = [
  {
    path: '/',
    name: '前台',
    component: () => import('../views/front/FrontView.vue'),
    children: [
      {
        path: '/',
        name: '首頁',
        component: () => import('../views/front/HomeView.vue'),
      },
      {
        path: '/product/:category',
        name: '產品',
        component: () => import('../views/front/ProductListPage.vue'),
      },
      {
        path: '/productItem/:id',
        name: 'productItem',
        component: () => import('../views/front/ProductItem.vue'),
      },
      {
        path: '/about',
        name: '關於我們',
        component: () => import('../views/front/AboutView.vue'),
      },
      {
        path: '/contact',
        name: '聯絡我們',
        component: () => import('../views/front/ContactUs.vue'),
      },
      {
        path: '/order-search',
        name: '訂單查詢',
        component: () => import('../views/front/OrderSearch.vue'),
      },
      {
        path: '/myFavorite',
        name: '收藏清單',
        component: () => import('../views/front/FavoritePage.vue'),
      },
      {
        path: '/cart',
        name: '購物車',
        component: () => import('../views/front/ShoppingCartPage.vue'),
      },
      {
        path: '/checkout',
        name: '確認訂單',
        component: () => import('../views/front/CheckoutPage.vue'),
      },
      {
        path: '/buyerInfo',
        name: '購買資料',
        component: () => import('../views/front/BuyerInfo.vue'),
      },
      {
        path: '/sendOrder',
        name: '送出訂單',
        component: () => import('../views/front/SendOrder.vue'),
      },
      {
        path: '/login',
        name: '登入',
        component: () => import('../views/front/LoginView.vue'),
      },
      {
        path: '/register',
        name: '註冊',
        component: () => import('../views/front/RegisterView.vue'),
      },
      {
        path: '/user/account',
        name: '帳戶',
        component: () => import('../views/front/AccountView.vue'),
      },
    ],
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
