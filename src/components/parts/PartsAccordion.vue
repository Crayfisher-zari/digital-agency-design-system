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
    @click="handleChange"
  >
    <summary class="summary">
      <slot name="summary" />
    </summary>
    <div ref="contentsElement" class="menuListWrapper">
      <div ref="contentsInnerElement" class="menuList">
        <slot name="content" />
      </div>
    </div>
  </details>
</template>

<style scoped>
.accordion {
  border-bottom: 1px solid var(--color-border-divider);

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

.summary {
  &::-webkit-details-marker {
    /* Safariの三角アイコン */
    visibility: hidden;
  }
}
</style>