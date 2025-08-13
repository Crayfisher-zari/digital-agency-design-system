<script lang="ts" setup>
type Props = {
  /** デザインスタイル */
  designStyle?: "list" | "form";
  /** インタラクションタイプ */
  interactionType?: "container" | "text";
  /** ラベル */
  label?: string;
  /** リストタイトル */
  title?: string;
  /** クリック時の処理 */
  onClick: () => void;
  /** サポートテキスト */
  supportText?: string;
  /** サブラベル */
  subLabel?: string;
};
withDefaults(defineProps<Props>(), {
  label: undefined,
  title: undefined,
  supportText: undefined,
  subLabel: undefined,
});
</script>
<template>
  <div
    v-if="interactionType === 'container'"
    class="resourceListWrapper"
    :class="[designStyle, interactionType]"
  >
    <div class="resourceListContainer" :class="[designStyle]">
      <button class="resourceList button hoverArea" type="button">
        <div v-if="$slots.frontIcon" class="frontIconWrapper">
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
      </button>
      <div v-if="$slots.endIcon" class="endIconWrapper">
        <slot name="endIcon"></slot>
      </div>
    </div>
  </div>
  <div
    v-else
    class="resourceListWrapper"
    :class="[designStyle, interactionType]"
  >
    <div class="resourceListContainer" :class="[designStyle]">
      <div class="resourceList button" type="button" @click="onClick">
        <div v-if="$slots.frontIcon" class="frontIconWrapper">
          <slot name="frontIcon"></slot>
        </div>
        <div>
          <p v-if="label" class="label">{{ label }}</p>
          <button v-if="title" class="title" @click="onClick">
            {{ title }}
          </button>
          <p v-if="supportText" class="supportText">{{ supportText }}</p>
        </div>
        <div v-if="subLabel" class="subLabelWrapper">
          <p class="subLabel">{{ subLabel }}</p>
        </div>
      </div>
      <div v-if="$slots.endIcon" class="endIconWrapper">
        <slot name="endIcon"></slot>
      </div>
    </div>
  </div>
</template>
<style scoped>
@import "./styles/resourceListStyle.css";

.container .button {
  &:hover {
    .title {
      text-decoration: underline;
      text-decoration-thickness: 4px;
    }
  }
}

.title {
  color: var(--color-text-link);
  text-decoration: underline;

  &:hover {
    text-decoration: underline;
    text-decoration-thickness: 4px;
  }

  &:focus-visible {
    background-color: var(--color-focus);
    border-radius: 4px;
    outline: 4px solid var(--color-text-body);
  }
}
</style>
