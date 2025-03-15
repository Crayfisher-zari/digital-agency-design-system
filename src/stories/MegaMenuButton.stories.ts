import type { Meta, StoryObj } from "@storybook/vue3";
import MegaMenuButton from "../components/MegaMenuButton.vue";

const meta = {
  title: "メガメニューボタン",
  component: MegaMenuButton,
  tags: ["autodocs"],
  argTypes: {
    label: {
      control: "text",
    },
  },
  args: {
    label: "メガメニュー",
  },
} satisfies Meta<typeof MegaMenuButton>;
export default meta;
type Story = StoryObj<typeof meta>;

export const Base: Story = {
  args: {
    label: "メガメニュー",
  },
};
