<script setup lang="ts">
import { getRandomString } from "../utils/getRandomString";

type Props = {
  iconSrc: string;
  width: number;
  height: number;
  color: string;
  role?: string;
  ariaLabel?: string;
  ariaHidden?: boolean;
};
withDefaults(defineProps<Props>(), {
  role: undefined,
  ariaLabel: undefined,
  ariaHidden: undefined,
});
const id = getRandomString();
</script>
<template>
  <svg
    :width="width"
    :height="height"
    :role="role"
    :aria-label="ariaLabel"
    :aria-hidden="ariaHidden"
  >
    <mask :id="`mask${id}`">
      <image :href="iconSrc" :width="width" :height="height" />
    </mask>
    <rect
      :fill="color"
      :width="width"
      :height="height"
      :mask="`url(#mask${id})`"
    ></rect>
  </svg>
</template>
<style scoped lang="scss">
svg {
  pointer-events: none;
}

image,
rect {
  width: 100%;
  height: 100%;
}
</style>
