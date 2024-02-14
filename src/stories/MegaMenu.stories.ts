import type { Meta, StoryObj } from "@storybook/vue3";
import MegaMenuTitle from "../components/MegaMenuTitle.vue";

const meta = {
  title: "メガメニュータイトル",
  component: MegaMenuTitle,
  tags: ["autodocs"],
  argTypes: {
    title: {
      control: "text",
    },
    text: {
      control: "text",
    },
    linkText: {
      control: "text",
    },
    linkUrl: {
      control: "text",
    },
  },
  args: {
    title: "メガメニュー",
    text: "サブタイトルはここに記入します",
    linkText: "2階層目へのリンク",
    linkUrl: "#!",
  },
} satisfies Meta<typeof MegaMenuTitle>;
export default meta;
type Story = StoryObj<typeof meta>;

export const Base: Story = {
  args: {
    title: "メガメニュー",
    text: "サブタイトルはここに記入します",
    linkText: "2階層目へのリンク",
    linkUrl: "#!",
  },
};
