<template>
  <div class="dataContainer">
      <div class="tempContainer indigo">
        <div class="temp">22</div>
      </div>
      <div class="graphContainer">

      </div>
  </div>
</template>

<script>
  export default {
    name: 'home'
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
