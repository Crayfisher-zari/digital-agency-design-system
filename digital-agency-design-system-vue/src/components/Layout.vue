<script setup lang="ts"></script>
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

@include mediaQueryUp(tablet) {
  @for $i from 1 through 12 {
    .colSpan-#{$i} {
      grid-column: span $i / span $i;
    }
  }
}

@include mediaQueryDown(tablet) {
  .layout {
    grid-template-columns: repeat(2, 1fr);
  }
  @for $i from 1 through 12 {
    .colSpan-#{$i} {
      grid-column: span 2 / span 2;
    }
  }
  .colSpanTablet-1 {
    grid-column: span 1 / span 1;
  }
  .colSpanTablet-2 {
    grid-column: span 2 / span 2;
  }
}

@include mediaQueryDown(mobile) {
  .layout {
    padding: 0 16px;
    grid-template-columns: repeat(1, 1fr);
  }
  @for $i from 1 through 12 {
    .colSpan-#{$i} {
      grid-column: span 1 / span 1;
    }
  }
  .colSpanTablet-1 {
    grid-column: span 1 / span 1;
  }
  .colSpanTablet-2 {
    grid-column: span 1 / span 1;
  }
}
</style>
