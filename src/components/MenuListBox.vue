<script lang="ts" setup>
import PartsListBox from "./parts/PartsListBox.vue";
import MenuListItem from "./MenuListItem.vue";
import Icon from "./Icon.vue";
import iconArrowAccordion from "@/assets/images/icon_arrow_accordion.svg";
import { ref } from "vue";

type Props = {
  /** サイズ */
  size: "regular" | "small";
  /** タイプ */
  type: "text" | "outlined" | "filled";
  /** 出てくるメニューポジションの左右位置 */
  position: "left" | "right";
  /** 内部コンテンツの高さ */
  contentHeight: number | undefined;
};

withDefaults(defineProps<Props>(), {
  size: "regular",
  type: "text",
  position: "left",
  offsetX: 0,
  offsetY: 0,
  contentHeight: undefined,
});

const isOpened = ref(false);
</script>
<template>
  <PartsListBox
    :position="position"
    @change="isOpened = $event"
    class="menuListBox"
    :class="[type, position]"
  >
    <template #summary>
      <div class="summaryWrapper">
        <MenuListItem type="standard" :size="size">
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
      </div>
    </template>
    <template #content>
      <div
        class="contentWrapper"
        :style="{ height: contentHeight ? `${contentHeight}px` : undefined }"
      >
        <slot name="content" />
      </div>
    </template>
  </PartsListBox>
</template>
<style scoped>
.summaryWrapper{
  border-radius: 8px;
}
/* 影を上書き */
.menuListBox :deep(.contents) {
  box-shadow: 0 2px 8px 1px rgba(0, 0, 0, 10%);
}

.outlined .summaryWrapper {
  border: 1px solid var(--color-border-divider);
}

.filled .summaryWrapper :deep(.menuListItem) {
  background-color: var(--color-background-tertiary);

  &:hover {
    background-color: var(--color-background-secondary);
    border-color: var(--color-background-secondary);
  }
}

.contentWrapper {
  padding: 16px 0;
  overflow-y: auto;
  border: 1px solid var(--color-border-divider);
}

.icon {
  transition: transform var(--base-duration) var(--easing-out-expo);
  transform: rotate(0deg);

  &.isOpened {
    transform: rotate(180deg);
  }
}
</style>
