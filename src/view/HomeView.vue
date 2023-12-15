<template>
  <div class="grid_container">
    <div class="container">
      <div class="card_block">
        <div class="card">
          <p class="card_header">AR / VR -</p>
          <p class="card_text">что это такое, зачем это нужно и как это применять?</p>

          <router-link to="/text_hybrid_identity">
            <div class="button">
              <p class="button_text">Подробнее об этом</p>
              <img src="../assets/svg/right-arrow.svg" alt="" class="img">
            </div>
          </router-link>
        </div>

        <div class="card">
          <p class="card_header">AR / VR -</p>
          <p class="card_text">в мире моды</p>

          <router-link to="/model">
            <div class="button">
              <p class="button_text">Как это можно реализовать?</p>
              <img src="../assets/svg/right-arrow.svg" alt="" class="img">
            </div>
          </router-link>
        </div>
      </div>
    </div>

    <div class="hats">
      <y-hats/>
    </div>
  </div>

  <y-arrow-block class="arrow_block"/>

  <div class="texts_block">
    <h1 class="text_block_header card_header">Гибридный рынок моды — новые возможности для инвесторов</h1>
    <y-text-card :route="'text_hybrid_identity'" :header="'Гибридная индустрия моды'"
                 class="text_card animate__animated animate__fadeInLeft"
                 :text="'и какое место в ней занимают AR и VR технологии'"/>

    <y-text-card :route="'text_why_it_profitable'" :header="'Почему эта сфера выгодна для инвестиций'"
                 class="text_card animate__animated animate__delay-1s animate__fadeInLeft" :text="'И в чем важность привлечения инвестиций'"/>

    <y-text-card :route="'text_future'" :header="'Перспективы развития рынка'" :text="'Россия и мир'"
                 class="text_card animate__animated animate__delay-2s animate__fadeInLeft"/>
  </div>
</template>

<script lang="ts">
import YHats from "../components/YHats.vue"
import YArrowBlock from "../components/UI/YArrowBlock.vue";
import YTextCard from "../components/UI/YTextCard.vue";

export default {
  components: {
    YHats,
    YArrowBlock,
    YTextCard,
  }
}
</script>

<style scoped>
.grid_container {
  width: 90vw;
  display: grid;
  grid-template-columns: 1fr min-content;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 3rem;
}

.hats {
  display: flex;
  flex-direction: column;
  margin-right: 10vw;
  margin-top: 2rem;
  justify-content: center;
  scale: 130%;
}

.container {
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: start;
  margin-top: 10vh;
}

.texts_block {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-bottom: 2rem;
}

.text_card {
  scale: 100%;
  transition-duration: .75s;
}

.text_card:hover {
  scale: 105%;
  transition-duration: 0.75s;
}

.card_block {
  width: 35vw;
  display: flex;
  flex-direction: column;
  gap: 3vw;
}

.card {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  background-color: var(--card-bg-color);
  padding: 2rem;
  border-radius: 1.5rem;
  text-align: left;
  min-height: 30vh;
  scale: 100%;
  transition-duration: 0.75s;
}

.card:hover {
  scale: 105%;
  transition-duration: 0.75s;
}

.card_header {
  font-size: 2rem;
  font-weight: 600;
}

.card_text {
  font-size: 1.25rem;
  width: 70%;
  font-weight: 500;
}

.button {
  width: 100%;
  font-size: 1.25rem;
  background-color: var(--card-button-color);
  margin-top: 2rem;
  padding: .5rem;
  border-radius: 0.75rem;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
}

.img {
  height: 1.75rem;
}

.arrow_block {
  margin-bottom: 4rem;
}

.text_block_header {
  text-align: center;
  max-width: 70%;
  margin-bottom: 3rem;
  margin-top: 2rem;
  font-weight: 600;
  font-size: 2rem;
}
</style>
