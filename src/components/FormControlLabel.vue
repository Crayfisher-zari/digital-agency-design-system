<script setup lang="ts">
import { computed, defineProps } from "vue";

const props = withDefaults(
  defineProps<{
    /** サイズ */
    size?: "large" | "medium" | "small";
    /** インプットのラベルです */
    label: string;
    /** 内容を補足するサポートテキスト */
    supportText?: string;
    /** 必須かどうか。未指定の場合はfalse */
    isRequired?: boolean;
    /** 妥当性 */
    isValid?: boolean;
    /** ボタンが非活性状態か。未指定の場合はfalse。aria-disabledで実装されています */
    isDisabled?: boolean;
  }>(),
  {
    size: "medium",
    isRequired: false,
    isValid: true,
    isDisabled: false,
    supportText: undefined,
  },
);

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
  <span :class="[stateClassName, size]">
    <span class="labelWrapper"
      ><span class="label">{{ props.label }}</span
      ><span class="requiredText" :class="isRequired ? null : 'optional'">{{
        isRequired ? "※必須" : "任意"
      }}</span></span
    >
    <span v-if="props.supportText !== undefined" class="supportText">{{
      props.supportText
    }}</span>
  </span>
</template>
<style scoped lang="scss">
@use "@/assets/style/utils/utils.scss" as *;

.large {
  .label {
    font-size: pxToRem(18);
    line-height: 1.6;
  }
}

.small {
  .label {
    font-size: pxToRem(16);
    line-height: 1.7;
  }
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

.supportText {
  display: block;
  font-size: pxToRem(16);
  line-height: 1.7;
  color: var(--color-text-description);
  letter-spacing: 0.02em;
}

// エラー時のスタイル
.isInvalid {
  .label {
    color: var(--color-text-alert);
  }
}

// 非活性時のスタイル
.isDisabled {
  .label {
    color: var(--color-text-disabled);
  }
}
</style>
