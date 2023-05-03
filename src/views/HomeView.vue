<template>
  <div class="home">
    <BusinessCard />
  </div>
</template>

<script>
// @ is an alias to /src
import BusinessCard from "@/components/BusinessCard.vue";

export default {
  name: "HomeView",
  components: {
    BusinessCard,
  },
};
</script>
