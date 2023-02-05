import { createRouter, createWebHistory } from 'vue-router'


const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'layout',
      component: () => import('../components/layout/DefaultLayout.vue'),
      children: [
        {
          path: '/',
          name: 'home',
          component: () => import('../views/HomeView.vue')
        },
        {
          path: '/about',
          name: 'about',
          component: () => import('../views/AboutView.vue')
        },
        {
          path: '/trade',
          name: 'trade',
          props: true,
          component: () => import('../views/TradeView.vue')
        }
        ,
        {
          path: '/transaction',
          name: 'transaction',
          props: true,
          component: () => import('../views/TransactionView.vue')
        }
        ,
        {
          path: '/ads',
          name: 'ads',
          props: true,
          component: () => import('../views/AdsView.vue')
        }
      ]
    },
    {
      path: '/login',
      name: 'login',
      props: true,
      component: () => import('../views/LoginView.vue')
    },
    {
      path: '/profile',
      name: 'profile',
      component: () => import('../components/layout/ProfileLayout.vue'),
      children: [
        {
          name: 'user',
          path: 'user',
          props: true,
          component: () => import('../views/ProfileHomeView.vue')
        },
        {
          name: 'finace',
          path: 'finace',
          props: true,
          component: () => import('../views/FinaceView.vue')
        },
        {
          name: 'order',
          path: 'order',
          props: true,
          component: () => import('../views/OrderList.vue')
        },
      ]
    },

  ]
})

export default router
