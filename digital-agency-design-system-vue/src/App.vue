<script setup lang="ts">
import Heading from "./components/Heading.vue";
</script>

<template>
  <div>
    <a href="https://vitejs.dev" target="_blank">
      <img src="/vite.svg" class="logo" alt="Vite logo" />
    </a>
    <a href="https://vuejs.org/" target="_blank">
      <img src="./assets/vue.svg" class="logo vue" alt="Vue logo" />
    </a>
  </div>
  <Heading :headingLevel="1">H1 / Bold(700) / 1.5</Heading>
  <Heading :headingLevel="2">H2 / Bold(700) / 1.5</Heading>
  <Heading :headingLevel="3">H3 / Bold(700) / 1.5</Heading>
  <Heading :headingLevel="4">H4 / Bold(700) / 1.5</Heading>
  <Heading :headingLevel="5">H5 / Bold(700) / 1.5</Heading>
  <Heading :headingLevel="6">H6 / Bold(700) / 1.5</Heading>
</template>

<style scoped>
.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
}

.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}

.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}
</style>
