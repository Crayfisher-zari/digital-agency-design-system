import type { Meta, StoryObj } from "@storybook/vue3";
import NavigationContainer from "../components/NavigationContainer.vue";
import UtilityLink from "../components/UtilityLink.vue";
import MenuLink from "../components/MenuLink.vue";
import DropDown from "../components/DropDown.vue";
import Menu from "../components/Menu.vue";
import { menuList } from "./stub/menulist";

const meta = {
  title: "ナビゲーションコンテナー",
  component: NavigationContainer,
  tags: ["autodocs"],
  argTypes: {
    alignItems: {
      control: "radio",
      options: ["start", "center", "end", "baseline"],
    },
    justifyContent: {
      control: "selector",
      options: [
        "start",
        "center",
        "end",
        "spaceBetween",
        "spaceAround",
        "spaceEvenry",
      ],
    },
    gap: {
      control: "radio",
      options: ["small", "medium", "large"],
    },
  },
  args: {
    alignItems: "start",
    justifyContent: "start",
    gap: "medium",
  },
} satisfies Meta<typeof NavigationContainer>;
export default meta;
type Story = StoryObj<typeof meta>;

/**
 * ヘッダーコンテナー内部などで使うコンテナーです
 */
export const Base: Story = {
  render: (args) => ({
    components: { NavigationContainer, UtilityLink },
    setup: () => ({ ...args }),
    template: `
      <NavigationContainer :alignItems="alignItems" :justifyContent="justifyContent" :gap="gap">
        <UtilityLink to="#!">サイトポリシー</UtilityLink>
        <UtilityLink to="#!">プライバシーポリシー</UtilityLink>
        <UtilityLink to="#!">コピーライトポリシー</UtilityLink>
        <UtilityLink to="#!">ウェブアクセシビリティ</UtilityLink>
      </NavigationContainer>
    `,
  }),
};

export const MenuContainer: Story = {
  render: (args) => ({
    components: { NavigationContainer, MenuLink, DropDown, Menu },
    setup: () => {
      return { ...args, menuList };
    },
    template: `
      <NavigationContainer :alignItems="alignItems" :justifyContent="justifyContent" :gap="gap">
        <MenuLink to="#!">政策</MenuLink>
        <DropDown summary="市民向けサービス">
          <Menu :menuList="menuList" linkTag="a"></Menu>
        </DropDown>
        <DropDown summary="事業者向け">
          <Menu :menuList="menuList" linkTag="a"></Menu>
        </DropDown>
        <MenuLink to="#!">採用情報</MenuLink>
        <MenuLink to="#!">ご意見・ご要望</MenuLink>
      </NavigationContainer>
    `,
  }),
};
