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
    <input type="radio" :value="radioValue" :onInput="handleInput" :name="name" />{{
      label
    }}
  </label>
</template>
<style lang="scss" scoped></style>
