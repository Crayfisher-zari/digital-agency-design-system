import type { Meta, StoryObj } from "@storybook/vue3";
import Pankuzu from "../components/Pankuzu.vue";

const meta = {
  title: "パンくずリスト",
  component: Pankuzu,
  tags: ["autodocs"],
  argTypes: {
    list: {
      control: "object",
    },
  },
  args: {
    list: [
      { text: "ホーム", url: "#!" },
      { text: "政策", url: "#!" },
      { text: "審議会・研究会", url: "#!" },
      { text: "デジタル庁における入札制限等の在り方に関する検討会" },
    ],
  },
} satisfies Meta<typeof Pankuzu>;
export default meta;
type Story = StoryObj<typeof meta>;

export const Base: Story = {
  args: {
    list: [
      { text: "ホーム", url: "#!" },
      { text: "政策", url: "#!" },
      { text: "審議会・研究会", url: "#!" },
      { text: "デジタル庁における入札制限等の在り方に関する検討会" },
    ],
    linkTag: "a",
  },
};
