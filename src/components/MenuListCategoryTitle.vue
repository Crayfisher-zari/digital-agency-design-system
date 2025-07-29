<script setup lang="ts">
type Props = {
  size?: "regular" | "small";
};

withDefaults(defineProps<Props>(), {
  size: "regular",
});
</script>

<template>
  <span>
    <span :class="[size]" class="menuListCategoryTitle">
      <span class="iconForward">
        <slot name="icon" />
      </span>
      <span class="text">
        <slot />
      </span>
    </span>
  </span>
</template>

<style scoped>
.menuListCategoryTitle {
  display: flex;
  column-gap: 8px;
  align-items: center;
  justify-content: flex-start;
  padding: 10px 10px 18px 14px;
  color: var(--color-text-body);
  text-decoration: none;
  border: 2px solid transparent;
  transition: background-color var(--base-duration) var(--easing-out-expo);

  &.small {
    padding: 8px 12px;

    .text {
      font-size: calc(14rem / 16);
      line-height: 1.2;
    }
  }
}

.text {
  font-size: 1rem;
  line-height: 1.3;
  font-weight: var(--weight-bold);
}

.iconForward {
  display: flex;
}
</style>
