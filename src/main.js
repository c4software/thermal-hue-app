import App from './App'
import Vue from 'vue'
import VueTimeago from 'vue-timeago'
import Vuetify from 'vuetify'
import router from './router'
import store from "./store"


// Vuetify
require('vuetify/dist/vuetify.min.css');
Vue.use(Vuetify);

// Timeago component
Vue.use(VueTimeago, {
  name: 'timeago',
  locale: 'fr-FR',
  locales: {
    'fr-FR': require('vue-timeago/locales/fr-FR.json')
  }
});

Vue.config.productionTip = process.env.NODE_ENV !== 'production';

new Vue({
  el: '#app',
  router,
  store,
  template: '<App/>',
  components: { App }
});
