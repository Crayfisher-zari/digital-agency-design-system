<script setup lang="ts">
import { ref } from "vue";

import { useDropDownAnimation } from "../composables/useDropDownAnimation";
import DropDownSummary from "./DropDownSummary.vue";

type Props = {
  summary: string;
  hasShadow?: boolean;
  side?: "left" | "right";
};

withDefaults(defineProps<Props>(), { side: "left" });

const accordionElement = ref<HTMLDetailsElement | null>(null);
const contentsElement = ref<HTMLElement | null>(null);
const contentsInnerElement = ref<HTMLElement | null>(null);

const { isOpened, hasAnimation, handleDropDown } = useDropDownAnimation(
  accordionElement,
  contentsElement,
  contentsInnerElement,
);
</script>
<template>
  <details
    ref="accordionElement"
    class="dropDown"
    :class="[
      { isOpened: isOpened },
      { hasAnimation: hasAnimation },
      { hasShadow: hasShadow },
      side,
    ]"
  >
    <summary class="summary" @click="handleDropDown">
      <DropDownSummary
        :summaryText="summary"
        :isActive="isOpened ?? false"
        :hasAnimation="hasAnimation"
      />
    </summary>
    <div ref="contentsElement" class="contents">
      <div ref="contentsInnerElement" class="contentsInner">
        <slot></slot>
      </div>
    </div>
  </details>
</template>
<style lang="scss" scoped>
@use "@/assets/style/utils/utils.scss" as *;

.dropDown {
  position: relative;

  // アニメーションが有効な場合はタイミングを上書き
  &.isOpened {
    .contents {
      border-color: var(--color-border-medium-divider);
      transition:
        height var(--base-duration),
        border-color var(--base-duration) var(--easing-out-expo);
    }
  }

  // 影あり
  &.hasShadow {
    .contents {
      box-shadow: 0 0 16px 0 rgba(26, 26, 28, 20%);
    }
  }

  // 右寄せ位置
  &.right {
    text-align: right;
  }

  // アニメーションなし
  &:not(.hasAnimation) {
    .contents {
      // 0秒だとtransitionEndが反応しないため極小の値を設定
      transition-duration: 0.1ms;
    }
  }
}

.summary {
  display: block;
  cursor: pointer;

  &::-webkit-details-marker {
    // Safariの三角アイコン
    display: none;
  }
}

.contents {
  position: absolute;
  width: 100%;
  min-width: 148px;
  overflow: hidden;
  text-align: left;
  background-color: var(--color-background-primary);
  border: 1px solid transparent;
  transition:
    height var(--base-duration),
    border-color var(--base-duration) var(--easing-in-expo);
}

.contentsInner {
  padding: 16px 8px 34px;
}
</style>
