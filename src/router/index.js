import Vue from 'vue'
import VueRouter from 'vue-router'
//import AuthGuard from "./auth-guard";

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: () => import('../views/Home.vue'),
    //beforeEnter: AuthGuard
  },
  {
    path: '/sobre',
    name: 'sobre',
    component: () => import('../views/Sobre.vue'),
    //beforeEnter: AuthGuard
  }
]

const router = new VueRouter({
  mode: 'hash',
  base: process.env.BASE_URL,
  routes: routes
})

export default router
