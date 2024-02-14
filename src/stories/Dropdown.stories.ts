import type { Meta, StoryObj } from "@storybook/vue3";
import DropDown from "../components/DropDown.vue";
import Menu from "../components/Menu.vue";
import { menuList } from "./stub/menulist";

const meta = {
  title: "ドロップダウン",
  component: DropDown,
  tags: ["autodocs"],
  argTypes: {
    summary: {
      control: "text",
    },
    hasShadow: {
      control: "boolean",
    },
    side: {
      controle: "radio",
      options: ["left", "right"],
    },
  },
  args: {
    summary: "ドロップダウン",
    hasShadow: false,
    side: "left",
  },
} satisfies Meta<typeof DropDown>;
export default meta;
type Story = StoryObj<typeof meta>;

export const Base: Story = {
  args: { summary: "ドロップダウン", hasShadow: false, side: "left", menuList },
  render: (args) => ({
    components: { DropDown, Menu },
    setup: () => {
      return { ...args };
    },
    template: `
    <DropDown :summary="summary" :hasShadow="hasShadow" :side="side">
      <Menu :menuList="menuList" />
    </DropDown>
    `,
  }),
};

export const HasShadow: Story = {
  args: { summary: "ドロップダウン", hasShadow: true, side: "left", menuList },
  render: (args) => ({
    components: { DropDown, Menu },
    setup: () => {
      return { ...args };
    },
    template: `
    <DropDown :summary="summary" :hasShadow="hasShadow" :side="side">
      <Menu :menuList="menuList" />
    </DropDown>
    `,
  }),
};

export const RightSide: Story = {
  args: {
    summary: "ドロップダウン",
    hasShadow: false,
    side: "right",
    menuList,
  },
  render: (args) => ({
    components: { DropDown, Menu },
    setup: () => {
      return { ...args };
    },
    template: `
    <DropDown :summary="summary" :hasShadow="hasShadow" :side="side">
      <Menu :menuList="menuList" />
    </DropDown>
    `,
  }),
};
