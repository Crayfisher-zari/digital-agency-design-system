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
};

const props = defineProps<Props>();

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
  <component :is="`h${headingLevel}`" :class="`heading${computedDesignLevel}`">
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
