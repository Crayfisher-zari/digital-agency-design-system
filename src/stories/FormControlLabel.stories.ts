import type { Meta, StoryObj } from "@storybook/vue3";
import FormControlLabel from "../components/FormControlLabel.vue";

const meta = {
  title: "フォームコントロールラベル",
  component: FormControlLabel,
  tags: ["autodocs"],
  argTypes: {
    label: { control: "text" },
    size: {
      control: "radio",
      options: ["large", "medium", "small"],
    },
    supportText: { control: "text" },
    isRequired: { control: "boolean" },
    isValid: { control: "boolean" },
    isDisabled: { control: "boolean" },
  },
  args: {
    label: "ラベル",
    supportText: "サポートテキスト",
    size: "medium",
    isRequired: false,
    isValid: true,
    isDisabled: false,
  },
} satisfies Meta<typeof FormControlLabel>;

export default meta;
type Story = StoryObj<typeof meta>;

/**
 * デフォルトサイズ（ミディアム）
 */
export const Base: Story = {
  args: {
    label: "ラベル",
  },
};

/**
 * ラージサイズ
 */
export const Large: Story = {
  args: {
    label: "ラベル",

    size: "large",
  },
};

/**
 * スモールサイズ
 */
export const Small: Story = {
  args: {
    label: "ラベル",
    size: "small",
  },
};
