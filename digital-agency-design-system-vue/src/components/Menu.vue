<script setup lang="ts">
import { LinkTag, useLink } from "../composables/useLinkComponent";
import MenuAccordion from "./MenuAccordion.vue";

type ItemType = "link" | "accordion";

export type Link = {
  to: string;
  text: string;
  selected?: boolean;
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
    <div>
      <div
        v-for="(category, index) in categoryList"
        :key="index"
        class="category"
      >
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
              :class="[{selected:(linkItem.item as Link).selected}]"
              >{{ (linkItem.item as Link).text }}</LinkComponent
            >
            <MenuAccordion
              v-else
              :accordionTitle="(linkItem.item as Accordion).accordionTitle"
              :linkList="(linkItem.item as Accordion).linkList"
              :linkTag="linkTag"
            />
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>
<style lang="scss" scoped>
@use "@/assets/style/utils/utils.scss" as *;

.category {
  margin-bottom: 24px;

  &:last-child {
    margin-bottom: 0;
  }
}

.categoryName {
  padding: 8px 16px 16px;
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
    color: var(--color-text-link);

    // TODO: ダークモード時の背景カラーが不明
    background-color: var(--color-sea-50);
  }
}
</style>
