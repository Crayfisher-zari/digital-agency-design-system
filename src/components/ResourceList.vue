<script lang="ts" setup>
import { computed } from "vue";
import { useLink } from "../composables/useLinkComponent";
import type { LinkTag } from "../composables/useLinkComponent";

type Props = {
  type: "button" | "checkbox" | "radio" | "link";
  label?: string;
  title?: string;
  supportText?: string;
  subLabel?: string;
  linkTag?: LinkTag;
};
const props = withDefaults(defineProps<Props>(), {
  label: undefined,
  title: undefined,
  supportText: undefined,
  subLabel: undefined,
  linkTag: "auto",
});

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
    <div v-if="$slots.frontIcon">
      <slot name="frontIcon"></slot>
    </div>
    <div>
      <p v-if="label" class="label">{{ label }}</p>
      <p v-if="title" class="title">{{ title }}</p>
      <p v-if="supportText" class="supportText">{{ supportText }}</p>
      <p>{{ subLabel }}</p>
    </div>
    <div v-if="$slots.endIcon">
      <slot name="endIcon"></slot>
    </div>
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
