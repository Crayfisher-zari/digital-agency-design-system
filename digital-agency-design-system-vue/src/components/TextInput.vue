<script lang="ts" setup>
type Props = {
  /** 値（v-modelでも使える） */
  modelValue: string;
  /** インプットのラベルです */
  label: string;
  /** テキスト入力のタイプです。未指定の場合はtextになります */
  type:
    | "text"
    | "email"
    | "tel"
    | "number"
    | "password"
    | "date"
    | "datetime-local";
  /** プレースホルダのテキストです */
  placeHolder?: string;
  /** 内容を補足するサポートテキスト */
  supportText?: string | null;
  /** エラー時に表示するテキスト */
  errorText?: string | null;
  /** 必須かどうか。未指定の場合はfalse */
  isRequired?: boolean;
  /** 妥当性 */
  isValid?: boolean;
  /** フォーカスアウト時のコールバック関数 */
  onBlur?: (() => void) | null;
};

type Emits = { (e: "update:modelValue", value: string): void };

const props = withDefaults(defineProps<Props>(), {
  type: "text",
  isRequired: false,
  isValid: true,
  placeHolder: "",
  supportText: null,
  errorText: null,
  onBlur: null,
});

const emits = defineEmits<Emits>();

const handleInput = (e: Event) => {
  console.log((e.target as HTMLInputElement).value);
  emits("update:modelValue", (e.target as HTMLInputElement).value);
};
</script>
<template>
  <label class="textInputWrapper" :class="!props.isValid ? 'isInvalid' : null">
    <span class="labelWrapper"
      ><span class="label">{{ props.label }}</span
      ><span v-show="props.isRequired" class="requiredText">必須</span></span
    >
    <input
      class="textInput"
      :value="props.modelValue"
      :type="props.type"
      :placeholder="props.placeHolder"
      :onInput="handleInput"
    />
    <span v-if="props.supportText !== null" class="supportText">{{
      props.supportText
    }}</span>
    <span v-if="props.errorText !== null">
      <span v-show="!props.isValid" class="errorText">{{
        props.errorText
      }}</span>
    </span>
  </label>
</template>

<style lang="scss" scoped>
.textInputWrapper {
  display: block;
}

.labelWrapper {
  display: flex;
  align-items: center;
  justify-content: flex-start;
}

.label {
  font-size: 0.875rem;
}

.requiredText {
  margin-left: 8px;
  font-size: 0.75rem;
  color: var(--color-text-alert);
}

.textInput {
  padding: 12px 16px;
  margin-top: 8px;
  border: 1px solid var(--color-border-field);
  border-radius: 8px;

  &:invalid {
    border-color: var(--color-status-alert);
  }
}

.supportText {
  display: block;
  margin-top: 8px;
  font-size: 0.75rem;
  line-height: 1.5;
  color: var(--color-text-description);
}

.errorText {
  display: block;
  margin-top: 8px;
  font-size: 0.75rem;
  line-height: 1.5;
  color: var(--color-text-alert);
}
</style>
