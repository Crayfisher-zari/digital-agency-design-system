<script lang="ts" setup>
import { ref, watch } from "vue";
import RadioButton from "./RadioButton.vue";

type Props = {
  /** ラジオボタングループのラベル */
  groupLabel: string;
  /** ラジオボタンを紐付けるname属性 */
  name: string;
  /** 各選択肢の文字列 */
  labels: string[];
  /** 各選択肢の値 */
  values: string[];
  /** 内容を補足するヘルプテキスト */
  helpText?: string;
  /** エラー時に表示するテキスト */
  errorText?: string;
  /** 必須かどうか。未指定の場合はfalse */
  isRequired?: boolean;
  /** 妥当性 */
  isValid?: boolean;
  /** フォーカスアウト時のコールバック関数 */
  onBlur?: () => void;
  /** ボタンが非活性状態か。未指定の場合はfalse */
  isDisabled?: boolean;
};
type Emits = { (e: "update:modelValue", value: string | undefined): void };

defineProps<Props>();
const emits = defineEmits<Emits>();

const selected = ref<string>();
// 入力時のコールバック関数です。入力内容をemitして親に伝えられます。
const handleInput = (v: string | undefined) => {
  emits("update:modelValue", v);
};
watch(selected, (value) => {
  handleInput(value);
});
</script>
<template>
  <div class="radioGroup">
    <p class="label">{{ groupLabel }}
     <span v-if="isRequired" class="requiredText isRequired">必須</span>
     <span v-else class="requiredText">任意</span>
    </p>
    <div class="buttons">
      <RadioButton
        v-for="(label, index) in labels"
        v-model="selected"
        :label="label"
        :radioValue="values[index]"
        :name="name"
      />
    </div>
    <p class="helpText" v-if="helpText !== undefined">{{ helpText }}</p>
    <p class="errorText" v-if="errorText !== undefined">{{ errorText }}</p>
  </div>
</template>
<style lang="scss" scoped>
</style>
