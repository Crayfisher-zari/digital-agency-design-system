<script lang="ts" setup>
import Icon from "./Icon.vue";
import iconClose from "@/assets/images/icon_close.svg";
const emits = defineEmits<{
  delete: [e: Event];
}>();

const handleClick = (e: Event) => {
  emits("delete", e);
};
</script>

<template>
  <div class="chipTag">
    <span class="frontIcon" v-if="$slots.frontIcon">
      <slot name="frontIcon" />
    </span>
    <span class="label">
      <slot name="default" />
    </span>
    <button class="deleteButton" @click="handleClick">
      <Icon :iconSrc="iconClose" :width="10" :height="10" />
    </button>
  </div>
</template>

<style scoped>
.chipTag {
  display: inline-flex;
  column-gap: 8px;
  align-items: center;
  padding: 4px 8px;
  color: var(--color-text-link);
  background-color: var(--color-button-tertiary-hover);
  border: 1px solid currentcolor;
  border-radius: 9999px;
}

.frontIcon {
  display: inline-flex;
  align-items: center;
  justify-content: center;
}

.deleteButton {
  position: relative;
  display: grid;
  place-items: center;
  width: 24px;
  height: 24px;
  padding: 0;
  margin: 0;
  color: inherit;
  appearance: none;
  cursor: pointer;
  background-color: transparent;
  border: none;

  &::after {
    position: absolute;
    top: 2px;
    left: 2px;
    width: 20px;
    height: 20px;
    content: "";
    border: 1px solid currentcolor;
    border-radius: 10px;
  }
}

.label {
  font-size: 1rem;
  line-height: 1;
}
</style>
