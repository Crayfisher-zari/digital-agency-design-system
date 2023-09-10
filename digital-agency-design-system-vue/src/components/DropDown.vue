<script setup lang="ts">
import { ref } from "vue";
import Icon from "./Icon.vue";
import iconArrow from "@/assets/images/icon_arrow_accordion.svg";
import { useDropDownAnimation } from "../composables/useDropDownAnimation";

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
      <span>
        <span class="summaryInner">{{ summary }}</span>
        <Icon
          :iconSrc="iconArrow"
          :width="12"
          :height="7"
          color="var(--color-text-body)"
          class="dropDownIcon"
          :ariaHidden="true"
          role="img"
        />
      </span>
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
    .summary {
      border-bottom: 2px solid var(--color-text-body);
    }

    .dropDownIcon {
      transform: rotate(180deg);
    }

    .contents {
      border-color: var(--color-sumi-500);
      transition:
        height var(--base-duration),
        border-color var(--base-duration) var(--easing-out-expo);
    }
  }

  &:not(.hasAnimation) {
    &[open] {
      .dropDownIcon {
        transform: rotate(180deg);
      }
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
}

.icon {
  display: block;
  flex-shrink: 0;
  align-self: flex-start;
  width: 24px;
  height: 24px;
  margin-top: 4px;
  margin-right: 38px;
  margin-left: 6px;
  font-size: pxToRem(24);
  line-height: 1;
  @include mediaQueryDown {
    margin-right: 24px;
  }
}

.summary {
  position: relative;
  display: inline-block;
  min-height: 50px;
  padding-top: 11px;
  padding-right: 24px;
  padding-bottom: 13px;
  font-size: pxToRem(16);
  font-weight: var(--weight-bold);
  line-height: 1.5;
  text-align: left;
  letter-spacing: 0.04em;
  border-bottom: 2px solid transparent;
  transition: background-color var(--base-duration) var(--easing-out-expo);

  &:hover {
    border-bottom: 2px solid var(--color-text-body);
  }

  &:focus-visible {
    outline: 2px solid var(--color-border-focused);
  }

  &::-webkit-details-marker {
    // Safariの三角アイコン
    display: none;
  }
}

.summaryInner {
  min-width: 120px;
}

.dropDownIcon {
  position: absolute;
  top: 50%;
  right: 8px;
  display: block;
  margin-top: -2px;
  transition: transform var(--base-duration) var(--easing-out-expo);
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
