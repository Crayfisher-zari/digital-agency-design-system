<script setup lang="ts">
type Props = {
  tag: "ul" | "ol";
  spaceing?: 12 | 8 | 4;
};
withDefaults(defineProps<Props>(), {
  tag: "ul",
  spaceing: 4,
});
</script>
<template>
  <component :is="tag" class="basicList" :class="[`spaceing-${spaceing}`]">
    <slot />
  </component>
</template>
<style scoped>
.basicList {
  padding-left: 32px;
}

ol.basicList {
  list-style: decimal;
}

ul.basicList {
  list-style: disc;
}

ul.basicList :deep(ul.basicList) {
  list-style: circle;
}

ul.basicList :deep(ul.basicList ul.basicList) {
  list-style: square;
}

.basicList :deep(li) {
  font-size: 1rem;
  line-height: 1.7;
  letter-spacing: 0.02em;
}

.spaceing-12 :deep(.basicList) {
  margin-top: 0.75rem;
  margin-bottom: -0.75rem;
}

.spaceing-12 > :deep(li) {
  padding-top: 0.75rem;
  padding-bottom: 0.75rem;
}

.spaceing-8 :deep(.basicList) {
  margin-top: 0.5rem;
  margin-bottom: -0.5rem;
}

.spaceing-8 > :deep(li) {
  padding-top: 0.5rem;
  padding-bottom: 0.5rem;
}

.spaceing-4 :deep(.basicList) {
  margin-top: 0.25rem;
  margin-bottom: -0.25rem;
}

.spaceing-4 > :deep(li) {
  padding-top: 0.25rem;
  padding-bottom: 0.25rem;
}
</style>
