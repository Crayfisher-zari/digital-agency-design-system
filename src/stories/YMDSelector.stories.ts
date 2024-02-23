import type { Meta, StoryObj } from "@storybook/vue3";
import YMDSelctor from "../components/YMDSelector.vue";

const meta = {
  title: "年月日セレクター",
  component: YMDSelctor,
  tags: ["autodocs"],
  argTypes: {
    year: {
      control: "number",
    },
    month: {
      control: "number",
    },
    day: {
      control: "number",
    },
    defaultYear: {
      control: "number",
    },
    yearList: {
      control: "object",
      options: [2020, 2021, 2022, 2023, 2024],
    },
    label: {
      control: "text",
    },
    supportText: {
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
  args: {},
} satisfies Meta<typeof YMDSelctor>;
export default meta;
type Story = StoryObj<typeof meta>;

export const Base: Story = {
  args: {
    year: null,
    month: null,
    day: null,
    label: "生年月日",
    supportText: "月を選択してから日を選んでください",
  },
};
