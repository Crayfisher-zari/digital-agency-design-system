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
const handleChangeCheck = (value: boolean) => {
  console.log(value);
};
</script>
<template>
  <label :class="`${stateClassName ?? ''} `">
    <div class="checkboxArea">
      <PartsCheckbox
        v-model="model"
        :value="props.value"
        :name
        :isDisabled
        :isValid
        @changeCheck="handleChangeCheck"
      />
    </div>
    {{ label }}
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

.checkboxArea {
  position: absolute;
  left: 4px;
  width: 19px;
  height: 19px;
}

.isInvalid {
  color: var(--color-text-alert);
}

.isDisabled {
  color: var(--color-text-disabled);
}
</style>
