import type { Meta, StoryObj } from "@storybook/vue3";
import BasicList from "../components/BasicList.vue";

const meta = {
  title: "基本リスト",
  component: BasicList,
  tags: ["autodocs"],
  argTypes: {
    tag: {
      control: "radio",
      options: ["ul", "ol"],
    },
    spaceing: {
      control: "radio",
      options: [12, 8, 4],
    },
  },
  args: {
    tag: "ul",
    spaceing: 4,
  },
} satisfies Meta<typeof BasicList>;

export default meta;
type Story = StoryObj<typeof meta>;

/**
 * 順序なしリスト（ul）
 */
export const UnorderedList: Story = {
  args: {
    tag: "ul",
  },
  render: (args) => ({
    components: { BasicList },
    setup: () => ({ args }),
    template: `<BasicList v-bind="args">
      <li>リストアイテム1</li>
      <li>リストアイテム2</li>
      <li>リストアイテム3</li>
    </BasicList>`,
  }),
};

/**
 * 順序ありリスト（ol）
 */
export const OrderedList: Story = {
  args: {
    tag: "ol",
  },
  render: (args) => ({
    components: { BasicList },
    setup: () => ({ args }),
    template: `<BasicList v-bind="args">
      <li>最初のアイテム</li>
      <li>2番目のアイテム</li>
      <li>3番目のアイテム</li>
    </BasicList>`,
  }),
};

/**
 * ネストされたリスト
 */
export const NestedList: Story = {
  args: {
    tag: "ul",
    spaceing: 4,
  },
  render: (args) => ({
    components: { BasicList },
    setup: () => ({ args }),
    template: `<BasicList v-bind="args">
      <li>
        メインアイテム1
        <BasicList tag="ul">
          <li>サブアイテム1-1</li>
          <li>サブアイテム1-2</li>
        </BasicList>
      </li>
      <li>
        メインアイテム2
        <BasicList tag="ul">
          <li>サブアイテム2-1</li>
          <li>
            サブアイテム2-2
            <BasicList tag="ul">
              <li>サブアイテム2-3-1</li>
              <li>サブアイテム2-3-2</li>
            </BasicList>
          </li>
        </BasicList>
      </li>
      <li>メインアイテム3</li>
    </BasicList>`,
  }),
};

/**
 * ネストされた順序ありリスト
 */
export const NestedOrderedList: Story = {
  args: {
    tag: "ol",
    spaceing: 12,
  },
  render: (args) => ({
    components: { BasicList },
    setup: () => ({ args }),
    template: `<BasicList v-bind="args">
      <li>
        プロジェクト計画
        <BasicList tag="ol" :spaceing="8">
          <li>要件分析</li>
          <li>設計</li>
          <li>実装計画</li>
        </BasicList>
      </li>
      <li>
        開発作業
        <BasicList tag="ol" :spaceing="8">
          <li>
            フロントエンド開発
            <BasicList tag="ol" :spaceing="4">
              <li>コンポーネント作成</li>
              <li>スタイリング</li>
              <li>テスト作成</li>
            </BasicList>
          </li>
          <li>
            バックエンド開発
            <BasicList tag="ol" :spaceing="4">
              <li>API設計</li>
              <li>データベース設計</li>
              <li>実装とテスト</li>
            </BasicList>
          </li>
        </BasicList>
      </li>
      <li>
        リリース準備
        <BasicList tag="ol" :spaceing="8">
          <li>統合テスト</li>
          <li>デプロイ</li>
          <li>本番確認</li>
        </BasicList>
      </li>
    </BasicList>`,
  }),
};

/**
 * 2階層入れ子リスト
 */
export const TwoLevelNested: Story = {
  args: {
    tag: "ul",
    spaceing: 12,
  },
  render: (args) => ({
    components: { BasicList },
    setup: () => ({ args }),
    template: `<BasicList v-bind="args">
      <li>
        フロントエンド
        <BasicList tag="ul" :spaceing="8">
          <li>Vue.js</li>
          <li>React</li>
          <li>Angular</li>
        </BasicList>
      </li>
      <li>
        バックエンド
        <BasicList tag="ul" :spaceing="8">
          <li>Node.js</li>
          <li>PHP</li>
          <li>Python</li>
        </BasicList>
      </li>
      <li>データベース</li>
    </BasicList>`,
  }),
};

/**
 * 3階層入れ子リスト
 */
export const ThreeLevelNested: Story = {
  args: {
    tag: "ul",
    spaceing: 12,
  },
  render: (args) => ({
    components: { BasicList },
    setup: () => ({ args }),
    template: `<BasicList v-bind="args">
      <li>
        プログラミング言語
        <BasicList tag="ul" :spaceing="8">
          <li>
            JavaScript
            <BasicList tag="ul" :spaceing="4">
              <li>ES6+</li>
              <li>TypeScript</li>
              <li>Node.js</li>
            </BasicList>
          </li>
          <li>
            Python
            <BasicList tag="ul" :spaceing="4">
              <li>Django</li>
              <li>Flask</li>
              <li>FastAPI</li>
            </BasicList>
          </li>
          <li>Go</li>
        </BasicList>
      </li>
      <li>
        フレームワーク
        <BasicList tag="ul" :spaceing="8">
          <li>
            フロントエンド
            <BasicList tag="ul" :spaceing="4">
              <li>Vue.js</li>
              <li>React</li>
              <li>Svelte</li>
            </BasicList>
          </li>
          <li>CSS フレームワーク</li>
        </BasicList>
      </li>
    </BasicList>`,
  }),
};

/**
 * 混合型入れ子リスト（ul + ol）
 */
export const MixedNestedList: Story = {
  args: {
    tag: "ol",
    spaceing: 12,
  },
  render: (args) => ({
    components: { BasicList },
    setup: () => ({ args }),
    template: `<BasicList v-bind="args">
      <li>
        プロジェクト準備
        <BasicList tag="ul" :spaceing="8">
          <li>要件定義</li>
          <li>技術選定</li>
          <li>環境構築</li>
        </BasicList>
      </li>
      <li>
        開発フェーズ
        <BasicList tag="ol" :spaceing="8">
          <li>設計</li>
          <li>実装</li>
          <li>テスト</li>
        </BasicList>
      </li>
      <li>
        デプロイ
        <BasicList tag="ul" :spaceing="8">
          <li>本番環境準備</li>
          <li>リリース</li>
        </BasicList>
      </li>
    </BasicList>`,
  }),
};

/**
 * 異なるスペーシングの入れ子リスト
 */
export const DifferentSpacingNested: Story = {
  args: {
    tag: "ul",
    spaceing: 12,
  },
  render: (args) => ({
    components: { BasicList },
    setup: () => ({ args }),
    template: `<BasicList v-bind="args">
      <li>
        大カテゴリ（spacing: 12px）
        <BasicList tag="ul" :spaceing="8">
          <li>
            中カテゴリ（spacing: 8px）
            <BasicList tag="ul" :spaceing="4">
              <li>小項目1（spacing: 4px）</li>
              <li>小項目2（spacing: 4px）</li>
              <li>小項目3（spacing: 4px）</li>
            </BasicList>
          </li>
          <li>中カテゴリ2</li>
        </BasicList>
      </li>
      <li>大カテゴリ2</li>
    </BasicList>`,
  }),
};
