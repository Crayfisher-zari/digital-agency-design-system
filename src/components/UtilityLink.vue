<script setup lang="ts">
import Icon from "./Icon.vue";
import externalIcon from "@/assets/images/icon_external.svg";

import { LinkTag, useLink } from "../composables/useLinkComponent";
type Props = {
  linkTag?: LinkTag;
  url?: string;
  iconUrl?: string;
  target?: "_blank";
};
const props = withDefaults(defineProps<Props>(), {
  linkTag: "a",
  url: "/",
  iconUrl: undefined,
  target: undefined,
});
const isExternal = props.target === "_blank";
const { LinkComponent } = useLink({ tag: props.linkTag });
</script>
<template>
  <LinkComponent
    :to="url"
    :class="[{ hasIcon: iconUrl }, { isExternal: isExternal }]"
    :target="target"
  >
    <Icon
      v-if="iconUrl"
      :iconSrc="iconUrl"
      :width="11"
      :height="11"
      color="var(--color-text-body)"
      class="icon"
      :ariaHidden="true"
      role="img" /><slot name="default"></slot
    ><Icon
      v-if="isExternal"
      :iconSrc="externalIcon"
      :width="10"
      :height="10"
      color="var(--color-text-body)"
      class="externalIcon"
      :ariaHidden="true"
      role="img"
  /></LinkComponent>
</template>
<style lang="scss" scoped>
a {
  position: relative;
  font-size: 14px;
  color: inherit;
  text-decoration: underline;
  &:hover{
    text-decoration-thickness: 3px;
  }

  &.hasIcon {
    padding-left: 20px;

    .icon {
      position: absolute;
      top: 6px;
      left: 3px;
    }
  }

  &.isExternal {
    padding-right: 20px;

    .externalIcon {
      position: absolute;
      top: 6px;
      right: 3px;
    }
  }
}
</style>
