<script setup lang="ts">
import { ref } from "vue";
import { useDropDownAnimation } from "../composables/useDropDownAnimation";
import { Accordion } from "./Menu.vue";
import Icon from "./Icon.vue";
import { LinkTag, useLink } from "../composables/useLinkComponent";
import iconArrow from "@/assets/images/icon_arrow_accordion.svg";

const accordionElement = ref<HTMLDetailsElement | null>(null);
const contentsElement = ref<HTMLElement | null>(null);
const contentsInnerElement = ref<HTMLElement | null>(null);

const { isOpened, hasAnimation, handleDropDown } = useDropDownAnimation(
  accordionElement,
  contentsElement,
  contentsInnerElement,
);

type Props = Accordion & { linkTag: LinkTag };

const props = defineProps<Props>();
const { LinkComponent } = useLink({ tag: props.linkTag });
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
      <div v-if="hasIcon" class="icon">
        <Icon
          class="dropDownIcon"
          :iconSrc="iconArrow"
          :width="12"
          :height="7"
          color="var(--color-text-body)"
          :ariaHidden="true"
          role="img"
        />
      </div>
    </summary>
    <div ref="contentsElement" class="menuListWrapper">
      <ul ref="contentsInnerElement" class="menuList" :class="{ hasGap }">
        <li v-for="(item, index) in linkList" :key="index" class="menuItem">
          <LinkComponent
            :to="item.to"
            class="link"
            :class="[{ selected: item.selected }]"
            >{{ item.text }}</LinkComponent
          >
        </li>
      </ul>
    </div>
  </details>
</template>
<style lang="scss" scoped>
.accordion {
  // アニメーションが有効な場合はタイミングを上書き
  &.isOpened {
    .dropDownIcon {
      transform: rotate(180deg);
    }
  }

  &:not(.hasAnimation) {
    &[open] {
      .dropDownIcon {
        transform: rotate(180deg);
      }
    }
  }
}

.summary {
  position: relative;
  display: block;
  padding: 8px 16px;
  color: var(--color-text-body);

  &::-webkit-details-marker {
    // Safariの三角アイコン
    display: none;
  }
}

.icon {
  position: absolute;
  top: 5px;
  right: 16px;
}

.dropDownIcon {
  transition: transform var(--base-duration) var(--easing-out-expo);
}

.menuList {
  display: grid;
  grid-template-columns: 100%;
  grid-auto-flow: row;

  &.hasGap {
    row-gap: 16px;
    padding-top: 16px;
  }
}

.menuItem {
  padding-left: 32px;
  list-style: none;
}

.link {
  display: block;
  padding: 10px 16px;
  color: var(--color-text-body);
  text-decoration: none;
  border-radius: 8px;
  transition: background-color var(--base-duration) var(--easing-out-expo);

  &:hover {
    text-decoration: underline;
    background-color: var(--color-background-tertiary);
  }

  &.selected {
    font-weight: var(--weight-bold);
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
