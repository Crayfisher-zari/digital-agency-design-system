import type { Meta, StoryObj } from "@storybook/vue3";
import MegaMenuContainer from "../components/MegaMenuContainer.vue";
import MegaMenuTitle from "../components/MegaMenuTitle.vue";
import Menu from "../components/Menu.vue";
import { menuList } from "./stub/menulist";

const meta = {
  title: "メガメニューコンテナー",
  component: MegaMenuContainer,
  tags: ["autodocs"],
  argTypes: {
    style: {
      control: "radio",
      options: ["flat", "shadow"],
    },
    isVisible: {
      control: "boolean",
    },
  },
  args: {
    style: "flat",
    isVisible: true,
  },
} satisfies Meta<typeof MegaMenuContainer>;
export default meta;
type Story = StoryObj<typeof meta>;

/**
 * メガメニューコンテナーはレイアウトを提供します
 */
export const Base: Story = {
  args: {
    style: "flat",
    isVisible: true,
  },
  render: (args) => ({
    components: { MegaMenuContainer, MegaMenuTitle, Menu },
    setup: () => {
      return { ...args, menuList };
    },
    template: `
    <MegaMenuContainer :isVisible="isVisible">
      <template #col1>
        <MegaMenuTitle
          title="メガメニュー"
          text="サブタイトルはここに記入します"
          linkText="2階層目へのリンク"
          linkUrl="#!"
        />
      </template>
      <template #col2>
        <Menu :menuList="menuList" :hasGap="false" linkTag="a"></Menu>
      </template>
      <template #col3>
        <Menu :menuList="menuList" :hasGap="false" linkTag="a"></Menu>
      </template>
    </MegaMenuContainer>
    `,
  }),
};
