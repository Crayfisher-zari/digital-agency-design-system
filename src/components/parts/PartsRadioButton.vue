<script lang="ts" setup>
import { computed } from "vue";

type Props = {
  /** 格納するリアクティブな値（v-modelでも使える） */
  modelValue: string | null;
  /** 選択肢固有の値です */
  radioValue: string;
  /** name属性の値です */
  name: string;
  /** 妥当性 */
  isValid?: boolean;
  /** ボタンが非活性状態か。未指定の場合はfalse */
  isDisabled?: boolean;
  /** フォーカススタイルを非表示にするか */
  isHiddenFocused?: boolean;
};
const model = defineModel<string | null>();

const props = withDefaults(defineProps<Props>(), {
  isDisabled: false,
  isValid: true,
  isHiddenFocused: false,
});

const stateClassName = computed<string | null>(() => {
  if (props.isDisabled) {
    return "isDisabled";
  }
  if (!props.isValid) {
    return "isInvalid";
  }
  return null;
});
</script>
<template>
  <div class="buttonWrapper">
    <input
      v-model="model"
      type="radio"
      class="sr-only"
      :class="[stateClassName, { isHiddenFocused: isHiddenFocused }]"
      :name
      :disabled="isDisabled"
      :value="radioValue"
    />
    <span class="radioIcon"></span>
  </div>
</template>
<style lang="scss" scoped>
.buttonWrapper {
  position: relative;
  width: 19px;
  height: 19px;
}

.radioIcon {
  position: absolute;
  top: 0;
  left: 0;
  display: block;
  width: 19px;
  height: 19px;
  background-color: #fff;
  border: 2px solid var(--color-icon-label);
  border-radius: 50%;

  &::after {
    position: absolute;
    top: 3px;
    left: 3px;
    display: block;
    width: 9px;
    height: 9px;
    content: "";
    background-color: transparent;
    border-radius: 50%;
  }
}

input:checked ~ .radioIcon {
  border-color: var(--color-icon-active);

  &::after {
    background-color: var(--color-icon-active);
  }
}

input:disabled ~ .radioIcon {
  border-color: var(--color-border-disabled);
}

input:disabled:checked ~ .radioIcon {
  &::after {
    background-color: var(--color-border-disabled);
  }
}

input:not(.isHiddenFocused):focus-visible ~ .radioIcon {
  outline: 2px solid var(--color-border-focused);
  outline-offset: 2px;
}

.isInvalid {
  color: var(--color-text-alert);

  .radioIcon {
    border-color: var(--color-border-alert);
  }
}
</style>
