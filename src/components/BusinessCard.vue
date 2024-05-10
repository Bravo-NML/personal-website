<template>
  <div class="business-card">
    <div class="business-card__inner">
      <div class="business-card__side business-card__side_front">
        <h1 class="business-card__h1" data-test="name">
          {{ translations.bussinesCard.name }}
        </h1>
        <p class="business-card__p business-card__p_front">
          {{ translations.bussinesCard.description }}
        </p>
      </div>
      <div class="business-card__side business-card__side_back">
        <p class="business-card__p">
          <strong>E-mail: </strong>
          nglb.mainpoint@yandex.ru
        </p>

        <p class="business-card__p"><strong>Telegram: </strong>@YadaYadaYana</p>

        <!-- <p class="business-card__p">
          <strong>{{ translations.bussinesCard.phone }}: </strong>
          +7 9851781965
        </p> -->
      </div>
    </div>
  </div>
</template>

<script setup>
import { inject } from "vue";

const translations = inject("translations");
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="sass" src="../assets/styles/BusinessCard.sass"></style>
