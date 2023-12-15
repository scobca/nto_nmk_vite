<template>
  <div class="wrapper">
    <h1 class="text_header">Перспективы развития рынка: Россия и мир</h1>

    <div class="row_block">
      <div class="text_block">
        <p class="text_without_pic">С началом пандемии, а затем и Специальной военной операции многие бренды, в том
          числе
          масс-маркет, ушли из России. Эти события способствуют ускоренному переходу России с индустриального типа
          общества на постиндустриальный, развитию креативных индустрий и медиаменеджмента.
        </p>
      </div>
    </div>

    <div class="row_block">
      <div class="text_block">
        <p class="text_without_pic">
          В индустрии моды, как и во многих других отраслях, наблюдается процесс глокализации. Смешение глобальных
          возможностей и потенциала локальных брендов дает большие возможности для эффективного развития. Все больше
          производств стараются приближаться к местам сбыта продукции, быть рядом с покупателем. 14 декабря во время
          Прямой линии с президентом России, Владимиром Владимировичем Путиным было отмечено, что присутствие российских
          брендов на отечественном рынке выросло на 31%. Глава государства подчеркнул, что этот процесс, который должен
          иметь системный характер, нельзя останавливать: «В этой связи, без всякого сомнения, нужно привлечь к этой
          работе не только федеральные структуры, но и региональные структуры. Я сейчас обращаюсь к руководителям
          регионов, к своим коллегам: нужно взять это под контроль и всячески способствовать продвижению региональные
          брендов». По мнению президента, поддержка этих брендов существенно разнообразит отечественный рынок, сделает
          его интересным и привлекательным для потребителей. «У нас в регионах есть чем гордиться», — констатировал
          Путин.
        </p>
      </div>
    </div>

    <div class="row_block">
      <div class="text_block">
        <p class="text_without_pic">
          Прогнозируя будущее, обратимся к целям дорожной карты WearNet 2035. К ним относятся: создание единой
          инфраструктуры и налаживание новых бизнес-связей между игроками рынка, модернизация производств и внедрение
          новых технологий, популяризация продукции нового рынка, стимулирование роста её ценности, развитие
          технологического и креативного предпринимательств
        </p>
      </div>
    </div>

    <div class="row_block">
      <div class="text_block">
        <p class="text_without_pic">
          <b>«Мода — это новая литература» — Алексей Баженов, основатель института развития моды»</b>

          Особую роль в производстве и продаже будет играть социальная ответственность. Основным мотивом для покупки
          окажется понимание того, как эта одежда была создана и как она будет утилизирована. Мода - это новая
          литература, а одежда — это слова, из которых будут наглядно складываться фразы, отражающие отношение
          покупателя к экологии и ситуации в мире.

        </p>
      </div>
    </div>
    <div class="row_block">
      <div class="text_block">
        <p class="text_without_pic">
          За индустрией гибридной моды будущее! <br>Почему? — Смотрите в нашем видеоролике.
        </p>
      </div>
    </div>

    <MediaView/>

    <div class="button">
      <router-link to="/">
        На главную
      </router-link>
    </div>
  </div>
</template>

<script lang="ts">
import MediaView from "./MediaView.vue";

export default {
  name: 'TextView1',
  components: {MediaView},
}
</script>

<style scoped>
.wrapper {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 90vw;
  gap: 2rem;
  margin-top: 2rem;
  margin-bottom: 2rem;
}

.text_header {
  background-color: var(--card-bg-color);
  width: 80%;
  font-size: 1.5rem;
  font-weight: 600;
  padding: 0.5rem;
  border-radius: 1rem;
}

.text_block {
  background-color: var(--card-bg-color);
  padding: 1rem;
  border-radius: 1rem;
  width: 65vw;
  text-align: left;
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  align-items: center;
}

.text {
  display: flex;
  flex-direction: column;
  width: 50%;
}

.text_without_pic {
  display: flex;
  flex-direction: column;
  width: 80%;
}

.row_block {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
}

.image {
  height: 40vh;
  border-radius: 1rem;
}

.button {
  font-size: 1.25rem;
  font-weight: 500;
  background-color: var(--card-bg-color);
  padding: 1rem;
  border-radius: 1rem;
  width: 30vw;
  margin-top: 3rem;
}
</style>
