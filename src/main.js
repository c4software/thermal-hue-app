import App from './App'
// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import Vuetify from 'vuetify'
import router from './router'
import store from "./store"

// Vuetify
require('vuetify/dist/vuetify.min.css')
Vue.use(Vuetify)

Vue.config.productionTip = process.env.NODE_ENV !== 'production'

new Vue({
  el: '#app',
  router,
  store,
  template: '<App/>',
  components: { App }
})