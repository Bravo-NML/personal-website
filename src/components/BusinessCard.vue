<template>
  <div class="business-card" @click="$emit('goToStart', 'start')">
    <div class="business-card__inner">
      <div class="business-card__side business-card__side_front">
        <h1 class="business-card__h1">Bravo, Yana</h1>
        <p class="business-card__p business-card__p_front">
          web-developer and more
        </p>
      </div>
      <div class="business-card__side business-card__side_back">
        <p class="business-card__p">
          <strong>E-mail: </strong>
          nglb.mainpoint@yandex.ru
        </p>
        <p class="business-card__p"><strong>Telegram: </strong>@Bravo_NML</p>
        <p class="business-card__p"><strong>Phone: </strong>+7 9851781965</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "BusinessCard",
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="sass" src="../assets/styles/BusinessCard.sass"></style>
