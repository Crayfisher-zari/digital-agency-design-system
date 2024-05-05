<script lang="ts" setup>
import { useLink } from "../composables/useLinkComponent";
import type { LinkTag } from "../composables/useLinkComponent";

type Props = {
  /** ラベル */
  label?: string;
  /** リストタイトル */
  title?: string;
  /** ボタンが非活性状態か。未指定の場合はfalse */
  isDisabled?: boolean;
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
  type: "button",
  label: undefined,
  title: undefined,
  supportText: undefined,
  subLabel: undefined,
  linkTag: "auto",
});

const { LinkComponent } = useLink({ tag: props.linkTag });
</script>
<template>
  <div class="resourceListWrapper">
    <LinkComponent class="resourceList link" :to="to">
      <div v-if="$slots.frontIcon">
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
      <div v-if="$slots.endIcon">
        <slot name="endIcon"></slot>
      </div>
    </LinkComponent>
  </div>
</template>
<style lang="scss" scoped>
@use "@/assets/style/utils/utils.scss" as *;
@use "./styles/resourceListStyle.scss";

.resourceList {
  &.link {
    text-decoration: none;

    .label,
    .supportText {
      text-decoration: none;
    }

    .title {
      color: var(--color-text-link);
      text-decoration: underline;
    }

    &:hover {
      background-color: var(--color-grey-50);

      .title {
        text-decoration: none;
      }
    }
  }
}
</style>
