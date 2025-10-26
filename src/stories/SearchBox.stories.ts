import type { Meta, StoryObj } from "@storybook/vue3";
import SearchBox from "../components/SearchBox.vue";

const meta = {
  title: "検索ボックス",
  component: SearchBox,
  tags: ["autodocs"],
  argTypes: {
    searchWord: { control: "text" },
  },
  args: {
    searchWord: "",
  },
} satisfies Meta<typeof SearchBox>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Base: Story = {
  args: {
    searchWord: "",
  },
};

export const WithText: Story = {
  args: {
    searchWord: "デジタル庁",
  },
};


