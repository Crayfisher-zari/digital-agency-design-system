<script setup lang="ts">
type Props = {
  /** ドロワーを表示するかどうか */
  isVisible: boolean;
  /** モバイルのみでの表示か */
  isMobileOnly?: boolean;
};
const props = withDefaults(defineProps<Props>(), {
  isMobileOnly: true,
});
</script>
<template>
  <div
    class="drawer"
    :class="{ isMobileOnly: props.isMobileOnly, isVisible: props.isVisible }"
  >
    <div class="drawerContainer">
      <slot></slot>
    </div>
  </div>
</template>
<style lang="scss" scoped>
@use "@/assets/style/utils/utils.scss" as *;

.drawer {
  position: relative;
  display: none;
  visibility: hidden;

  &::before {
    position: absolute;
    top: 0;
    left: 0;
    z-index: -1;
    width: 100%;
    height: 100%;
    content: "";
  }

  background-color: rgba(0, 0, 0, 5%);

  &.isMobileOnly {
    @include mediaQueryUp {
      display: none;
    }
  }

  &.isVisible {
    display: block;
    visibility: visible;
  }
}

.drawerContainer {
  width: 320px;
  height: 100%;
  padding: 20px 8px 32px;
  background-color: #fff;
  box-shadow: 2px 0 6px 0 rgba(0, 0, 0, 10%);
}
</style>
