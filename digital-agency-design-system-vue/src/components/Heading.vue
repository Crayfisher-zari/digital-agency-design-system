<script lang="ts">
import { h, SetupContext } from "vue";
type Props = {
  /** Hxにあたる見出しレベルです */
  headingLevel: 1 | 2 | 3 | 4 | 5 | 6;
  /** デザイン上のサイズレベルです */
  designLevel?: 1 | 2 | 3 | 4 | 5 | 6;
};

/**
 * 見出しのコンポーネントです。
 * propsとしてheadingLevelとdesignLevelを受け取ります。
 * 運用上の柔軟性をもたせるため、HTMLの見出しレベルと見た目の大きさを独立して指定できます。
 * desginLevelを指定しない場合は見出しレベルに沿ったスタイルが適用されます。
 */
const Heading = (props: Props, context: SetupContext) => {
  const child = context.slots.default ? context.slots.default() : "";
  const designLevel = props.designLevel ?? props.headingLevel;
  return h(`h${props.headingLevel}`, { class: `heading${designLevel}` }, child);
};

export default Heading;
</script>
<style lang="scss">
@use "@/assets/style/utils/utils.scss" as *;

.heading1 {
  padding: 64px 0 24px;
  font-size: 2.625rem;
  font-weight: bold;
  line-height: 1.5;
  @include mediaQueryDown {
    font-size: 1.625rem;
  }
}

.heading2 {
  padding: 64px 0 24px;
  font-size: 2rem;
  font-weight: bold;
  line-height: 1.5;

  @include mediaQueryDown {
    font-size: 1.5rem;
  }
}

.heading3 {
  padding: 40px 0 24px;
  font-size: 1.625rem;
  font-weight: bold;
  line-height: 1.5;

  @include mediaQueryDown {
    font-size: 1.375rem;
  }
}

.heading4 {
  padding: 40px 0 16px;
  font-size: 1.375rem;
  font-weight: bold;
  line-height: 1.5;

  @include mediaQueryDown {
    font-size: 1.25rem;
  }
}

.heading5 {
  padding: 40px 0 16px;
  font-size: 1.25rem;
  font-weight: bold;
  line-height: 1.5;

  @include mediaQueryDown {
    font-size: 1.125rem;
  }
}

.heading6 {
  padding: 24px 0 16px;
  font-size: 1.125rem;
  font-weight: bold;
  line-height: 1.5;

  @include mediaQueryDown {
    font-size: 1rem;
  }
}
</style>
