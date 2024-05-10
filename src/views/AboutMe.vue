<template>
  <div class="page page_about-me">
    <h1 style="margin-bottom: 40px">{{ texts.header }}</h1>
    <p v-for="text in texts.texts" :key="text">
      <strong>{{ text.s }}</strong>
      {{ text.t }}
    </p>
  </div>
</template>

<script setup>
import { inject, computed } from "vue";

const translations = inject("translations");

const texts = computed(() => {
  return translations.value.aboutMe;
});
</script>
