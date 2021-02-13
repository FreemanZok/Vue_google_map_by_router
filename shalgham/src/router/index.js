import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Location1 from '../views/Location1.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/location1',
    name: 'location1',
    component: Location1
  },
  {
    path: '/location2',
    name: 'location2',
    component: () => import( '../views/Location2.vue')
  },
  
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
