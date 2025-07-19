import type { Meta, StoryObj } from "@storybook/vue3";
import Menu from "../components/Menu.vue";

const meta = {
  title: "旧メニュー（非推奨）",
  component: Menu,
  tags: ["autodocs"],
  argTypes: {
    menuList: {
      control: "object",
    },
    hasIcon: {
      control: "boolean",
    },
    hasGap: {
      control: "boolean",
    },
    linkTag: {
      control: "text",
    },
  },
  args: {
    menuList: [
      {
        categoryName: "カテゴリー",
        itemList: [
          { type: "link", item: { to: "!#", text: "メニュー" } },
          { type: "link", item: { to: "!#", text: "メニュー" } },
          { type: "link", item: { to: "!#", text: "メニュー" } },
        ],
      },
    ],
    hasIcon: false,
    hasGap: true,
    linkTag: "a",
  },
} satisfies Meta<typeof Menu>;
export default meta;
type Story = StoryObj<typeof meta>;

/**
 * メニュー
 * @deprecated
 */
export const Base: Story = {
  args: {
    menuList: [
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
    ],
    hasIcon: false,
    hasGap: false,
    linkTag: "a",
  },
};

export const Accordion: Story = {
  args: {
    menuList: [
      {
        categoryName: "カテゴリー",
        itemList: [
          {
            type: "accordion",
            item: {
              accordionTitle: "アコーディオン",
              hasIcon: true,
              linkList: [
                { to: "!#", text: "メニュー" },
                { to: "!#", text: "メニュー" },
                { to: "!#", text: "メニュー", selected: true },
              ],
            },
          },
          { type: "link", item: { to: "!#", text: "メニュー" } },
          { type: "link", item: { to: "!#", text: "メニュー" } },
        ],
      },
    ],
    hasIcon: true,
    hasGap: false,
    linkTag: "a",
  },
};
