<script lang="ts" setup>
import PartsResourceListInner from "./parts/PartsResourceListInner.vue";

type Props = {
  /** リソースリストのスタイル */
  designStyle: "list" | "form";
  /** ラベル */
  label?: string;
  /** リストタイトル */
  title?: string;
  /** サポートテキスト */
  supportText?: string;
  /** サブラベル */
  subLabel?: string;
};
const props = withDefaults(defineProps<Props>(), {
  designStyle: "list",
  label: undefined,
  title: undefined,
  supportText: undefined,
  subLabel: undefined,
});
</script>
<template>
  <div class="resourceListWrapper" :class="[designStyle]">
    <div
      class="resourceListContainer label noInteraction"
      :class="[designStyle]"
    >
      <div class="resourceList">
        <div v-if="$slots.frontIcon" class="frontIconWrapper">
          <slot name="frontIcon"></slot>
        </div>
        <PartsResourceListInner
          :label="props.label"
          :title="props.title"
          :supportText="props.supportText"
          :subLabel="props.subLabel"
        />
      </div>
      <div v-if="$slots.endIcon" class="endIconWrapper">
        <slot name="endIcon"></slot>
      </div>
    </div>
  </div>
</template>
<style scoped>
@import "./styles/resourceListStyle.css";
</style>
