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
.headingXXL,
.headingXL,
.headingL {
  padding: 64px 0 24px;
}

.headingM {
  padding: 64px 0 24px;
}

.headingS {
  padding: 40px 0 24px;
}

.headingXS {
  padding: 40px 0 16px;
}

.headingXXS {
  padding: 40px 0 16px;
}

h6.headingXXS {
  padding: 24px 0 16px;
}
</style>
