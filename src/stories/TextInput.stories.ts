import type { Meta, StoryObj } from "@storybook/vue3";
import TextInput from "../components/TextInput.vue";

const meta = {
  title: "TextInput",
  component: TextInput,
  tags: ["autodocs"],
  argTypes: {
    label: { control: "text" },
  },
  args: {
    label: "ラベル",
    type:"text"
  },
} satisfies Meta<typeof TextInput>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Base: Story = {
  args: {
    label: "ラベル",
    type:"text"
  },
};
