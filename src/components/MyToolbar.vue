<!-- Code for the main toolbar (top) -->

<template>
  <div>
    <v-navigation-drawer v-model="drawer" clipped fixed app>
      <myContentDrawer />
    </v-navigation-drawer>

    <v-toolbar class="indigo" flat clipped-left app>
      <v-toolbar-side-icon dark @click.stop="drawer = !drawer"></v-toolbar-side-icon>
      <v-toolbar-title @click="goHome" class="white--text">Thermal Hue App</v-toolbar-title>
      <v-spacer></v-spacer>
      <v-menu origin="top center" transition="slide-y-transition">
        <v-btn icon slot="activator" dark>
          <v-icon>more_vert</v-icon>
        </v-btn>
        <v-list>
          <v-list-tile @click="">
            <v-list-tile-title>Rafraichir</v-list-tile-title>
          </v-list-tile>
        </v-list>
      </v-menu>
    </v-toolbar>
  </div>
</template>

<script>
import myContentDrawer from '@/components/Drawer'

export default {
  name: 'myToolbar',
  components: {myContentDrawer},
  data: function () {
    return {
      drawer: false
    }
  },
  methods: {
    goHome () {
      window.location.hash = '/'
    }
  }
}
</script>
