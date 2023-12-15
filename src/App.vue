<template>
  <div class="app_container">
      <YHeader/>
      <router-view/>
  </div>
</template>

<script lang="ts">

import YHeader from "./components/UI/YHeader.vue";
import YModel from "./components/YModel.vue";

export default {
  name: 'App',
  components: {YModel, YHeader},
}
</script>

<style scoped>
.app_container {
  display: flex;
  flex-direction: column;
  align-items: center;
}
</style>
