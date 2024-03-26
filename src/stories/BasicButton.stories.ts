import type { Meta, StoryObj } from "@storybook/vue3";
import BasicButton from "../components/BasicButton.vue";

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories
const meta = {
  title: "ボタン",
  component: BasicButton,
  // This component will have an automatically generated docsPage entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ["autodocs"],
  argTypes: {
    label: { control: "text" },
    type: {
      control: "radio",
      options: ["primary", "secondary", "tertiary"],
    },
    disabled: {
      control: "boolean",
    },
    onClick: { action: "clicked" },
  },
  args: {
    label: "ボタン",
    type: "primary",
    disabled: false,
  }, // default value
} satisfies Meta<typeof BasicButton>;

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
