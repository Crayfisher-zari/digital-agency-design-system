<script lang="ts" setup>
import { ref, watch } from "vue";
import Checkbox from "./Checkbox.vue";

type Props = {
  /** 格納するリアクティブな値（v-modelでも使える） */
  modelValue: [] | null;
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
type Emits = { (e: "update:modelValue", value: string | null): void };

const props = withDefaults(defineProps<Props>(), {
  isRequired: false,
  isValid: true,
  isDisabled: false,
});
const emits = defineEmits<Emits>();

// 選択された値
const modelValue = ref<[] | null>(props.modelValue);

// 入力時のコールバック関数です。入力内容をemitして親に伝えられます。
const handleInput = (v: string | null) => {
  emits("update:modelValue", v);
};

// 値の変更を監視し、変更があったら親へemitします
watch(modelValue, (value) => {
  handleInput(value);
});
</script>
<template>
  <div class="checkboxGroup" :class="`${!isValid ? 'isError' : ''}`">
    <p class="label">
      {{ groupLabel }}
      <span v-if="isRequired" class="requiredText isRequired">必須</span>
      <span v-else class="requiredText">任意</span>
    </p>
    <div class="buttons">
      <Checkbox
        v-for="(label, index) in labels"
        v-model="modelValue"
        :label="label"
        :checkValue="values[index]"
        :name="name"
        :isValid="isValid"
        :isDisabled="isDisabled"
      />
    </div>
    <p class="helpText" v-if="helpText !== undefined">{{ helpText }}</p>
    <p class="errorText" v-if="errorText !== undefined" v-show="!isValid">
      {{ errorText }}
    </p>
  </div>
</template>
<style lang="scss" scoped>
.label {
  display: flex;
  font-size: 0.875rem;
  color: var(--color-text-body);
  align-items: center;
}

.requiredText {
  font-size: 0.75rem;
  color: var(--color-text-description);
  margin-left: 8px;
  &.isRequired {
    color: var(--color-text-alert);
  }
}
.helpText {
  font-size: 0.75rem;
  color: var(--color-text-description);
}

.errorText {
  font-size: 0.75rem;
  color: var(--color-text-alert);
}

.isError {
  .label {
    color: var(--color-text-alert);
  }
}
</style>
