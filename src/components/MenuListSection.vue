<script setup lang="ts">
import Icon from "./Icon.vue";
import iconArrowAccordion from "@/assets/images/icon_arrow_accordion.svg";
import MenuListItem from "./MenuListItem.vue";
import PartsAccordion from "./parts/PartsAccordion.vue";
import { ref } from "vue";

type Props = {
  size?: "regular" | "small";
  isCurrent?: boolean;
};

withDefaults(defineProps<Props>(), {
  size: "regular",
  isCurrent: false,
});

const isOpened = ref(false);
</script>

<template>
  <PartsAccordion @change="isOpened = $event">
    <template #summary>
      <MenuListItem
        tag="button"
        :size="size"
        type="standard"
        :isCurrent="isCurrent"
      >
        <template #icon>
          <slot name="icon" />
        </template>
        セクションタイトル
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
    </template>
    <template #content>
      <div class="sectionInner">
        <slot />
      </div>
    </template>
  </PartsAccordion>
</template>

<style scoped>
.sectionInner {
  padding-left: 16px;
}

.icon {
  transition: transform var(--base-duration) var(--easing-out-expo);
  transform: rotate(0deg);

  &.isOpened {
    transform: rotate(180deg);
  }
}
</style>
