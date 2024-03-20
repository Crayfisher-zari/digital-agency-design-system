<script lang="ts" setup>
import { computed } from "vue";

type Props = {
  /** ボタンのテキストです */
  label: string;
  /** ボタンのタイプです。未指定の場合はprimaryになります */
  type?: "primary" | "secondary" | "tertiary" | "custom";
  /** 非活性かどうか？ */
  disabled?: boolean;
  /** カスタムカラー。個別で指定したい場合 */
  customColor?: {
    /** 背景色 */
    backgroundColor: string;
    /** 枠線色 */
    borderColor?: string;
    /** ラベル文字の色 */
    labelColor: string;
    /** ホバー時の背景色 */
    hoverBackgroundColor: string;
    /** ホバー時の枠線色 */
    hoverBorderColor?: string;
    /** ホバー時のラベル文字色 */
    hoverLabelColor: string;
  };
};

type Emits = {
  /** クリック時のイベントハンドラ */
  click: [];
};

const emits = defineEmits<Emits>();

const props = withDefaults(defineProps<Props>(), {
  type: "primary",
  disabled: false,
  customColor: undefined,
});

const customBackgroundColor = computed<string>(
  () => props.customColor?.backgroundColor ?? "",
);

const customHoverBackgroundColor = computed<string>(
  () => props.customColor?.hoverBackgroundColor ?? "",
);

const customLabelColor = computed<string>(
  () => props.customColor?.labelColor ?? "",
);

const customHoverLabelColor = computed<string>(
  () => props.customColor?.hoverLabelColor ?? "",
);

const customBorderColor = computed<string>(() => {
  if (!props.customColor) {
    return "";
  } else if (!props.customColor.borderColor) {
    return props.customColor.backgroundColor;
  } else {
    return props.customColor.borderColor;
  }
});

const customHoverBorderColor = computed<string>(() => {
  if (!props.customColor) {
    return "";
  } else if (!props.customColor.hoverBorderColor) {
    return props.customColor.hoverBackgroundColor;
  } else {
    return props.customColor.hoverBorderColor;
  }
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
  font-weight: var(--weight-bold);
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

  &.custom {
    /* stylelint-disable value-keyword-case -- v-bindと連携するためStylelintをOFF */
    color: v-bind(customLabelColor);
    background-color: v-bind(customBackgroundColor);
    border-color: v-bind(customBorderColor);

    &:not(:disabled):hover {
      color: v-bind(customHoverLabelColor);
      background-color: v-bind(customHoverBackgroundColor);
      border-color: v-bind(customHoverBorderColor);
    }

    &:focus-visible {
      border-color: transparent;
      outline-offset: -1px;
    }

    &:disabled {
      color: var(--color-button-disabled);
      border-color: var(--color-button-disabled);
    }
    /* stylelint-enable value-keyword-case */
  }
}
</style>
