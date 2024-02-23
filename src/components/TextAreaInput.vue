<script lang="ts" setup>
import { computed } from "vue";
import { getRandomString } from "../utils/getRandomString";
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
  /** 入力された文字数 */
  numberOfCharacters?: number;
  /** フォーカスアウト時のコールバック関数 */
  onBlur?: (() => void) | undefined;
  /** ボタンが非活性状態か。未指定の場合はfalse */
  isDisabled?: boolean;
};

const model = defineModel<string>();

const props = withDefaults(defineProps<Props>(), {
  isRequired: false,
  isValid: true,
  placeHolder: "",
  supportText: null,
  errorText: null,
  onBlur: undefined,
  isDisabled: false,
  maxCount: undefined,
  numberOfCharacters: 0,
});

// 文字数がオーバーしているか返します
const isOverCharacter = computed<boolean>(() => {
  if (props.maxCount == undefined || props.numberOfCharacters == undefined) {
    return false;
  }

  return props.maxCount < props.numberOfCharacters;
});

// aria-describledby用のエラー文言のid名です
const errorIdName = `textInput${getRandomString()}`;

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
  <div :class="stateClassName">
    <label class="textAreaInputWrapper">
      <span class="labelWrapper"
        ><span class="label">{{ props.label }}</span
        ><span v-show="props.isRequired" class="requiredText">必須</span></span
      >
      <span v-if="props.supportText !== null" class="supportText">{{
        props.supportText
      }}</span>
      <textarea
        v-model="model"
        class="textarea"
        :placeholder="props.placeHolder"
        :required="props.isRequired"
        :aria-invalid="!isValid"
        :aria-describedby="errorIdName"
        :onBlur="onBlur"
        :disabled="props.isDisabled"
      ></textarea>
    </label>
    <div class="supportInfo">
      <span v-if="props.errorText !== null">
        <span v-show="!props.isValid" :id="errorIdName" class="errorText">{{
          props.errorText
        }}</span>
      </span>
      <span
        v-if="maxCount !== undefined && numberOfCharacters !== undefined"
        class="wordCount"
        :class="{ over: isOverCharacter }"
      >
        <span class="currntWord">{{ numberOfCharacters }}</span
        ><span class="slash">/</span
        ><span class="maxWord">{{ maxCount }}</span></span
      >
    </div>
  </div>
</template>

<style lang="scss" scoped>
@use "@/assets/style/utils/utils.scss" as *;

.textInputWrapper {
  display: block;
}

.labelWrapper {
  display: flex;
  align-items: baseline;
  justify-content: flex-start;
}

.label {
  font-size: pxToRem(14);
}

.requiredText {
  margin-left: 8px;
  font-size: pxToRem(12);
  color: var(--color-text-alert);
}

.textarea {
  width: 100%;
  min-height: 120px;
  padding: 12px 16px;
  margin-top: 8px;
  font-size: pxToRem(16);
  border: 1px solid var(--color-border-field);
  border-radius: 8px;

  &::placeholder {
    color: var(--color-text-placeHolder);
  }

  &:focus-visible {
    border-color: var(--color-border-focused) !important;
    outline: none !important;
    box-shadow: 0 0 0 1px var(--color-border-focused);
  }
}

.supportInfo {
  display: grid;
  grid-auto-flow: column;
}

.supportText {
  display: block;
  margin-top: 8px;
  font-size: pxToRem(12);
  line-height: 1.5;
  color: var(--color-text-description);
}

.errorText {
  display: block;
  margin-top: 8px;
  font-size: pxToRem(12);
  line-height: 1.5;
  color: var(--color-text-alert);
}

.wordCount {
  display: flex;
  flex-shrink: 0;
  justify-self: end;
  margin-top: 8px;
  font-size: pxToRem(12);
  line-height: 1.5;
  color: var(--color-text-description);

  &.over {
    .currntWord {
      color: var(--color-text-alert);
    }
  }
}

.currntWord {
  margin-right: 4px;
}

.slash {
  margin-right: 4px;
}

// エラー時のスタイル
.isInvalid {
  .label {
    color: var(--color-text-alert);
  }

  .textarea {
    border-color: var(--color-border-alert);
    box-shadow: 0 0 0 1px var(--color-border-alert);
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
