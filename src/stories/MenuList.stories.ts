import { StoryObj } from "@storybook/vue3/*";
import MenuListItem from "../components/MenuListItem.vue";
import MenuListCategoryTitle from "../components/MenuListCategoryTitle.vue";
import iconSample from "@/assets/images/icon_sample.svg";
import Icon from "../components/Icon.vue";
import { useDropDownAnimation } from "../composables/useDropDownAnimation";

const meta = {
  title: "メニューリスト",
  tags: ["autodocs"],
};

export default meta;

type Story = StoryObj<typeof meta>;

/**
 * 通常メニューリスト
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
    components: { MenuListItem, MenuListCategoryTitle, Icon },
    setup: () => {
      const { isOpened, hasAnimation, handleDropDown, detailsElement, contentsElement, contentsInnerElement } = useDropDownAnimation()

      return { args, iconSrc: iconSample }},
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
}
