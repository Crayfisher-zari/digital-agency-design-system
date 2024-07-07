<script setup lang="ts">
type Props = {
  weight?: 1 | 2 | 3 | 4;
  color?: "default" | "medium" | "dark";
  borderStyle?: "solid" | "dash";
};
withDefaults(defineProps<Props>(), {
  weight: 1,
  color: "default",
  borderStyle: "solid",
});
</script>
<template>
  <div class="divider" :class="[color, borderStyle, `weight${weight}`]"></div>
</template>
<style lang="scss" scoped>
// TODO カラーのアップデート
.divider {
  border: 1px solid var(--color-border-divider);

  &.medium {
    border-color: var(--color-border-medium-divider);
  }

  &.dark {
    border-color: var(--color-border-strong-light-divide);
  }

  &.weight2 {
    border-width: 2px;
  }

  &.weight3 {
    border-width: 3px;
  }

  &.weight4 {
    border-width: 4px;
  }

  &.dash {
    border-style: dashed;
  }
}
</style>
