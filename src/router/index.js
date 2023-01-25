import { createRouter, createWebHashHistory } from 'vue-router'


const router = createRouter({
  history: createWebHashHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/home',
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
          path: '/order',
          name: 'order',
          props: true,
          component: () => import('../views/OrderView.vue')
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
          name: 'phome',
          path: 'phome',
          props: true,
          component: () => import('../views/ProfileHomeView.vue')
        },
        {
          name: 'business',
          path: 'business',
          props: true,
          component: () => import('../views/ProfileHomeView.vue')
        },
        {
          name: 'pbuy',
          path: 'pbuy',
          props: true,
          component: () => import('../views/ProfileHomeView.vue')
        },
        {
          name: 'psell',
          path: 'psell',
          props: true,
          component: () => import('../views/ProfileHomeView.vue')
        },
        {
          name: 'porderlist',
          path: 'porderlist',
          props: true,
          component: () => import('../views/ProfileHomeView.vue')
        },
      ]
    },

  ]
})

export default router
