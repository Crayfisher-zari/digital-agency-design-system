<script setup lang="ts">
import { computed } from "vue";
import { LinkTag, useLink } from "../composables/useLinkComponent";
import BasicButton from "./BasicButton.vue";
import BasicButtonLink from "./BasicButtonLink.vue";

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
  if (props.url !== undefined && props.buttonLabel === undefined) {
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
  <div class="emergencyBannerWrapper">
    <component :is="wrapperTag" class="emergencyBanner">
      <h2 class="title">{{ title }}</h2>
      <p v-if="date" class="date">
        {{ date }}
      </p>
      <p class="description">
        {{ description }}
      </p>
      <slot></slot>
      <div class="buttonWrapper" v-if="url && buttonLabel">
        <BasicButtonLink
          :to="url"
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
  padding: 32px;
  border: 6px solid var(--color-border-alert);
}

.title {
  font-size: pxToRem(24);
  line-height: 1.16;
  letter-spacing: 0.04em;
  font-weight: var(--weight-bold);
  color: var(--color-status-alert);
}

.date {
  font-size: pxToRem(16);
  letter-spacing: 0.04em;
  color: var(--color-text-body);
  margin-top: 4px;
}

.description {
  font-size: pxToRem(20);
  line-height: 1.5;
  letter-spacing: 0.04em;
  color: var(--color-text-body);
  margin-top: 16px;
}

.buttonWrapper{
  margin-top: 28px;
  display: flex;
  justify-content: center;
  
}
</style>
