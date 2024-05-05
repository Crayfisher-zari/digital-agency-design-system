import type { Meta, StoryObj } from "@storybook/vue3";
import ResourceListLink from "../components/ResourceListLink.vue";

const meta = {
  title: "リソースリスト（リンク）",
  component: ResourceListLink,
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
    title: "クライアントコンピューター001",
    supportText: "Windows 11",
  },
} satisfies Meta<typeof ResourceListLink>;
export default meta;
type Story = StoryObj<typeof meta>;

/**
 * リソースリスト（リンク）
 * リソースリストにリンク機能を持つです。
 */
export const Base: Story = {
  args: {
    title: "クライアントコンピューター001",
    supportText: "Windows 11",
    to: "#",
    linkTag: "a",
  },
};
