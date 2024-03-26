import type { Meta, StoryObj } from "@storybook/vue3";
import BasicButtonLink from "../components/BasicButtonLink.vue";

const meta = {
  title: "ボタンリンク",
  component: BasicButtonLink,
  // This component will have an automatically generated docsPage entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ["autodocs"],
  argTypes: {
    label: { control: "text" },
    to: { control: "text" },
    linkTag: {
      control: "text",
    },
    type: {
      control: "radio",
      options: ["primary", "secondary", "tertiary"],
    },
    size: {
      control: "radio",
      options: ["large", "medium", "small", "x-small"],
    },
    disabled: {
      control: "boolean",
    },
  },
  args: {
    label: "ボタン",
    type: "primary",
    size: "medium",
    to: "#!",
    disabled: false,
  },
} satisfies Meta<typeof BasicButtonLink>;

export default meta;
type Story = StoryObj<typeof meta>;

/**
 * プライマリー
 */
export const Primary: Story = {
  args: {
    label: "ボタン",
    type: "primary",
  },
};

/**
 * セカンダリー
 */
export const Secondary: Story = {
  args: {
    label: "ボタン",
    type: "secondary",
  },
};

/**
 * ターシャリ
 */
export const Tertiary: Story = {
  args: {
    label: "ボタン",
    type: "tertiary",
  },
};

/**
 * Largeサイズ
 */
export const Large: Story = {
  args: {
    label: "ボタン",
    size: "large",
  },
};

/**
 * Mediumサイズ
 */
export const Medium: Story = {
  args: {
    label: "ボタン",
    size: "medium",
  },
};

/**
 * Smallサイズ
 */
export const Small: Story = {
  args: {
    label: "ボタン",
    size: "small",
  },
};

/**
 * X-Smallサイズ
 */
export const XSmall: Story = {
  args: {
    label: "ボタン",
    size: "x-small",
  },
};

/**
 * カスタムカラー（プライマリーボタンタイプ）
 */
export const CustomColor1: Story = {
  args: {
    label: "ボタン",
    type: "custom",
    customColor: {
      backgroundColor: "var(--color-status-success)",
      hoverBackgroundColor: "var(--color-forest-800)",
      labelColor: "#FFF",
      hoverLabelColor: "#FFF",
    },
  },
};

/**
 * カスタムカラー（セカンダリーボタンタイプ）
 */
export const CustomColor2: Story = {
  args: {
    label: "ボタン",
    type: "custom",
    customColor: {
      backgroundColor: "var(--color-text-onFill)",
      borderColor: "var(--color-status-warning)",
      hoverBackgroundColor: "var(--color-wood-100)",
      labelColor: "var(--color-status-warning)",
      hoverLabelColor: "var(--color-wood-1000)",
      hoverBorderColor: "var(--color-wood-1000)",
    },
  },
};

/**
 * 非活性時
 */
export const Disabled: Story = {
  args: {
    label: "ボタン",
    disabled: true,
  },
};
