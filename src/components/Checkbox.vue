<script lang="ts" setup generic="T">
import { computed } from "vue";
import PartsCheckbox from "./parts/PartsCheckbox.vue";

type Props = {
  /** v-modelの型です */
  modelValue: T | T[];
  /** 選択肢固有の値です */
  value: T | undefined;
  /** ボタンのラベルです */
  label: string;
  /** name属性の値です */
  name?: string;
  /** 妥当性 */
  isValid?: boolean;
  /** ボタンが非活性状態か。未指定の場合はfalse */
  isDisabled?: boolean;
};

const model = defineModel<T | T[] | undefined>();

const props = withDefaults(defineProps<Props>(), {
  isDisabled: false,
  isValid: true,
  name: undefined,
});

// 状態に応じたクラス名を返します
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
  <label :class="`${stateClassName ?? ''} `">
    <PartsCheckbox
      v-model="model"
      :value="props.value"
      :name="name"
      :isDisabled="isDisabled"
      :isValid="isValid"
    />{{ label }}
  </label>
</template>
<style lang="scss" scoped>
@use "@/assets/style/utils/utils.scss" as *;

label {
  position: relative;
  display: flex;
  align-items: center;
  padding: 8px 0 8px 40px;
  font-size: pxToRem(16);
}

// .checkIcon {
//   position: absolute;
//   left: 4px;
//   display: block;
//   width: 19px;
//   height: 19px;
//   background-color: #fff;
//   border: 2px solid var(--color-icon-label);
//   border-radius: 3px;

//   &::after {
//     position: absolute;
//     top: 0;
//     left: 0;
//     display: block;
//     width: 100%;
//     height: 100%;
//     content: "";
//     background-image: url("@/assets/images/icon_check.svg");
//     background-position: center center;
//     background-size: 18px 18px;
//   }
// }

// input:checked ~ .checkIcon {
//   background-color: var(--color-icon-active);
//   border-color: var(--color-icon-active);

//   &::after {
//     background-color: var(--color-icon-active);
//   }
// }

// input:focus-visible ~ .checkIcon {
//   outline: 2px solid var(--color-border-focused);
//   outline-offset: 2px;
// }

// input:disabled ~ .checkIcon {
//   border-color: var(--color-border-disabled);
// }

// input:disabled:checked ~ .checkIcon {
//   &::after {
//     background-color: var(--color-border-disabled);
//   }
// }
.isInvalid {
  color: var(--color-text-alert);
}

.isDisabled {
  color: var(--color-text-disabled);
}
</style>
