<template>
  <div class="page page_hard-skills">
    <h1 style="margin-bottom: 40px">Hard Skills</h1>
    <div class="skills">
      <div class="skill" v-for="text in texts" :key="text">
        {{ text }}
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "AboutMe",
  data() {
    return {
      texts: [
        "HTML",
        "CSS",
        "JavaScript",
        "Vue.js",
        "PIXI.js",
        "Sass",
        "git",
        "Figma",
        "Responsive Design",
        "Adaptive Design",
      ],
    };
  },
};
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
  &:last-of-type
    margin-right: 0px
</style>
