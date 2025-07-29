import { StoryObj } from "@storybook/vue3/*";
import MenuListItem from "../components/MenuListItem.vue";
import MenuListCategoryTitle from "../components/MenuListCategoryTitle.vue";
import MenuListSection from "../components/MenuListSection.vue";
import iconSample from "@/assets/images/icon_sample.svg";
import Icon from "../components/Icon.vue";

const meta = {
  title: "メニューリスト",
  tags: ["autodocs"],
};

export default meta;

type Story = StoryObj<typeof meta>;

/**
 * 通常メニューリスト
 *
 * MenuListという単品のコンポーネントはありません。MenuListCategoryTitleとMenuListItem、MenuListSectionを組み合わせて使用してください。
 *
 * ul,liタグなどはコンポーネントから提供されません。適宜追加、スタイルのリセットなどを行ってください。
 */
export const Standard: Story = {
  render: (args) => ({
    components: { MenuListItem, MenuListCategoryTitle, Icon },
    setup: () => ({ args, iconSrc: iconSample }),
    template: `
    <div>
    <MenuListCategoryTitle v-bind="args">
      <template #icon>
        <Icon :iconSrc="iconSrc" width="16" height="16" />
      </template>
      カテゴリータイトル
    </MenuListCategoryTitle>
    <ul class="resetList">
      <li><MenuListItem>メニューリストアイテム</MenuListItem></li>
      <li><MenuListItem>メニューリストアイテム</MenuListItem></li>
      <li><MenuListItem tag="a" target="_blank">メニューリストアイテム</MenuListItem></li>
    </ul>
    </div>`,
  }),
};

export const WithSection: Story = {
  render: (args) => ({
    components: { MenuListItem, MenuListCategoryTitle, Icon, MenuListSection },
    setup: () => {
      return { args, iconSrc: iconSample };
    },
    template: `
    <div>
    <MenuListCategoryTitle v-bind="args">
      <template #icon>
        <Icon :iconSrc="iconSrc" width="16" height="16" />
      </template>
      カテゴリータイトル
    </MenuListCategoryTitle>
    <MenuListSection>
      <template #icon>
        <Icon :iconSrc="iconSrc" width="16" height="16" />
      </template>
      <ul class="resetList">
        <li><MenuListItem>メニューリストアイテム</MenuListItem></li>
        <li><MenuListItem>メニューリストアイテム</MenuListItem></li>
        <li><MenuListItem tag="a" target="_blank">メニューリストアイテム</MenuListItem></li>
      </ul>
    </MenuListSection>
    <MenuListSection :isCurrent="true">
      <template #icon>
        <Icon :iconSrc="iconSrc" width="16" height="16" />
      </template>
      <ul class="resetList">
        <li><MenuListItem>メニューリストアイテム</MenuListItem></li>
        <li><MenuListItem :isCurrent="true">メニューリストアイテム</MenuListItem></li>
        <li><MenuListItem tag="a" target="_blank">メニューリストアイテム</MenuListItem></li>
      </ul>
    </MenuListSection>
    </div>`,
  }),
};
