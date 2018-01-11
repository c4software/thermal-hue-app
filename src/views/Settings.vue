<template>
  <v-list two-line>
    <v-list-tile avatar @click="">
      <v-list-tile-content>
        <v-list-tile-title>Server</v-list-tile-title>
        <v-list-tile-sub-title v-if="getUrlData !== ''">{{geturlData}}</v-list-tile-sub-title>
        <v-list-tile-sub-title v-else>Tap to set</v-list-tile-sub-title>
      </v-list-tile-content>
    </v-list-tile>
  </v-list>
  <!--<div>
    TODO =>
      - Show the current server.
      - Tap to change
      - On change :
        - Call the set_url_data(url)
  </div>-->
</template>

<script>
  import { mapGetters } from 'vuex'

  export default {
    name: 'settings',
    computed: mapGetters([
      'geturlData'
    ]),
  }
</script>
