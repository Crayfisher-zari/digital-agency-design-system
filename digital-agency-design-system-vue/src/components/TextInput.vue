<script lang="ts" setup>
import { getSerialNumber } from "../utils/getSerialNumber";

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

const errorIdName = `textInput${getSerialNumber()}`;

const emits = defineEmits<Emits>();

const handleInput = (e: Event) => {
  emits("update:modelValue", (e.target as HTMLInputElement).value);
};
</script>
<template>
  <div :class="!props.isValid ? 'isInvalid' : null">
    <label class="textInputWrapper">
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
        :required="props.isRequired"
        :aria-invalid="!isValid"
        :aria-describedby="errorIdName"
      />
    </label>
    <span v-if="props.supportText !== null" class="supportText">{{
      props.supportText
    }}</span>
    <span v-if="props.errorText !== null">
      <span v-show="!props.isValid" :id="errorIdName" class="errorText">{{
        props.errorText
      }}</span>
    </span>
  </div>
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

  &:focus-visible {
    border-color: var(--color-border-focused) !important;
    outline: 1px solid var(--color-border-focused);
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

.isInvalid {
  .label {
    color: var(--color-text-alert);
  }

  .textInput {
    border-color: var(--color-border-alert);
  }
}
</style>
