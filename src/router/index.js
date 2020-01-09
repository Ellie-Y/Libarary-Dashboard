import Vue from 'vue'
import VueRouter from 'vue-router'

import Users from '../views/Users.vue'
import Books from '../views/Books.vue'
import Statistics from '../views/Statistics.vue'


Vue.use(VueRouter)

const routes = [
  {
    path: '/user',
    name: 'user',
    component: Users,
    },
    {
      path: '/book',
      name: 'book',
      component: Books,
    },
    {
      path: '/statistics',
      name: 'statistics',
      component: Statistics,
    },
    // Prevent wrong routers
    {
      path: '*',
      redirect: '/statistics'
    }
]

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes
})

export default router;

