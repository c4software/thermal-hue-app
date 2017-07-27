<template>
  <v-app toolbar fill-height>
    <v-navigation-drawer></v-navigation-drawer>
    <v-toolbar class="primary indigo" flat>
      <v-toolbar-side-icon dark></v-toolbar-side-icon>
      <v-toolbar-title class="white--text">Thermal Hue App</v-toolbar-title>
      <v-spacer></v-spacer>
      <v-menu bottom left style="margin-right:0">
          <v-btn icon slot="activator" dark>
            <v-icon>more_vert</v-icon>
          </v-btn>
          <v-list>
            <v-list-tile>
              <v-list-tile-title v-on:click="doRefresh">Rafraîchir</v-list-tile-title>
            </v-list-tile>
          </v-list>
      </v-menu>
    </v-toolbar>
    <main>
      <v-container fluid pa-0>
        <router-view></router-view>
      </v-container>
    </main>
  </v-app>

</template>

<script>
  import { mapGetters } from 'vuex'
  export default {
    name: 'app',
    computed: mapGetters([
      'isLoading'
    ]),
    methods: {
      doRefresh: function(event){
        this.$store.commit('setLoading', true)
      }
    }
  }
</script>
