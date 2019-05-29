<template>
  <trend
    :data="getHistory"
    :gradient="['#4527dc', '#ff0400']"
    smooth>
  </trend>
</template>

<script>
  import { mapGetters } from 'vuex'
  import Vue from 'vue'
  import Trend from 'vuetrend'

  Vue.use(Trend);

  export default {
    name: 'home',
    computed: mapGetters([
      'getHistory'
    ]),
  }
</script>
