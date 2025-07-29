<script setup lang="ts">
import { ref } from "vue";

import { useDropDownAnimation } from "../composables/useDropDownAnimation";
import DropDownSummary from "./DropDownSummary.vue";

type Props = {
  summary: string;
  hasShadow?: boolean;
  side?: "left" | "right";
  isSelected?: boolean;
};

withDefaults(defineProps<Props>(), { side: "left" });

const {
  isOpened,
  hasAnimation,
  handleDropDown,
  detailsElement,
  contentsElement,
  contentsInnerElement,
} = useDropDownAnimation();
</script>
<template>
  <details
    ref="detailsElement"
    class="dropDown"
    :class="[
      { isOpened: isOpened },
      { hasAnimation: hasAnimation },
      { hasShadow: hasShadow },
      { isSelected: isSelected },
      side,
    ]"
  >
    <summary
      class="summary"
      :class="{ isSelected: isSelected, isActive: isOpened }"
      @click="handleDropDown"
    >
      <DropDownSummary
        :summaryText="summary"
        :isActive="isOpened ?? false"
        :hasAnimation="hasAnimation"
        :isSelected="isSelected"
      >
        <template v-if="$slots.icon" #icon>
          <slot name="icon" />
        </template>
      </DropDownSummary>
      <div class="border"></div>
    </summary>
    <div ref="contentsElement" class="contents">
      <div ref="contentsInnerElement" class="contentsInner">
        <slot default></slot>
      </div>
    </div>
  </details>
</template>
<style lang="scss" scoped>
@use "@/assets/style/utils/utils.scss" as *;

.dropDown {
  position: relative;
  width: max-content;

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

    .contents {
      right: 0;
    }
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
  position: relative;
  z-index: 1;
  display: block;
  width: max-content;
  cursor: pointer;
  transition:
    background-color var(--base-duration) var(--easing-out-expo),
    border-color var(--base-duration) var(--easing-out-expo);

  &::-webkit-details-marker {
    // Safariの三角アイコン
    visibility: hidden;
  }

  @media (hover: hover) {
    &:not(.isSelected):hover {
      background-color: var(--color-mono-hover);

      .border {
        background-color: var(--color-text-body);
      }
    }
  }

  &:focus-visible {
    background-color: var(--color-focus) !important;
    outline: 2px solid var(--color-text-body);
  }

  &.isActive {
    .border {
      background-color: var(--color-text-body);
    }
  }

  &.isSelected {
    .border {
      height: 4px;
      background-color: var(--color-icon-active);
    }
  }
}

.border {
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 2px;
  background-color: transparent;
  transition: background-color var(--base-duration) var(--easing-out-expo);
}

.contents {
  position: absolute;
  width: max-content;
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
