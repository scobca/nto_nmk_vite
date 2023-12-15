<template>
  <div class="wrapper">
<!--    <div class="description">-->
<!--      <h2 class="header_text">Lorem ipsum.</h2>-->
<!--      <p class="text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad dolores eius, excepturi illum laudantium-->
<!--        praesentium quos saepe similique veritatis voluptates. Animi doloremque necessitatibus nihil odio optio quod,-->
<!--        sed suscipit voluptatum.</p>-->
<!--    </div>-->
    <div class="video">
      <video src="../assets/videos/nmk_media.mp4"
             preload="auto"
             controls
             class="video_player"
      />
    </div>
  </div>
</template>

<script lang="ts">

export default {
  name: 'MediaView'
}

</script>

<style scoped>
.wrapper {
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  max-width: 90vw;
  margin-top: 2rem;
}

.description {
  display: flex;
  flex-direction: column;
  gap: 1rem;

  background-color: var(--card-bg-color);
  text-align: left;

  width: 60vw;
  padding: 1rem;
  border-radius: 1rem;
}

.video {
  width: 60vw;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  background-color: var(--card-bg-color);

  margin-top: 2rem;
  margin-bottom: 2rem;
  padding: 1rem;
  border-radius: 2rem;
}

.video_player {
  width: 58vw;
  border-radius: 2rem;
}

.header_text {
  font-size: 2rem;
  font-weight: 600;
}

.text {
  width: 70%;
  font-weight: 500;
}
</style>
