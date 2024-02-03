import type { Meta, StoryObj } from "@storybook/vue3";
import TextAreaInput from "../components/TextAreaInput.vue";
const meta = {
  title: "TextArea",
  component: TextAreaInput,
  tags: ["autodocs"],
  argTypes: {
    label: { control: "text" },
    placeHolder: { control: "text" },
    supportText: { control: "text" },
    errorText: { control: "text" },
    isRequired: {
      control: "boolean",
    },
    isValid: {
      control: "boolean",
    },
    maxCount: {
      control: "number",
    },
    isDisabled: {
      control: "boolean",
    },
  },
  args: {
    label: "お問い合わせ詳細",
    supportText: "できる限りくわしくお書きください",
    isRequired: false,
    isValid: true,
    maxCount: 256,
  },
} satisfies Meta<typeof TextAreaInput>;

export default meta;
type Story = StoryObj<typeof meta>;

export const base: Story = {
  args: {
    label: "お問い合わせ詳細",
    supportText: "できる限りくわしくお書きください",
    isRequired: false,
    isValid: true,
    maxCount: 256,
  },
};
