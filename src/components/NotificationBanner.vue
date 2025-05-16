<script lang="ts" setup>
import { computed } from "vue";
import { LinkTag, useLink } from "../composables/useLinkComponent";
import BasicButton from "./BasicButton.vue";
import Icon from "./Icon.vue";
import iconClose from "@/assets/images/icon_close.svg";
import BasicButtonLink from "./BasicButtonLink.vue";

type Props = {
  /** バナースタイル */
  style?: "standard" | "colorChip";
  /** バナー種別 */
  type: "success" | "error" | "warning" | "info1" | "info2";
  /** タイトル */
  title: string;
  /** 日付 */
  date?: string;
  /** バナー文章 */
  description: string;
  /** カスタムアイコン画像へのリンク */
  customIconSrc?: string;
  /** クリック時のリンク先 */
  url?: string;
  /** リンク種別 */
  linkTag?: LinkTag;
  /** 閉じるボタンの有無 */
  hasClose?: boolean;
  /** 閉じるボタン押下時の処理 */
  onClickClose?: () => void;
  /** 主ボタンのラベル */
  primaryButtonLabel?: string;
  /** 主ボタンクリック時の処理 */
  onClickPrimary?: () => void;
  /** 副ボタンのラベル */
  secondaryButtonLabel?: string;
  /** 副ボタンクリック時の処理 */
  onClickSecondary?: () => void;
};

const props = withDefaults(defineProps<Props>(), {
  style: "standard",
  date: undefined,
  customIconSrc: undefined,
  url: undefined,
  linkTag: "auto",
  hasClose: false,
  onClickClose: undefined,
  primaryButtonLabel: undefined,
  onClickPrimary: undefined,
  secondaryButtonLabel: undefined,
  onClickSecondary: undefined,
});

const { LinkComponent } = useLink({ tag: props.linkTag });

// 主ボタンの色をバナー種別に応じて算出します
const primaryButtonColor = computed(() => {
  if (!props.primaryButtonLabel) {
    return undefined;
  }
  switch (props.type) {
    case "success":
      return {
        backgroundColor: "var(--color-status-success2)",
        labelColor: "var(--color-text-onFill)",
        hoverBackgroundColor: "var(--color-status-success-hover2)",
        hoverLabelColor: "var(--color-text-onFill)",
      };
    case "error":
      return {
        backgroundColor: "var(--color-status-alert)",
        labelColor: "var(--color-text-onFill)",
        hoverBackgroundColor: "var(--color-status-alert-hover)",
        hoverLabelColor: "var(--color-text-onFill)",
      };
    case "warning":
      return {
        backgroundColor: "var(--color-status-warning)",
        labelColor: "var(--color-text-onFill)",
        hoverBackgroundColor: "var(--color-status-warning-hover)",
        hoverLabelColor: "var(--color-text-onFill)",
      };
    case "info1":
      return {
        backgroundColor: "var(--color-button-normal)",
        labelColor: "var(--color-text-onFill)",
        hoverBackgroundColor: "var(--color-button-hover)",
        hoverLabelColor: "var(--color-text-onFill)",
      };
    case "info2":
      return {
        backgroundColor: "var(--color-grey-800)",
        labelColor: "var(--color-mono-clear)",
        hoverBackgroundColor: "var(--color-grey-700)",
        hoverLabelColor: "var(--color-text-onFill)",
      };
    default:
      return undefined;
  }
});

// 副ボタンの色をバナー種別に応じて算出します
const secondaryButtonColor = computed(() => {
  if (!props.secondaryButtonLabel) {
    return undefined;
  }
  switch (props.type) {
    case "success":
      return {
        backgroundColor: "var(--color-text-onFill)",
        borderColor: "var(--color-status-success2)",
        labelColor: "var(--color-status-success2)",
        hoverBackgroundColor:
          "var(--custom-secondary-hover-background-success)",
        hoverBorderColor: "var(--custom-secondary-hover-border-success)",
        hoverLabelColor: "var(--custom-secondary-hover-label-success)",
      };
    case "error":
      return {
        backgroundColor: "var(--color-text-onFill)",
        borderColor: "var(--color-status-alert)",
        labelColor: "var(--color-status-alert)",
        hoverBackgroundColor: "var(--custom-secondary-hover-background-error)",
        hoverBorderColor: "var(--custom-secondary-hover-border-error)",
        hoverLabelColor: "var(--custom-secondary-hover-label-error)",
      };
    case "warning":
      return {
        backgroundColor: "var(--color-text-onFill)",
        borderColor: "var(--color-status-warning)",
        labelColor: "var(--color-status-warning)",
        hoverBackgroundColor:
          "var(--custom-secondary-hover-background-warning)",
        hoverBorderColor: "var(--custom-secondary-hover-border-warning)",
        hoverLabelColor: "var(--custom-secondary-hover-label-warning)",
      };
    case "info1":
      return {
        backgroundColor: "var(--color-text-onFill)",
        borderColor: "var(--color-button-normal)",
        labelColor: "var(--color-button-normal)",
        hoverBackgroundColor: "var(--custom-secondary-hover-background-info1)",
        hoverBorderColor: "var(--custom-secondary-hover-border-info1)",
        hoverLabelColor: "var(--custom-secondary-hover-label-info1)",
      };
    case "info2":
      return {
        backgroundColor: "transparent",
        borderColor: "var(--color-grey-800)",
        labelColor: "var(--color-grey-800)",
        hoverBackgroundColor: "var(--custom-secondary-hover-background-info2)",
        hoverBorderColor: "var(--custom-secondary-hover-border-info2)",
        hoverLabelColor: "var(--custom-secondary-hover-label-info2)",
      };
    default:
      return undefined;
  }
});

// 下線を持つか算出します。リンクありかつボタンなしの場合は下線が出ます
const hasUnderline = computed(
  () =>
    props.url !== undefined &&
    !props.hasClose &&
    !props.primaryButtonLabel &&
    !props.secondaryButtonLabel,
);

// ラッパー要素のタグ
const wrapperTag = computed(() => {
  if (
    props.url !== undefined &&
    !props.hasClose &&
    props.primaryButtonLabel === undefined &&
    props.secondaryButtonLabel === undefined
  ) {
    return LinkComponent;
  } else {
    return "div";
  }
});

// タイトルのタグ
const titleTag = computed(() => {
  if (props.url && (props.primaryButtonLabel || props.secondaryButtonLabel)) {
    return LinkComponent;
  } else {
    return "span";
  }
});
</script>
<template>
  <div class="notificationBannerWrapper" :class="[style, type]">
    <component
      :is="wrapperTag"
      class="notificationBanner"
      :class="[type, style, { isLink: wrapperTag !== 'div' }]"
    >
      <p class="titleWrapper">
        <span class="icon">
          <!-- Successの場合 -->
          <svg
            v-if="type === 'success'"
            width="36"
            height="36"
            viewBox="0 0 36 36"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            class="iconSvg"
          >
            <circle cx="18" cy="18" r="18" fill="white" />
            <path
              d="M18 0C8.064 0 0 8.064 0 18C0 27.936 8.064 36 18 36C27.936 36 36 27.936 36 18C36 8.064 27.936 0 18 0ZM14.4 27L5.4 18L7.938 15.462L14.4 21.906L28.062 8.244L30.6 10.8L14.4 27Z"
              fill="var(--color-status-success2)"
            />
          </svg>
          <!-- Errorの場合 -->
          <svg
            v-if="type === 'error'"
            width="36"
            height="36"
            viewBox="0 0 36 36"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            class="iconSvg"
          >
            <path
              d="M24.2525 33H11.7475L3 24.2525V11.7475L11.7475 3H24.2525L33 11.7475V24.2525L24.2525 33Z"
              fill="var(--color-status-alert)"
              stroke="var(--color-status-alert)"
              stroke-width="2"
            />
            <rect
              width="2"
              height="18.5341"
              transform="matrix(0.7071 -0.707113 0.7071 0.707113 11 12.4143)"
              fill="white"
            />
            <rect
              width="2"
              height="18.5341"
              transform="matrix(-0.7071 -0.707113 0.7071 -0.707113 12.4141 25.52)"
              fill="white"
            />
          </svg>
          <!-- Warningの場合 -->
          <svg
            v-if="type === 'warning'"
            width="36"
            height="36"
            viewBox="0 0 36 36"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            class="iconSvg"
          >
            <path d="M18 3.00098L36 34.091H0L18 3.00098Z" fill="white" />
            <path
              d="M0 34.0909H36L18 3L0 34.0909ZM19.6364 29.1818H16.3636V25.9091H19.6364V29.1818ZM19.6364 22.6364H16.3636V16.0909H19.6364V22.6364Z"
              fill="var(--color-status-warning)"
            />
          </svg>
          <!-- info1の場合 -->
          <svg
            v-if="type === 'info1'"
            width="36"
            height="36"
            viewBox="0 0 36 36"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            class="iconSvg"
          >
            <circle cx="18" cy="18" r="18" fill="white" />
            <path
              d="M18 0C8.064 0 0 8.064 0 18C0 27.936 8.064 36 18 36C27.936 36 36 27.936 36 18C36 8.064 27.936 0 18 0ZM19.8 27H16.2V16.2H19.8V27ZM19.8 12.6H16.2V9H19.8V12.6Z"
              fill="var(--color-button-normal)"
            />
          </svg>
          <!-- info2の場合 -->
          <svg
            v-if="type === 'info2'"
            width="36"
            height="36"
            viewBox="0 0 36 36"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            class="iconSvg"
          >
            <circle cx="18" cy="18" r="18" fill="var(--color-mono-clear)" />
            <path
              d="M18 0C8.064 0 0 8.064 0 18C0 27.936 8.064 36 18 36C27.936 36 36 27.936 36 18C36 8.064 27.936 0 18 0ZM19.8 27H16.2V16.2H19.8V27ZM19.8 12.6H16.2V9H19.8V12.6Z"
              fill="var(--color-border-medium-divider)"
            />
          </svg>
        </span>

        <component
          :is="titleTag"
          :to="titleTag === 'span' ? undefined : props.url"
          class="title"
          :class="[hasUnderline, hasClose]"
        >
          <span class="titleInner">
            {{ title }}
          </span>
        </component>
      </p>
      <p v-if="date" class="date">
        {{ date }}
      </p>
      <p class="description">
        {{ description }}
      </p>
      <div v-if="hasClose" class="closeButtonWrapper">
        <button class="closeButton">
          <Icon
            :iconSrc="iconClose"
            :width="24"
            :height="24"
            color="var(--color-text-body)"
            class="closeButtonIcon"
          />
          <span class="closeButtonLabel sr-only-mobile">閉じる</span>
        </button>
      </div>
      <div
        v-if="primaryButtonLabel || secondaryButtonLabel"
        class="buttonWrapper"
      >
        <BasicButton
          v-if="secondaryButtonLabel && onClickSecondary"
          type="custom"
          :label="secondaryButtonLabel"
          :onClick="onClickSecondary"
          :customColor="secondaryButtonColor"
        ></BasicButton>
        <BasicButton
          v-if="primaryButtonLabel && onClickPrimary"
          type="custom"
          :label="primaryButtonLabel"
          :onClick="onClickPrimary"
          :customColor="primaryButtonColor"
        ></BasicButton>
        <BasicButtonLink
          v-if="url && primaryButtonLabel"
          type="custom"
          :label="primaryButtonLabel"
          :to="url"
          :customColor="primaryButtonColor"
        ></BasicButtonLink>
      </div>
    </component>
  </div>
</template>
<style lang="scss" scoped>
@use "@/assets/style/utils/utils.scss" as *;

.notificationBannerWrapper {
  /* Successの副ボタンカスタムカラー */
  --custom-secondary-hover-background-success: var(--color-green-50);
  --custom-secondary-hover-label-success: var(--color-green-1000);
  --custom-secondary-hover-border-success: var(--color-green-1000);

  /* Errorの副ボタンカスタムカラー */
  --custom-secondary-hover-background-error: var(--color-red-50);
  --custom-secondary-hover-label-error: var(--color-red-900);
  --custom-secondary-hover-border-error: var(--color-red-900);

  /* Warningの副ボタンカスタムカラー */
  --custom-secondary-hover-background-warning: var(--color-yellow-50);
  --custom-secondary-hover-label-warning: var(--color-yellow-900);
  --custom-secondary-hover-border-warning: var(--color-yellow-900);

  /* info1の副ボタンカスタムカラー */
  --custom-secondary-hover-background-info1: var(--color-blue-50);
  --custom-secondary-hover-label-info1: var(--color-blue-900);
  --custom-secondary-hover-border-info1: var(--color-blue-900);

  /* info2の副ボタンカスタムカラー */
  --custom-secondary-hover-background-info2: var(--color-grey-100);
  --custom-secondary-hover-label-info2: var(--color-grey-900);
  --custom-secondary-hover-border-info2: var(--color-grey-900);
}

.notificationBanner {
  position: relative;
  display: block;
  padding: 24px 24px 32px;
  color: var(--color-text-body);
  text-decoration: none;
  border-style: solid;
  border-width: 3px;
  border-radius: 12px;

  &.success {
    border-color: var(--color-status-success2);
  }

  &.error {
    border-color: var(--color-status-alert);
  }

  &.warning {
    border-color: var(--color-status-warning);

    &.colorChip::before {
      /* ワーニングのみ特別 */
      border-color: var(--color-yellow-400);
    }
  }

  &.info1 {
    border-color: var(--color-button-normal);
  }

  &.info2 {
    border-color: var(--color-border-medium-divider);
  }

  &.colorChip {
    position: relative;
    padding: 24px 24px 32px 40px;
    border-width: 2px;
    border-radius: 0;

    &::before {
      position: absolute;
      top: 0;
      left: 0;
      display: block;
      width: 1px;
      height: 100%;
      content: "";
      border-color: inherit;
      border-style: solid;
      border-width: 0 0 0 16px;
    }

    @include mediaQueryDown {
      border-left-width: 6px;
    }
  }

  @include mediaQueryDown {
    padding: 16px 16px 24px;
  }
}

.titleWrapper {
  display: flex;
  column-gap: 24px;
  align-items: center;
  margin-bottom: 16px;

  @include mediaQueryDown {
    column-gap: 12px;
  }
}

.icon {
  display: block;
  width: 36px;
  height: 36px;

  @include mediaQueryDown {
    width: 24px;
    height: 24px;

    .iconSvg {
      width: 24px;
      height: 24px;
    }
  }
}

.title {
  display: block;
  flex-grow: 1;
  width: auto;
  font-size: pxToRem(20);
  font-weight: var(--weight-bold);
  line-height: 1.6;
  color: var(--color-text-body);

  &.hasUnderline {
    text-decoration: underline;
  }

  @include mediaQueryDown {
    flex-grow: 0;
    font-size: pxToRem(17);
    line-height: 1.7;
  }

  &.hasClose {
    @include mediaQueryDown {
      width: calc(100% - 124px);
    }
  }
}

.titleInner {
  display: inline-block;
  text-decoration: inherit;
}

.date {
  padding-left: 56px;
  margin-bottom: 8px;
  font-size: pxToRem(16);
  line-height: 1.7;
  color: var(--color-text-secondary);

  @include mediaQueryDown {
    padding-left: 0;
    font-size: pxToRem(16);
  }
}

.description {
  padding-left: 56px;
  font-size: pxToRem(16);
  line-height: 1.7;
  color: var(--color-text-secondary);
  text-decoration: none;
  letter-spacing: 0.04em;

  @include mediaQueryDown {
    padding-left: 0;
  }
}

.buttonWrapper {
  display: flex;
  column-gap: 16px;
  justify-content: flex-end;
  margin-top: 16px;

  @include mediaQueryDown {
    flex-direction: column;
    row-gap: 16px;
    margin-top: 24px;
  }
}

.closeButtonWrapper {
  position: absolute;
  top: 22px;
  right: 30px;

  @include mediaQueryDown {
    top: 10px;
    right: 16px;
  }
}

.closeButton {
  display: flex;
  align-items: center;
  width: auto;
  height: 40px;
  padding-right: 8px;
  padding-left: 16px;
  font-size: pxToRem(16);
  color: var(--color-text-body);
  appearance: none;
  cursor: pointer;
  background-color: transparent;
  border: 1px solid transparent;
  border-radius: 8px;
  transition:
    background-color var(--base-duration) var(--easing-out-expo),
    border-color var(--base-duration) var(--easing-out-expo);

  @media (hover: hover) {
    &:hover {
      background-color: var(--color-mono-hover);
      border-color: var(--color-text-body);
    }
  }

  @include mediaQueryDown {
    justify-content: center;
    width: 44px;
    height: 44px;
    padding: 0;
    font-size: pxToRem(14);
  }
}

.closeButtonIcon {
  display: block;
  margin-right: 6px;

  @include mediaQueryDown {
    margin-right: 0;
  }
}
</style>
