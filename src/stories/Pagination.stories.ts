import type { Meta, StoryObj } from "@storybook/vue3";
import Pagination from "../components/Pagination.vue";

const meta = {
  title: "ページネーション",
  component: Pagination,
  tags: ["autodocs"],
  argTypes: {
    type: {
      control: "radio",
      options: ["simple", "basic"],
    },
    current: {
      control: "number",
    },
    min: {
      control: "number",
    },
    max: {
      control: "number",
    },
  },
  args: {
    type: "basic",
    current: 995,
    min: 1,
    max: 999,
  },
} satisfies Meta<typeof Pagination>;
export default meta;
type Story = StoryObj<typeof meta>;

export const base: Story = {
  args: {
    type: "basic",
    current: 995,
    min: 1,
    max: 999,
  },
};
