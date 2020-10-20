import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

const router = new Router({
  routes: [
    {
      path: '/',
      component: () => import('./views/Home.vue')
    },
    {
      path: '/Home',
      name: 'Home',
      component: () => import('./views/Home.vue')
    },
    {
      path: '/WorkExperience',
      name: 'WorkExperience',
      component: () => import('./views/WorkExperience.vue')
    },
    {
      path: '/Education',
      name: 'Education',
      component: () => import('./views/Education.vue')
    },
    {
      path: '/Skills',
      name: 'Skills',
      component: () => import('./views/Skills.vue')
    },
    {
      path: '/Portfolio',
      name: 'Portfolio',
      component: () => import('./views/Portfolio.vue')
    }
  ]
})

export default router
