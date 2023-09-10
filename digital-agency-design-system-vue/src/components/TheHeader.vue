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
    <slot name="logo"></slot>
    <slot name="item"></slot>
    <slot name="menu"></slot>
    <slot name="hamburger"></slot>
  </header>
</template>
<style scoped lang="scss">
header {
  display: grid;
}
</style>
