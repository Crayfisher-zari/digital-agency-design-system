import type { Meta, StoryObj } from "@storybook/vue3";
import ProgressIndicator from "../components/ProgressIndicator.vue";
import { computed } from "vue";

const meta = {
  title: "プログレスインジケーター",
  component: ProgressIndicator,
  tags: ["autodocs"],
  argTypes: {
    type: {
      control: "radio",
      options: ["spinner", "spinner-small", "linear"],
    },
    label: {
      control: "text",
    },
    labelPosition: {
      control: "radio",
      options: ["stacked", "inline"],
    },
    isOverlay: {
      control: "boolean",
    },
  },
  args: {
    type: "spinner",
    label: "ラベル",
    isOverlay: false,
  },
} satisfies Meta<typeof ProgressIndicator>;
export default meta;
type Story = StoryObj<typeof meta>;

/**
 * スピナー
 */
export const Spinner: Story = {
  args: {
    type: "spinner",
    label: "ラベル",
  },
};

/**
 * スピナー（小）
 */
export const SpinnerSmall: Story = {
  args: {
    type: "spinner-small",
    label: "ラベル",
  },
};

/**
 * リニアー
 */
export const Linear: Story = {
  args: {
    type: "linear",
    label: "ラベル",
  },
};

/**
 * オーバーレイ
 */
export const Overlay: Story = {
  args: {
    type: "spinner",
    label: "ラベル",
    isOverlay: true,
  },
  render: (args) => ({
    components: { ProgressIndicator },
    setup() {
      const props = computed(() => args);
      return { props: props.value };
    },
    template: `
      <div style="background-color:rgba(0 0 0 /0.4);display:grid;place-items:center;padding:80px 24px;">
        <ProgressIndicator :type="props.type" :label="props.label" :isOverlay="true" />
      </div>
    `,
  }),
};
