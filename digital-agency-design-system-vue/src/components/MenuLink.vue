<script setup lang="ts">
import { LinkTag, useLink } from "../composables/useLinkComponent";
type Props = {
  linkTag?: LinkTag;
  url?: string;
};
const props = withDefaults(defineProps<Props>(), {
  linkTag: "a",
  url: "/",
});
const { LinkComponent } = useLink({ tag: props.linkTag });
</script>
<template>
  <LinkComponent :to="url"> <slot name="default"></slot></LinkComponent>
</template>
<style lang="scss" scoped>
@use "@/assets/style/utils/utils.scss" as *;

a {
  display: inline-block;
  min-height: 50px;
  padding-top: 11px;
  padding-bottom: 13px;
  font-size: pxToRem(16);
  font-weight: var(--weight-bold);
  color: inherit;
  text-decoration-line: none;

  &:hover {
    border-bottom: 2px solid var(--color-text-body);
  }
}
</style>
