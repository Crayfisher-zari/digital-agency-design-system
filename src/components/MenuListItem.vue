<script setup lang="ts">
import Icon from "./Icon.vue";
import iconArrow from "@/assets/images/icon_arrow_right.svg";
import iconExternal from "@/assets/images/icon_external.svg";
import { useLink, LinkTag } from "../composables/useLinkComponent";

type Props = {
  size?: "regular" | "small";
  type?: "standard" | "boxed" | "thumbnail";
  tag?: LinkTag;
  target?: "_blank";
  isCurrent?: boolean;
  description?: string;
  isUnderlined?: boolean;
};

withDefaults(defineProps<Props>(), {
  size: "regular",
  type: "standard",
  tag: "auto",
  target: undefined,
  isCurrent: false,
  isUnderlined: true,
});

const { LinkComponent } = useLink();
</script>

<template>
  <LinkComponent
    :class="[size, type, { isCurrent }, { isUnderlined }]"
    :tag="tag"
    :target="target"
    class="menuListItem"
    :aria-current="isCurrent ? 'page' : undefined"
  >
    <span class="iconForward">
      <slot name="icon" />
    </span>
    <span class="text">
      <slot />
      <span class="blank" v-if="target === '_blank'">
        <Icon
          :iconSrc="iconExternal"
          :width="12"
          :height="12"
          color="currentColor"
        />
      </span>
    </span>
    <span class="description" v-if="$slots.description"
      ><slot name="description"
    /></span>
    <span class="iconBackward">
      <Icon
        v-if="type === 'standard'"
        :iconSrc="iconArrow"
        :width="16"
        :height="16"
        color="currentColor"
      />
      <slot name="iconBackward" v-else />
    </span>
  </LinkComponent>
</template>

<style scoped>
.menuListItem {
  display: flex;
  column-gap: 8px;
  align-items: center;
  justify-content: flex-start;
  padding: 10px 10px 10px 14px;
  color: var(--color-text-body);
  text-decoration: none;
  border: 2px solid transparent;
  transition: background-color var(--base-duration) var(--easing-out-expo);

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
