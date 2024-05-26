<script lang="ts" setup>
import spinner from "@/assets/images/icon_indicator_spinner.svg";
import spinnerSmall from "@/assets/images/icon_indicator_spinner_small.svg";
import linear from "@/assets/images/icon_indicator_linear.svg";
type Props = {
  /** インジケーターの種類 */
  style: "spinner" | "spinner-small" | "linear";
  /** インジケーターのラベル */
  label?: string;
  /** オーバーレイ用かどうか？ */
  isOverlay?: boolean;
  /** ラベル位置 */
  labelPosition?: "stacked" | "inline";
  /** インジケーターの幅。linearタイプのみ有効。px数を入力 */
  width?: number;
};
withDefaults(defineProps<Props>(), {
  label: undefined,
  isOverlay: false,
  labelPosition: "stacked",
  width: undefined,
});
</script>
<template>
  <div
    class="wrapper"
    :class="[
      labelPosition,
      { isOverlay, spinnerSmall: style === 'spinner-small' },
    ]"
  >
    <div v-if="style === 'spinner'">
      <img :src="spinner" alt="" class="spinerIcon" width="48" height="48" />
    </div>
    <div v-if="style === 'spinner-small'">
      <img
        :src="spinnerSmall"
        alt=""
        class="spinerIcon"
        width="24"
        height="24"
      />
    </div>
    <div v-if="style === 'linear'">
      <div class="linear" :class="{ customWidth: width !== undefined }">
        <img :src="linear" class="linearInner" alt="" width="112" height="4" />
      </div>
    </div>
    <p class="label">{{ label }}</p>
  </div>
</template>
<style lang="scss" scoped>
@use "@/assets/style/utils/utils.scss" as *;

.wrapper {
  display: flex;
  gap: 16px;
  align-items: center;
  width: fit-content;

  &.spinnerSmall {
    gap: 8px;
  }

  &.stacked {
    flex-direction: column;
  }

  &.inline {
    flex-direction: row;
  }
}

.spinerIcon {
  display: block;
}

.label {
  font-size: pxToRem(16);
  line-height: 1.7;
  color: var(--color-text-placeHolder);
}

.linear {
  position: relative;
  width: 100%;
  min-width: 240px;
  height: 4px;
  background-color: var(--color-blue-500);
  border-radius: 2px;
}

.linearInner {
  position: absolute;
  top: 0;
  left: 50%;
  width: 30%;
}
</style>
