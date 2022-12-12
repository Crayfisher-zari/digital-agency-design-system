<script lang="ts" setup>
import { withDefaults } from "vue";
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
  <button :class="props.type">
    <span class="labelText">{{ label }}</span>
  </button>
</template>

<style lang="scss">
button {
  display: block;
  padding: 16px 32px;
  font-family: inherit;
  font-size: 1rem;
  font-weight: bold;
  color: var(--color-text-onFill);
  cursor: pointer;
  background-color: var(--color-button-normal);
  border: 1px solid var(--color-button-normal);
  border-radius: 8px;
  appearance: none;
  transition: background-color 0.2s;

  .labelText {
    color: inherit;
  }

  &:focus-visible {
    outline: 2px solid var(--color-border-focused);
    outline-offset: 2px;
  }

  &:hover {
    background-color: var(--color-button-hover);
  }

  &.secondary {
    color: var(--color-button-normal);
    background-color: transparent;

    &:hover {
      color: var(--color-button-hover);
      background-color: var(--color-sea-50);
    }

    &:focus-visible {
      border-color: transparent;
      outline-offset: -1px;
    }
  }

  &.tertiary {
    color: var(--color-button-normal);
    background-color: transparent;
    border-color: transparent;

    &:hover {
      color: var(--color-button-hover);
    }

    &:focus-visible {
      outline-offset: -1px;
    }

    .labelText {
      text-decoration: underline;
    }
  }
}
</style>
