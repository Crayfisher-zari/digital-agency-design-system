import type { Meta, StoryObj } from "@storybook/vue3";
import YMDInput from "../components/YMDInput.vue";

const meta = {
  title: "年月日テキストエリア",
  component: YMDInput,
  tags: ["autodocs"],
  argTypes: {
    size: {
      control: "radio",
      options: ["large", "medium", "small"],
    },
    type: {
      control: "radio",
      options: ["consolidated", "separate"],
    },
    year: {
      control: "text",
    },
    month: {
      control: "text",
    },
    day: {
      control: "text",
    },
    label: {
      control: "text",
    },
    supportText: {
      control: "text",
    },
    errorText: {
      control: "text",
    },
    isRequired: {
      control: "boolean",
    },
    isValid: {
      control: "boolean",
    },
    isDisabled: {
      control: "boolean",
    },
  },
  args: {
    year: "1980",
    month: "1",
    day: "1",
    label: "生年月日",
    supportText: "月を選択してから日を選んでください",
  },
} satisfies Meta<typeof YMDInput>;
export default meta;
type Story = StoryObj<typeof meta>;

export const Base: Story = {
  args: {
    year: "",
    month: "",
    day: "",
    label: "日付",
    supportText: "例：2025年01月20日",
  },
};
