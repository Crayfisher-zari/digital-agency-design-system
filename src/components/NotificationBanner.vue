<script lang="ts" setup>
import { LinkTag, useLink } from "../composables/useLinkComponent";
import BasicButton from "./BasicButton.vue";

type Props = {
  style?: "standard" | "colorChip";
  type: "success" | "error" | "warning" | "info1" | "info2";
  title: string;
  date?: string;
  description: string;
  customIconSrc?: string;
  url?: string;
  linkTag: LinkTag;
  hasClose?: boolean;
  onClickClose?: () => void;
  primariyButtonLabel?: string;
  onClickPrimary?: () => void;
  secondaryButtonLabel?: string;
  onClickSecondary?: () => void;
};

const props = withDefaults(defineProps<Props>(), {
  style: "standard",
  date: undefined,
  customIconSrc:undefined,
  url: undefined,
  linkTag: "a",
  hasClose: undefined,
  onClickClose: undefined,
  primariyButtonLabel: undefined,
  onClickPrimary: undefined,
  secondaryButtonLabel: undefined,
  onClickSecondary: undefined,
});

const { LinkComponent } = useLink({ tag: props.linkTag });
</script>
<template>
  <div class="notificationBannerWrapper" :class="[style, type]">
    <LinkComponent
      v-if="url && !primariyButtonLabel && secondaryButtonLabel"
      class="notificationLink"
    ></LinkComponent>
    <div class="notificationBanner">
      <p class="title">
        <span class="icon">
          <!-- Successの場合 -->
          <svg
            width="36"
            height="36"
            viewBox="0 0 36 36"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <circle cx="18" cy="18" r="18" fill="white" />
            <path
              d="M18 0C8.064 0 0 8.064 0 18C0 27.936 8.064 36 18 36C27.936 36 36 27.936 36 18C36 8.064 27.936 0 18 0ZM14.4 27L5.4 18L7.938 15.462L14.4 21.906L28.062 8.244L30.6 10.8L14.4 27Z"
              fill="var(--color-status-success)"
            />
          </svg>
          <!-- Errorの場合 -->
          <svg
            width="36"
            height="36"
            viewBox="0 0 36 36"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
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
            width="36"
            height="36"
            viewBox="0 0 36 36"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M18 3.00098L36 34.091H0L18 3.00098Z" fill="white" />
            <path
              d="M0 34.0909H36L18 3L0 34.0909ZM19.6364 29.1818H16.3636V25.9091H19.6364V29.1818ZM19.6364 22.6364H16.3636V16.0909H19.6364V22.6364Z"
              fill="var(--color-status-warning)"
            />
          </svg>
          <!-- info1の場合 -->
          <svg
            width="36"
            height="36"
            viewBox="0 0 36 36"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <circle cx="18" cy="18" r="18" fill="white" />
            <path
              d="M18 0C8.064 0 0 8.064 0 18C0 27.936 8.064 36 18 36C27.936 36 36 27.936 36 18C36 8.064 27.936 0 18 0ZM19.8 27H16.2V16.2H19.8V27ZM19.8 12.6H16.2V9H19.8V12.6Z"
              fill="var(--color-button-normal)"
            />
          </svg>
          <!-- info2の場合 -->
          <svg
            width="36"
            height="36"
            viewBox="0 0 36 36"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <circle cx="18" cy="18" r="18" fill="var(--color-mono-clear)" />
            <path
              d="M18 0C8.064 0 0 8.064 0 18C0 27.936 8.064 36 18 36C27.936 36 36 27.936 36 18C36 8.064 27.936 0 18 0ZM19.8 27H16.2V16.2H19.8V27ZM19.8 12.6H16.2V9H19.8V12.6Z"
              fill="var(--color-mono-reverse)"
            />
          </svg>
        </span>

        <Icon />
        {{ title }}
      </p>
      <p class="description">
        {{ description }}
      </p>
    </div>
    <div class="buttonWrapper">
      <BasicButton
        v-if="secondaryButtonLabel"
        type="secondary"
        :label="secondaryButtonLabel"
        :onClick="onClickSecondary"
      ></BasicButton>
      <BasicButton
        v-if="primariyButtonLabel"
        type="primary"
        :label="primariyButtonLabel"
        :onClick="onClickPrimary"
      ></BasicButton>
    </div>
  </div>
</template>
<style lang="scss" scoped>
.notificationBanner {
  padding: 24px;
  border-style: solid;
  border-width: 3px;
  border-radius: 12px;
}
</style>
