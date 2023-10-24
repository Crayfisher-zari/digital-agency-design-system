<script lang="ts" setup>
type Props = {
  /** メガメニューのスタイルです */
  style?: "flat" | "shadow";
};
withDefaults(defineProps<Props>(), {
  style: "flat",
});
</script>
<template>
  <div class="megaMenuContainer" :class="style">
    <div>
      <slot name="col1"></slot>
    </div>
    <div>
      <slot name="col2"></slot>
    </div>
    <div>
      <slot name="col3"></slot>
    </div>
    <div>
      <slot name="col4"></slot>
    </div>
  </div>
</template>
<style lang="scss">
.megaMenuContainer {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  column-gap: 40px;
  padding: 32px 180px 40px 80px;
  background-color: var(--color-background-primary);

  &.flat {
    border-bottom: 1px solid var(--color-sumi-500);
  }
}
</style>
