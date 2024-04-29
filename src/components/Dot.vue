<template>
  <div class="dot-link" @click="$emit('openPage', title)">
    <div
      class="dot"
      :class="{
        'dot-current': currentRouteName === router,
      }"
      name="dot"
    ></div>

    <label for="dot" class="label">
      {{ title }}
    </label>
  </div>
</template>

<script>
export default {
  name: "DotLink",
  props: {
    title: String,
    router: String,
  },
  computed: {
    currentRouteName() {
      return this.$route.name;
    },
  },
};
</script>
<style scoped lang="sass" src="../assets/styles/Dot.sass"></style>
