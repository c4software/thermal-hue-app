<template>
  <v-menu origin="top center" transition="slide-y-transition">
    <v-btn icon slot="activator" dark>
      <v-icon>more_vert</v-icon>
    </v-btn>
    <v-list>
      <v-list-tile @click="doRefresh()" :disabled="isLoading">
        <v-list-tile-title>Rafraîchir</v-list-tile-title>
      </v-list-tile>
    </v-list>
  </v-menu>
</template>

<script>
  import { mapGetters } from 'vuex'
  import {get_remote_data} from "../libs/index";

  export default {
    computed: mapGetters([
      'isLoading'
    ]),
    name: 'moreMenu',
    methods: {
      doRefresh: function(){
        get_remote_data();
      }
    }
  }
</script>
