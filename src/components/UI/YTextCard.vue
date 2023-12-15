<template>
  <div class="wrapper" @click.prevent="goToRoute">
    <div class="first_col">
      <h2 class="text_header">{{ header }}</h2>
      <p class="text">{{ text }}</p>
    </div>
    <div class="second_col">
      <img src="../../assets/svg/plus_icon.svg" alt="" class="image">
    </div>

  </div>
</template>

<script lang="ts">

export default {
  props: {
    header: {
      type: String,
      default: 'Заголовок'
    },
    text:  {
      type: String,
      default: 'Краткое описание текста'
    },
    route: {
      type: String,
    },
  },

  methods: {
    goToRoute() {
      this.$router.push(`/${this.route}`)
    }
  }
}
</script>

<style scoped>
.wrapper {
  width: 70vw;
  min-height: 5rem;

  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;

  background-color: var(--card-bg-color);

  padding: 1rem 2rem;
  margin: 1rem;
  border-radius: 1rem;
}

.first_col {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  width: 100%;
  gap: 1rem;
}

.text_header {
  font-size: 2rem;
  font-weight: 600;
}

.text {
  font-size: 1.25rem;
  font-weight: 500;
}
</style>
