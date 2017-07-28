<template>
  <div class="dataContainer">
      <div class="tempContainer indigo">
        <template v-if="isLoading">
           <v-progress-circular indeterminate v-bind:size="70" v-bind:width="3" class="white--text"></v-progress-circular>
        </template>
        <template v-else>
          <div class="temp">
            {{getTemperature}}
            {{getTrend}}
          </div>
        </template>
      </div>
      <div class="graphContainer">

      </div>
  </div>
</template>

<script>
  import { mapGetters } from 'vuex'

  export default {
    name: 'home',
    computed: mapGetters([
      'isLoading',
      'getTemperature',
      'getTrend'
    ])
  }
</script>

<style>
  .dataContainer{
    height: calc(100vh - 64px);
  }

  .graphContainer{
    height: 60%;
  }

  .temp{
    text-align: center;
    font-size: 5rem;
    margin-bottom: 0;
  }

  .tempContainer{
      height: 40%;
      color: white;

      display: flex;
      align-items: center;
      justify-content: center;
  }
</style>
