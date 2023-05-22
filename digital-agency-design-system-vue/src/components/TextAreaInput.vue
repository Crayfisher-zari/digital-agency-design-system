<script lang="ts" setup>
import { computed } from "vue";
import { getSerialNumber } from "../utils/getSerialNumber";
type Props = {
  /** 値（v-modelでも使える） */
  modelValue: string;
  /** インプットのラベルです */
  label: string;
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
  /** 最大文字数 */
  maxCount?: number;
  /** フォーカスアウト時のコールバック関数 */
  onBlur?: (() => void) | undefined;
  /** ボタンが非活性状態か。未指定の場合はfalse */
  isDisabled?: boolean;
};

type Emits = { (e: "update:modelValue", value: string): void };

const props = withDefaults(defineProps<Props>(), {
  isRequired: false,
  isValid: true,
  placeHolder: "",
  supportText: null,
  errorText: null,
  onBlur: undefined,
  isDisabled: false,
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
    <label class="textAreaInputWrapper">
      <span class="labelWrapper"
        ><span class="label">{{ props.label }}</span
        ><span v-show="props.isRequired" class="requiredText">必須</span></span
      >
      <textarea
        class="textarea"
        :value="props.modelValue"
        :placeholder="props.placeHolder"
        :onInput="handleInput"
        :required="props.isRequired"
        :aria-invalid="!isValid"
        :aria-describedby="errorIdName"
        :onBlur="onBlur"
        :disabled="props.isDisabled"
      ></textarea>
    </label>
    <div class="supportInfo">
      <span v-if="props.supportText !== null" class="supportText">{{
        props.supportText
      }}</span>
      <span v-if="props.errorText !== null">
        <span v-show="!props.isValid" :id="errorIdName" class="errorText">{{
          props.errorText
        }}</span>
      </span>
      <span class="wordCount">
        <span class="currntWord">280</span><span class="slash">/</span
        ><span class="maxWord">256</span></span
      >
    </div>
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

.textarea {
  width: 100%;
  min-height: 120px;
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

.supportInfo{
  display: grid;
  grid-auto-flow: column;

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

.wordCount{
  display: block;
  justify-self: end;
  margin-top: 8px;
  flex-shrink: 0;
  font-size: 0.75rem;
  line-height: 1.5;
  color: var(--color-text-description);
}

// エラー時のスタイル
.isInvalid {
  .label {
    color: var(--color-text-alert);
  }

  .textarea {
    border-color: var(--color-border-alert);
  }
}

// 非活性時のスタイル
.isDisabled {
  .label {
    color: var(--color-text-disabled);
  }

  .textarea {
    background-color: var(--color-background-secondary);
    border-color: var(--color-border-disabled);
  }
}
</style>
