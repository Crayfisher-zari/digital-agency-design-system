import type { Meta, StoryObj } from "@storybook/vue3";
import RadioButton from "../components/RadioButton.vue";

const meta = {
  title: "RadioButton",
  component: RadioButton,
  tags: ["autodocs"],
  argTypes: {
    radioStyle: {
      control: "radio",
      options: ["default", "tile"],
    },
    radioValue: {
      control: "text",
    },
    subText: { control: "text" },
    isValid: { control: "boolean" },
    isDisabled: { control: "boolean" },
  },
} as Meta<typeof RadioButton>;
type Story = StoryObj<typeof meta>;

export default meta;

export const Base: Story = {
  args: {
    label: "ラベル",
  },
};
