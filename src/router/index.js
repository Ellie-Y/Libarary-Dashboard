import Vue from 'vue'
import VueRouter from 'vue-router'
<<<<<<< HEAD
import User from '../views/User.vue'
import Books from '../views/Books.vue'
import Statistics from '../views/Statistics.vue'
import AddDetails from '../views/AddDetails.vue'
=======

import Users from '../views/Users.vue'
import Books from '../views/Books.vue'
import Statistics from '../views/Statistics.vue'

>>>>>>> final

Vue.use(VueRouter)

const routes = [
  {
    path: '/user',
    name: 'user',
<<<<<<< HEAD
    //router 里面的 component没有复数 s
    component: User,
    },
    {
      path: '/books',
      name: 'books',
=======
    component: Users,
    },
    {
      path: '/book',
      name: 'book',
>>>>>>> final
      component: Books,
    },
    {
      path: '/statistics',
      name: 'statistics',
      component: Statistics,
    },
<<<<<<< HEAD
    {
      path: '/addDetails',
      name: 'addDetails',
      component: AddDetails,
    },
    //防止跳转到没有的页面
    {
      path: '*',
      redirect: '/user'
=======
    // Prevent wrong routers
    {
      path: '*',
      redirect: '/statistics'
>>>>>>> final
    }
]

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes
})

export default router;

