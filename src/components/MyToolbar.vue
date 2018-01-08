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
      <moreMenu></moreMenu>
    </v-toolbar>
  </div>
</template>

<script>
import myContentDrawer from '@/components/Drawer'
import moreMenu from '@/components/Menu'

export default {
  name: 'myToolbar',
  components: {myContentDrawer, moreMenu},
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
