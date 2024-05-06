<template>
  <div class="page page_projects">
    <h1 style="margin-bottom: 40px">Some of my projects</h1>
    <div class="projects-container">
      <h3>Games</h3>
      <nav class="navigation">
        <!-- eslint-disable-next-line -->
        <DotLink v-for="(p, i) in projects.games" :key="i" class="dot-link_project" :class="{'dot-link_project-current': curProject === 'games_' + i}" @click="curProject = 'games_' + i"/>
      </nav>

      <h3>Products</h3>
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

<script>
import DotLink from "../components/Dot.vue";

export default {
  name: "AboutMe",
  components: {
    DotLink,
  },
  data() {
    return {
      projects: {
        games: [
          "https://iamhero.special.ink/",
          "https://fastcook.special.ink/",
          "https://petcafe.special.ink",
          "https://startup.special.ink",
          "https://moskvateka.special.ink/",
        ],
        product: ["https://brandanalytics.ru/en_RU/"],
        pet: [""],
      },
      curProject: "product_0",
    };
  },
  computed: {
    image() {
      return require("../assets/images/" + this.curProject + ".png");
    },

    currentProjectUrl() {
      const names = this.curProject.split("_");

      return this.projects[names[0]][names[1]];
    },
  },
};
</script>

<style lang="sass">
.navigation
  width: 100%
  display: flex
  justify-content: space-between

.image
  width: 400px
  height: auto
  aspect-ratio: 5 / 3
  background-size: cover
  background-position: center
  margin: 40px auto 15px
  outline: 3px solid #DD65B7
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
  gap: 20px 20px
  margin-bottom: 40px

  h3
    color: #65d9dd

@media (max-width: 600px)
  .image
    width: 75vw
</style>
