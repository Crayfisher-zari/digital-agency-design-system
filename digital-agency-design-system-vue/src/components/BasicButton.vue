<script lang="ts" setup>
import { withDefaults } from "vue";
type Props = {
  /** ボタンのテキストです */
  label: string;
  /** ボタンのタイプです。未指定の場合はprimaryになります */
  type?: "primary" | "secondary" | "tertiary";
};

withDefaults(defineProps<Props>(), {
  type: "primary",
});
</script>
<template>
  <button :class="type">
    <span class="labelText">{{ label }}</span>
  </button>
</template>

<style lang="scss" scoped>


button {
  display: block;
  padding: 15px 32px;
  font-family: inherit;
  font-size: 1rem;
  font-weight: bold;
  color: var(--color-text-onFill);
  cursor: pointer;
  background-color: var(--color-button-normal);
  border: 1px solid var(--color-button-normal);
  border-radius: 8px;
  appearance: none;
  transition: background-color var(--base-duration) var(--easing-out-expo),
    color var(--base-duration) var(--easing-out-expo),
    border-color var(--base-duration) var(--easing-out-expo);

  .labelText {
    color: inherit;
  }

  &:focus-visible {
    outline: 2px solid var(--color-border-focused);
    outline-offset: 2px;
  }

  &:not(:disabled):hover {
    background-color: var(--color-button-hover);
    border-color: var(--color-button-hover);
  }

  &:disabled {
    cursor: auto;
    background-color: var(--color-button-disabled);
    border-color: var(--color-button-disabled);
  }

  &.secondary {
    color: var(--color-button-normal);
    background-color: transparent;

    &:not(:disabled):hover {
      color: var(--color-button-hover);
      background-color: var(--color-sea-50);
    }

    &:focus-visible {
      border-color: transparent;
      outline-offset: -1px;
    }

    &:disabled {
      color: var(--color-button-disabled);
      border-color: var(--color-button-disabled);
    }
  }

  &.tertiary {
    color: var(--color-button-normal);
    background-color: transparent;
    border-color: transparent;

    &:not(:disabled):hover {
      color: var(--color-button-hover);
      background-color: transparent;
      border-color: transparent;
    }

    &:focus-visible {
      outline-offset: -1px;
    }

    &:disabled {
      color: var(--color-button-disabled);
    }

    .labelText {
      text-decoration: underline;
    }
  }
}
</style>
