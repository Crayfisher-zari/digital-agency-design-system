<script setup lang="ts">
import { ref } from "vue";
import Icon from "./Icon.vue";
import { LinkTag, useLink } from "../composables/useLinkComponent";
import PartsAccordion from "./parts/PartsAccordion.vue";
import iconArrow from "@/assets/images/icon_arrow_accordion.svg";
import iconGlobe from "@/assets/images/icon_globe.svg";
import iconCheck from "@/assets/images/icon_check.svg";
import iconBlankSpace from "@/assets/images/icon_blankSpace.svg";
import MenuListItem from "./MenuListItem.vue";

type Props = {
  /** 言語リスト */
  languageList: { label: string; link: string; isCurrent: boolean }[];
  /** リンクタグ */
  linkTag: LinkTag;
  /** サイズ */
  size?: "small" | "regular";
};

const props = withDefaults(defineProps<Props>(), { size: "regular" });

const { LinkComponent } = useLink({ tag: props.linkTag });

const isOpened = ref(false);

const languageList = ref(props.languageList);
</script>
<template>
  <PartsAccordion
    class="languageSelector"
    :class="{ isOpened: isOpened }"
    @change="isOpened = $event"
  >
    <template #summary>
      <span class="summaryWrapper">
        <Icon
          :iconSrc="iconGlobe"
          :width="16"
          :height="16"
          color="var(--color-text-body)"
          class="globeIcon"
          :ariaHidden="true"
          role="img"
        />
        <span class="summaryInner">Language</span>
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
    <template #content>
      <div class="languageListInner">
        <ul>
          <MenuListItem
            v-for="item in languageList"
            :key="item.label"
            class="languageItem"
            :isCurrent="item.isCurrent"
            :tag="linkTag"
            size="small"
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
        </ul>
      </div>
    </template>
  </PartsAccordion>
</template>
<style lang="scss" scoped>
@use "@/assets/style/utils/utils.scss" as *;

.languageSelector {
  // アニメーションが有効な場合はタイミングを上書き
  &.isOpened {
    .dropDownIcon {
      transform: rotate(180deg);
    }

    .languageList {
      border-color: var(--color-border-divider);
    }
  }

  &:not(.hasAnimation) {
    &[open] {
      .dropDownIcon {
        transform: rotate(180deg);
      }
    }
  }

  /** 大きいサイズ */
  &.large {
    .summary {
      height: 28px;
      padding: 0 5px 0 28px;
    }

    .globeIcon {
      top: 5px;
      width: 20px;
      height: 20px;
    }

    .summaryInner {
      font-size: pxToRem(16);
    }

    .link {
      font-size: pxToRem(16);
    }
  }
}

.summaryWrapper {
  position: relative;
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 24px;
  padding: 0 5px 0 24px;
  margin-bottom: 6px;
  font-size: pxToRem(14);
  line-height: 1;
  letter-spacing: 0.04em;
  border-radius: 4px;
  transition: background-color var(--base-duration) var(--easing-out-expo);
}

.globeIcon {
  position: absolute;
  top: 5px;
  left: 2px;
}

.dropDownIcon {
  position: absolute;
  top: 12px;
  right: 6px;
  transition: transform var(--base-duration) var(--easing-out-expo);
}

.languageListInner {
  padding-top: 8px;
  padding-bottom: 8px;
  background-color: var(--color-background-primary);
}

</style>
