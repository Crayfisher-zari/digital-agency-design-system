<script setup lang="ts">
import { ref, useId } from "vue";
import Icon from "./Icon.vue";
import iconArrow from "@/assets/images/icon_arrow_accordion.svg";
import iconReturn from "@/assets/images/icon_return.svg";
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

const anchorId = useId();
</script>
<template>
  <div>
    <details
      ref="accordionElement"
      class="accordion"
      :class="[{ isOpened: isOpened }, { hasAnimation: hasAnimation }]"
    >
      <summary :id="anchorId" class="summary" @click="handleDropDown">
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
          <p>
            {{ details }}
          </p>
          <a :href="`#${anchorId}`" class="anchor">
            <Icon
              :iconSrc="iconReturn"
              :width="24"
              :height="24"
              color="var(--color-text-link)"
              class="returnIcon"
            />「{{ summary }}」の先頭に戻る</a
          >
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
  line-height: 1.6;
  letter-spacing: 0.02em;
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

  @include mediaQueryDown {
    align-items: flex-start;
    min-height: 36px;
    padding: 8px 8px 12px 2px;
    font-size: pxToRem(16);
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

  @include mediaQueryDown {
    width: 24px;
    height: 24px;
    margin-top: 2px;
    margin-right: 8px;
  }
}

.dropDownIcon {
  display: block;
  transition: transform var(--base-duration) var(--easing-out-expo);

  @include mediaQueryDown {
    width: 13px;
    height: auto;
  }
}

.details {
  overflow: hidden;
  transition: height var(--base-duration);
}

.detailsInner {
  display: flex;
  flex-direction: column;
  row-gap: 16px;
  padding: 24px 32px 40px 56px;
  font-size: pxToRem(16);
  line-height: 1.7;
  letter-spacing: 0.02em;

  @include mediaQueryDown {
    padding: 16px 8px 16px 34px;
  }
}

.anchor {
  display: flex;
  column-gap: 8px;
  align-items: center;

  @include mediaQueryDown {
    align-items: flex-start;
  }
}

.returnIcon {
  display: block;
  flex-shrink: 0;
  margin-top: 2px;
}
</style>
