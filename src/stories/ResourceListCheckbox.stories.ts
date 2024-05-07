import type { Meta, StoryObj } from "@storybook/vue3";
import ResourceListCheckbox from "../components/ResourceListCheckbox.vue";
import { ref } from "vue";
import icon3Point from "../assets/images/icon_3point.svg";

const meta = {
  title: "リソースリスト（チェックボックス）",
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
 * リソースリスト（チェックボックス）<br>
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
    modelValue: "選択肢",
    name: "test",
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
          :title
          :label
          :subLabel
          :supportText
        />
      </div>
    `,
  }),
};

/**
 * リソースリスト（チェックボックス）<br>
 * リスト形式の作例
 */
export const List: Story = {
  args: {
    label: "セキュリティ",
    title: "令和5年度中小企業等セキュリティ強化推進補助金",
    supportText:
      "サイバーセキュリティを強化することによってサイバーインシデントによって事業継続が困難となる事態を回避",
    subLabel: "補助金番号：A-00000000",
    value: "選択肢",
    modelValue: "選択肢",
    name: "test",
  },
  render: (args) => ({
    components: { ResourceListCheckbox },
    setup: () => {
      const checked = ref([]);
      const resourceList = [
        {
          label: "デジタルトランスフォーメーション",
          title: "令和5年度中小企業等デジタル化促進補助金",
          supportText:
            "デジタル技術を活用した業務・ビジネスモデルの変革（デジタルトランスフォーメーションの実行）",
          subLabel: "補助金番号：A-00000000",
          value: "選択肢1",
        },
        {
          label: "セキュリティ",
          title: "令和5年度中小企業等セキュリティ強化推進補助金",
          supportText:
            "サイバーセキュリティを強化することによってサイバーインシデントによって事業継続が困難となる事態を回避",
          subLabel: "補助金番号：B-00000000",
          value: "選択肢2",
        },
        {
          label: "スマートワーク",
          title: "令和5年度中小企業等スマートワーク導入支援補助金",
          supportText:
            "スマートワークを導入した業務により生産性の向上や効率化を目指す",
          subLabel: "補助金番号：C-00000000",
          value: "選択肢3",
        },
        {
          label: "子育て",
          title: "令和5年度中小企業等子育て支援補助金",
          supportText:
            "育児休業等の取得を促進し労働者の業務負担軽減や業務効率化を目指す",
          subLabel: "補助金番号：D-00000000",
          value: "選択肢4",
        },
      ];
      return { checked, resourceList, icon3Point, ...args };
    },
    template: `
      <div>
      <p class="mb">チェックされたもの：{{ checked }}</p>
        <ResourceListCheckbox
          v-for="item in resourceList"
          v-model="checked"
          :name
          :value="item.value"
          :title="item.title"
          :label="item.label"
          :subLabel="item.subLabel"
          :supportText="item.supportText"
        >
          <template #endIcon>
            <button class="clearButton">
              <img :src="icon3Point" :width="24" :height="24" />
            </button>
          </template>
        </ResourceListCheckbox>
      </div>
    `,
  }),
};
