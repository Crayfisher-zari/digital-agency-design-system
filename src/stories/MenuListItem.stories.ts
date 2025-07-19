import type { Meta, StoryObj } from "@storybook/vue3";
import MenuListItem from "../components/MenuListItem.vue";
import Icon from "../components/Icon.vue";
import iconHome from "@/assets/images/icon_home.svg";
import iconPerson from "@/assets/images/icon_person.svg";

const meta = {
  title: "メニューリストアイテム",
  component: MenuListItem,
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
} satisfies Meta<typeof MenuListItem>;

export default meta;
type Story = StoryObj<typeof meta>;

/**
 * 通常サイズ
 */
export const Regular: Story = {
  args: {
    size: "regular",
  },
  render: () => ({
    components: { MenuListItem },
    template: `<MenuListItem size="regular">メニューアイテム</MenuListItem>`,
  }),
};

/**
 * 小サイズ
 */
export const Small: Story = {
  args: {
    size: "small",
  },
  render: () => ({
    components: { MenuListItem },
    template: `<MenuListItem size="small">メニューアイテム</MenuListItem>`,
  }),
};

/**
 * アイコン付き（通常サイズ）
 */
export const WithIcon: Story = {
  args: {
    size: "regular",
  },
  render: () => ({
    components: { MenuListItem, Icon },
    setup: () => {
      const iconSrc = iconHome;
      return {
        iconSrc,
      };
    },
    template: `<MenuListItem size="regular">
      <template #icon>
        <Icon :iconSrc="iconSrc" width="16" height="16" color="var(--color-text-primary)" />
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
  },
  render: () => ({
    components: { MenuListItem, Icon },
    setup: () => {
      const iconSrc = iconPerson;
      return {
        iconSrc,
      };
    },
    template: `<MenuListItem size="small">
      <template #icon>
        <Icon :iconSrc="iconSrc" width="14" height="14" color="var(--color-text-primary)" />
      </template>
      プロフィール
    </MenuListItem>`,
  }),
};

/**
 * 複数アイテムの例
 */
export const MultipleItems: Story = {
  args: {
    size: "regular",
  },
  render: () => ({
    components: { MenuListItem, Icon },
    setup: () => {
      const homeIcon = iconHome;
      const personIcon = iconPerson;
      return {
        homeIcon,
        personIcon,
      };
    },
    template: `
      <div style="display: flex; flex-direction: column; gap: 8px;">
        <MenuListItem size="regular">
          <template #icon>
            <Icon :iconSrc="homeIcon" width="16" height="16" color="var(--color-text-primary)" />
          </template>
          ホーム
        </MenuListItem>
        <MenuListItem size="regular">
          <template #icon>
            <Icon :iconSrc="personIcon" width="16" height="16" color="var(--color-text-primary)" />
          </template>
          プロフィール
        </MenuListItem>
        <MenuListItem size="regular">
          設定
        </MenuListItem>
      </div>
    `,
  }),
};
