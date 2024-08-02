<script setup lang="ts">
import Icon from "./Icon.vue";
import iconArrowUpwards from "@/assets/images/icon_arrow_upward.svg";

type Props = {
  /** クリック時の処理 */
  onClick?: () => void;
};

const props = withDefaults(defineProps<Props>(), {
  onClick: undefined,
});

const handleClick = () => {
  if (props.onClick) {
    props.onClick();
  } else {
    window.scroll({
      top: 0,
      behavior: "smooth",
    });
  }
};
</script>
<template>
  <button class="scrollTopButton" @click="handleClick">
    <Icon
      :iconSrc="iconArrowUpwards"
      :width="24"
      :height="24"
      color="var(--icon-color)"
    />
    <div class="sr-only">ページ上部に戻る</div>
  </button>
</template>
<style lang="scss">
.scrollTopButton {
  width: 56px;
  height: 56px;
  cursor: pointer;
  background-color: var(--color-background-primary);
  border: 1px solid var(--color-button-normal);
  border-radius: 28px;
  transition:
    background-color var(--base-duration) var(--easing-out-quat),
    border-color var(--base-duration) var(--easing-out-quat);

  --icon-color: var(--color-button-normal);

  &:hover {
    background-color: var(--color-button-secondary-hover);
  }

  &:active {
    background-color: var(--color-button-secondary-active);
    border-color: var(--color-button-active);

    --icon-color: var(--color-button-active);
  }
}
</style>
