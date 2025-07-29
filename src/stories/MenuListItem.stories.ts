import type { Meta, StoryObj } from "@storybook/vue3";
import MenuListItem from "../components/MenuListItem.vue";
import Icon from "../components/Icon.vue";
import iconSample from "@/assets/images/icon_sample.svg";

const meta = {
  title: "メニューリストアイテム",
  component: MenuListItem,
  tags: ["autodocs"],
  argTypes: {
    size: {
      control: "radio",
      options: ["regular", "small"],
    },
    type: {
      control: "radio",
      options: ["standard", "boxed", "thumbnail"],
    },
    tag: {
      control: "radio",
      options: ["auto", "a", "router-link", "nuxt-link", "button"],
    },
    target: {
      control: "radio",
      options: [undefined, "_blank"],
    },
    isCurrent: {
      control: "boolean",
    },
    isUnderlined: {
      control: "boolean",
    },
  },
  args: {
    size: "regular",
    type: "standard",
    tag: "auto",
    target: undefined,
    isCurrent: false,
  },
} satisfies Meta<typeof MenuListItem>;

export default meta;
type Story = StoryObj<typeof meta>;

/**
 * 通常サイズ
 */
export const Regular: Story = {
  args: {
    size: "regular",
    type: "standard",
    tag: "auto",
    target: undefined,
    isCurrent: false,
  },
  render: (args) => ({
    components: { MenuListItem },
    setup: () => ({ args }),
    template: `<MenuListItem v-bind="args">メニューアイテム</MenuListItem>`,
  }),
};

/**
 * 小サイズ
 */
export const Small: Story = {
  args: {
    size: "small",
    type: "standard",
    tag: "auto",
    target: undefined,
    isCurrent: false,
  },
  render: (args) => ({
    components: { MenuListItem },
    setup: () => ({ args }),
    template: `<MenuListItem v-bind="args">メニューアイテム</MenuListItem>`,
  }),
};

/**
 * アイコン付き（通常サイズ）
 */
export const WithIcon: Story = {
  args: {
    size: "regular",
    type: "standard",
    tag: "auto",
    target: undefined,
    isCurrent: false,
  },
  render: (args) => ({
    components: { MenuListItem, Icon },
    setup: () => ({ args, iconSrc: iconSample }),
    template: `<MenuListItem v-bind="args">
      <template #icon>
        <Icon :iconSrc="iconSrc" width="16" height="16" />
      </template>
      ホーム
    </MenuListItem>`,
  }),
};

/**
 * アイコン付き（小サイズ）
 */
export const SmallWithIcon: Story = {
  args: {
    size: "small",
    type: "standard",
    tag: "auto",
    target: undefined,
    isCurrent: false,
  },
  render: (args) => ({
    components: { MenuListItem, Icon },
    setup: () => ({ args, iconSrc: iconSample }),
    template: `<MenuListItem v-bind="args">
      <template #icon>
        <Icon :iconSrc="iconSrc" width="14" height="14" />
      </template>
      プロフィール
    </MenuListItem>`,
  }),
};

/**
 * Boxタイプアイコン付き
 */
export const BoxWithIcon: Story = {
  args: {
    size: "regular",
    type: "boxed",
    tag: "auto",
    target: undefined,
    isCurrent: false,
  },
  render: (args) => ({
    components: { MenuListItem, Icon },
    setup: () => ({ args, iconSrc: iconSample }),
    template: `<MenuListItem v-bind="args">
      <template #icon>
        <Icon :iconSrc="iconSrc" width="14" height="14" />
      </template>
      <template #iconBackward>
        <Icon :iconSrc="iconSrc" width="11" height="11" />
      </template>
      プロフィール
    </MenuListItem>`,
  }),
};

/**
 * サムネイルタイプ
 */
export const Thumbnail: Story = {
  args: {
    size: "regular",
    type: "thumbnail",
    tag: "auto",
    target: undefined,
    isCurrent: false,
  },
  render: (args) => ({
    components: { MenuListItem, Icon },
    setup: () => ({ args, iconSrc: iconSample }),
    template: `<MenuListItem v-bind="args">
      <template #icon>
        <Icon :iconSrc="iconSrc" width="24" height="24" />
      </template>
      リストアイテム
      <template #description>
        <span>ディスクリプション</span>
      </template>
        <template #iconBackward>
        <Icon :iconSrc="iconSrc" width="11" height="11" />
      </template>
    </MenuListItem>`,
  }),
};
