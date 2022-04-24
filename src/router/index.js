import { createRouter, createWebHashHistory } from 'vue-router';

const routes = [
  {
    path: '/',
    component: () => import('../views/FrontView.vue'),
    children: [
      {
        path: '',
        component: () => import('../views/frontend/HomeView.vue'),
      },
      {
        path: 'products',
        component: () => import('../views/frontend/ProductsView.vue'),
      },
      {
        path: 'product/:id',
        component: () => import('../views/frontend/ProductView.vue'),
      },
      {
        path: 'cart',
        component: () => import('../views/frontend/CartView.vue'),
      },
      {
        path: 'purchase',
        component: () => import('../views/frontend/PurchaseOrderView.vue'),
      },
    ],
  },
  {
    path: '/login',
    component: () => import('../views/Login.vue'),
  },
  {
    path: '/admin',
    component: () => import('../views/DashboardView.vue'),
    children: [
      {
        path: 'orders',
        component: () => import('../views/backend/AdminOrders.vue'),
      },
      {
        path: 'products',
        component: () => import('../views/backend/AdminProducts.vue'),
      },
      {
        path: 'coupon',
        component: () => import('../views/backend/AdminCoupon.vue'),
      },
    ],
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
  linkActiveClass: 'active',
});

export default router;
