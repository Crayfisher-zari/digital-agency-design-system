<script lang="ts" setup>
import { ref, computed } from "vue";
import PartsRadioButton from "./parts/PartsRadioButton.vue";

type Props = {
  /** デフォルト型かタイル型か */
  radioStyle?: "default" | "tile";
  /** 格納するリアクティブな値（v-modelでも使える） */
  modelValue: string | null;
  /** 選択肢固有の値です */
  radioValue: string;
  /** ボタンのラベルです */
  label: string;
  /** name属性の値です */
  name: string;
  /** サブテキスト。タイル型の場合に使用できます */
  subText?: string;
  /** 妥当性 */
  isValid?: boolean;
  /** ボタンが非活性状態か。未指定の場合はfalse */
  isDisabled?: boolean;
};

const model = defineModel<string | null>();

const props = withDefaults(defineProps<Props>(), {
  radioStyle: "default",
  isDisabled: false,
  isValid: true,
  subText: undefined,
});

const focused = ref<boolean>(false);

const checked = computed<boolean>(() => props.modelValue === props.radioValue);

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
  <label :class="[radioStyle, stateClassName, { checked }, { focused }]">
    <div class="radioButton">
      <PartsRadioButton
        v-model="model"
        :radioValue
        :name
        :isValid
        :isDisabled
        :isHiddenFocused="radioStyle === 'tile'"
      />
    </div>
    <span class="labelText"> {{ label }} </span>
    <span
      v-if="radioStyle === 'tile' && subText !== undefined"
      class="subText"
      >{{ subText }}</span
    >
    <!-- <span class="radioIcon"></span> -->
  </label>
</template>
<style lang="scss" scoped>
@use "@/assets/style/utils/utils.scss" as *;

label {
  position: relative;
  padding: 8px 0 8px 40px;
  font-size: pxToRem(16);
}

.radioButton {
  position: absolute;
  left: 4px;
}

.isInvalid {
  color: var(--color-text-alert);
}

.isDisabled {
  color: var(--color-text-disabled);
}

.subText {
  display: block;
  font-size: pxToRem(12);
  color: var(--color-text-description);
}

.default {
  display: flex;
  align-items: center;
}

.tile {
  display: grid;
  padding: 16px 0 16px 56px;
  background-color: var(--color-background-primary);
  border: 2px solid var(--color-border-field);
  border-radius: 8px;

  .radioButton {
    left: 20px;
    align-self: center;
  }

  &.isInvalid {
    border-color: var(--color-border-alert);
  }

  &.checked {
    border-color: var(--color-border-selected);
  }

  &.isDisabled {
    border-color: var(--color-border-disabled);

    .subText {
      color: var(--color-text-disabled);
    }
  }
}
</style>
