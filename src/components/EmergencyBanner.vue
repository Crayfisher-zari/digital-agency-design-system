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
      <div class="buttonWrapper" v-if="url && buttonLabel">
        <BasicButtonLink :to="url"></BasicButtonLink>
      </div>
    </component>
  </div>
</template>
<style lang="scss" scoped></style>
