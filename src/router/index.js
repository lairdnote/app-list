import { createRouter, createWebHashHistory } from 'vue-router'


const router = createRouter({
  history: createWebHashHistory(import.meta.env.BASE_URL),
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
      path: '/user',
      name: 'profile',
      component: () => import('../components/layout/ProfileLayout.vue'),
      children: [
        {
          name: 'info',
          path: '/',
          props: true,
          component: () => import('../views/ProfileHomeView.vue')
        },
        {
          name: 'finace',
          path: 'finace',
          props: true,
          component: () => import('../views/ProfileHomeView.vue')
        },
        {
          name: 'order',
          path: 'order',
          props: true,
          component: () => import('../views/ProfileHomeView.vue')
        },
      ]
    },

  ]
})

export default router
