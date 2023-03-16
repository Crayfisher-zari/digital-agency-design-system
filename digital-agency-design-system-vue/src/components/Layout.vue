<script setup lang="ts">
</script>
<template>
  <div class="layout">
    <slot></slot>
  </div>
</template>
<style lang="scss">
@use "@/assets/style/utils/utils.scss" as *;

.layout {
  max-width: 1104px;
  padding: 0 40px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: repeat(12, 1fr);
  grid-template-rows: auto;
  column-gap: 32px;
  row-gap: 32px;
  grid-auto-rows: auto;
}

@for $i from 1 through 12 {
  .colspan-#{$i} {
    grid-column: span $i / span $i;
  }
}

@include mediaQueryDown() {
  .layout {
    padding: 0 16px;
  }
}
</style>
