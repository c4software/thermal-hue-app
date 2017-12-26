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
            </template>
            <template v-else>
              <v-icon dark x-large>error</v-icon>
              <div class="warnNoData">Récupération impossible</div>
            </template>
            {{getTrend}}
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

  export default {
    name: 'home',
    components: {graphHistory},
    computed: mapGetters([
      'isLoading',
      'getTemperature',
      'getTrend'
    ])
  }
</script>

<style scoped>
  .dataContainer{
    height: calc(100vh - 64px);
    width: 100%;
  }

  .graphContainer{
    height: 60%;
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
