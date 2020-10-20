import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: () => import(/* webpackChunkName: "about" */ '../views/Home.vue'),
    children: [
      { path: '/WorkExperience', name: 'WorkExperience', meta: { accessible: true }, component: () => import('../views/WorkExperience.vue') }
    ]
  }
]

const router = new VueRouter({
  routes
})

export default router
