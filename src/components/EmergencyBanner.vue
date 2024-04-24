<script setup lang="ts">
import { computed } from "vue";
import { LinkTag, useLink } from "../composables/useLinkComponent";
import BasicButton from "./BasicButton.vue";

type Props = {
  /** タイトル */
  title: string;
  /** 日付 */
  date?: string;
  /** バナー文言 */
  description: string;
  /** クリック時、およびボタンのリンク先 */
  url?: string;
  /** リンク種別 */
  linkTag?: LinkTag;
  /** ボタンのラベル */
  buttonLabel?: string;
};
const props = defineProps<Props>();

const { LinkComponent } = useLink({ tag: props.linkTag });

// ラッパー要素のタグ
const wrapperTag = computed(() => {
  if (props.url !== undefined) {
    return LinkComponent;
  } else {
    return "div";
  }
});

const alertButtonColor = {
  backgroundColor: "var(--color-status-alert)",
  labelColor: "var(--color-text-onFill)",
  hoverBackgroundColor: "var(--color-status-alert-hover)",
  hoverLabelColor: "var(--color-text-onFill)",
};
</script>
<template>
  <div class="emergencyBannerWrapper" :class="{ withLink: url !== undefined }">
    <component :is="wrapperTag" class="emergencyBanner">
      <h2 class="title">{{ title }}</h2>
      <p v-if="date" class="date">
        {{ date }}
      </p>
      <p class="description">
        {{ description }}
      </p>
      <slot></slot>
      <div v-if="url && buttonLabel" class="buttonWrapper">
        <BasicButton
          type="custom"
          :label="buttonLabel"
          :customColor="alertButtonColor"
        />
      </div>
    </component>
  </div>
</template>
<style lang="scss" scoped>
@use "@/assets/style/utils/utils.scss" as *;

.emergencyBanner {
  display: block;
  padding: 32px;
  text-decoration: none;
  background-color: #fff;
  border: 6px solid var(--color-border-alert);
  transition: background-color var(--base-duration) var(--easing-out-expo);
}

.title {
  font-size: pxToRem(24);
  font-weight: var(--weight-bold);
  line-height: 1.16;
  color: var(--color-status-alert);
  letter-spacing: 0.04em;

  @include mediaQueryDown {
    font-size: pxToRem(20);
    line-height: 1.5;
  }
}

.date {
  margin-top: 8px;
  font-size: pxToRem(16);
  line-height: 1.7;
  color: var(--color-text-body);
  letter-spacing: 0.04em;
}

.description {
  margin-top: 16px;
  font-size: pxToRem(20);
  line-height: 1.5;
  color: var(--color-text-body);
  letter-spacing: 0.04em;

  @include mediaQueryDown {
    font-size: pxToRem(16);
    line-height: 1.7;
  }
}

.withLink {
  .title {
    text-decoration: underline;
  }

  &:hover {
    .emergencyBanner {
      background-color: #f8f8fb;
    }

    .date,
    .description {
      text-decoration: underline;
    }
  }
}

.buttonWrapper {
  display: flex;
  justify-content: center;
  margin-top: 28px;
}
</style>
