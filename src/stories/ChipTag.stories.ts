import type { Meta, StoryObj } from "@storybook/vue3";
import ChipTag from "../components/ChipTag.vue";
import Icon from "../components/Icon.vue";
import iconSample from "../assets/images/icon_sample.svg";

const meta = {
  title: "チップタグ",
  component: ChipTag,
  tags: ["autodocs"],
} satisfies Meta<typeof ChipTag>;

export default meta;
type Story = StoryObj<typeof meta>;

/**
 * デフォルトのチップタグ
 * 基本的なチップタグの表示です。
 */
export const Default: Story = {
  render: (args) => ({
    components: { ChipTag, Icon },
    setup() {
      return { ...args };
    },
    template: `
      <ChipTag>
        タグ
      </ChipTag>
    `,
  }),
};

/**
 * アイコン付きのチップタグ
 * 前方にアイコンを配置したチップタグです。
 */
export const WithFrontIcon: Story = {
  render: (args) => ({
    components: { ChipTag, Icon },
    setup() {
      return { ...args, iconSample };
    },
    template: `
      <ChipTag>
        <template #frontIcon>
          <Icon :iconSrc="iconSample" :width="24" :height="24" />
        </template>
        タグ
      </ChipTag>
    `,
  }),
};

/**
 * 複数のチップタグ
 * 複数のチップタグを並べて表示した例です。
 */
export const Multiple: Story = {
  render: (args) => ({
    components: { ChipTag, Icon },
    setup() {
      return { ...args, iconSample };
    },
    template: `
      <div style="display: flex; gap: 8px; flex-wrap: wrap; align-items: center;">
        <ChipTag>
          タグ1
        </ChipTag>
        <ChipTag>
          <template #frontIcon>
            <Icon :iconSrc="iconSample" :width="24" :height="24" />
          </template>
          タグ2
        </ChipTag>
        <ChipTag>
          長いテキストのタグ
        </ChipTag>
      </div>
    `,
  }),
};
