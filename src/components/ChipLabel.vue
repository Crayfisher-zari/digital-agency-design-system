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
    | "lime"
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
  /** チップの角丸の大きさです */
  borderRadius?: "none" | "small" | "rounded";
};

const props = withDefaults(defineProps<Props>(), {
  color: "gray",
  type: "textOnly",
  borderRadius: "small",
});

const colorClassName = computed(() => {
  if (props.customColor) {
    return "customColor";
  }
  return props.color;
});
</script>

<template>
  <div
    class="chipLabel"
    :class="[props.type, colorClassName, `borderRadius-${props.borderRadius}`]"
  >
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
  --active-color: currentcolor;

  display: inline-flex;
  gap: 4px;
  align-items: center;
  padding: 4px 8px;
  font-size: 14px;
  line-height: 1.2;
  color: var(--active-color);
  border: 1px solid transparent;
  border-radius: 8px;

  &.gray {
    --active-color: var(--color-grey-700);

    &.outlinedWithFill {
      background-color: var(--color-grey-50);
    }
  }

  &.blue {
    --active-color: var(--color-blue-700);

    &.outlinedWithFill {
      background-color: var(--color-blue-50);
    }
  }

  &.lightBlue {
    --active-color: var(--color-light-blue-800);

    &.outlinedWithFill {
      background-color: var(--color-light-blue-50);
    }
  }

  &.cyan {
    --active-color: var(--color-cyan-900);

    &.outlinedWithFill {
      background-color: var(--color-cyan-50);
    }
  }

  &.green {
    --active-color: var(--color-green-800);

    &.outlinedWithFill {
      background-color: var(--color-green-50);
    }
  }

  &.lime {
    --active-color: var(--color-lime-900);

    &.outlinedWithFill {
      background-color: var(--color-lime-50);
    }
  }

  &.yellow {
    --active-color: var(--color-yellow-1000);

    &.outlinedWithFill {
      background-color: var(--color-yellow-50);
    }
  }

  &.orange {
    --active-color: var(--color-orange-900);

    &.outlinedWithFill {
      background-color: var(--color-orange-50);
    }
  }

  &.red {
    --active-color: var(--color-red-900);

    &.outlinedWithFill {
      background-color: var(--color-red-50);
    }
  }

  &.magenta {
    --active-color: var(--color-magenta-800);

    &.outlinedWithFill {
      background-color: var(--color-magenta-50);
    }
  }

  &.purple {
    --active-color: var(--color-purple-800);

    &.outlinedWithFill {
      background-color: var(--color-purple-50);
    }
  }

  &.customColor {
    --active-color: v-bind(customcolor);

    &.outlinedWithFill {
      background-color: v-bind(custombackgroundcolor);
    }

    &.fill {
      background-color: v-bind(custombackgroundcolor);
    }
  }

  &.outlined {
    border-color: var(--active-color);
  }

  &.outlinedWithFill {
    border-color: var(--active-color);
  }

  &.fillOnly {
    color: white;
    background-color: var(--active-color);
    border-color: var(--active-color);
  }

  &.borderRadius-none {
    border-radius: 0;
  }

  &.borderRadius-small {
    border-radius: 4px;
  }

  &.borderRadius-rounded {
    border-radius: 9999px;
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
