import type { Meta, StoryObj } from "@storybook/vue3";

import BasicButton from "../components/BasicButton.vue";

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories
const meta = {
  title: "BasicButton",
  component: BasicButton,
  // This component will have an automatically generated docsPage entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ["autodocs"],
  argTypes: {
    label: { control: "text" },
    type: {
      control: "select",
      options: ["primary", "secondary", "tertiary"],
    },
  },
  args: { label: "ボタン", type: "primary" }, // default value
} satisfies Meta<typeof BasicButton>;

export default meta;
type Story = StoryObj<typeof meta>;
/*
 *👇 Render functions are a framework specific feature to allow you control on how the component renders.
 * See https://storybook.js.org/docs/api/csf
 * to learn how to use render functions.
 */
export const Primary: Story = {
  args: {
    label: "ボタン",
    type: "primary",
  },
};

export const Secondary: Story = {
  args: {
    label: "ボタン",
    type: "secondary",
  },
};

export const Tertiary: Story = {
  args: {
    label: "ボタン",
    type: "tertiary",
  },
};

