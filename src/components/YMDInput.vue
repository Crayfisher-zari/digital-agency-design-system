<script setup lang="ts">
import { computed } from "vue";
import { getRandomString } from "../utils/getRandomString";

type Props = {
  /** 年の値（v-model:yearで使える） */
  year: string;
  /** 月の値（v-model:monthで使える） */
  month: string;
  /** 日の値（v-model:dayで使える） */
  day: string;
  /** 年月日のラベルです */
  label?: string;
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

const props = withDefaults(defineProps<Props>(), {
  label: undefined,
  supportText: undefined,
  errorText: undefined,
  isRequired: false,
  isValid: true,
  onBlur: undefined,
  isDisabled: false,
});

const modelYear = defineModel<string>("year");
const modelMonth = defineModel<string>("month");
const modelDay = defineModel<string>("day");

// aria-describledby用のエラー文言のid名です
const errorIdName = `ymdInput${getRandomString()}`;

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
  <fieldset
    :class="stateClassName"
    :aria-invalid="!isValid"
    :aria-describedby="errorIdName"
  >
    <legend v-if="props.label !== undefined">
      <span class="labelWrapper"
        ><span class="label">{{ props.label }}</span
        ><span class="requiredText" :class="isRequired ? null : 'optional'">{{
          isRequired ? "必須" : "任意"
        }}</span></span
      >
    </legend>
    <p class="supportText">{{ props.supportText }}</p>
    <div class="ymdWrapper">
      <label class="selectorWrapper">
        <input
          v-model="modelYear"
          type="text"
          class="input year"
          maxlength="4"
          :onBlur="props.onBlur"
        />
        <span class="unit">年</span>
      </label>
      <label class="selectorWrapper">
        <input
          v-model="modelMonth"
          type="text"
          class="input"
          pattern="[1-9]|1[0-2]"
          maxlength="2"
          title="1〜12の数字で入力してください"
          :onBlur="props.onBlur"
        />
        <span class="unit">月</span>
      </label>
      <label class="selectorWrapper">
        <input
          v-model="modelDay"
          type="text"
          class="input"
          pattern="[1-9]|[1-2][0-9]|3[0-1]"
          maxlength="2"
          title="1〜31の数字で入力してください"
          :onBlur="props.onBlur"
        />
        <span class="unit">日</span>
      </label>
    </div>
    <span
      v-if="props.errorText !== undefined"
      v-show="!props.isValid"
      :id="errorIdName"
      class="errorText"
      >{{ props.errorText }}</span
    >
  </fieldset>
</template>
<style lang="scss" scoped>
@use "@/assets/style/utils/utils.scss" as *;

fieldset {
  display: block;
  border: none;
}

.labelWrapper {
  display: flex;
  align-items: baseline;
  justify-content: flex-start;
}

.label {
  font-size: pxToRem(14);
}

.supportText {
  display: block;
  margin-top: 8px;
  font-size: pxToRem(12);
  line-height: 1.5;
  color: var(--color-text-description);
}

.requiredText {
  margin-left: 8px;
  font-size: pxToRem(12);
  color: var(--color-text-alert);

  &.optional {
    color: var(--color-text-description);
  }
}

.errorText {
  font-size: pxToRem(12);
  color: var(--color-text-alert);
}

.isError {
  .label {
    color: var(--color-text-alert);
  }
}

.ymdWrapper {
  display: flex;
  margin-top: 8px;
}

.selectorWrapper {
  display: flex;
  align-items: center;
  margin-right: 16px;

  &:last-child {
    margin-right: 0;
  }
}

.unit {
  margin-left: 16px;
  font-size: pxToRem(14);
}

.input {
  width: 66px;
  padding: 12px 16px;
  font-size: pxToRem(16);
  color: var(--color-text-body);
  appearance: none;
  background-color: transparent;
  border: 1px solid var(--color-border-field);
  border-radius: 8px;

  &.year {
    width: 95px;
  }

  &:invalid {
    border-color: var(--color-border-alert);
  }
}
</style>
