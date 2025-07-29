<script setup lang="ts">
import Icon from "./Icon.vue";
import iconArrowAccordion from "@/assets/images/icon_arrow_accordion.svg";
import MenuListItem from "./MenuListItem.vue";
import PartsAccordion from "./parts/PartsAccordion.vue";
import { ref } from "vue";
import { useDropDownAnimation } from "../composables/useDropDownAnimation";

const {
  detailsElement,
  contentsElement,
  contentsInnerElement,
  isOpened,
  hasAnimation,
  handleDropDown,
} = useDropDownAnimation();

type Props = {
  size?: "regular" | "small";
  isCurrent?: boolean;
  isBoxed?: boolean;
};

withDefaults(defineProps<Props>(), {
  size: "regular",
  isCurrent: false,
  isBoxed: false,
});

</script>

<template>
  <details ref="detailsElement" class="accordion" :class="[{ isOpened: isOpened }]">
    <summary @click="handleDropDown">
      <span>
        <slot name="icon" />
        <slot name="sectionTitle" />
      </span>
      <Icon :iconSrc="iconArrowAccordion" :width="12" :height="12" color="currentColor" class="icon" />
    </summary>
    <div class="contents" ref="contentsElement">
      <div class="contentsInner" ref="contentsInnerElement">
        <slot />
      </div>
    </div>
  </details>
</template>

<style scoped>
.sectionInner {
  padding-left: 16px;
}

summary {
  display: flex;
}
summary::-webkit-details-marker {
  visibility: hidden;
}

summary::marker {
  visibility: hidden;
}

.icon {
  transition: transform var(--base-duration) var(--easing-out-expo);
  transform: rotate(0deg);

}

.accordion.isOpened .icon {
  transform: rotate(180deg);
}


.contents {
  /* overflow: hidden; */
  transition: height var(--base-duration);
}
</style>
