<script setup lang="ts">
import { ref } from "vue";
import { LinkTag, useLink } from "../composables/useLinkComponent";
import { useDropDownAnimation } from "../composables/useDropDownAnimation";
import MenuAccordion from "./MenuAccordion.vue";

type ItemType = "link" | "accordion";

export type Link = {
  to: string;
  text: string;
};

export type Accordion = {
  accordionTitle: string;
  linkList: Link[];
};

type ItemDetail = {
  link: Link;
  accordion: Accordion;
};

type ItemList = {
  type: ItemType;
  item: ItemDetail[ItemType];
};

type CategoryList = {
  categoryName: string;
  itemList: ItemList[];
};

type Props = {
  categoryList: CategoryList[];
  linkTag: LinkTag;
  hasIcon?: boolean;
};
const props = withDefaults(defineProps<Props>(), {
  hasIcon: false,
});

const { LinkComponent } = useLink({ tag: props.linkTag });
</script>
<template>
  <div class="menu">
    <slot name="before"></slot>
    <div class="category">
      <div v-for="(category, index) in categoryList" :key="index">
        <p class="categoryName">{{ category.categoryName }}</p>
        <ul class="menuList">
          <li
            v-for="(linkItem, index) in category.itemList"
            :key="index"
            class="menuItem"
          >
            <LinkComponent
              v-if="linkItem.type === 'link'"
              :to="(linkItem.item as Link).to"
              class="link"
              >{{ (linkItem.item as Link).text }}</LinkComponent
            >
            <MenuAccordion
              v-else
              :accordionTitle="(linkItem.item as Accordion).accordionTitle"
              :linkList="(linkItem.item as Accordion).linkList"
            />
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>
<style lang="scss" scoped>
@use "@/assets/style/utils/utils.scss" as *;

.categoryName {
  padding: 8px 16px;
  font-weight: var(--weight-bold);
}

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
  padding: 8px 16px;
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
</style>
