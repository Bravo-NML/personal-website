<template>
  <div class="footer">
    <DotLink title="Home" @click="goPage('/')" />
    <DotLink title="About Me" @click="goPage('/about-me')" />
    <DotLink title="Hard Skills" @click="goPage('/hard-skills')" />
    <DotLink title="Projects" @click="goPage('/projects')" />
  </div>
  <router-view />
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
};
</script>

<style lang="sass" src="./assets/styles/base.sass"></style>
