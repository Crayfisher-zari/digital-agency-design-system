<script lang="ts" setup>
import PartsAccordion from "./parts/PartsAccordion.vue";
import MenuListItem from "./MenuListItem.vue";
import Icon from "./Icon.vue";
import iconArrowAccordion from "@/assets/images/icon_arrow_accordion.svg";
import { ref } from "vue";

type Props = {
  size: "regular" | "small";
  type: "text" | "outlined" | "filled";
  contentHeight: number | undefined;
};

withDefaults(defineProps<Props>(), {
  size: "regular",
  type: "text",
  contentHeight: undefined,
});

const isOpened = ref(false);
</script>
<template>
  <PartsAccordion
    @change="isOpened = $event"
    class="menuListBox"
    :class="[type]"
  >
    <template #summary>
      <div class="summaryWrapper">
        <MenuListItem type="standard" :size="size">
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
      <div class="shadowWrapper">
        <div
          class="contentWrapper"
          :style="{ height: contentHeight ? `${contentHeight}px` : undefined }"
        >
          <slot name="content" />
        </div>
      </div>
    </template>
  </PartsAccordion>
</template>
<style scoped>
.menuListBox {
  border-radius: 8px;
}

.summaryWrapper {
  padding: 0 8px;
}

.outlined {
  border: 1px solid var(--color-border-divider);
}

.filled .summaryWrapper :deep(.menuListItem) {
  background-color: var(--color-background-tertiary);

  &:hover {
    background-color: var(--color-background-secondary);
    border-color: var(--color-background-secondary);
  }
}

.shadowWrapper {
  padding: 0 8px 8px;
}

.contentWrapper {
  padding: 16px 0;
  overflow-y: auto;
  border: 1px solid var(--color-border-divider);
  box-shadow: 0 2px 8px 1px rgba(0, 0, 0, 10%);
}

.icon {
  transition: transform var(--base-duration) var(--easing-out-expo);
  transform: rotate(0deg);

  &.isOpened {
    transform: rotate(180deg);
  }
}
</style>
