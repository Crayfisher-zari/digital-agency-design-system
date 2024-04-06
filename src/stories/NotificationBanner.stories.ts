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
      control: "select",
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
    secondaryButtonLabel: {
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

/**
 * サクセス
 */
export const Success: Story = {
  args: {
    title: "登録手続きは全て完了しました",
    description:
      "ダミーテキストは、デザインの作成時に使用される仮の文章です。ダミーテキストは、デザインの作成時に使用される仮の文章です。ダミーテキストは、デザインの作成時に使用される仮の文章です。",
    type: "success",
    date: "2024年1月1日",
  },
};

/**
 * エラー
 */
export const Error: Story = {
  args: {
    title: "操作を完了できませんでした",
    description:
      "ダミーテキストは、デザインの作成時に使用される仮の文章です。ダミーテキストは、デザインの作成時に使用される仮の文章です。ダミーテキストは、デザインの作成時に使用される仮の文章です。",
    type: "error",
  },
};

/**
 * ワーニング
 */
export const Warning: Story = {
  args: {
    title: "偽SNSアカウントにご注意ください",
    description:
      "ダミーテキストは、デザインの作成時に使用される仮の文章です。ダミーテキストは、デザインの作成時に使用される仮の文章です。ダミーテキストは、デザインの作成時に使用される仮の文章です。",
    type: "warning",
  },
};

/**
 * ボタン付き
 */
export const WithButton: Story = {
  args: {
    title: "登録期間が延長されました",
    description:
      "ダミーテキストは、デザインの作成時に使用される仮の文章です。ダミーテキストは、デザインの作成時に使用される仮の文章です。ダミーテキストは、デザインの作成時に使用される仮の文章です。",
    type: "success",
    primaryButtonLabel: "延長期間を確認して承諾する",
  },
};

/**
 * 2ボタン付き
 */
export const With2Buttons: Story = {
  args: {
    title: "登録期間が延長されました",
    description:
      "ダミーテキストは、デザインの作成時に使用される仮の文章です。ダミーテキストは、デザインの作成時に使用される仮の文章です。ダミーテキストは、デザインの作成時に使用される仮の文章です。",
    type: "success",
    primaryButtonLabel: "延長期間を確認して承諾する",
    secondaryButtonLabel: "期間の変更",
  },
};

/**
 * 閉じるボタン付き
 */
export const HasClose: Story = {
  args: {
    title: "登録期間が延長されました",
    description:
      "ダミーテキストは、デザインの作成時に使用される仮の文章です。ダミーテキストは、デザインの作成時に使用される仮の文章です。ダミーテキストは、デザインの作成時に使用される仮の文章です。",
    type: "info2",
    hasClose: true,
  },
};

/**
 * リンク付き（全体がリンク）
 */
export const HasLink: Story = {
  args: {
    title: "登録期間が延長されました",
    description:
      "ダミーテキストは、デザインの作成時に使用される仮の文章です。ダミーテキストは、デザインの作成時に使用される仮の文章です。ダミーテキストは、デザインの作成時に使用される仮の文章です。",
    type: "info2",
    url: "#!",
  },
};

/**
 * リンク付き（タイトルとボタンがリンク）
 */
export const HasLinkWithButton: Story = {
  args: {
    title: "登録期間が延長されました",
    description:
      "ダミーテキストは、デザインの作成時に使用される仮の文章です。ダミーテキストは、デザインの作成時に使用される仮の文章です。ダミーテキストは、デザインの作成時に使用される仮の文章です。",
    type: "success",
    url: "#!",
    primaryButtonLabel: "延長期間を確認して承諾する",
    onClickPrimary: undefined,
  },
};

/**
 * リンク付き（ボタンなし。全体がリンク）
 */
export const HasLinkWithNoButtons: Story = {
  args: {
    title: "登録期間が延長されました",
    description:
      "ダミーテキストは、デザインの作成時に使用される仮の文章です。ダミーテキストは、デザインの作成時に使用される仮の文章です。ダミーテキストは、デザインの作成時に使用される仮の文章です。",
    type: "success",
    url: "#!",
  },
};
