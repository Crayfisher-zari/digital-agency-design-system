<script setup lang="ts"></script>
<template>
  <div class="layout">
    <slot></slot>
  </div>
</template>
<style lang="scss">
@use "@/assets/style/utils/utils.scss" as *;

.layout {
  display: grid;
  grid-template-rows: auto;
  grid-template-columns: repeat(12, 1fr);
  grid-auto-rows: auto;
  gap: 32px 32px;
  max-width: 1024px;
  margin: 0 auto;
}

@include mediaQueryUp {
  @for $i from 1 through 12 {
    .colSpan-#{$i} {
      grid-column: span $i / span $i;
    }
    .colStart-#{$i} {
      grid-column-start: $i;
    }
    .colEnd-#{$i} {
      grid-column-end: $i;
    }

    .colEnd-13 {
      grid-column-end: 13;
    }
  }
}

@include mediaQueryDown {
  .layout {
    grid-template-columns: repeat(1, 100%);
  }

  @for $i from 1 through 12 {
    .colSpan-#{$i} {
      grid-column: span 1 / span 1;
    }
    .colEnd-#{$i} {
      grid-column-end: 2;
    }
  }

  .colEnd-13 {
    grid-column-end: 2;
  }

  .colSpanTablet-1 {
    grid-column: span 1 / span 1;
  }

  .colSpanTablet-2 {
    grid-column: span 1 / span 1;
  }
}
</style>
