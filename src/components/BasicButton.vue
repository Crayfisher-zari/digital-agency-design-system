<script lang="ts" setup>
type Props = {
  /** ボタンのテキストです */
  label: string;
  /** ボタンのタイプです。未指定の場合はprimaryになります */
  type?: "primary" | "secondary" | "tertiary";
  /** 非活性かどうか？ */
  disabled?: boolean;
};

type Emits = {
  /** クリック時のイベントハンドラ */
  click: [];
};

const emits = defineEmits<Emits>();

withDefaults(defineProps<Props>(), {
  type: "primary",
});
</script>
<template>
  <button :class="type" :disabled="disabled" @click="emits('click')">
    <span class="labelText">{{ label }}</span>
  </button>
</template>

<style lang="scss" scoped>
@use "@/assets/style/utils/utils.scss" as *;

button {
  display: block;
  padding: 15px 32px;
  font-family: inherit;
  font-size: pxToRem(16);
  font-weight: bold;
  color: var(--color-text-onFill);
  appearance: none;
  cursor: pointer;
  background-color: var(--color-button-normal);
  border: 1px solid var(--color-button-normal);
  border-radius: 8px;
  transition:
    background-color var(--base-duration) var(--easing-out-expo),
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
    text-decoration: underline;
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
      outline: 2px solid var(--color-border-focused);
      outline-offset: 2px;
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
      background-color: var(--color-blue-200);
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
