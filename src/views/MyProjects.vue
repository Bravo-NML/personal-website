<template>
  <div class="page page_projects">
    <h1>{{ texts.header }}</h1>
    <div class="projects-container">
      <h3>{{ texts.games }}</h3>
      <nav class="navigation">
        <DotLink
          v-for="game in projects.games"
          :key="game.id"
          class="dot-link_project"
          :class="{
            'dot-link_project-current': curProject === 'games_' + game.id,
          }"
          @click="curProject = 'games_' + game.id"
        />
      </nav>

      <h3>{{ texts.products }}</h3>
      <nav class="navigation">
        <!-- eslint-disable-next-line -->
        <DotLink v-for="(p, i) in projects.product" :key="i" class="dot-link_project" :class="{'dot-link_project-current': curProject === 'product_' + i}" @click="curProject = 'product_' + i"/>
      </nav>

      <!-- <h3>Пет-проекты</h3>
      <nav class="navigation">
        eslint-disable-next-line
        <DotLink v-for="(p, i) in projects.pet" :key="i" class="dot-link_project" :class="{'dot-link_project-current': curProject === 'pet_' + i}" @click="curProject = 'pet_' + i"/>
      </nav> -->
    </div>

    <a class="link" target="_blanck" :href="currentProjectUrl">
      {{ currentProjectUrl }}
    </a>
    <div class="image" :style="'background-image: url(' + image + ')'"></div>
  </div>
</template>

<script setup>
import { ref, computed, inject } from "vue";

const translations = inject("translations");

const texts = computed(() => {
  return translations.value.projects;
});

import DotLink from "../components/Dot.vue";

const projects = {
  games: [
    // "https://iamhero.special.ink/",
    // "https://fastcook.special.ink/",
    {
      url: "https://petcafe.special.ink",
      id: "2",
    },
    {
      url: "https://startup.special.ink",
      id: "3",
    },
    {
      url: "https://moskvateka.special.ink/",
      id: "4",
    },
  ],
  product: [
    {
      url: "https://brandanalytics.ru/en_RU/",
      id: "0",
    },
  ],
  pet: [""],
};

const curProject = ref("product_0");

const image = computed(() => {
  return require("../assets/images/" + curProject.value + ".png");
});

const currentProjectUrl = computed(() => {
  const names = curProject.value.split("_");

  return projects[names[0]].find((el) => el.id === names[1]).url;
});
</script>

<style lang="sass">
@import "@/assets/styles/variables"

.page_projects h1
  margin-bottom: 40px

.navigation
  width: 100%
  display: flex
  gap: 75px
  padding-right: 10px

.image
  width: 400px
  height: auto
  aspect-ratio: 5 / 3
  background-size: cover
  background-position: center
  margin: 40px auto 15px
  outline: 3px solid $color-pink
  outline-offset: 12px
  border-radius: 15px

.link
  color: #FFF5FF
  text-decoration: none

  &:visited
    color: #938A93

.projects-container
  display: grid
  grid-template-columns: max-content 1fr
  margin-left: 40px
  gap: 20px 40px
  margin-bottom: 40px

  h3
    color: #65d9dd

@media (max-width: $media-phone)
  .page_projects h1
    margin-bottom: 20px

  .projects-container
    margin-left: 20px
    margin-bottom: 20px
    gap: 20px 20px

  .navigation
    gap: 0
    justify-content: space-between

  .image
    margin-top: 25px
    width: 75vw
    border-radius: 5px
    outline-offset: 6px
</style>
