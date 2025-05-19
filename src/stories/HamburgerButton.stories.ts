import type { Meta, StoryObj } from "@storybook/vue3";
import HamburgerButton from "../components/HamburgerButton.vue";

const meta = {
  title: "ハンバーガーメニューボタン",
  component: HamburgerButton,
  tags: ["autodocs"],
  argTypes: {
    type: {
      control: "radio",
      options: ["default", "compact"],
    },
    modelValue: {
      type: "boolean",
    },
    lang: {
      control: "radio",
      options: ["ja", "en"],
    },
  },
  args: {
    type: "default",
    modelValue: false,
    lang: "ja",
  },
} satisfies Meta<typeof HamburgerButton>;
export default meta;
type Story = StoryObj<typeof meta>;

export const Base: Story = {};
