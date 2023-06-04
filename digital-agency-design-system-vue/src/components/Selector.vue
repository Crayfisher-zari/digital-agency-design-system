<script lang="ts" setup>
import { computed } from "vue";
import { getSerialNumber } from "../utils/getSerialNumber";

type Props = {
  /** 値（v-modelでも使える） */
  modelValue: string;
  /** インプットのラベルです */
  label: string;
  /** セレクターの選択肢です */
  options: { label: string; value: string }[];
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
  supportText: undefined,
  errorText: undefined,
  isRequired: false,
  isValid: true,
  onBlur: undefined,
  isDisabled: false,
});

type Emits = { (e: "update:modelValue", value: string): void };

const emits = defineEmits<Emits>();

// aria-describledby用のエラー文言のid名です
const errorIdName = `selector${getSerialNumber()}`;

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
const handleChange = (e: Event) => {
  const value = (e.target as HTMLInputElement).value;
  emits("update:modelValue", value);
};
</script>
<template>
  <div :class="stateClassName">
    <label class="selectorWrapper">
      <span class="labelWrapper"
        ><span class="label">{{ props.label }}</span
        ><span class="requiredText" :class="isRequired ? null : 'optional'">{{
          isRequired ? "必須" : "任意"
        }}</span></span
      >
      <select
        class="selector"
        :onBlur="onBlur"
        :onChange="handleChange"
        :required="props.isRequired"
        :aria-invalid="!isValid"
        :aria-describedby="errorIdName"
        :disabled="props.isDisabled"
      >
        <option value="" default>選択してください</option>
        <option v-for="option in options" :value="option.value">
          {{ option.label }}
        </option>
      </select>
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
<style scoped lang="scss">
@use "@/assets/style/utils/utils.scss" as *;

.selector {
  width: 100%;
  padding: 12px 16px;
  margin-top: 8px;
  font-size: pxToRem(16);
  color: var(--color-text-body);
  background-color: transparent;
  border: 1px solid var(--color-border-field);
  border-radius: 8px;
  appearance: none;
  background-image: url("@/assets/images/icon_selector.svg");
  background-repeat: no-repeat;
  background-position: right 23px top 50%;
  background-size: 8px;
}

.labelWrapper {
  display: flex;
  align-items: center;
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
  display: block;
  margin-top: 8px;
  font-size: pxToRem(12);
  line-height: 1.5;
  color: var(--color-text-alert);
}

// エラー時のスタイル
.isInvalid {
  .label {
    color: var(--color-text-alert);
  }

  .selector {
    border-color: var(--color-border-alert);
  }
}

// 非活性時のスタイル
.isDisabled{
  .label {
    color: var(--color-text-disabled);
  }

  .selector {
    background-color: var(--color-background-secondary);
    border-color: var(--color-border-disabled);
    color: var(--color-text-placeHolder);
  }
}
</style>
