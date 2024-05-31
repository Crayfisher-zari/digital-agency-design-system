<script lang="ts" setup>
import spinner from "@/assets/images/icon_indicator_spinner.svg";
import spinnerSmall from "@/assets/images/icon_indicator_spinner_small.svg";
import linear from "@/assets/images/icon_indicator_linear.svg";
type Props = {
  /** インジケーターの種類 */
  type: "spinner" | "spinner-small" | "linear";
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
  width: 0,
});
</script>
<template>
  <div
    class="wrapper"
    :class="[
      labelPosition,
      { isOverlay, spinnerSmall: type === 'spinner-small' },
    ]"
  >
    <div v-if="type === 'spinner'">
      <img
        :src="spinner"
        alt=""
        class="spinerIcon spinAnimation"
        width="48"
        height="48"
      />
    </div>
    <div v-if="type === 'spinner-small'">
      <img
        :src="spinnerSmall"
        alt=""
        class="spinerIcon spinAnimation"
        width="24"
        height="24"
      />
    </div>
    <div v-if="type === 'linear'">
      <div class="linear" :class="{ customWidth: width !== undefined }">
        <img
          :src="linear"
          class="linearInner lineAnimation"
          alt=""
          width="112"
          height="4"
        />
      </div>
    </div>
    <p v-if="label !== ''" class="label">{{ label }}</p>
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

  &.isOverlay {
    width: 130px;
    height: 130px;
    padding: 24px 16px;
    background-color: var(--color-background-primary);
    border-radius: 12px;
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
  overflow: hidden;
  background-color: var(--color-blue-500);
  border-radius: 2px;

  &.customWidth {
    width: calc(1px * v-bind(width));
    min-width: calc(1px * v-bind(width));
  }
}

.linearInner {
  position: absolute;
  top: 0;
  left: 0;
  width: 30%;
}

.spinAnimation {
  animation-name: spin;
  animation-duration: 1s;
  animation-timing-function: linear;
  animation-iteration-count: infinite;
}

.lineAnimation {
  animation-name: linear;
  animation-duration: 1s;
  animation-timing-function: linear;
  animation-iteration-count: infinite;
}

@keyframes spin {
  0% {
    transform: rotate(0deg);
  }

  100% {
    transform: rotate(360deg);
  }
}

@keyframes linear {
  0% {
    transform: translate(-100%);
  }

  100% {
    transform: translate(334%);
  }
}
</style>
