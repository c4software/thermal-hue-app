<!-- Code for the main toolbar (top) -->

<template>
  <div>
    <v-navigation-drawer v-model="drawer" clipped fixed app>
      <myContentDrawer />
    </v-navigation-drawer>

    <v-toolbar class="indigo" flat clipped-left app>
      <v-toolbar-side-icon dark @click.stop="drawer = !drawer"></v-toolbar-side-icon>
      <v-toolbar-title @click="goHome" class="white--text">{{title}}</v-toolbar-title>
      <v-spacer></v-spacer>
      <moreMenu v-if="hasMore"></moreMenu>
    </v-toolbar>
  </div>
</template>

<script>
  import { mapGetters } from 'vuex'

  import myContentDrawer from '@/components/Drawer'
  import moreMenu from '@/components/Menu'

  // TODO Show the getLastUpdateDate (timeago) in a second line on the toolbar"

  export default {
    name: 'myToolbar',
    components: {myContentDrawer, moreMenu},
    computed: mapGetters([
      'getSelectedRoom',
      'getLastUpdateDate'
    ]),
    data: () => {
      return {
        drawer: false,
        hasMore: true,
        title: "Thermal Hue App"
      }
    },
    mounted(){
      window.addEventListener('hashchange', this.onPathChange);
      this.onPathChange();
    },
    methods: {
      onPathChange(){
        switch (window.location.hash) {
          case "#/":
            this.title = this.getSelectedRoom;
            this.hasMore = true;
            break;
          case "#/settings":
            this.title = "Settings";
            this.hasMore = false;
            break;
          default:
            this.title = "Thermal Hue App";
            this.hasMore = false;
            break;
        }
      },
      goHome(){
        window.location.hash = '/'
      }
    }
  }
</script>
