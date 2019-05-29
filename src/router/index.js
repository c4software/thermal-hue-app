import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

import Home from '@/views/Home'
import Settings from '@/views/Settings'

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },{
      path: '/settings',
      name: 'Settings',
      component: Settings
    }
  ]
})
