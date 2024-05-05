import type { Meta, StoryObj } from "@storybook/vue3";
import ResourceListDefault from "../components/ResourceListDefault.vue";

const meta = {
  title: "リソースリスト（デフォルト）",
  component: ResourceListDefault,
  tags: ["autodocs"],
  argTypes: {
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
    label: "ラベル",
    title: "リストタイトル",
    supportText: "サポートテキスト",
    subLabel: "サブラベル",
  },
} satisfies Meta<typeof ResourceListDefault>;
export default meta;
type Story = StoryObj<typeof meta>;

/**
 * リソースリスト（デフォルト）
 * リソースリストのデフォルトのものです。このコンポーネント自体にアクションは持ちません
 * （エンドアイコンにボタンを渡すなどは可能）
 */
export const Base: Story = {
  args: {
    label: "ラベル",
    title: "リストタイトル",
    supportText: "サポートテキスト",
    subLabel: "サブラベル",
  },
};
