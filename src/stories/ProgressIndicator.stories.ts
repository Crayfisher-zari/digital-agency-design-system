import type { Meta, StoryObj } from "@storybook/vue3";
import ProgressIndicator from "../components/ProgressIndicator.vue";

const meta = {
  title: "プログレスインジケーター",
  component: ProgressIndicator,
  tags: ["autodocs"],
  argTypes: {
    style: {
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
    style: "spinner",
    label: "ラベル",
    isOverlay: false,
  },
} satisfies Meta<typeof ProgressIndicator>;
export default meta;
type Story = StoryObj<typeof meta>;

export const Base: Story = {
  style: "spinner",
  label: "ラベル",
  isOverlay: false,
};
