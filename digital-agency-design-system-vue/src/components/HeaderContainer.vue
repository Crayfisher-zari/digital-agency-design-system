<script setup lang="ts">
type Props = {
  type?: "full" | "slim";
};
withDefaults(defineProps<Props>(), {
  type: "full",
});
</script>
<template>
  <header :class="type">
    <div class="logo">
      <slot name="logo"></slot>
    </div>
    <div class="item">
      <slot name="item"></slot>
    </div>
    <div class="menu">
      <slot name="menu"></slot>
    </div>
    <div class="hamburger">
      <slot name="hamburger"></slot>
    </div>
  </header>
</template>
<style scoped lang="scss">
header {
  display: grid;
  grid-template: "logo item" 80px "menu hamburger" 56px / 240px 1fr;
}
</style>
