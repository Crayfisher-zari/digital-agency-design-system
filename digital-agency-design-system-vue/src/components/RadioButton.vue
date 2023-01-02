<script lang="ts" setup>
type Props = {
  /** 格納するリアクティブな値（v-modelでも使える） */
  modelValue: string;
  /** 選択肢固有の値です */
  radioValue: string;
  /** ボタンのラベルです */
  label: string;
  /** name属性の値です */
  name: string;
};

type Emits = { (e: "update:modelValue", value: string): void };

const props = defineProps<Props>();
const emits = defineEmits<Emits>();
// 入力時のコールバック関数です。入力内容をemitして親に伝えられます。
const handleInput = (e: Event) => {
  emits("update:modelValue", (e.target as HTMLInputElement).value);
};
</script>
<template>
  <label>
    <input
      type="radio"
      class="sr-only"
      :value="radioValue"
      :onInput="handleInput"
      :name="name"
    />{{ label }}
    <span class="radioIcon"></span>
  </label>
</template>
<style lang="scss" scoped>
label {
  position: relative;
  display: flex;
  align-items: center;
  padding:8px 0 8px 40px;
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
  &:after{
    content: '';
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
input:checked ~ .radioIcon{
  border-color: var(--color-icon-active);
  &:after{
    background-color: var(--color-icon-active);
  }
}
</style>
