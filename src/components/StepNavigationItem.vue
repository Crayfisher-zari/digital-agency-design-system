<script setup lang="ts">
defineProps<{
  step: number;
  size?: "small" | "medium";
  process: "deafault" | "skipped" | "reached" ;
  state?: "editing" | "error" ;
}>();
</script>

<template>
  <div class="stepNavigationItem" :class="size">
    <div class="stepNumber">
      {{ step }}
    </div>
  </div>
</template>

<style scoped>
  .stepNavigationItem{
    display: grid;
    place-items: center;
    width: 44px;
    height: 44px;
    border-radius: 50%;
    border: 2px solid var(--color-text-secondary);
    &.small{
      width: 32px;
      height: 32px;
    }
  }
  .stepNumber{
    font-size: 1.25rem;
    font-weight: var(--weight-bold);
    line-height: 1;
    color: var(--color-text-secondary);
  }
</style>