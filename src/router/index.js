import nProgress from 'nprogress'
import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import TodoList from '../views/todos/TodoList.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },
  {
    path: '/todos',
    name: 'Todos',
    component: TodoList
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

router.beforeEach((routeTo, routeFrom, next) => {
  nProgress.start();
  next();
})

router.afterEach(() => {
  nProgress.done();
})

export default router
