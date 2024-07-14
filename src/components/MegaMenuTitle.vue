<script setup lang="ts">
import { LinkTag, useLink } from "../composables/useLinkComponent";
import iconRight from "@/assets/images/icon_arrow_right.svg";
import Icon from "./Icon.vue";

type Props = {
  /** タイトル */
  title: string;
  /** テキスト */
  text?: string;
  /** リンクのタグ */
  linkTag?: LinkTag;
  /** リンクのテキスト */
  linkText?: string;
  /** リンク先のURL */
  linkUrl?: string;
};
const props = defineProps<Props>();
const { LinkComponent } = useLink({ tag: props.linkTag });
</script>
<template>
  <div>
    <p class="title">{{ title }}</p>
    <p class="text">{{ text }}</p>
    <p class="url">
      <LinkComponent :to="linkUrl"
        >{{ linkText }}
        <Icon
          :iconSrc="iconRight"
          :width="16"
          :height="16"
          color="rgb(0, 23, 193)"
          class="icon"
        ></Icon
      ></LinkComponent>
    </p>
  </div>
</template>
<style scoped lang="scss">
@use "@/assets/style/utils/utils.scss" as *;

.title {
  font-size: pxToRem(28);
  font-weight: var(--weight-bold);
  line-height: 1.5;
  color: var(--color-text-body);
  letter-spacing: 0.04em;
}

.text {
  font-size: pxToRem(16);
  font-weight: var(--weight-normal);
  line-height: 1.7;
  color: var(--color-text-description);
  letter-spacing: 0.04em;
}

.url {
  margin-top: 40px;
  font-size: pxToRem(16);
  line-height: 1.7;
  color: var(--color-text-link);
  letter-spacing: 0.04em;

  a {
    display: inline-flex;
    align-items: center;
  }
}

.icon {
  margin-top: 2px;
}
</style>
