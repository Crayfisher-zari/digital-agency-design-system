<script lang="ts" setup>
import spinner from "@/assets/images/icon_indicator_spinner.svg";
import spinnerSmall from "@/assets/images/icon_indicator_spinner_small.svg";
import linear from "@/assets/images/icon_indicator_linear.svg";
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
      <div class="linear">
        <img :src="linear" class="linearInner" alt="" width="112" height="4" />
        <!-- <svg
          width="112"
          height="4"
          viewBox="0 0 112 4"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M0 2C0 0.895431 0.895431 0 2 0H110C111.105 0 112 0.895431 112 2C112 3.10457 111.105 4 110 4H2C0.89543 4 0 3.10457 0 2Z"
            fill="#00118F"
          />
          <path
            d="M0 0H112H0ZM112 4H0H112ZM1 4C-0.104569 4 -1 3.10457 -1 2C-1 0.895431 -0.104569 0 1 0H2C1.44772 0 1 0.895431 1 2C1 3.10457 1.44772 4 2 4H1ZM111 0C112.105 0 113 0.895431 113 2C113 3.10457 112.105 4 111 4H110C110.552 4 111 3.10457 111 2C111 0.895431 110.552 0 110 0H111Z"
            fill="white"
          />
        </svg> -->
      </div>
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

.linear {
  position: relative;
  width: 100%;
  height: 4px;
  background-color: var(--color-blue-500);
  border-radius: 2px;
}

.linearInner {
  position: absolute;
  top: 0;
  left: 50%;
}
</style>
