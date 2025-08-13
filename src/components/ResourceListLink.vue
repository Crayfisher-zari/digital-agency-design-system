<script lang="ts" setup>
import { useLink } from "../composables/useLinkComponent";
import type { LinkTag } from "../composables/useLinkComponent";

type Props = {
  /** リソースリストのスタイル */
  designStyle: "list" | "form";
  /** インタラクション種別 */
  interactionType: "text" | "container";
  /** ラベル */
  label?: string;
  /** リストタイトル */
  title?: string;
  /** サポートテキスト */
  supportText?: string;
  /** サブラベル */
  subLabel?: string;
  /** リンクタグの種別 */
  linkTag?: LinkTag;
  /** リンク先 */
  to: string;
};
const props = withDefaults(defineProps<Props>(), {
  designStyle: "list",
  interactionType: "container",
  label: undefined,
  title: undefined,
  supportText: undefined,
  subLabel: undefined,
  linkTag: "auto",
});

const { LinkComponent } = useLink({ tag: props.linkTag });
</script>
<template>
  <div
    class="resourceListWrapper"
    v-if="interactionType === 'container'"
    :class="[designStyle, interactionType]"
  >
    <div class="resourceListContainer" :to="to" :class="[designStyle]">
      <LinkComponent class="resourceList hoverArea link">
        <div v-if="$slots.frontIcon" class="frontIconWrapper">
          <slot name="frontIcon"></slot>
        </div>
        <div>
          <p v-if="label" class="label">{{ label }}</p>
          <p v-if="title" class="title">{{ title }}</p>
          <p v-if="supportText" class="supportText">{{ supportText }}</p>
        </div>
        <div v-if="subLabel" class="subLabelWrapper">
          <p class="subLabel">{{ subLabel }}</p>
        </div>
      </LinkComponent>
      <div v-if="$slots.endIcon" class="endIconWrapper">
        <slot name="endIcon"></slot>
      </div>
    </div>
  </div>
  <div
    class="resourceListWrapper"
    v-else
    :class="[designStyle, interactionType]"
  >
    <div class="resourceListContainer link" :class="[designStyle]">
      <div class="resourceList">
        <div v-if="$slots.frontIcon" class="frontIconWrapper">
          <slot name="frontIcon"></slot>
        </div>
        <div>
          <p v-if="label" class="label">{{ label }}</p>
          <LinkComponent v-if="title" class="title" :to="to">{{
            title
          }}</LinkComponent>
          <p v-if="supportText" class="supportText">{{ supportText }}</p>
        </div>
        <div v-if="subLabel" class="subLabelWrapper">
          <p class="subLabel">{{ subLabel }}</p>
        </div>
      </div>
      <div v-if="$slots.endIcon" class="endIconWrapper">
        <slot name="endIcon"></slot>
      </div>
    </div>
  </div>
</template>
<style scoped>
@import "./styles/resourceListStyle.css";

.link {
  text-decoration: none;

  &:focus-visible {
    outline: 4px solid var(--color-text-body);
    box-shadow: inset 0 0 2px 2px var(--color-focus);

    &::after {
      border-color: transparent !important;
    }
  }
}

.title {
  text-decoration: underline;
}

.container .link {
  &:hover {
    .title {
      text-decoration: underline;
      text-decoration-thickness: 4px;
    }
  }
}

.text .title {
  color: var(--color-text-link);

  &:hover {
    text-decoration: underline;
    text-decoration-thickness: 4px;
  }

  &:focus-visible {
    background-color: var(--color-focus);
    border-radius: 4px;
    outline: 4px solid var(--color-text-body);
  }
}
</style>
