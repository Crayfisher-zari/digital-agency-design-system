import type { Meta, StoryObj } from "@storybook/vue3";
import Heading from "../components/Heading.vue";

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories
const meta = {
  title: "見出し",
  component: Heading,
  // This component will have an automatically generated docsPage entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ["autodocs"],
  argTypes: {
    headingLevel: {
      control: "radio",
      options: [1, 2, 3, 4, 5, 6],
      description: "Hxにあたる見出しレベルです",
    },
    designLevel: {
      control: "radio",
      options: ["XXL", "XL", "L", "M", "S", "XS", "XXS"],
      description: "デザイン上のサイズレベルです",
    },
  },
  args: {
    headingLevel: 1,
    designLevel: "L",
  }, // default value
} satisfies Meta<typeof Heading>;

export default meta;
type Story = StoryObj<typeof meta>;

/**
 * 見出しレベル1（デフォルトサイズ）
 */
export const HeadingLevel1: Story = {
  args: {
    headingLevel: 1,
  },
  render: (args) => ({
    components: { Heading },
    setup() {
      return { args };
    },
    template: `<Heading v-bind="args">見出しレベル1のタイトル</Heading>`,
  }),
};

/**
 * 見出しレベル2（デフォルトサイズ）
 */
export const HeadingLevel2: Story = {
  args: {
    headingLevel: 2,
  },
  render: (args) => ({
    components: { Heading },
    setup() {
      return { args };
    },
    template: `<Heading v-bind="args">見出しレベル2のタイトル</Heading>`,
  }),
};

/**
 * 見出しレベル3（デフォルトサイズ）
 */
export const HeadingLevel3: Story = {
  args: {
    headingLevel: 3,
  },
  render: (args) => ({
    components: { Heading },
    setup() {
      return { args };
    },
    template: `<Heading v-bind="args">見出しレベル3のタイトル</Heading>`,
  }),
};

/**
 * 見出しレベル4（デフォルトサイズ）
 */
export const HeadingLevel4: Story = {
  args: {
    headingLevel: 4,
  },
  render: (args) => ({
    components: { Heading },
    setup() {
      return { args };
    },
    template: `<Heading v-bind="args">見出しレベル4のタイトル</Heading>`,
  }),
};

/**
 * 見出しレベル5（デフォルトサイズ）
 */
export const HeadingLevel5: Story = {
  args: {
    headingLevel: 5,
  },
  render: (args) => ({
    components: { Heading },
    setup() {
      return { args };
    },
    template: `<Heading v-bind="args">見出しレベル5のタイトル</Heading>`,
  }),
};

/**
 * 見出しレベル6（デフォルトサイズ）
 */
export const HeadingLevel6: Story = {
  args: {
    headingLevel: 6,
  },
  render: (args) => ({
    components: { Heading },
    setup() {
      return { args };
    },
    template: `<Heading v-bind="args">見出しレベル6のタイトル</Heading>`,
  }),
};

/**
 * デザインレベルXXL
 */
export const DesignLevelXXL: Story = {
  args: {
    headingLevel: 1,
    designLevel: "XXL",
  },
  render: (args) => ({
    components: { Heading },
    setup() {
      return { args };
    },
    template: `<Heading v-bind="args">XXLサイズの見出し</Heading>`,
  }),
};

/**
 * デザインレベルXL
 */
export const DesignLevelXL: Story = {
  args: {
    headingLevel: 1,
    designLevel: "XL",
  },
  render: (args) => ({
    components: { Heading },
    setup() {
      return { args };
    },
    template: `<Heading v-bind="args">XLサイズの見出し</Heading>`,
  }),
};

/**
 * デザインレベルL
 */
export const DesignLevelL: Story = {
  args: {
    headingLevel: 1,
    designLevel: "L",
  },
  render: (args) => ({
    components: { Heading },
    setup() {
      return { args };
    },
    template: `<Heading v-bind="args">Lサイズの見出し</Heading>`,
  }),
};

/**
 * デザインレベルM
 */
export const DesignLevelM: Story = {
  args: {
    headingLevel: 1,
    designLevel: "M",
  },
  render: (args) => ({
    components: { Heading },
    setup() {
      return { args };
    },
    template: `<Heading v-bind="args">Mサイズの見出し</Heading>`,
  }),
};

/**
 * デザインレベルS
 */
export const DesignLevelS: Story = {
  args: {
    headingLevel: 1,
    designLevel: "S",
  },
  render: (args) => ({
    components: { Heading },
    setup() {
      return { args };
    },
    template: `<Heading v-bind="args">Sサイズの見出し</Heading>`,
  }),
};

/**
 * デザインレベルXS
 */
export const DesignLevelXS: Story = {
  args: {
    headingLevel: 1,
    designLevel: "XS",
  },
  render: (args) => ({
    components: { Heading },
    setup() {
      return { args };
    },
    template: `<Heading v-bind="args">XSサイズの見出し</Heading>`,
  }),
};

/**
 * デザインレベルXXS
 */
export const DesignLevelXXS: Story = {
  args: {
    headingLevel: 1,
    designLevel: "XXS",
  },
  render: (args) => ({
    components: { Heading },
    setup() {
      return { args };
    },
    template: `<Heading v-bind="args">XXSサイズの見出し</Heading>`,
  }),
};

/**
 * 見出しレベルとデザインレベルの組み合わせ例
 * 運用上の柔軟性をもたせるため、HTMLの見出しレベルと見た目の大きさを独立して指定できます。
 */
export const CombinationExamples: Story = {
  render: () => ({
    components: { Heading },
    template: `
      <div style="display: flex; flex-direction: column; gap: 20px;">
        <Heading :headingLevel="1" designLevel="XXL">ページタイトル（h1 + XXL）</Heading>
        <Heading :headingLevel="2" designLevel="XL">セクションタイトル（h2 + XL）</Heading>
        <Heading :headingLevel="3" designLevel="L">サブセクションタイトル（h3 + L）</Heading>
        <Heading :headingLevel="4" designLevel="M">小見出し（h4 + M）</Heading>
        <Heading :headingLevel="5" designLevel="S">ミニ見出し（h5 + S）</Heading>
        <Heading :headingLevel="6" designLevel="XS">キャプション見出し（h6 + XS）</Heading>
        <Heading :headingLevel="1" designLevel="XXS">小さなページタイトル（h1 + XXS）</Heading>
      </div>
    `,
  }),
};

/**
 * デフォルトサイズの見出し一覧
 * designLevelを指定しない場合は見出しレベルに沿ったスタイルが適用されます。
 */
export const DefaultSizes: Story = {
  render: () => ({
    components: { Heading },
    template: `
      <div style="display: flex; flex-direction: column; gap: 20px;">
        <Heading :headingLevel="1">見出しレベル1（デフォルトLサイズ）</Heading>
        <Heading :headingLevel="2">見出しレベル2（デフォルトMサイズ）</Heading>
        <Heading :headingLevel="3">見出しレベル3（デフォルトSサイズ）</Heading>
        <Heading :headingLevel="4">見出しレベル4（デフォルトXSサイズ）</Heading>
        <Heading :headingLevel="5">見出しレベル5（デフォルトXXSサイズ）</Heading>
        <Heading :headingLevel="6">見出しレベル6（デフォルトXXSサイズ）</Heading>
      </div>
    `,
  }),
}; 