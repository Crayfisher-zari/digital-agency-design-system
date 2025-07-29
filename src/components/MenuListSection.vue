<script setup lang="ts">
import Icon from "./Icon.vue";
import iconArrowAccordion from "@/assets/images/icon_arrow_accordion.svg";
import { type LinkTag } from "../composables/useLinkComponent";
import MenuListItem from "./MenuListItem.vue";
import PartsAccordion from "./parts/PartsAccordion.vue";
import { ref } from "vue";

type Props = {
  size?: "regular" | "small";
  type?: "standard" | "boxed" | "thumbnail";
  tag?: LinkTag | "button";
  target?: "_blank";
  isCurrent?: boolean;
  description?: string;
  isUnderlined?: boolean;
};

withDefaults(defineProps<Props>(), {
  size: "regular",
  type: "standard",
  tag: "auto",
  target: undefined,
  description: undefined,
  isCurrent: false,
  isUnderlined: true,
});

const isOpened = ref(false);
</script>

<template>
  <PartsAccordion @change="isOpened = $event">
    <template #summary>
      <MenuListItem tag="button">
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
