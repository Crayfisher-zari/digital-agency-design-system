import type { Meta, StoryObj } from "@storybook/vue3";
import Divider from "../components/Divider.vue";

const meta = {
  title: "Divider",
  component: Divider,
  tags: ["autodocs"],
  argTypes: {
    weight: {
      control: "radio",
      options: [1, 2, 3, 4],
    },
    color: {
      control: "radio",
      options: ["default", "medium", "dark"],
    },
    borderStyle: {
      control: "radio",
      options: ["solid", "dash"],
    },
  },
  args: {
    weight: 2,
    color: "default",
    borderStyle: "solid",
  },
} satisfies Meta<typeof Divider>;
export default meta;
type Story = StoryObj<typeof meta>;

export const Base: Story = {
  args: {
    weight: 2,
    color: "default",
    borderStyle: "solid",
  },
};

export const Dash: Story = {
  args: {
    weight: 2,
    color: "default",
    borderStyle: "dash",
  },
};

export const MediumColor: Story = {
  args: {
    weight: 2,
    color: "medium",
    borderStyle: "solid",
  },
};

export const Bold: Story = {
  args: {
    weight: 4,
    color: "default",
    borderStyle: "solid",
  },
};

export const Thin: Story = {
  args: {
    weight: 1,
    color: "default",
    borderStyle: "solid",
  },
};