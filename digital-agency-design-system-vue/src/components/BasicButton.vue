<script lang="ts" setup>
import { defineProps, withDefaults } from "vue";
type Props = {
  /** ボタンのテキストです */
  label: string;
  /** ボタンのタイプです。未指定の場合はprimaryになります */
  type: "primary" | "secondary" | "tertiary";
};

const props = withDefaults(defineProps<Props>(), {
  type: "primary",
});
</script>
<template>
  <button :class="props.type">{{ label }}</button>
</template>

<style lang="scss">
button {
  padding: 16px 32px;
  font-size: 1rem;
  font-weight: bold;
  color: var(--color-text-onFill);
  cursor: pointer;
  background-color: var(--color-button-normal);
  border: 2px solid var(--color-button-normal);
  border-radius: 8px;
  appearance: none;

  &.secondary {
    color: var(--color-button-normal);
    background-color: transparent;
  }
}
</style>
