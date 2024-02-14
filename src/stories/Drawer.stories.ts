import type { Meta, StoryObj } from "@storybook/vue3";
import Drawer from "../components/Drawer.vue";
import Menu from "../components/Menu.vue";
import { ref } from "vue";

const meta = {
  title: "ドロワー",
  component: Drawer,
  tags: ["autodocs"],
  argTypes: {
    isVisible: {
      control: "boolean",
    },
    isMobileOnly: {
      control: "boolean",
    },
    type: {
      control: "radio",
      options: ["overlay", "sidebar"],
    },
    appearFrom: {
      control: "selector",
      options: ["left", "right", "top", "bottom", "none"],
    },
  },
  args: {
    isVisible: false,
    isMobileOnly: false,
    type: "sidebar",
    appearFrom: "right",
  },
} satisfies Meta<typeof Drawer>;
export default meta;
type Story = StoryObj<typeof meta>;

export const base: Story = {
  args: {
    isVisible: false,
    isMobileOnly: false,
    type: "sidebar",
    appearFrom: "right",
  },
  render: (args) => ({
    components: { Drawer, Menu },
    setup: () => {
      const isVisible = ref(false);
      const menuList = [
        {
          categoryName: "カテゴリー",
          itemList: [
            { type: "link", item: { to: "!#", text: "メニュー" } },
            { type: "link", item: { to: "!#", text: "メニュー" } },
            {
              type: "link",
              item: { to: "!#", text: "メニュー", selected: true },
            },
          ],
        },
      ];
      return { ...args, isVisible, menuList };
    },
    template: `
      <div style="overflow: hidden">
        <button @click="isVisible = !isVisible">表示切り替え</button>
        <Drawer :isVisible="isVisible" :isMobileOnly="isMobileOnly" >
          <Menu :menuList="menuList" linkTag="a"></Menu>
        </Drawer>
      <div>
    `,
  }),
};
