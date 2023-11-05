<script setup lang="ts">
type Props = {
  weight?: 1 | 2 | 3 | 4;
  color?: "default" | "medium" | "dark";
  style?: "solid" | "dash";
};
withDefaults(defineProps<Props>(), {
  weight: 1,
  color: "default",
  style: "solid",
});
</script>
<template>
  <div class="divider"></div>
</template>
<style lang="scss" scoped>
.divider {
  border: 1px solid var(--color-border-divider);
}
</style>
