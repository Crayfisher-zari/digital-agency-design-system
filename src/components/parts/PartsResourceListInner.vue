<script setup lang="ts">
type Props = {
  /** ラベル */
  label?: string;
  /** リストタイトル */
  title?: string;
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
  <div>
    <p v-if="label" class="label">{{ label }}</p>
    <p v-if="title" class="title">{{ title }}</p>
    <p v-if="supportText" class="supportText">{{ supportText }}</p>
  </div>
  <div v-if="subLabel" class="subLabelWrapper">
    <p class="subLabel">{{ subLabel }}</p>
  </div>
</template>
<style lang="scss" scoped>
@use "../styles/resourceListStyle.scss";
</style>
