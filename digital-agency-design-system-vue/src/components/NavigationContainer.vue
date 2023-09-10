<script setup lang="ts">
type Props = {
  alignItems?: "start" | "center" | "end" | "baseline";
  justifyContent?:
    | "start"
    | "center"
    | "end"
    | "spaceBetween"
    | "spaceAround"
    | "spaceEvenry";
  gap?: "small" | "medium" | "large";
};

defineProps<Props>();
</script>
<template>
  <nav
    :class="[
      alignItems ? `alignItems ${alignItems}` : null,
      justifyContent ? `justifyContent ${justifyContent}` : null,
      gap ? `gap-${gap}` : null,
    ]"
  >
    <slot></slot>
  </nav>
</template>
<style lang="scss" scoped>
nav {
  display: flex;
  column-gap: 32px;
  color: var(--color-text-body);

  &.alignItems {
    &.center {
      align-items: center;
    }

    &.end {
      align-items: flex-end;
    }

    &.baseline {
      align-items: baseline;
    }
  }

  &.justifyContent {
    &.center {
      justify-content: center;
    }

    &.end {
      justify-content: flex-end;
    }

    &.spaceBetween {
      justify-content: space-between;
    }

    &.spaceAround {
      justify-content: space-around;
    }

    &.spaceEvenly {
      justify-content: space-evenly;
    }
  }

  &.gap-small {
    column-gap: 16px;
  }

  &.gap-medium {
    column-gap: 32px;
  }

  &.gap-large {
    column-gap: 48px;
  }
}
</style>
