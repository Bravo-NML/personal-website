<template>
  <router-view />
  <div @click="toggleLanguage" class="language-changer">
    {{ translateTo }}
  </div>

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

<script setup>
import DotLink from "./components/Dot.vue";
import { onMounted, provide, ref, computed } from "vue";
import ruTexts from "./assets/translations/ru.json";
import enTexts from "./assets/translations/en.json";
import { useRouter } from "vue-router";

const router = useRouter();

const languageDefault = localStorage.getItem("languageDefault") || "ru";

let languageGlobal = ref(languageDefault);

let currentTranslation = computed(() => {
  return languageGlobal.value === "ru" ? ruTexts : enTexts;
});

function toggleLanguage() {
  let translateTo = languageGlobal.value === "ru" ? "en" : "ru";

  languageGlobal.value = translateTo;

  localStorage.setItem("languageDefault", translateTo);
}

function goPage(a) {
  router.push(a);
}

const translateTo = computed(() => {
  return languageGlobal.value === "ru" ? "EN" : "RU";
});

provide("translations", currentTranslation);

onMounted(() => {
  // eslint-disable-next-line
  let vh = window.innerHeight * 0.01;
  document.documentElement.style.setProperty("--vh", `${vh}px`);

  window.addEventListener("resize", () => {
    // We execute the same script as before
    vh = window.innerHeight * 0.01;
    document.documentElement.style.setProperty("--vh", `${vh}px`);
  });
});

const menuData = computed(() => {
  const nt = currentTranslation.value.navigation;

  return [
    {
      title: nt.contactMe,
      router: "home",
      url: "/",
    },
    {
      title: nt.aboutMe,
      router: "about-me",
      url: "/about-me",
    },
    {
      title: nt.hardSkills,
      router: "hard-skills",
      url: "/hard-skills",
    },
    {
      title: nt.projects,
      router: "projects",
      url: "/projects",
    },
  ];
});
</script>

<style lang="sass" src="./assets/styles/base.sass"></style>
