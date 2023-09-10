<script setup lang="ts">
import NavigationContainer from "./NavigationContainer.vue";

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
      <NavigationContainer>
        <slot name="item"></slot>
      </NavigationContainer>
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
  padding: 0 40px;
}
</style>
