<script setup lang="ts">
import Icon from "./Icon.vue";
import iconArrow from "@/assets/images/icon_arrow_right.svg";
import { useLink, LinkTag } from "../composables/useLinkComponent";

type Props = {
  size?: "regular" | "small";
  tag?: LinkTag;
  target?: "_blank";
};

withDefaults(defineProps<Props>(), {
  size: "regular",
  tag: "auto",
  target: undefined,
});

const { LinkComponent } = useLink();
</script>

<template>
  <LinkComponent :class="size" :tag="tag" :target="target" class="menuListItem">
    <slot name="icon" />
    <span class="text">
      <slot />
    </span>
    <span class="arrow">
      <Icon
        :iconSrc="iconArrow"
        :width="16"
        :height="16"
        color="var(--color-text-body)"
      />
    </span>
  </LinkComponent>
</template>

<style scoped>
.menuListItem {
  display: flex;
  column-gap: 8px;
  align-items: center;
  justify-content: flex-start;
}

.text {
  font-size: 1rem;
  line-height: 1.3;
  color: var(--color-text-body);
}

.arrow {
  height: 16px;
  line-height: 1.2;
}
</style>
