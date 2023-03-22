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
  row-gap: 32px;
  column-gap: 32px;
  max-width: 1024px;
  margin: 0 auto;
}

@include mediaQueryUp(tablet) {
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

@include mediaQueryDown(tablet) {
  .layout {
    grid-template-columns: repeat(2, 1fr);
  }
  @for $i from 1 through 12 {
    .colSpan-#{$i} {
      grid-column: span 2 / span 2;
    }
    .colStart-#{$i} {
      grid-column-start: 1;
    }
    .colEnd-#{$i} {
      grid-column-end: 3;
    }

    .colEnd-13 {
      grid-column-end: 3;
    }
  }

  .colSpanTablet-1 {
    grid-column: span 1 / span 1;
  }

  .colSpanTablet-2 {
    grid-column: span 2 / span 2;
  }

  .colStartTablet-1 {
    grid-column-start: 1;
  }

  .colStartTablet-2 {
    grid-column-start: 2;
  }

  .colEndTablet-2 {
    grid-column-end: 2;
  }

  .colEndTablet-3 {
    grid-column-end: 3;
  }
}

@include mediaQueryDown(mobile) {
  .layout {
    grid-template-columns: repeat(1, 1fr);
    padding: 0 16px;
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
