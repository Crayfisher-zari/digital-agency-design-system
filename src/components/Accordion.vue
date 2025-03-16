<script setup lang="ts">
import { ref } from "vue";
import Icon from "./Icon.vue";
import iconArrow from "@/assets/images/icon_arrow_accordion.svg";
import { useDropDownAnimation } from "../composables/useDropDownAnimation";

type Props = {
  summary: string;
  details: string;
};

withDefaults(defineProps<Props>(), {});

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
        <span class="iconWrapper">
          <Icon
            :iconSrc="iconArrow"
            :width="18"
            :height="10"
            color="var(--color-text-link)"
            class="dropDownIcon"
            :ariaHidden="true"
            role="img"
          />
        </span>
        <span class="summaryInner">{{ summary }}</span>
      </summary>
      <div ref="contentsElement" class="details">
        <div ref="contentsInnerElement" class="detailsInner">
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

.summary {
  display: flex;
  align-items: center;
  justify-content: space-between;
  min-height: 68px;
  padding: 19px 28px 19px 6px;
  font-size: pxToRem(20);
  line-height: 1.5;
  letter-spacing: 0.04em;
  transition: background-color var(--base-duration) var(--easing-out-expo);

  &:hover {
    background-color: var(--color-background-secondary);

    .iconWrapper {
      border-width: 3px;
    }
  }

  &::-webkit-details-marker {
    // Safariの三角アイコン
    visibility: hidden;
  }

  &:focus-visible {
    background-color: var(--color-focus);
    border-radius: 5px;
    outline: 4px solid var(--color-text-body);
  }
}

.summaryInner {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  width: 100%;
}

.iconWrapper {
  display: grid;
  flex-shrink: 0;
  place-items: center;
  width: 32px;
  height: 32px;
  margin-right: 14px;
  background-color: var(--color-background-primary);
  border: 1px solid var(--color-text-link);
  border-radius: 50%;
}

.dropDownIcon {
  display: block;
  transition: transform var(--base-duration) var(--easing-out-expo);
}

.details {
  overflow: hidden;
  transition: height var(--base-duration);
}

.detailsInner {
  display: flex;
  padding: 24px 32px 40px 56px;
  font-size: pxToRem(16);
  line-height: 1.7;
}
</style>
