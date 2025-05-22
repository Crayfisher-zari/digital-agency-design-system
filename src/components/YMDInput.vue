<script setup lang="ts">
import { computed, useId } from "vue";

type Props = {
  /** 年の値（v-model:yearで使える） */
  year: string;
  /** 月の値（v-model:monthで使える） */
  month: string;
  /** 日の値（v-model:dayで使える） */
  day: string;
  /** サイズ */
  size?: "large" | "medium" | "small";
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
  size: "medium",
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
const errorIdName = `ymdInput${useId()}`;

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
    :class="[stateClassName, size]"
    :aria-invalid="!isValid"
    :aria-describedby="errorIdName"
  >
    <legend v-if="props.label !== undefined">
      <span class="labelWrapper"
        ><span class="label">{{ props.label }}</span
        ><span class="requiredText" :class="isRequired ? null : 'optional'">{{
          isRequired ? "※必須" : "任意"
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
          class="input month"
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
          class="input day"
          pattern="[1-9]|[1-2][0-9]|3[0-1]"
          maxlength="2"
          title="1〜31の数字で入力してください"
          :onBlur="props.onBlur"
        />
        <span class="unit">日</span>
      </label>
    </div>
    <p
      v-if="props.errorText !== undefined"
      v-show="!props.isValid"
      :id="errorIdName"
      class="errorText"
    >
      {{ props.errorText }}
    </p>
  </fieldset>
</template>
<style lang="scss" scoped>
@use "@/assets/style/utils/utils.scss" as *;

fieldset {
  display: block;
  border: none;
}

.large {
  .ymdWrapper {
    height: 56px;
  }
}

.medium {
  .ymdWrapper {
    height: 48px;
  }
}

.small {
  .ymdWrapper {
    height: 40px;
  }
}

.labelWrapper {
  display: flex;
  align-items: baseline;
  justify-content: flex-start;
}

.label {
  font-size: pxToRem(17);
  line-height: 1.7;
  letter-spacing: 0.02em;
}

.supportText {
  display: block;
  margin-top: 8px;
  font-size: pxToRem(16);
  line-height: 1.7;
  color: var(--color-text-description);
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

.errorText {
  margin-top: 8px;
  font-size: pxToRem(16);
  line-height: 1.7;
  color: var(--color-text-alert);
  letter-spacing: 0.02em;
}

.isError {
  .label {
    color: var(--color-text-alert);
  }
}

.ymdWrapper {
  display: flex;
  width: 223px;
  margin-top: 8px;
  background-color: var(--color-background-primary);
  border: 1px solid var(--color-border-field);
  border-radius: 8px;
}

.selectorWrapper {
  position: relative;
  display: flex;
  align-items: center;
  padding-right: 16px;
}

.unit {
  position: absolute;
  right: 4px;
  padding: 4px;
  font-size: pxToRem(16);
  color: var(--color-text-body);
  background-color: var(--color-background-primary);
}

.input {
  height: 50px;
  padding: 4px 14px 4px 4px;
  font-size: pxToRem(16);
  color: var(--color-text-body);
  text-align: right;
  appearance: none;
  background-color: transparent;
  border: none;
  border-radius: 8px;

  &.year {
    width: 64px;
  }

  &.month,
  &.day {
    width: 44px;
  }

  &:focus-visible {
    outline: 4px solid var(--color-text-body);
    outline-offset: 2px;
    box-shadow: 0 0 2px 2px var(--color-focus);
  }
}
</style>
