<script lang="ts" setup>
type Props = {
  /** ラベル */
  label?: string;
  /** リストタイトル */
  title?: string;
  /** クリック時の処理 */
  onClick: () => void;
  /** ボタンが非活性状態か。未指定の場合はfalse */
  isDisabled?: boolean;
  /** サポートテキスト */
  supportText?: string;
  /** サブラベル */
  subLabel?: string;
};
withDefaults(defineProps<Props>(), {
  label: undefined,
  title: undefined,
  supportText: undefined,
  subLabel: undefined,
});
</script>
<template>
  <div class="resourceListWrapper">
    <button class="resourceList button" type="button">
      <div v-if="$slots.frontIcon">
        <slot name="frontIcon"></slot>
      </div>
      <div>
        <p v-if="label" class="label">{{ label }}</p>
        <p v-if="title" class="title">{{ title }}</p>
        <p v-if="supportText" class="supportText">{{ supportText }}</p>
      </div>
      <div v-if="subLabel" class="subLabelWrapper">
        <p class="subLabel">{{ subLabel }}</p>
      </div>
      <div v-if="$slots.endIcon">
        <slot name="endIcon"></slot>
      </div>
    </button>
  </div>
</template>
<style lang="scss" scoped>
@use "@/assets/style/utils/utils.scss" as *;
@use "./styles/resourceListStyle.scss";

.resourceList {
  &.button {
    cursor: pointer;

    &:hover {
      background-color: var(--color-grey-50);
    }
  }
}
</style>
