import { StoryObj } from "@storybook/vue3/*";
import MenuListItem from "../components/MenuListItem.vue";
import MenuListCategoryTitle from "../components/MenuListCategoryTitle.vue";
import MenuListSection from "../components/MenuListSection.vue";
import iconSample from "@/assets/images/icon_sample.svg";
import Icon from "../components/Icon.vue";
import Divider from "../components/Divider.vue";

const meta = {
  title: "モバイルメニュー",
  tags: ["autodocs"],
};

export default meta;

type Story = StoryObj<typeof meta>;

/**
 * モバイルメニュー
 *
 * MobileMenuという単品のコンポーネントはありません。MenuListCategoryTitleとMenuListItem、MenuListSectionなどを組み合わせて使用してください。
 *
 * ul,liタグなどはコンポーネントから提供されません。適宜追加、スタイルのリセットなどを行ってください。
 */
export const Standard: Story = {
  render: (args) => ({
    components: { MenuListItem, Divider },
    setup: () => ({ args, iconSrc: iconSample }),
    template: `
     <div style="border: 1px solid var(--color-border-divider);padding: 16px 0;">
      <ul class="resetList">
        <li><MenuListItem type="boxed" hasArrow="true">メニューリストアイテム</MenuListItem></li>
        <li><MenuListItem type="boxed" hasArrow="true">メニューリストアイテム</MenuListItem></li>
        <li><MenuListItem type="boxed" hasArrow="true" tag="a" target="_blank">メニューリストアイテム</MenuListItem></li>
      </ul>
      <Divider :weight="1" padding="16px" />
      <ul class="resetList">
        <li><MenuListItem type="boxed" hasArrow="true">メニューリストアイテム</MenuListItem></li>
        <li><MenuListItem type="boxed" hasArrow="true" isCurrent="true">メニューリストアイテム</MenuListItem></li>
        <li><MenuListItem type="boxed" hasArrow="true" tag="a" target="_blank">メニューリストアイテム</MenuListItem></li>
      </ul>
      <Divider :weight="1" padding="16px" />
      <ul class="resetList">
        <li><MenuListItem type="boxed" hasArrow="true">メニューリストアイテム</MenuListItem></li>
        <li><MenuListItem type="boxed" hasArrow="true">メニューリストアイテム</MenuListItem></li>
        <li><MenuListItem type="boxed" hasArrow="true" tag="a" target="_blank">メニューリストアイテム</MenuListItem></li>
      </ul>
    </div>`,
  }),
};

/**
 * セクション付きモバイルメニュー
 */
export const WithSection: Story = {
  render: (args) => ({
    components: { MenuListItem, MenuListCategoryTitle, Icon, MenuListSection },
    setup: () => {
      return { args, iconSrc: iconSample };
    },
    template: `
    <div style="border: 1px solid var(--color-border-divider);padding: 16px 0;">
    <MenuListSection isBoxed="true">
      <template #icon>
        <Icon :iconSrc="iconSrc" width="16" height="16" />
      </template>
      <ul class="resetList">
        <li><MenuListItem type="boxed">メニューリストアイテム</MenuListItem></li>
        <li><MenuListItem type="boxed">メニューリストアイテム</MenuListItem></li>
        <li><MenuListItem type="boxed" tag="a" target="_blank">メニューリストアイテム</MenuListItem></li>
      </ul>
    </MenuListSection>
    <MenuListSection isBoxed="true">
      <template #icon>
        <Icon :iconSrc="iconSrc" width="16" height="16" />
      </template>
      <ul class="resetList">
        <li><MenuListItem type="boxed">メニューリストアイテム</MenuListItem></li>
        <li><MenuListItem type="boxed" :isCurrent="true">メニューリストアイテム</MenuListItem></li>
        <li><MenuListItem tag="a" target="_blank">メニューリストアイテム</MenuListItem></li>
      </ul>
    </MenuListSection>
    <MenuListSection isBoxed="true">
      <template #icon>
        <Icon :iconSrc="iconSrc" width="16" height="16" />
      </template>
      <ul class="resetList">
        <li><MenuListItem type="boxed">メニューリストアイテム</MenuListItem></li>
        <li><MenuListItem type="boxed">メニューリストアイテム</MenuListItem></li>
        <li><MenuListItem tag="a" target="_blank">メニューリストアイテム</MenuListItem></li>
      </ul>
    </MenuListSection>
    </div>`,
  }),
};
