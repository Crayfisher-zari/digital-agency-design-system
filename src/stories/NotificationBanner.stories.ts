import type { Meta, StoryObj } from "@storybook/vue3";
import NotificationBanner from "../components/NotificationBanner.vue";

const meta = {
  title: "ノーティフィケーションバナー",
  component: NotificationBanner,
  tags: ["autodocs"],
  argTypes: {
    style: {
      control: "radio",
      options: ["standard", "colorChip"],
    },
    type: {
      control: "selector",
      options: ["success", "error", "warning", "info1", "info2"],
    },
    title: {
      control: "text",
    },
    description: {
      control: "text",
    },
    customIconSrc: {
      control: "text",
    },
    date: {
      control: "text",
    },
    url: {
      control: "text",
    },
    primaryButtonLabel: {
      control: "text",
    },
    secondaryButtonLabe: {
      control: "text",
    },
  },
  args: {
    style: "standard",
    title: "登録手続きは全て完了しました",
    type: "success",
  },
} satisfies Meta<typeof NotificationBanner>;
export default meta;
type Story = StoryObj<typeof meta>;

export const Base: Story = {
  args: {
    title: "登録手続きは全て完了しました",
  },
};
