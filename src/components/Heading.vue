<script lang="ts" setup>
import { computed } from "vue";

type Size = 64 | 57 | 45 | 36 | 32 | 28 | 24 | 20 | 18 | 16;

type Props = {
  /** Hxにあたる見出しレベルです */
  headingLevel: 1 | 2 | 3 | 4 | 5 | 6;
  /**
   * デザイン上のサイズレベルです
   * @deprecated `size` プロパティを使用してください。
   */
  designLevel?: "XXL" | "XL" | "L" | "M" | "S" | "XS" | "XXS";
  /** ショルダー文言です */
  shoulder?: string;
  /** デザイン上のサイズレベルです */
  size?: Size;
  /** チップがあるかどうかです */
  hasChip?: boolean;
  /** チップの色です */
  chipColor?: string;
};

const props = withDefaults(defineProps<Props>(), {
  size: 20,
  shoulder: undefined,
  hasChip: false,
  chipColor: "var(--color-button-normal)",
});

// デフォルトの見出しサイズです
const defaultHeadingLevelSize = {
  1: "L",
  2: "M",
  3: "S",
  4: "XS",
  5: "XXS",
  6: "XXS",
} as const;

/**
 * 見出しのコンポーネントです。
 * propsとしてheadingLevelとsizeを受け取ります。
 * 運用上の柔軟性をもたせるため、HTMLの見出しレベルと見た目の大きさを独立して指定できます。
 * sizeを指定しない場合は見出しレベルに沿ったスタイルが適用されます。
 */
const computedDesignLevel = computed(() => {
  if (props.size) return props.size;
  if (props.designLevel) return props.designLevel; // Back-compat
  return defaultHeadingLevelSize[props.headingLevel];
});
</script>

<template>
  <component
    :is="`h${headingLevel}`"
    :class="`heading heading${computedDesignLevel} ${hasChip ? 'hasChip' : ''} ${$slots.frontIcon ? 'hasFrontIcon' : ''}`"
  >
    <span v-if="$slots.frontIcon" class="frontIcon">
      <slot name="frontIcon" />
    </span>
    <span v-if="shoulder" class="shoulder">{{ shoulder }}</span>
    <span class="headingText">
      <slot />
    </span>
  </component>
</template>

<style lang="scss" scoped>
@use "@/assets/style/utils/utils.scss" as *;

.shoulder,
.headingText {
  display: block;
  font-weight: var(--weight-bold);
}

.heading64 {
  .headingText {
    font-size: pxToRem(64);
    line-height: 1.4;
  }

  .shoulder {
    font-size: pxToRem(28);
    line-height: 1.5;
    letter-spacing: 0.01em;
  }
}

.heading57 {
  .headingText {
    font-size: pxToRem(57);
    line-height: 1.4;
  }

  .shoulder {
    font-size: pxToRem(24);
    line-height: 1.5;
    letter-spacing: 0.02em;
  }
}

.heading45 {
  .headingText {
    font-size: pxToRem(45);
    line-height: 1.4;
  }

  .shoulder {
    font-size: pxToRem(22);
    line-height: 1.5;
    letter-spacing: 0.02em;
  }
}

.heading36 {
  .headingText {
    font-size: pxToRem(36);
    line-height: 1.4;
    letter-spacing: 0.01em;
  }

  .shoulder {
    font-size: pxToRem(20);
    line-height: 1.6;
    letter-spacing: 0.02em;
  }
}

.heading32 {
  .headingText {
    font-size: pxToRem(32);
    line-height: 1.5;
    letter-spacing: 0.01em;
  }

  .shoulder {
    font-size: pxToRem(18);
    line-height: 1.6;
    letter-spacing: 0.02em;
  }
}

.heading28 {
  .headingText {
    font-size: pxToRem(28);
    line-height: 1.5;
    letter-spacing: 0.01em;
  }

  .shoulder {
    font-size: pxToRem(16);
    line-height: 1.7;
    letter-spacing: 0.02em;
  }
}

.heading24 {
  .headingText {
    font-size: pxToRem(24);
    line-height: 1.5;
    letter-spacing: 0.02em;
  }

  .shoulder {
    font-size: pxToRem(16);
    line-height: 1.7;
    letter-spacing: 0.02em;
  }
}

.heading20 {
  .shoulder {
    display: none;
  }

  .headingText {
    font-size: pxToRem(20);
    line-height: 1.5;
    letter-spacing: 0.02em;
  }
}

.heading18 {
  .shoulder {
    display: none;
  }

  .headingText {
    font-size: pxToRem(18);
    line-height: 1.6;
    letter-spacing: 0.02em;
  }
}

.heading16 {
  .shoulder {
    display: none;
  }

  .headingText {
    font-size: pxToRem(16);
    line-height: 1.7;
    letter-spacing: 0.02em;
  }
}

/* チップ付きの見出し */
.hasChip {
  position: relative;

  &.heading::before {
    position: absolute;
    top: 50%;
    left: 0;
    display: block;
    height: 75%;
    content: "";
    border-inline-start-color: v-bind(chipcolor);
    border-inline-start-style: solid;
    transform: translateY(-50%);
  }

  &.heading64 {
    padding-inline-start: 54.5px;

    &::before {
      border-inline-start-width: 22.5px;
    }
  }

  &.heading57 {
    padding-inline-start: 48px;

    &::before {
      border-inline-start-width: 20px;
    }
  }

  &.heading45 {
    padding-inline-start: 39.75px;

    &::before {
      border-inline-start-width: 15.75px;
    }
  }

  &.heading36 {
    padding-inline-start: 32.5px;

    &::before {
      border-inline-start-width: 12.5px;
    }
  }

  &.heading32 {
    padding-inline-start: 28px;

    &::before {
      border-inline-start-width: 12px;
    }
  }

  &.heading28 {
    padding-inline-start: 24.5px;

    &::before {
      border-inline-start-width: 10.5px;
    }
  }

  &.heading24 {
    padding-inline-start: 21px;

    &::before {
      border-inline-start-width: 9px;
    }
  }

  &.heading20 {
    padding-inline-start: 17.5px;

    &::before {
      border-inline-start-width: 7.5px;
    }
  }

  &.heading18 {
    padding-inline-start: 15.25px;

    &::before {
      border-inline-start-width: 7.25px;
    }
  }

  &.heading16 {
    padding-inline-start: 14.75px;

    &::before {
      border-inline-start-width: 6.75px;
    }
  }
}

/* フロントアイコン付きの見出し */
.hasFrontIcon {
  display: flex;
  align-items: center;

  &.heading64 {
    column-gap: 24px;
  }

  &.heading57 {
    column-gap: 20px;
  }

  &.heading45 {
    column-gap: 16px;
  }

  &.heading36 {
    column-gap: 16px;
  }

  &.heading32 {
    column-gap: 16px;
  }

  &.heading28 {
    column-gap: 12px;
  }

  &.heading24 {
    column-gap: 8px;
  }

  &.heading20 {
    column-gap: 8px;
  }

  &.heading18 {
    column-gap: 8px;
  }

  &.heading16 {
    column-gap: 8px;
  }
}

/* 古いデザインレベル */
.headingXXL {
  padding: 64px 0 24px;
  font-size: pxToRem(57);
  font-weight: var(--weight-normal);
  line-height: 1.4;
  letter-spacing: 0.04em;
}

.headingXL {
  padding: 64px 0 24px;
  font-size: pxToRem(45);
  font-weight: var(--weight-normal);
  line-height: 1.4;
  letter-spacing: 0.04em;
}

.headingL {
  padding: 64px 0 24px;
  font-size: pxToRem(36);
  font-weight: var(--weight-normal);
  line-height: 1.4;
  letter-spacing: 0.04em;

  @include mediaQueryDown {
    font-size: pxToRem(32);
    font-weight: var(--weight-medium);
    line-height: 1.5;
  }
}

.headingM {
  padding: 64px 0 24px;
  font-size: pxToRem(32);
  font-weight: var(--weight-normal);
  line-height: 1.5;
  letter-spacing: 0.04em;

  @include mediaQueryDown {
    font-size: pxToRem(28);
    font-weight: var(--weight-medium);
    line-height: 1.5;
  }
}

.headingS {
  padding: 40px 0 24px;
  font-size: pxToRem(28);
  font-weight: var(--weight-normal);
  line-height: 1.5;
  letter-spacing: 0.04em;

  @include mediaQueryDown {
    font-size: pxToRem(24);
    font-weight: var(--weight-medium);
    line-height: 1.5;
  }
}

.headingXS {
  padding: 40px 0 16px;
  font-size: pxToRem(24);
  font-weight: var(--weight-normal);
  line-height: 1.5;
  letter-spacing: 0.04em;

  @include mediaQueryDown {
    font-size: pxToRem(20);
    font-weight: var(--weight-medium);
    line-height: 1.5;
  }
}

.headingXXS {
  padding: 40px 0 16px;
  font-size: pxToRem(20);
  font-weight: var(--weight-normal);
  line-height: 1.5;
  letter-spacing: 0.04em;

  @include mediaQueryDown {
    font-size: pxToRem(16);
    font-weight: var(--weight-medium);
    line-height: 1.7;
  }
}
</style>
