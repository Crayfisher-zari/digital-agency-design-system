<script setup lang="ts">
defineProps<{
  step: number;
  process: "deafault" | "skipped" | "reached" ;
  state?: "editing" | "error" ;
}>();
</script>

<template>
  <div class="stepNavigationItem">
    <div class="stepNumber">
      {{ step }}
    </div>
  </div>
</template>

<style scoped>
</style>