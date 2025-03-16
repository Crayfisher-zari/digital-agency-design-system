import type { Meta, StoryObj } from "@storybook/vue3";
import Accordion from "../components/Accordion.vue";

const meta = {
  title: "アコーディオン",
  component: Accordion,
  tags: ["autodocs"],
  argTypes: {
    summary: {
      control: "text",
    },
    details: {
      control: "text",
    },
  },
  args: {
    summary: "アコーディオンタイトル",
    details: "中身",
  },
} satisfies Meta<typeof Accordion>;
export default meta;
type Story = StoryObj<typeof meta>;

export const Base: Story = {
  args: {
    summary: "ダミーテキストはどのような場合に使用されますか。",
    details:
      "これはダミーテキストです。ダミーテキストは、デザインやレイアウトの作成時に使用される仮の文章です。ダミーテキストを使用すると、デザインの全体像を評価したり、テキストの配置や長さを確認したりすることができます。ダミーテキストは実際の文章ではないので、内容には意味がありません。",
  },
};
