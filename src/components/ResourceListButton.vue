<script lang="ts" setup>
import PartsResourceListInner from "./parts/PartsResourceListInner.vue";

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
const props = withDefaults(defineProps<Props>(), {
  label: undefined,
  title: undefined,
  supportText: undefined,
  subLabel: undefined,
});
</script>
<template>
  <div class="resourceListWrapper">
    <button class="resourceList button" type="button">
      <div v-if="$slots.frontIcon" class="frontIconWrapper">
        <slot name="frontIcon"></slot>
      </div>
      <PartsResourceListInner
        :label="props.label"
        :title="props.title"
        :supportText="props.supportText"
        :subLabel="props.subLabel"
      />
      <div v-if="$slots.endIcon" class="endIconWrapper">
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
