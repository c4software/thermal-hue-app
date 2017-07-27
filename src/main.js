// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'

import Vuetify from 'vuetify'
require('vuetify/dist/vuetify.min.css')

Vue.config.productionTip = process.env.NODE_ENV !== 'production'
Vue.use(Vuetify)

import store from "./store"



new Vue({
  el: '#app',
  router,
  store,
  template: '<App/>',
  components: { App }
})
