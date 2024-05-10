<template>
  <div class="page page_hard-skills">
    <h1 style="margin-bottom: 40px">
      {{ translations.hardSkills.header }}
    </h1>

    <div class="skills">
      <div
        :class="'skill ' + (skill.add ? 'skill-has_add' : '')"
        v-for="skill in skills"
        :key="skill"
      >
        {{ skill.name }}

        <span class="skill-additional" v-if="skill.add">{{ skill.add }}</span>
      </div>
    </div>
  </div>
</template>

<script setup>
import { computed, inject } from "vue";

const translations = inject("translations");

const skills = computed(() => {
  return [
    { name: "HTML" },
    { name: "CSS" },
    { name: "JavaScript", add: "ES6" },
    { name: "Vue.js", add: "2, 3" },
    { name: "PIXI.js" },
    { name: "Sass" },
    { name: "git" },
    { name: "Figma" },
    { name: translations.value.hardSkills.aDesign },
    { name: translations.value.hardSkills.rDesign },
  ];
});
</script>

<style lang="sass">
.skills
  display: flex
  flex-wrap: wrap
  align-content: flex-start
  width: 100%
  height: 100%

.skill
  padding: 10px 20px
  width: fit-content
  height: fit-content
  margin: 20px
  background-color: #FFF5FF
  color: #10080D
  border-radius: 10px

  display: flex
  align-items: center
  justify-content: center
  margin-left: 0px

  cursor: default

  &:last-of-type
    margin-right: 0px

  &-has_add
    background-color: #ffcff0

    &:hover .skill-additional
      opacity: 1

  &-additional
    position: absolute
    color: #fff
    bottom: -60%
    opacity: 0
    transition: all .1s linear
</style>
