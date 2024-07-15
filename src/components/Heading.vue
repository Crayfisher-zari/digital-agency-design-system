<script lang="ts">
import { h, SetupContext } from "vue";
type Props = {
  /** Hxにあたる見出しレベルです */
  headingLevel: 1 | 2 | 3 | 4 | 5 | 6;
  /** デザイン上のサイズレベルです */
  designLevel?: "XXL" | "XL" | "L" | "M" | "S" | "XS" | "XXS";
};

// デフォルトの見出しサイズです
const defaultHeadingLevelSize = {
  1: "L",
  2: "M",
  3: "S",
  4: "XS",
  5: "XXS",
  6: "XXS",
};

/**
 * 見出しのコンポーネントです。
 * propsとしてheadingLevelとdesignLevelを受け取ります。
 * 運用上の柔軟性をもたせるため、HTMLの見出しレベルと見た目の大きさを独立して指定できます。
 * desginLevelを指定しない場合は見出しレベルに沿ったスタイルが適用されます。
 */
const Heading = (props: Props, context: SetupContext) => {
  const child = context.slots.default ? context.slots.default() : "";
  const designLevel =
    props.designLevel ?? defaultHeadingLevelSize[props.headingLevel];
  return h(`h${props.headingLevel}`, { class: `heading${designLevel}` }, child);
};

export default Heading;
</script>
<style lang="scss" scoped>
@use "@/assets/style/utils/utils.scss" as *;

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
