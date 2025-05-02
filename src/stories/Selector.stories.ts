import type { Meta, StoryObj } from "@storybook/vue3";
import Selector from "../components/Selector.vue";

const meta = {
  title: "セレクター",
  component: Selector,
  tags: ["autodocs"],
  argTypes: {
    size: { control: "radio", options: ["large", "medium", "small"] },
    label: { control: "text" },
    supportText: { control: "text" },
    errorText: { control: "text" },
    isRequired: { control: "boolean" },
    isValid: { control: "boolean" },
    isDisabled: { control: "boolean" },
  },
  args: {
    label: "ラベル",
    options: [
      { label: "選択肢1", value: "選択肢1の値" },
      { label: "選択肢2", value: "選択肢2の値" },
      { label: "選択肢3", value: "選択肢3の値" },
    ],
    supportText: "サポートテキスト",
    errorText: "エラーテキスト",
    isRequired: false,
    isValid: true,
    isDisabled: false,
  },
} satisfies Meta<typeof Selector>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Base: Story = {
  args: {
    modelValue: "",
    label: "ラベル",
    options: [
      { label: "選択肢1", value: "選択肢1の値" },
      { label: "選択肢2", value: "選択肢2の値" },
      { label: "選択肢3", value: "選択肢3の値" },
    ],
  },
};
