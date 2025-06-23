<script setup lang="ts">
type Props = {
  type?: "wide-full" | "wide-slim" | "medium" | "compact";
};
withDefaults(defineProps<Props>(), {
  type: "wide-full",
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
  &.wide-full {
    padding: 28px 40px 24px;

    .inner {
      grid-template: "logo item" 64px "menu menu" 64px / 240px 1fr;
    }

    .hamburger {
      display: none;
    }
  }

  &.wide-slim {
    padding: 20px 40px 18px;

    .inner {
      grid-template: "logo menu item" 48px / 240px 1fr auto;
    }

    .hamburger {
      display: none;
    }
  }

  &.medium {
    padding: 20px 40px 18px;

    .inner {
      grid-template: "logo item hamburger" 48px / 240px 1fr 56px;
    }

    .menu {
      display: none;
    }
  }

  &.compact {
    padding: 12px 16px;

    .inner {
      grid-template: "logo item hamburger" 48px / 60px 1fr 56px;
    }

    .menu {
      display: none;
    }
  }
}

.inner {
  display: grid;
  gap: 12px;
  margin: 0 auto;
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
}

.menu {
  grid-area: menu;
  align-self: center;
}

.hamburger {
  display: flex;
  grid-area: hamburger;
  align-items: center;
}
</style>
