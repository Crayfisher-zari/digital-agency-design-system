import type { Meta, StoryObj } from "@storybook/vue3";
import ResourceListCheckbox from "../components/ResourceListCheckbox.vue";
import { ref } from "vue";

const meta = {
  title: "リソースリスト（リンク）",
  component: ResourceListCheckbox,
  tags: ["autodocs"],
  argTypes: {
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
    label: "セキュリティ",
    title: "令和5年度中小企業等セキュリティ強化推進補助金",
    supportText:
      "サイバーセキュリティを強化することによってサイバーインシデントによって事業継続が困難となる事態を回避",
    subLabel: "補助金番号：A-00000000",
  },
} satisfies Meta<typeof ResourceListCheckbox>;
export default meta;
type Story = StoryObj<typeof meta>;

/**
 * リソースリスト（チェックボックス）
 * リソースリストにチェックボックス機能を持つです。
 */
export const Base: Story = {
  args: {
    label: "セキュリティ",
    title: "令和5年度中小企業等セキュリティ強化推進補助金",
    supportText:
      "サイバーセキュリティを強化することによってサイバーインシデントによって事業継続が困難となる事態を回避",
    subLabel: "補助金番号：A-00000000",
    value: "選択肢",
    name:"test"
  },
  render: (args) => ({
    components: { ResourceListCheckbox },
    setup: () => {
      const checked = ref([]);
      return { checked, ...args };
    },
    template: `
      <div>
      <p class="mb">チェックされたもの：{{ checked }}</p>
        <ResourceListCheckbox
          v-model="checked"
          :name
          :value
        />
      </div>
    `,
  }),
};
