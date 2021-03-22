import nProgress from 'nprogress'
import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import TodoList from '../views/todos/TodoList.vue'
import TodoLayout from '../views/todos/TodoLayout.vue'
import NotFound from '../views/NotFound.vue'
import store from '../store/index.js';
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
    component: TodoList,
    meta: { requiresAuth: true} // Meta allows custom attributes to the route
  },
  {
    path: '/account/register',
    name: 'Register',
    component: () => import('../views/account/Register.vue')
  },
  {
    path: '/account/login',
    name: 'Login',
    component: () => import('../views/account/Login.vue')
  },
  {
    path: '/todos/:id',
    name: 'TodoLayout',
    props: true,
    component: TodoLayout,
    children: [
      {
        path: '',
        name: 'TodoDetails',
        component: () => import('../views/todos/Details.vue')
      },
      {
        path: 'edit',
        name: 'TodoEdit',
        component: () => import('../views/todos/Edit.vue')
      }
    ]
  },
  {
    path: '/:catchAll(.*)',
    name: 'NotFound',
    component: NotFound
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

// This sets up a global guard for a progress bar
router.beforeEach( async (routeTo, routeFrom, next) => {
  nProgress.start();
  const loggedIn = await store.dispatch("authMdl/isLoggedIn");

  if (routeTo.matched.some(record => record.meta.requiresAuth) && !loggedIn) {
    // Redirect to home page
    next('/');
  }
  else {
    next();
  }
  
})

router.afterEach(() => {
  nProgress.done();
})

export default router
