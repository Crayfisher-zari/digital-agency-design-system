import type { Meta, StoryObj } from "@storybook/vue3";
import MenuListSection from "../components/MenuListSection.vue";
import Icon from "../components/Icon.vue";
import iconSample from "../assets/images/icon_sample.svg";
import MenuListItem from "../components/MenuListItem.vue";

const meta = {
  title: "メニューリストセクション",
  component: MenuListSection,
  tags: ["autodocs"],
  argTypes: {
    size: {
      control: "select",
      options: ["regular", "small"],
    },
    type: {
      control: "select",
      options: ["standard", "boxed", "thumbnail"],
    },
    tag: {
      control: "select",
      options: ["auto", "a", "button", "div", "span"],
    },
    isCurrent: {
      control: "boolean",
    },
    isUnderlined: {
      control: "boolean",
    },
  },
} satisfies Meta<typeof MenuListSection>;

export default meta;
type Story = StoryObj<typeof meta>;

// 基本的なセクション
export const Default: Story = {
  args: {
    size: "regular",
    type: "standard",
  },
  render: (args) => ({
    components: { MenuListSection, MenuListItem, Icon },
    setup() {
      return { args, iconSample };
    },
    template: `
      <MenuListSection v-bind="args">
        <template #icon>
          <Icon :iconSrc="iconSample" :width="24" :height="24" color="currentColor" />
        </template>
        <MenuListItem>メニューリストアイテム</MenuListItem>
        <MenuListItem>メニューリストアイテム</MenuListItem>
        <MenuListItem>メニューリストアイテム</MenuListItem>
      </MenuListSection>
    `,
  }),
};

// アイコン付きのセクション
export const WithIcon: Story = {
  args: {
    size: "regular",
    type: "standard",
  },
  render: (args) => ({
    components: { MenuListSection, MenuListItem, Icon },
    setup() {
      return { args, iconSample };
    },
    template: `
      <MenuListSection v-bind="args">
        <template #icon>
          <Icon :iconSrc="iconSample" :width="24" :height="24" color="currentColor" />
        </template>
        <MenuListItem>メニューリストアイテム</MenuListItem>
        <MenuListItem>メニューリストアイテム</MenuListItem>
        <MenuListItem>メニューリストアイテム</MenuListItem>
      </MenuListSection>
    `,
  }),
};

// サイズバリエーション - Small
export const Small: Story = {
  args: {
    size: "small",
    type: "standard",
  },
};

// タイプバリエーション - Boxed
export const Boxed: Story = {
  args: {
    size: "regular",
    type: "boxed",
  },
};

// タイプバリエーション - Thumbnail
export const Thumbnail: Story = {
  args: {
    size: "regular",
    type: "thumbnail",
    description: "セクションの説明文がここに入ります",
    isUnderlined: true,
  },
};
