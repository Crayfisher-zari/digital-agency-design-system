import type { Meta, StoryObj } from "@storybook/vue3";
import MenuListCategoryTitle from "../components/MenuListCategoryTitle.vue";
import Icon from "../components/Icon.vue";
import iconSample from "@/assets/images/icon_sample.svg";

const meta = {
  title: "メニューリストカテゴリタイトル",
  component: MenuListCategoryTitle,
  tags: ["autodocs"],
  argTypes: {
    size: {
      control: "radio",
      options: ["regular", "small"],
    },
  },
  args: {
    size: "regular",
  },
} satisfies Meta<typeof MenuListCategoryTitle>;

export default meta;
type Story = StoryObj<typeof meta>;

/**
 * 通常サイズ
 */
export const Regular: Story = {
  args: {
    size: "regular",
  },
  render: (args) => ({
    components: { MenuListCategoryTitle },
    setup: () => ({ args }),
    template: `<MenuListCategoryTitle v-bind="args">カテゴリータイトル</MenuListCategoryTitle>`,
  }),
};

/**
 * 小サイズ
 */
export const Small: Story = {
  args: {
    size: "small",
  },
  render: (args) => ({
    components: { MenuListCategoryTitle },
    setup: () => ({ args }),
    template: `<MenuListCategoryTitle v-bind="args">カテゴリータイトル</MenuListCategoryTitle>`,
  }),
};

/**
 * アイコン付き
 */
export const WithIcon: Story = {
  args: {
    size: "regular",
  },
  render: (args) => ({
    components: { MenuListCategoryTitle, Icon },
    setup: () => ({ args, iconSrc: iconSample }),
    template: `<MenuListCategoryTitle v-bind="args">
      <template #icon>
        <Icon :iconSrc="iconSrc" width="16" height="16" />
      </template>
      カテゴリータイトル
    </MenuListCategoryTitle>`,
  }),
};
