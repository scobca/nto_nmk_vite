<template>
  <div class="container">
    <div class="block" v-if="this.$route.path != '/'">
      <router-link to="/" class="button">Главная</router-link>
    </div>
<!--    <div class="block">-->
<!--      <router-link to="/" class="button">Тексты</router-link>-->
<!--    </div>-->
    <div class="block" v-if="this.$route.path != '/model'">
      <router-link to="/model" class="button">Модели</router-link>
    </div>
    <div class="block" v-if="this.$route.path != '/media'">
      <router-link to="/media" class="button">Медиа</router-link>
    </div>
  </div>
</template>

<script lang="ts">

export default{
  name: 'YHeader',
}
</script>

<style scoped>
.container {
  display: flex;
  justify-content: space-around;
  align-items: center;
  height: 2.5rem;
  width: 90vw;
  margin-top: 1rem;
  border-radius: 1rem;
  background-color: var(--header-bg-color);
  font-size: 1.25rem;
  font-weight: 500;
}

.block {
  display: flex;
  flex-direction: row;
  gap: 10px;
  scale: 100%;
  transition-duration: 0.3s;
}

.block:hover {
  scale: 110%;
  transition-duration: 0.3s;
}
</style>
