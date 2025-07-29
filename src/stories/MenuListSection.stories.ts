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
    isCurrent: {
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
