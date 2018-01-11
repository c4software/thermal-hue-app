<template>
  <div>
    <v-list two-line>
      <v-list-tile avatar @click="dialog = !dialog">
        <v-list-tile-content>
          <v-list-tile-title>Server</v-list-tile-title>
          <v-list-tile-sub-title v-if="url">{{url}}</v-list-tile-sub-title>
          <v-list-tile-sub-title v-else>Tap to set</v-list-tile-sub-title>
        </v-list-tile-content>
      </v-list-tile>
    </v-list>

    <v-dialog v-model="dialog" persistent>
      <v-card>
        <v-card-text>
          <v-text-field required v-model="url" label="Server address" hint="Ex. https://script.google.com/macros/s/[…]/exec" />
        </v-card-text>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn color="green darken-1" flat @click.native="dismissModal()">Cancel</v-btn>
          <v-btn color="green darken-1" flat @click.native="closeSaveModal()">Save</v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </div>
</template>

<script>
  import store from '../store';
  import {set_url_data} from "../libs";

  export default {
    name: 'settings',
    data: () => {
      return { dialog: false, url: store.state.url_data }
    },
    methods: {
      dismissModal(){
        this.url = store.state.url_data;
        this.dialog = false;
      },
      closeSaveModal(){
        if(this.url !== store.state.url_data){
          set_url_data(this.url);
          window.location.hash = "#/"
        }

        this.dialog = false;
      }
    }
  }
</script>
