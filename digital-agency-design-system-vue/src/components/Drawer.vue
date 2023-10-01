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
  <div class="drawer" :class="{ isMobileOnly: props.isMobileOnly }">
    <div class="drawerContainer" :class="{ isVisible: props.isVisible }">
      <slot></slot>
    </div>
  </div>
</template>
<style lang="scss" scoped>
@use "@/assets/style/utils/utils.scss" as *;

.drawer {
  position: relative;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 5%);

  &.isMobileOnly {
    @include mediaQueryUp {
      display: none;
    }
  }
}

.drawerContainer {
  position: absolute;
  top: 0;
  left: 0;
  width: 320px;
  padding: 20px 8px 32px;
  visibility: hidden;
  background-color: #fff;
  border: 1px solid var(--color-border-divider);

  &.isVisible {
    visibility: visible;
  }
}
</style>
