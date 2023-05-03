<template>
  <div class="page page_projects">
    <h1 style="margin-bottom: 40px">Some of my projects</h1>
    <nav class="navigation">
      <!-- eslint-disable-next-line -->
      <DotLink v-for="(p, i) in projects" :key="i" class="dot-link_project" @click="curProject = i"/>
    </nav>
    <a class="link" :href="projects[curProject]">
      {{ projects[curProject] }}
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
      projects: [
        "https://iamhero.special.ink/",
        "https://fastcook.special.ink/",
        "https://petcafe.special.ink",
        "https://startup.special.ink",
        "https://fonbet.dev.special.ink/",
        "https://moskvateka.special.ink/",
      ],
      curProject: 0,
    };
  },
  computed: {
    image() {
      return require("../assets/images/" + this.curProject + ".png");
    },
  },
};
</script>

<style lang="sass">
.navigation
  width: 100%
  display: flex
  margin-bottom: 40px
  justify-content: space-around
.image
  width: 55vh
  height: 35vh
  background-size: cover
  background-position: center
  margin: 40px auto 0
  outline: 3px solid #DD65B7
  outline-offset: 12px
  border-radius: 15px
.link
  color: #FFF5FF
  text-decoration: none
  &:visited
    color: #938A93

@media (max-width: 600px)

  .image
    width: 75vw
    height: 55vw
</style>
