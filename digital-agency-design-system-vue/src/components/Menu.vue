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
  hasIcon?: boolean;
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
  menuList: CategoryList[] | Link[];
  linkTag?: LinkTag;
  hasIcon?: boolean;
};
const props = withDefaults(defineProps<Props>(), {
  hasIcon: false,
  linkTag: "a",
});

const { LinkComponent } = useLink({ tag: props.linkTag });
</script>
<template>
  <div class="menu">
    <slot name="default"></slot>
    <div v-if="menuList">
      <div v-for="(menuItem, index) in menuList" :key="index" class="category">
        <!-- カテゴリーがあるタイプ -->
        <div v-if="'categoryName' in menuItem">
          <p class="categoryName">
            {{ menuItem.categoryName }}
          </p>
          <ul class="menuList">
            <li
              v-for="(linkItem, index2) in menuItem.itemList"
              :key="index2"
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
                :hasIcon="(linkItem.item as Accordion).hasIcon"
                :linkList="(linkItem.item as Accordion).linkList"
                :linkTag="linkTag"
              />
            </li>
          </ul>
        </div>
        <!-- リンクリストタイプ -->
        <ul v-else class="menuList">
          <li class="menuItem">
            <LinkComponent
              :to="menuItem.to"
              class="link"
              :class="[{ selected: menuItem.selected }]"
              >{{ menuItem.text }}</LinkComponent
            >
          </li>
        </ul>
      </div>
    </div>
    <slot name="after"></slot>
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
