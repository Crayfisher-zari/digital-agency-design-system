<script setup lang="ts">
import { computed } from "vue";
import { LinkTag, useLink } from "../composables/useLinkComponent";
import Icon from "./Icon.vue";
import iconCheck from "@/assets/images/icon_step_checked.svg";
import iconEdit from "@/assets/images/icon_step_editing.svg";
import iconError from "@/assets/images/icon_step_error.svg";

type Props = {
  step: number;
  linkTag?: LinkTag;
  url?: string;
  size?: "small" | "medium";
  state: "default" | "skipped" | "reached" | "completed" | "editing" | "error";
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

const stateIcon = computed(() => {
  switch (props.state) {
    case "completed":
      return iconCheck;
    case "editing":
      return iconEdit;
    case "error":
      return iconError;
    default:
      return null;
  }
});

const hasMask = computed(() => {
  return stateIcon.value === iconEdit || stateIcon.value == iconError;
});

const iconColor = computed(() => {
  if (props.state === "completed") {
    return "var(--color-text-description)";
  } else {
    return "currentColor";
  }
});
</script>

<template>
  <div class="stepNavigationItem" :class="[size, state]">
    <div class="stepNumberCircleWrapper" :class="[{ hasMask: hasMask }]">
      <component :is="tag" :to="url" class="stepNumberCircle">
        {{ step }}
      </component>
    </div>
    <div class="iconWrapper" :class="[state]">
      <Icon
        v-if="stateIcon"
        :iconSrc="stateIcon"
        :width="24"
        :height="24"
        :color="iconColor"
      />
    </div>
  </div>
</template>

<style scoped>
.stepNavigationItem {
  position: relative;
  width: 44px;
  height: 44px;
  color: var(--color-text-secondary);

  &.small {
    width: 32px;
    height: 32px;
  }

  &.error {
    color: var(--color-text-alert);
  }
}

.stepNumberCircleWrapper {
  position: relative;
  width: 44px;
  height: 44px;

  &.hasMask {
    mask-image:
      linear-gradient(to bottom, black, black),
      linear-gradient(to bottom, black, black);
    mask-repeat: no-repeat, no-repeat;
    mask-position:
      0 0,
      top 0 right 0;
    mask-size:
      100% 100%,
      16px 16px;
    mask-composite: exclude;
  }
}

.stepNumberCircle {
  display: grid;
  place-items: center;
  width: 44px;
  height: 44px;
  font-size: 1.25rem;
  font-weight: var(--weight-bold);
  line-height: 1;
  border: 2px solid currentcolor;
  border-radius: 50%;
}

.iconWrapper {
  position: absolute;
  top: -8px;
  right: -8px;
  width: 24px;
  height: 24px;

  &.completed {
    background-color: var(--color-background-checked);
  }
}
</style>
