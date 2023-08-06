<script setup lang="ts">
type Props = {
  iconSrc: string;
  width: number;
  height: number;
  color: string;
};
defineProps<Props>();
</script>
<template>
  <svg :width="width" :height="height">
    <mask id="mask">
      <image :href="iconSrc" :width="width" :height="height" />
    </mask>
    <rect
      :fill="color"
      :width="width"
      :height="height"
      mask="url(#mask)"
    ></rect>
  </svg>
</template>
