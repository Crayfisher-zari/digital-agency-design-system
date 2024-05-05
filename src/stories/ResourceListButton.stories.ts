import type { Meta, StoryObj } from "@storybook/vue3";
import ResourceListButton from "../components/ResourceListButton.vue";

const meta = {
  title: "リソースリスト（ボタン）",
  component: ResourceListButton,
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
} satisfies Meta<typeof ResourceListButton>;
export default meta;
type Story = StoryObj<typeof meta>;

/**
 * リソースリスト（ボタン）
 * リソースリストにクリックの処理があるものです
 */
export const Base: Story = {
  args: {
    label: "ラベル",
    title: "リストタイトル",
    supportText: "サポートテキスト",
    subLabel: "サブラベル",
    onClick: () => {},
  },
};
