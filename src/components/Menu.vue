<script setup lang="ts">
/**
 * @deprecated
 */
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
  hasGap?: boolean;
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
  menuList?: CategoryList[] | Link[];
  linkTag?: LinkTag;
  hasIcon?: boolean;
  hasGap?: boolean;
};
const props = withDefaults(defineProps<Props>(), {
  menuList: undefined,
  hasIcon: false,
  linkTag: "a",
  hasGap: false,
});

const { LinkComponent } = useLink({ tag: props.linkTag });
</script>
<template>
  <div class="menu">
    <slot name="default"></slot>
    <div v-if="menuList">
      <div v-if="'categoryName' in menuList[0]">
        <div
          v-for="(menuItem, index) in menuList as CategoryList[]"
          :key="index"
          class="category"
        >
          <!-- カテゴリーがあるタイプ -->
          <p class="categoryName">
            {{ menuItem.categoryName }}
          </p>
          <ul class="menuList" :class="{ hasGap: hasGap }">
            <li
              v-for="(linkItem, index2) in menuItem.itemList"
              :key="index2"
              class="menuItem"
            >
              <LinkComponent
                v-if="linkItem.type === 'link'"
                :to="(linkItem.item as Link).to"
                class="link"
                :class="[{ selected: (linkItem.item as Link).selected }]"
                >{{ (linkItem.item as Link).text }}</LinkComponent
              >
              <MenuAccordion
                v-else
                :accordionTitle="(linkItem.item as Accordion).accordionTitle"
                :hasIcon="(linkItem.item as Accordion).hasIcon"
                :linkList="(linkItem.item as Accordion).linkList"
                :linkTag="linkTag"
                :hasGap="hasGap"
              />
            </li>
          </ul>
        </div>
      </div>

      <ul v-else class="menuList" :class="{ hasGap: hasGap }">
        <li
          v-for="(menuItem, index) in menuList as Link[]"
          :key="index"
          class="menuItem"
        >
          <LinkComponent
            :to="menuItem.to"
            class="link"
            :class="[{ selected: menuItem.selected }]"
            >{{ menuItem.text }}</LinkComponent
          >
        </li>
      </ul>
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

  &.hasGap {
    row-gap: 16px;
  }
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
    background-color: var(--color-button-secondary-hover);
  }
}
</style>
