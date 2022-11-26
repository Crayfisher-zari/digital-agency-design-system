import {
  defineProps,
  useSlots,
  h,
  defineComponent,
  ref,
  RendererOptions,
  RendererNode,
  SetupContext,
} from "vue";
type Props = {
  /** Hxにあたる見出しレベルです */
  headingLevel: 1 | 2 | 3 | 4 | 5 | 6;
  /** デザイン上のサイズレベルです */
  saizeLevel?: 1 | 2 | 3 | 4 | 5 | 6;
};
const props = defineProps<Props>();

const Heading = (props: Props, context: SetupContext) => {
  console.log(props, context.slots);
  if (!context.slots.default) {
    return;
  }
  return h(
    `h${props.headingLevel}`,
    { headingLevel: 1 },
    context.slots.default()
  );
};

// export default defineComponent({
//   render(props: RendererNode,context) {
//     console.log(context.slots)
//     return h(`h${props.headingLevel}`, {}, props.$slots.default());
//   },
//   props: { headingLevel: Number },
//   name: "Heading",
// });

export default Heading;
