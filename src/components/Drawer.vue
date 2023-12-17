<script setup lang="ts">
type Props = {
  /** ドロワーを表示するかどうか */
  isVisible: boolean;
  /** モバイルのみでの表示か */
  isMobileOnly?: boolean;
  /** 表示タイプ */
  type?: "overlay" | "sidebar";
  /** 出現方向 */
  appearFrom?: "left" | "right" | "top" | "bottom" | "none";
};
const props = withDefaults(defineProps<Props>(), {
  isMobileOnly: true,
  appearFrom: "right",
  type: "sidebar",
});
</script>
<template>
  <div
    class="drawer"
    :class="[
      { isMobileOnly: props.isMobileOnly, isVisible: props.isVisible },
      appearFrom,
    ]"
  >
    <div class="drawerContainer" :class="[appearFrom, type]">
      <slot></slot>
    </div>
  </div>
</template>
<style lang="scss" scoped>
@use "@/assets/style/utils/utils.scss" as *;

.drawer {
  position: relative;
  display: flex;

  &.left {
    justify-content: flex-start;
  }

  &.right {
    justify-content: flex-end;
  }

  &::before {
    position: absolute;
    top: 0;
    left: 0;
    z-index: -1;
    width: 100%;
    height: 100%;
    visibility: hidden;
    content: "";
    background-color: rgba(0, 0, 0, 5%);
    opacity: 0;
    transition:
      visibility var(--base-duration) var(--easing-out-expo),
      opacity var(--base-duration) var(--easing-out-expo);
  }

  &.isMobileOnly {
    @include mediaQueryUp {
      display: none;
    }
  }

  &.isVisible {
    &::before {
      visibility: visible;
      opacity: 1;
    }

    .drawerContainer {
      transform: translate(0, 0);
    }
  }
}

.drawerContainer {
  width: 320px;
  height: 100%;
  padding: 20px 8px 32px;
  background-color: #fff;
  box-shadow: 2px 0 6px 0 rgba(0, 0, 0, 10%);
  transition: transform var(--base-duration) var(--easing-out-expo);

  &.sidebar {
    width: 320px;
  }

  &.overlay {
    width: 100%;
  }

  &.left {
    transform: translateX(-101%);
  }

  &.right {
    transform: translateX(101%);
  }

  &.bottom {
    transform: translateY(101%);
  }

  &.top {
    transform: translateY(-101%);
  }
}
</style>
