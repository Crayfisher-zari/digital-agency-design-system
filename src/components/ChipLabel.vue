<script lang="ts" setup>
import { computed } from "vue";

type Props = {
  /** チップの色です */
  color?:
    | "gray"
    | "blue"
    | "lightBlue"
    | "cyan"
    | "green"
    | "line"
    | "yellow"
    | "orange"
    | "red"
    | "magenta"
    | "purple";
  /** チップのタイプです */
  type?: "textOnly" | "outlined" | "outlinedWithFill" | "fillOnly";
  /** チップのカスタム色です */
  customColor?: string;
  /** チップのカスタム背景色です */
  customBackgroundColor?: string;
};

const props = withDefaults(defineProps<Props>(), {
  color: "gray",
  type: "textOnly",
});

const colorClassName = computed(() => {
  if (props.customColor) {
    return "customColor";
  }
  return props.color;
});
</script>

<template>
  <div class="chipLabel" :class="[props.type, colorClassName]">
    <span class="frontIcon" v-if="$slots.frontIcon">
      <slot name="frontIcon" />
    </span>
    <span class="label">
      <slot name="default" />
    </span>
  </div>
</template>

<style scoped>
.chipLabel {
  display: inline-flex;
  gap: 4px;
  align-items: center;
  padding: 4px 8px;
  font-size: 14px;
  line-height: 1.2;
  border: 1px solid transparent;
  border-radius: 8px;

  &.customColor {
    color: v-bind(customcolor);

    &.fill {
      background-color: v-bind(custombackgroundcolor);
    }
  }

  &.outlined {
    border-color: currentcolor;
  }

  &.outlinedWithFill {
    border-color: currentcolor;
  }

  &.fillOnly {
    color: white;
    background-color: currentcolor;
  }
}

.frontIcon {
  display: inline-block;
  width: 24px;
  height: 24px;
}

.label {
  font-size: 1rem;
  line-height: 1;
}
</style>
