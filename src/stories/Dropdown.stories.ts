import type { Meta, StoryObj } from "@storybook/vue3";
import DropDown from "../components/DropDown.vue";
import Menu from "../components/Menu.vue";
import { menuList } from "./stub/menulist";

const meta = {
  title: "ドロップダウンボタン",
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
  args: { summary: "ドロップダウン", hasShadow: false, side: "left" },
  render: (args) => ({
    components: { DropDown, Menu },
    setup: () => {
      return { ...args, menuList };
    },
    template: `
    <DropDown :summary="summary" :hasShadow="hasShadow" :side="side">
      <Menu :menuList="menuList" />
    </DropDown>
    `,
  }),
};

export const HasShadow: Story = {
  args: { summary: "ドロップダウン", hasShadow: true, side: "left" },
  render: (args) => ({
    components: { DropDown, Menu },
    setup: () => {
      return { ...args, menuList };
    },
    template: `
    <DropDown :summary="summary" :hasShadow="hasShadow" :side="side">
      <Menu :menuList="menuList" />
    </DropDown>
    `,
  }),
};

export const Selected: Story = {
  args: {
    summary: "ドロップダウン",
    isSelected: true,
  },
  render: (args) => ({
    components: { DropDown, Menu },
    setup: () => {
      return { ...args, menuList };
    },
    template: `
    <DropDown :summary="summary" :isSelected="true">
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
  },
  render: (args) => ({
    components: { DropDown, Menu },
    setup: () => {
      return { ...args, menuList };
    },
    template: `
    <div style="display: flex; justify-content: flex-end; align-items: center; width: 100%;">
      <DropDown :summary="summary" :hasShadow="hasShadow" :side="side">
        <Menu :menuList="menuList" />
      </DropDown>
    </div>
    `,
  }),
};

export const WithIcon: Story = {
  args: {
    summary: "ドロップダウン",
    hasShadow: false,
  },
  render: (args) => ({
    components: { DropDown, Menu },
    setup: () => {
      const icon = "🍣";
      return { ...args, menuList, icon };
    },
    template: `
    <DropDown :summary="summary" :hasShadow="hasShadow" :side="side">
      <template #icon>{{ icon }}</template>
      <Menu :menuList="menuList" />
    </DropDown>
    `,
  }),
};
