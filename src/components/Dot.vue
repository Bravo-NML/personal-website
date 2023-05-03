<template>
  <div class="dot-link" @click="$emit('openPage', title)">
    <div
      :class="'dot ' + (lable ? 'dot_bigger' : '')"
      name="dot"
      @mouseover="lableVisible(true)"
      @mouseleave="lableVisible(false)"
    ></div>

    <label for="dot" :class="'lable ' + (lable ? 'lable_visible' : '')">
      {{ title }}
    </label>
  </div>
</template>

<script>
export default {
  name: "DotLink",
  props: {
    title: String,
  },
  data() {
    return {
      lable: false,
    };
  },
  methods: {
    lableVisible(a) {
      this.lable = a;
    },
  },
};
</script>
<style scoped lang="sass" src="../assets/styles/Dot.sass"></style>
