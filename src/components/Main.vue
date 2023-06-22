<template>
  <main class="main">
    <About />
    <SPortfolio />
  </main>
</template>
<script>
import About from "./About.vue";
import SPortfolio from "./SPortfolio.vue";
export default {
  name: "Main",
  components: {
    About,
    SPortfolio
  },
};
</script>
<style lang="sass"></style>
