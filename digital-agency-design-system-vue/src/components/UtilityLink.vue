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
  <LinkComponent :to="url"><slot></slot></LinkComponent>
</template>
<style lang="scss" scoped>
a {
  font-size: 14px;
  color: inherit;
  text-decoration: underline;
}
</style>
