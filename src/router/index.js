import Vue from 'vue'
import Router from 'vue-router'
import config from '../../config/index.js'
Vue.use(Router)

export default new Router({
  mode: config.mode,
  routes: [
    {
      path: '/',
      name: 'login',
      component: () => import('@/components/login/index.vue')
    }
  ]
})
