<template>
  <router-view />
  <div class="footer">
    <DotLink
      v-for="item in menuData"
      :key="item.router"
      :title="item.title"
      :router="item.router"
      @click="goPage(item.url)"
    />
  </div>
</template>

<script>
import DotLink from "./components/Dot.vue";

export default {
  name: "HelloPage",
  components: {
    DotLink,
  },
  data() {
    return {
      menuData: [
        {
          title: "Contact me",
          router: "home",
          url: "/",
        },
        {
          title: "About me",
          router: "about-me",
          url: "/about-me",
        },
        {
          title: "Hard Skills",
          router: "hard-skills",
          url: "/hard-skills",
        },
        {
          title: "Progects",
          router: "projects",
          url: "/projects",
        },
      ],
    };
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
