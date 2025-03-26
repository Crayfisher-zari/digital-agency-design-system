<script lang="ts" setup>
import { CustomColor, useButtonColor } from "../composables/useButtonColor";

type Props = {
  /** ボタンのテキストです */
  label: string;
  /** ボタンのタイプです。未指定の場合はprimaryになります */
  type?: "primary" | "secondary" | "tertiary" | "custom";
  /** ボタンのサイズです。未指定の場合はmediumになります */
  size?: "large" | "medium" | "small" | "x-small";
  /** 非活性かどうか？ */
  disabled?: boolean;
  /** カスタムカラー。個別で指定したい場合 */
  customColor?: CustomColor;
};

type Emits = {
  /** クリック時のイベントハンドラ */
  click: [];
};

const emits = defineEmits<Emits>();

const props = withDefaults(defineProps<Props>(), {
  type: "primary",
  size: "medium",
  disabled: false,
  customColor: undefined,
});

const {
  customBackgroundColor,
  customHoverBackgroundColor,
  customLabelColor,
  customHoverLabelColor,
  customBorderColor,
  customHoverBorderColor,
  customActiveBackgroundColor,
  customActiveLabelColor,
  customActiveBorderColor,
} = useButtonColor(props.customColor);
</script>
<template>
  <button
    class="button"
    :class="[type, size, { disabled: disabled }]"
    :disabled="disabled"
    @click="emits('click')"
  >
    <span class="labelText">{{ label }}</span>
  </button>
</template>

<style lang="scss" scoped>
@use "@/assets/style/utils/utils.scss" as *;
@use "./styles/basicButtonStyle";

.button {
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

    &:not(:disabled):active {
      color: v-bind(customActiveLabelColor);
      background-color: v-bind(customActiveBackgroundColor);
      border-color: v-bind(customActiveBorderColor);
    }

    &:disabled {
      color: var(--color-button-disabled);
      border-color: var(--color-button-disabled);
    }
    /* stylelint-enable value-keyword-case */
  }
}
</style>
