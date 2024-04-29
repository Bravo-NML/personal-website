<template>
  <router-view />
  <div class="footer">
    <DotLink title="Визитка" router="home" @click="goPage('/')" />
    <DotLink title="Обо мне" router="about-me" @click="goPage('/about-me')" />
    <DotLink
      title="Hard Skills"
      router="hard-skills"
      @click="goPage('/hard-skills')"
    />
    <DotLink title="Проекты" router="projects" @click="goPage('/projects')" />
  </div>
</template>

<script>
import DotLink from "./components/Dot.vue";

export default {
  name: "HelloPage",
  components: {
    DotLink,
  },
  methods: {
    goPage(a) {
      this.$router.push(a);
    },
  },
  mounted() {
    // eslint-disable-next-line
    let vh = window.innerHeight * 0.01;
    document.documentElement.style.setProperty("--vh", `${vh}px`);

    window.addEventListener("resize", () => {
      // We execute the same script as before
      vh = window.innerHeight * 0.01;
      document.documentElement.style.setProperty("--vh", `${vh}px`);
    });
  },
};
</script>

<style lang="sass" src="./assets/styles/base.sass"></style>
