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

export const Success: Story = {
  args: {
    title: "登録手続きは全て完了しました",
    description:
      "ダミーテキストは、デザインの作成時に使用される仮の文章です。ダミーテキストは、デザインの作成時に使用される仮の文章です。ダミーテキストは、デザインの作成時に使用される仮の文章です。",
    type: "success",
  },
};

export const Error: Story = {
  args: {
    title: "操作を完了できませんでした",
    description:
      "ダミーテキストは、デザインの作成時に使用される仮の文章です。ダミーテキストは、デザインの作成時に使用される仮の文章です。ダミーテキストは、デザインの作成時に使用される仮の文章です。",
    type: "error",
  },
};

export const WithButton: Story = {
  args: {
    title: "登録期間が延長されました",
    description:
      "ダミーテキストは、デザインの作成時に使用される仮の文章です。ダミーテキストは、デザインの作成時に使用される仮の文章です。ダミーテキストは、デザインの作成時に使用される仮の文章です。",
    type: "info1",
    primariyButtonLabel: "延長期間を確認して承諾する",
  },
};
