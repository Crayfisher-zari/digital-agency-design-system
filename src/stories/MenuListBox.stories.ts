import type { Meta, StoryObj } from "@storybook/vue3";
import MenuListBox from "../components/MenuListBox.vue";
import MenuListItem from "../components/MenuListItem.vue";
import MenuListCategoryTitle from "../components/MenuListCategoryTitle.vue";
import Divider from "../components/Divider.vue";
import Icon from "../components/Icon.vue";
import iconSample from "../assets/images/icon_sample.svg";

const meta = {
  title: "メニューリストボックス",
  component: MenuListBox,
  tags: ["autodocs"],
  argTypes: {
    size: {
      control: "select",
      options: ["regular", "small"],
    },
    type: {
      control: "select",
      options: ["text", "outlined", "filled"],
    },
    contentHeight: {
      control: "number",
    },
  },
} satisfies Meta<typeof MenuListBox>;

export default meta;
type Story = StoryObj<typeof meta>;

/**
 * 基本的なメニューリストボックス
 *
 * リストの影の関係で左右下に8pxのパディングを設けています
 */
export const Default: Story = {
  args: {
    size: "regular",
    type: "text",
    contentHeight: undefined,
  },
  render: (args) => ({
    components: { MenuListBox, MenuListItem },
    setup() {
      return { args };
    },
    template: `
      <MenuListBox v-bind="args">
        <template #summary>
          メニューリストボックス
        </template>
        <template #content>
          <MenuListItem type="boxed">メニューリストアイテム1</MenuListItem>
          <MenuListItem type="boxed">メニューリストアイテム2</MenuListItem>
          <MenuListItem type="boxed">メニューリストアイテム3</MenuListItem>
        </template>
      </MenuListBox>
    `,
  }),
};

export const WithScrollbar: Story = {
  args: {
    size: "regular",
    type: "text",
    contentHeight: 400,
  },
  render: (args) => ({
    components: {
      MenuListBox,
      MenuListItem,
      MenuListCategoryTitle,
      Icon,
      Divider,
    },
    setup() {
      return { args, iconSrc: iconSample };
    },
    template: `
      <MenuListBox v-bind="args">
        <template #summaryIcon>
          <Icon :iconSrc="iconSrc" width="16" height="16" />
        </template>
        <template #summary>
          メニューリスト
        </template>
        <template #content>
           <div>
            <MenuListCategoryTitle v-bind="args">
              <template #icon>
                <Icon :iconSrc="iconSrc" width="16" height="16" />
              </template>
              カテゴリータイトル
            </MenuListCategoryTitle>
            <ul class="resetList">
              <li><MenuListItem type="boxed">メニューリストアイテム</MenuListItem></li>
              <li><MenuListItem type="boxed">メニューリストアイテム</MenuListItem></li>
              <li><MenuListItem type="boxed" tag="a" target="_blank">メニューリストアイテム</MenuListItem></li>
            </ul>
            <Divider :weight="1" padding="16px" />
            <MenuListCategoryTitle v-bind="args">
              <template #icon>
                <Icon :iconSrc="iconSrc" width="16" height="16" />
              </template>
              カテゴリータイトル
            </MenuListCategoryTitle>
            <ul class="resetList">
              <li><MenuListItem type="boxed">メニューリストアイテム</MenuListItem></li>
              <li><MenuListItem type="boxed" isCurrent="true">メニューリストアイテム</MenuListItem></li>
              <li><MenuListItem type="boxed" tag="a" target="_blank">メニューリストアイテム</MenuListItem></li>
            </ul>
            <Divider :weight="1" padding="16px" />
            <MenuListCategoryTitle v-bind="args">
              <template #icon>
                <Icon :iconSrc="iconSrc" width="16" height="16" />
              </template>
              カテゴリータイトル
            </MenuListCategoryTitle>
            <ul class="resetList">
              <li><MenuListItem type="boxed">メニューリストアイテム</MenuListItem></li>
              <li><MenuListItem type="boxed">メニューリストアイテム</MenuListItem></li>
              <li><MenuListItem type="boxed" tag="a" target="_blank">メニューリストアイテム</MenuListItem></li>
            </ul>
          </div>
        </template>
      </MenuListBox>
    `,
  }),
};
