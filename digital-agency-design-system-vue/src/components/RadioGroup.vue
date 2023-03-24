<script lang="ts" setup>
import { ref, watch } from "vue";
import RadioButton from "./RadioButton.vue";

type Props = {
  /** 格納するリアクティブな値（v-modelでも使える） */
  modelValue: string | null;
  /** ラジオボタングループのラベル */
  groupLabel: string;
  /** デフォルトスタイルかタイルスタイルか */
  radioStyle?: "default" | "tile";
  /** ラジオボタンを紐付けるname属性 */
  name: string;
  /** 各選択肢の文字列 */
  labels: string[];
  /** 各選択肢の値 */
  values: string[];
  /** 各選択肢のサブテキスト（タイルスタイル用） */
  subTexts?: string[];
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
  radioStyle: "default",
  isRequired: false,
  isValid: true,
  isDisabled: false,
  subTexts: undefined,
  helpText: undefined,
  errorText: undefined,
  onBlur: undefined,
});
const emits = defineEmits<Emits>();

// 選択された値
const modelValue = ref<string | null>(props.modelValue);

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
  <div class="radioGroup" :class="[{ isError: !isValid },radioStyle]">
    <p class="label">
      {{ groupLabel }}
      <span v-if="isRequired" class="requiredText isRequired">必須</span>
      <span v-else class="requiredText">任意</span>
    </p>
    <div class="buttons">
      <RadioButton
        v-for="(label, index) in labels"
        :key="values[index]"
        v-model="modelValue"
        :radioStyle="radioStyle"
        :label="label"
        :radioValue="values[index]"
        :subText="subTexts ? subTexts[index] : undefined"
        :name="name"
        :isValid="isValid"
        :isDisabled="isDisabled"
      />
    </div>
    <p v-if="helpText !== undefined" class="helpText">{{ helpText }}</p>
    <p v-if="errorText !== undefined" v-show="!isValid" class="errorText">
      {{ errorText }}
    </p>
  </div>
</template>
<style lang="scss" scoped>
.radioGroup.tile {
  .buttons {
    display: grid;
    grid-auto-rows: auto;
    grid-auto-flow: row;
    row-gap: 8px;
    margin: 8px 0;
  }
}

.label {
  display: flex;
  align-items: center;
  font-size: 0.875rem;
  color: var(--color-text-body);
}

.requiredText {
  margin-left: 8px;
  font-size: 0.75rem;
  color: var(--color-text-description);

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
