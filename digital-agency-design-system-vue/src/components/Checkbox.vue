<script lang="ts" setup>
import { computed } from "vue";

type Props = {
  /** 格納するリアクティブな値（v-modelでも使える） */
  modelValue: string | null;
  /** 選択肢固有の値です */
  checkValue: string;
  /** ボタンのラベルです */
  label: string;
  /** name属性の値です */
  name: string;
  /** 妥当性 */
  isValid?: boolean;
  /** ボタンが非活性状態か。未指定の場合はfalse */
  isDisabled?: boolean;
};

type Emits = { (e: "update:modelValue", value: string): void };

const props = withDefaults(defineProps<Props>(), {
  isDisabled: false,
  isValid: true,
});
const emits = defineEmits<Emits>();

// const checked = computed<boolean>(() => props.modelValue === props.checkValue);

// 入力時のコールバック関数です。入力内容をemitして親に伝えられます。
const handleInput = (e: Event) => {
    console.log(props.modelValue)

  emits("update:modelValue", (e.target as HTMLInputElement).value);
};

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
  <label
    :class="`${stateClassName ?? ''} `"
  >
    <input
      type="checkbox"
      class="sr-only"
      :value="checkValue"
      :onChange="handleInput"
      :name="name"
      :disabled="isDisabled"
      :checked="checked"
    />{{ label }}
    <span class="checkIcon"></span>
  </label>
</template>
<style lang="scss" scoped>
label {
  position: relative;
  display: flex;
  align-items: center;
  padding: 8px 0 8px 40px;
  font-size: 1rem;
}

.checkIcon {
  width: 19px;
  height: 19px;
  display: block;
  position: absolute;
  left: 4px;
  border: 2px solid var(--color-icon-label);
  border-radius: 3px;
  background-color: #fff;
  &:after {
    content: "";
    display: block;
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    background-image: url("@/assets/images/icon_check.svg");
    background-size: 18px 18px;
    background-position: center center;
  }
}
input:checked ~ .checkIcon {
  border-color: var(--color-icon-active);
  background-color: var(--color-icon-active);
  &:after {
    background-color: var(--color-icon-active);
  }
}

input:disabled ~ .checkIcon {
  border-color: var(--color-border-disabled);
}

input:disabled:checked ~ .checkIcon {
  &:after {
    background-color: var(--color-border-disabled);
  }
}
.isInvalid {
  color: var(--color-text-alert);
  .checkIcon {
    border-color: var(--color-border-alert);
  }
}

.isDisabled {
  color: var(--color-text-disabled);
}

</style>
