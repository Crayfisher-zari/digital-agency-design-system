<script lang="ts" setup>
import FormControlLabel from "./FormControlLabel.vue";
import RadioButton from "./RadioButton.vue";

type Props = {
  /** 格納するリアクティブな値（v-modelでも使える） */
  modelValue: string | null;
  /** サイズ */
  size?: "small" | "medium" | "large";
  /** ラジオボタングループのラベル */
  groupLabel: string;
  /** デフォルトスタイルかタイルスタイルか */
  radioStyle?: "default" | "tile";
  /** ラジオボタンを紐付けるname属性 */
  name: string;
  /** 各選択肢の文字列 */
  labels: string[];
  /** 各選択肢の値 */
  values: string[];
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
const model = defineModel<string | null>();

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
    <FormControlLabel
      :size="size"
      :label="groupLabel"
      :supportText="supportText"
      :isRequired="isRequired"
      :isValid="isValid"
      :isDisabled="isDisabled"
    />
    <div class="buttons">
      <RadioButton
        v-for="(label, index) in labels"
        :key="values[index]"
        v-model="model"
        :radioValue="values[index]"
        :radioStyle="radioStyle"
        :label="label"
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

.buttons {
  margin-top: 4px;
}

.errorText {
  font-size: pxToRem(12);
  color: var(--color-text-alert);
}
</style>
