<script setup lang="ts">
import { ref } from "vue";
import { useDropDownAnimation } from "../composables/useDropDownAnimation";
import { Accordion } from "./Menu.vue";

const accordionElement = ref<HTMLDetailsElement | null>(null);
const contentsElement = ref<HTMLElement | null>(null);
const contentsInnerElement = ref<HTMLElement | null>(null);

const { isOpened, hasAnimation, handleDropDown } = useDropDownAnimation(
  accordionElement,
  contentsElement,
  contentsInnerElement
);

const props = defineProps<Accordion>();
</script>
<template>
  <details
    ref="accordionElement"
    class="accordion"
    :class="[{ isOpened: isOpened }, { hasAnimation: hasAnimation }]"
    @click="handleDropDown"
  >
    <summary class="summary">
      {{ accordionTitle }}
    </summary>
    <div ref="contentsElement" class="menuListWrapper">
      <ul ref="contentsInnerElement" class="menuList">
        <li class="menuItem">
          <LinkComponent to="#!" class="link">メニュー</LinkComponent>
        </li>
        <li class="menuItem">
          <LinkComponent to="#!" class="link">メニュー</LinkComponent>
        </li>
        <li class="menuItem">
          <LinkComponent to="#!" class="link">メニュー</LinkComponent>
        </li>
      </ul>
    </div>
  </details>
</template>
<style lang="scss" scoped>
.menuList {
  display: grid;
  grid-template-columns: 100%;
  grid-auto-flow: row;
  row-gap: 16px;
}

.menuItem {
  list-style: none;
}

.link {
  display: block;
  padding: 8px 16px 8px 48px;
  color: var(--color-text-body);
  text-decoration: none;
  border-radius: 8px;
  transition: background-color var(--base-duration) var(--easing-out-expo);

  &:hover {
    text-decoration: underline;
    background-color: var(--color-background-tertiary);
  }

  &.selected {
    color: var(--color-text-link);

    // TODO: ダークモード時の背景カラーが不明
    background-color: var(--color-sea-50);
  }
}

.menuListWrapper {
  overflow: hidden;
  transition: height var(--base-duration);
}
</style>
