import type { Meta, StoryObj } from "@storybook/vue3";
import ResourceList from "../components/ResourceList.vue";

const meta = {
  title: "リソースリスト",
  component: ResourceList,
  tags: ["autodocs"],
  argTypes: {
    type: {
      control: "select",
      options: ["button", "checkbox", "radio", "link"],
    },
    label: {
      control: "text",
    },
    title: {
      control: "text",
    },
    supportText: {
      control: "text",
    },
    subLabel: {
      control: "text",
    },
  },
  args: {
    type: "button",
    label: "ラベル",
    title: "リストタイトル",
    supportText: "サポートテキスト",
    subLabel: "サブラベル",
  },
} satisfies Meta<typeof ResourceList>;
export default meta;
type Story = StoryObj<typeof meta>;

export const Base: Story = {
  args: {
    label: "ラベル",
    title: "リストタイトル",
    supportText: "サポートテキスト",
    subLabel: "サブラベル",
  },
};
