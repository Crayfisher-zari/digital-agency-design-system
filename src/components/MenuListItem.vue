<script setup lang="ts">
import Icon from "./Icon.vue";
import iconArrow from "@/assets/images/icon_arrow_right.svg";
import iconExternal from "@/assets/images/icon_external.svg";
import { useLink, LinkTag } from "../composables/useLinkComponent";

type Props = {
  size?: "regular" | "small";
  type?: "standard" | "boxed" | "thumbnail";
  hasArrow?: boolean;
  tag?: LinkTag | "button" | "span";
  target?: "_blank";
  isCurrent?: boolean;
  description?: string;
  isUnderlined?: boolean;
};

const props = withDefaults(defineProps<Props>(), {
  size: "regular",
  type: "standard",
  hasArrow: false,
  tag: "auto",
  target: undefined,
  description: undefined,
  isCurrent: false,
  isUnderlined: true,
});

const { LinkComponent } = useLink();

const emit = defineEmits<{
  click: [event: Event];
}>();

const handleClick = (event: Event) => {
  if (props.tag === "button") {
    emit("click", event);
  }
};
</script>

<template>
  <component
    :is="tag === 'button' ? 'button' : tag === 'span' ? 'span' : LinkComponent"
    :class="[size, type, { isCurrent }, { isUnderlined }]"
    :target="target"
    class="menuListItem"
    :aria-current="isCurrent ? 'page' : undefined"
    @click="handleClick"
  >
    <span class="iconForward">
      <slot name="icon" />
    </span>
    <span class="text">
      <slot />
      <span v-if="target === '_blank'" class="blank">
        <Icon
          :iconSrc="iconExternal"
          :width="12"
          :height="12"
          color="currentColor"
        />
      </span>
    </span>
    <span v-if="$slots.description" class="description"
      ><slot name="description"
    /></span>
    <span class="iconBackward">
      <slot v-if="$slots.iconBackward" name="iconBackward" />
      <Icon
        v-else-if="hasArrow"
        :iconSrc="iconArrow"
        :width="16"
        :height="16"
        color="currentColor"
      />
    </span>
  </component>
</template>

<style scoped>
.menuListItem {
  display: flex;
  column-gap: 8px;
  align-items: center;
  justify-content: flex-start;
  width: 100%;
  padding: 10px 12px 10px 14px;
  color: var(--color-text-body);
  text-decoration: none;
  cursor: pointer;
  background-color: transparent;
  border: 2px solid transparent;
  transition:
    background-color var(--base-duration) var(--easing-out-expo),
    border-color var(--base-duration) var(--easing-out-expo);

  &:hover {
    background-color: var(--color-background-tertiary);
    border-color: var(--color-background-tertiary);

    .text {
      text-decoration: underline;
    }
  }

  &:focus-visible {
    background-color: var(--color-focus);
    border-color: var(--color-focus) !important;
    outline: 4px solid var(--color-text-body);
  }

  &[aria-current="page"] {
    font-weight: var(--weight-bold);
    color: var(--color-text-link);
    background-color: var(--color-button-tertiary-active);
    border-color: var(--color-button-tertiary-active);
  }

  &.small {
    padding: 8px 12px;

    .text {
      font-size: calc(14rem / 16);
      line-height: 1.2;
    }
  }

  &.standard {
    border-radius: 8px;
  }

  &.boxed {
    height: 44px;
    padding: 10px 6px 10px 10px;
    border-width: 6px;
    outline-offset: -4px;

    &.small {
      height: 36px;
    }
  }

  &.thumbnail {
    display: grid;
    grid-template: "icon text iconBackward" 1fr "icon description iconBackward" 1fr / auto 1fr auto;
    column-gap: 16px;
    padding: 6px 10px 6px 14px;
    border-width: 6px;
    outline-offset: -4px;

    .iconForward {
      grid-area: icon;
    }

    .text {
      grid-area: text;
      font-size: 1rem;
    }

    .description {
      grid-area: description;
      opacity: 0.6;
    }

    .iconBackward {
      grid-area: iconBackward;
    }

    &.isUnderlined {
      padding: 6px 10px 9px 14px;
      border-bottom-color: var(--color-border-dark-divider);
      border-bottom-width: 1px;

      &:focus-visible {
        border-bottom-width: 6px;
      }
    }
  }
}

.text {
  font-size: 1rem;
  line-height: 1.3;
}

.blank {
  margin-left: 4px;
}

.iconForward {
  display: flex;
}

.iconBackward {
  display: flex;
  align-items: center;
  height: 16px;
  margin-left: auto;
  line-height: 1.2;
}
</style>
