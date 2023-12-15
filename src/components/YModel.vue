<template>
  <div class="wrapper">
    <h1 class="header">
      Модель шляпы
    </h1>
    <Renderer resize='window' orbit-ctrl ref='renderer' class="renderer">
      <Camera :position='{ y: 3, z: 7 }'/>
      <Scene background='#F5ECEC99'>
        <PointLight :position='{ y: 75, z: 1000}'/>
        <PointLight :position='{ y: 75, z: -1000}'/>
        <GltfModel src='/models/hat.glb' @load='onReady' :position="{x: 0, y: -2, z: 0}"/>
      </Scene>
    </Renderer>
  </div>
</template>

<script lang="ts">
import {Box, Camera, LambertMaterial, PointLight, Renderer, Scene, GltfModel, FbxModel} from 'troisjs';
import {defineComponent} from "vue";

export default defineComponent({
  name: 'YModel',
  components: {Box, Camera, LambertMaterial, PointLight, Renderer, Scene, GltfModel, FbxModel},
  setup() {
    function onReady(e: any) {
      console.log("Is ready", e)
    }

    return {onReady};
  }
})
</script>

<style scoped>
.wrapper {
  display: flex;
  flex-direction: column;
  gap: 1rem;
  justify-content: center;
  margin-top: 2rem;
  width: 50vw;
  height: 90vh;
}

.header {
  font-size: 2rem;
  font-weight: 600;
}
</style>
