<script lang="ts" setup>
type Props = {
  /** 格納するリアクティブな値（v-modelでも使える） */
  modelValue: string | undefined;
  /** 選択肢固有の値です */
  radioValue: string;
  /** ボタンのラベルです */
  label: string;
  /** name属性の値です */
  name: string;
  /** ボタンが非活性状態か。未指定の場合はfalse */
  isDisabled?: boolean;
};

type Emits = { (e: "update:modelValue", value: string): void };

withDefaults(defineProps<Props>(), { isDisabled: false });
const emits = defineEmits<Emits>();
// 入力時のコールバック関数です。入力内容をemitして親に伝えられます。
const handleInput = (e: Event) => {
  emits("update:modelValue", (e.target as HTMLInputElement).value);
};
</script>
<template>
  <label :class="isDisabled ? 'isDisabled' : null">
    <input
      type="radio"
      class="sr-only"
      :value="radioValue"
      :onInput="handleInput"
      :name="name"
      :disabled="isDisabled"
    />{{ label }}
    <span class="radioIcon"></span>
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
.radioIcon {
  width: 19px;
  height: 19px;
  display: block;
  position: absolute;
  left: 4px;
  border: 2px solid var(--color-icon-label);
  border-radius: 50%;
  background-color: #fff;
  &:after {
    content: "";
    display: block;
    position: absolute;
    width: 9px;
    height: 9px;
    top: 3px;
    left: 3px;
    border-radius: 50%;
    background-color: transparent;
  }
}
input:checked ~ .radioIcon {
  border-color: var(--color-icon-active);
  &:after {
    background-color: var(--color-icon-active);
  }
}
</style>
