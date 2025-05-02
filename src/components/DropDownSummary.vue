<script setup lang="ts">
import iconArrow from "@/assets/images/icon_arrow_accordion.svg";
import Icon from "./Icon.vue";
type Props = {
  summaryText: string;
  isActive: boolean;
  hasAnimation?: boolean;
  isSelected?: boolean;
};
withDefaults(defineProps<Props>(), {
  hasAnimation: true,
});
</script>
<template>
  <span
    class="dropDownSummary"
    :class="{
      isActive: isActive,
      hasAnimation: hasAnimation,
      isSelected: isSelected,
    }"
  >
    <span v-if="$slots.icon" class="iconWrapper">
      <slot name="icon"></slot>
    </span>
    <span class="summaryText">{{ summaryText }}</span>
    <Icon
      :iconSrc="iconArrow"
      :width="12"
      :height="7"
      color="currentColor"
      class="dropDownIcon"
      :ariaHidden="!isActive"
      role="img"
    />
  </span>
</template>
<style scoped lang="scss">
@use "@/assets/style/utils/utils.scss" as *;

.dropDownSummary {
  position: relative;
  display: inline-flex;
  align-items: center;
  min-height: 50px;
  padding: 11px 20px 13px;
  font-size: pxToRem(16);
  font-weight: var(--weight-bold);
  line-height: 1.5;
  text-align: left;
  letter-spacing: 0.04em;

  &.isActive {
    .dropDownIcon {
      transform: rotate(180deg);
    }
  }

  &.isSelected {
    color: var(--color-text-link);

    @media (hover: hover) {
      &:hover {
        text-decoration: underline;
      }
    }
  }

  &:not(.hasAnimation) {
    .dropDownIcon {
      transition-duration: 0s;
    }

    &.isActive {
      .dropDownIcon {
        transform: rotate(180deg);
      }
    }
  }
}

.iconWrapper {
  margin-right: 8px;
}

.summaryText {
  min-width: 120px;
}

.dropDownIcon {
  display: block;
  margin-top: 2px;
  margin-left: 4px;
  transition: transform var(--base-duration) var(--easing-out-expo);
}
</style>
