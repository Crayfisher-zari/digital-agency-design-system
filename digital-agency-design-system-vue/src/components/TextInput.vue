<script lang="ts" setup>
import { computed } from "vue";
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
    | "datetime-local"
    | "search"
    | "url"
    | "week";
  /** プレースホルダのテキストです */
  placeHolder: string;
  /** 内容を補足するサポートテキスト */
  supportText?: string;
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

type Emits = { (e: "update:modelValue", value: string): void };

const props = withDefaults(defineProps<Props>(), {
  type: "text",
  isRequired: false,
  isValid: true,
  placeHolder: "",
  isDisabled: false,
  supportText: undefined,
  errorText: undefined,
  onBlur: undefined,
});

const emits = defineEmits<Emits>();

// aria-describledby用のエラー文言のid名です
const errorIdName = `textInput${getSerialNumber()}`;

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

// 入力時のコールバック関数です。入力内容をemitして親に伝えられます。
const handleInput = (e: Event) => {
  emits("update:modelValue", (e.target as HTMLInputElement).value);
};
</script>
<template>
  <div :class="stateClassName">
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
        :onBlur="onBlur"
        :disabled="props.isDisabled"
      />
    </label>
    <span v-if="props.supportText !== undefined" class="supportText">{{
      props.supportText
    }}</span>
    <span
      v-if="props.errorText !== undefined"
      v-show="!props.isValid"
      :id="errorIdName"
      class="errorText"
      >{{ props.errorText }}</span
    >
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
  width: 100%;
  padding: 12px 16px;
  margin-top: 8px;
  font-size: 1rem;
  border: 1px solid var(--color-border-field);
  border-radius: 8px;

  &::placeholder {
    color: var(--color-text-placeHolder);
  }

  &:focus-visible {
    border-color: var(--color-border-focused) !important;
    outline: none;
    box-shadow: 0 0 0 1px var(--color-border-focused);
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

// エラー時のスタイル
.isInvalid {
  .label {
    color: var(--color-text-alert);
  }

  .textInput {
    border-color: var(--color-border-alert);
  }
}

// 非活性時のスタイル
.isDisabled {
  .label {
    color: var(--color-text-disabled);
  }

  .textInput {
    background-color: var(--color-background-secondary);
    border-color: var(--color-border-disabled);
  }
}
</style>
