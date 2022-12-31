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
</style>
