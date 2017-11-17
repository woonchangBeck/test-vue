import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import login from '@/components/login'

Vue.use(Router)

const router = new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      redirect: '/en',
      props: true
    },
    {
      path: '/:locale',
      name: 'Hello',
      component: HelloWorld,
      props: true
    },
    {
      path: '/:locale/login',
      name: 'login',
      component: login,
      props: true
    }
  ]
})

export default router
