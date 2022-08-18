import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import { store } from '@/store'

// Check if user is logged in  
const isLoggedIn = (to, from, next) => {
  if (store.state.access_token) {
      next()
    return
  }
  next({name: 'Login'});
}



const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
    beforeEnter: isLoggedIn,

  },
  {
    path: '/login',
    name: 'Login',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/Login.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
