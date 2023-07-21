<script setup lang="ts">
import { ref } from "vue";
import { useLink } from "../composables/useLinkComponent";
import { useDropDownAnimation } from "../composables/useDropDownAnimation";

type Props = {
  languageList: { label: string; link: string }[];
};

defineProps<Props>();

const languageSelectorElement = ref<HTMLDetailsElement | null>(null);
const languageListElement = ref<HTMLElement | null>(null);
const languageItemElement = ref<HTMLElement | null>(null);

const { LinkComponent } = useLink({});

const { isOpened, hasAnimation, handleDropDown } = useDropDownAnimation(
  languageSelectorElement,
  languageListElement,
  languageItemElement
);
</script>
<template>
  <details
    ref="languageSelectorElement"
    class="languageSelector"
    :class="[{ isOpened: isOpened }, { hasAnimation: hasAnimation }]"
  >
    <summary class="summary" @click="handleDropDown">
      <span class="summaryInner">Language</span>
      <img
        class="dropDownIcon"
        src="@/assets/images/icon_arrow_accordion.svg"
        alt=""
        width="24"
        height="14"
      />
    </summary>
    <div ref="languageListElement" class="languageList">
      <ul ref="languageItemElement">
        <li v-for="item in languageList" :key="item.label" class="languageItem">
          <LinkComponent :to="item.link">{{ item.label }}</LinkComponent>
        </li>
      </ul>
    </div>
  </details>
</template>
<style lang="scss">
.languageSelector {
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
  display: flex;
  align-items: center;
  justify-content: space-between;
  min-height: 68px;
  padding-top: 19px;
  padding-right: 28px;
  padding-bottom: 19px;
  font-size: pxToRem(20);
  line-height: 1.5;
  letter-spacing: 0.04em;
  transition: background-color var(--base-duration) var(--easing-out-expo);

  &:-webkit-details-marker {
    display: none;
  }

  &:focus-visible {
    outline: 2px solid var(--color-border-focused);
  }

  &::-webkit-details-marker {
    // Safariの三角アイコン
    display: none;
  }
}

.dropDownIcon {
  display: block;
  flex-shrink: 0;
  margin-left: 16px;
  transition: transform var(--base-duration) var(--easing-out-expo);
}

.languageList {
  overflow: hidden;
  transition: height var(--base-duration);
}

.languageItem {
  display: flex;
  font-size: pxToRem(16);
  line-height: 1.7;
}
</style>
