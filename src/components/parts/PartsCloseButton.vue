<script setup lang="ts">
import Icon from "../Icon.vue";
import iconClose from "@/assets/images/icon_close.svg";

type Props = {
  isCompact?: boolean;
};

withDefaults(defineProps<Props>(), {
  isCompact: false,
});

const emits = defineEmits<{
  click: [e: Event];
}>();

const handleClick = (e: Event) => {
  emits("click", e);
};
</script>
<template>
  <button class="closeButton" :class="{ isCompact }" @click="handleClick">
    <Icon
      :iconSrc="iconClose"
      :width="24"
      :height="24"
      color="var(--color-text-body)"
      class="closeButtonIcon"
    />
    <span class="closeButtonLabel">閉じる</span>
  </button>
</template>

<style scoped>
.closeButton {
  display: flex;
  align-items: center;
  width: auto;
  height: 36px;
  padding-right: 8px;
  padding-left: 12px;
  font-size: 1rem;
  line-height: 1;
  color: var(--color-text-body);
  appearance: none;
  cursor: pointer;
  background-color: transparent;
  border: 1px solid transparent;
  border-radius: 8px;
  transition:
    background-color var(--base-duration) var(--easing-out-expo),
    border-color var(--base-duration) var(--easing-out-expo);

  @media (hover: hover) {
    &:hover {
      text-decoration: underline;
      background-color: var(--color-mono-hover);
    }
  }

  &.isCompact {
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;
    width: 44px;
    height: 44px;
    padding: 0;
    font-size: 0.625rem;
    font-weight: var(--weight-bold);

    @media (hover: hover) {
      &:hover {
        text-decoration: none;
        border-color: var(--color-text-body);
      }
    }

    .closeButtonIcon {
      width: 28px;
      height: 28px;
      margin-right: 0;
    }
  }
}

.closeButtonIcon {
  display: block;
  margin-right: 6px;
}
</style>
