<script setup lang="ts">
type Props = {
  type?: "full" | "slim";
};
withDefaults(defineProps<Props>(), {
  type: "full",
});
</script>
<template>
  <header :class="type">
    <div class="inner">
      <div class="logo">
        <slot name="logo"></slot>
      </div>
      <div class="item">
        <slot name="item"></slot>
      </div>
      <div class="menu">
        <slot name="menu"></slot>
      </div>
      <div class="hamburger">
        <slot name="hamburger"></slot>
      </div>
    </div>
  </header>
</template>
<style scoped lang="scss">
header {
  padding: 0 40px;
  border-bottom: 1px solid var(--color-border-divider);
}

.inner {
  display: grid;
  grid-template: "logo item" 80px "menu menu" 56px / 240px 1fr;
  max-width: 1280px;
  margin: 0 auto;
}

.logo {
  grid-area: logo;
}

.item {
  position: relative;
  display: flex;
  grid-area: item;
  align-items: center;
  justify-content: flex-end;
}

.menu {
  grid-area: menu;
}
</style>
