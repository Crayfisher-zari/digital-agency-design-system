<script setup lang="ts">
import { computed } from "vue";
import { LinkTag, useLink } from "../composables/useLinkComponent";

type Props = {
  step: number;
  linkTag?: LinkTag;
  url?: string;
  size?: "small" | "medium";
  state: "default" | "skipped" | "reached" | "completed" |"editing" | "error";
};

const props = withDefaults(defineProps<Props>(), {
  linkTag: undefined,
  size: "medium",
});

const { LinkComponent } = useLink({ tag: props.linkTag });

const tag = computed(() => {
  if (!props.linkTag) {
    return "div";
  } else {
    return LinkComponent;
  }
});
</script>

<template>
  <div class="stepNavigationItem" :class="size">
    <component :is="tag" :to="url" class="stepNumber">
      {{ step }}
    </component>
  </div>
</template>

<style scoped>
.stepNavigationItem {
  display: grid;
  place-items: center;
  width: 44px;
  height: 44px;
  border-radius: 50%;
  border: 2px solid var(--color-text-secondary);
  &.small {
    width: 32px;
    height: 32px;
  }
}
.stepNumber {
  font-size: 1.25rem;
  font-weight: var(--weight-bold);
  line-height: 1;
  color: var(--color-text-secondary);
}
</style>
