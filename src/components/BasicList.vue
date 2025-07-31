<script setup lang="ts">
type Props = {
  tag: "ul" | "ol";
  indent: 0 | 16 | 24 | 32 | 48 | 56;
};
 defineProps<Props>();
</script>
<template>
  <component :is="tag" class="basicList">
    <slot />
  </component>
</template>
<style scoped>
ol.basicList {

}
</style>