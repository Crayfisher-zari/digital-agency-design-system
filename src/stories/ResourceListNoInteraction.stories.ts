import type { Meta, StoryObj } from "@storybook/vue3";
import ResourceListNoInteraction from "../components/ResourceListNoInteraction.vue";
import Icon from "../components/Icon.vue";
import iconSample from "../assets/images/icon_sample.svg";

const meta = {
  title: "リソースリスト（インタラクションなし）",
  component: ResourceListNoInteraction,
  tags: ["autodocs"],
  argTypes: {
    designStyle: {
      control: "select",
      options: ["list", "form"],
    },
    label: {
      control: "text",
    },
    title: {
      control: "text",
    },
    supportText: {
      control: "text",
    },
    subLabel: {
      control: "text",
    },
  },
  args: {
    designStyle: "list",
    label: "ラベル",
    title: "リストタイトル",
    supportText: "サポートテキスト",
    subLabel: "サブラベル",
  },
} satisfies Meta<typeof ResourceListNoInteraction>;
export default meta;
type Story = StoryObj<typeof meta>;

/**
 * リソースリスト（デフォルト）
 * リソースリストのデフォルトのものです。このコンポーネント自体にアクションは持ちません
 * （エンドアイコンにボタンを渡すなどは可能）
 */
export const Base: Story = {
  args: {
    label: "ラベル",
    title: "リストタイトル",
    supportText: "サポートテキスト",
    subLabel: "サブラベル",
    designStyle: "list",
  },
  render: (args) => ({
    components: { ResourceListNoInteraction, Icon },
    setup: () => {
      return { args, iconSample };
    },
    template: `
    <ResourceListNoInteraction v-bind="args">
      <template #frontIcon>
        <Icon :iconSrc="iconSample" :width="24" :height="24" />
      </template>
      <template #endIcon>
        <Icon :iconSrc="iconSample" :width="24" :height="24" />
      </template>
    </ResourceListNoInteraction>
    `,
  }),
};

/**
 * 作例：受診記録一覧
 */

export const MedicalRecordList: Story = {
  render: () => ({
    components: { ResourceListNoInteraction },
    setup: () => {
      const list = [
        {
          designStyle: "form",
          title: "健康診断",
          supportText: "2025年度",
          subLabel: "受診日：2025/04/30",
        },
        {
          designStyle: "form",
          title: "健康診断",
          supportText: "2024年度",
          subLabel: "受診日：2024/11/24",
        },
        {
          designStyle: "form",
          title: "健康診断",
          supportText: "2023年度",
          subLabel: "受診日：2023/10/13",
        },
      ];
      return { list };
    },
    template: `
    <div style="display: flex; flex-direction: column; gap: 16px;">
      <ResourceListNoInteraction v-bind="item" v-for="item in list" :key="item.title" />
    </div>`,
  }),
};
