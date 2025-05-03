<script lang="ts" setup>
import { computed, useId } from "vue";
import { disabledEventHandler } from "./common/disabledEventHandler";

type Props = {
  /** 値（v-modelでも使える） */
  modelValue: string;
  /** サイズ */
  size?: "large" | "medium" | "small";
  /** インプットのラベルです */
  label: string;
  /** テキスト入力のタイプです。未指定の場合はtextになります */
  type?:
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
  placeHolder?: string;
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
  /** ボタンが非活性状態か。未指定の場合はfalse。aria-disabledで実装されています */
  isDisabled?: boolean;
};

const props = withDefaults(defineProps<Props>(), {
  type: "text",
  size: "medium",
  isRequired: false,
  isValid: true,
  placeHolder: "",
  isDisabled: false,
  supportText: undefined,
  errorText: undefined,
  onBlur: undefined,
});

const model = defineModel<string>();

// aria-labelledby用のid名です
const labelIdName = `textInputLabel${useId()}`;

// aria-describledby用のエラー文言のid名です
const errorIdName = `textInputError${useId()}`;

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
</script>
<template>
  <div :class="[stateClassName, size]">
    <label class="textInputWrapper">
      <span class="labelWrapper"
        ><span class="label">{{ props.label }}</span
        ><span class="requiredText" :class="isRequired ? null : 'optional'">{{
          isRequired ? "※必須" : "任意"
        }}</span></span
      >
      <span v-if="props.supportText !== undefined" class="supportText">{{
        props.supportText
      }}</span>
      <input
        v-model="model"
        class="textInput"
        :type="props.type"
        :placeholder="props.placeHolder"
        :required="props.isRequired"
        :aria-invalid="!isValid"
        :aria-describedby="isValid ? labelIdName : errorIdName"
        :onBlur="onBlur"
        :aria-disabled="props.isDisabled"
        :readonly="props.isDisabled"
        @click="props.isDisabled ? disabledEventHandler : undefined"
        @keydown="props.isDisabled ? disabledEventHandler : undefined"
      />
    </label>

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
@use "@/assets/style/utils/utils.scss" as *;

.large {
  .textInput {
    padding: 13px 16px;
  }
}

.small {
  .textInput {
    padding: 6px 16px;
    border-radius: 4px;
  }
}

.textInputWrapper {
  display: flex;
  flex-direction: column;
  row-gap: 8px;
}

.labelWrapper {
  display: flex;
  align-items: baseline;
  justify-content: flex-start;
}

.label {
  font-size: pxToRem(17);
  font-weight: var(--weight-bold);
  line-height: 1.7;
  letter-spacing: 0.02em;
}

.requiredText {
  margin-left: 8px;
  font-size: pxToRem(16);
  color: var(--color-text-alert);
  letter-spacing: 0.02em;

  &.optional {
    color: var(--color-text-description);
  }
}

.textInput {
  padding: 10px 16px;
  font-size: pxToRem(16);
  line-height: 1.7;
  letter-spacing: 0.02em;
  border: 1px solid var(--color-border-field);
  border-radius: 8px;

  &::placeholder {
    color: var(--color-text-placeHolder);
  }

  &:focus-visible {
    outline: 4px solid var(--color-text-body);
    outline-offset: 2px;
    box-shadow: 0 0 2px 2px var(--color-focus);
  }
}

.supportText {
  display: block;
  font-size: pxToRem(16);
  line-height: 1.7;
  color: var(--color-text-description);
  letter-spacing: 0.02em;
}

.errorText {
  display: block;
  margin-top: 8px;
  font-size: pxToRem(16);
  line-height: 1.7;
  color: var(--color-text-alert);
  letter-spacing: 0.02em;
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
    pointer-events: none;
    background-color: var(--color-background-secondary);
    border-color: var(--color-border-disabled);
  }
}
</style>
