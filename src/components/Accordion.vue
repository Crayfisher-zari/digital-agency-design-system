<script setup lang="ts">
import { ref } from "vue";
import Icon from "./Icon.vue";
import iconArrow from "@/assets/images/icon_arrow_accordion.svg";
import { useDropDownAnimation } from "../composables/useDropDownAnimation";

type Props = {
  summary: string;
  details: string;
  hasSummaryIcon?: boolean;
  hasDetailIcon?: boolean;
};

withDefaults(defineProps<Props>(), {
  hasSummaryIcon: false,
  hasDetailIcon: false,
});

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
  <div>
    <details
      ref="accordionElement"
      class="accordion"
      :class="[{ isOpened: isOpened }, { hasAnimation: hasAnimation }]"
    >
      <summary class="summary" @click="handleDropDown">
        <span v-if="hasSummaryIcon" class="icon"
          ><slot name="summary"></slot
        ></span>
        <span class="summaryInner">{{ summary }}</span>
        <Icon
          :iconSrc="iconArrow"
          :width="24"
          :height="14"
          color="var(--color-text-body)"
          class="dropDownIcon"
          :ariaHidden="true"
          role="img"
        />
      </summary>
      <div ref="contentsElement" class="details">
        <div ref="contentsInnerElement" class="detailsInner">
          <span v-if="hasDetailIcon" class="icon"
            ><slot name="detail"></slot
          ></span>
          {{ details }}
        </div>
      </div>
    </details>
  </div>
</template>
<style lang="scss" scoped>
@use "@/assets/style/utils/utils.scss" as *;

.accordion {
  border-bottom: 1px solid var(--color-border-divider);

  // アニメーションが有効な場合はタイミングを上書き
  &.isOpened {
    .dropDownIcon {
      transform: rotate(180deg);
    }
  }

  &:not(.hasAnimation) {
    &[open] {
      .dropDownIcon {
        transform: rotate(180deg);
      }
    }
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
  display: flex;
  align-items: center;
  justify-content: space-between;
  min-height: 68px;
  padding-top: 19px;
  padding-right: 28px;
  padding-bottom: 19px;
  font-size: pxToRem(20);
  line-height: 1.5;
  letter-spacing: 0.04em;
  transition: background-color var(--base-duration) var(--easing-out-expo);

  &:hover {
    background-color: var(--color-background-secondary);
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
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  width: 100%;
}

.dropDownIcon {
  display: block;
  flex-shrink: 0;
  margin-left: 16px;
  transition: transform var(--base-duration) var(--easing-out-expo);
}

.details {
  overflow: hidden;
  transition: height var(--base-duration);
}

.detailsInner {
  display: flex;
  padding-top: 24px;
  padding-right: 32px;
  padding-bottom: 40px;
  font-size: pxToRem(16);
  line-height: 1.7;
}
</style>
