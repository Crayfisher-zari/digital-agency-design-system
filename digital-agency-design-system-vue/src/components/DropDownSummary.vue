<script setup lang="ts">
import iconArrow from "@/assets/images/icon_arrow_accordion.svg";
import Icon from "./Icon.vue";
type Props = {
  summaryText: string;
  isActive: boolean;
  hasAnimation?: boolean;
};
withDefaults(defineProps<Props>(), {
  hasAnimation: true,
});
</script>
<template>
  <span
    class="dropDownSummary"
    :class="{ isActive: isActive, hasAnimation: hasAnimation }"
  >
    <span class="summaryText">{{ summaryText }}</span>
    <Icon
      :iconSrc="iconArrow"
      :width="12"
      :height="7"
      color="var(--color-text-body)"
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
  &.isActive {
    border-bottom: 2px solid var(--color-text-body);
    .dropDownIcon {
      transform: rotate(180deg);
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
.summaryText {
  min-width: 120px;
}

.dropDownIcon {
  position: absolute;
  top: 50%;
  right: 6px;
  display: block;
  margin-top: -2px;
  transition: transform var(--base-duration) var(--easing-out-expo);
}
</style>
