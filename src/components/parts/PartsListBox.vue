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
  /** 影を付けるかどうか */
  hasShadow?: boolean;
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

const offsetxpx = computed(() => {
  return `${props.offsetX}px`;
});

const offsetypx = computed(() => {
  return `${props.offsetY}px`;
});

defineExpose({
  detailsElement,
  handleDropDown,
});
</script>

<template>
  <div
    ref="detailsElement"
    class="listBox"
    :class="[{ isOpened: isOpened }, { hasAnimation: hasAnimation }, position]"
  >
    <button @click="handleChange" class="listBoxButton"  aria-haspopup="listbox" :aria-expanded="isOpened">
      <slot name="summary" />
    </button>
    <div
      ref="contentsElement"
      class="contents"
      :class="{ 'elevation-1': hasShadow }"
    >
      <div ref="contentsInnerElement" class="contentsInner">
        <slot name="content" />
      </div>
    </div>
  </div>
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

.listBoxButton {
  display: block;
  appearance: none;
  border: none;
  background-color: transparent;
  text-align: left;
  &:focus-visible {
    background-color: var(--color-focus);
    outline: 4px solid var(--color-text-body);
  }
}


.contents {
  position: absolute;
  top: auto;
  width: max-content;
  margin-top: v-bind(offsetypx);
  overflow: hidden;
  transition: height var(--base-duration);
}

.right .contents {
  right: v-bind(offsetxpx);
}

.left .contents {
  left: v-bind(offsetxpx);
}
</style>
