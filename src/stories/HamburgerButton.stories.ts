import type { Meta, StoryObj } from "@storybook/vue3";
import HamburgerButton from "../components/HamburgerButton.vue";

const meta = {
  title: "ハンバーガーメニューボタン",
  component: HamburgerButton,
  tags: ["autodocs"],
  argTypes: {
    type: {
      control: "radio",
      options: ["vertical", "horizontal"],
    },
    modelValue: {
      type: "boolean",
    },
  },
  args: {
    type: "vertical",
    modelValue: false,
  },
} satisfies Meta<typeof HamburgerButton>;
export default meta;
type Story = StoryObj<typeof meta>;

export const base: Story = {};
