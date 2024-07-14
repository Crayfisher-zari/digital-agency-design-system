<script lang="ts" setup>
import Checkbox from "./Checkbox.vue";

type Props = {
  /** 格納するリアクティブな値（v-modelでも使える） */
  modelValue: [] | string[];
  /** チェックボタングループのラベル */
  groupLabel: string;
  /** チェックボタンを紐付けるname属性 */
  name: string;
  /** 各選択肢の文字列 */
  labels: string[];
  /** 各選択肢の値 */
  values: string[];
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

withDefaults(defineProps<Props>(), {
  isRequired: false,
  isValid: true,
  isDisabled: false,
  supportText: undefined,
  errorText: undefined,
  onBlur: undefined,
});

// 選択された値
const model = defineModel<[] | string[]>();
</script>
<template>
  <div class="checkboxGroup" :class="{ isError: !isValid }">
    <p class="label">
      {{ groupLabel }}
      <span v-if="isRequired" class="requiredText isRequired">必須</span>
      <span v-else class="requiredText">任意</span>
    </p>
    <p v-if="supportText !== undefined" class="supportText">
      {{ supportText }}
    </p>
    <div class="buttons">
      <Checkbox
        v-for="(label, index) in labels"
        :key="values[index]"
        v-model="model"
        :label="label"
        :value="values[index]"
        :name="name"
        :isValid="isValid"
        :isDisabled="isDisabled"
      />
    </div>

    <p v-if="errorText !== undefined" v-show="!isValid" class="errorText">
      {{ errorText }}
    </p>
  </div>
</template>
<style lang="scss" scoped>
@use "@/assets/style/utils/utils.scss" as *;

.label {
  display: flex;
  align-items: center;
  font-size: pxToRem(16);
  font-weight: var(--weight-bold);
  color: var(--color-text-body);
}

.requiredText {
  margin-left: 8px;
  font-size: pxToRem(16);
  font-weight: var(--weight-normal);
  color: var(--color-text-description);

  &.isRequired {
    color: var(--color-text-alert);
  }
}

.supportText {
  margin-top: 8px;
  font-size: pxToRem(16);
  color: var(--color-text-description);
}

.buttons {
  margin-top: 4px;
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
</style>
