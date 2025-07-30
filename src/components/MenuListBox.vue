<script lang="ts" setup>
import MenuListItem from "./MenuListItem.vue";
import Icon from "./Icon.vue";
import iconArrowAccordion from "@/assets/images/icon_arrow_accordion.svg";
import { useDropDownAnimation } from "../composables/useDropDownAnimation";

type Props = {
  /** サイズ */
  size: "regular" | "small";
  /** タイプ */
  type: "text" | "outlined" | "filled";
  /** 出てくるメニューポジションの左右位置 */
  position?: "left" | "right";
  /** 内部コンテンツの高さ */
  contentHeight: number | undefined;
};

withDefaults(defineProps<Props>(), {
  size: "regular",
  type: "text",
  position: "left",
  contentHeight: undefined,
});

const {
  detailsElement,
  contentsElement,
  contentsInnerElement,
  isOpened,
  handleDropDown,
} = useDropDownAnimation();
</script>
<template>
  <details
    ref="detailsElement"
    class="menuListBox"
    :class="[type, position, { isOpened: isOpened }]"
  >
    <MenuListItem
      type="standard"
      tag="summary"
      :size="size"
      class="summary"
      @click="handleDropDown"
    >
      <template #icon>
        <slot name="summaryIcon" />
      </template>
      <slot name="summary" />
      <template #iconBackward>
        <Icon
          class="icon"
          :class="{ isOpened }"
          :iconSrc="iconArrowAccordion"
          :width="12"
          :height="12"
          color="currentColor"
        />
      </template>
    </MenuListItem>
    <div class="contents" ref="contentsElement">
      <div
        class="contentsInner"
        ref="contentsInnerElement"
        :style="{ height: contentHeight ? `${contentHeight}px` : undefined }"
      >
        <slot name="content" />
      </div>
    </div>
  </details>
</template>
<style scoped>
.menuListBox {
  position: relative;
  z-index: 0;
  width: max-content;
}

.outlined .summary {
  border: 1px solid var(--color-border-divider);
}

.filled .summary {
  background-color: var(--color-background-tertiary);

  &:hover {
    background-color: var(--color-background-secondary);
    border-color: var(--color-background-secondary);
  }
}

.icon {
  transition: transform var(--base-duration) var(--easing-out-expo);
  transform: rotate(0deg);

  &.isOpened {
    transform: rotate(180deg);
  }
}

.contents {
  position: absolute;
  width: max-content;
  overflow: hidden;
  border: 1px solid transparent;
  box-shadow: 0 2px 8px 1px rgba(0, 0, 0, 10%);
  transition:
    height var(--base-duration) var(--easing-out-expo),
    border-color calc(var(--base-duration) * 0.8) var(--easing-in-expo);
}

.isOpened .contents {
  border-color: var(--color-border-divider);
  transition:
    height var(--base-duration) var(--easing-out-expo),
    border-color var(--base-duration) var(--easing-out-expo);
}

.contentsInner {
  padding: 16px 0;
  overflow-y: auto;
}
</style>
