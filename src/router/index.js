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
          path: '/app',
          name: 'app',
          props: true,
          component: () => import('../views/TradeView.vue')
        }
        
      ]
    },
    {
      path: '/login',
      name: 'login',
      props: true,
      component: () => import('../views/LoginView.vue')
    },
 

  ]
})

export default router
