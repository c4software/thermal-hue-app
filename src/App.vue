<template>
  <v-app toolbar=true fill-height=true>
    <v-navigation-drawer></v-navigation-drawer>
    <v-toolbar light class="primary">
      <v-toolbar-side-icon></v-toolbar-side-icon>
      <v-toolbar-title class="white--text">Thermal Hue App</v-toolbar-title>
      <v-spacer></v-spacer>
      <v-menu bottom left style="margin-right:0">
          <v-btn icon slot="activator" dark>
            <v-icon>more_vert</v-icon>
          </v-btn>
          <v-list>
            <v-list-tile>
              <v-list-tile-title>Rafraîchir</v-list-tile-title>
            </v-list-tile>
          </v-list>
      </v-menu>
    </v-toolbar>
    <main>
      <v-container fluid>
        <router-view></router-view>
      </v-container>
    </main>
  </v-app>

</template>

<script>
export default {
  name: 'app'
}
</script>
