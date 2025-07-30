<script setup lang="ts">
import { useDropDownAnimation } from "../../composables/useDropDownAnimation";

const {
  detailsElement,
  contentsElement,
  contentsInnerElement,
  isOpened,
  hasAnimation,
  handleDropDown,
} = useDropDownAnimation();

const emit = defineEmits<{
  change: [isOpened: boolean];
}>();

const handleChange = (e: Event) => {
  handleDropDown(e);
  emit("change", isOpened.value ?? false);
};
</script>

<template>
  <details
    ref="detailsElement"
    class="accordion"
    :class="[{ isOpened: isOpened }, { hasAnimation: hasAnimation }]"
  >
    <summary @click="handleChange">
      <slot name="summary" />
    </summary>
    <div ref="contentsElement" class="contents">
      <div ref="contentsInnerElement" class="contentsInner">
        <slot name="content" />
      </div>
    </div>
  </details>
</template>

<style scoped>
.accordion {
  /* アニメーションが有効な場合はタイミングを上書き */
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

summary {
  list-style: none;
  cursor: pointer;

  &:focus-visible {
    background-color: var(--color-focus);
    outline: 4px solid var(--color-text-body);
  }
}

summary::-webkit-details-marker {
  display: none;
}

summary::marker {
  display: none;
}

.contents {
  overflow: hidden;
  transition: height var(--base-duration);
}
</style>
