<script lang="ts" setup>
import spinner from "@/assets/images/icon_spinner.svg";
import spinnerSmall from "@/assets/images/icon_spinner_small.svg";
type Props = {
  style: "spinner" | "spinner-small" | "linear";
  label?: string;
  isOverlay?: boolean;
  labelPosition?: "stacked" | "inline";
};
withDefaults(defineProps<Props>(), {
  label: undefined,
  isOverlay: false,
  labelPosition: "stacked",
});
</script>
<template>
  <div>
    <div v-if="style === 'spinner'">
      <img :src="spinner" alt="" width="48" height="48" />
    </div>
    <div v-if="style === 'spinner-small'">
      <img :src="spinnerSmall" alt="" width="24" height="24" />
    </div>
    <div v-if="style === 'linear'">
      <div class="linear"></div>
    </div>
    <p class="label">{{ label }}</p>
  </div>
</template>
<style lang="scss" scoped>
@use "@/assets/style/utils/utils.scss" as *;

.label {
  font-size: pxToRem(16);
  line-height: 1.7;
  color: var(--color-text-placeHolder);
}
</style>
