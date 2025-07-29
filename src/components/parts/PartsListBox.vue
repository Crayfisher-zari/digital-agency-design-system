<script setup lang="ts">
import { computed } from "vue";
import { useDropDownAnimation } from "../../composables/useDropDownAnimation";

type Props = {
  /** ポジション */
  position?: "left" | "right";
  /** 出てくるメニューの左右位置のオフセット */
  offsetX?: number;
  /** 出てくるメニューの上下位置のオフセット */
  offsetY?: number;
};

const props = withDefaults(defineProps<Props>(), {
  position: "right",
  offsetX: 0,
  offsetY: 0,
});
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

const offsetXPx = computed(() => {
  return `${props.offsetX}px`
});

const offsetYPx = computed(() => {
  return `${props.offsetY}px`;
});
</script>

<template>
  <details
    ref="detailsElement"
    class="listBox"
    :class="[{ isOpened: isOpened }, { hasAnimation: hasAnimation }, position]"
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
.listBox {
  position: relative;
  width: max-content;
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
  &:focus-visible {
    outline: 4px solid var(--color-text-body);
    background-color: var(--color-focus);
  }
}

summary::-webkit-details-marker {
  display: none;
}

summary::marker {
  display: none;
}

.contents {
  position: absolute;
  top: auto;
  margin-top: v-bind(offsetYPx);
  width: max-content;
  overflow: hidden;
  transition: height var(--base-duration);
}

.right .contents {
  right: v-bind(offsetXPx);
}

.left .contents {
  left: v-bind(offsetXPx);
}
</style>
