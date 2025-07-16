import type { Meta, StoryObj } from "@storybook/vue3";
import Heading from "../components/Heading.vue";
import Icon from "../components/Icon.vue";
import AlertIcon from "../assets/images/icon_banner_info_blue.svg?url";

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
    size: {
      control: "radio",
      options: [64, 57, 45, 36, 32, 28, 24, 20, 18, 16],
      description: "デザイン上のサイズレベルです",
    },
    shoulder: {
      control: "text",
      description: "ショルダー文言です",
    },
    designLevel: {
      table: {
        disable: true,
      },
    },
  },
  args: {
    headingLevel: 1,
    size: 36,
  },
} satisfies Meta<typeof Heading>;

export default meta;
type Story = StoryObj<typeof meta>;
/**
 * ショルダー文言付きの見出し
 */
export const WithShoulder: Story = {
  args: {
    headingLevel: 1,
    shoulder: "ショルダー文言",
  },
  render: (args) => ({
    components: { Heading },
    setup() {
      return { args };
    },
    template: `<Heading v-bind="args">ショルダー文言付きの見出し</Heading>`,
  }),
};

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
    size: 57,
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
    size: 45,
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
    size: 36,
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
    size: 32,
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
    size: 28,
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
    size: 24,
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
    size: 20,
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
 * チップ付きの見出し
 */
export const WithChip: Story = {
  args: {
    headingLevel: 1,
    size: 20,
    hasChip: true,
  },
  render: (args) => ({
    components: { Heading },
    setup() {
      return { args };
    },
    template: `<Heading v-bind="args">チップ付きの見出し</Heading>`,
  }),
};

/**
 *  フロントアイコン付きの見出し
 */
export const WithFrontIcon: Story = {
  args: {
    headingLevel: 1,
    size: 20,
  },
  render: (args) => ({
    components: { Heading, Icon },
    setup() {
      return { args, AlertIcon };
    },
    template: `<Heading v-bind="args"><template #frontIcon><Icon :iconSrc="AlertIcon" color="var(--color-chart-primary)" width="24" height="24" /></template>フロントアイコン付きの見出し</Heading>`,
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
        <Heading :headingLevel="1" :size="57">ページタイトル（h1 + 57）</Heading>
        <Heading :headingLevel="2" :size="45">セクションタイトル（h2 + 45）</Heading>
        <Heading :headingLevel="3" :size="36">サブセクションタイトル（h3 + 36）</Heading>
        <Heading :headingLevel="4" :size="32">小見出し（h4 + 32）</Heading>
        <Heading :headingLevel="5" :size="28">ミニ見出し（h5 + 28）</Heading>
        <Heading :headingLevel="6" :size="24">キャプション見出し（h6 + 24）</Heading>
        <Heading :headingLevel="1" :size="20">小さなページタイトル（h1 + 20）</Heading>
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
