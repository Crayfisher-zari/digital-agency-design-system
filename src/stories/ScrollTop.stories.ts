import type { Meta, StoryObj } from "@storybook/vue3";
import ScrollTop from "../components/ScrollTop.vue";

const meta = {
  title: "スクロールトップボタン",
  component: ScrollTop,
  tags: ["autodocs"],
  argTypes: {},
  args: {},
} satisfies Meta<typeof ScrollTop>;
export default meta;
type Story = StoryObj<typeof meta>;

/**
 * 基本
 */
export const Base: Story = {};
