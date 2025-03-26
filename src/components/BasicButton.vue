<script lang="ts" setup>
import { CustomColor, useButtonColor } from "../composables/useButtonColor";

type Props = {
  /** ボタンのテキストです */
  label: string;
  /** ボタンのタイプです。未指定の場合はprimaryになります */
  type?: "primary" | "secondary" | "tertiary" | "custom";
  /** ボタンのサイズです。未指定の場合はmediumになります */
  size?: "large" | "medium" | "small" | "x-small";
  /** 非活性かどうか？実装としてはdisabled属性ではなくaria-disabledになっています。 */
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

const handleClick = () => {
  // ボタンが非活性の場合はクリックイベントを発火しない
  if (!props.disabled) {
    emits("click");
  }
};
</script>
<template>
  <button
    class="button"
    :class="[type, size, { disabled: disabled }]"
    :aria-disabled="disabled"
    @click="handleClick"
  >
    <span class="labelText">
      <span v-if="$slots.start" class="iconWrapper">
        <slot name="start"></slot>
      </span>
      <span class="Oln-16B-100"> {{ label }} </span>
      <span v-if="$slots.end" class="iconWrapper">
        <slot name="end"></slot>
      </span>
    </span>
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
