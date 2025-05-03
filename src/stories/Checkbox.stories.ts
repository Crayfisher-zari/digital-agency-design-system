import type { Meta, StoryObj } from "@storybook/vue3";
import Checkbox from "../components/Checkbox.vue";

const meta = {
  title: "チェックボックス（単体）",
  component: Checkbox,
  tags: ["autodocs"],
  argTypes: {
    size: {
      control: "select",
      options: ["small", "medium", "large"],
    },
    label: {
      control: "text",
    },
    value: {
      control: "text",
    },
    isValid: {
      control: "boolean",
    },
    isDisabled: {
      control: "boolean",
    },
  },
  args: {
    label: "ラベル",
    value: "はい",
    modelValue: false,
  },
} as Meta<typeof Checkbox>;
type Story = StoryObj<typeof meta>;

export default meta;

export const Base: Story = {
  args: {
    label: "ラベル",
    value: "はい",
    modelValue: false,
  },
};
