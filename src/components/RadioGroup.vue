<script lang="ts" setup>
import RadioButton from "./RadioButton.vue";

type Props = {
  /** 格納するリアクティブな値（v-modelでも使える） */
  modelValue: string | number | null;
  /** ラジオボタングループのラベル */
  groupLabel: string;
  /** デフォルトスタイルかタイルスタイルか */
  radioStyle?: "default" | "tile";
  /** ラジオボタンを紐付けるname属性 */
  name: string;
  /** 各選択肢の文字列 */
  labels: string[];
  /** 各選択肢の値 */
  values: (string | number)[];
  /** 各選択肢のサブテキスト（タイルスタイル用） */
  subTexts?: string[];
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
const model = defineModel<string | number | null>();

withDefaults(defineProps<Props>(), {
  radioStyle: "default",
  isRequired: false,
  isValid: true,
  isDisabled: false,
  subTexts: undefined,
  supportText: undefined,
  errorText: undefined,
  onBlur: undefined,
});
</script>
<template>
  <div class="radioGroup" :class="[{ isError: !isValid }, radioStyle]">
    <p class="label">
      {{ groupLabel }}
      <span v-if="isRequired" class="requiredText isRequired">必須</span>
      <span v-else class="requiredText">任意</span>
    </p>
    <p v-if="supportText !== undefined" class="supportText">
      {{ supportText }}
    </p>

    <div class="buttons">
      <RadioButton
        v-for="(label, index) in labels"
        :key="values[index]"
        v-model="model"
        :radioStyle="radioStyle"
        :label="label"
        :radioValue="values[index]"
        :subText="subTexts ? subTexts[index] : undefined"
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

.radioGroup.tile {
  .buttons {
    display: grid;
    grid-auto-rows: auto;
    grid-auto-flow: row;
    row-gap: 8px;
    margin: 8px 0;
  }
}

.label {
  display: flex;
  align-items: center;
  font-size: pxToRem(14);
  color: var(--color-text-body);
}

.requiredText {
  margin-left: 8px;
  font-size: pxToRem(12);
  color: var(--color-text-description);

  &.isRequired {
    color: var(--color-text-alert);
  }
}

.supportText {
  margin-top: 8px;
  font-size: pxToRem(12);
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
