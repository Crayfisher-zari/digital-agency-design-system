<script lang="ts" setup>
import HamburgerButton from "./HamburgerButton.vue";

type Props = {
  /** メガメニューのスタイルです */
  style?: "flat" | "shadow";
  /** メガメニューを表示するかどうか */
  isVisible: boolean;
};

type Emits = { (e: "update:isVisible", value: false): void };

withDefaults(defineProps<Props>(), {
  style: "flat",
});

const emits = defineEmits<Emits>();

const handleClickHamburger = () => {
  console.log("aaa");
  emits("update:isVisible", false);
};
</script>
<template>
  <div v-show="isVisible" class="megaMenuContainer" :class="style">
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
    <div class="hamburger">
      <HamburgerButton :modelValue="true" :onClick="handleClickHamburger" />
    </div>
  </div>
</template>
<style lang="scss" scoped>
.megaMenuContainer {
  position: relative;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  column-gap: 40px;
  padding: 32px 180px 40px 80px;
  background-color: var(--color-background-primary);

  &.flat {
    border-bottom: 1px solid var(--color-border-medium-divider);
  }
}

.hamburger {
  position: absolute;
  top: 32px;
  right: 80px;
}
</style>
