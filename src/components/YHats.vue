<template>
  <div class="wrapper">
    <div class="img_block" id="h3">
      <img src="../assets/images/hat1.png"
           alt=""
           class="image hats"
           data-aos="fade-up-right"
           data-aos-duration="1000"
      >
    </div>

    <div class="img_block" id="h1">
      <img src="../assets/images/hat1.png"
           alt=""
           class="img hats"
           data-aos="fade-left"
           data-aos-duration="1700"
      >
    </div>

    <div class="img_block" id="h2">
      <img src="../assets/images/hat1.png"
           alt=""
           class="img hats"
           data-aos="fade-up"
           data-aos-duration="1200"
           data-aos-delay="400"
      >
    </div>
  </div>
</template>

<script lang="ts">

export default {
  name: 'YHats',
}
</script>

<style scoped>
.wrapper {
  display: flex;
  flex-direction: column;
}

.image {
  height: inherit;
  width: inherit;
}

#h1 > img {
  height: 17rem;
  rotate: 10deg;
}

#h2 > img {
  height: 10rem;
  margin-top: -6rem;
  margin-right: -14rem;
  rotate: 340deg;
}

#h3 > img {
  height: 11rem;
  margin-bottom: -9rem;
  margin-left: -15rem;
  rotate: 330deg;
}
</style>
