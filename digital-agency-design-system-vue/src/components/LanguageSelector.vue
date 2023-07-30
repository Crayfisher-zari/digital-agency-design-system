<script setup lang="ts">
import { ref } from "vue";
import { useLink } from "../composables/useLinkComponent";
import { useDropDownAnimation } from "../composables/useDropDownAnimation";

type Props = {
  languageList: { label: string; link: string; isCurrent: boolean }[];
};

const props = defineProps<Props>();

const languageSelectorElement = ref<HTMLDetailsElement | null>(null);
const languageListElement = ref<HTMLElement | null>(null);
const languageItemElement = ref<HTMLElement | null>(null);

const { LinkComponent } = useLink({ tag: "auto" });

const { isOpened, hasAnimation, handleDropDown } = useDropDownAnimation(
  languageSelectorElement,
  languageListElement,
  languageItemElement
);

const languageList = ref(props.languageList);
</script>
<template>
  <details
    ref="languageSelectorElement"
    class="languageSelector"
    :class="[{ isOpened: isOpened }, { hasAnimation: hasAnimation }]"
  >
    <summary class="summary" @click="handleDropDown">
      <span class="summaryInner">Language</span>
      <picture>
        <source
          srcset="@/assets/images/icon_arrow_accordion_dark.svg"
          media="(prefers-color-scheme: dark)"
        />
        <source srcset="@/assets/images/icon_arrow_accordion.svg" />
        <img
          class="dropDownIcon"
          src="@/assets/images/icon_arrow_accordion.svg"
          alt=""
          width="12"
          height="7"
        />
      </picture>
    </summary>
    <div ref="languageListElement" class="languageList">
      <div ref="languageItemElement" class="languageListInner">
        <ul>
          <li
            v-for="item in languageList"
            :key="item.label"
            class="languageItem"
            :class="{ isCurrent: item.isCurrent }"
          >
            <LinkComponent :to="item.link">{{ item.label }}</LinkComponent>
          </li>
        </ul>
      </div>
    </div>
  </details>
</template>
<style lang="scss" scoped>
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
}

.summary {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding-right: 5px;
  padding-bottom: 8px;
  padding-left: 24px;
  font-size: pxToRem(20);
  line-height: 1.5;
  letter-spacing: 0.04em;
  background-image: url("@/assets/images/icon_globe.svg");
  background-repeat: no-repeat;
  background-position: 0 50%;
  background-size: 20px;
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
  margin-top: 3px;
  margin-left: 16px;
  transition: transform var(--base-duration) var(--easing-out-expo);
}

.languageList {
  overflow: hidden;
  border: 1px solid transparent;
  border-radius: 6px;
  transition: height var(--base-duration),
    border-color var(--base-duration) var(--easing-out-expo);
}

.languageListInner {
  padding-top: 8px;
  padding-bottom: 8px;
}

.languageItem {
  display: flex;
  padding-right: 2px;
  padding-left: 2px;
  font-size: pxToRem(16);
  line-height: 1.7;
  transition: background-color var(--base-duration) var(--easing-out-expo);

  &:hover {
    background-color: var(--color-background-secondary);
  }

  &.isCurrent {
    a {
      position: relative;
      display: block;
      font-weight: var(--weight-bold);
      background-image: url("@/assets/images/icon_check_black.svg");
      background-repeat: no-repeat;
      background-position: 4px 50%;
      background-size: 16px;

      &::before {
        position: absolute;
        top: 0;
        left: -2px;
        display: block;
        width: calc(100% + 4px);
        height: 100%;
        content: "";
      }
    }
  }

  a {
    display: block;
    width: 100%;
    padding-top: 3px;
    padding-bottom: 3px;
    padding-left: 24px;
    font-size: pxToRem(14);
    color: var(--color-text-body);
    text-decoration: none;

    &:hover {
      text-decoration: underline;
    }
  }
}

// ダークモード時
body:not(.color-scheme-light) {
  .summary {
    @media (prefers-color-scheme: dark) {
      background-image: url("@/assets/images/icon_globe_dark.svg");
    }
  }

  .languageItem.isCurrent {
    a {
      @media (prefers-color-scheme: dark) {
        background-image: url("@/assets/images/icon_check.svg");
      }
    }
  }
}

body.color-scheme-dark {
  .summary {
    @media (prefers-color-scheme: dark) {
      background-image: url("@/assets/images/icon_globe_dark.svg");
    }
  }

  .languageItem.isCurrent {
    a {
      @media (prefers-color-scheme: dark) {
        background-image: url("@/assets/images/icon_check.svg");
      }
    }
  }
}
</style>
