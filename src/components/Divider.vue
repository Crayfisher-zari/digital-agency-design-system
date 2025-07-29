<script setup lang="ts">
type Props = {
  weight?: 1 | 2 | 3 | 4;
  color?: "default" | "medium" | "dark";
  borderStyle?: "solid" | "dash";
  padding?: string;
};
withDefaults(defineProps<Props>(), {
  weight: 1,
  color: "default",
  borderStyle: "solid",
  padding: "unset",
});
</script>
<template>
  <div class="dividerWrapper">
    <div class="divider" :class="[color, borderStyle, `weight${weight}`]"></div>
  </div>
</template>
<style lang="scss" scoped>
// TODO カラーのアップデート
.dividerWrapper {
  padding: v-bind(padding);
}

.divider {
  border-top: 1px solid var(--color-border-divider);

  &.medium {
    border-color: var(--color-border-medium-divider);
  }

  &.dark {
    border-color: var(--color-border-strong-divider);
  }

  &.weight2 {
    border-top-width: 2px;
  }

  &.weight3 {
    border-top-width: 3px;
  }

  &.weight4 {
    border-top-width: 4px;
  }

  &.dash {
    border-style: dashed;
  }
}
</style>
