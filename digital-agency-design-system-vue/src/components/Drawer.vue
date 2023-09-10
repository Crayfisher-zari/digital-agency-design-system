<script setup lang="ts"></script>
<template><div class="drawer"></div></template>
<style lang="scss" scoped>
@use "@/assets/style/utils/utils.scss" as *;

.drawer {
  @include mediaQueryUp {
    display: none;
  }
}
</style>
