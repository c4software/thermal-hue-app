<template>
  <v-app toolbar fill-height>
    <v-navigation-drawer></v-navigation-drawer>
    <v-toolbar class="primary indigo" flat>
      <v-toolbar-side-icon dark></v-toolbar-side-icon>
      <v-toolbar-title class="white--text">Thermal Hue App</v-toolbar-title>
      <v-spacer></v-spacer>
      <my-menu />
    </v-toolbar>
    <main>
      <v-container fluid pa-0>
        <router-view></router-view>
      </v-container>
    </main>
  </v-app>

</template>

<script>
  import myMenu from '@/components/Menu.vue'
  export default {
    name: 'app',
    components: {myMenu},
  }
</script>
