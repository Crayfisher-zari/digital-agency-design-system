<script setup lang="ts">
import { computed, ref } from "vue";
import Icon from "./Icon.vue";
import { type LinkTag } from "../composables/useLinkComponent";
import PartsListBox from "./parts/PartsListBox.vue";
import iconArrow from "@/assets/images/icon_arrow_accordion.svg";
import iconGlobe from "@/assets/images/icon_globe.svg";
import iconCheck from "@/assets/images/icon_check.svg";
import iconBlankSpace from "@/assets/images/icon_blankSpace.svg";
import MenuListItem from "./MenuListItem.vue";

type Props = {
  /** タイプ */
  type?: "label" | "icon";
  /** 言語リスト */
  languageList: { label: string; link: string; isCurrent: boolean }[];
  /** リンクタグ */
  linkTag: LinkTag;
  /** サイズ */
  size?: "small" | "regular";
  /** 内部コンテンツの高さ */
  contentHeight?: number;
};

const props = withDefaults(defineProps<Props>(), {
  type: "label",
  size: "regular",
  contentHeight: undefined,
});

const isOpened = ref(false);

const languageList = ref(props.languageList);

const innerHeight = computed(() => {
  return props.contentHeight ? `${props.contentHeight}px` : "auto";
});
</script>
<template>
  <PartsListBox
    class="languageSelector"
    position="right"
    :offsetY="8"
    :class="[{ isOpened: isOpened }, type]"
    @change="isOpened = $event"
  >
    <template #summary>
      <span class="summaryWrapper">
        <template v-if="type === 'icon'">
          <span class="iconType">
            <Icon
              :iconSrc="iconGlobe"
              :width="30"
              :height="30"
              color="var(--color-text-body)"
              class="globeIcon"
              :ariaHidden="true"
              role="img"
            />
            <span class="iconTypeText"> LANG </span>
          </span>
          <Icon
            :iconSrc="iconArrow"
            :width="12"
            :height="7"
            color="var(--color-text-body)"
            class="dropDownIcon"
            :ariaHidden="true"
            role="img"
          />
        </template>
        <template v-else>
          <span class="labelType">
            <Icon
              :iconSrc="iconGlobe"
              :width="20"
              :height="20"
              color="var(--color-text-body)"
              class="globeIcon"
              :ariaHidden="true"
              role="img"
            />
            <span class="labelTypeText">Language</span>
            <Icon
              :iconSrc="iconArrow"
              :width="12"
              :height="7"
              color="var(--color-text-body)"
              class="dropDownIcon"
              :ariaHidden="true"
              role="img"
            />
          </span>
        </template>
      </span>
    </template>
    <template #content>
      <div class="languageListInner">
        <ul>
          <li v-for="item in languageList" :key="item.label">
            <MenuListItem
              class="languageItem"
              :isCurrent="item.isCurrent"
              :tag="linkTag"
              :size="size === 'small' ? 'small' : 'regular'"
              type="boxed"
              :class="{ isCurrent: item.isCurrent }"
            >
              <template #icon>
                <Icon
                  :iconSrc="item.isCurrent ? iconCheck : iconBlankSpace"
                  :width="16"
                  :height="16"
                  color="currentColor"
                  :ariaHidden="true"
                  role="img"
                />
              </template>
              {{ item.label }}
            </MenuListItem>
          </li>
        </ul>
      </div>
    </template>
  </PartsListBox>
</template>
<style scoped>
.languageSelector {
  position: relative;
  transition: background-color var(--base-duration) var(--easing-out-expo);

  &:hover {
    background-color: var(--color-background-tertiary);
  }
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
/** サマリータグの幅を上書き */
.languageSelector :deep(summary) {
  width: max-content;
}

/* 影を上書き */
.languageSelector :deep(.contents) {
  box-shadow: 0 2px 8px 1px rgba(0, 0, 0, 10%);
}

.summaryWrapper {
  width: 100%;
  background-color: transparent;
  appearance: none;
  border: none;
  position: relative;
  display: flex;
  column-gap: 4px;
  align-items: center;
  justify-content: flex-end;
  border-radius: 4px;
  cursor: pointer;

  &:focus-visible {
    outline: 4px solid var(--color-text-body);
    background-color: var(--color-focus);
  }
}

.languageSelector :deep(.summary:focus-visible) .summaryWrapper {
  outline: 4px solid var(--color-text-body);
  background-color: var(--color-focus);
}

.labelType {
  display: flex;
  align-items: center;
  justify-content: flex-end;
  column-gap: 4px;
  height: 36px;
  padding: 10px 8px;
  font-size: 1rem;
  line-height: 1;
  letter-spacing: 0.04em;
  &:hover {
    text-decoration: underline;
  }
}

.icon {
  width: 60px !important;
  height: 44px !important;
  border-radius: 4px;

  .summaryWrapper {
    width: 60px;
    justify-content: center;
  }
  &:hover {
    outline: 2px solid var(--color-text-body);
  }
}

.iconType {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.iconTypeText {
  font-size: 10px;
}

.dropDownIcon {
  transition: transform var(--base-duration) var(--easing-out-expo);
}

.languageListInner {
  background-color: var(--color-background-primary);
  height: v-bind(innerHeight);
  overflow-y: auto;
  padding-top: 20px;
  padding-bottom: 20px;
  border: 1px solid var(--color-border-divider);
  border-radius: 8px;
  ul,
  li {
    list-style: none;
    padding: 0;
    margin: 0;
  }
}
</style>
