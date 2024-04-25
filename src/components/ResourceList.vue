<script lang="ts" setup>
import { computed } from "vue";
import { useLink } from "../composables/useLinkComponent";
import type { LinkTag } from "../composables/useLinkComponent";

type Props = {
  type: "button" | "checkbox" | "radio" | "link";
  label: string;
  title: string;
  supportText: string;
  linkTag?: LinkTag;
};
const props = defineProps<Props>();

const { LinkComponent } = useLink({ tag: props.linkTag });

const wrapperTag = computed(() => {
  const type = props.type;
  switch (type) {
    case "button":
      return "button";
    case "checkbox":
      return "label";
    case "radio":
      return "label";
    case "link":
      return LinkComponent;
    default:
      return "div";
  }
});
</script>
<template>
  <component
    :is="wrapperTag"
    class="resourceList"
    :type="type === 'button' ? 'button' : undefined"
  >
    <p>{{ label }}</p>
    <p>{{ title }}</p>
    <p>{{ supportText }}</p>
  </component>
</template>
<style lang="scss" scoped>
@use "@/assets/style/utils/utils.scss" as *;

.resourceList {
  display: block;
  width: 100%;
  text-align: left;
  appearance: none;
  background: none;
  border: none;
}
</style>
