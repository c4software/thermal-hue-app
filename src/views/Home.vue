<template>
  <div class="dataContainer">
      <div class="tempContainer indigo">
        <template v-if="isLoading">
           <v-progress-circular indeterminate v-bind:size="70" v-bind:width="3" class="white--text"></v-progress-circular>
        </template>
        <template v-else>
          <div class="temp">
            <template v-if="getTemperature">
              {{getTemperature}}
              <v-icon dark>{{display_trend()}}</v-icon>
            </template>
            <template v-else>
              <v-icon dark x-large>error</v-icon>
              <div class="warnNoData">Récupération impossible</div>
            </template>
          </div>
        </template>
      </div>
      <div class="graphContainer">
        <graphHistory />
      </div>
  </div>
</template>

<script>
  import { mapGetters } from 'vuex'
  import graphHistory from '@/components/GraphHistory.vue'
  import {get_remote_data} from "../libs";

  export default {
    name: 'home',
    components: {
      graphHistory
    },
    computed: mapGetters([
      'isLoading',
      'getTemperature',
      'getTrend',
    ]),
    beforeCreate(){
      get_remote_data();
    },
    methods: {
      display_trend() {
        if(this.getTrend === "+"){
          return "keyboard_arrow_up";
        }else if (this.getTrend === "-"){
          return "keyboard_arrow_down";
        }else{
          return "keyboard_arrow_right"
        }
      }
    }
  }
</script>

<style scoped>
  .dataContainer{
    height: calc(100vh - 57px);
    width: 100%;
  }

  .graphContainer{
    height: 60%;
    display: flex;
    align-items: center;
  }

  .temp{
    text-align: center;
    font-size: 5rem;
    margin-bottom: 0;
  }

  .warnNoData{
    font-size: 1.2rem;
  }

  .tempContainer{
      height: 40%;
      color: white;

      display: flex;
      align-items: center;
      justify-content: center;
  }
</style>
