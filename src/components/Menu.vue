<template>
  <v-menu bottom left style="margin-right:0">
      <!-- Bouton d’activation du menu -->
      <v-btn icon slot="activator" dark>
        <v-icon>more_vert</v-icon>
      </v-btn>
      
      <!-- Contenu de la liste déroulante -->
      <v-list>
        <v-list-tile>
          <v-list-tile-title @click="doRefresh">Rafraîchir</v-list-tile-title>
        </v-list-tile>
      </v-list>
  </v-menu>
</template>

<script>
  import { mapGetters } from 'vuex'
  export default {
    computed: mapGetters([
      'isLoading'
    ]),
    name: 'myMenu',
    methods: {
      doRefresh: function(event){
        this.$store.commit('setLoading', true)
      }
    }
  }
</script>
