<script setup lang="ts">
type Props = {
  type?: "full" | "slim";
};
withDefaults(defineProps<Props>(), {
  type: "full",
});
</script>
<template>
  <header class="header" :class="type">
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
@use "@/assets/style/utils/utils.scss" as *;

.header {
  padding: 0 40px;
  background-color: var(--color-background-primary);
  border-bottom: 1px solid var(--color-border-divider);

  &.slim {
    .inner {
      grid-template: "logo menu item" 80px / 240px auto 1fr;
    }
  }

  @include mediaQueryDown {
    padding: 0 16px;
  }
}

.inner {
  display: grid;
  grid-template: "logo item" 80px "menu menu" 56px / 240px 1fr;
  max-width: 1280px;
  margin: 0 auto;

  @include mediaQueryDown {
    grid-template: "logo item hamburger" 56px / 160px 1fr 48px;
  }
}

.logo {
  grid-area: logo;
  align-self: center;
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
  align-self: center;

  @include mediaQueryDown {
    display: none;
  }
}

.hamburger {
  grid-area: hamburger;

  @include mediaQueryUp {
    display: none;
  }
}
</style>
