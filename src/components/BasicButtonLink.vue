<script lang="ts" setup>
import { CustomColor, useButtonColor } from "../composables/useButtonColor";
import { LinkTag, useLink } from "../composables/useLinkComponent";

type Props = {
  /** ボタンのテキストです */
  label: string;
  /** リンク先 */
  to: string;
  /** リンクタグの種類 */
  linkTag?: LinkTag;
  /** ボタンのタイプです。未指定の場合はprimaryになります */
  type?: "primary" | "secondary" | "tertiary" | "custom";
  /** ボタンのサイズです。未指定の場合はmediumになります */
  size?: "large" | "medium" | "small" | "x-small";
  /** 非活性かどうか？ */
  disabled?: boolean;
  /** カスタムカラー。個別で指定したい場合 */
  customColor?: CustomColor;
};

const props = withDefaults(defineProps<Props>(), {
  type: "primary",
  size: "medium",
  linkTag: "auto",
  disabled: false,
  customColor: undefined,
});

const { LinkComponent } = useLink({ tag: props.linkTag });

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
  <LinkComponent
    class="button"
    :class="[type, size, { disabled: disabled }]"
    :to="to"
  >
    <span class="labelText">{{ label }}</span>
  </LinkComponent>
</template>

<style lang="scss" scoped>
@use "@/assets/style/utils/utils.scss" as *;
@use "./styles/basicButtonStyle.scss";

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
