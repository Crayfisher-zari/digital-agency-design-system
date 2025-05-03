<script setup lang="ts">
import { LinkTag, useLink } from "../composables/useLinkComponent";
import Icon from "./Icon.vue";
import iconExternal from "@/assets/images/icon_external.svg";

type Props = {
  /** タイトル */
  title: string;
  /** 日付 */
  date?: string;
  /** バナー文言 */
  description: string;
  /** クリック時、およびボタンのリンク先 */
  url?: string;
  /** 外部リンクかどうか */
  isExternal?: boolean;
  /** リンク種別 */
  linkTag?: LinkTag;
  /** ボタンのラベル */
  buttonLabel?: string;
};
const props = defineProps<Props>();

const { LinkComponent } = useLink({
  tag: props.linkTag,
});
</script>
<template>
  <div class="emergencyBannerWrapper">
    <div class="emergencyBanner">
      <h2 class="title">{{ title }}</h2>
      <p v-if="date" class="date">
        {{ date }}
      </p>
      <p class="description">
        {{ description }}
      </p>
      <slot></slot>
      <div class="buttonContainer">
        <LinkComponent
          v-if="url && buttonLabel"
          :href="url"
          :target="isExternal ? '_blank' : undefined"
          class="buttonWrapper"
        >
          <div class="button custom medium">
            <span class="labelText">
              {{ buttonLabel }}
              <span v-if="isExternal" class="iconWrapper">
                <Icon
                  :iconSrc="iconExternal"
                  :width="16"
                  :height="16"
                  color="var(--color-text-onFill)"
                />
              </span>
            </span>
          </div>
        </LinkComponent>
      </div>
    </div>
  </div>
</template>
<style lang="scss" scoped>
@use "@/assets/style/utils/utils.scss" as *;
@use "./styles/basicButtonStyle";

.emergencyBanner {
  display: block;
  padding: 32px;
  background-color: #fff;
  border: 6px solid var(--color-border-alert2);
  transition: background-color var(--base-duration) var(--easing-out-expo);
}

.title {
  font-size: pxToRem(24);
  font-weight: var(--weight-bold);
  line-height: 1.5;
  letter-spacing: 0.02em;

  @include mediaQueryDown {
    font-size: pxToRem(20);
  }
}

.date {
  margin-top: 8px;
  font-size: pxToRem(16);
  line-height: 1.7;
  color: var(--color-text-body);
  letter-spacing: 0.02em;
}

.description {
  margin-top: 16px;
  font-size: pxToRem(20);
  line-height: 1.5;
  color: var(--color-text-body);
  letter-spacing: 0.02em;

  @include mediaQueryDown {
    font-size: pxToRem(16);
    line-height: 1.7;
  }
}

.buttonContainer {
  display: flex;
  justify-content: center;
  margin-top: 28px;
}

.buttonWrapper {
  display: flex;
  justify-content: center;
  width: max-content;
  text-decoration: none;
}

.button {
  &::before {
    position: absolute;
    z-index: -1;
    display: block;
    width: 100%;
    height: 100%;
    min-height: 44px;
    content: "";
    border-radius: 8px;
    outline: 4px solid var(--color-status-alert);
    outline-offset: 4px;
    transition: outline-color var(--base-duration) var(--easing-out-expo);
  }

  &.custom {
    color: var(--color-text-onFill);
    background-color: var(--color-status-alert);
    border: none;

    &:hover {
      color: var(--color-text-onFill);
      background-color: var(--color-status-alert-hover);

      &::before {
        outline-color: var(--color-status-alert-hover);
      }
    }
  }
}
</style>
